import { useState, useMemo } from 'react'
import './TabUno.css'
import CaseCard from './components/CaseCard.jsx'

const CASES = [
  {
    id: 1,
    code: 'Caso #09',
    title: 'El Encarnado de la Granja',
    date: '14/03/2024',
    zone: 'Zona Rural Norte',
    status: 'Activo',
    description:
      'Cuerpo recuperado en el galpón. Sin signos vitales previos. El sujeto reaccionó a la luz artificial antes de ser contenido.',
    registro:
      'Archivo sellado. Se recuperaron herramientas agrícolas con restos orgánicos. Testigo afirma que el encarnado repitió el nombre de la víctima. No se autorizó autopsia.',
  },
  {
    id: 2,
    code: 'Caso #12',
    title: 'Incidente en la Escuela Rural',
    date: '02/04/2024',
    zone: 'Zona Rural Sur',
    status: 'Contenido',
    description:
      'Docente y dos alumnos reportados. Puertas selladas. No se autorizó evacuación.',
    registro:
      'Las aulas permanecen intactas. Se encontraron dibujos idénticos en todas las paredes. Los encarnados no responden a estímulos sonoros.',
  },
  {
    id: 3,
    code: 'Caso #17',
    title: 'El Pozo del Campo',
    date: '19/04/2024',
    zone: 'Zona Rural Este',
    status: 'Activo',
    description:
      'Ruidos subterráneos. Tres desaparecidos. Prohibido descender.',
    registro:
      'Se detectaron vibraciones a 12 metros de profundidad. El eco devolvió frases en voz de los desaparecidos. Operación suspendida.',
  },
  {
    id: 4,
    code: 'Caso #21',
    title: 'La Casa del Guardián',
    date: '03/05/2024',
    zone: 'Zona Rural Norte',
    status: 'Contenido',
    description:
      'Familia completa. Luces apagadas. No responder a llamados.',
    registro:
      'La vivienda fue hallada vacía. Las camas estaban hechas. Las ventanas, selladas desde adentro. No hay rastros de salida.',
  },
  {
    id: 5,
    code: 'Caso #28',
    title: 'Ruta 7, Kilómetro 42',
    date: '22/05/2024',
    zone: 'Zona Rural Oeste',
    status: 'Pendiente',
    description:
      'Vehículo abandonado. Rastros de arrastre. Sin cuerpos.',
    registro:
      'El vehículo se encontró con el motor encendido. Las puertas abiertas. En el asiento trasero, una nota con un solo nombre. Nadie lo reconoce.',
  },
]
const NAV_ITEMS = [
  { key: 'protocolo', label: 'Protocolo' },
  { key: 'casos', label: 'Casos Reportados' },
  { key: 'zonas', label: 'Zonas de Riesgo' },
]

const PROTOCOL_RULES = [
  'No uses luz eléctrica.',
  'No les dispares.',
  'No mires a los ojos.',
  'No abras las puertas después del anochecer.',
  'Si escuchas tu nombre, no respondas.',
  'No confíes en quien te llame desde la oscuridad.',
]

const ZONES = [
  { name: 'Zona Rural Norte', level: 'Crítico', note: 'Múltiples brotes activos. Evitar tránsito nocturno.' },
  { name: 'Zona Rural Sur', level: 'Moderado', note: 'Brotes contenidos. Vigilancia constante.' },
  { name: 'Zona Rural Este', level: 'Crítico', note: 'Actividad subterránea. Zona restringida.' },
  { name: 'Zona Rural Oeste', level: 'Alto', note: 'Incidentes aislados. Tránsito diurno únicamente.' },
]

export default function TabUno() {
  const [activeNav, setActiveNav] = useState('casos')
  const [filterZone, setFilterZone] = useState('todos')
  const [selected, setSelected] = useState(null)

  const zones = useMemo(
    () => ['todos', ...new Set(CASES.map((c) => c.zone))],
    []
  )

  const filteredCases = useMemo(() => {
    if (filterZone === 'todos') return CASES
    return CASES.filter((c) => c.zone === filterZone)
  }, [filterZone])

  return (
    <div className="tabuno">
      <header className="tabuno__header">
        <div className="tabuno__brand">ARCHIVO SECRETO // ENCARNADOS</div>
        <nav className="tabuno__nav" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              type="button"
              className={`tabuno__nav-link ${
                activeNav === item.key ? 'is-active' : ''
              }`}
              onClick={() => setActiveNav(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="tabuno__main">
        <section className="tabuno__hero">
          <p className="tabuno__hero-eyebrow">EXPEDIENTE CLASIFICADO</p>
          <h1 className="tabuno__hero-title">CUANDO ACECHA LA MALDAD</h1>
          <p className="tabuno__hero-subtitle">
            Bitácora digital de brotes de encarnados en el campo. Reglas de
            supervivencia: no uses luz eléctrica. No les dispares.
          </p>
        </section>

        {activeNav === 'protocolo' && (
          <section className="tabuno__section">
            <h2 className="tabuno__section-title">Protocolo de Supervivencia</h2>
            <p className="tabuno__section-text">
              Procedimiento obligatorio ante cualquier avistamiento. La
              desobediencia implica contaminación.
            </p>
            <ol className="tabuno__rules">
              {PROTOCOL_RULES.map((rule, i) => (
                <li key={i} className="tabuno__rule">
                  <span className="tabuno__rule-index">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{rule}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {activeNav === 'casos' && (
          <section className="tabuno__section">
            <div className="tabuno__section-head">
              <h2 className="tabuno__section-title">Casos de Infección Recientes</h2>
              <div className="tabuno__filter">
                <label htmlFor="zone-filter" className="tabuno__filter-label">
                  Zona
                </label>
                <select
                  id="zone-filter"
                  className="tabuno__select"
                  value={filterZone}
                  onChange={(e) => setFilterZone(e.target.value)}
                >
                  {zones.map((z) => (
                    <option key={z} value={z}>
                      {z === 'todos' ? 'Todas las zonas' : z}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="tabuno__grid">
              {filteredCases.map((item) => (
                <CaseCard
                  key={item.id}
                  item={item}
                  onVerRegistro={setSelected}
                />
              ))}
            </div>

            {filteredCases.length === 0 && (
              <p className="tabuno__empty">
                Sin registros para la zona seleccionada.
              </p>
            )}
          </section>
        )}

        {activeNav === 'zonas' && (
          <section className="tabuno__section">
            <h2 className="tabuno__section-title">Zonas de Riesgo</h2>
            <div className="tabuno__zones">
              {ZONES.map((z) => (
                <article key={z.name} className="tabuno__zone">
                  <div className="tabuno__zone-head">
                    <h3 className="tabuno__zone-name">{z.name}</h3>
                    <span
                      className={`tabuno__zone-level tabuno__zone-level--${z.level
                        .toLowerCase()}`}
                    >
                      {z.level}
                    </span>
                  </div>
                  <p className="tabuno__zone-note">{z.note}</p>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      {selected && (
        <div
          className="tabuno__modal-backdrop"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="tabuno__modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="tabuno__modal-head">
              <span className="tabuno__card-code">{selected.code}</span>
              <button
                type="button"
                className="tabuno__modal-close"
                onClick={() => setSelected(null)}
                aria-label="Cerrar"
              >
                ×
              </button>
            </div>
            <h3 className="tabuno__modal-title">{selected.title}</h3>
            <p className="tabuno__modal-meta">
              {selected.date} · {selected.zone} · {selected.status}
            </p>
            <p className="tabuno__modal-text">{selected.registro}</p>
          </div>
        </div>
      )}
    </div>
  )
}

