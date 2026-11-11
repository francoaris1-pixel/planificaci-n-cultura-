import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import './Layout.css'

export default function Layout() {
  const { pathname } = useLocation()

  // Fondos condicionales: cada pestaña define el ambiente del contenedor padre
  const isTabUno = pathname === '/pestana-1'
  const isPrincipal = pathname === '/'
  const isDark = isTabUno || isPrincipal

  const layoutClass = [
    'layout',
    isTabUno ? 'layout--tabuno' : '',
    isPrincipal ? 'layout--principal' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={layoutClass}
      style={
        isTabUno
          ? { backgroundColor: '#000000' }
          : isPrincipal
            ? { backgroundColor: '#020617' } // slate-950
            : undefined
      }
    >
      <Navbar dark={isDark} darkVariant={isTabUno ? 'tabuno' : 'principal'} />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer dark={isDark} darkVariant={isTabUno ? 'tabuno' : 'principal'} />
    </div>
  )
}
