import Home from './pages/Home/Home.jsx'
import TabUno from './pages/TabUno/TabUno.jsx'
import TabDos from './pages/TabDos/TabDos.jsx'
import TabTres from './pages/TabTres/TabTres.jsx'
import TabCuatro from './pages/TabCuatro/TabCuatro.jsx'

// Cada pestaña vive en su propia carpeta (jsx + css) para que cada
// integrante del equipo trabaje de forma aislada y sin conflictos.
const routes = [
  { path: '/', name: 'Principal', element: <Home /> },
  { path: '/pestana-1', name: 'Terror', element: <TabUno /> },
  { path: '/pestana-2', name: 'Comedia-Parodia', element: <TabDos /> },
  { path: '/pestana-3', name: 'Pestaña 3', element: <TabTres /> },
  { path: '/pestana-4', name: 'Pestaña 4', element: <TabCuatro /> },
]

export default routes
