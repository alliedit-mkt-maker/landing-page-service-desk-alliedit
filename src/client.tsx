// Entrada mínima: carrega React/StartClient só depois do primeiro quadro pintado (LCP).
requestAnimationFrame(() =>
  setTimeout(() => {
    import("./client-app");
  }, 0),
);

export {};
