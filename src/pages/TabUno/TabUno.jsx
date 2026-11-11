import { useState } from "react"
import "./TabUno.css"

const FEATURED = {
  title: "CUANDO ACECHA LA MALDAD",
  year: "2023",
  poster: "/imagenes/cuando-acecha-portada.png",
  synopsis:
    "Expediente clasificado. Brotes de encarnados en el campo. Protocolo de supervivencia obligatorio.",
  rules: [
    "No uses luz eléctrica.",
    "No les dispares.",
    "No mires a los ojos.",
    "No abras las puertas después del anochecer.",
  ],
  scenes: [
    { src: "/imagenes/escena1.png", label: "Escena de impacto 01" },
    { src: "/imagenes/escena2.png", label: "Escena de impacto 02" },
    { src: "/imagenes/escena3.png", label: "Escena de impacto 03" },
  ],
}

const ANALISIS = [
  {
    title: "Industria Cultural (Escuela de Frankfurt y Estudios Latinoamericanos)",
    text: "Desde la Escuela de Frankfurt, la industria cultural estandariza el cine de terror comercial para el consumo masivo mediante fórmulas repetitivas. En cambio, desde los estudios latinoamericanos, mi página reivindica el valor de las producciones regionales y de autor, ubicando arriba de todo a Cuando acecha la maldad como un producto con identidad rural argentina frente a las fórmulas tradicionales.",
    wide: false,
  },
  {
    title: "Teoría de la Dependencia",
    text: "Históricamente, la distribución audiovisual en Latinoamérica estuvo dominada por las grandes productoras norteamericanas. Esta página rompe con esa dependencia cultural al darle el protagonismo principal a una película argentina, posicionándola por encima de los estrenos internacionales de la Cartelera Complementaria (Obsesión y Haz que regrese).",
    wide: false,
  },
  {
    title: "Aldea Global",
    text: "El diseño conecta obras de distintos orígenes geográficos en un mismo entorno web accesible desde cualquier parte del mundo. A su vez, el género de terror actúa como un lenguaje universal donde el miedo y la tensión que transmiten las imágenes cruzan fronteras sin barreras.",
    wide: false,
  },
  {
    title: "Mediaciones e Hipermediaciones",
    text: "El consumo pasa de ser una lectura pasiva a una experiencia interactiva. En lugar de mostrar una sinopsis común, la web transforma la película en un Expediente Clasificado donde el usuario explora las reglas de supervivencia (como '01 No uses luz eléctrica' o '02 No les dispares') y recorre las escenas a su propio ritmo.",
    wide: false,
  },
  {
    title: "Interfaz",
    text: "La pantalla fue diseñada como una extensión visual del género de terror. El fondo en negro absoluto, las tarjetas oscuras y los acentos en rojo preparan psicológicamente al visitante para la atmósfera de las películas, manteniendo una estructura ordenada y clara.",
    wide: false,
  },
  {
    title: "Convergencia",
    text: "Dentro de una misma vista convergen distintos formatos y lenguajes digitales. Se integran textos informativos, listas numeradas de reglas, pósters oficiales y una galería de Escenas de Impacto para enriquecer la presentación visual de cada historia.",
    wide: false,
  },
  {
    title: "Narrativas Transmedia",
    text: "El universo de estas películas se expande más allá del cine mediante debates y análisis en redes sociales o YouTube. Este sitio funciona como una pieza transmedia que toma elementos internos de la ficción —como las leyes del mal— y los traduce al formato de una bitácora digital interactiva.",
    wide: true,
  },
]

const CARTELERA = [
  {
    title: "Obsesión",
    year: "2025",
    poster: "/imagenes/obsesion.png",
    synopsis:
      "Una obsesión que consume. Lo que comienza como deseo termina en una pesadilla sin salida.",
  },
  {
    title: "Haz que regrese",
    year: "2025",
    poster: "/imagenes/haz-que-regrese.png",
    synopsis:
      "Lo que fue enterrado vuelve a llamar. La única salida es no responder.",
  },
]

