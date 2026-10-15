import './TabUno.css'

// PESTAÑA 1 — integrante A
// Trabaja solo dentro de esta carpeta (src/pages/TabUno/).
export default function TabUno() {
  return (
    <div className="tabuno">
      <header className="tabuno__header">
        <h1 className="tabuno__title">Pestaña 1</h1>
        <p className="tabuno__subtitle">Contenido a cargo del integrante A.</p>
      </header>

      <div className="tabuno__content">
        <article className="tabuno__article">
          <h2>Sección principal</h2>
          <p>
            Reemplaza este texto con el contenido real de la pestaña. Puedes
            agregar componentes propios dentro de esta misma carpeta.
          </p>
        </article>

        <aside className="tabuno__aside">
          <h2 className="tabuno__aside-title">Notas</h2>
          <p>Espacio para datos secundarios, enlaces o avisos.</p>
        </aside>
      </div>
    </div>
  )
}
