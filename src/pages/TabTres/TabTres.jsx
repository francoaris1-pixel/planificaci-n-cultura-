import { useState } from 'react'
import './TabTres.css'

// PESTAÑA 3 — integrante C
export default function TabTres() {
  const [valor, setValor] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    console.log('Valor enviado:', valor)
  }

  return (
    <div className="tabtres">
      <header className="tabtres__header">
        <h1 className="tabtres__title">Pestaña 3</h1>
        <p className="tabtres__subtitle">
          Contenido a cargo del integrante C.
        </p>
      </header>

      <form className="tabtres__form" onSubmit={handleSubmit}>
        <div className="tabtres__field">
          <label className="tabtres__label" htmlFor="tabtres-campo">
            Campo de ejemplo
          </label>

          <input
            id="tabtres-campo"
            className="tabtres__input"
            type="text"
            placeholder="Escribe algo..."
            value={valor}
            onChange={(event) => setValor(event.target.value)}
          />
        </div>

        <button className="tabtres__button" type="submit">
          Enviar
        </button>
      </form>

      {/* BOTÓN CON LINK */}
      <a
        className="tabtres__link"
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ir a la página
      </a>

    </div>
  )
}
