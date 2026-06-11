"use strict";

const cuerposCelestes = [
  {
    id: "sol",
    nombre: "Sol",
    tipo: "estrella",
    radioPx: 42,
    distanciaPx: 0,
    periodoDias: 0,
    color: "#ffb300",
    descripcion:
      "Nuestra estrella y el centro gravitacional que mantiene unido al Sistema Solar.",
    datos: {
      Tipo: "Estrella enana amarilla",
      Diametro: "1,392,700 km",
      Distancia: "0 millones km (0 UA)",
      "Periodo orbital": "N/A",
      Lunas: "0",
      Composicion: "Hidrogeno (73%), Helio (25%)",
      Temperatura: "5,500 C en superficie",
      Gravedad: "274 m/s2",
    },
  },
  {
    id: "mercurio",
    nombre: "Mercurio",
    tipo: "rocoso",
    radioPx: 8,
    distanciaPx: 74,
    periodoDias: 88,
    color: "#9c9387",
    descripcion:
      "El planeta mas pequeno y cercano al Sol, con superficie craterizada y cambios extremos de temperatura.",
    datos: {
      Tipo: "Planeta rocoso",
      Diametro: "4,879 km",
      "Distancia del Sol": "57.9 millones km (0.39 UA)",
      "Periodo orbital": "88 dias",
      Lunas: "0",
      Atmosfera: "Exosfera de O, Na, H",
      Temperatura: "-173 C a 427 C",
      Gravedad: "3.7 m/s2",
    },
  },
  {
    id: "venus",
    nombre: "Venus",
    tipo: "rocoso",
    radioPx: 13,
    distanciaPx: 104,
    periodoDias: 225,
    color: "#d8b46f",
    descripcion:
      "Un mundo rocoso cubierto por nubes densas y un efecto invernadero extremo.",
    datos: {
      Tipo: "Planeta rocoso",
      Diametro: "12,104 km",
      "Distancia del Sol": "108.2 millones km (0.72 UA)",
      "Periodo orbital": "225 dias",
      Lunas: "0",
      Atmosfera: "CO2, N2",
      Temperatura: "462 C media",
      Gravedad: "8.87 m/s2",
    },
  },
  {
    id: "tierra",
    nombre: "Tierra",
    tipo: "rocoso",
    radioPx: 14,
    distanciaPx: 138,
    periodoDias: 365.25,
    color: "#3d8bd9",
    descripcion:
      "El unico planeta conocido con vida, oceanos estables y una atmosfera protectora.",
    datos: {
      Tipo: "Planeta rocoso",
      Diametro: "12,742 km",
      "Distancia del Sol": "149.6 millones km (1 UA)",
      "Periodo orbital": "365.25 dias",
      Lunas: "1",
      Atmosfera: "N2, O2, Ar",
      Temperatura: "15 C media",
      Gravedad: "9.8 m/s2",
    },
  },
  {
    id: "marte",
    nombre: "Marte",
    tipo: "rocoso",
    radioPx: 10,
    distanciaPx: 174,
    periodoDias: 687,
    color: "#c65a3a",
    descripcion:
      "El planeta rojo, frio y desertico, con casquetes polares y evidencias de agua antigua.",
    datos: {
      Tipo: "Planeta rocoso",
      Diametro: "6,779 km",
      "Distancia del Sol": "227.9 millones km (1.52 UA)",
      "Periodo orbital": "687 dias",
      Lunas: "2",
      Atmosfera: "CO2, N2, Ar",
      Temperatura: "-63 C media",
      Gravedad: "3.71 m/s2",
    },
  },
  {
    id: "jupiter",
    nombre: "Jupiter",
    tipo: "gaseoso",
    radioPx: 28,
    distanciaPx: 232,
    periodoDias: 4332.59,
    color: "#d7a56f",
    descripcion:
      "El gigante gaseoso mas grande del sistema, con bandas atmosfericas y una intensa actividad de tormentas.",
    datos: {
      Tipo: "Gigante gaseoso",
      Diametro: "139,820 km",
      "Distancia del Sol": "778.5 millones km (5.2 UA)",
      "Periodo orbital": "11.9 anos",
      Lunas: "95",
      Atmosfera: "H2, He",
      Temperatura: "-145 C en nubes",
      Gravedad: "24.79 m/s2",
    },
  },
  {
    id: "saturno",
    nombre: "Saturno",
    tipo: "gaseoso",
    radioPx: 24,
    distanciaPx: 294,
    periodoDias: 10759.22,
    color: "#d9c27f",
    descripcion:
      "Un gigante gaseoso de baja densidad, reconocido por su amplio sistema de anillos.",
    datos: {
      Tipo: "Gigante gaseoso",
      Diametro: "116,460 km",
      "Distancia del Sol": "1,434 millones km (9.58 UA)",
      "Periodo orbital": "29.5 anos",
      Lunas: "146",
      Atmosfera: "H2, He",
      Temperatura: "-178 C en nubes",
      Gravedad: "10.44 m/s2",
    },
  },
  {
    id: "urano",
    nombre: "Urano",
    tipo: "helado",
    radioPx: 19,
    distanciaPx: 354,
    periodoDias: 30688.5,
    color: "#7dd7d8",
    descripcion:
      "Un gigante helado azul verdoso que rota de lado y posee anillos tenues.",
    datos: {
      Tipo: "Gigante helado",
      Diametro: "50,724 km",
      "Distancia del Sol": "2,871 millones km (19.2 UA)",
      "Periodo orbital": "84 anos",
      Lunas: "27",
      Atmosfera: "H2, He, CH4",
      Temperatura: "-224 C en nubes",
      Gravedad: "8.69 m/s2",
    },
  },
  {
    id: "neptuno",
    nombre: "Neptuno",
    tipo: "helado",
    radioPx: 19,
    distanciaPx: 410,
    periodoDias: 60182,
    color: "#4169d8",
    descripcion:
      "El gigante helado mas lejano, con vientos extremos y un color azul intenso por el metano.",
    datos: {
      Tipo: "Gigante helado",
      Diametro: "49,244 km",
      "Distancia del Sol": "4,495 millones km (30.1 UA)",
      "Periodo orbital": "164.8 anos",
      Lunas: "14",
      Atmosfera: "H2, He, CH4",
      Temperatura: "-214 C en nubes",
      Gravedad: "11.15 m/s2",
    },
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const TIPOS_VALIDOS = ["todos", "rocoso", "gaseoso", "helado", "estrella"];
  const filtroGuardado = localStorage.getItem("solar_filtro") || "todos";
  const sistemaSolar = document.querySelector(".sistema-solar");
  const escenario = document.querySelector(".escenario-3d");
  const sliderTrack = document.querySelector(".slider-track");
  const indicadores = document.querySelector(".slider-indicators");
  const botonesFiltro = document.querySelectorAll(".btn-filtro");
  const navLinks = document.querySelectorAll("nav a");
  const botonPausa = document.querySelector("#toggle-simulacion");
  const rangoVelocidad = document.querySelector("#velocidad-tiempo");
  const valorVelocidad = document.querySelector("#valor-velocidad");
  const btnPrev = document.querySelector(".slider-btn.prev");
  const btnNext = document.querySelector(".slider-btn.next");

  let velocidadTiempo = Number(rangoVelocidad.value);
  let tiempoSimulacion = 0;
  let ultimoFrame = performance.now();
  let pausado = false;
  let slideActual = 0;
  const elementosOrbitales = new Map();

  const crearFichaTecnica = (cuerpo) =>
    Object.entries(cuerpo.datos)
      .map(([termino, valor]) => `<dt>${termino}</dt><dd>${valor}</dd>`)
      .join("");

  const renderSistemaSolar = () => {
    const sol = cuerposCelestes[0];
    const solVisual = document.createElement("button");
    solVisual.type = "button";
    solVisual.className = "planeta-visual sol-visual";
    solVisual.dataset.index = "0";
    solVisual.dataset.tipo = sol.tipo;
    solVisual.style.setProperty("--planet-color", sol.color);
    solVisual.style.setProperty("--planet-size", `${sol.radioPx * 2}px`);
    solVisual.setAttribute("aria-label", `Ver informacion de ${sol.nombre}`);
    sistemaSolar.appendChild(solVisual);
    elementosOrbitales.set(0, { planeta: solVisual, orbita: null });

    cuerposCelestes.slice(1).forEach((cuerpo, posicion) => {
      const index = posicion + 1;
      const orbita = document.createElement("div");
      const planeta = document.createElement("button");

      orbita.className = "orbita";
      orbita.dataset.index = String(index);
      orbita.dataset.tipo = cuerpo.tipo;
      orbita.style.setProperty("--orbita-size", `${cuerpo.distanciaPx * 2}px`);

      planeta.type = "button";
      planeta.className = "planeta-visual";
      planeta.dataset.index = String(index);
      planeta.dataset.tipo = cuerpo.tipo;
      planeta.style.setProperty("--planet-size", `${cuerpo.radioPx * 2}px`);
      planeta.style.setProperty("--planet-color", cuerpo.color);
      planeta.setAttribute("aria-label", `Ver informacion de ${cuerpo.nombre}`);

      orbita.appendChild(planeta);
      sistemaSolar.appendChild(orbita);
      elementosOrbitales.set(index, { planeta, orbita });
    });
  };

  const renderSlider = () => {
    cuerposCelestes.forEach((cuerpo, index) => {
      const slide = document.createElement("article");
      const fichaId = `ficha-${cuerpo.id}`;

      slide.className = "slide-planeta";
      slide.dataset.index = String(index);
      slide.dataset.tipo = cuerpo.tipo;
      slide.setAttribute("aria-labelledby", `slide-title-${cuerpo.id}`);
      slide.innerHTML = `
        <div class="slide-visual" aria-hidden="true">
          <div class="slide-orbe" style="--planet-color: ${cuerpo.color}"></div>
        </div>
        <div class="slide-info">
          <span class="tipo">${cuerpo.tipo}</span>
          <h3 id="slide-title-${cuerpo.id}">${cuerpo.nombre}</h3>
          <p>${cuerpo.descripcion}</p>
          <button class="btn-ficha" type="button" aria-expanded="false" aria-controls="${fichaId}">
            Ver ficha tecnica
          </button>
          <dl id="${fichaId}" class="ficha-tecnica">
            ${crearFichaTecnica(cuerpo)}
          </dl>
        </div>
      `;

      const indicator = document.createElement("button");
      indicator.type = "button";
      indicator.className = "indicator";
      indicator.dataset.index = String(index);
      indicator.role = "tab";
      indicator.setAttribute("aria-label", `Mostrar ${cuerpo.nombre}`);
      indicator.setAttribute("aria-selected", "false");

      sliderTrack.appendChild(slide);
      indicadores.appendChild(indicator);
    });
  };

  const obtenerSlidesVisibles = () =>
    Array.from(document.querySelectorAll(".slide-planeta")).filter(
      (slide) => slide.style.display !== "none",
    );

  const actualizarSlider = () => {
    const slidesVisibles = obtenerSlidesVisibles();
    const slideActivo = document.querySelector(
      `.slide-planeta[data-index="${slideActual}"]`,
    );
    const posicionVisible = Math.max(0, slidesVisibles.indexOf(slideActivo));

    sliderTrack.style.transform = `translateX(-${posicionVisible * 100}%)`;

    document.querySelectorAll(".indicator").forEach((indicator) => {
      const activo = Number(indicator.dataset.index) === slideActual;
      const slide = document.querySelector(
        `.slide-planeta[data-index="${indicator.dataset.index}"]`,
      );
      indicator.classList.toggle("active", activo);
      indicator.hidden = slide?.style.display === "none";
      indicator.setAttribute("aria-selected", activo ? "true" : "false");
    });

    elementosOrbitales.forEach(({ planeta }, index) => {
      planeta.classList.toggle("activo", index === slideActual);
    });
  };

  const irASlide = (index) => {
    const slide = document.querySelector(`.slide-planeta[data-index="${index}"]`);
    if (!slide || slide.style.display === "none") {
      return;
    }

    slideActual = index;
    actualizarSlider();
  };

  const avanzarSlide = (direccion) => {
    const slidesVisibles = obtenerSlidesVisibles();
    if (slidesVisibles.length === 0) {
      return;
    }

    const slideActivo = document.querySelector(
      `.slide-planeta[data-index="${slideActual}"]`,
    );
    const posicionActual = Math.max(0, slidesVisibles.indexOf(slideActivo));
    const siguiente =
      (posicionActual + direccion + slidesVisibles.length) % slidesVisibles.length;

    irASlide(Number(slidesVisibles[siguiente].dataset.index));
  };

  const aplicarFiltro = (tipo) => {
    const filtroValido = TIPOS_VALIDOS.includes(tipo) ? tipo : "todos";
    let primerVisible = null;

    document.querySelectorAll(".slide-planeta").forEach((slide) => {
      const coincide =
        filtroValido === "todos" || slide.dataset.tipo === filtroValido;
      slide.style.display = coincide ? "grid" : "none";
      if (coincide && primerVisible === null) {
        primerVisible = Number(slide.dataset.index);
      }
    });

    elementosOrbitales.forEach(({ orbita, planeta }, index) => {
      const cuerpo = cuerposCelestes[index];
      const coincide = filtroValido === "todos" || cuerpo.tipo === filtroValido;
      const display = coincide ? "" : "none";
      planeta.style.display = display;
      if (orbita) {
        orbita.style.display = display;
      }
    });

    botonesFiltro.forEach((boton) => {
      const activo = boton.dataset.filtro === filtroValido;
      boton.setAttribute("aria-pressed", activo ? "true" : "false");
    });

    slideActual = primerVisible ?? 0;
    localStorage.setItem("solar_filtro", filtroValido);
    actualizarSlider();
  };

  const animar = (timestamp) => {
    const delta = (timestamp - ultimoFrame) / 1000;
    ultimoFrame = timestamp;

    if (!pausado) {
      tiempoSimulacion += delta * velocidadTiempo;
    }

    cuerposCelestes.forEach((cuerpo, index) => {
      if (cuerpo.periodoDias <= 0) {
        return;
      }

      const elementos = elementosOrbitales.get(index);
      const angulo = ((tiempoSimulacion / cuerpo.periodoDias) * 360) % 360;
      elementos.orbita.style.transform = `translate(-50%, -50%) rotate(${angulo}deg)`;
      elementos.planeta.style.transform = `translate(-50%, -50%) rotate(${-angulo}deg) rotateX(-60deg)`;
    });

    requestAnimationFrame(animar);
  };

  renderSistemaSolar();
  renderSlider();

  document.querySelectorAll(".planeta-visual").forEach((planeta) => {
    planeta.addEventListener("click", () => irASlide(Number(planeta.dataset.index)));
  });

  document.querySelectorAll(".indicator").forEach((indicator) => {
    indicator.addEventListener("click", () =>
      irASlide(Number(indicator.dataset.index)),
    );
  });

  document.querySelectorAll(".btn-ficha").forEach((boton) => {
    boton.addEventListener("click", () => {
      const ficha = document.querySelector(`#${boton.getAttribute("aria-controls")}`);
      const expandida = boton.getAttribute("aria-expanded") === "true";
      boton.setAttribute("aria-expanded", expandida ? "false" : "true");
      boton.textContent = expandida ? "Ver ficha tecnica" : "Ocultar ficha tecnica";
      ficha.classList.toggle("expanded", !expandida);
    });
  });

  botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", () => aplicarFiltro(boton.dataset.filtro));
  });

  btnPrev.addEventListener("click", () => avanzarSlide(-1));
  btnNext.addEventListener("click", () => avanzarSlide(1));

  botonPausa.addEventListener("click", () => {
    pausado = !pausado;
    botonPausa.setAttribute("aria-pressed", pausado ? "true" : "false");
    botonPausa.setAttribute(
      "aria-label",
      pausado ? "Reanudar simulacion" : "Pausar simulacion",
    );
    botonPausa.textContent = pausado ? "Reanudar" : "Pausar";
  });

  rangoVelocidad.addEventListener("input", () => {
    velocidadTiempo = Number(rangoVelocidad.value);
    valorVelocidad.textContent = `${velocidadTiempo}x`;
    rangoVelocidad.setAttribute("aria-valuenow", String(velocidadTiempo));
  });

  escenario.addEventListener("mousemove", (event) => {
    const rect = escenario.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    document.documentElement.style.setProperty("--rotate-x", `${60 - y * 16}deg`);
    document.documentElement.style.setProperty("--rotate-y", `${x * 18}deg`);
  });

  escenario.addEventListener("mouseleave", () => {
    document.documentElement.style.setProperty("--rotate-x", "60deg");
    document.documentElement.style.setProperty("--rotate-y", "0deg");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetElement = document.querySelector(link.getAttribute("href"));
      targetElement?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  aplicarFiltro(filtroGuardado);
  requestAnimationFrame(animar);
});
