import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/_site/termos-de-uso")({
  head: () =>
    pageHead({
      title: "Termos de Uso | Allied IT",
      description: "Termos e condições para acessar e utilizar os sites da Allied IT: uso, propriedade intelectual e responsabilidades.",
      path: "/termos-de-uso",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage title="Termos de Uso">
      <p>Ao acessar e utilizar os sites da Allied IT, você concorda com os termos e condições descritos abaixo. Caso não concorde com qualquer disposição destes termos, recomendamos que não utilize nossos sites e serviços.</p>

      <h2>Sobre a Allied IT</h2>
      <p>A Allied IT é uma empresa especializada em soluções e serviços gerenciados de Tecnologia da Informação, oferecendo suporte técnico, Service Desk, NOC, SOC, infraestrutura, cloud computing, cibersegurança, field service e projetos de transformação digital para empresas de diversos segmentos.</p>
      <p>Site oficial: <a href="https://alliedit.com.br">alliedit.com.br</a></p>

      <h2>Uso do Site</h2>
      <p>O usuário compromete-se a utilizar o site de forma lícita, ética e em conformidade com a legislação vigente. Não é permitido:</p>
      <ul>
        <li>utilizar o site para fins ilegais ou não autorizados;</li>
        <li>tentar obter acesso não autorizado a sistemas, servidores ou informações;</li>
        <li>copiar, reproduzir, distribuir ou comercializar conteúdos sem autorização prévia;</li>
        <li>utilizar informações do site de forma fraudulenta ou que cause prejuízos à Allied IT ou a terceiros;</li>
        <li>realizar qualquer ação que comprometa a segurança, estabilidade ou disponibilidade do site.</li>
      </ul>

      <h2>Conteúdo e Propriedade Intelectual</h2>
      <p>Todo o conteúdo disponibilizado neste site, incluindo textos, imagens, logotipos, marcas, materiais técnicos, documentos, vídeos, layouts e demais elementos, é de propriedade da Allied IT ou de seus respectivos licenciadores, sendo protegido pela legislação brasileira de direitos autorais e propriedade intelectual. É proibida a reprodução total ou parcial sem autorização expressa.</p>

      <h2>Responsabilidades e Limitações</h2>
      <p>A Allied IT empenha-se para manter as informações do site atualizadas e corretas, porém não garante a ausência de erros, interrupções ou indisponibilidades. As informações disponibilizadas possuem caráter informativo e não substituem análise técnica, diagnóstico especializado ou contratação formal de serviços. A Allied IT não se responsabiliza por decisões tomadas exclusivamente com base nas informações publicadas no site.</p>

      <h2>Links de Terceiros</h2>
      <p>O site poderá conter links para páginas externas de terceiros. A Allied IT não possui controle sobre esses sites e não se responsabiliza por seus conteúdos, políticas, práticas de privacidade ou disponibilidade.</p>

      <h2>Alterações dos Termos</h2>
      <p>A Allied IT reserva-se o direito de modificar estes Termos de Uso a qualquer momento, sem aviso prévio. As alterações passam a produzir efeitos a partir de sua publicação nesta página.</p>

      <h2>Legislação Aplicável</h2>
      <p>Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.</p>

      <h2>Contato</h2>
      <p>E-mail: <a href="mailto:contato@alliedit.com.br">contato@alliedit.com.br</a></p>
      <p>Site: <a href="https://alliedit.com.br">alliedit.com.br</a></p>
    </LegalPage>
  );
}
