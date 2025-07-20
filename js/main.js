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

  document.addEventListener('click', (e) => {
    const clickedOutsideMenu = !menu.contains(e.target);
    const clickedOutsideToggle = !toggle.contains(e.target);
    if (menu.classList.contains('show') && clickedOutsideMenu && clickedOutsideToggle) {
      menu.classList.remove('show');
      toggle.classList.remove('open');
      toggle.textContent = '☰';
    }
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

  const nextBtn = document.querySelector(".slide-btn.next");
  const prevBtn = document.querySelector(".slide-btn.prev");

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  }

  setInterval(nextSlide, 7000);
  showSlide(currentSlide);

  // === Footer acordeón en móvil ===
  if (window.innerWidth <= 768) {
    const titles = document.querySelectorAll(".footer-title");
    titles.forEach(title => {
      title.addEventListener("click", function () {
        const content = this.nextElementSibling;
        const isOpen = content.classList.contains("open");
        document.querySelectorAll(".footer-content").forEach(c => c.classList.remove("open"));
        document.querySelectorAll(".footer-title").forEach(t => t.classList.remove("open"));
        if (!isOpen) {
          content.classList.add("open");
          this.classList.add("open");
        }
      });
    });
  }

  // === Nav active al hacer clic ===
  const links = document.querySelectorAll("nav ul li a");
  links.forEach(link => {
    link.addEventListener("click", function () {
      links.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // === Mostrar mensaje si URL contiene #contacto ===
  if (window.location.hash === '#contacto') {
    const flashDiv = document.getElementById('flash-messages');
    flashDiv.innerHTML = '<p class="success">Mensaje enviado correctamente</p>';
    setTimeout(() => flashDiv.innerHTML = '', 5000);
    const target = document.getElementById('contacto');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // === Carga dinámica de servicios.html y activa modales ===
  fetch('secciones/servicios.html')
    .then(response => response.text())
    .then(html => {
      document.querySelector('#contenedor-servicios').innerHTML = html;
      inicializarModales(); // ✅ Aquí se activan los eventos a los nuevos elementos
    });
});

// === Función global para inicializar modales ===
function inicializarModales() {
  // Abrir modal
  document.querySelectorAll('.service-card').forEach(card => {
    const modalId = card.getAttribute('data-modal');
    const modal = document.getElementById(modalId);

    card.addEventListener('click', () => {
      if (modal) modal.style.display = 'block';
    });
  });

  // Cerrar con la X
  document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      if (modal) modal.style.display = 'none';
    });
  });

  // Cerrar haciendo clic fuera
  window.addEventListener('click', (event) => {
    document.querySelectorAll('.modal').forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
}


function inicializarSliderHero() {
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

  const nextBtn = document.querySelector(".slide-btn.next");
  const prevBtn = document.querySelector(".slide-btn.prev");

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  }

  setInterval(nextSlide, 7000);
  showSlide(currentSlide);
}


