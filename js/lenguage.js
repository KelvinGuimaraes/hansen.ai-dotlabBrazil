const selected = document.getElementById("selectedLanguage");
const options = document.getElementById("languageOptions");

// Determina o caminho base dependendo da página
const basePath = window.location.pathname.includes('/pages/') ? '../' : './';

const translations = {
  pt: {
    menu_home: "Início",
    menu_about: "Sobre",
    menu_team: "Equipe",
    menu_projects: "Produções",
    menu_contact: "Contato",
    menu_tecnica: "Técnica",
    menu_relatrorio: "Relatório",
    menu_ciencia: "Científicas",

    hero_subtitle: "Projeto hansen.ai",
    hero_title: "Inteligência Artificial para Hanseníase",
    hero_text:
      "O hansen.ai é um projeto que utiliza inteligência artificial, ciência de dados e tecnologia em saúde para <b>apoiar o diagnóstico, o acompanhamento clínico e a vigilância epidemiológica da hanseníase no Brasil.</b>",
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
      "PAINEL INTERATIVO PARA MONITORAMENTO DE CONTATOS DE PACIENTES COM HANSENÍASE NO BRASIL: UMA FERRAMENTA ALINHADA À ESTRATÉGIA GLOBAL 2021-2030",
    prod_card_7:
      "PAINEL INTERATIVO PARA MONITORAMENTO E ANÁLISE DA EVOLUÇÃO DO GRAU DE INCAPACIDADE DECORRENTE DA HANSENÍASE NO BRASIL: UMA FERRAMENTA ALINHADA À ESTRATÉGIA GLOBAL 2021-2030",

    contato_title: "Se inscreva na nossa Newsletter para receber notícias",
    contato_button: "siga-nos",
    namePlaceholder: "Nome",

    Navegacao: "Navegação",
    Links: "Links importantes",
    Contato: "Contato",
    contact: 
      "O projeto hansen.ai é um projeto de pesquisa desenvolvido pelo @dotlabbrazil e financiado pelo @cnpq_oficial para pensar como a IA pode ajudar no tratamento da hanseníase.",

    //////// PAGINA SOBRE ////////
    hero_title1: "Sobre o hansen.ai",
    hero_text1: 
      "O hansen.ai é um projeto de pesquisa desenvolvido pelo dotLAB Brazil, com financiamento do CNPq, voltado ao desenvolvimento de soluções baseadas em <b>Ciência de Dados e Inteligência Artificial para apoiar profissionais de saúde no cuidado de pessoas afetadas pela hanseníase.</b>",
    
    objetivo_title: "Objetivo do Projeto",
    objetivo_text: 
      "Apoiar a tomada de decisão clínica e fortalecer a vigilância epidemiológica, contribuindo para o cuidado contínuo e a redução de sequelas associadas à hanseníase.",
    
    dev_title: "Principais Desenvolvimentos",
    dev_text:
      "Soluções tecnológicas desenvolvidas para apoiar profissionais de saúde no diagnóstico, monitoramento e acompanhamento da hanseníase.",
    card_dev_1: "Plataforma Digital de Apoio ao Profissional de Saúde",
    card_dev_text_1: 
      "Ferramenta que integra dados clínicos e utiliza modelos preditivos para auxiliar na identificação e acompanhamento da progressão dos sintomas da hanseníase.",
    card_dev_2: "Sistema Integrado para Avaliação Neurológica Simplificada (ANS)",
    card_dev_text_2: 
      "Solução digital que padroniza e registra avaliações neurológicas, integrando essas informações aos bancos de dados públicos.",
    
    proce_title: "Processo de Desenvolvimento",
    proce_text: 
      "Etapas que estruturam a criação e evolução das soluções tecnológicas do projeto.",
    slide_titele: "Coleta de dados",
    slide_text1: "Coleta",
    slide_text2: "Pré-processamento",
    slide_text3: "Análise",
    slide_text4: "Geração de insights",
    slide_text5: "inteligência artificial",
    slide_text6: "machine learning",
    slide_text7: "modelos de classificação",
    slide_text8: "construção da plataforma",
    slide_text9: "liberação de API",
    slide_text10: "plataformas interativas",
    slide_text11: "testes da plataforma",
    slide_text12: "integração com sistemas",

    dotlab_titele: "Sobre o dotLAB Brazil",
    dotlab_text:
      "O dotLAB Brazil é um grupo de pesquisa cadastrado no CNPq que coordena colaborações entre universidades brasileiras e instituições internacionais, aplicando inteligência artificial e ciência de dados para resolver problemas em saúde pública.",
    dotlab_button: "Conheça o dotLAB Brazil",

    //////// PAGINA EQUIPE ////////
    equipe_titele: "Conheça a equipe do hansen.ai",
    equi_descri_1: "Professora livre-docente da UPE e coordenadora do projeto",
    equi_descri_2: "Professora Da Universidade De Pernambuco",
    equi_descri_4: "Professor efetivo do Instituto Federal de Pernambuco",
    equi_descri_5:
      "Professor da Universidade de Pernambuco, Pesquisador do dotLab Brazil",
    equi_descri_6: "Professor da Universidade Federal da Paraíba",
    equi_descri_7:
      "Professor da Universidade de Pernambuco, Pesquisador do dotlab Brazil e Doutorando da UPE",
    equi_descri_8:
      "Pesquisador do dotlab Brazil, Professor do Centro Universitário Unifavip Wyden",
    equi_descri_9:
      "Professor da Universidade Anhembi Morumbi (SP), Divulgador Científico do Projeto hansen.ai",
    equi_descri_10: "Pesquisador do dotlab Brazil",
    equi_descri_11:
      "Mestranda em Engenharia da Computação (PPGEC) e Pesquisadora DotLab Brazil",
    equi_descri_12:
      "Pesquisador do dotLAB Brazil - Bolsista de Iniciação ao Extensionismo do CNPq",
    equi_descri_13:
      "Mestrando em Engenharia da Computação (PPGEC) e Pesquisador do dotLAB Brazil",
    equi_descri_14: 
      "Graduando em Sistema de Informação e estudante de Iniciação Científica",
    equi_descri_15: "Graduando em Sistema de Informação",
    equi_descri_16: "Pós-doutorando especialista no desenvolvimento de hardware",
    equi_descri_17: "Pesquisadora DotLab Brazil",
    equi_descri_18: "Graduando em Enfermagem - FENSG/UPE",
    equi_descri_19: "Graduanda em Sistemas de Informação",
    equi_descri_20:
      "Coordenadora de Pesquisas na Fundação NHR Brasil, Pesquisadora convidada do dotLAB Brazil",
  },

  en: {
    menu_home: "Home",
    menu_about: "About",
    menu_team: "Team",
    menu_projects: "Projects",
    menu_contact: "Contact",
    menu_tecnica: "Technical",
    menu_relatrorio: "Report",
    menu_ciencia: "Scientific",

    hero_subtitle: "hansen.ai Project",
    hero_title: "Artificial Intelligence for Leprosy",
    hero_text:
      "hansen.ai is a project that uses artificial intelligence, data science, and health technology to <b>support diagnosis, clinical follow-up, and epidemiological surveillance of leprosy in Brazil.</b>",
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
      "INTERACTIVE PANEL FOR MONITORING CONTACTS OF LEPROSY PATIENTS IN BRAZIL: A TOOL ALIGNED WITH THE 2021-2030 GLOBAL STRATEGY",
    prod_card_7:
      "Interactive Panel for Monitoring and Analyzing the Evolution of Disability Due to Leprosy in Brazil: A Tool Aligned with the 2021-2030 Global Strategy",

    contato_title: "Subscribe to our Newsletter to receive updates",
    contato_button: "Follow us",
    namePlaceholder: "Name",

    Navegacao: "Navigation",
    Links: "Important Links",
    Contato: "Contact",
    contact: 
      "The hansen.ai project is a research project developed by @dotlabbrazil and funded by @cnpq_oficial to explore how AI can aid in the treatment of leprosy.",
    
    //////// PAGINA SOBRE ////////
    hero_title1: "About hansen.ai",
    hero_text1: 
      "hansen.ai is a research project developed by dotLAB Brazil, with funding from CNPq, focused on developing solutions based on <b>Data Science and Artificial Intelligence to support healthcare professionals in the care of people affected by leprosy.</b>",
    
    objetivo_title: "Project Objective",
    objetivo_text: 
      "Support clinical decision-making and strengthen epidemiological surveillance, contributing to continuous care and the reduction of sequelae associated with leprosy.",
    
    dev_title: "Key developments",
    dev_text:
      "Technological solutions developed to support healthcare professionals in the diagnosis, monitoring, and follow-up of leprosy.",
    card_dev_1: "Digital Platform to Support Healthcare Professionals",
    card_dev_text_1: 
      "A tool that integrates clinical data and uses predictive models to help identify and monitor the progression of leprosy symptoms.",
    card_dev_2: "Integrated System for Simplified Neurological Assessment (ANS)",
    card_dev_text_2: 
      "A digital solution that standardizes and records neurological assessments, integrating this information with public databases.",
    
    proce_title: "Development Process",
    proce_text: 
      "Steps that structure the creation and evolution of the project's technological solutions.",
    slide_titele: "Data Collection",
    slide_text1: "Collection",
    slide_text2: "Preprocessing",
    slide_text3: "Analysis",
    slide_text4: "Insight Generation",
    slide_text5: "artificial intelligence",
    slide_text6: "machine learning",
    slide_text7: "classification models",
    slide_text8: "platform construction",
    slide_text9: "API release",
    slide_text10: "interactive platforms",
    slide_text11: "platform testing",
    slide_text12: "integration with systems",

    dotlab_titele: "About dotLAB Brazil",
    dotlab_text:
      "dotLAB Brazil is a research group registered with CNPq that coordinates collaborations between Brazilian universities and international institutions, applying artificial intelligence and data science to solve problems in public health.",
    dotlab_button: "Get to know dotLAB Brazil",
    
    //////// PAGINA EQUIPE ////////
    equipe_titele: "Meet the hansen.ai team",
    equi_descri_1: "Associate professor at UPE and coordinator of the project.",
    equi_descri_2: "Professor at the University of Pernambuco",
    equi_descri_4: "Full-time professor at the Federal Institute of Pernambuco",
    equi_descri_5:
      "Professor at the University of Pernambuco, Researcher at dotLab Brazil",
    equi_descri_6: "Professor at the Federal University of Paraíba",
    equi_descri_7:
      "Professor at the University of Pernambuco, Researcher at dotLab Brazil and PhD candidate at UPE",
    equi_descri_8:
      "Researcher at dotlab Brazil, Professor at Unifavip Wyden University Center",
    equi_descri_9:
      "Professor at Anhembi Morumbi University (São Paulo), Science Communicator for the hansen.ai Project.",
    equi_descri_10: "Researcher at dotlab Brazil",
    equi_descri_11:
      "Master's student in Computer Engineering (PPGEC) and Researcher at DotLab Brazil",
    equi_descri_12:
      "Researcher at dotlab Brazil - CNPq Extension Initiation Scholarship Recipient",
    equi_descri_13:
      "Master's student in Computer Engineering (PPGEC) and Researcher at dotlab Brazil",
    equi_descri_14: 
      "Undergraduate student in Information Systems and undergraduate research student.",
    equi_descri_15: "Undergraduate student in Information Systems",
    equi_descri_16: "Postdoctoral researcher specializing in hardware development.",
    equi_descri_17: "Researcher at DotLab Brazil",
    equi_descri_18: "Undergraduate student in Nursing - FENSG/UPE",
    equi_descri_19: "Undergraduate student in Information Systems",
    equi_descri_20:
      "Research Coordinator at the NHR Brazil Foundation, Visiting Researcher at dotLAB Brazil",
  },
};

function changeLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  localStorage.setItem("language", lang);

  selected.innerHTML =
    (lang === "pt" ? "Pt-Br" : "English") +
    ' <span class="arrow"><img src="' + basePath + 'img/icon/idioma.png"></span>';
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
