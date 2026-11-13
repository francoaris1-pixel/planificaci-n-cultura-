
import React, { useMemo, useState } from "react";
import "./TabCuatro.css";

const films = [
  {
    title: "John Wick",
    year: 2014,
    genre: ["Acción", "Suspenso", "Crimen"],
    director: "Chad Stahelski",
    cast: "Keanu Reeves, Michael Nyqvist",
    duration: "101 minutos",
    saga: "John Wick",
    poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    synopsis: "Un antiguo asesino profesional regresa al mundo criminal después de sufrir una pérdida personal. Su búsqueda de justicia lo enfrenta a peligrosos enemigos.",
    origin: "La historia fue escrita por Derek Kolstad, inicialmente bajo el título Scorn. La película recupera elementos del cine de venganza y construye un mundo criminal con reglas propias.",
    frankfurt: "Desde la Escuela de Frankfurt, podemos analizar cómo el entretenimiento comercial transforma la violencia y la venganza en productos para el consumo masivo.",
    birmingham: "Desde Birmingham, podemos observar cómo los espectadores interpretan la historia según sus experiencias y valores. También aparecen códigos culturales de lealtad, respeto y pertenencia.",
    latin: "Desde los estudios latinoamericanos, podemos reflexionar sobre la circulación de una producción estadounidense en países como Argentina y la influencia de sus modelos culturales.",
    highlights: ["El club nocturno", "Los enfrentamientos", "El desenlace"],
    related: [
      { type: "Serie", title: "The Continental", description: "Miniserie que amplía el universo de John Wick." },
      { type: "Videojuego", title: "John Wick Hex", description: "Videojuego de estrategia basado en la franquicia." },
      { type: "Película derivada", title: "Ballerina", description: "Historia relacionada con el universo de John Wick." }
    ]
  },
  {
    title: "John Wick: Chapter 2",
    year: 2017,
    genre: ["Acción", "Suspenso", "Crimen"],
    director: "Chad Stahelski",
    cast: "Keanu Reeves, Common, Laurence Fishburne",
    duration: "122 minutos",
    saga: "John Wick",
    poster: "https://image.tmdb.org/t/p/w500/hXWBc0ioZP3cN4zCu6SN3Y4B6nG.jpg",
    synopsis: "Una antigua deuda obliga a John Wick a regresar al mundo de los asesinos profesionales.",
    origin: "La segunda película amplía el universo creado por Derek Kolstad e incorpora nuevas organizaciones y reglas.",
    frankfurt: "La organización criminal representa un sistema jerárquico que condiciona las decisiones individuales.",
    birmingham: "Los códigos de honor y lealtad construyen una identidad compartida entre los integrantes de ese mundo.",
    latin: "Su distribución internacional permite analizar cómo una producción de Hollywood llega a públicos de diferentes países.",
    highlights: ["La deuda pendiente", "Roma", "El enfrentamiento final"],
    related: []
  },
  {
    title: "John Wick: Chapter 3 - Parabellum",
    year: 2019,
    genre: ["Acción", "Suspenso", "Crimen"],
    director: "Chad Stahelski",
    cast: "Keanu Reeves, Halle Berry, Ian McShane",
    duration: "130 minutos",
    saga: "John Wick",
    poster: "https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
    synopsis: "John Wick es perseguido por numerosos asesinos después de ser declarado enemigo de la organización.",
    origin: "La tercera entrega profundiza en las reglas y estructuras del universo criminal de la franquicia.",
    frankfurt: "La autoridad aparece como un sistema que busca mantener el control mediante sanciones y castigos.",
    birmingham: "Los distintos grupos presentan códigos, costumbres y formas de pertenencia propias.",
    latin: "La película permite observar el alcance global de las franquicias cinematográficas y su consumo en distintos mercados.",
    highlights: ["La persecución inicial", "La biblioteca", "El hotel Continental"],
    related: []
  },
  {
    title: "John Wick: Chapter 4",
    year: 2023,
    genre: ["Acción", "Suspenso", "Crimen"],
    director: "Chad Stahelski",
    cast: "Keanu Reeves, Donnie Yen, Bill Skarsgård",
    duration: "169 minutos",
    saga: "John Wick",
    poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    synopsis: "John Wick busca una oportunidad para conseguir su libertad y enfrentarse a la organización que lo persigue.",
    origin: "La cuarta entrega amplía los escenarios y personajes del universo de John Wick.",
    frankfurt: "Se puede analizar la concentración del poder y la dificultad de escapar de estructuras jerárquicas.",
    birmingham: "Los escenarios internacionales muestran diferentes códigos culturales y formas de relacionarse.",
    latin: "Su circulación mundial demuestra cómo el cine conecta industrias y públicos de diferentes regiones.",
    highlights: ["Osaka", "Berlín", "Las escaleras de París"],
    related: []
  },
  {
    title: "Ballerina",
    year: 2025,
    genre: ["Acción", "Suspenso"],
    director: "Len Wiseman",
    cast: "Ana de Armas, Keanu Reeves",
    duration: "125 minutos",
    saga: "John Wick",
    poster: "https://image.tmdb.org/t/p/w500/2VUmvqsHb6cEtdfscEA6fqqVzLg.jpg",
    synopsis: "Una joven entrenada como asesina busca justicia y descubre los peligros del mundo criminal.",
    origin: "Película derivada que amplía el universo de John Wick y presenta otra perspectiva de sus organizaciones.",
    frankfurt: "Permite analizar cómo las organizaciones ejercen control sobre sus integrantes.",
    birmingham: "La protagonista construye su identidad dentro de una comunidad con tradiciones y reglas propias.",
    latin: "Es un ejemplo de cómo una franquicia puede expandirse internacionalmente mediante nuevas producciones.",
    highlights: ["El entrenamiento", "La búsqueda de justicia", "Los enfrentamientos"],
    related: []
  },
  {
    title: "Mad Max",
    year: 1979,
    genre: ["Acción", "Aventura", "Ciencia ficción"],
    director: "George Miller",
    cast: "Mel Gibson, Joanne Samuel",
    duration: "93 minutos",
    saga: "Mad Max",
    poster: "https://image.tmdb.org/t/p/w500/5LrI4GiCSrChgkdskVZiwv643Kg.jpg",
    synopsis: "En una sociedad que pierde el control, un policía enfrenta a grupos violentos que dominan las carreteras.",
    origin: "George Miller desarrolló la idea a partir de su interés por los vehículos, los accidentes y una sociedad marcada por la escasez.",
    frankfurt: "La película representa el deterioro de las instituciones y la pérdida del orden social.",
    birmingham: "Los grupos de las carreteras construyen códigos, símbolos e identidades propias.",
    latin: "Permite observar cómo una producción internacional circula y es apropiada por espectadores de diferentes culturas.",
    highlights: ["Las persecuciones", "El conflicto con la banda", "El desenlace"],
    related: []
  },
  {
    title: "Mad Max 2: El guerrero de la carretera",
    year: 1981,
    genre: ["Acción", "Aventura", "Ciencia ficción"],
    director: "George Miller",
    cast: "Mel Gibson, Bruce Spence",
    duration: "96 minutos",
    saga: "Mad Max",
    poster: "https://image.tmdb.org/t/p/w500/dtV4k9J8w5p1k4w9p8x0Y1m0.jpg",
    synopsis: "Max ayuda a una comunidad que intenta proteger sus recursos de un grupo de saqueadores.",
    origin: "La película profundiza en el mundo postapocalíptico presentado en la primera entrega.",
    frankfurt: "La lucha por los recursos representa las desigualdades y las relaciones de poder.",
    birmingham: "Las comunidades desarrollan normas y símbolos para organizarse y sobrevivir.",
    latin: "Su circulación permite pensar cómo los relatos de otros países se integran al consumo cultural local.",
    highlights: ["La comunidad del desierto", "Las persecuciones", "La batalla final"],
    related: []
  },
  {
    title: "Mad Max: Furia en el camino",
    year: 2015,
    genre: ["Acción", "Aventura", "Ciencia ficción"],
    director: "George Miller",
    cast: "Tom Hardy, Charlize Theron",
    duration: "120 minutos",
    saga: "Mad Max",
    poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    synopsis: "Max y Furiosa intentan escapar del control de Immortan Joe atravesando un desierto peligroso.",
    origin: "George Miller imaginó una película construida alrededor de una persecución casi continua, con vehículos y recursos escasos.",
    frankfurt: "La película representa una sociedad autoritaria donde los recursos y las personas son controlados por una figura dominante.",
    birmingham: "Furiosa representa la resistencia y la búsqueda de libertad. La película cuestiona los roles sociales impuestos por el poder.",
    latin: "Permite analizar cómo los públicos de diferentes países interpretan temas como la desigualdad, la escasez y la libertad.",
    highlights: ["La persecución del desierto", "La tormenta de arena", "El regreso a la Ciudadela"],
    related: [
      { type: "Videojuego", title: "Mad Max (2015)", description: "Aventura de mundo abierto ambientada en el desierto." },
      { type: "Cómic", title: "Mad Max: Fury Road", description: "Historias que amplían los antecedentes de sus personajes." }
    ]
  },
  {
    title: "Furiosa: De la saga Mad Max",
    year: 2024,
    genre: ["Acción", "Aventura", "Ciencia ficción"],
    director: "George Miller",
    cast: "Anya Taylor-Joy, Chris Hemsworth",
    duration: "148 minutos",
    saga: "Mad Max",
    poster: "https://image.tmdb.org/t/p/w500/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
    synopsis: "La historia muestra el pasado de Furiosa y cómo se convierte en una luchadora por su libertad.",
    origin: "George Miller desarrolló esta precuela para explicar el pasado del personaje presentado en Furia en el camino.",
    frankfurt: "Se observa cómo el poder autoritario utiliza los recursos y la violencia para mantener el control.",
    birmingham: "La identidad de Furiosa se construye mediante sus experiencias, sus vínculos y su resistencia.",
    latin: "La historia circula internacionalmente y permite distintas interpretaciones culturales sobre la libertad y la resistencia.",
    highlights: ["La infancia de Furiosa", "El conflicto con Dementus", "La transformación del personaje"],
    related: []
  },
  {
    title: "Gladiador",
    year: 2000,
    genre: ["Acción", "Drama histórico", "Aventura"],
    director: "Ridley Scott",
    cast: "Russell Crowe, Joaquin Phoenix",
    duration: "155 minutos",
    saga: "Gladiador",
    poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    synopsis: "Máximo, un general romano traicionado, termina convertido en gladiador y busca justicia.",
    origin: "David Franzoni desarrolló la idea a partir de su interés por los gladiadores y sus lecturas sobre la antigua Roma.",
    frankfurt: "La película permite analizar cómo el poder político utiliza los espectáculos para influir sobre la población.",
    birmingham: "Se muestran las jerarquías sociales romanas y las distintas formas de identidad, honor y pertenencia.",
    latin: "Es una producción estadounidense que representa una cultura histórica europea y circula como producto cultural global.",
    highlights: ["La batalla inicial", "El Coliseo", "El enfrentamiento final"],
    related: [
      { type: "Banda sonora", title: "Gladiator Soundtrack", description: "Música compuesta por Hans Zimmer y Lisa Gerrard." }
    ]
  },
  {
    title: "Gladiador II",
    year: 2024,
    genre: ["Acción", "Drama histórico", "Aventura"],
    director: "Ridley Scott",
    cast: "Paul Mescal, Pedro Pascal, Denzel Washington",
    duration: "148 minutos",
    saga: "Gladiador",
    poster: "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    synopsis: "Lucio debe enfrentarse a los conflictos del Imperio romano y luchar por su futuro.",
    origin: "Ridley Scott retoma el universo de Gladiador para presentar una nueva historia ambientada años después de la primera película.",
    frankfurt: "La película vuelve a mostrar la relación entre el espectáculo, la política y el control de la población.",
    birmingham: "La historia presenta conflictos de identidad, memoria y pertenencia dentro de una sociedad dividida por jerarquías.",
    latin: "Su lanzamiento internacional demuestra la continuidad de las grandes franquicias en los mercados globales.",
    highlights: ["Los combates", "La arena", "Los conflictos políticos"],
    related: []
  }
];

