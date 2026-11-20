import { normalizeBrDigits } from "@/lib/whatsapp-mask";
import type { UtmData } from "@/lib/utm";

export const DEFAULT_LEAD_FORM_ID = "087109f4-f093-404c-aec9-b4a3f6d763a4";
export const LEAD_WEBHOOK_URL = "https://n8n.noblah.com.br/webhook/allied-form-lead";

export type LeadQuestion = {
  name: string;
  label: string;
  required: boolean;
  options: readonly string[];
};

type LeadFormDefinition = {
  formulario: string;
  product: string;
  questions: readonly LeadQuestion[];
};

const q = (name: string, label: string, options: readonly string[], required = true): LeadQuestion => ({
  name,
  label,
  required,
  options,
});

const NOTEBOOKS = q("quantidade_notebooks", "QUANTOS NOTEBOOKS SUA EMPRESA POSSUI?", ["1 à 20", "21 à 49", "50+"]);
const PURCHASE_PROFILE = q("perfil_de_compra", "Esses equipamentos são para uso da sua empresa ou para revenda?", ["Uso da minha empresa", "Para revender a clientes meus"]);
const HEADSET_QUANTITY = q("quantos_headsets_sua_empresa_precisa", "QUANTOS HEADSETS SUA EMPRESA PRECISA?\u00a0", ["Menos de 10", "11 à 20 unidades", "21 à 50 unidades", "Mais de 50 unidades"]);

