import { useState } from "react"
import "./TabUno.css"

const MOVIES = [
  {
    title: "CUANDO ACECHA LA MALDAD",
    year: "2023",
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
    title: "Sonríe",
    year: "2022",
    synopsis:
      "Una fuerza invisible se oculta tras una sonrisa. Cada encuentro deja una marca imborrable.",
  },
  {
    title: "Haz que regrese",
    year: "2025",
    synopsis:
      "Lo que fue enterrado vuelve a llamar. La única salida es no responder.",
  },
]

const SCENES = ["#1", "#2", "#3", "#4"]

export default function TabUno() {
  const [active, setActive] = useState("destacada")

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
            <div className="tabuno__poster" aria-label="Póster oficial de Cuando acecha la maldad">
              <span>Póster oficial</span>
            </div>
            <div className="tabuno__featured-info">
              <p className="tabuno__eyebrow text-[#8B0000]">EXPEDIENTE CLASIFICADO · {MOVIES[0].year}</p>
              <h1 className="tabuno__title">{MOVIES[0].title}</h1>
              <p className="tabuno__classified">{MOVIES[0].synopsis}</p>
              <ul className="tabuno__rules">

                {MOVIES[0].rules.map((r, i) => (
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
              {SCENES.map((s) => (
                <div key={s} className="tabuno__scene" aria-label={`Escena ${s}`}>
                  <span>{s}</span>
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
                  <span>Póster oficial</span>
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

