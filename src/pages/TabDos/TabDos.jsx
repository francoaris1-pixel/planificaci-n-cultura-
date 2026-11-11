import { useMemo, useState } from 'react'
import './TabDos.css'
import screamBackground from './Imagenes/Scream.jpeg'
import scaryMovie1 from './Imagenes/Scary Movie-1.jpg'
import scaryMovie2 from './Imagenes/Scary Movie-2.jpg'
import scaryMovie3 from './Imagenes/Scary Movie-3.jpg'
import scaryMovie4 from './Imagenes/Scary Movie-4.jpg'
import scaryMovie5 from './Imagenes/Scary Movie-5.jpg'
import scaryMovie6 from './Imagenes/Scary Movie-6.jpg'

const movies = [
  {
    title: 'Scary Movie',
    year: 2000,
    director: 'Keenen Ivory Wayans',
    style: 'Slasher',
    absurdity: 94,
    budget: '$19 M',
    gross: '$278 M',
    poster: scaryMovie1,
    synopsis:
      'Un grupo de adolescentes intenta descubrir quién se esconde tras la máscara mientras tropieza con una sucesión de clichés del terror.',
  },
  {
    title: 'Scary Movie 2',
    year: 2001,
    director: 'Keenen Ivory Wayans',
    style: 'Casa embrujada',
    absurdity: 96,
    budget: '$45 M',
    gross: '$141 M',
    poster: scaryMovie2,
    synopsis:
      'Cindy y sus amigos pasan una noche en una mansión embrujada; la investigación paranormal pronto se vuelve una excusa para el caos.',
  },
  {
    title: 'Scary Movie 3',
    year: 2003,
    director: 'David Zucker',
    style: 'Ciencia ficción',
    absurdity: 89,
    budget: '$48 M',
    gross: '$221 M',
    poster: scaryMovie3,
    synopsis:
      'Una periodista investiga una cinta mortal y una invasión extraterrestre en una parodia que cruza terror, ciencia ficción y cultura mediática.',
  },
  {
    title: 'Scary Movie 4',
    year: 2006,
    director: 'David Zucker',
    style: 'Invasión',
    absurdity: 91,
    budget: '$45 M',
    gross: '$179 M',
    poster: scaryMovie4,
    synopsis:
      'Una amenaza alienígena pone en marcha una cadena de referencias a películas de terror y catástrofes de la época.',
  },
  {
    title: 'Scary Movie 5',
    year: 2013,
    director: 'Malcolm D. Lee',
    style: 'Found footage',
    absurdity: 84,
    budget: '$20 M',
    gross: '$79 M',
    poster: scaryMovie5,
    synopsis:
      'Una pareja descubre que una presencia extraña acompaña a sus hijos, en una sátira de las películas de metraje encontrado.',
  },
  {
    title: 'Scary Movie',
    year: 2026,
    director: 'Michael Tiddes',
    style: 'Regreso slasher',
    absurdity: 90,
    budget: '$30 M',
    gross: '$232 M',
    poster: scaryMovie6,
    synopsis:
      'Cindy, Brenda y sus viejos amigos vuelven a cruzarse con el asesino enmascarado en una nueva sátira que recupera el espíritu de las primeras entregas.',
  },
]

const cameos = [
  { name: 'Carmen Electra', note: 'Drew Decker · Scary Movie' },
  { name: 'Shaquille O’Neal', note: 'Él mismo · Scary Movie 2' },
  { name: 'Charlie Sheen', note: 'Tom Logan · Scary Movie 3 y 4' },
  { name: 'Leslie Nielsen', note: 'Presidente Harris · Scary Movie 3 y 4' },
  { name: 'Snoop Dogg', note: 'Marcus · Scary Movie 5' },
  { name: 'Pamela Anderson', note: 'Becca · Scary Movie 3' },
  { name: 'Dr. Phil McGraw', note: 'Él mismo · Scary Movie 4' },
  { name: 'Anna Faris y Regina Hall', note: 'Cindy y Brenda · saga original y regreso' },
]

const trivia = [
  {
    number: '01',
    title: 'Un título reciclado',
    text: 'Scary Movie fue el título de trabajo de Scream. La película de parodia tomó ese nombre cuando Scream ya se había convertido en un éxito.',
  },
  {
    number: '02',
    title: 'Parodiar el presente',
    text: 'Las primeras entregas se apoyaron en fenómenos muy recientes: el slasher adolescente, las casas embrujadas y los éxitos de taquilla del momento.',
  },
  {
    number: '03',
    title: 'Cambio de clasificación',
    text: 'Las dos primeras películas fueron clasificadas R en Estados Unidos; Scary Movie 3 inauguró la etapa PG-13 de la franquicia.',
  },
  {
    number: '04',
    title: 'Regreso a los orígenes',
    text: 'La sexta entrega reúne nuevamente a los hermanos Wayans con Anna Faris y Regina Hall, protagonistas centrales de las primeras películas.',
  },
]

