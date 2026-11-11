import { Link } from 'react-router-dom'
import './Home.css'

const cards = [
  {
    path: '/pestana-1',
    title: 'Terror',
    text: 'Expediente oscuro sobre el terror psicológico y rural contemporáneo (Cuando acecha la maldad, Obsesión y Haz que regrese).',
    accent: 'border-red-600',
    badge: 'bg-red-500/15 text-red-300 ring-1 ring-red-500/30',
    badgeLabel: 'Terror',
  },
  {
    path: '/pestana-2',
    title: 'Comedia-Parodia',
    text: 'Risas ingeniosas, sátira del cine clásico y parodias que se ríen de los propios tropos del séptimo arte.',
    accent: 'border-blue-500',
    badge: 'bg-blue-500/15 text-blue-300 ring-1 ring-blue-500/30',
    badgeLabel: 'Comedia-Parodia',
  },
  {
    path: '/pestana-3',
    title: 'Pestaña 3: Género Cinematográfico III',
    text: 'Espacio dedicado al análisis visual y narrativo de películas seleccionadas dentro de esta categoría.',
    accent: 'border-emerald-500',
    badge: 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30',
    badgeLabel: 'Género III',
  },
  {
    path: '/pestana-4',
    title: 'Pestaña 4: Género Cinematográfico IV',
    text: 'Espacio dedicado al análisis visual y narrativo de películas seleccionadas dentro de esta categoría.',
    accent: 'border-amber-500',
    badge: 'bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/30',
    badgeLabel: 'Género IV',
  },
]

const ejes = [
  {
    title: 'HTML5 Semántico y CSS',
    text: 'Maquetación estructurada, diseño responsivo, paletas de colores y estilos visuales adaptados a cada género.',
    accent: 'border-l-indigo-600',
    titleColor: 'text-indigo-300',
  },
  {
    title: 'Industria Cultural',
    text: 'Análisis desde la Escuela de Frankfurt y los Estudios Latinoamericanos.',
    accent: 'border-l-purple-600',
    titleColor: 'text-purple-300',
  },
  {
    title: 'Teoría de la Dependencia',
    text: 'Hegemonía audiovisual frente a las producciones regionales y de autor.',
    accent: 'border-l-cyan-600',
    titleColor: 'text-cyan-300',
  },
  {
    title: 'Aldea Global',
    text: 'Circulación mundial de contenidos y lenguajes cinematográficos universales.',
    accent: 'border-l-pink-600',
    titleColor: 'text-pink-300',
  },
  {
    title: 'Mediaciones e Hipermediaciones',
    text: 'El paso del espectador pasivo al usuario interactivo digital.',
    accent: 'border-l-indigo-600',
    titleColor: 'text-indigo-300',
  },
  {
    title: 'Interfaz',
    text: 'Diseño visual y estructural adaptado a la atmósfera de cada género.',
    accent: 'border-l-purple-600',
    titleColor: 'text-purple-300',
  },
  {
    title: 'Convergencia Cultural y Mediática',
    text: 'Integración de textos, imágenes, animaciones y formatos en la web.',
    accent: 'border-l-cyan-600',
    titleColor: 'text-cyan-300',
  },
  {
    title: 'Narrativas Transmedia',
    text: 'Expansión de las historias cinematográficas hacia entornos digitales interactivos.',
    accent: 'border-l-pink-600',
    titleColor: 'text-pink-300',
  },
]

