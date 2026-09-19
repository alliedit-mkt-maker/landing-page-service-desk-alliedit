import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { PAGE_REDIRECTS, POST_REDIRECTS } from "./lib/redirects";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => ((m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry)),
    );
  }
  return serverEntryPromise;
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isCatastrophicSsrErrorBody(body: string, responseStatus: number): boolean {
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return false;
  }

  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return false;
  }

  const fields = payload as Record<string, unknown>;
  const expectedKeys = new Set(["message", "status", "unhandled"]);
  if (!Object.keys(fields).every((key) => expectedKeys.has(key))) {
    return false;
  }

  return (
    fields.unhandled === true &&
    fields.message === "HTTPError" &&
    (fields.status === undefined || fields.status === responseStatus)
  );
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isCatastrophicSsrErrorBody(body, response.status)) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return brandedErrorResponse();
}

// A raiz "/" resolve o host sozinha (src/routes/index.tsx), sem reescrita de caminho.
const HOST_REWRITES: Record<string, string> = {};

// Subdomínio de LP -> caminho da LP no domínio raiz.
const LP_SUBDOMAINS: Record<string, string> = {
  "service-desk.alliedit.com.br": "/lp/service-desk",
  "cabeamento.alliedit.com.br": "/lp/cabeamento",
  "headset-callcenter.alliedit.com.br": "/lp/headset-callcenter",
  "rally-bar.alliedit.com.br": "/lp/rally-bar",
  "headsets-poly.alliedit.com.br": "/lp/headsets-poly",
  "headset-poly.alliedit.com.br": "/lp/headsets-poly",
  "headset-logitech.alliedit.com.br": "/lp/headset-logitech",
  "headset-yealink.alliedit.com.br": "/lp/headset-yealink",
  "poly-studio.alliedit.com.br": "/lp/poly-studio",
  "yealink-videoconferencia.alliedit.com.br": "/lp/yealink-videoconferencia",
  "alocacao-ti.alliedit.com.br": "/lp/alocacao-ti",
  "videoconferencia.alliedit.com.br": "/lp/videoconferencia",
};

// Liga no dia da virada: raiz do subdomínio passa a 301 pro domínio raiz em /lp/<nome>.
const LP_REDIRECT_TO_ROOT_DOMAIN = false;

const ROOT_DOMAIN = "alliedit.com.br";
const ROOT_ORIGIN = "https://alliedit.com.br";

function normalizePath(pathname: string): string {
  return pathname.replace(/\/+$/, "") || "/";
}

function redirectTo(url: URL, target: string): Response {
  const location = target.startsWith("http")
    ? new URL(target)
    : new URL(target, ROOT_ORIGIN);
  if (!target.startsWith("http")) {
    location.protocol = url.protocol;
    location.host = url.host;
  }
  location.search = url.search;
  return new Response(null, { status: 301, headers: { location: location.toString() } });
}

function hostRedirect(request: Request): Response | undefined {
  const url = new URL(request.url);
  const host = url.hostname.toLowerCase();
  const path = normalizePath(url.pathname);

  // O endereço temporário /site pode ter sido compartilhado: sempre 301 pro caminho novo.
  if (path === "/site" || path.startsWith("/site/")) {
    const rest = path.slice("/site".length) || "/";
    if (rest !== path) return redirectTo(url, rest);
  }

  if (!host.endsWith(ROOT_DOMAIN)) return undefined;

  // www -> domínio raiz, mesmo caminho.
  if (host === `www.${ROOT_DOMAIN}`) {
    const target = new URL(url.toString());
    target.hostname = ROOT_DOMAIN;
    return new Response(null, { status: 301, headers: { location: target.toString() } });
  }

  // Raiz de subdomínio de LP -> domínio raiz (só depois da virada).
  if (LP_REDIRECT_TO_ROOT_DOMAIN && path === "/") {
    const lpPath = LP_SUBDOMAINS[host];
    if (lpPath) return redirectTo(url, `${ROOT_ORIGIN}${lpPath}`);
  }

  // Tabela de 301 do WordPress: só no domínio raiz.
  if (host === ROOT_DOMAIN) {
    const slug = path.slice(1);
    const page = PAGE_REDIRECTS[slug];
    if (page && normalizePath(page) !== path) return redirectTo(url, page);
    if (slug && !slug.includes("/")) {
      const post = POST_REDIRECTS[slug];
      if (post && `/blog/${post}` !== path) return redirectTo(url, `/blog/${post}`);
    }
  }

  return undefined;
}

// Extra per-host path aliases (deep links inside a subdomain).
// e.g. exemplo.alliedit.com.br/atalho -> renderiza outra rota interna
const HOST_PATH_REWRITES: Record<string, Record<string, string>> = {};

function rewriteRequestForHost(request: Request): Request {
  const url = new URL(request.url);
  const host = url.hostname.toLowerCase();
  const pathAliases = HOST_PATH_REWRITES[host];
  if (pathAliases) {
    const path = url.pathname.replace(/\/+$/, "") || "/";
    const aliased = pathAliases[path];
    if (aliased) {
      url.pathname = aliased;
      return new Request(url.toString(), request);
    }
  }
  const target = HOST_REWRITES[host];
  if (!target) return request;
  // Only rewrite the root path; deep links keep their original path.
  if (url.pathname !== "/" && url.pathname !== "") return request;
  url.pathname = target;
  return new Request(url.toString(), request);
}


export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const redirect = hostRedirect(request);
      if (redirect) return redirect;
      const handler = await getServerEntry();
      const rewritten = rewriteRequestForHost(request);
      const response = await handler.fetch(rewritten, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },
};
