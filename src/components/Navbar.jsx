import { NavLink } from 'react-router-dom'
import routes from '../routes.jsx'
import './Navbar.css'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand">
          Plani<span>-Cult</span>
        </NavLink>

        <nav className="navbar__nav" aria-label="Navegación principal">
          {routes.map(({ path, name }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
