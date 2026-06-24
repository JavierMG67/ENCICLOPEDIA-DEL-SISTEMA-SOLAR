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
    imagenId: "sun",
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
    imagenId: "mercury",
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
    imagenId: "venus",
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
    imagenId: "earth",
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
    imagenId: "mars",
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
    imagenId: "jupiter",
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
    imagenId: "saturn",
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
    imagenId: "uranus",
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
    imagenId: "neptune",
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

  const obtenerSrcImagen = (cuerpo) =>
    `../img/${(cuerpo.imagenId || cuerpo.id).trim()}.webp`;

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
    solVisual.innerHTML = `<img src="${obtenerSrcImagen(sol)}" alt="${sol.nombre}" loading="lazy">`;
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
      planeta.innerHTML = `<img src="${obtenerSrcImagen(cuerpo)}" alt="${cuerpo.nombre}" loading="lazy">`;

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
          <div class="slide-orbe" style="--planet-color: ${cuerpo.color}">
            <img src="${obtenerSrcImagen(cuerpo)}" alt="${cuerpo.nombre}" loading="lazy">
          </div>
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

    document.querySelectorAll(".slide-planeta").forEach((slide) => {
      const activo = Number(slide.dataset.index) === slideActual;
      slide.classList.toggle("activo", activo);
      slide.classList.toggle("active", activo);
    });

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
    const slide = document.querySelector(
      `.slide-planeta[data-index="${index}"]`,
    );
    if (!slide || slide.style.display === "none") {
      return;
    }

    slideActual = index;
    actualizarSlider();
  };

  // === Gestion de foco y navegacion por tab en el slider ===
  const gestionarFocoSlider = () => {
    const slides = document.querySelectorAll(".slide-planeta");

    slides.forEach((slide) => {
      slide.setAttribute("tabindex", "-1");

      if (slide.dataset.focoSliderVinculado === "true") {
        return;
      }

      const enfocarSlideActivo = () => {
        const index = Number(slide.dataset.index);
        if (index !== slideActual) {
          irASlide(index);
        }
      };

      slide.addEventListener("focusin", enfocarSlideActivo);

      const elementosInteractivos = slide.querySelectorAll(
        'button, a, [tabindex]:not([tabindex="-1"])',
      );

      elementosInteractivos.forEach((elemento) => {
        elemento.addEventListener("focusin", enfocarSlideActivo);
      });

      slide.dataset.focoSliderVinculado = "true";
    });
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
      (posicionActual + direccion + slidesVisibles.length) %
      slidesVisibles.length;

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
  gestionarFocoSlider();

  const observerFiltroSlider = new MutationObserver(() => {
    gestionarFocoSlider();
  });
  observerFiltroSlider.observe(sliderTrack, {
    childList: true,
    subtree: true,
  });

  document.querySelectorAll(".planeta-visual").forEach((planeta) => {
    planeta.addEventListener("click", () =>
      irASlide(Number(planeta.dataset.index)),
    );
  });

  document.querySelectorAll(".indicator").forEach((indicator) => {
    indicator.addEventListener("click", () =>
      irASlide(Number(indicator.dataset.index)),
    );
  });

  document.querySelectorAll(".btn-ficha").forEach((boton) => {
    boton.addEventListener("click", () => {
      const ficha = document.querySelector(
        `#${boton.getAttribute("aria-controls")}`,
      );
      const expandida = boton.getAttribute("aria-expanded") === "true";
      boton.setAttribute("aria-expanded", expandida ? "false" : "true");
      boton.textContent = expandida
        ? "Ver ficha tecnica"
        : "Ocultar ficha tecnica";
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
    document.documentElement.style.setProperty(
      "--rotate-x",
      `${60 - y * 16}deg`,
    );
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

  // === Rotacion interactiva de orbes del slider ===
  const activarGiroDiscos = () => {
    const discos = document.querySelectorAll(".slide-visual");

    discos.forEach((disco) => {
      if (disco.dataset.giroVinculado === "true") {
        return;
      }

      const orbe = disco.querySelector(".slide-orbe");
      if (!orbe) {
        return;
      }

      let isDragging = false;
      let startX = 0;
      let startY = 0;
      let currentRotateX = 0;
      let currentRotateY = 0;
      let previousRotateX = 0;
      let previousRotateY = 0;
      let velocityX = 0;
      let velocityY = 0;
      let lastX = 0;
      let lastY = 0;
      let lastTime = 0;
      let animationId = null;

      const obtenerPunto = (event) => {
        const punto = event.touches ? event.touches[0] : event;
        return {
          x: punto.clientX,
          y: punto.clientY,
        };
      };

      const handleStart = (event) => {
        isDragging = true;
        const { x, y } = obtenerPunto(event);
        startX = x;
        startY = y;
        lastX = x;
        lastY = y;
        lastTime = performance.now();
        velocityX = 0;
        velocityY = 0;
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      };

      const handleMove = (event) => {
        if (!isDragging) {
          return;
        }

        event.preventDefault();
        const { x, y } = obtenerPunto(event);
        const deltaX = x - startX;
        const deltaY = y - startY;
        const currentTime = performance.now();
        const deltaTime = currentTime - lastTime || 16;

        currentRotateY = previousRotateY + deltaX * 0.5;
        currentRotateX = previousRotateX - deltaY * 0.5;

        velocityX = ((x - lastX) / deltaTime) * 0.5;
        velocityY = ((y - lastY) / deltaTime) * 0.5;

        lastX = x;
        lastY = y;
        lastTime = currentTime;

        orbe.style.transform = `rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`;
      };

      const handleEnd = () => {
        if (!isDragging) {
          return;
        }

        isDragging = false;
        previousRotateX = currentRotateX;
        previousRotateY = currentRotateY;

        const animateInertia = () => {
          velocityX *= 0.95;
          velocityY *= 0.95;

          currentRotateY += velocityX * 16;
          currentRotateX += velocityY * 16;

          orbe.style.transform = `rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`;

          if (Math.abs(velocityX) > 0.1 || Math.abs(velocityY) > 0.1) {
            animationId = requestAnimationFrame(animateInertia);
          } else {
            previousRotateX = currentRotateX;
            previousRotateY = currentRotateY;
            animationId = null;
          }
        };

        if (Math.abs(velocityX) > 0.1 || Math.abs(velocityY) > 0.1) {
          animateInertia();
        }
      };

      disco.addEventListener("mousedown", handleStart);
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handleEnd);
      disco.addEventListener("touchstart", handleStart, { passive: false });
      window.addEventListener("touchmove", handleMove, { passive: false });
      window.addEventListener("touchend", handleEnd);
      disco.dataset.giroVinculado = "true";
    });
  };

  activarGiroDiscos();

  const observerFiltro = new MutationObserver(() => activarGiroDiscos());
  observerFiltro.observe(sliderTrack, {
    childList: true,
    subtree: true,
  });

  // === Control de pantalla de entrada ===
  const pantallaEntrada = document.querySelector(".pantalla-entrada");
  const btnAcceso = document.querySelector("#btnAccesoSimulador");
  const seccionInicio = document.querySelector("#inicio");

  document.body.classList.add("menu-activo");

  btnAcceso?.addEventListener("click", () => {
    pantallaEntrada?.classList.add("oculta");
    document.body.classList.remove("menu-activo");

    setTimeout(() => {
      seccionInicio?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);

    setTimeout(() => {
      if (pantallaEntrada) {
        pantallaEntrada.style.display = "none";
      }
    }, 800);
  });

  document.addEventListener(
    "wheel",
    (event) => {
      if (document.body.classList.contains("menu-activo")) {
        event.preventDefault();
      }
    },
    { passive: false },
  );

  document.addEventListener(
    "touchmove",
    (event) => {
      if (document.body.classList.contains("menu-activo")) {
        event.preventDefault();
      }
    },
    { passive: false },
  );

  document.addEventListener("keydown", (event) => {
    if (!document.body.classList.contains("menu-activo")) {
      return;
    }

    const teclasScroll = [
      " ",
      "Space",
      "ArrowDown",
      "ArrowUp",
      "PageDown",
      "PageUp",
      "Home",
      "End",
    ];

    if (teclasScroll.includes(event.key) || teclasScroll.includes(event.code)) {
      event.preventDefault();
    }
  });

  // === Contencion de foco para navegacion por teclado ===
  const contenedorPrincipal = document.querySelector("main");

  const obtenerElementosFocusables = () => {
    const selectores = [
      "button:not([disabled])",
      "a[href]",
      "input:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
    ].join(", ");

    return Array.from(contenedorPrincipal?.querySelectorAll(selectores) || []).filter(
      (elemento) =>
        elemento.offsetParent !== null || elemento === document.activeElement,
    );
  };

  document.addEventListener("keydown", (evento) => {
    if (document.body.classList.contains("menu-activo")) {
      return;
    }

    // No interferir con el trap de foco del panel de accesibilidad
    if (panelAcc?.classList.contains("abierto")) {
      return;
    }

    if (evento.key !== "Tab") {
      return;
    }

    const elementosFocusables = obtenerElementosFocusables();
    if (elementosFocusables.length === 0) {
      return;
    }

    const primerElemento = elementosFocusables[0];
    const ultimoElemento = elementosFocusables[elementosFocusables.length - 1];
    const elementoActivo = document.activeElement;

    if (evento.shiftKey && elementoActivo === primerElemento) {
      evento.preventDefault();
      ultimoElemento.focus();
    } else if (!evento.shiftKey && elementoActivo === ultimoElemento) {
      evento.preventDefault();
      primerElemento.focus();
    }
  });

  document.addEventListener("focusout", () => {
    if (document.body.classList.contains("menu-activo")) {
      return;
    }

    // No redirigir el foco cuando el panel está abierto ni cuando
    // el foco se mueve hacia el botón de accesibilidad (fuera de main)
    if (panelAcc?.classList.contains("abierto")) {
      return;
    }

    setTimeout(() => {
      const activo = document.activeElement;

      // Permitir foco en el botón de accesibilidad y en el panel aunque estén fuera de main
      if (btnAbrirAcc?.contains(activo) || panelAcc?.contains(activo)) {
        return;
      }

      if (!contenedorPrincipal?.contains(activo)) {
        const elementosFocusables = obtenerElementosFocusables();
        if (elementosFocusables.length > 0) {
          elementosFocusables[0].focus();
        }
      }
    }, 0);
  });

  requestAnimationFrame(animar);

  // =========================================================================
  // === MÓDULO DE ACCESIBILIDAD — Ley N.° 7600 / WCAG 2.1 AA / CFIA ========
  // =========================================================================

  // --- Claves de localStorage ---
  const PREFS = {
    tamanoTexto:       "acc_tamano_texto",       // "normal" | "grande" | "extra-grande"
    altoContraste:     "acc_alto_contraste",      // "1" | "0"
    dislexia:          "acc_dislexia",            // "1" | "0"
    subrayarEnlaces:   "acc_subrayar_enlaces",    // "1" | "0"
    reducirAnimaciones:"acc_reducir_animaciones", // "1" | "0"
    monocromatico:     "acc_monocromatico",       // "1" | "0"
    espaciado:         "acc_espaciado",           // "1" | "0"
  };

  // --- Referencias al DOM del panel ---
  const panelAcc        = document.getElementById("panel-accesibilidad");
  const panelOverlay    = document.getElementById("panel-overlay");
  const btnAbrirAcc     = document.getElementById("btn-accesibilidad");
  const btnCerrarAcc    = document.getElementById("btn-cerrar-acc");
  const btnRestablecerAcc = document.getElementById("btn-restablecer-acc");
  const accAnuncio      = document.getElementById("acc-anuncio");

  // Controles de tamaño de texto
  const radiosTexto     = document.querySelectorAll('input[name="tamano-texto"]');

  // Controles toggle
  const toggleContraste     = document.getElementById("toggle-contraste");
  const toggleDislexia      = document.getElementById("toggle-dislexia");
  const toggleEnlaces       = document.getElementById("toggle-enlaces");
  const toggleAnimaciones   = document.getElementById("toggle-animaciones");
  const toggleMonocromatico = document.getElementById("toggle-monocromatico");
  const toggleEspaciado     = document.getElementById("toggle-espaciado");

  // --- Detección de preferencia del sistema: prefers-reduced-motion ---
  const prefiereMenosMovimiento = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  // --- Anunciar cambios a lectores de pantalla (WCAG 4.1.3) ---
  const anunciarCambio = (mensaje) => {
    if (!accAnuncio) return;
    // Limpiar y reasignar para garantizar disparo del evento en lectores de pantalla
    accAnuncio.textContent = "";
    requestAnimationFrame(() => {
      accAnuncio.textContent = mensaje;
    });
  };

  // --- Carga de preferencias desde localStorage ---
  const cargarPreferencias = () => {
    const prefs = {
      tamanoTexto:       localStorage.getItem(PREFS.tamanoTexto)        || "normal",
      altoContraste:     localStorage.getItem(PREFS.altoContraste)      === "1",
      dislexia:          localStorage.getItem(PREFS.dislexia)           === "1",
      subrayarEnlaces:   localStorage.getItem(PREFS.subrayarEnlaces)    === "1",
      reducirAnimaciones:localStorage.getItem(PREFS.reducirAnimaciones) === "1",
      monocromatico:     localStorage.getItem(PREFS.monocromatico)      === "1",
      espaciado:         localStorage.getItem(PREFS.espaciado)          === "1",
    };

    // Respetar prefers-reduced-motion del sistema operativo si no hay preferencia guardada
    if (localStorage.getItem(PREFS.reducirAnimaciones) === null) {
      prefs.reducirAnimaciones = prefiereMenosMovimiento.matches;
    }

    return prefs;
  };

  // --- Aplicar clases al <body> según preferencias ---
  const aplicarPreferencias = (prefs) => {
    const body = document.body;

    // Tamaño de texto
    body.classList.remove("texto-grande", "texto-extra-grande");
    if (prefs.tamanoTexto === "grande") {
      body.classList.add("texto-grande");
    } else if (prefs.tamanoTexto === "extra-grande") {
      body.classList.add("texto-extra-grande");
    }

    // Alto contraste
    body.classList.toggle("alto-contraste",     prefs.altoContraste);

    // Fuente para dislexia
    body.classList.toggle("fuente-dislexia",    prefs.dislexia);

    // Subrayar enlaces
    body.classList.toggle("subrayar-enlaces",   prefs.subrayarEnlaces);

    // Reducir animaciones
    body.classList.toggle("sin-animaciones",    prefs.reducirAnimaciones);

    // Modo monocromático
    body.classList.toggle("modo-monocromatico", prefs.monocromatico);

    // Espaciado ampliado
    body.classList.toggle("espaciado-ampliado", prefs.espaciado);
  };

  // --- Sincronizar controles del panel con el estado cargado ---
  const sincronizarControles = (prefs) => {
    // Radios de tamaño de texto
    radiosTexto.forEach((radio) => {
      radio.checked = radio.value === prefs.tamanoTexto;
    });

    // Toggles
    if (toggleContraste)     toggleContraste.checked     = prefs.altoContraste;
    if (toggleDislexia)      toggleDislexia.checked      = prefs.dislexia;
    if (toggleEnlaces)       toggleEnlaces.checked       = prefs.subrayarEnlaces;
    if (toggleAnimaciones)   toggleAnimaciones.checked   = prefs.reducirAnimaciones;
    if (toggleMonocromatico) toggleMonocromatico.checked = prefs.monocromatico;
    if (toggleEspaciado)     toggleEspaciado.checked     = prefs.espaciado;
  };

  // --- Guardar una preferencia individual ---
  const guardarPreferencia = (clave, valor) => {
    localStorage.setItem(clave, valor);
  };

  // --- Trap de foco dentro del panel (WCAG 2.1.2) ---
  const SELECTORES_FOCUSABLES =
    'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  // Nota: offsetParent es null para elementos dentro de position:fixed,
  // por lo que usamos offsetWidth/offsetHeight para detectar visibilidad.
  const obtenerFocusablesPanel = () =>
    Array.from(panelAcc.querySelectorAll(SELECTORES_FOCUSABLES)).filter(
      (el) => el.offsetWidth > 0 && el.offsetHeight > 0 && !el.closest("[inert]"),
    );

  const trapFoco = (evento) => {
    if (!panelAcc.classList.contains("abierto")) return;
    if (evento.key !== "Tab") return;

    const focusables = obtenerFocusablesPanel();
    if (focusables.length === 0) return;

    const primero = focusables[0];
    const ultimo  = focusables[focusables.length - 1];

    if (evento.shiftKey) {
      if (document.activeElement === primero) {
        evento.preventDefault();
        ultimo.focus();
      }
    } else {
      if (document.activeElement === ultimo) {
        evento.preventDefault();
        primero.focus();
      }
    }
  };

  // --- Abrir panel ---
  let elementoAntesDePanelAcc = null;

  const abrirPanel = () => {
    if (!panelAcc) return;

    elementoAntesDePanelAcc = document.activeElement;

    panelAcc.removeAttribute("inert");
    panelAcc.setAttribute("aria-hidden", "false");
    panelAcc.classList.add("abierto");

    panelOverlay?.classList.add("visible");
    btnAbrirAcc?.setAttribute("aria-expanded", "true");

    // Mover foco al primer elemento del panel
    requestAnimationFrame(() => {
      const focusables = obtenerFocusablesPanel();
      if (focusables.length > 0) focusables[0].focus();
    });

    document.addEventListener("keydown", trapFoco);
  };

  // --- Cerrar panel ---
  const cerrarPanel = () => {
    if (!panelAcc) return;

    panelAcc.setAttribute("inert", "");
    panelAcc.setAttribute("aria-hidden", "true");
    panelAcc.classList.remove("abierto");

    panelOverlay?.classList.remove("visible");
    btnAbrirAcc?.setAttribute("aria-expanded", "false");

    document.removeEventListener("keydown", trapFoco);

    // Devolver el foco al botón que abrió el panel
    requestAnimationFrame(() => {
      (elementoAntesDePanelAcc || btnAbrirAcc)?.focus();
    });
  };

  // --- Restablecer todas las preferencias ---
  const restablecerPreferencias = () => {
    Object.values(PREFS).forEach((clave) => localStorage.removeItem(clave));
    const prefsDefecto = cargarPreferencias();
    aplicarPreferencias(prefsDefecto);
    sincronizarControles(prefsDefecto);
    anunciarCambio("Preferencias de accesibilidad restablecidas a los valores predeterminados.");
  };

  // --- Listeners del botón flotante y botón cerrar ---
  btnAbrirAcc?.addEventListener("click", () => {
    if (panelAcc.classList.contains("abierto")) {
      cerrarPanel();
    } else {
      abrirPanel();
    }
  });

  btnCerrarAcc?.addEventListener("click", cerrarPanel);

  // Cerrar al hacer clic en el overlay
  panelOverlay?.addEventListener("click", cerrarPanel);

  // Cerrar con tecla Escape (WCAG 2.1 — SC 1.4 / patrón de diálogo)
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && panelAcc?.classList.contains("abierto")) {
      cerrarPanel();
    }
  });

  // --- Listener: tamaño de texto ---
  radiosTexto.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (!radio.checked) return;
      const valor = radio.value;
      guardarPreferencia(PREFS.tamanoTexto, valor);

      document.body.classList.remove("texto-grande", "texto-extra-grande");
      if (valor === "grande")       document.body.classList.add("texto-grande");
      if (valor === "extra-grande") document.body.classList.add("texto-extra-grande");

      const etiquetas = { normal: "Normal", grande: "Grande (125%)", "extra-grande": "Extra grande (150%)" };
      anunciarCambio(`Tamaño de texto cambiado a ${etiquetas[valor] || valor}.`);
    });
  });

  // --- Listener: alto contraste ---
  toggleContraste?.addEventListener("change", () => {
    const activo = toggleContraste.checked;
    guardarPreferencia(PREFS.altoContraste, activo ? "1" : "0");
    document.body.classList.toggle("alto-contraste", activo);
    anunciarCambio(activo ? "Alto contraste activado." : "Alto contraste desactivado.");
  });

  // --- Listener: fuente para dislexia ---
  toggleDislexia?.addEventListener("change", () => {
    const activo = toggleDislexia.checked;
    guardarPreferencia(PREFS.dislexia, activo ? "1" : "0");
    document.body.classList.toggle("fuente-dislexia", activo);
    anunciarCambio(activo ? "Fuente Lexend para dislexia activada." : "Fuente para dislexia desactivada.");
  });

  // --- Listener: subrayar enlaces ---
  toggleEnlaces?.addEventListener("change", () => {
    const activo = toggleEnlaces.checked;
    guardarPreferencia(PREFS.subrayarEnlaces, activo ? "1" : "0");
    document.body.classList.toggle("subrayar-enlaces", activo);
    anunciarCambio(activo ? "Subrayado de enlaces activado." : "Subrayado de enlaces desactivado.");
  });

  // --- Listener: reducir animaciones ---
  toggleAnimaciones?.addEventListener("change", () => {
    const activo = toggleAnimaciones.checked;
    guardarPreferencia(PREFS.reducirAnimaciones, activo ? "1" : "0");
    document.body.classList.toggle("sin-animaciones", activo);
    anunciarCambio(activo ? "Animaciones reducidas." : "Animaciones normales restauradas.");
  });

  // --- Listener: modo monocromático ---
  toggleMonocromatico?.addEventListener("change", () => {
    const activo = toggleMonocromatico.checked;
    guardarPreferencia(PREFS.monocromatico, activo ? "1" : "0");
    document.body.classList.toggle("modo-monocromatico", activo);
    anunciarCambio(activo ? "Modo monocromatico activado." : "Modo monocromatico desactivado.");
  });

  // --- Listener: espaciado ampliado ---
  toggleEspaciado?.addEventListener("change", () => {
    const activo = toggleEspaciado.checked;
    guardarPreferencia(PREFS.espaciado, activo ? "1" : "0");
    document.body.classList.toggle("espaciado-ampliado", activo);
    anunciarCambio(activo ? "Espaciado ampliado activado." : "Espaciado ampliado desactivado.");
  });

  // --- Listener: restablecer preferencias ---
  btnRestablecerAcc?.addEventListener("click", restablecerPreferencias);

  // --- Sincronizar con cambio del sistema operativo en prefers-reduced-motion ---
  prefiereMenosMovimiento.addEventListener("change", (e) => {
    // Solo actualizar si el usuario no ha guardado una preferencia manual
    if (localStorage.getItem(PREFS.reducirAnimaciones) === null) {
      document.body.classList.toggle("sin-animaciones", e.matches);
      if (toggleAnimaciones) toggleAnimaciones.checked = e.matches;
    }
  });

  // --- Inicialización: cargar y aplicar preferencias al arrancar ---
  const prefsIniciales = cargarPreferencias();
  aplicarPreferencias(prefsIniciales);
  sincronizarControles(prefsIniciales);

  // =========================================================================
  // === FIN MÓDULO DE ACCESIBILIDAD =========================================
  // =========================================================================
});
