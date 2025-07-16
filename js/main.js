/* 
   ___  _____    ___
  /   ||  _  |  /   | _
 / /| || |/' | / /| |(_)
/ /_| ||  /| |/ /_| |
\_CONEXIÓN INESTABLE| _
    |_/ \___/     |_/(_)

*/

document.addEventListener("DOMContentLoaded", () => {
  // === Menú Responsive ===
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
    toggle.classList.toggle('open');
    toggle.textContent = menu.classList.contains('show') ? '✖' : '☰';
  });

  document.querySelectorAll('#menu li a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('show');
      toggle.classList.remove('open');
      toggle.textContent = '☰';
    });
  });

  // === Slider Hero ===
  let currentSlide = 0;
  const slides = document.querySelectorAll(".hero-slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 7000);
  showSlide(currentSlide);

  // === Abrir Modal ===
  document.querySelectorAll('.service-card').forEach((card, index) => {
    card.addEventListener('click', () => {
      const modalId = `modal${index + 1}`;
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = 'block';
    });
  });

  // === Cerrar Modal con la X
  document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      if (modal) modal.style.display = 'none';
    });
  });

  // === Cerrar Modal al hacer clic fuera
  window.addEventListener('click', (event) => {
    document.querySelectorAll('.modal').forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 768) {
    const titles = document.querySelectorAll(".footer-title");

    titles.forEach(title => {
      title.addEventListener("click", function () {
        const content = this.nextElementSibling;
        const isOpen = content.classList.contains("open");

        // Cerrar todos
        document.querySelectorAll(".footer-content").forEach(c => c.classList.remove("open"));
        document.querySelectorAll(".footer-title").forEach(t => t.classList.remove("open"));

        // Abrir solo si no estaba abierto
        if (!isOpen) {
          content.classList.add("open");
          this.classList.add("open");
        }
      });
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".hero-slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Eventos para los botones (sin usar onclick)
  const nextBtn = document.querySelector(".slide-btn.next");
  const prevBtn = document.querySelector(".slide-btn.prev");

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  }

  // Inicia el slider automático
  showSlide(currentSlide);
  setInterval(nextSlide, 7000);
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");

  links.forEach(link => {
    link.addEventListener("click", function () {
      links.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
});


