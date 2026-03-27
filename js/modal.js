// ===== MODAL EQUIPE =====

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");

  modal.style.display = "none"; // 👈 garante que inicia fechado
  
  const modalImg = document.getElementById("modal-img");
  const modalNome = document.getElementById("modal-nome");
  const modalDesc = document.getElementById("modal-desc");
  const closeModal = document.querySelector(".close");

  const pessoas = {
    patricia: {
      nome: "Patricia Takako Endo",
      img: "../img/equipe/patricia.png",
      descKey: "modal_patricia",
    },

    danielle: {
      nome: "Danielle Moura",
      img: "../img/equipe/danielle.png",
      descKey: "modal_danielle",
    },

    theo: {
      nome: "Theo Lynn",
      img: "../img/equipe/theo.png",
      descKey: "modal_theo",
    },

    hillson: {
      nome: "Hillson Gomes Vilar",
      img: "../img/equipe/hilson.png",
      descKey: "modal_hillson",
    },

    raphael: {
      nome: "Raphael Augusto",
      img: "../img/equipe/raphael.png",
      descKey: "modal_raphael",
    },

    cleber: {
      nome: "Cleber Matos de Morais",
      img: "../img/equipe/cleber.png",
      descKey: "modal_cleber",
    },

    elisson: {
      nome: "Élisson da Silva Rocha",
      img: "../img/equipe/elisson.png",
      descKey: "modal_elisson",
    },

    kayo: {
      nome: "Kayo Henrique",
      img: "../img/equipe/kayo.png",
      descKey: "modal_kayo",
    },

    bernardo: {
      nome: "Bernardo Queiroz",
      img: "../img/equipe/bernardo.png",
      descKey: "modal_bernardo",
    },

    sebastiao: {
      nome: "Sebastião Rogério",
      img: "../img/equipe/sebastiao.png",
      descKey: "modal_sebastiao",
    },

    gabriel: {
      nome: "Gabriel Ferreira Masson",
      img: "../img/equipe/gabriel.png",
      descKey: "modal_gabriel",
    },

    italan: {
      nome: "Italan Alex Santos",
      img: "../img/equipe/italan.png",
      descKey: "modal_italan",
    },

    thulio: {
      nome: "Thulio Aleixo Bezerra",
      img: "../img/equipe/thulio.png",
      descKey: "modal_thulio",
    },

    gilmar: {
      nome: "Gilmar Gonçalves",
      img: "../img/equipe/gilmar.png",
      descKey: "modal_gilmar",
    },

    barbara: {
      nome: "Barbara de Queiroz",
      img: "../img/equipe/barbara.png",
      descKey: "modal_barbara",
    },

    eduarda: {
      nome: "Maria Eduarda Ferro",
      img: "../img/equipe/eduarda.png",
      descKey: "modal_eduarda",
    },

    hebert: {
      nome: "Hebert Humberto",
      img: "../img/equipe/hebert.png",
      descKey: "modal_hebert",
    },

    joao: {
      nome: "João Victor Medeiros",
      img: "../img/equipe/joao.png",
      descKey: "modal_joao",
    },

    camila: {
      nome: "Camila Jullyane",
      img: "../img/equipe/camila.png",
      descKey: "modal_camila",
    },

    aymee: {
      nome: "Aymée Medeiros",
      img: "../img/equipe/aymee.png",
      descKey: "modal_aymee",
    },

    luis: {
      nome: "Luis Augusto Morais",
      img: "../img/equipe/Augusto.jpeg",
      descKey: "modal_luis",
    },

    anna: {
      nome: "Anna Beatriz Silva",
      img: "../img/equipe/anna.png",
      descKey: "modal_anna",
    },

    anthony: {
      nome: "Anthony Militão",
      img: "../img/equipe/anthony.png",
      descKey: "modal_anthony",
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
      const lang = localStorage.getItem("language") || "pt";
      modalDesc.innerText = translations[lang][pessoa.descKey];

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
