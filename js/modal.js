// ===== MODAL EQUIPE =====

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalNome = document.getElementById("modal-nome");
  const modalDesc = document.getElementById("modal-desc");
  const closeModal = document.querySelector(".close");

  const pessoas = {
    patricia: {
      nome: "Patricia Takako Endo",
      img: "../img/equipe/patricia.png",
      desc: "Professora Livre-Docente da Universidade de Pernambuco (UPE), atuando no curso de Bacharelado em Sistemas de Informação – Campus Caruaru, e como membro permanente do Programa de Pós-Graduação em Engenharia de Computação (PPGEC) da Escola Politécnica de Pernambuco (POLI/UPE). É pesquisadora líder do grupo de pesquisa dotLAB Brazil da UPE. Possui doutorado em Ciência da Computação pelo Centro de Informática (CIn) pela UFPE (2014), mestrado em Ciência da Computação pela UFPE (2008) na área de Redes de Computadores e graduação em Engenharia de Computação pela Universidade Federal do Pará (2005). Tem experiência na área de Engenharia da Computação, com ênfase em redes de computadores e data science, atuando principalmente nos seguintes temas: cloud computing, data science aplicada a saúde, com foco em doenças negligenciadas e saúde materna e neonatal. Bolsista de Produtividade em Pesquisa do CNPq – Nível C. Laureada do Prêmio Para Mulheres na Ciência 2022; e do 1o. Prêmio Mulheres e Ciência 2024, do CNPq.",
    },

    danielle: {
      nome: "Danielle Moura",
      img: "../img/equipe/danielle.png",
      desc: "Enfermeira, Professora associada e livre docente da UPE. Líder do Grupo de Pesquisa e Extensão Cuidado e Direito à Saúde de Pópulações Vulneráveis (GRUPEV-UPE). É membro permanente do Programa Associado de pós-graduação em Enfermagem UPE-UEPB. Desenvolve projetos voltados para o cuidado integral, prevenção de incapacidades e políticas de promoção da saúde de pessoas afetadas pela hanseníase.",
    },

    theo: {
      nome: "Theo Lynn",
      img: "../img/equipe/theo.png",
      desc: "Theo Lynn is Full Professor of Digital Business and Associate Dean for Research at DCU Business School at Dublin City University, Ireland. He is a multi- and inter-disciplinary researcher that specialises in the role of digital technologies in shaping and transforming business and society. Over the last decade, Professor Lynn’s research has focused on the application of state-of-the-art analytical techniques to optimise decisions and understanding human behaviour with a particular emphasis on online harms, health informatics, trust, and digital adoption and use. Professor Lynn has previously been the Centre Director of the Irish Institute for Digital Business and the LINK Research Centre, and Lead PI of the Irish Centre for Cloud Computing and Commerce, a national technology centre. He has completed research projects representing over €25M in total project funding. His publication record includes 75+ peer-reviewed journals, one book, eight edited books, 46 book chapters, and over 175 conference papers and contributions. He has served as an EU Expert Evaluator and a Qatar National Research Fund Expert Evaluator, and is currently the Science & Communication Officer for the MARGISTAR Cost Action. Prior to joining academia, Professor Lynn founded a number of companies incl. Enki Information Systems, Educational Multimedia Group and Atomic Assets, the businesses of which have been acquired by Rochford Brady Group, Intuition and Cambridge University Press respectively.",
    },

    hillson: {
      nome: "Hillson Gomes Vilar",
      img: "../img/equipe/hilson.png",
      desc: "Professor de Ensino Básico, Técnico e Tecnológico do Instituto Federal de Educação Ciência e Tecnologia de Pernambuco (IFPE), doutorando em Engenharia da Computação (UPE), mestre em Ciências da Computação (UFPE) e graduado em Engenharia Elétrica – modalidade Eletrônica (UPE). Atua como pesquisador do Grupo de Pesquisa Aplicada em Desenvolvimento de Sistemas (IFPE) e dotlab Brazil (UPE), onde participa do desenvolvimento e testes de artefatos de hardware a serem utilizados na plataforma hanse.ai, com ênfase nas funcionalidades de avaliação de incapacidades físicas decorrentes da hanseníase.",
    },

    raphael: {
      nome: "Raphael Augusto",
      img: "../img/equipe/raphael.png",
      desc: "Doutor em Ciência da Computação (CIn-UFPE) com período sanduíche na Katholieke Universiteit Leuven (Bélgica). Professor do curso de Sistemas de Informação da Universidade de Pernambuco (Campus Caruaru) e do Programa de Pós-graduação em Engenharia da Computação – PPGEC (UPE/Poli). Possui experiência com pesquisa em Visualização de Dados, IHC e Ciência de Dados.",
    },

    cleber: {
      nome: "Cleber Matos de Morais",
      img: "../img/equipe/cleber.png",
      desc: "Professor da Universidade Federal da Paraíba",
    },

    elisson: {
      nome: "Élisson da Silva Rocha",
      img: "../img/equipe/elisson.png",
      desc: "Professor Assistente da Universidade de Pernambuco (UPE), atuando nos cursos de Licenciatura em Computação e Bacharel em Engenharia de Software, Campus Garanhuns. É mestre e doutor pelo Programa de Pós-Graduação em Engenharia da Computação da Escola Politécnica de Pernambuco (POLI/UPE), e graduado em Sistemas de Informação, pela UPE Campus Caruaru (2017). Faz parte do Grupo de Pesquisa dotLAB Brazil, e suas áreas de interesse são: Deep Learning, Machine Learning e análise de dados de saúde e Indústria 4.0.",
    },

    kayo: {
      nome: "Kayo Henrique",
      img: "../img/equipe/kayo.png",
      desc: "Professor do Centro Universitário Unifavip Wyden, atuando nos cursos de Análise e Desenvolvimento de Sistemas e Ciência da Computação. É mestre e doutor pelo Programa de Pós-Graduação em Engenharia da Computação da Escola Politécnica de Pernambuco (POLI/UPE), e graduado em Sistemas de Informação, pela UPE Campus Caruaru. Faz parte do Grupo de Pesquisa dotLAB Brazil, e suas áreas de interesse são: Deep Learning, Machine Learning e análise de dados de saúde e séries temporais.",
    },

    bernardo: {
      nome: "Bernardo Queiroz",
      img: "../img/equipe/bernardo.png",
      desc: "Doutor em Comunicação e Semiótica (PUC-SP), Mestre em comunicação (UFPE), e graduado em jornalismo (UNICAP). É professor da Anhembi Morumbi em SP nas disciplinas de reportagens especiais, jornalismo de dados e cultura digital. É diretor de comunicação da Associação Brasileira de estudos da Cibercultura (ABCIBER) e pesquisa a relação entre a tecnologia e os processos de criação e pensamento na cultura digital.",
    },

    sebastiao: {
      nome: "Sebastião Rogério",
      img: "../img/equipe/sebastiao.png",
      desc: "Doutor em Engenharia da Computação pela Universidade de Pernambuco (POLI-UPE), com mestrado em Informática pelo Instituto de Computação (IC) da Universidade Federal de Alagoas (UFAL), especialização em Business intelligence, big data e analytics – ciência de dados pela Universidade Norte do Paraná (UNOPAR) e graduação em Licenciatura em Computação pela Universidade de Pernambuco (UPE), Campus Garanhuns. Além disso, atuei como professor de Educação Profissional e Tecnológica em Escolas Técnicas Estaduais (ETEs), lecionando nos cursos técnicos em Desenvolvimento de Sistemas e Redes de Computadores nas modalidades integradas e subsequentes. Atualmente, sou Pesquisador no dotLAB Brazil, Coordenador Acadêmico dos cursos de TI e Professor/Tutor na Wyden. Adicionalmente, faço parte do Conselho Municipal de Ciência e Tecnologia de Caruaru. Meu foco de estudo abrange áreas como: Machine Learning, MLOps, Deep Learning, Text Mining, Desenvolvimento de Games, Games na Educação, Inteligência Artificial e Ensino de Computação.",
    },

    gabriel: {
      nome: "Gabriel Ferreira Masson",
      img: "../img/equipe/gabriel.png",
      desc: "Graduado em Sistema de Informação pela Universidade de Pernambuco (UPE) e Mestrando em Engenharia de Computação pelo PPGEC UPE – Programa de Pós-Graduação em Engenharia da Computação. Possui experiência profissional na área de desenvolvimento back-end e sua linha de pesquisa concentra-se na utilização de algoritmos de aprendizado de máquina, prever desfechos clínicos e otimizar tratamentos.",
    },

    italan: {
      nome: "Italan Alex Santos",
      img: "../img/equipe/italan.png",
      desc: "Graduando em Sistemas de Informação pela Universidade de Pernambuco (UPE), atua como bolsista de Iniciação Científica (PIBIC), desenvolvendo atividades na área de pesquisa em visualização de dados de saúde. Possui interesse na área de desenvolvimento web e em tecnologias voltadas à geração procedural de imagens.",
    },

    thulio: {
      nome: "Thulio Aleixo Bezerra",
      img: "../img/equipe/thulio.png",
      desc: "Estudante de Sistemas de Informação na Universidade de Pernambuco (UPE), em busca de aprendizado e evolução pessoal e profissional. Possuo conhecimento em Python, Java e C, Sql, JavaScript, Html, CSS, entre outros. Busco expandir meu conhecimento, adquirindo experiência e habilidades para o mercado de trabalho.",
    },

    gilmar: {
      nome: "Gilmar Gonçalves",
      img: "../img/equipe/gilmar.png",
      desc: "Doutor em Engenharia Civil modalidade Geotécnica – Universidade Federal de Pernambuco -UFPE (2023), Mestre em Desenvolvimento de Processos Ambientais – Universidade Católica de Pernambuco- UNICAP (2013), MBA em Saúde – Business School Mauricio de Nassau (2011), Gestor Hospitalar – Associação Educacional Boa Viagem-FBV (2009), e. Administrativo, professor e pesquisador do Instituto Federal de Pernambuco, com experiência em: Educação, na área de eletroeletrônica, Gás de Brown, Sistema de Aquisição de Sinais, Strain-Gage, e Sensoriamento Remoto.",
    },

    barbara: {
      nome: "Barbara de Queiroz",
      img: "../img/equipe/barbara.png",
      desc: "Fonoaudióloga sanitarista, mestre em Avaliação em Saúde e doutora em Saúde da Criança e do Adolescente. Tem experiência em Vigilância em Saúde, com atuação na gestão e apoio ao fortalecimento dos Sistemas de Informações sobre Nascidos Vivos, sobre Mortalidade (Sinasc e SIM) e Vigilância do Óbito. Exerce atividades de ensino e pesquisa na área da Saúde Coletiva, Epidemiologia e Avaliação em Saúde, atuando, principalmente, na análise; interpretação; monitoramento e qualificação das informações em saúde. Atualmente, apoia o Centro de Informações Estratégicas em Vigilância em Saúde do Distrito Sanitário Especial Indígena de Pernambuco (CIEVS/DSEI/PE) no fortalecimento das ações de preparação, vigilância e resposta às emergências em saúde pública.",
    },

    eduarda: {
      nome: "Maria Eduarda Ferro",
      img: "../img/equipe/eduarda.png",
      desc: "Mestre em Engenharia da Computação pela Universidade de Pernambuco (2025) e bacharel em Biomedicina pela Universidade Federal de Pernambuco (2022) com experiência em inteligência artificial aplicada à saúde. Recentemente recebeu o prêmio Naíde Teodósio de Estudos de Gênero pelo desenvolvimento de um painel interativo de suporte à saúde materno-infantil. Atualmente, é membro do grupo de pesquisa DotLab Brazil, atuando na linha de investigação em inteligência artificial aplicada à saúde, com foco em modelos preditivos baseados em árvores.",
    },

    hebert: {
      nome: "Hebert Humberto",
      img: "../img/equipe/hebert.png",
      desc: "Graduando do sétimo módulo de Enfermagem pela Faculdade de Enfermagem Nossa Senhora das Graças pertencente à Universidade de Pernambuco – FENSG/UPE.",
    },

    joao: {
      nome: "João Victor Medeiros",
      img: "../img/equipe/joao.png",
      desc: "Estudante de Sistemas de Informação na Universidade de Pernambuco (UPE). Experiência prática no desenvolvimento de sistemas utilizando tecnologias como React, Typescript e Java.",
    },

    camila: {
      nome: "Camila Jullyane",
      img: "../img/equipe/camila.png",
      desc: "Graduanda em Sistemas de Informação pela Universidade de Pernambuco, Campus Caruaru, integrante do grupo de pesquisa dotLAB Brazil. Possui experiência em desenvolvimento de soluções tecnológicas com foco em impacto social, atualmente é bolsista de Iniciação ao Extensionismo do CNPq onde atua como desenvolvedora mobile no projeto hansen.ai.",
    },

    aymee: {
      nome: "Aymée Medeiros",
      img: "../img/equipe/aymee.png",
      desc: "Coordenadora de Pesquisas na Fundação NHR Brasil. Atualmente coordena o Ensaio Clínico Multicêntrico PEP++. Enfermeira, Especialista em Saúde Coletiva (IMIP) e Especialista em Direitos humanos, Responsabilidade Social e Cidadania Global(PUC-RS) Mestra em Saúde Pública (UFC), Doutoranda em Pesquisa Clínica em Doenças Infecciosas (INI – Fiocruz). Membro do Comitê Técnico da ILEP representando o Sul Global, Membro da International Leprosy Association (ILA). Tem mais de 14 anos de experiência com Doenças Tropicas Negligenciadas.",
    },

    luis: {
      nome: "Luis Augusto Morais",
      img: "../img/equipe/Augusto.jpeg",
      desc: "Graduado em Ciência da Computação pelo Centro Universitário do Vale do Ipojuca e mestrando em Engenharia da Computação pelo PPGEC-UPE (Programa de Pós-Graduação em Engenharia da Computação). Possui experiência em Machine Learning, e sua linha de pesquisa concentra-se na utilização de algoritmos de visão computacional para identificar e analisar pontos de interesse na Ficha de Avaliação Neurológica Simplificada (ANS).",
    },

    anna: {
      nome: "Anna Beatriz Silva",
      img: "../img/equipe/anna.png",
      desc: "Formada em Sistemas de Informações pela Universidade de Pernambuco (UPE) e mestranda em Engenharia da Computação pela mesma instituição, pesquisadora do grupo de pesquisa DotLab Brasil, atuando na área de Ciência e Análise de Dados.",
    },

    anthony: {
      nome: "Anthony Militão",
      img: "../img/equipe/anthony.png",
      desc: "Graduado em Ciência da Computação pela UniFavip Wyden (2024), Técnico em Redes de Computadores pela Escola Técnica Estadual Professor José Luiz de Mendonça (2019). Faz parte do Grupo de Pesquisa dotLAB Brazil, e tem interesse em: Machine Learning, Deep Learning e análise de dados de saúde.",
    },
  };

  // Abrir modal
  document.querySelectorAll(".btn-saiba-mais").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const pessoa = pessoas[id];

      if (!pessoa) return;

      modalNome.innerText = pessoa.nome;
      modalImg.src = pessoa.img;
      modalDesc.innerText = pessoa.desc;

      modal.style.display = "block";
    });
  });
  // Fechar modal
  closeModal.onclick = () => (modal.style.display = "none");

  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
});
