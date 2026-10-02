import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/_site/politica-de-privacidade")({
  head: () =>
    pageHead({ social: "Que dados coletamos, para quê, e quais são os seus direitos.",
      title: "Política de Privacidade | Allied IT",
      description: "Como a Allied IT coleta, usa e protege suas informações pessoais e como utilizamos cookies neste site.",
      path: "/politica-de-privacidade",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage title="Política de Privacidade">
      <p><em>Última atualização: outubro de 2026</em></p>
      <h2>1. Quem somos</h2>
      <p>Esta Política de Privacidade se aplica ao site alliedit.com.br, operado por J & M Soluções em Tecnologia LTDA ("Allied IT"), inscrita no CNPJ 32.310.131/0001-61, com sede na Alameda Tocantins, 75 - 15º Andar - Alphaville Industrial, Barueri - SP, CEP 06.455-020.</p>
      <h2>2. Quais dados coletamos</h2>
      <p>Coletamos os dados que você nos fornece voluntariamente ao preencher formulários no site, como os de solicitação de orçamento e os das páginas de campanha (landing pages). Esses formulários costumam coletar nome, e-mail e telefone; alguns, como o da página de contato, também coletam empresa e mensagem.</p>
      <p>Não coletamos dados por meio de cadastro de usuário, login, compras ou assinatura de newsletter, pois o site não oferece essas funcionalidades.</p>
      <h2>3. Cookies e ferramentas de terceiros</h2>
      <p>Usamos cookies e tecnologias semelhantes para entender como o site é usado e para exibir anúncios. As ferramentas em uso hoje são:</p>
      <ul>
      <li>Google Analytics: mede visitas e comportamento de navegação no site.</li>
      <li>Google Ads: mede o resultado de campanhas de anúncios.</li>
      <li>Meta (Facebook e Instagram): mede o resultado de campanhas de anúncios nessas plataformas.</li>
      <li>LinkedIn: mede o resultado de campanhas de anúncios na plataforma.</li>
      <li>Microsoft Clarity: registra como os visitantes navegam no site (cliques, rolagem), para melhorias de usabilidade.</li>
      <li>Google Maps: exibe o mapa de localização na página de contato, podendo registrar cookies do Google para esse fim.</li>
      </ul>
      <p>Você pode bloquear ou apagar esses cookies diretamente nas configurações do seu navegador, mas isso pode afetar o funcionamento de algumas partes do site.</p>
      <h2>4. Por que usamos seus dados</h2>
      <p>Usamos os dados coletados nos formulários para responder à sua solicitação de contato ou orçamento, e os dados de cookies para entender o uso do site e medir a performance de nossas campanhas de marketing.</p>
      <h2>5. Com quem compartilhamos dados</h2>
      <p>Compartilhamos dados com os provedores das ferramentas listadas no item 3 (Google, Meta, LinkedIn, Microsoft), na medida necessária para seu funcionamento. Não vendemos nem compartilhamos seus dados com terceiros para outras finalidades.</p>
      <h2>6. Por quanto tempo guardamos seus dados</h2>
      <p>Guardamos os dados de formulário de contato pelo tempo necessário para atender sua solicitação e cumprir obrigações legais. Dados de cookies seguem o prazo de retenção padrão de cada ferramenta listada no item 3.</p>
      <h2>7. Seus direitos</h2>
      <p>De acordo com a Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem direito a:</p>
      <ul>
      <li>Confirmar se tratamos seus dados e acessá-los;</li>
      <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
      <li>Solicitar a exclusão dos seus dados;</li>
      <li>Revogar o consentimento dado, quando aplicável;</li>
      <li>Solicitar a portabilidade dos seus dados;</li>
      <li>Obter informações sobre com quem compartilhamos seus dados.</li>
      </ul>
      <p>Para exercer esses direitos ou tirar dúvidas sobre esta política, entre em contato pelo e-mail <a href="mailto:contato@alliedit.com.br">contato@alliedit.com.br</a>.</p>
      <h2>8. Segurança</h2>
      <p>Adotamos medidas técnicas e organizacionais para proteger os dados que coletamos contra acessos não autorizados, perda ou alteração indevida.</p>
      <h2>9. Alterações desta política</h2>
      <p>Podemos atualizar esta política periodicamente. A data da última atualização está sempre indicada no topo deste documento.</p>
    </LegalPage>
  );
}
