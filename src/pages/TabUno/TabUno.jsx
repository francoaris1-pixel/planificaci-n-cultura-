import { useState } from "react"
import "./TabUno.css"

const MOVIES = [
  {
    title: "CUANDO ACECHA EL MAL",
    year: "2023",
    poster: "https://i.postimg.cc/prrcZnMf/portada-ecena.png",
    scenes: [
      "https://i.postimg.cc/h4Z5GMV2/ecena1.png",
      "https://i.postimg.cc/d09Wc9qN/ecena2.png",
      "https://i.postimg.cc/T1B0J79T/ecena3.png",
    ],
    synopsis:
      "Expediente clasificado. Brotes de encarnados en el campo. Protocolo de supervivencia obligatorio.",
    rules: [
      "No uses luz eléctrica.",
      "No les dispares.",
      "No mires a los ojos.",
      "No abras las puertas después del anochecer.",
    ],
  },
  {
    title: "Obsesión",
    year: "2025",
    poster: "https://i.postimg.cc/xdGvbjhm/portada-ecena-2.png",
    synopsis:
      "Una obsesión que consume. Lo que comienza como deseo termina en una pesadilla sin salida.",
  },
  {
    title: "Haz que regrese",
    year: "2025",
    poster: "https://i.postimg.cc/SsDcDTmT/portada-ecena-3.png",
    synopsis:
      "Lo que fue enterrado vuelve a llamar. La única salida es no responder.",
  },
]

export default function TabUno() {
  const [active, setActive] = useState("destacada")
  const featured = MOVIES[0]

  return (
    <div className="tabuno tabuno--frozen bg-black text-gray-200">
      <div className="tabuno__frozen" aria-hidden="true" />
      <div className="tabuno__content relative z-10">
        <header className="tabuno__header border-b border-[#1a1a1a]">
          <span className="tabuno__brand text-[#8B0000]">ARCHIVO CINEMATOGRÁFICO // CLASIFICADO</span>
          <nav className="tabuno__nav">
            {["destacada", "cartelera"].map((k) => (
              <button
                key={k}
                type="button"
                className={`tabuno__nav-link text-gray-400 hover:text-[#8B0000] ${active === k ? "is-active" : ""}`}
                onClick={() => setActive(k)}
              >
                {k === "destacada" ? "Película Destacada" : "Cartelera"}
              </button>
            ))}
          </nav>
        </header>

        <section id="destacada" className="tabuno__featured">
          <div className="tabuno__featured-grid">
            <div className="tabuno__poster" aria-label={`Póster oficial de ${featured.title}`}>
              <img
                src={featured.poster}
                alt={`Póster oficial de ${featured.title}`}
                className="poster"
                loading="lazy"
              />
            </div>
            <div className="tabuno__featured-info">
              <p className="tabuno__eyebrow text-[#8B0000]">EXPEDIENTE CLASIFICADO · {featured.year}</p>
              <h1 className="tabuno__title">{featured.title}</h1>
              <p className="tabuno__classified">{featured.synopsis}</p>
              <ul className="tabuno__rules">
                {featured.rules.map((r, i) => (
                  <li key={i} className="tabuno__rule">
                    <span className="tabuno__rule-index">{String(i + 1).padStart(2, "0")}</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tabuno__scenes">
            <h2 className="tabuno__section-title">Escenas de impacto</h2>
            <div className="tabuno__scene-grid">
              {featured.scenes.map((src, i) => (
                <div key={i} className="tabuno__scene">
                  <img
                    src={src}
                    alt={`Escena ${i + 1} de ${featured.title}`}
                    className="scene"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cartelera" className="tabuno__cartelera">
          <h2 className="tabuno__section-title">Cartelera complementaria</h2>
          <div className="tabuno__grid">
            {MOVIES.slice(1).map((m) => (
              <article key={m.title} className="tabuno__card border border-[#1a1a1a]">
                <div className="tabuno__poster tabuno__poster--small" aria-label={`Póster oficial de ${m.title}`}>
                  <img
                    src={m.poster}
                    alt={`Póster oficial de ${m.title}`}
                    className="poster"
                    loading="lazy"
                  />
                </div>
                <h3 className="tabuno__card-title">{m.title} <span className="tabuno__card-year">({m.year})</span></h3>
                <p className="tabuno__card-desc">{m.synopsis}</p>
                <button type="button" className="tabuno__btn">Ver Detalles</button>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

