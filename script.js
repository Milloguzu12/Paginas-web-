/* =================================================================
   [NOMBRE DEL COLEGIO] - JavaScript
   Solo JavaScript vanilla (sin librerías). No necesitas tocar nada
   de aquí para personalizar el sitio: todos los datos van en index.html.
   ================================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* --- 1. Año automático en el footer ---------------------------- */
  var anio = document.getElementById("anio");
  if (anio) {
    anio.textContent = new Date().getFullYear();
  }

  /* --- 2. Menú móvil (abrir / cerrar) ---------------------------- */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var abierto = menu.classList.toggle("abierto");
      toggle.setAttribute("aria-expanded", abierto ? "true" : "false");
      // Cambia el icono: barras <-> equis
      var icono = toggle.querySelector("i");
      if (icono) {
        icono.className = abierto ? "fa-solid fa-xmark" : "fa-solid fa-bars";
      }
    });

    // Cerrar el menú al hacer clic en un enlace (útil en celular)
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
      if (window.scrollY > 10) {
        header.classList.add("con-sombra");
      } else {
        header.classList.remove("con-sombra");
      }
    };
    actualizarSombra();
    window.addEventListener("scroll", actualizarSombra, { passive: true });
  }

});
