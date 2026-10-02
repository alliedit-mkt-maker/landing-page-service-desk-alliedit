import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/_site/termos-de-uso")({
  head: () =>
    pageHead({ social: "Regras de acesso, propriedade intelectual e responsabilidades.",
      title: "Termos de Uso | Allied IT",
      description: "Termos e condições para acessar e utilizar os sites da Allied IT: uso, propriedade intelectual e responsabilidades.",
      path: "/termos-de-uso",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage title="Termos de Uso">
      <p><em>Última atualização: outubro de 2026</em></p>
      <h2>1. Aceitação dos termos</h2>
      <p>Ao acessar e usar o site alliedit.com.br, você concorda com estes Termos de Uso. Se não concordar, recomendamos que não utilize o site.</p>
      <h2>2. Sobre o site</h2>
      <p>Este site é institucional e tem como finalidade apresentar os serviços e produtos de tecnologia da informação oferecidos pela Allied IT (J & M Soluções em Tecnologia LTDA), bem como permitir que visitantes solicitem contato ou orçamento por meio de formulários.</p>
      <h2>3. Uso do site</h2>
      <p>Você se compromete a utilizar o site de forma lícita, sem violar direitos de terceiros ou tentar comprometer sua segurança (como ataques, engenharia reversa ou coleta automatizada de dados sem autorização).</p>
      <h2>4. Propriedade intelectual</h2>
      <p>Todo o conteúdo do site (textos, imagens, marca, logotipo e layout) pertence à Allied IT ou é usado sob licença, e não pode ser reproduzido sem autorização prévia.</p>
      <h2>5. Links para sites de terceiros</h2>
      <p>O site pode conter links para sites de terceiros. Não nos responsabilizamos pelo conteúdo ou pelas práticas de privacidade desses sites.</p>
      <h2>6. Limitação de responsabilidade</h2>
      <p>Fazemos o possível para manter o site disponível e as informações atualizadas, mas não garantimos que o site estará livre de interrupções ou erros. As informações sobre serviços e produtos têm caráter informativo; condições comerciais específicas são definidas em proposta ou contrato próprio.</p>
      <h2>7. Alterações destes termos</h2>
      <p>Podemos atualizar estes Termos de Uso periodicamente. A data da última atualização está sempre indicada no topo deste documento.</p>
      <h2>8. Lei aplicável e foro</h2>
      <p>Estes termos são regidos pelas leis brasileiras. Fica eleito o foro da comarca de Barueri, SP, para resolver eventuais disputas, salvo disposição legal em contrário.</p>
      <h2>9. Contato</h2>
      <p>Dúvidas sobre estes termos podem ser enviadas para <a href="mailto:contato@alliedit.com.br">contato@alliedit.com.br</a>.</p>
    </LegalPage>
  );
}
