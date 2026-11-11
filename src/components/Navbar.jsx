import { NavLink } from 'react-router-dom'
import routes from '../routes.jsx'
import './Navbar.css'

export default function Navbar({ dark = false, darkVariant = null }) {
  // dark: activa la variante oscura (Principal / Pestaña 1)
  // darkVariant: 'principal' | 'tabuno' — solo cambia los colores
  const headerClass = [
    'navbar',
    dark && darkVariant === 'principal' ? 'navbar--principal' : '',
    dark && darkVariant === 'tabuno' ? 'navbar--tabuno' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={headerClass}>
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
                isActive
                  ? `navbar__link navbar__link--active${
                      dark ? ' navbar__link--active--dark' : ''
                    }`
                  : `navbar__link${dark ? ' navbar__link--dark' : ''}`
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
