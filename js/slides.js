/* ===== Slide de processos ===== */
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let slideAtual = 0;

function mostrarSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  slideAtual = index;
}

/* clique nos indicadores */
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    mostrarSlide(index);
  });
});

/* troca automática */
setInterval(() => {
  slideAtual++;
  if (slideAtual >= slides.length) {
    slideAtual = 0;
  }
  mostrarSlide(slideAtual);
}, 5000);