export default function TabDos() {
  const [selectedYear, setSelectedYear] = useState('todos')
  const [selectedStyle, setSelectedStyle] = useState('todos')

  const filteredMovies = useMemo(
    () =>
      movies.filter(
        (movie) =>
          (selectedYear === 'todos' || String(movie.year) === selectedYear) &&
          (selectedStyle === 'todos' || movie.style === selectedStyle),
      ),
    [selectedYear, selectedStyle],
  )

  return (
    <div className="tabdos">
      <div className="tabdos__content">
        <header
          className="tabdos__hero"
          style={{ '--tabdos-hero-image': `url("${screamBackground}")` }}
        >
          <p className="tabdos__eyebrow">
            ARCHIVO DE CINE · TERROR EN CLAVE DE HUMOR
          </p>
          <h1 className="tabdos__hero-title">
            SCARY <span>MOVIE</span>
          </h1>
          <p className="tabdos__hero-copy">
            La saga que convirtió los sustos, los clichés y la cultura pop en
            material para reírse de todo.
          </p>
          <a className="tabdos__hero-link" href="#catalogo">
            Explorar la saga <span aria-hidden="true">↓</span>
          </a>
          <span className="tabdos__hero-stamp" aria-hidden="true">
            NO MIRES<br />ATRÁS
          </span>
        </header>

        <section className="tabdos__section" id="catalogo">
          <div className="tabdos__section-heading">
            <div>
              <p className="tabdos__eyebrow">SEIS ENTREGAS · UNA MÁSCARA</p>
              <h2 className="tabdos__section-title">Catálogo del absurdo</h2>
            </div>
            <span className="tabdos__section-index">01 / 06</span>
          </div>

          <div className="tabdos__filters" aria-label="Filtros del catálogo">
            <label className="tabdos__filter">
              <span>Año</span>
              <select
                value={selectedYear}
                onChange={(event) => setSelectedYear(event.target.value)}
              >
                <option value="todos">Todos los años</option>
                {[...new Set(movies.map((movie) => movie.year))].map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </label>
            <label className="tabdos__filter">
              <span>Estilo parodiado</span>
              <select
                value={selectedStyle}
                onChange={(event) => setSelectedStyle(event.target.value)}
              >
                <option value="todos">Todos los estilos</option>
                {[...new Set(movies.map((movie) => movie.style))].map((style) => (
                  <option key={style} value={style}>
                    {style}
                  </option>
                ))}
              </select>
            </label>
            <p className="tabdos__result-count" aria-live="polite">
              {filteredMovies.length} {filteredMovies.length === 1 ? 'película' : 'películas'}
            </p>
          </div>

          {filteredMovies.length > 0 ? (
            <div className="tabdos__movie-grid">
              {filteredMovies.map((movie) => (
                <article className="tabdos__movie" key={`${movie.year}-${movie.title}`}>
                  <div className="tabdos__poster">
                    <img
                      className="tabdos__poster-image"
                      src={movie.poster}
                      alt={`Afiche de ${movie.title} (${movie.year})`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="tabdos__movie-info">
                    <div className="tabdos__movie-meta">
                      <span>{movie.year}</span>
                      <span>{movie.style}</span>
                    </div>
                    <h3 className="tabdos__movie-title">{movie.title}</h3>
                    <p className="tabdos__movie-director">Dir. {movie.director}</p>
                    <p className="tabdos__movie-synopsis">{movie.synopsis}</p>
                    <div
                      className="tabdos__absurdity"
                      role="img"
                      aria-label={`Nivel de absurdo: ${movie.absurdity} de 100`}
                    >
                      <div className="tabdos__absurdity-label">
                        <span>Nivel de absurdo</span>
                        <strong>{movie.absurdity}%</strong>
                      </div>
                      <div className="tabdos__meter" aria-hidden="true">
                        <span style={{ width: `${movie.absurdity}%` }} />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="tabdos__empty" role="status">
              No hay películas que coincidan con esos filtros.
            </p>
          )}
        </section>

        <section className="tabdos__section tabdos__analysis" id="analisis">
          <div className="tabdos__section-heading">
            <div>
              <p className="tabdos__eyebrow">PANTALLA, PARODIA Y PÚBLICO</p>
              <h2 className="tabdos__section-title">El chiste también es cultura</h2>
            </div>
            <span className="tabdos__section-index">02 / MIRADA</span>
          </div>
          <div className="tabdos__analysis-columns">
            <div>
              <h3>Reírse del miedo compartido</h3>
              <p>
                A comienzos de los 2000, el cine de terror adolescente era un
                lenguaje común: máscaras, llamadas amenazantes, grupos de
                amigos y reglas que nadie parecía seguir. <em>Scary Movie</em>{' '}
                tomó ese repertorio reconocible y lo exageró hasta volverlo
                comedia. El público no necesitaba una explicación larga: bastaba
                identificar la referencia para entrar en el chiste.
              </p>
            </div>
            <div>
              <h3>La parodia como espejo pop</h3>
              <p>
                La saga convirtió el consumo acelerado de películas, televisión
                y celebridades en parte de su humor. Su ritmo de referencias
                funcionaba como una conversación sobre lo que estaba de moda y
                lo que el público ya había visto. Con el cambio de directores y
                de títulos parodiados, también cambió el tipo de humor; esa
                transformación permite leer cómo se modificaron los gustos y
                los códigos de la comedia popular.
              </p>
            </div>
          </div>
        </section>

        <section className="tabdos__section" id="eras">
          <div className="tabdos__section-heading">
            <div>
              <p className="tabdos__eyebrow">DOS VOCES, DISTINTOS BLANCOS</p>
              <h2 className="tabdos__section-title">Eras de dirección</h2>
            </div>
            <span className="tabdos__section-index">03 / TONO</span>
          </div>
          <div className="tabdos__eras">
            <article className="tabdos__era">
              <span className="tabdos__era-number">I—II</span>
              <div>
                <p className="tabdos__era-label">2000—2001</p>
                <h3>La era de los hermanos Wayans</h3>
                <p>
                  Keenen Ivory Wayans dirigió las dos primeras entregas, con
                  Marlon y Shawn Wayans como parte central del equipo creativo
                  y del elenco. El humor es más irreverente, físico y
                  deliberadamente provocador; su blanco principal es el slasher
                  adolescente y sus fórmulas.
                </p>
              </div>
            </article>
            <article className="tabdos__era tabdos__era--gold">
              <span className="tabdos__era-number">III—IV</span>
              <div>
                <p className="tabdos__era-label">2003—2006</p>
                <h3>La era de David Zucker</h3>
                <p>
                  Con David Zucker en la dirección, la saga viró hacia la
                  parodia amplia y la comedia de gags visuales, en línea con su
                  trayectoria en el género. El humor se volvió más accesible y
                  sumó referencias a fenómenos de ciencia ficción y catástrofe.
                </p>
              </div>
            </article>
            <p className="tabdos__era-after">
              Entre la cuarta y la sexta, Malcolm D. Lee dirigió la quinta y
              Michael Tiddes la entrega de 2026, que reunió otra vez a figuras
              del elenco y al equipo Wayans.
            </p>
          </div>
        </section>

        <section className="tabdos__section" id="taquilla">
          <div className="tabdos__section-heading">
            <div>
              <p className="tabdos__eyebrow">CIFRAS MUNDIALES · USD</p>
              <h2 className="tabdos__section-title">El terror fue buen negocio</h2>
            </div>
            <span className="tabdos__section-index">04 / TAQUILLA</span>
          </div>
          <div className="tabdos__box-office">
            <div className="tabdos__box-office-head" aria-hidden="true">
              <span>Película</span><span>Presupuesto*</span><span>Recaudación mundial</span>
            </div>
            {movies.map((movie) => (
              <div className="tabdos__box-office-row" key={`box-${movie.year}`}>
                <span className="tabdos__box-office-title">
                  <b>{movie.year}</b> {movie.title}
                </span>
                <span className="tabdos__box-office-budget">{movie.budget}</span>
                <strong>{movie.gross}</strong>
              </div>
            ))}
            <div className="tabdos__box-office-total">
              <span>La saga completa</span>
              <strong>≈ $1.13 mil millones</strong>
            </div>
          </div>
          <p className="tabdos__fine-print">
            *Presupuestos estimados y cifras mundiales redondeadas. Las primeras
            cinco películas sumaron aproximadamente $897 millones; con la
            recaudación reportada de la entrega de 2026, el total supera los
            $1.12 mil millones. Importes nominales, sin ajuste por inflación.
          </p>
        </section>

        <section className="tabdos__section" id="cameos">
          <div className="tabdos__section-heading">
            <div>
              <p className="tabdos__eyebrow">CARAS CONOCIDAS, APARICIONES INESPERADAS</p>
              <h2 className="tabdos__section-title">Cameos e íconos pop</h2>
            </div>
            <span className="tabdos__section-index">05 / ELENCO</span>
          </div>
          <ul className="tabdos__cameo-list">
            {cameos.map(({ name, note }, index) => (
              <li className="tabdos__cameo" key={name}>
                <span className="tabdos__cameo-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="tabdos__cameo-name">{name}</span>
                <span className="tabdos__cameo-note">{note}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="tabdos__section tabdos__trivia" id="trivia">
          <div className="tabdos__section-heading">
            <div>
              <p className="tabdos__eyebrow">DETALLES DETRÁS DE CÁMARA</p>
              <h2 className="tabdos__section-title">Curiosidades</h2>
            </div>
            <span className="tabdos__section-index">06 / TRIVIA</span>
          </div>
          <div className="tabdos__trivia-list">
            {trivia.map(({ number, title, text }) => (
              <article className="tabdos__trivia-item" key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="tabdos__footer">
          <span>FIN DEL ARCHIVO</span>
          <a href="#catalogo">Volver al catálogo ↑</a>
        </footer>
      </div>
    </div>
  )
}
