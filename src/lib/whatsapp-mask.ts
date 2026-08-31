/**
 * Máscara + validação do campo de WhatsApp dos formulários HubSpot embedados.
 * Utilitário único, reusado por todas as landing pages (via ContactModal).
 *
 * - Aplica máscara brasileira: (11) 98765-4321 / (11) 3456-7890
 * - Aceita colagem com +55 / 55 na frente
 * - Bloqueia envio inválido e mostra mensagem no estilo do HubSpot
 * - No envio, manda apenas os dígitos limpos, sem DDI: "11987654321"
 */

const FIELD_NAME = "hs_whatsapp_phone_number";
const ERROR_TEXT = "Digite um WhatsApp válido com DDD, ex: (11) 98765-4321";
const MAX_WAIT_MS = 15000;
const ERROR_CLASS = "allied-wa-error";

export function onlyDigits(value: string): string {
  return (value || "").replace(/\D+/g, "");
}

/** Normaliza para no máximo 11 dígitos nacionais, descartando o DDI 55. */
export function normalizeBrDigits(value: string): string {
  let d = onlyDigits(value);
  if (d.length > 11 && d.startsWith("55")) d = d.slice(2);
  return d.slice(0, 11);
}

export function formatBrPhone(value: string): string {
  const d = normalizeBrDigits(value);
  if (!d) return "";
  if (d.length <= 2) return `(${d}`;
  const ddd = d.slice(0, 2);
  const rest = d.slice(2);
  if (rest.length <= 4) return `(${ddd}) ${rest}`;
  if (rest.length <= 8) return `(${ddd}) ${rest.slice(0, 4)}-${rest.slice(4)}`;
  return `(${ddd}) ${rest.slice(0, 5)}-${rest.slice(5)}`;
}

export function isValidBrPhone(value: string): boolean {
  const d = normalizeBrDigits(value);
  if (d.length !== 10 && d.length !== 11) return false;
  const ddd = Number(d.slice(0, 2));
  if (!(ddd >= 11 && ddd <= 99)) return false;
  if (d.length === 11 && d[2] !== "9") return false;
  return true;
}

function countDigitsBefore(text: string, pos: number): number {
  return onlyDigits(text.slice(0, pos)).length;
}

function positionAfterDigits(text: string, digitCount: number): number {
  if (digitCount <= 0) return 0;
  let seen = 0;
  for (let i = 0; i < text.length; i++) {
    if (/\d/.test(text[i]!)) {
      seen++;
      if (seen === digitCount) return i + 1;
    }
  }
  return text.length;
}

function showError(input: HTMLInputElement) {
  const doc = input.ownerDocument;
  const parent = input.parentElement;
  if (!parent) return;
  if (parent.querySelector(`.${ERROR_CLASS}`)) return;
  const ul = doc.createElement("ul");
  ul.className = `no-list hs-error-msgs inputs-list ${ERROR_CLASS}`;
  ul.setAttribute("role", "alert");
  const li = doc.createElement("li");
  const label = doc.createElement("label");
  label.className = "hs-error-msg hs-main-font-element";
  label.textContent = ERROR_TEXT;
  li.appendChild(label);
  ul.appendChild(li);
  parent.appendChild(ul);
}

function clearError(input: HTMLInputElement) {
  const parent = input.parentElement;
  parent?.querySelector(`.${ERROR_CLASS}`)?.remove();
}