const theories = [
  {
    id: "industria",
    number: "01",
    title: "Industria Cultural",
    subtitle: "La producción masiva del entretenimiento",
    explanation: "La Industria Cultural estudia cómo los productos culturales se producen, distribuyen y consumen a gran escala. El cine comercial forma parte de este sistema porque las películas se realizan para llegar a grandes audiencias y generar beneficios económicos.",
    application: "En Plani-Acción se observa en películas como John Wick, Mad Max y Gladiador. Son producciones que circulan internacionalmente, tienen campañas de promoción y pueden generar secuelas, series, videojuegos y productos coleccionables.",
    frankfurt: "Escuela de Frankfurt: analiza críticamente cómo la cultura puede convertirse en una mercancía. El entretenimiento masivo puede repetir fórmulas, modelos narrativos y personajes para llegar a un público amplio.",
    birmingham: "Escuela de Birmingham: estudia cómo los públicos reciben e interpretan los mensajes. Los espectadores no son necesariamente pasivos: pueden aceptar, negociar o cuestionar los significados de una película.",
    latin: "Estudios latinoamericanos: permiten pensar cómo consumimos producciones extranjeras y cómo se relacionan con nuestras identidades, experiencias y culturas locales."
  },
  {
    id: "dependencia",
    number: "02",
    title: "Teoría de la Dependencia",
    subtitle: "Desigualdades en la producción cultural",
    explanation: "La Teoría de la Dependencia analiza las desigualdades económicas y culturales entre países centrales y periféricos. En comunicación permite estudiar quiénes producen los contenidos, quiénes controlan su distribución y qué países dependen de productos culturales extranjeros.",
    application: "Gran parte de las películas del catálogo pertenecen a industrias cinematográficas con gran capacidad económica y distribución internacional, especialmente Hollywood. Argentina consume esos productos, pero no tiene el mismo peso en el mercado mundial.",
    frankfurt: "La crítica a la concentración económica y cultural permite observar quién tiene mayor capacidad para producir y distribuir mensajes.",
    birmingham: "Los públicos locales pueden reinterpretar esos contenidos desde sus propias experiencias y realidades culturales.",
    latin: "Desde América Latina, este concepto invita a reflexionar sobre la necesidad de fortalecer las producciones nacionales y regionales y lograr mayor diversidad cultural."
  },
  {
    id: "aldea",
    number: "03",
    title: "Aldea Global",
    subtitle: "Un mundo conectado por los medios",
    explanation: "Marshall McLuhan utilizó el concepto de Aldea Global para explicar cómo los medios de comunicación acercan a las personas y permiten que acontecimientos y contenidos circulen rápidamente por el mundo.",
    application: "Plani-Acción presenta películas de diferentes épocas y las acerca a usuarios que pueden consultar la información desde distintos lugares mediante Internet.",
    example: "Una persona en Argentina puede conocer una película producida en Estados Unidos, consultar su información y descubrir sus productos relacionados sin estar físicamente en el lugar donde fue creada."
  },
  {
    id: "mediaciones",
    number: "04",
    title: "Mediaciones e Hipermediaciones",
    subtitle: "Cómo recibimos e interpretamos los mensajes",
    explanation: "Las mediaciones son los procesos sociales y culturales que influyen en la manera en que interpretamos los mensajes. Las hipermediaciones estudian los intercambios y las conexiones que se producen en los entornos digitales, donde participan múltiples plataformas, usuarios y contenidos.",
    application: "En Plani-Acción, la selección de películas, las reseñas y los análisis culturales funcionan como mediaciones porque organizan y orientan la lectura del contenido. Los enlaces, filtros, botones y secciones permiten una navegación activa y forman parte de las hipermediaciones.",
    example: "El visitante no solo lee información: puede elegir una película, abrir sus detalles, consultar otros contenidos y recorrer distintas secciones."
  },
  {
    id: "interfaz",
    number: "05",
    title: "Interfaz",
    subtitle: "El espacio de interacción entre persona y sistema",
    explanation: "La interfaz es el medio mediante el cual una persona se comunica e interactúa con un sistema digital. Incluye los elementos visuales y funcionales que permiten utilizar una aplicación o página web.",
    application: "En Plani-Acción, la interfaz está formada por el menú de navegación, las tarjetas de películas, los botones, el buscador, los filtros y las ventanas de información.",
    example: "El botón 'Ver detalles' permite abrir la información de una película. El buscador y los filtros ayudan a encontrar contenidos de manera sencilla."
  },
  {
    id: "convergencia",
    number: "06",
    title: "Convergencia Cultural y Mediática",
    subtitle: "Distintos medios en una misma experiencia",
    explanation: "La convergencia es la unión y circulación de contenidos a través de distintos medios, formatos y plataformas. Los usuarios pueden pasar de una película a un videojuego, un cómic, una serie o una comunidad digital.",
    application: "Plani-Acción reúne textos, imágenes, pósteres, información cinematográfica y referencias a videojuegos, cómics y bandas sonoras.",
    example: "El universo de John Wick no se limita a las películas: también cuenta con una serie derivada, videojuegos y otras producciones."
  },
  {
    id: "transmedia",
    number: "07",
    title: "Narrativas Transmedia",
    subtitle: "Historias que se expanden en distintas plataformas",
    explanation: "Las narrativas transmedia se desarrollan cuando una historia se amplía mediante diferentes medios y plataformas. Cada formato puede aportar información, personajes o acontecimientos que enriquecen el universo narrativo.",
    application: "En Plani-Acción se presenta cómo algunas películas continúan o amplían sus historias mediante series, videojuegos, cómics y películas derivadas.",
    example: "John Wick amplía su universo con The Continental y Ballerina. Mad Max también incorpora videojuegos y cómics que desarrollan otros aspectos de su mundo."
  }
];

