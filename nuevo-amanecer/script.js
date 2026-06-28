/* =================================================================
   Instituto Pedagógico Nuevo Amanecer Siglo XXI - JavaScript
   Solo JavaScript vanilla (sin librerías). Los datos se editan en
   index.html; aquí no necesitas tocar nada.
   ================================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* --- 1. Año automático en el footer ---------------------------- */
  var anio = document.getElementById("anio");
  if (anio) { anio.textContent = new Date().getFullYear(); }

  /* --- 2. Menú móvil (abrir / cerrar) ---------------------------- */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var abierto = menu.classList.toggle("abierto");
      toggle.setAttribute("aria-expanded", abierto ? "true" : "false");
      var icono = toggle.querySelector("i");
      if (icono) { icono.className = abierto ? "fa-solid fa-xmark" : "fa-solid fa-bars"; }
    });

    menu.querySelectorAll("a").forEach(function (enlace) {
      enlace.addEventListener("click", function () {
        menu.classList.remove("abierto");
        toggle.setAttribute("aria-expanded", "false");
        var icono = toggle.querySelector("i");
        if (icono) { icono.className = "fa-solid fa-bars"; }
      });
    });
  }

  /* --- 3. Sombra en el encabezado al hacer scroll ---------------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var actualizarSombra = function () {
      if (window.scrollY > 10) { header.classList.add("con-sombra"); }
      else { header.classList.remove("con-sombra"); }
    };
    actualizarSombra();
    window.addEventListener("scroll", actualizarSombra, { passive: true });
  }

});