function enhanceInput(input: HTMLInputElement) {
  if (input.dataset["alliedWaMask"] === "1") return;
  input.dataset["alliedWaMask"] = "1";

  input.setAttribute("inputmode", "numeric");
  input.setAttribute("autocomplete", "tel");
  input.setAttribute("placeholder", input.getAttribute("placeholder") || "(11) 98765-4321");
  input.setAttribute("maxlength", "16");

  let suppressMask = false;

  const apply = () => {
    if (suppressMask) return;
    const before = input.value;
    const caret = input.selectionStart ?? before.length;
    const digitsBefore = countDigitsBefore(before, caret);
    const masked = formatBrPhone(before);
    if (masked !== before) {
      input.value = masked;
      try {
        const next = positionAfterDigits(masked, digitsBefore);
        input.setSelectionRange(next, next);
      } catch {
        /* noop */
      }
    }
    if (isValidBrPhone(input.value)) clearError(input);
  };

  input.addEventListener("input", apply);
  input.addEventListener("paste", () => setTimeout(apply, 0));
  input.addEventListener("blur", () => {
    apply();
    if (input.value && !isValidBrPhone(input.value)) showError(input);
  });

  apply();

  const form = input.form;
  if (form && form.dataset["alliedWaGuard"] !== "1") {
    form.dataset["alliedWaGuard"] = "1";
    form.addEventListener(
      "submit",
      (e) => {
        if (!isValidBrPhone(input.value)) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          showError(input);
          input.focus();
          return;
        }
        clearError(input);
        // Envia apenas os dígitos limpos, sem DDI e sem máscara.
        suppressMask = true;
        const digits = normalizeBrDigits(input.value);
        const nativeSetter = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          "value",
        )?.set;
        if (nativeSetter) nativeSetter.call(input, digits);
        else input.value = digits;
        input.dispatchEvent(new Event("input", { bubbles: true }));
        input.dispatchEvent(new Event("change", { bubbles: true }));
        suppressMask = false;
      },
      true,
    );
  }
}

function findInput(root: Element | Document | null): HTMLInputElement | null {
  if (!root) return null;
  const direct = (root as Element).querySelector?.(
    `input[name="${FIELD_NAME}"]`,
  ) as HTMLInputElement | null;
  if (direct) return direct;
  const iframes = (root as Element).querySelectorAll?.("iframe") ?? [];
  for (const frame of Array.from(iframes) as HTMLIFrameElement[]) {
    try {
      const doc = frame.contentDocument;
      const found = doc?.querySelector(`input[name="${FIELD_NAME}"]`) as HTMLInputElement | null;
      if (found) return found;
    } catch {
      /* cross-origin, ignora */
    }
  }
  return null;
}

/**
 * Observa o container do embed até o campo aparecer e aplica máscara/validação.
 * Retorna uma função de cleanup. Nunca lança: se não achar, a página segue normal.
 */
export function setupWhatsappMask(container: HTMLElement | null): () => void {
  if (typeof window === "undefined" || !container) return () => {};

  let stopped = false;
  const observers: MutationObserver[] = [];
  let interval: ReturnType<typeof setInterval> | undefined;
  let timeout: ReturnType<typeof setTimeout> | undefined;

  const stop = () => {
    stopped = true;
    observers.forEach((o) => o.disconnect());
    observers.length = 0;
    if (interval) clearInterval(interval);
    if (timeout) clearTimeout(timeout);
  };

  const tryApply = () => {
    if (stopped) return;
    try {
      const input = findInput(container);
      if (input) {
        enhanceInput(input);
        // observa o form do input para reaplicar se o HubSpot re-renderizar
        const doc = input.ownerDocument;
        const target = input.form ?? doc.body;
        if (target && !(target as HTMLElement).dataset["alliedWaObserved"]) {
          (target as HTMLElement).dataset["alliedWaObserved"] = "1";
          const mo = new MutationObserver(() => {
            const again = findInput(container);
            if (again) enhanceInput(again);
          });
          mo.observe(target, { childList: true, subtree: true });
          observers.push(mo);
        }
        if (interval) clearInterval(interval);
        if (timeout) clearTimeout(timeout);
      }
    } catch {
      /* noop */
    }
  };

  const mo = new MutationObserver(tryApply);
  mo.observe(container, { childList: true, subtree: true });
  observers.push(mo);

  interval = setInterval(tryApply, 300);
  timeout = setTimeout(stop, MAX_WAIT_MS);
  tryApply();

  return stop;
}
