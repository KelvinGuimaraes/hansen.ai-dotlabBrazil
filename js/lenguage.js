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
    numb_4: "Piora na incapacidade"
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
    numb_4: "Worsening disability"
  }
};

function changeLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
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
  options.style.display =
    options.style.display === "block" ? "none" : "block";
});

document.querySelectorAll(".language-options li").forEach(option => {
  option.addEventListener("click", function () {
    const lang = this.dataset.value;
    changeLanguage(lang);
    options.style.display = "none";
  });
});

/* Fecha ao clicar fora */
document.addEventListener("click", e => {
  if (!document.querySelector(".language-dropdown").contains(e.target)) {
    options.style.display = "none";
  }
});

/* Idioma salvo */
const savedLanguage = localStorage.getItem("language") || "pt";
changeLanguage(savedLanguage);