/** Perguntas extras copiadas das definições públicas usadas pelos formulários atuais. */
export const LEAD_FORMS: Record<string, LeadFormDefinition> = {
  [DEFAULT_LEAD_FORM_ID]: {
    formulario: "landing_modal",
    product: "Service Desk",
    questions: [NOTEBOOKS],
  },
  "850c4f3f-e264-4cad-920d-26f30bf93cf6": {
    formulario: "field_service",
    product: "Field Service",
    questions: [q("quantas_unidades__enderecos_voce_opera", "QUANTAS UNIDADES / ENDEREÇOS VOCÊ OPERA?", ["1 à 4", "5 à 19", "20 à 49", "50 +"])],
  },
  "5008ff97-cd3c-45b0-905c-1829926eff1e": {
    formulario: "general_contact",
    product: "Contato geral",
    questions: [
      q("sobre_qual_assunto_voce_quer_falar_com_a_gente", "SOBRE QUAL ASSUNTO VOCÊ QUER FALAR COM A GENTE?", ["Suporte e Service Desk (Digital Workspace)", "Nuvem e infraestrutura (Smart Cloud Ops, Infra Core, AWS)", "Segurança (Cyber Shield 360°, Firewall)", "Desenvolvimento de produtos e software (Product Engineering)", "Inteligência Artificial", "Microsoft 365", "Videoconferência e headsets", "Outro assunto"]),
      q("quantos_funcionarios_tem_a_sua_empresa", "QUANTOS FUNCIONÁRIOS TEM A SUA EMPRESA?", ["Até 20", "21 a 100", "101 a 500", "Mais de 500"]),
    ],
  },
  "3b4b53a7-de50-4fdf-8aa4-06c859a28c87": {
    formulario: "cyber_shield",
    product: "Cyber Shield 360°",
    questions: [
      q("qual_solucao_de_seguranca_voce_procura", "QUAL SOLUÇÃO DE SEGURANÇA VOCÊ PROCURA?", ["Monitoramento e resposta a incidentes (SOC)", "Teste de invasão (pentest)", "Simulação de phishing", "Adequação à LGPD e consultoria", "Firewall e proteção técnica", "Ainda não sei"]),
      q("quantos_colaboradores_sua_empresa_possui", "QUANTOS COLABORADORES SUA EMPRESA POSSUI?", ["1 à 50", "51 à 200", "201 à 500", "500+"]),
    ],
  },
  "237e8c94-dc21-4348-bc2f-f60efff214d6": {
    formulario: "smart_cloud_ops",
    product: "Smart Cloud Ops",
    questions: [
      q("o_que_voce_precisa_hoje", "O QUE VOCÊ PRECISA HOJE?", ["Migrar para a nuvem", "Backup e proteção", "Reduzir custos de nuvem (FinOps)", "Gerenciar meu ambiente Azure/M365", "Ainda não sei"]),
      q("onde_estao_os_seus_sistemas", "ONDE ESTÃO OS SEUS SISTEMAS?", ["Tudo em servidor local", "Parte na nuvem", "Já estou na nuvem", "Ainda não sei"]),
    ],
  },
  "e7c97bc8-1dbd-44a7-ba36-2bcec71e97a3": {
    formulario: "infra_core",
    product: "Infra Core",
    questions: [
      q("qual_solucao_de_infra_voce_procura", "QUAL SOLUÇÃO DE INFRA VOCÊ PROCURA?", ["Rede Wi-Fi e mapeamento de calor (heatmap)", "Cabeamento estruturado", "Data center e segurança física", "Monitoramento com CFTV", "Projeto completo, do planejamento à execução", "Ainda não sei"]),
      q("em_que_fase_esta_o_seu_projeto", "EM QUE FASE ESTÁ O SEU PROJETO?", ["Ainda estou avaliando", "Preciso do projeto e da execução", "Já tenho o projeto e preciso da execução", "Preciso de uma visita diagnóstica"]),
    ],
  },
  "c7fd2956-e583-4353-b345-9fbdb13feafd": {
    formulario: "product_engineering",
    product: "Product Engineering",
    questions: [
      q("que_tipo_de_projeto_voce_quer_desenvolver", "QUE TIPO DE PROJETO VOCÊ QUER DESENVOLVER?", ["Sistema ou aplicativo sob medida", "Automação de processos", "Integração entre sistemas", "IA aplicada à minha operação", "Ainda não sei, preciso de um diagnóstico"]),
      q("como_esta_o_seu_projeto_hoje", "COMO ESTÁ O SEU PROJETO HOJE?", ["Tenho uma ideia, mas nada definido", "Tenho o problema mapeado", "Já tenho o escopo definido", "Preciso melhorar ou substituir um sistema que já existe"]),
    ],
  },
  "eac0f8f3-946d-4477-8e30-c77fbefd3a26": {
    formulario: "inteligencia_artificial",
    product: "Inteligência Artificial",
    questions: [
      q("como_voce_quer_usar_ia_na_sua_empresa", "COMO VOCÊ QUER USAR IA NA SUA EMPRESA?", ["Automatizar rotinas e processos", "Atendimento ou assistentes inteligentes", "Análise de dados e relatórios", "Integrar IA aos sistemas que já uso", "Ainda não sei onde usar"]),
      q("que_tipo_de_apoio_voce_procura_em_ia", "QUE TIPO DE APOIO VOCÊ PROCURA EM IA?", ["Consultoria para definir onde aplicar", "Prova de conceito (POC) ou MVP", "Solução completa em produção", "Equipe dedicada (squad)", "Ainda não sei"]),
    ],
  },
  "aaf63884-47ee-489c-b70f-103f806e0c60": {
    formulario: "digital_workspace",
    product: "Digital Workspace",
    questions: [
      NOTEBOOKS,
      q("escolha_a_melhor_opcao_para_o_seu_cenario", "ESCOLHA A MELHOR OPÇÃO PARA O SEU CENÁRIO", ["Service Desk", "Field Service", "Os dois", "Ainda não sei"]),
    ],
  },
  "0b0c7bb4-c1d3-4660-9afb-764dcd4f0269": {
    formulario: "videoconferencia",
    product: "Videoconferência",
    questions: [
      q("qual_marca_voce_tem_interesse", "QUAL MARCA VOCÊ TEM INTERESSE?", ["Yealink", "Logitech", "Poly (HP)", "Ainda não sei, quero ajuda para escolher"]),
      q("quantas_salas_voce_quer_equipar", "QUANTAS SALAS VOCÊ QUER EQUIPAR?", ["1 sala", "2 a 5 salas", "6 a 10 salas", "Mais de 10 salas"]),
      q("qual_tamanho_da_sala", "QUAL TAMANHO DA SALA?", ["Sala pequena (até 6 pessoas)", "Sala média (7 a 12 pessoas)", "Sala grande (mais de 12 pessoas)", "Várias salas de tamanhos diferentes e Não sei"]),
    ],
  },
  "c1683423-b13f-4a72-b12a-f2f151ccd3a4": {
    formulario: "headsets",
    product: "Headsets",
    questions: [
      q("qual_marca_de_headset_voce_tem_interesse", "QUAL MARCA DE HEADSET VOCÊ TEM INTERESSE?", ["Yealink", "Logitech", "Poly", "Ainda não sei, quero ajuda para escolher"]),
      q("quantas_pessoas_voce_precisa_equipar", "QUANTAS PESSOAS VOCÊ PRECISA EQUIPAR?", ["1 a 10 pessoas", "11 a 50 pessoas", "51 a 200 pessoas", "Mais de 200 pessoas"]),
    ],
  },
  "b032112e-cd9e-4af7-a157-25ef619c2a79": {
    formulario: "microsoft365",
    product: "Microsoft 365",
    questions: [
      q("qual_solucao_voce_tem_interesse", "QUAL SOLUÇÃO VOCÊ TEM INTERESSE?", ["Licenciamento do Microsoft 365", "Migração de e-mail e arquivos para o Microsoft 365", "Backup do Microsoft 365", "Segurança e proteção contra ameaças", "Gestão de dispositivos", "Copilot 365", "Ainda não sei, quero ajuda para escolher"]),
      q("quantos_usuarios_licencas_sua_empresa_precisa", "QUANTOS USUÁRIOS (LICENÇAS) SUA EMPRESA PRECISA?", ["1 a 10 usuários", "11 a 50 usuários", "51 a 200 usuários", "201 a 500 usuários", "Mais de 500 usuários"]),
    ],
  },
  "4a305e47-1445-40f2-b9c4-b1beb6850c1e": {
    formulario: "aws",
    product: "AWS",
    questions: [
      q("o_que_voce_precisa_na_aws", "O QUE VOCÊ PRECISA NA AWS?", ["Migrar meu ambiente atual para a AWS", "Gerenciar e monitorar um ambiente que já está na AWS", "Reduzir os custos da AWS que já uso", "Avaliar se a AWS faz sentido para a minha empresa", "Outro assunto"]),
      q("onde_estao_os_seus_sistemas_hoje", "ONDE ESTÃO OS SEUS SISTEMAS HOJE?", ["Servidor físico próprio (on-premises)", "Outra nuvem (Azure, Google Cloud etc.)", "Já estou na AWS", "Hospedagem tradicional", "Não sei"]),
      q("o_que_voce_pretende_colocar_na_nuvem", "O QUE VOCÊ PRETENDE COLOCAR NA NUVEM?", ["Sistema de gestão (ERP)", "Site ou aplicação web", "Servidores de arquivos e backup", "Banco de dados", "Vários sistemas", "Ainda não defini"]),
    ],
  },
  "164db0e1-44bd-4a9b-8b62-80f0d111471b": {
    formulario: "firewall",
    product: "Firewall",
    questions: [
      q("como_podemos_ajudar_com_o_firewall_da_sua_empresa", "COMO PODEMOS AJUDAR COM O FIREWALL DA SUA EMPRESA?", ["Firewall novo (equipamento, instalação e monitoramento)", "Monitoramento de um firewall que eu já tenho", "Trocar ou atualizar meu firewall atual", "Avaliar a segurança da minha rede", "Ainda não sei"]),
      q("quantas_pessoas_usam_a_rede_da_empresa", "QUANTAS PESSOAS USAM A REDE DA EMPRESA?", ["Até 25 pessoas", "26 a 100 pessoas", "101 a 300 pessoas", "Mais de 300 pessoas"]),
    ],
  },
  "aaf63ed6-edf2-45ed-8434-54c3d6d4df0d": {
    formulario: "lp_videoconferencia",
    product: "Videoconferência",
    questions: [
      q("qual_modelo_de_camera_voce_deseja", "QUAL MODELO DE CÂMERA VOCÊ DESEJA?", ["Yealink MeetingBar A40", "Yealink MeetingBar A50", "Logitech Rally Bar Mini", "Logitech Rally Bar", "Poly (HP) Studio V12", "Poly (HP) Studio V52", "Poly (HP) Studio X52"], false),
      PURCHASE_PROFILE,
    ],
  },
  "854dbac0-c313-4ef4-8f50-8935b4e76bb8": {
    formulario: "lp_yealink_videoconferencia",
    product: "Videoconferência",
    questions: [
      q("qual_modelo_de_camera_yealink_voce_deseja", "QUAL MODELO DE CÂMERA YEALINK VOCÊ DESEJA?", ["MeetingBar A40", "MVC S40 / ZVC S40", "MeetingBar A50", "MVC S50 / ZVC S50"], false),
      PURCHASE_PROFILE,
    ],
  },
  "b8f8c9e7-cdd4-4ef4-904f-3bb5c3e9c812": {
    formulario: "lp_rally_bar",
    product: "Videoconferência",
    questions: [q("qual_modelo_voce_deseja", "QUAL MODELO VOCÊ DESEJA?", ["Rally Bar Mini", "Rally Bar"]), PURCHASE_PROFILE],
  },
  "8f281409-2949-45fc-a83f-b7d643b42f54": {
    formulario: "lp_poly_studio",
    product: "Videoconferência",
    questions: [
      q("qual_camera_poly_voce_deseja", "QUAL CÂMERA POLY VOCÊ DESEJA?", ["Poly Studio V12", "Poly Studio X32", "Poly Studio V52", "Poly Studio X52"], false),
      PURCHASE_PROFILE,
    ],
  },
  "94687453-f2a4-4c66-b1b1-2d51f14ded16": {
    formulario: "lp_headsets_poly",
    product: "Headsets",
    questions: [HEADSET_QUANTITY, PURCHASE_PROFILE],
  },
  "d1b524ee-050e-4c16-97fb-ced65a636365": {
    formulario: "lp_headset_yealink",
    product: "Headsets",
    questions: [HEADSET_QUANTITY, PURCHASE_PROFILE],
  },
  "abe5cb76-6159-4d92-b15d-6cfbe2f400a5": {
    formulario: "lp_headset_logitech",
    product: "Headsets",
    questions: [HEADSET_QUANTITY, PURCHASE_PROFILE],
  },
  "5e99da13-3800-4581-b2ea-0ea2fe2de8f4": {
    formulario: "lp_headset_callcenter",
    product: "Headsets",
    questions: [HEADSET_QUANTITY, PURCHASE_PROFILE],
  },
  "f70f4c9f-6aba-4792-83d4-ee3dc6de28dd": {
    formulario: "lp_alocacao_ti",
    product: "Alocação de Profissionais",
    questions: [q("qual_perfil_voce_precisa_alocar", "QUAL PERFIL VOCÊ PRECISA ALOCAR?", ["Desenvolvedor", "Gerente de Projeto", "Product Owner", "Product Manager", "Scrum Master", "Outro"])],
  },
  "55119813-69a4-4a8e-be94-69d84b3f7476": {
    formulario: "lp_cabeamento",
    product: "Cabeamento",
    questions: [q("quantos_pontos_de_rede", "QUANTOS PONTOS DE REDE?", ["Menos de 10", "10 a 50", "Mais de 50", "Não sei ainda"])],
  },
};

export function getLeadForm(formId?: string) {
  return LEAD_FORMS[formId || DEFAULT_LEAD_FORM_ID] ?? LEAD_FORMS[DEFAULT_LEAD_FORM_ID]!;
}

export type LeadPayloadInput = {
  submissionId: string;
  nome: string;
  empresa: string;
  email: string;
  whatsapp: string;
  produto: string;
  formulario: string;
  pagina: string;
  utms: UtmData;
  respostas: Record<string, string>;
};

export function buildLeadPayload(input: LeadPayloadInput) {
  return {
    submission_id: input.submissionId,
    nome: input.nome,
    empresa: input.empresa,
    email: input.email,
    whatsapp: normalizeBrDigits(input.whatsapp),
    produto: input.produto,
    formulario: input.formulario,
    pagina: input.pagina,
    utm_source: input.utms.utm_source ?? "",
    utm_medium: input.utms.utm_medium ?? "",
    utm_campaign: input.utms.utm_campaign ?? "",
    utm_content: input.utms.utm_content ?? "",
    utm_term: input.utms.utm_term ?? "",
    gclid: input.utms.gclid ?? "",
    fbclid: input.utms.fbclid ?? "",
    respostas: input.respostas,
    website: "",
  };
}
