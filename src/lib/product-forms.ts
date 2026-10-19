/** Opt-in settings for institutional pages, never shared campaign defaults. */
export const PRODUCT_FORMS = {
  videoconferencia: {
    formId: "0b0c7bb4-c1d3-4660-9afb-764dcd4f0269",
    description: "Formulário de contato Allied IT Videoconferência",
    product: "Videoconferência",
  },
  headsets: {
    formId: "c1683423-b13f-4a72-b12a-f2f151ccd3a4",
    description: "Formulário de contato Allied IT Headsets",
    product: "Headsets",
  },
  microsoft365: {
    formId: "b032112e-cd9e-4af7-a157-25ef619c2a79",
    description: "Formulário de contato Allied IT Microsoft 365",
    product: "Microsoft 365",
  },
  aws: {
    formId: "4a305e47-1445-40f2-b9c4-b1beb6850c1e",
    description: "Formulário de contato Allied IT AWS",
    product: "AWS",
  },
  firewall: {
    formId: "164db0e1-44bd-4a9b-8b62-80f0d111471b",
    description: "Formulário de contato Allied IT Firewall",
    product: "Firewall",
  },
} as const;

export type ProductFormOverrides = {
  formId?: string;
  description?: string;
  product?: string;
};