export default function Home() {
  return (
    <div
      className="home relative min-h-screen bg-slate-950 text-slate-100"
      style={{
        backgroundImage:
          'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)',
        backgroundSize: '4rem 4rem',
      }}
    >
      {/* Imagen de fondo local (opcional): /imagenes/principal/fondo-principal.jpg
          Se muestra bajo una capa oscura translúcida; si la imagen no existe,
          queda el fondo slate-950 con la cuadrícula de maquetación. */}
      <div
        aria-hidden="true"
        className="fixed inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/imagenes/principal/fondo-principal.jpeg')",
        }}
      />
      <div aria-hidden="true" className="fixed inset-0 bg-slate-950/65" />
      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* HERO CÓDIGO + CINE — con cartel local de fondo */}
      <section className="home__hero relative overflow-hidden rounded-2xl border border-indigo-500/30 shadow-2xl px-6 py-14 text-center text-white">
        {/* Cartel de bienvenida local, bajo el degradado azul/índigo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/imagenes/principal/banner-bienvenida.jpeg')",
          }}
        />
        {/* Degradado semitransparente encima del cartel para contraste del texto */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-blue-950/75 via-indigo-950/65 to-purple-950/75"
        />
        {/* Decoración de código en las esquinas (intercátedra web + cine) */}
        <pre className="home__snippet home__snippet--tl pointer-events-none select-none absolute left-4 top-4 font-mono text-xs text-indigo-300/40 hidden sm:block">{`<html lang="es">`}</pre>
        <pre className="home__snippet home__snippet--tr pointer-events-none select-none absolute right-4 top-4 font-mono text-xs text-purple-300/40 hidden sm:block">{`.cultura-cine {`}</pre>
        <pre className="home__snippet home__snippet--bl pointer-events-none select-none absolute bottom-4 left-4 font-mono text-xs text-purple-300/40 hidden sm:block">{`  display: flex;`}</pre>
        <pre className="home__snippet home__snippet--br pointer-events-none select-none absolute bottom-4 right-4 font-mono text-xs text-indigo-300/40 hidden sm:block">{`}`}</pre>

        <span className="relative inline-block rounded-full bg-indigo-500/20 px-4 py-1.5 text-xs font-semibold tracking-widest text-indigo-200 ring-1 ring-indigo-400/40 backdrop-blur-sm">
          PROYECTO INTERCÁTEDRA • PLANIFICACIÓN Y CULTURA
        </span>
        <h1 className="home__title relative mt-4 text-4xl font-extrabold drop-shadow-sm sm:text-5xl">
          Bienvenido a{' '}
          <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
            Plani-Cult
          </span>
        </h1>
        <p className="home__subtitle relative mx-auto mt-4 max-w-2xl text-base opacity-95 sm:text-lg">
          Proyecto de intercátedra entre las materias Planificación y Cultura y
          Comunicación. Una plataforma web colaborativa dedicada a explorar
          distintos géneros cinematográficos, articulando el desarrollo técnico
          de software con el análisis crítico de los medios.
        </p>
      </section>

      {/* TARJETAS DE GÉNEROS */}
      <section className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ path, title, text, accent, badge, badgeLabel }) => (
          <Link
            key={path}
            to={path}
            className={`group flex flex-col rounded-xl bg-slate-900/90 backdrop-blur-sm border border-slate-800 p-5 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-slate-700 border-t-4 ${accent}`}
          >
            <span
              className={`mb-3 w-fit rounded-full px-2.5 py-0.5 text-[0.7rem] font-bold uppercase tracking-wide ${badge}`}
            >
              {badgeLabel}
            </span>
            <h2 className="text-lg font-bold text-slate-100 group-hover:underline decoration-2 underline-offset-4">
              {title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p>
          </Link>
        ))}
      </section>

      {/* TEMAS ABORDADOS */}
      <section className="home__section mt-12">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-100 sm:text-3xl">
          Sobre el Proyecto Intercátedra y{' '}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Temas Abordados
          </span>
        </h2>
        <p className="home__section-intro mt-3 max-w-3xl leading-relaxed text-slate-400">
          Este sitio web integra la planificación y maquetación de interfaces
          digitales con los marcos teóricos de la comunicación contemporánea. A
          lo largo de las pestañas se abordan los siguientes ejes temáticos:
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ejes.map(({ title, text, accent, titleColor }) => (
            <article
              key={title}
              className={`rounded-xl border border-slate-800 border-l-4 bg-slate-900/90 backdrop-blur-sm p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-slate-700 ${accent}`}
            >
              <h3
                className={`text-base font-bold ${titleColor}`}
              >
                {title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </section>
      </div>
    </div>
  )
}
