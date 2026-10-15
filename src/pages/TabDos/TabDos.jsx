import './TabDos.css'

// PESTAÑA 2 — integrante B
// Trabaja solo dentro de esta carpeta (src/pages/TabDos/).
const items = [
  { title: 'Elemento 1', text: 'Descripción breve del primer elemento.' },
  { title: 'Elemento 2', text: 'Descripción breve del segundo elemento.' },
  { title: 'Elemento 3', text: 'Descripción breve del tercer elemento.' },
]

export default function TabDos() {
  return (
    <div className="tabdos">
      <header className="tabdos__header">
        <h1 className="tabdos__title">Pestaña 2</h1>
        <p className="tabdos__subtitle">Contenido a cargo del integrante B.</p>
      </header>

      <section className="tabdos__cards">
        {items.map(({ title, text }) => (
          <article key={title} className="tabdos__card">
            <h2 className="tabdos__card-title">{title}</h2>
            <p className="tabdos__card-text">{text}</p>
          </article>
        ))}
      </section>
    </div>
  )
}
