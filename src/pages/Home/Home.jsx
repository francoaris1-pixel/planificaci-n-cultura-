import { Link } from 'react-router-dom'
import './Home.css'

const cards = [
  { path: '/pestana-1', title: 'Pestaña 1', text: 'Responsable: integrante A.' },
  { path: '/pestana-2', title: 'Pestaña 2', text: 'Responsable: integrante B.' },
  { path: '/pestana-3', title: 'Pestaña 3', text: 'Responsable: integrante C.' },
  { path: '/pestana-4', title: 'Pestaña 4', text: 'Responsable: integrante D.' },
]

export default function Home() {
  return (
    <div className="home">
      <section className="home__hero">
        <h1 className="home__title">Bienvenido a Plani-Cult</h1>
        <p className="home__subtitle">
          Página principal del proyecto. Desde aquí se accede a las cuatro
          pestañas desarrolladas por cada integrante del equipo.
        </p>
      </section>

      <section className="home__grid">
        {cards.map(({ path, title, text }) => (
          <Link key={path} to={path} className="home__card">
            <h2 className="home__card-title">{title}</h2>
            <p className="home__card-text">{text}</p>
          </Link>
        ))}
      </section>

      <section className="home__section">
        <h2 className="home__section-title">Cómo trabajar en equipo</h2>
        <ul className="home__list">
          <li>Cada integrante trabaja solo en su carpeta dentro de <code>src/pages/</code>.</li>
          <li>Crea una rama por pestaña: <code>git checkout -b feat/pestana-1</code>.</li>
          <li>Sube tus cambios y abre un Pull Request hacia <code>main</code>.</li>
        </ul>
      </section>
    </div>
  )
}