function MovieCards({ items, onSelect }) {
  return (
    <div className="pa-grid">
      {items.map(movie => (
        <article className="pa-card" key={movie.title}>
          <img
            src={movie.poster}
            alt={`Póster de ${movie.title}`}
            loading="lazy"
            onError={e => {
              e.currentTarget.style.opacity = "0.25";
            }}
          />
          <div className="pa-card-body">
            <span className="pa-year">{movie.year}</span>
            <h3>{movie.title}</h3>
            <p>{movie.genre.join(" · ")}</p>
            <button onClick={() => onSelect(movie)}>Ver detalles</button>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function TabCuatro() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("Todos");
  const [active, setActive] = useState(null);

  const genres = ["Todos", ...new Set(films.flatMap(movie => movie.genre))];

  const filteredFilms = useMemo(() => {
    return films.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
      const matchesGenre = genre === "Todos" || movie.genre.includes(genre);
      return matchesSearch && matchesGenre;
    });
  }, [search, genre]);

  const johnWick = films.filter(movie => movie.saga === "John Wick");
  const madMax = films.filter(movie => movie.saga === "Mad Max");
  const gladiator = films.filter(movie => movie.saga === "Gladiador");

  return (
    <main className="plani-accion">
      <header className="pa-header">
        <div className="pa-header-content">
          <span className="pa-kicker">PROYECTO CULTURAL Y AUDIOVISUAL</span>
          <h1>PLANI-<span>ACCIÓN</span></h1>
          <p>Velocidad · Adrenalina · Supervivencia</p>
          <h2>El universo del cine de acción</h2>
          <p>Películas, historias, cultura y comunicación.</p>
          <a className="pa-main-button" href="#catalogo">Explorar películas</a>
        </div>
      </header>

      <nav className="pa-nav" aria-label="Navegación principal">
        <a href="#catalogo">Películas</a>
        <a href="#universos">Universos</a>
        <a href="#teoria">Cultura y comunicación</a>
        <a href="#transmedia">Más allá de la pantalla</a>
      </nav>

      <section className="pa-section" id="catalogo">
        <span className="pa-kicker">CATÁLOGO CINEMATOGRÁFICO</span>
        <h2>Explorá las películas</h2>
        <p className="pa-intro">
          Conocé las historias, sus protagonistas y los universos que forman
          parte del cine de acción.
        </p>

        <div className="pa-filters">
          <input
            type="search"
            placeholder="Buscar una película..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <select value={genre} onChange={e => setGenre(e.target.value)}>
            {genres.map(item => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>

        <MovieCards items={filteredFilms} onSelect={setActive} />
        {filteredFilms.length === 0 && (
          <p className="pa-empty">No se encontraron películas.</p>
        )}
      </section>

      <section className="pa-section" id="universos">
        <span className="pa-kicker">COLECCIONES CINEMATOGRÁFICAS</span>
        <h2>Universos del cine de acción</h2>

        <h3 className="pa-subtitle">John Wick</h3>
        <MovieCards items={johnWick} onSelect={setActive} />

        <h3 className="pa-subtitle">Mad Max</h3>
        <MovieCards items={madMax} onSelect={setActive} />

        <h3 className="pa-subtitle">Gladiador</h3>
        <MovieCards items={gladiator} onSelect={setActive} />
      </section>

      <section className="pa-theory" id="teoria">
        <div className="pa-theory-heading">
          <span className="pa-kicker">CULTURA Y COMUNICACIÓN</span>
          <h2>Cine, cultura y comunicación</h2>
          <p>
            El cine no es solamente entretenimiento. También es una forma
            de comunicación que transmite valores, ideas, representaciones
            sociales y formas de interpretar el mundo.
          </p>
        </div>

        <div className="pa-theory-intro">
          <h3>¿Por qué relacionamos el cine con la comunicación?</h3>
          <p>
            Las películas son producciones culturales que circulan por
            diferentes medios y llegan a públicos diversos. Su producción,
            distribución y consumo pueden analizarse mediante conceptos
            de la comunicación y los estudios culturales.
          </p>
        </div>

        <div className="pa-theory-grid">
          {theories.map(item => (
            <article className="pa-theory-card" id={item.id} key={item.id}>
              <span className="pa-theory-number">{item.number}</span>
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p>{item.explanation}</p>

              <div className="pa-theory-application">
                <strong>Relación con Plani-Acción</strong>
                <p>{item.application}</p>
              </div>

              {item.frankfurt && (
                <div className="pa-school">
                  <strong>Escuela de Frankfurt</strong>
                  <p>{item.frankfurt}</p>
                </div>
              )}

              {item.birmingham && (
                <div className="pa-school">
                  <strong>Escuela de Birmingham</strong>
                  <p>{item.birmingham}</p>
                </div>
              )}

              {item.latin && (
                <div className="pa-school">
                  <strong>Estudios latinoamericanos</strong>
                  <p>{item.latin}</p>
                </div>
              )}

              {item.example && (
                <div className="pa-example">
                  <strong>Ejemplo</strong>
                  <p>{item.example}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="pa-section" id="transmedia">
        <span className="pa-kicker">MÁS ALLÁ DE LA PANTALLA</span>
        <h2>Juegos, cómics y otros contenidos</h2>
        <p className="pa-intro">
          Algunas historias cinematográficas se expanden mediante otros
          medios y plataformas. Esto permite observar la convergencia
          y las narrativas transmedia.
        </p>

        <div className="pa-related-grid">
          {films.filter(movie => movie.related.length > 0).map(movie => (
            <article className="pa-related-card" key={movie.title}>
              <h3>{movie.title}</h3>
              {movie.related.map(item => (
                <div key={item.title}>
                  <span>{item.type}</span>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="pa-conclusion">
        <span className="pa-kicker">REFLEXIÓN FINAL</span>
        <h2>La tecnología también comunica</h2>
        <p>
          Desarrollar una página web no significa solamente escribir código.
          También implica seleccionar información, organizar contenidos,
          construir una interfaz y crear un espacio donde las personas
          puedan comunicarse, aprender e interpretar diferentes expresiones
          culturales.
        </p>
      </section>

      <footer className="pa-footer">
        <strong>PLANI-<span>ACCIÓN</span></strong>
        <p>Proyecto colaborativo · 2026</p>
        <p>Cine, cultura y comunicación.</p>
      </footer>

      {active && (
        <div
          className="pa-modal-backdrop"
          onMouseDown={e => {
            if (e.target === e.currentTarget) setActive(null);
          }}
        >
          <article className="pa-modal" role="dialog" aria-modal="true">
            <button
              className="pa-close"
              onClick={() => setActive(null)}
              aria-label="Cerrar detalles"
            >
              ×
            </button>

            <div className="pa-modal-top">
              <img src={active.poster} alt={`Póster de ${active.title}`} />
              <div>
                <span className="pa-kicker">EXPEDIENTE DE ACCIÓN</span>
                <h2>{active.title}</h2>
                <p>{active.synopsis}</p>
                <p><strong>Año:</strong> {active.year}</p>
                <p><strong>Director:</strong> {active.director}</p>
                <p><strong>Reparto:</strong> {active.cast}</p>
                <p><strong>Duración:</strong> {active.duration}</p>
                <p><strong>Géneros:</strong> {active.genre.join(" · ")}</p>
              </div>
            </div>

            <div className="pa-modal-block">
              <h3>Origen de la película</h3>
              <p>{active.origin}</p>
            </div>

            <div className="pa-modal-block">
              <h3>Escenas destacadas</h3>
              <ul>
                {active.highlights.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div className="pa-modal-block">
              <h3>Revisión cultural</h3>
              <h4>Escuela de Frankfurt</h4>
              <p>{active.frankfurt}</p>
              <h4>Escuela de Birmingham</h4>
              <p>{active.birmingham}</p>
              <h4>Estudios latinoamericanos</h4>
              <p>{active.latin}</p>
            </div>

            <div className="pa-modal-block">
              <h3>Más allá de la pantalla</h3>
              {active.related.length ? active.related.map(item => (
                <div className="pa-related-item" key={item.title}>
                  <strong>{item.type}: {item.title}</strong>
                  <p>{item.description}</p>
                </div>
              )) : <p>Esta ficha no tiene productos derivados agregados.</p>}
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
