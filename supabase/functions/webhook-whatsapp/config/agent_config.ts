export const AgentConfig = {
  // WhatsApp
  whatsapp_number: "552199998888", // TODO: Configure seu número ou use variável de ambiente

  // AI model
  ai_name: "Xepa",
  ai_gpt_model: "gpt-5-mini",
  openai_temperature: 0.3, // Lower temperature for precision with mini models
  openai_reasoning_effort: "minimal",
  openai_reasoning_verbosity: "low",
  language: "pt-BR",

  // MCP
  enable_mcp: true,
  mcp_require_approval: "never",
  mcp_allowed_tools: [],
};

// Define type internally or just export object
export const CompanyInfo = {
  company_name: "Xepa",
  company_core_business: "Combate ao desperdício de alimentos",
  company_products_segments: "Alimentos",
  company_products_summary: "Ajudamos pessoas a fazerem a feira da semana com economia e sustentabilidade, conectando-as a ofertas de oportunidade.",
  company_differential: "Sustentabilidade e Economia",
  company_url_website: "https://xepa.com.br",
  company_url_support: "https://xepa.com.br/suporte",
  company_url_terms: "https://xepa.com.br/termos",
  company_url_privacy: "https://xepa.com.br/privacidade",
};
