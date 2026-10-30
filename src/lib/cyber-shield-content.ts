export const CYBER_METHOD = [
  { title: "Diagnóstico", text: "Analisar o ambiente e usar testes para identificar riscos e orientar as prioridades de segurança." },
  { title: "Implantação", text: "Aplicar a proteção e a blindagem técnica adequadas ao ambiente, com configuração de sistemas e dispositivos." },
  { title: "Operação", text: "Conectar monitoramento, análise de ameaças e resposta a incidentes ao cuidado contínuo com a infraestrutura." },
  { title: "Melhoria contínua", text: "Transformar aprendizados dos testes e da operação em ajustes na defesa e na cultura de segurança." },
];

export const CYBER_SIGNALS = [
  "Senhas compartilhadas entre colaboradores.",
  "Acessos que ninguém revisa.",
  "Contas antigas que continuam ativas.",
  "Falta de um plano de resposta a incidentes.",
  "Cópias de segurança nunca testadas.",
  "Equipe sem orientação sobre phishing.",
  "Dispositivos sem acompanhamento de segurança.",
  "Vulnerabilidades identificadas sem tratamento.",
];

export const CYBER_COMPARISON = [
  { topic: "Visão do ambiente", isolated: "Alertas separados dificultam a leitura do contexto.", integrated: "Monitoramento e proteção se complementam na análise das ameaças." },
  { topic: "Resposta a incidentes", isolated: "Cada ferramenta mostra uma parte do problema.", integrated: "Análise e atuação técnica se conectam para orientar a resposta." },
  { topic: "Responsabilidade", isolated: "O uso de ferramentas, sozinho, não define quem deve agir.", integrated: "Operação e consultoria ajudam a orientar os cuidados com o ambiente." },
  { topic: "Evolução da segurança", isolated: "Testes e ajustes podem ficar desconectados da rotina.", integrated: "Simulações e conscientização alimentam a melhoria da defesa." },
  { topic: "Esforço de gestão", isolated: "Controles dispersos exigem conciliar informações separadas.", integrated: "As frentes de segurança são consideradas em conjunto, sem depender de uma ferramenta isolada." },
];

export const CYBER_FAQ = [
  ["O que é um SOC e para que serve?", "SOC é um centro de operações de segurança: pessoas, processos e ferramentas que acompanham sinais de ameaça. Ele ajuda a investigar alertas e coordenar a resposta a incidentes, de acordo com a cobertura e as responsabilidades definidas para cada ambiente."],
  ["Qual a diferença entre SOC, MDR e antivírus?", "O antivírus é uma ferramenta de proteção de dispositivos. O SOC é a estrutura que analisa eventos e organiza a resposta. MDR é um serviço gerenciado de detecção e resposta, que pode combinar especialistas e diferentes ferramentas. Os três podem se complementar; o escopo varia entre soluções."],
  ["O que é um teste de invasão (pentest)?", "Pentest é uma avaliação autorizada que simula tentativas de ataque para identificar falhas exploráveis. O objetivo é entender como uma vulnerabilidade poderia afetar o ambiente e orientar sua correção. O teste precisa de escopo, autorização e cuidados para não prejudicar a operação."],
  ["Firewall resolve tudo? Por que segurança em camadas?", "O firewall controla conexões e tráfego, mas não cobre sozinho todas as formas de ataque. Uma mensagem enganosa, uma senha comprometida ou uma falha em uma aplicação exigem outros controles. Camadas complementares reduzem a dependência de uma única proteção."],
  ["Por onde começar se nunca avaliei minha segurança?", "Comece identificando os dados e sistemas essenciais, quem tem acesso e como são protegidos hoje. Depois, avalie riscos, cópias de segurança, atualizações e procedimentos para incidentes. Um diagnóstico com prioridades ajuda a organizar ações viáveis, sem começar pela compra de um produto isolado."],
];