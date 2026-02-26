// MENU RESPONSIVO
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const navbar = document.querySelector('.navbar');

    // Toggle menu ao clicar no botão
    menuButton.addEventListener('click', function() {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);
        navbar.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            menuButton.setAttribute('aria-expanded', 'false');
            navbar.classList.remove('active');
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
        const isClickInside = navbar.contains(event.target) || menuButton.contains(event.target);
        
        if (!isClickInside && navbar.classList.contains('active')) {
            menuButton.setAttribute('aria-expanded', 'false');
            navbar.classList.remove('active');
        }
    });
});


/*Animação do carrossel dos parceiros*/
window.onload = () => {
    const list = document.getElementById('image-list');
    const items = list.querySelectorAll('li'); // Seleciona todos os itens
    
    // Duplicando os itens da lista para garantir um ciclo contínuo
    items.forEach(item => {
        const clone = item.cloneNode(true); // Clona o item
        list.appendChild(clone); // Adiciona a cópia ao final da lista
    });
};


/* ===== Contagem dos números ===== */
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.numb h2');
  counters.forEach(counter => counter.innerText = '0');

  const speed = 50; // quanto maior, mais lenta a animação

  function runCount(counter) {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const inc = target / speed;
    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(() => runCount(counter), 20);
    } else {
      counter.innerText = target;
    }
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(runCount);
        obs.disconnect();
      }
    });
  }, {threshold: 0.5});

  const numsSection = document.querySelector('.numeros');
  if (numsSection) observer.observe(numsSection);
});