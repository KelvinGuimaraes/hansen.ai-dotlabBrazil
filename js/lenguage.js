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
    equi_descri_3: "Professor Titular de Negócios Digitais na Escola de Negócios da Dublin City University",
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
    equi_descri_21:
      "Graduado em Ciência da Computação, mestrando em Engenharia da Computação pelo PPGEC-UPE",

    //////// MODAL ////////
    modal_patricia: "Professora Livre-Docente da Universidade de Pernambuco (UPE), atuando no curso de Bacharelado em Sistemas de Informação – Campus Caruaru, e como membro permanente do Programa de Pós-Graduação em Engenharia de Computação (PPGEC) da Escola Politécnica de Pernambuco (POLI/UPE). É pesquisadora líder do grupo de pesquisa dotLAB Brazil da UPE. Possui doutorado em Ciência da Computação pelo Centro de Informática (CIn) pela UFPE (2014), mestrado em Ciência da Computação pela UFPE (2008) na área de Redes de Computadores e graduação em Engenharia de Computação pela Universidade Federal do Pará (2005). Tem experiência na área de Engenharia da Computação, com ênfase em redes de computadores e data science, atuando principalmente nos seguintes temas: cloud computing, data science aplicada a saúde, com foco em doenças negligenciadas e saúde materna e neonatal. Bolsista de Produtividade em Pesquisa do CNPq – Nível C. Laureada do Prêmio Para Mulheres na Ciência 2022; e do 1o. Prêmio Mulheres e Ciência 2024, do CNPq.",
    modal_danielle: "Enfermeira, Professora associada e livre docente da UPE. Líder do Grupo de Pesquisa e Extensão Cuidado e Direito à Saúde de Pópulações Vulneráveis (GRUPEV-UPE). É membro permanente do Programa Associado de pós-graduação em Enfermagem UPE-UEPB. Desenvolve projetos voltados para o cuidado integral, prevenção de incapacidades e políticas de promoção da saúde de pessoas afetadas pela hanseníase.",
    modal_theo: "Theo Lynn é Professor Titular de Negócios Digitais e Decano Associado de Pesquisa na DCU Business School da Dublin City University, Irlanda. Ele é um pesquisador multidisciplinar e interdisciplinar especializado no papel das tecnologias digitais na formação e transformação dos negócios e da sociedade. Na última década, a pesquisa do Professor Lynn concentrou-se na aplicação de técnicas analíticas de ponta para otimizar decisões e compreender o comportamento humano, com ênfase particular em danos online, informática em saúde, confiança, adoção e uso digital. O Professor Lynn foi anteriormente Diretor do Instituto Irlandês de Negócios Digitais e do Centro de Pesquisa LINK, e Investigador Principal do Centro Irlandês de Computação em Nuvem e Comércio, um centro tecnológico nacional. Ele concluiu projetos de pesquisa que representam mais de € 25 milhões em financiamento total. Seu histórico de publicações inclui mais de 75 artigos em periódicos com revisão por pares, um livro, oito livros editados, 46 capítulos de livros e mais de 175 artigos e contribuições para conferências. Ele atuou como Avaliador Especialista da EU Expert Evaluator e do Fundo Nacional de Pesquisa do Qatar, e atualmente é o Oficial de Ciência e Comunicação do the MARGISTAR Cost Action. Antes de ingressar na academia, o Professor Lynn fundou diversas empresas, incluindo a Enki Information Systems, a Educational Multimedia Group e a Atomic Assets, cujos negócios foram adquiridos pela Rochford Brady Group, Intuition e Cambridge University Press, respectivamente.",
    modal_hillson: "Professor de Ensino Básico, Técnico e Tecnológico do Instituto Federal de Educação Ciência e Tecnologia de Pernambuco (IFPE), doutorando em Engenharia da Computação (UPE), mestre em Ciências da Computação (UFPE) e graduado em Engenharia Elétrica – modalidade Eletrônica (UPE). Atua como pesquisador do Grupo de Pesquisa Aplicada em Desenvolvimento de Sistemas (IFPE) e dotlab Brazil (UPE), onde participa do desenvolvimento e testes de artefatos de hardware a serem utilizados na plataforma hanse.ai, com ênfase nas funcionalidades de avaliação de incapacidades físicas decorrentes da hanseníase.",
    modal_raphael: "Doutor em Ciência da Computação (CIn-UFPE) com período sanduíche na Katholieke Universiteit Leuven (Bélgica). Professor do curso de Sistemas de Informação da Universidade de Pernambuco (Campus Caruaru) e do Programa de Pós-graduação em Engenharia da Computação – PPGEC (UPE/Poli). Possui experiência com pesquisa em Visualização de Dados, IHC e Ciência de Dados.",
    modal_cleber: "Professor da Universidade Federal da Paraíba",
    modal_elisson: "Professor Assistente da Universidade de Pernambuco (UPE), atuando nos cursos de Licenciatura em Computação e Bacharel em Engenharia de Software, Campus Garanhuns. É mestre e doutor pelo Programa de Pós-Graduação em Engenharia da Computação da Escola Politécnica de Pernambuco (POLI/UPE), e graduado em Sistemas de Informação, pela UPE Campus Caruaru (2017). Faz parte do Grupo de Pesquisa dotLAB Brazil, e suas áreas de interesse são: Deep Learning, Machine Learning e análise de dados de saúde e Indústria 4.0.",
    modal_kayo: "Professor do Centro Universitário Unifavip Wyden, atuando nos cursos de Análise e Desenvolvimento de Sistemas e Ciência da Computação. É mestre e doutor pelo Programa de Pós-Graduação em Engenharia da Computação da Escola Politécnica de Pernambuco (POLI/UPE), e graduado em Sistemas de Informação, pela UPE Campus Caruaru. Faz parte do Grupo de Pesquisa dotLAB Brazil, e suas áreas de interesse são: Deep Learning, Machine Learning e análise de dados de saúde e séries temporais.",
    modal_bernardo: "Doutor em Comunicação e Semiótica (PUC-SP), Mestre em comunicação (UFPE), e graduado em jornalismo (UNICAP). É professor da Anhembi Morumbi em SP nas disciplinas de reportagens especiais, jornalismo de dados e cultura digital. É diretor de comunicação da Associação Brasileira de estudos da Cibercultura (ABCIBER) e pesquisa a relação entre a tecnologia e os processos de criação e pensamento na cultura digital.",
    modal_sebastiao: "Doutor em Engenharia da Computação pela Universidade de Pernambuco (POLI-UPE), com mestrado em Informática pelo Instituto de Computação (IC) da Universidade Federal de Alagoas (UFAL), especialização em Business intelligence, big data e analytics – ciência de dados pela Universidade Norte do Paraná (UNOPAR) e graduação em Licenciatura em Computação pela Universidade de Pernambuco (UPE), Campus Garanhuns. Além disso, atuei como professor de Educação Profissional e Tecnológica em Escolas Técnicas Estaduais (ETEs), lecionando nos cursos técnicos em Desenvolvimento de Sistemas e Redes de Computadores nas modalidades integradas e subsequentes. Atualmente, sou Pesquisador no dotLAB Brazil, Coordenador Acadêmico dos cursos de TI e Professor/Tutor na Wyden. Adicionalmente, faço parte do Conselho Municipal de Ciência e Tecnologia de Caruaru. Meu foco de estudo abrange áreas como: Machine Learning, MLOps, Deep Learning, Text Mining, Desenvolvimento de Games, Games na Educação, Inteligência Artificial e Ensino de Computação.",
    modal_gabriel: "Graduado em Sistema de Informação pela Universidade de Pernambuco (UPE) e Mestrando em Engenharia de Computação pelo PPGEC UPE – Programa de Pós-Graduação em Engenharia da Computação. Possui experiência profissional na área de desenvolvimento back-end e sua linha de pesquisa concentra-se na utilização de algoritmos de aprendizado de máquina, prever desfechos clínicos e otimizar tratamentos.",
    modal_italan: "Graduando em Sistemas de Informação pela Universidade de Pernambuco (UPE), atua como bolsista de Iniciação Científica (PIBIC), desenvolvendo atividades na área de pesquisa em visualização de dados de saúde. Possui interesse na área de desenvolvimento web e em tecnologias voltadas à geração procedural de imagens.",
    modal_thulio: "Estudante de Sistemas de Informação na Universidade de Pernambuco (UPE), em busca de aprendizado e evolução pessoal e profissional. Possuo conhecimento em Python, Java e C, Sql, JavaScript, Html, CSS, entre outros. Busco expandir meu conhecimento, adquirindo experiência e habilidades para o mercado de trabalho.",
    modal_gilmar: "Doutor em Engenharia Civil modalidade Geotécnica – Universidade Federal de Pernambuco -UFPE (2023), Mestre em Desenvolvimento de Processos Ambientais – Universidade Católica de Pernambuco- UNICAP (2013), MBA em Saúde – Business School Mauricio de Nassau (2011), Gestor Hospitalar – Associação Educacional Boa Viagem-FBV (2009), e. Administrativo, professor e pesquisador do Instituto Federal de Pernambuco, com experiência em: Educação, na área de eletroeletrônica, Gás de Brown, Sistema de Aquisição de Sinais, Strain-Gage, e Sensoriamento Remoto.",
    modal_barbara: "Fonoaudióloga sanitarista, mestre em Avaliação em Saúde e doutora em Saúde da Criança e do Adolescente. Tem experiência em Vigilância em Saúde, com atuação na gestão e apoio ao fortalecimento dos Sistemas de Informações sobre Nascidos Vivos, sobre Mortalidade (Sinasc e SIM) e Vigilância do Óbito. Exerce atividades de ensino e pesquisa na área da Saúde Coletiva, Epidemiologia e Avaliação em Saúde, atuando, principalmente, na análise; interpretação; monitoramento e qualificação das informações em saúde. Atualmente, apoia o Centro de Informações Estratégicas em Vigilância em Saúde do Distrito Sanitário Especial Indígena de Pernambuco (CIEVS/DSEI/PE) no fortalecimento das ações de preparação, vigilância e resposta às emergências em saúde pública.",
    modal_eduarda: "Mestre em Engenharia da Computação pela Universidade de Pernambuco (2025) e bacharel em Biomedicina pela Universidade Federal de Pernambuco (2022) com experiência em inteligência artificial aplicada à saúde. Recentemente recebeu o prêmio Naíde Teodósio de Estudos de Gênero pelo desenvolvimento de um painel interativo de suporte à saúde materno-infantil. Atualmente, é membro do grupo de pesquisa DotLab Brazil, atuando na linha de investigação em inteligência artificial aplicada à saúde, com foco em modelos preditivos baseados em árvores.",
    modal_hebert: "Graduando do sétimo módulo de Enfermagem pela Faculdade de Enfermagem Nossa Senhora das Graças pertencente à Universidade de Pernambuco – FENSG/UPE.",
    modal_joao: "Estudante de Sistemas de Informação na Universidade de Pernambuco (UPE). Experiência prática no desenvolvimento de sistemas utilizando tecnologias como React, Typescript e Java.",
    modal_camila: "Graduanda em Sistemas de Informação pela Universidade de Pernambuco, Campus Caruaru, integrante do grupo de pesquisa dotLAB Brazil. Possui experiência em desenvolvimento de soluções tecnológicas com foco em impacto social, atualmente é bolsista de Iniciação ao Extensionismo do CNPq onde atua como desenvolvedora mobile no projeto hansen.ai.",
    modal_aymee: "Coordenadora de Pesquisas na Fundação NHR Brasil. Atualmente coordena o Ensaio Clínico Multicêntrico PEP++. Enfermeira, Especialista em Saúde Coletiva (IMIP) e Especialista em Direitos humanos, Responsabilidade Social e Cidadania Global(PUC-RS) Mestra em Saúde Pública (UFC), Doutoranda em Pesquisa Clínica em Doenças Infecciosas (INI – Fiocruz). Membro do Comitê Técnico da ILEP representando o Sul Global, Membro da International Leprosy Association (ILA). Tem mais de 14 anos de experiência com Doenças Tropicas Negligenciadas.",
    modal_luis: "Graduado em Ciência da Computação pelo Centro Universitário do Vale do Ipojuca e mestrando em Engenharia da Computação pelo PPGEC-UPE (Programa de Pós-Graduação em Engenharia da Computação). Possui experiência em Machine Learning, e sua linha de pesquisa concentra-se na utilização de algoritmos de visão computacional para identificar e analisar pontos de interesse na Ficha de Avaliação Neurológica Simplificada (ANS).",
    modal_anna: "Formada em Sistemas de Informações pela Universidade de Pernambuco (UPE) e mestranda em Engenharia da Computação pela mesma instituição, pesquisadora do grupo de pesquisa DotLab Brasil, atuando na área de Ciência e Análise de Dados.",
    modal_anthony: "Graduado em Ciência da Computação pela UniFavip Wyden (2024), Técnico em Redes de Computadores pela Escola Técnica Estadual Professor José Luiz de Mendonça (2019). Faz parte do Grupo de Pesquisa dotLAB Brazil, e tem interesse em: Machine Learning, Deep Learning e análise de dados de saúde.",
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
    equi_descri_3: "Full Professor of Digital Business at Dublin City University - Business School",
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
    equi_descri_21:
      "Graduated in Computer Science, currently pursuing a Master's degree in Computer Engineering at PPGEC-UPE.",

    //////// MODAL ////////
    modal_patricia: "Associate Professor at the University of Pernambuco (UPE), teaching in the Bachelor's degree program in Information Systems – Caruaru Campus, and as a permanent member of the Postgraduate Program in Computer Engineering (PPGEC) at the Polytechnic School of Pernambuco (POLI/UPE). She is the lead researcher of the dotLAB Brazil research group at UPE. She holds a PhD in Computer Science from the Center for Informatics (CIn) at UFPE (2014), a Master's degree in Computer Science from UFPE (2008) in the area of ​​Computer Networks, and a Bachelor's degree in Computer Engineering from the Federal University of Pará (2005). She has experience in the field of Computer Engineering, with an emphasis on computer networks and data science, mainly working on the following topics: cloud computing, data science applied to health, focusing on neglected diseases and maternal and neonatal health. CNPq Research Productivity Fellow – Level C. Recipient of the For Women in Health Award. Science 2022; and the 1st Women in Science Award 2024, from CNPq.",
    modal_danielle: "Nurse, Associate Professor and Senior Lecturer at UPE. Leader of the Research and Extension Group on Care and the Right to Health of Vulnerable Populations (GRUPEV-UPE). Permanent member of the UPE-UEPB Associated Postgraduate Program in Nursing. Develops projects focused on comprehensive care, disability prevention, and health promotion policies for people affected by leprosy.",
    modal_theo: "Theo Lynn is Full Professor of Digital Business and Associate Dean for Research at DCU Business School at Dublin City University, Ireland. He is a multi- and inter-disciplinary researcher that specialises in the role of digital technologies in shaping and transforming business and society. Over the last decade, Professor Lynn’s research has focused on the application of state-of-the-art analytical techniques to optimise decisions and understanding human behaviour with a particular emphasis on online harms, health informatics, trust, and digital adoption and use. Professor Lynn has previously been the Centre Director of the Irish Institute for Digital Business and the LINK Research Centre, and Lead PI of the Irish Centre for Cloud Computing and Commerce, a national technology centre. He has completed research projects representing over €25M in total project funding. His publication record includes 75+ peer-reviewed journals, one book, eight edited books, 46 book chapters, and over 175 conference papers and contributions. He has served as an EU Expert Evaluator and a Qatar National Research Fund Expert Evaluator, and is currently the Science & Communication Officer for the MARGISTAR Cost Action. Prior to joining academia, Professor Lynn founded a number of companies incl. Enki Information Systems, Educational Multimedia Group and Atomic Assets, the businesses of which have been acquired by Rochford Brady Group, Intuition and Cambridge University Press respectively.",
    modal_hillson: "Professor of Basic, Technical and Technological Education at the Federal Institute of Education, Science and Technology of Pernambuco (IFPE), PhD candidate in Computer Engineering (UPE), Master's degree in Computer Science (UFPE), and Bachelor's degree in Electrical Engineering – Electronics (UPE). He works as a researcher in the Applied Research Group in Systems Development (IFPE) and dotLAB Brazil (UPE), where he contributes to the development and testing of hardware artifacts to be used in the hanse.ai platform, with emphasis on functionalities for assessing physical disabilities resulting from leprosy.",
    modal_raphael: "PhD in Computer Science (CIn-UFPE) with a sandwich period at Katholieke Universiteit Leuven (Belgium). Professor in the Information Systems program at the University of Pernambuco (Caruaru Campus) and in the Graduate Program in Computer Engineering – PPGEC (UPE/Poli). Has experience in research in Data Visualization, Human-Computer Interaction, and Data Science.",
    modal_cleber: "Professor at the Federal University of Paraíba.",
    modal_elisson: "Assistant Professor at the University of Pernambuco (UPE), teaching in the Computer Science Education and Software Engineering undergraduate programs at the Garanhuns Campus. Holds both a Master's and PhD in Computer Engineering from the Polytechnic School of Pernambuco (POLI/UPE), and a Bachelor's degree in Information Systems from UPE (Caruaru Campus, 2017). Member of the dotLAB Brazil research group, with interests in Deep Learning, Machine Learning, health data analysis, and Industry 4.0.",
    modal_kayo: "Professor at the Unifavip Wyden University Center, teaching in the Systems Analysis and Development and Computer Science programs. Holds both a Master's and PhD in Computer Engineering from the Polytechnic School of Pernambuco (POLI/UPE), and a Bachelor's degree in Information Systems from UPE (Caruaru Campus). Member of the dotLAB Brazil research group, with interests in Deep Learning, Machine Learning, health data analysis, and time series.",
    modal_bernardo: "PhD in Communication and Semiotics (PUC-SP), Master's in Communication (UFPE), and Bachelor's degree in Journalism (UNICAP). Professor at Anhembi Morumbi University (São Paulo), teaching courses in special reporting, data journalism, and digital culture. Communication Director of the Brazilian Association of Cyberculture Studies (ABCIBER) and researcher on the relationship between technology and creative and cognitive processes in digital culture.",
    modal_sebastiao: "PhD in Computer Engineering from the University of Pernambuco (POLI-UPE), Master's in Informatics from the Institute of Computing (IC) at the Federal University of Alagoas (UFAL), specialization in Business Intelligence, Big Data and Analytics – Data Science from Universidade Norte do Paraná (UNOPAR), and Bachelor's degree in Computer Education from UPE (Garanhuns Campus). Has worked as a Technical and Vocational Education teacher in State Technical Schools (ETEs), teaching Systems Development and Computer Networks courses. Currently a researcher at dotLAB Brazil, Academic Coordinator of IT courses, and Professor/Tutor at Wyden. Also a member of the Municipal Council of Science and Technology of Caruaru. Research interests include Machine Learning, MLOps, Deep Learning, Text Mining, Game Development, Games in Education, Artificial Intelligence, and Computer Science Education.",
    modal_gabriel: "Bachelor's degree in Information Systems from the University of Pernambuco (UPE) and Master's student in Computer Engineering at PPGEC-UPE. Has professional experience in back-end development, with research focused on the use of machine learning algorithms to predict clinical outcomes and optimize treatments.",
    modal_italan: "Undergraduate student in Information Systems at the University of Pernambuco (UPE), currently a Scientific Initiation scholarship holder (PIBIC), working on research in health data visualization. Interested in web development and technologies for procedural image generation.",
    modal_thulio: "Information Systems student at the University of Pernambuco (UPE), seeking personal and professional growth. Has knowledge in Python, Java, C, SQL, JavaScript, HTML, CSS, among others. Aims to expand knowledge and gain experience and skills for the job market.",
    modal_gilmar: "PhD in Civil Engineering (Geotechnics) from the Federal University of Pernambuco (UFPE, 2023), Master's in Environmental Process Development from the Catholic University of Pernambuco (UNICAP, 2013), MBA in Health from Business School Maurício de Nassau (2011), Hospital Management degree from Associação Educacional Boa Viagem (FBV, 2009). Administrative professional, professor, and researcher at the Federal Institute of Pernambuco, with experience in education, electronics, Brown's gas, signal acquisition systems, strain gauges, and remote sensing.",
    modal_barbara: "Speech therapist and public health specialist, Master's in Health Evaluation and PhD in Child and Adolescent Health. Experienced in Health Surveillance, working in the management and strengthening of Information Systems on Live Births and Mortality (Sinasc and SIM) and Death Surveillance. Engages in teaching and research in Public Health, Epidemiology, and Health Evaluation, focusing on analysis, interpretation, monitoring, and qualification of health information. Currently supports the Strategic Health Surveillance Information Center of the Indigenous Special Sanitary District of Pernambuco (CIEVS/DSEI/PE) in strengthening preparedness, surveillance, and response actions to public health emergencies.",
    modal_eduarda: "Master's degree in Computer Engineering from the University of Pernambuco (2025) and Bachelor's degree in Biomedicine from the Federal University of Pernambuco (2022), with experience in artificial intelligence applied to healthcare. Recently awarded the Naíde Teodósio Gender Studies Prize for developing an interactive panel supporting maternal and child health. Currently a member of the DotLab Brazil research group, focusing on artificial intelligence applied to healthcare, especially tree-based predictive models.",
    modal_hebert: "Seventh-semester Nursing undergraduate student at the Nossa Senhora das Graças Nursing School, University of Pernambuco (FENSG/UPE).",
    modal_joao: "Information Systems student at the University of Pernambuco (UPE), with practical experience in system development using technologies such as React, TypeScript, and Java.",
    modal_camila: "Information Systems undergraduate student at the University of Pernambuco (Caruaru Campus), member of the dotLAB Brazil research group. Has experience in developing technological solutions focused on social impact, currently a CNPq Extension Initiation scholarship holder working as a mobile developer in the hansen.ai project.",
    modal_aymee: "Research Coordinator at NHR Brazil Foundation. Currently coordinates the multicenter clinical trial PEP++. Nurse, Specialist in Public Health (IMIP) and in Human Rights, Social Responsibility and Global Citizenship (PUC-RS), Master's in Public Health (UFC), and PhD candidate in Clinical Research in Infectious Diseases (INI – Fiocruz). Member of the ILEP Technical Committee representing the Global South and member of the International Leprosy Association (ILA). Has over 14 years of experience in Neglected Tropical Diseases.",
    modal_luis: "Bachelor's degree in Computer Science from Centro Universitário do Vale do Ipojuca and Master's student in Computer Engineering at PPGEC-UPE. Has experience in Machine Learning, focusing on computer vision algorithms to identify and analyze points of interest in the Simplified Neurological Assessment (ANS) form.",
    modal_anna: "Bachelor's degree in Information Systems from the University of Pernambuco (UPE) and Master's student in Computer Engineering at the same institution. Researcher at DotLab Brazil, working in Data Science and Data Analysis.",
    modal_anthony: "Bachelor's degree in Computer Science from UniFavip Wyden (2024) and technical degree in Computer Networks from Escola Técnica Estadual Professor José Luiz de Mendonça (2019). Member of the dotLAB Brazil research group, with interests in Machine Learning, Deep Learning, and health data analysis.",
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
