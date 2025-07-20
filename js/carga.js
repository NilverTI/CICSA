function incluirHTML(callback) {
  const elementos = document.querySelectorAll('[include-html]');
  let pendientes = elementos.length;

  if (pendientes === 0 && typeof callback === "function") {
    callback(); // No hay nada que incluir
    return;
  }

  elementos.forEach(el => {
    const archivo = el.getAttribute('include-html');
    fetch(archivo)
      .then(res => {
        if (!res.ok) throw new Error('No se pudo cargar ' + archivo);
        return res.text();
      })
      .then(data => {
        el.innerHTML = data;
        el.removeAttribute('include-html');
        pendientes--;
        if (pendientes === 0 && typeof callback === "function") {
          callback(); // ✅ Todos los includes cargaron
        } else {
          incluirHTML(callback); // En caso de includes anidados
        }
      })
      .catch(err => {
        el.innerHTML = `<p>${err.message}</p>`;
        pendientes--;
        if (pendientes === 0 && typeof callback === "function") {
          callback();
        }
      });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  incluirHTML(() => {
    if (typeof inicializarModales === "function") {
      inicializarModales(); // ✅ Aquí se activan los eventos a los modales ya cargados
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  incluirHTML(() => {
    if (typeof inicializarModales === "function") {
      inicializarModales();
    }
    if (typeof inicializarSliderHero === "function") {
      inicializarSliderHero();
    }
  });
});

