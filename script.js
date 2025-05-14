// Mostrar secciones suavemente al hacer scroll
const secciones = document.querySelectorAll("section");

const mostrarSeccion = () => {
  secciones.forEach(seccion => {
    const top = seccion.getBoundingClientRect().top;
    const alturaPantalla = window.innerHeight;

    if (top < alturaPantalla - 100) {
      seccion.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", mostrarSeccion);
window.addEventListener("load", mostrarSeccion);
