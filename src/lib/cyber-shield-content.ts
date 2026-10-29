export const CYBER_PENDING = "[PREENCHER]";

// Existing marketing copy is not a confirmed portfolio or contractual SLA.
export const CYBER_METRICS = [
  { label: "Monitoramento", value: CYBER_PENDING },
  { label: "Tempo de resposta", value: CYBER_PENDING },
  { label: "Clientes atendidos", value: CYBER_PENDING },
  { label: "Anos de mercado", value: CYBER_PENDING },
];

export const CYBER_LAYERS = [
  { name: "Pessoas", service: "Conscientização e phishing test", confirmation: CYBER_PENDING },
  { name: "E-mail e Microsoft 365", service: "Serviço e escopo de proteção", confirmation: CYBER_PENDING },
  { name: "Nuvem", service: "Serviço e escopo de proteção", confirmation: CYBER_PENDING },
  { name: "Aplicações e dados", service: "Pentest, hardening e consultoria", confirmation: CYBER_PENDING },
  { name: "Identidade e acessos", service: "Serviço e escopo de proteção", confirmation: CYBER_PENDING },
  { name: "Endpoint", service: "EDR, XDR, hardening e Intune", confirmation: CYBER_PENDING },
  { name: "Rede e perímetro", service: "Firewalls e monitoramento", confirmation: CYBER_PENDING },
];

export const CYBER_METHOD = [
  { title: "Diagnóstico", text: "Entender ativos, exposição e prioridades antes de escolher controles.", outputs: ["Mapa de ativos e riscos", "Plano de prioridades"] },
  { title: "Implantação", text: "Organizar controles e responsabilidades com uma transição planejada.", outputs: ["Plano de implantação", "Procedimentos de acionamento"] },
  { title: "Operação", text: "Acompanhar sinais de risco e tratar incidentes conforme o escopo acordado.", outputs: ["Registro de ocorrências", "Relatório de acompanhamento"] },
  { title: "Melhoria contínua", text: "Usar aprendizados e testes para revisar a defesa e reduzir exposição.", outputs: ["Revisão de riscos", "Plano de evolução"] },
];

export const CYBER_START = [
  { title: "Conversa inicial", text: "Conte o que sua operação precisa proteger e quais são suas preocupações." },
  { title: "Diagnóstico", text: "Delimite o ambiente, as prioridades e os pontos que precisam de avaliação." },
  { title: "Proposta", text: "Alinhe escopo, responsabilidades, investimento e critérios de acompanhamento." },
  { title: "Início da operação", text: "Organize acessos, responsáveis e a transição para o atendimento acordado." },
];

export const CYBER_FAQ = [
  ["O que é um SOC e para que serve?", "SOC é um centro de operações de segurança: pessoas, processos e ferramentas que acompanham sinais de ameaça. Ele ajuda a investigar alertas e coordenar a resposta a incidentes, de acordo com a cobertura e as responsabilidades definidas para cada ambiente."],
  ["Qual a diferença entre SOC, MDR e antivírus?", "O antivírus é uma ferramenta de proteção de dispositivos. O SOC é a estrutura que analisa eventos e organiza a resposta. MDR é um serviço gerenciado de detecção e resposta, que pode combinar especialistas e diferentes ferramentas. Os três podem se complementar; o escopo varia entre soluções."],
  ["O que é um teste de invasão (pentest) e quando fazer?", "Pentest é uma avaliação autorizada que simula tentativas de ataque para identificar falhas exploráveis. Faz sentido após mudanças importantes, antes de colocar aplicações críticas em uso e periodicamente conforme o risco. O teste precisa de escopo, autorização e cuidados para não prejudicar a operação."],
  ["Firewall resolve tudo? Por que preciso de camadas?", "O firewall controla conexões e tráfego, mas não cobre sozinho todas as formas de ataque. Uma mensagem enganosa, uma senha comprometida ou uma falha em uma aplicação exigem outros controles. Camadas complementares reduzem a dependência de uma única proteção."],
  ["O que é a LGPD e como a segurança da informação se relaciona com ela?", "A LGPD é a lei brasileira que regula o tratamento de dados pessoais. Medidas de segurança ajudam a proteger esses dados contra acessos indevidos, perdas e vazamentos. A adequação também envolve finalidade, direitos dos titulares e processos internos, não apenas tecnologia ou a compra de uma ferramenta."],
  ["Por onde começar se nunca avaliei minha segurança?", "Comece identificando os dados e sistemas essenciais, quem tem acesso e como são protegidos hoje. Depois, avalie riscos, cópias de segurança, atualizações e procedimentos para incidentes. Um diagnóstico com prioridades ajuda a organizar ações viáveis, sem começar pela compra de um produto isolado."],
];