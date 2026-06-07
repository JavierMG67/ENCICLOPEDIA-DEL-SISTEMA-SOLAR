'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const filtroGuardado = localStorage.getItem('solar_filtro') || 'todos';
  const planetas = document.querySelectorAll('.planeta');
  const botones = document.querySelectorAll('.btn-filtro');

  const aplicarFiltro = (tipo) => {
    const filtroValido = ['todos', 'rocoso', 'gaseoso', 'helado'].includes(tipo) ? tipo : 'todos';

    planetas.forEach((planeta) => {
      const coincide = filtroValido === 'todos' || planeta.dataset.tipo === filtroValido;
      planeta.classList.toggle('oculto', !coincide);
    });

    botones.forEach((boton) => {
      const activo = boton.dataset.filtro === filtroValido;
      boton.setAttribute('aria-pressed', activo ? 'true' : 'false');
    });
  };

  botones.forEach((boton) => {
    boton.addEventListener('click', () => {
      const tipo = boton.dataset.filtro;
      localStorage.setItem('solar_filtro', tipo);
      aplicarFiltro(tipo);
    });
  });

  aplicarFiltro(filtroGuardado);
});