export default function TabUno() {
  const [active, setActive] = useState("destacada")

  return (
    <div className="tabuno tabuno--frozen">
      {/* Atmósfera gélida de fondo */}
      <div className="tabuno__frozen" aria-hidden="true" />

      <div className="tabuno__content">
        <header className="tabuno__header">
          <span className="tabuno__brand">ARCHIVO CINEMATOGRÁFICO // CLASIFICADO</span>
          <nav className="tabuno__nav">
            {["destacada", "cartelera"].map((k) => (
              <button
                key={k}
                type="button"
                className={`tabuno__nav-link ${active === k ? "is-active" : ""}`}
                onClick={() => setActive(k)}
              >
                {k === "destacada" ? "Película Destacada" : "Cartelera"}
              </button>
            ))}
          </nav>
        </header>

        {/* ============ SECCIÓN PRINCIPAL — EXPEDIENTE CLASIFICADO ============ */}
        <section id="destacada" className="tabuno__featured" hidden={active !== "destacada"}>
          <div className="tabuno__featured-grid">
            <figure className="tabuno__poster tabuno__poster--large">
              <img
                src={FEATURED.poster}
                alt={`Portada oficial de ${FEATURED.title}`}
                className="tabuno__img"
                loading="eager"
              />
            </figure>

            <div className="tabuno__featured-info">
              <p className="tabuno__eyebrow">
                EXPEDIENTE CLASIFICADO · {FEATURED.year}
              </p>
              <h1 className="tabuno__title">{FEATURED.title}</h1>
              <p className="tabuno__classified">{FEATURED.synopsis}</p>

              <p className="tabuno__rules-label">Reglas de supervivencia</p>
              <ul className="tabuno__rules">
                {FEATURED.rules.map((rule, i) => (
                  <li key={rule} className="tabuno__rule">
                    <span className="tabuno__rule-index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="tabuno__rule-text">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Escenas de impacto — grilla de 3 columnas */}
          <div className="tabuno__scenes">
            <h2 className="tabuno__section-title">Escenas de impacto</h2>
            <div className="tabuno__scene-grid">
              {FEATURED.scenes.map((scene, i) => (
                <figure key={scene.src} className="tabuno__scene">
                  <img
                    src={scene.src}
                    alt={scene.label}
                    className="tabuno__img"
                    loading="lazy"
                  />
                  <figcaption className="tabuno__scene-caption">
                    {String(i + 1).padStart(2, "0")} · REGISTRO DE CAMPO
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CARTELERA COMPLEMENTARIA ============ */}
        <section id="cartelera" className="tabuno__cartelera" hidden={active !== "cartelera"}>
          <h2 className="tabuno__section-title">Cartelera complementaria</h2>
          <div className="tabuno__grid">
            {CARTELERA.map((movie) => (
              <article key={movie.title} className="tabuno__card">
                <figure className="tabuno__poster tabuno__poster--card">
                  <img
                    src={movie.poster}
                    alt={`Portada oficial de ${movie.title}`}
                    className="tabuno__img"
                    loading="lazy"
                  />
                </figure>
                <h3 className="tabuno__card-title">
                  {movie.title} <span className="tabuno__card-year">({movie.year})</span>
                </h3>
                <p className="tabuno__card-desc">{movie.synopsis}</p>
                <button type="button" className="tabuno__btn">Ver detalles</button>
              </article>
            ))}
          </div>
        </section>

        {/* ============ ANÁLISIS MEDIÁTICO Y CULTURAL ============ */}
        <section id="analisis" className="tabuno__analisis">
          <h2 className="tabuno__section-title">Análisis mediático y cultural</h2>
          <div className="tabuno__analisis-grid">
            {ANALISIS.map((block) => (
              <article
                key={block.title}
                className={`tabuno__analisis-card ${block.wide ? "tabuno__analisis-card--wide" : ""}`}
              >
                <h3 className="tabuno__analisis-title">{block.title}</h3>
                <p className="tabuno__analisis-text">{block.text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
