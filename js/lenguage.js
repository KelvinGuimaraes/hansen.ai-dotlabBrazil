const selected = document.getElementById("selectedLanguage");
const options = document.getElementById("languageOptions");

const translations = {
  pt: {
    menu_home: "Início",
    menu_about: "Sobre",
    menu_team: "Equipe",
    menu_projects: "Produções",
    menu_contact: "Contato",

    hero_subtitle: "Projeto hansen.ai",
    hero_title: "Inteligência Artificial para Hanseníase",
    hero_text:
      "O Hansen.ai é um projeto que utiliza inteligência artificial, ciência de dados e tecnologia em saúde para apoiar o diagnóstico, o acompanhamento clínico e a vigilância epidemiológica da hanseníase no Brasil.",
    hero_button: "Entre em contato",

    card_digital_1: "Transformação Digital",
    card_digital_text_1: "Digitalização de processos em saúde pública",

    card_digital_2: "Ciência de Dados",
    card_digital_text_2: "Análise qualificada de dados do SUS",

    card_digital_3: "Inteligência Artificial",
    card_digital_text_3: "Modelo preditivo para suporte clínico",

    card_digital_4: "Visualização de Dados",
    card_digital_text_4: "Painéis interativos para decisões estratégicas",

    numb_1: "Casos de Hanseníase",
    numb_2: "Incapacidade não avaliada",
    numb_3: "Avaliação inconsistente",
    numb_4: "Piora na incapacidade",

    etapas_title: "O hansen.ai é dividido em quatro grandes etapas",
    etapas_text:
      "Uma abordagem estruturada em quatro grandes etapas que integram tecnologia, ciência de dados e saúde pública para apoiar o diagnóstico, o monitoramento clínico e a tomada de decisão no enfrentamento da hanseníase.",
    etapas_button: "Saiba mais",

    etapas_card_1: "Desenvolvimento de Aplicativos e Processos",
    etapas_card_text_1:
      "Criação do ANSd, plataforma para coleta e consulta de dados em campo. Integra o trabalho dos profissionais de saúde com o modelo de IA para apoio ao tratamento da hanseníase.",
    
    etapas_card_2: "Digitalização da ANS",
    etapas_card_text_2:
      "Transformação dos formulários de Avaliação Neurológica Simplificada (ANS) em dados digitais padronizados. Essa etapa garante a qualidade e uniformidade dos dados que alimentarão o sistema preditivo.",
    
    etapas_card_3: "Visualização de Dados das ANS e do SINAN",
    etapas_card_text_3:
      "Desenvolvimento de painéis interativos para análise de dados epidemiológicos. Permite identificar padrões, inconsistências e apoiar políticas públicas de forma clara e acessível.",
    
    etapas_card_4: "Desenvolvimento do modelo de IA hansen.Ai",
    etapas_card_text_4:
      "Criação de um modelo preditivo treinado com dados reais do SUS. Seu objetivo é antecipar a progressão da hanseníase e auxiliar decisões clínicas personalizadas.",
    
    parceiros_title: "Conheça nossos parceiros",

    producoes_title: "Produções Científicas",
    prod_card_1: 
      "AUTOMATIC INFORMATION EXTRACTION FROM NEUROLOGICAL ASSESSMENT RECORDS FOR LEPROSY CASES USING AI",
    prod_card_2:
      "COMPARING YOLD AND DETECTRON2 MODELS FOR AUTOMATIC EXTRACTING PATIENTS INFORMATION FROM LEPROSY ASSESSMENT FORM",
    prod_card_3:
      "HANSEN.APP: SIMPLIFIED NEUROLOGICAL ASSESSMENT FORM APPLICATION FOR DATA COLLECTION TO SUPPORT HANSEN’S DISEASE TREATMENT",
    prod_card_4:
      "HEALTH GUARDIAN - A INTELIGÊNCIA ARTIFICIAL A SERVIÇO DO TRATAMENTO DAS DOENÇAS TROPICAIS NEGLIGENCIADAS",
    prod_card_5:
      "ON THE USAGE OF ARTIFICIAL INTELLIGENCE IN LEPROSY CARE: A SYSTEMATIC LITERATURE REVIEW",
    prod_card_6:
      "PAINEL INTERATIVO PARA MONITORAMENTO DE CONTATOS DE PACIENTES COM HANSENÍASE NO BRASIL: UMA FERRAMENTA ALINHADA À ESTRATÉGIA GLOBAL 2021-2030.",
  },

  en: {
    menu_home: "Home",
    menu_about: "About",
    menu_team: "Team",
    menu_projects: "Projects",
    menu_contact: "Contact",

    hero_subtitle: "hansen.ai Project",
    hero_title: "Artificial Intelligence for Leprosy",
    hero_text:
      "Hansen.ai is a project that uses artificial intelligence, data science, and health technology to support diagnosis, clinical follow-up, and epidemiological surveillance of leprosy in Brazil.",
    hero_button: "Contact us",

    card_digital_1: "Digital Transformation",
    card_digital_text_1: "Digitization of public health processes",

    card_digital_2: "Data Science",
    card_digital_text_2: "Qualified analysis of SUS data",

    card_digital_3: "Artificial Intelligence",
    card_digital_text_3: "Predictive model for clinical support",

    card_digital_4: "Data Visualization",
    card_digital_text_4: "Interactive dashboards for strategic decisions",

    numb_1: "Cases of Leprosy",
    numb_2: "Disability not assessed",
    numb_3: "Inconsistent assessment",
    numb_4: "Worsening disability",

    etapas_title: "hansen.ai is divided into four main stages",
    etapas_text:
      "A structured approach in four major steps that integrate technology, data science, and public health to support diagnosis, clinical monitoring, and decision-making in the fight against leprosy.",
    etapas_button: "find out more",

    etapas_card_1: "Application and Process Development",
    etapas_card_text_1:
      "Creation of ANSd, a platform for collecting and consulting field data. It integrates the work of healthcare professionals with an AI model to support the treatment of leprosy.",
    
    etapas_card_2: "Digitization of the ANS",
    etapas_card_text_2:
      "Transformation of Simplified Neurological Assessment (ANS) forms into standardized digital data. This step ensures the quality and uniformity of the data that will feed the predictive system.",
    
    etapas_card_3: "Visualization of ANS and SINAN Data",
    etapas_card_text_3:
      "Development of interactive dashboards for epidemiological data analysis. Enables the identification of patterns and inconsistencies, and supports public policies in a clear and accessible way.",
    
    etapas_card_4: "Development of the hansen.Ai AI model",
    etapas_card_text_4:
      "Creation of a predictive model trained with real data from the Brazilian Unified Health System (SUS). Its objective is to anticipate the progression of leprosy and assist in personalized clinical decisions.",
    
    parceiros_title: "Meet our partners",

    producoes_title: "Scientific Productions",
    prod_card_1: 
      "AUTOMATIC INFORMATION EXTRACTION FROM NEUROLOGICAL ASSESSMENT RECORDS FOR LEPROSY CASES USING AI",
    prod_card_2:
      "COMPARING YOLD AND DETECTRON2 MODELS FOR AUTOMATIC EXTRACTING PATIENTS INFORMATION FROM LEPROSY ASSESSMENT FORM",
    prod_card_3:
      "HANSEN.APP: SIMPLIFIED NEUROLOGICAL ASSESSMENT FORM APPLICATION FOR DATA COLLECTION TO SUPPORT HANSEN’S DISEASE TREATMENT",
    prod_card_4:
      "HEALTH GUARDIAN - ARTIFICIAL INTELLIGENCE IN THE SERVICE OF TREATING NEGLECTED TROPICAL DISEASES.",
    prod_card_5:
      "ON THE USAGE OF ARTIFICIAL INTELLIGENCE IN LEPROSY CARE: A SYSTEMATIC LITERATURE REVIEW",
    prod_card_6:
      "INTERACTIVE PANEL FOR MONITORING CONTACTS OF LEPROSY PATIENTS IN BRAZIL: A TOOL ALIGNED WITH THE 2021-2030 GLOBAL STRATEGY.",
  },
};

function changeLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  localStorage.setItem("language", lang);

  selected.innerHTML =
    (lang === "pt" ? "Pt-Br" : "English") +
    ' <span class="arrow"><img src="./img/icon/idioma.png"></span>';
}

/* Dropdown */
selected.addEventListener("click", () => {
  options.style.display = options.style.display === "block" ? "none" : "block";
});

document.querySelectorAll(".language-options li").forEach((option) => {
  option.addEventListener("click", function () {
    const lang = this.dataset.value;
    changeLanguage(lang);
    options.style.display = "none";
  });
});

/* Fecha ao clicar fora */
document.addEventListener("click", (e) => {
  if (!document.querySelector(".language-dropdown").contains(e.target)) {
    options.style.display = "none";
  }
});

/* Idioma salvo */
const savedLanguage = localStorage.getItem("language") || "pt";
changeLanguage(savedLanguage);
