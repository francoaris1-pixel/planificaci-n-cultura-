import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import './Layout.css'

export default function Layout() {
  const { pathname } = useLocation()
  const isTabUno = pathname === '/pestana-1'

  return (
    <div
      className={`layout ${isTabUno ? 'bg-black' : ''}`}
      style={isTabUno ? { backgroundColor: '#000000' } : undefined}
    >
      <Navbar />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
