/* 
   ___  _____    ___
  /   ||  _  |  /   | _
 / /| || |/' | / /| |(_)
/ /_| ||  /| |/ /_| |
\_CONEXIÓN INESTABLE| _
    |_/ \___/     |_/(_)

    https://cicsa.netlify.app/
*/
function incluirHTML() {
  const elementos = document.querySelectorAll('[include-html]');
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
        incluirHTML(); // En caso de includes anidados
      })
      .catch(err => {
        el.innerHTML = `<p>${err.message}</p>`;
      });
  });
}

document.addEventListener('DOMContentLoaded', incluirHTML);
