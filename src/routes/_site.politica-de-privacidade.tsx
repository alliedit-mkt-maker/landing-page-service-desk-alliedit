import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/_site/politica-de-privacidade")({
  head: () =>
    pageHead({
      title: "Política de Privacidade | Allied IT",
      description: "Como a Allied IT coleta, usa e protege suas informações pessoais e como utilizamos cookies neste site.",
      path: "/politica-de-privacidade",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage title="Política de Privacidade">
      <p>A sua privacidade é importante para nós. É política da Allied IT respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Allied IT e outros sites que possuímos e operamos.</p>
      <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
      <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
      <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>
      <p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>
      <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>
      <p>O uso continuado do nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.</p>

      <h2>Política de Cookies Allied IT</h2>
      <h3>O que são cookies?</h3>
      <p>Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou "quebrar" certos elementos da funcionalidade do site.</p>
      <h3>Como usamos os cookies?</h3>
      <p>Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados para fornecer um serviço que você usa.</p>
      <h3>Desativar cookies</h3>
      <p>Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.</p>
      <h3>Cookies que definimos</h3>
      <ul>
        <li><strong>Cookies relacionados à conta:</strong> se você criar uma conta conosco, usaremos cookies para o gerenciamento do processo de inscrição e administração geral. Esses cookies geralmente serão excluídos quando você sair do sistema, porém, em alguns casos, eles poderão permanecer posteriormente para lembrar as preferências do seu site ao sair.</li>
        <li><strong>Cookies relacionados ao login:</strong> utilizamos cookies quando você está logado, para que possamos lembrar dessa ação. Isso evita que você precise fazer login sempre que visitar uma nova página.</li>
        <li><strong>Cookies relacionados a boletins por e-mail:</strong> este site oferece serviços de assinatura de boletim informativo ou e-mail e os cookies podem ser usados para lembrar se você já está registrado.</li>
        <li><strong>Cookies relacionados a pedidos:</strong> este site oferece facilidades de comércio eletrônico ou pagamento e alguns cookies são essenciais para garantir que seu pedido seja lembrado entre as páginas.</li>
        <li><strong>Cookies relacionados a pesquisas:</strong> periodicamente, oferecemos pesquisas e questionários, que podem usar cookies para lembrar quem já participou.</li>
        <li><strong>Cookies relacionados a formulários:</strong> quando você envia dados por meio de um formulário, os cookies podem ser configurados para lembrar os detalhes do usuário.</li>
        <li><strong>Cookies de preferências do site:</strong> fornecemos a funcionalidade para definir suas preferências de como o site é executado quando você o usa.</li>
      </ul>
      <h3>Cookies de Terceiros</h3>
      <p>Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis, incluindo o Google Analytics, que nos ajuda a entender como você usa o site e como podemos melhorar sua experiência.</p>

      <h2>Compromisso do Usuário</h2>
      <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que a Allied IT oferece no site, comprometendo-se a:</p>
      <ul>
        <li>não se envolver em atividades ilegais ou contrárias à boa fé e à ordem pública;</li>
        <li>não difundir propaganda ou conteúdo de natureza racista, xenofóbica ou discriminatória, pornografia ilegal, apologia ao terrorismo ou contra os direitos humanos;</li>
        <li>não causar danos aos sistemas físicos e lógicos da Allied IT, de seus fornecedores ou terceiros.</li>
      </ul>

      <h2>Contato</h2>
      <p>E-mail: <a href="mailto:contato@alliedit.com.br">contato@alliedit.com.br</a></p>
    </LegalPage>
  );
}
