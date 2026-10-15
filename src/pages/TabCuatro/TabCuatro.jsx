import { useState } from 'react'
import './TabCuatro.css'

// PESTAÑA 4 — integrante D
// Trabaja solo dentro de esta carpeta (src/pages/TabCuatro/).
export default function TabCuatro() {
  const [contador, setContador] = useState(0)

  return (
    <div className="tabcuatro">
      <header className="tabcuatro__header">
        <h1 className="tabcuatro__title">Pestaña 4</h1>
        <p className="tabcuatro__subtitle">Contenido a cargo del integrante D.</p>
      </header>

      <section className="tabcuatro__panel">
        <h2>Componente interactivo de ejemplo</h2>
        <div className="tabcuatro__counter">
          <button
            className="tabcuatro__button tabcuatro__button--ghost"
            type="button"
            onClick={() => setContador((valor) => valor - 1)}
          >
            −
          </button>
          <span className="tabcuatro__value">{contador}</span>
          <button
            className="tabcuatro__button"
            type="button"
            onClick={() => setContador((valor) => valor + 1)}
          >
            +
          </button>
        </div>
      </section>
    </div>
  )
}
