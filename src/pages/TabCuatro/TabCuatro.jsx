        import React, { useMemo, useState } from 'react';
import './TabCuatro.css';

const films = [
  {
    id: 'john-wick-1', saga: 'John Wick', title: 'John Wick', year: 2014,
    genres: ['Acción', 'Suspenso', 'Crimen'], director: 'Chad Stahelski',
    cast: 'Keanu Reeves, Michael Nyqvist, Alfie Allen', duration: '101 min',
    synopsis: 'Un antiguo asesino a sueldo intenta dejar atrás su pasado, pero una pérdida personal lo lleva de nuevo al mundo criminal que había abandonado.',
    origin: 'El guion de Derek Kolstad se titulaba originalmente Scorn. La propuesta combinó el cine de venganza con un mundo criminal organizado, códigos propios y personajes con historias conectadas.',
    culture: 'La película presenta una sociedad secreta con reglas, jerarquías y acuerdos. Sus temas principales son la pérdida, la lealtad y la búsqueda de justicia.',
    highlights: ['El club nocturno', 'La presentación del Continental', 'El desenlace'],
    related: [
      { type: 'Cómic', title: 'John Wick #1–5: historia precuela', description: 'Serie de cómics sobre una misión anterior a los acontecimientos de las películas.', url: 'https://digital.darkhorse.com/books/2244af3632e34b31a5092bf4922547ce/john-wick-5' },
      { type: 'Videojuego', title: 'John Wick Hex', description: 'Videojuego de estrategia ambientado antes de las películas.', url: 'https://store.playstation.com/en-us/concept/235418' },
      { type: 'Videojuego anunciado', title: 'Nuevo juego de John Wick', description: 'Proyecto oficial de Saber Interactive, Lionsgate y Chad Stahelski; todavía sin fecha de lanzamiento confirmada.', url: 'https://saber.games/untitledjohnwickgame/' },
      { type: 'Coleccionables', title: 'Productos licenciados de John Wick', description: 'Página de licencias y productos de la franquicia, incluidos artículos de colección.', url: 'https://imglicensing.com/brands/john-wick/' }
    ],
    poster: 'https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg'
  },
  {
    id: 'john-wick-2', saga: 'John Wick', title: 'John Wick: Chapter 2', year: 2017,
    genres: ['Acción', 'Suspenso', 'Crimen'], director: 'Chad Stahelski',
    cast: 'Keanu Reeves, Common, Laurence Fishburne', duration: '122 min',
    synopsis: 'John intenta cumplir una antigua deuda, pero termina envuelto en una disputa que lo convierte en objetivo de numerosos enemigos.',
    origin: 'La secuela amplía el universo presentado en la primera película y desarrolla las reglas, los contratos y las organizaciones que forman parte del mundo de los asesinos.',
    culture: 'Profundiza en la idea de los códigos de honor, las deudas y las consecuencias de pertenecer a una organización cerrada.',
    highlights: ['El viaje a Roma', 'El museo', 'La ruptura de las reglas del Continental'],
    related: [
      { type: 'Cómic', title: 'John Wick #1–5', description: 'La serie de cómics precuela amplía el pasado del personaje.', url: 'https://digital.darkhorse.com/books/2244af3632e34b31a5092bf4922547ce/john-wick-5' },
      { type: 'Coleccionables', title: 'Productos licenciados de John Wick', description: 'Catálogo general de productos y artículos de colección de la franquicia.', url: 'https://imglicensing.com/brands/john-wick/' }
    ]
  },
  {
    id: 'john-wick-3', saga: 'John Wick', title: 'John Wick: Chapter 3 – Parabellum', year: 2019,
    genres: ['Acción', 'Suspenso', 'Crimen'], director: 'Chad Stahelski',
    cast: 'Keanu Reeves, Halle Berry, Ian McShane', duration: '131 min',
    synopsis: 'Tras romper una de las reglas principales del Continental, John queda fuera de la protección de la organización y debe buscar una salida.',
    origin: 'La tercera entrega continúa directamente los hechos de Chapter 2 y expande los lugares, personajes y normas del universo de la saga.',
    culture: 'Explora la pertenencia, la reputación y el precio de desafiar las reglas de una institución poderosa.',
    highlights: ['La huida de Nueva York', 'El encuentro en el desierto', 'La batalla del Continental'],
    related: [
      { type: 'Cómic', title: 'John Wick #1–5', description: 'Cómic precuela publicado por Dynamite Entertainment.', url: 'https://digital.darkhorse.com/books/2244af3632e34b31a5092bf4922547ce/john-wick-5' },
      { type: 'Coleccionables', title: 'Productos licenciados de John Wick', description: 'Información general sobre artículos y coleccionables de la franquicia.', url: 'https://imglicensing.com/brands/john-wick/' }
    ]
  },
  {
    id: 'john-wick-4', saga: 'John Wick', title: 'John Wick: Chapter 4', year: 2023,
    genres: ['Acción', 'Suspenso', 'Crimen'], director: 'Chad Stahelski',
    cast: 'Keanu Reeves, Donnie Yen, Bill Skarsgård', duration: '169 min',
    synopsis: 'John busca una manera de liberarse de la organización que controla el mundo de los asesinos, pero debe enfrentarse a nuevos adversarios.',
    origin: 'La cuarta película continúa la historia principal y lleva el universo de la saga a nuevas ciudades y escenarios.',
    culture: 'La película trabaja los temas del sacrificio, la libertad, la amistad y el peso de las decisiones pasadas.',
    highlights: ['La secuencia de Osaka', 'El recorrido por París', 'El duelo final'],
    related: [
      { type: 'Videojuego', title: 'Nuevo juego oficial de John Wick', description: 'Juego anunciado en colaboración con Saber Interactive, Lionsgate y Chad Stahelski. La fecha de lanzamiento está por confirmarse.', url: 'https://saber.games/untitledjohnwickgame/' },
      { type: 'Coleccionables', title: 'Productos licenciados de John Wick', description: 'Coleccionables y artículos licenciados de la franquicia.', url: 'https://imglicensing.com/brands/john-wick/' }
    ]
  },
  {
    id: 'ballerina', saga: 'John Wick', title: 'Ballerina', year: 2025,
    genres: ['Acción', 'Suspenso', 'Crimen'], director: 'Len Wiseman',
    cast: 'Ana de Armas, Keanu Reeves, Anjelica Huston', duration: 'Aprox. 125 min',
    synopsis: 'Una joven entrenada por una organización de asesinos emprende una búsqueda personal que la conecta con el mundo de John Wick.',
    origin: 'Es una película derivada del universo John Wick. Amplía la historia de las organizaciones y de los personajes que existen más allá del protagonista principal.',
    culture: 'Continúa los temas de identidad, pertenencia, venganza y búsqueda de autonomía presentes en la franquicia.',
    highlights: ['La formación de Eve', 'La conexión con el Continental', 'El cruce con John Wick'],
    related: [
      { type: 'Universo relacionado', title: 'The Continental', description: 'Miniserie precuela que muestra el hotel y parte de su historia.', url: 'https://johnwick.movie/' },
      { type: 'Coleccionables', title: 'Productos licenciados de John Wick', description: 'Catálogo general de productos y coleccionables de la franquicia.', url: 'https://imglicensing.com/brands/john-wick/' }
    ]
  },
  {
    id: 'mad-max-1', saga: 'Mad Max', title: 'Mad Max', year: 1979,
    genres: ['Acción', 'Ciencia ficción', 'Distopía'], director: 'George Miller',
    cast: 'Mel Gibson, Joanne Samuel, Hugh Keays-Byrne', duration: '93 min',
    synopsis: 'En una sociedad al borde del colapso, un policía de carretera se enfrenta a una banda violenta y su vida cambia para siempre.',
    origin: 'George Miller desarrolló una historia de acción de bajo presupuesto ambientada en un futuro cercano, con carreteras, vehículos y una sociedad en deterioro.',
    culture: 'La película presenta el miedo al colapso social, la inseguridad y la pérdida de orden como elementos de un futuro distópico.',
    highlights: ['Las persecuciones en carretera', 'La presentación del mundo', 'El conflicto de Max'],
    related: [
      { type: 'Videojuego', title: 'Mad Max (2015)', description: 'Videojuego de mundo abierto desarrollado por Avalanche Studios, ambientado en el Páramo.', url: 'https://avalanchestudios.com/games/mad-max' }
    ]
  },
  {
    id: 'mad-max-2', saga: 'Mad Max', title: 'Mad Max 2: The Road Warrior', year: 1981,
    genres: ['Acción', 'Aventura', 'Ciencia ficción'], director: 'George Miller',
    cast: 'Mel Gibson, Bruce Spence, Michael Preston', duration: '96 min',
    synopsis: 'En un mundo con recursos escasos, Max ayuda a un grupo de sobrevivientes que intenta proteger su combustible de una banda de saqueadores.',
    origin: 'La segunda película amplió el escenario postapocalíptico de la primera y consolidó la identidad visual de la saga.',
    culture: 'La escasez de combustible, la cooperación y la supervivencia organizan el conflicto de esta historia.',
    highlights: ['El asentamiento de los sobrevivientes', 'La persecución del camión', 'El escape final'],
    related: [
      { type: 'Videojuego', title: 'Mad Max (2015)', description: 'Juego inspirado en el universo cinematográfico, con una historia propia.', url: 'https://store.steampowered.com/app/234140/Mad_Max/' }
    ]
  },
  {
    id: 'mad-max-3', saga: 'Mad Max', title: 'Mad Max: Beyond Thunderdome', year: 1985,
    genres: ['Acción', 'Aventura', 'Ciencia ficción'], director: 'George Miller y George Ogilvie',
    cast: 'Mel Gibson, Tina Turner, Bruce Spence', duration: '107 min',
    synopsis: 'Max llega a una ciudad gobernada por reglas particulares y termina involucrado en una disputa por el poder y la supervivencia.',
    origin: 'La tercera entrega continúa el mundo postapocalíptico y presenta nuevas comunidades que intentan reconstruir formas de gobierno.',
    culture: 'La película reflexiona sobre el poder, las reglas sociales y la posibilidad de formar comunidades después de una catástrofe.',
    highlights: ['La ciudad de Bartertown', 'La Cúpula del Trueno', 'El encuentro con los niños'],
    related: [
      { type: 'Videojuego', title: 'Mad Max (2015)', description: 'Videojuego ambientado en el universo de Mad Max.', url: 'https://avalanchestudios.com/games/mad-max' }
    ]
  },
  {
    id: 'mad-max-fury', saga: 'Mad Max', title: 'Mad Max: Furia en el camino', year: 2015,
    genres: ['Acción', 'Aventura', 'Ciencia ficción'], director: 'George Miller',
    cast: 'Tom Hardy, Charlize Theron, Nicholas Hoult', duration: '120 min',
    synopsis: 'En un desierto devastado, Max se une a Furiosa para escapar del control de Immortan Joe. Juntos luchan por sobrevivir y encontrar libertad.',
    origin: 'George Miller imaginó una persecución casi continua en el desierto. El mundo de la película se construye alrededor de la escasez de agua, combustible y otros recursos.',
    culture: 'Sus temas centrales son la supervivencia, la libertad, el abuso de poder y la cooperación frente a la opresión.',
    highlights: ['La fuga por el desierto', 'La persecución de los vehículos', 'El regreso a la Ciudadela'],
    related: [
      { type: 'Cómic', title: 'Mad Max: Fury Road – novela gráfica', description: 'Historias precuela sobre Furiosa, Nux, Immortan Joe y Max.', url: 'https://www.dc.com/graphic-novels/mad-max-fury-road-2015/mad-max-fury-road' },
      { type: 'Cómic', title: 'Mad Max: Fury Road – Furiosa #1', description: 'Número centrado en el pasado de Furiosa.', url: 'https://www.dc.com/comics/mad-max-fury-road-2015/mad-max-fury-road-furiosa-1' },
      { type: 'Videojuego', title: 'Mad Max (2015)', description: 'Juego de mundo abierto con exploración del Páramo y vehículos personalizables.', url: 'https://store.steampowered.com/app/234140/Mad_Max/' }
    ],
    poster: 'https://image.tmdb.org/t/p/w500/8tZYTU9aJtCzn1T5yp4c8c7d8W.jpg'
  },
  {
    id: 'furiosa', saga: 'Mad Max', title: 'Furiosa: De la saga Mad Max', year: 2024,
    genres: ['Acción', 'Aventura', 'Ciencia ficción'], director: 'George Miller',
    cast: 'Anya Taylor-Joy, Chris Hemsworth, Tom Burke', duration: '148 min',
    synopsis: 'La historia sigue los primeros años de Furiosa y los acontecimientos que la llevan a convertirse en una de las figuras centrales del Páramo.',
    origin: 'La película funciona como precuela de Furia en el camino y desarrolla el pasado del personaje de Furiosa.',
    culture: 'Explora la identidad, la resistencia y la búsqueda de un hogar en un mundo dominado por la escasez y la violencia.',
    highlights: ['El origen de Furiosa', 'El conflicto por el Páramo', 'La transformación del personaje'],
    related: [
      { type: 'Cómic relacionado', title: 'Mad Max: Fury Road – Furiosa #1', description: 'Cómic precuela que también amplía el pasado del personaje.', url: 'https://www.dc.com/comics/mad-max-fury-road-2015/mad-max-fury-road-furiosa-1' },
      { type: 'Videojuego del universo', title: 'Mad Max (2015)', description: 'Videojuego ambientado en el mismo universo, con una historia independiente.', url: 'https://avalanchestudios.com/games/mad-max' }
    ]
  },
  {
    id: 'gladiator', saga: 'Gladiador', title: 'Gladiador', year: 2000,
    genres: ['Acción', 'Drama histórico', 'Aventura'], director: 'Ridley Scott',
    cast: 'Russell Crowe, Joaquin Phoenix, Connie Nielsen', duration: '155 min',
    synopsis: 'Máximo, un general romano, es traicionado y pierde su posición. Convertido en gladiador, lucha por recuperar su honor y hacer justicia.',
    origin: 'El guionista David Franzoni desarrolló la historia a partir de su interés por los gladiadores y la antigua Roma. También tomó inspiración del libro Those About to Die, de Daniel P. Mannix.',
    culture: 'La película representa la jerarquía, el poder político y los espectáculos públicos de la antigua Roma. Sus temas son el honor, la justicia y la libertad.',
    highlights: ['La batalla inicial', 'Los combates en la arena', 'El enfrentamiento final'],
    related: [
      { type: 'Banda sonora', title: 'Gladiator – música original', description: 'Ediciones y lanzamientos musicales vinculados a la película.', url: 'https://www.universal-music.co.jp/gladiator/discography/' },
      { type: 'Coleccionables', title: 'Catálogo de McFarlane Toys', description: 'Fabricante de figuras de cine; revisar el catálogo para encontrar lanzamientos disponibles.', url: 'https://mcfarlane.com/' }
    ],
    poster: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1s9V7b2f9E.jpg'
  },
  {
    id: 'gladiator-2', saga: 'Gladiador', title: 'Gladiador II', year: 2024,
    genres: ['Acción', 'Drama histórico', 'Aventura'], director: 'Ridley Scott',
    cast: 'Paul Mescal, Pedro Pascal, Denzel Washington', duration: '148 min',
    synopsis: 'Años después de los acontecimientos de la primera película, Lucio debe enfrentarse al poder de Roma y luchar por su futuro.',
    origin: 'La secuela retoma el universo de la película de 2000 y presenta una nueva etapa de la historia romana a través de Lucio.',
    culture: 'Continúa explorando el poder político, los espectáculos públicos, la ambición y la búsqueda de libertad.',
    highlights: ['El regreso a Roma', 'Los combates en el Coliseo', 'El conflicto por el futuro del Imperio'],
    related: [
      { type: 'Banda sonora', title: 'Gladiator II – banda sonora original', description: 'Lanzamiento musical oficial de Universal Music.', url: 'https://www.universal-music.co.jp/gladiator/discography/' },
      { type: 'Coleccionables', title: 'Figuras Movie Maniacs', description: 'McFarlane Toys lanzó una figura de Lucio basada en Gladiador II. El enlace lleva a una ficha de producto de un distribuidor.', url: 'https://www.bigbadtoystore.com/product/gladiator-ii-movie-maniacs-lucius-6-limited-edition-figure-179337' }
    ]
  },
  {
    id: 'equalizer', saga: 'Películas independientes', title: 'El justiciero', year: 2014,
    genres: ['Acción', 'Suspenso', 'Crimen'], director: 'Antoine Fuqua',
    cast: 'Denzel Washington, Chloë Grace Moretz, Marton Csokas', duration: '132 min',
    synopsis: 'Un hombre que lleva una vida tranquila decide ayudar a una joven en peligro. Su pasado vuelve a aparecer y lo enfrenta a una organización criminal.',
    origin: 'La película adapta la serie televisiva The Equalizer de los años ochenta y presenta una versión cinematográfica del personaje Robert McCall.',
    culture: 'Aborda la justicia personal, la protección de personas vulnerables y los límites de actuar por cuenta propia.',
    highlights: ['La vida cotidiana de McCall', 'La decisión de intervenir', 'El enfrentamiento final'],
    related: [
      { type: 'Información oficial', title: 'The Equalizer – Sony Pictures', description: 'Ficha de la película, formatos disponibles y banda sonora.', url: 'https://www.sonypictures.com/movies/theequalizer' }
    ]
  },
  {
    id: 'mission-impossible', saga: 'Misión: Imposible', title: 'Misión: Imposible – Fallout', year: 2018,
    genres: ['Acción', 'Aventura', 'Suspenso'], director: 'Christopher McQuarrie',
    cast: 'Tom Cruise, Henry Cavill, Rebecca Ferguson', duration: '147 min',
    synopsis: 'Ethan Hunt y su equipo deben recuperar material peligroso y detener una amenaza internacional mientras enfrentan decisiones difíciles.',
    origin: 'Es la sexta entrega cinematográfica de la franquicia Misión: Imposible, basada en la serie televisiva creada por Bruce Geller.',
    culture: 'La película trabaja la confianza, el trabajo en equipo, la responsabilidad y el costo de las decisiones en situaciones de crisis.',
    highlights: ['La misión en París', 'La persecución por las calles', 'El desenlace en las montañas'],
    related: [
      { type: 'Ficha oficial', title: 'Mission: Impossible – Fallout', description: 'Información de Paramount Movies, reparto y formatos de la película.', url: 'https://www.paramountmovies.com/movies/mission-impossible-fallout' }
    ]
  },
  {
    id: 'die-hard', saga: 'Películas independientes', title: 'Duro de matar', year: 1988,
    genres: ['Acción', 'Suspenso', 'Crimen'], director: 'John McTiernan',
    cast: 'Bruce Willis, Alan Rickman, Bonnie Bedelia', duration: '132 min',
    synopsis: 'Durante una visita a Los Ángeles, un policía queda atrapado en un edificio tomado por un grupo criminal y debe intentar proteger a los rehenes.',
    origin: 'La película se basa en la novela Nothing Lasts Forever, de Roderick Thorp, y ayudó a definir el cine de acción popular de finales de los años ochenta.',
    culture: 'Presenta a un protagonista común enfrentado a una situación extraordinaria y combina tensión, humor y acción.',
    highlights: ['La llegada al edificio', 'La tensión con los rehenes', 'El desenlace en el rascacielos'],
    related: []
  },
  {
    id: 'top-gun-maverick', saga: 'Películas independientes', title: 'Top Gun: Maverick', year: 2022,
    genres: ['Acción', 'Drama', 'Aventura'], director: 'Joseph Kosinski',
    cast: 'Tom Cruise, Miles Teller, Jennifer Connelly', duration: '130 min',
    synopsis: 'Maverick regresa para entrenar a un grupo de pilotos jóvenes en una misión que exige confianza, preparación y trabajo en equipo.',
    origin: 'Es la continuación de Top Gun (1986) y retoma al personaje de Pete “Maverick” Mitchell décadas después.',
    culture: 'Explora la experiencia, la responsabilidad, el liderazgo y el vínculo entre distintas generaciones.',
    highlights: ['El entrenamiento de pilotos', 'La relación entre Maverick y Rooster', 'La misión final'],
    related: []
  }
];

const genres = ['Todos', 'Acción', 'Aventura', 'Suspenso', 'Crimen', 'Ciencia ficción', 'Drama histórico', 'Distopía', 'Drama'];
const sagas = ['Todas', 'John Wick', 'Mad Max', 'Gladiador', 'Misión: Imposible', 'Películas independientes'];

const unique = items => [...new Map(items.map(item => [item.id, item])).values()];

export default function TabTres() {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('Todos');
  const [saga, setSaga] = useState('Todas');
  const [year, setYear] = useState('Todos');
  const [sort, setSort] = useState('new');
  const [active, setActive] = useState(null);
  const [section, setSection] = useState('inicio');

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase();
    const result = films.filter(film =>
      (!q || [film.title, film.director, film.cast, film.saga].some(value => value.toLocaleLowerCase().includes(q))) &&
      (genre === 'Todos' || film.genres.includes(genre)) &&
      (saga === 'Todas' || film.saga === saga) &&
      (year === 'Todos' || String(film.year) === year)
    );

    return result.sort((a, b) => {
      if (sort === 'old') return a.year - b.year;
      if (sort === 'az') return a.title.localeCompare(b.title);
      return b.year - a.year;
    });
  }, [query, genre, saga, year, sort]);

  const go = id => {
    setSection(id);
    document.getElementById(`anime-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const cards = items => items.map(film => (
    <button className="tabtres__anime-card" key={film.id} onClick={() => setActive(film)} aria-label={`Ver detalles de ${film.title}`}>
      <div className="tabtres__poster">
        {film.poster
          ? <img src={film.poster} alt={`Póster de ${film.title}`} loading="lazy" onError={e => { e.currentTarget.style.opacity = '0'; }} />
          : <div className="tabtres__poster-fallback"><span>{film.title.split(' ').slice(0, 2).map(w => w[0]).join('')}</span></div>}
        <span className="tabtres__score">{film.year}</span>
      </div>
      <div className="tabtres__card-body">
        <strong title={film.title}>{film.title}</strong>
        <small>{film.year} · {film.saga}</small>
      </div>
    </button>
  ));

  const reset = () => {
    setQuery('');
    setGenre('Todos');
    setSaga('Todas');
    setYear('Todos');
    setSort('new');
  };

  const johnWickFilms = films.filter(film => film.saga === 'John Wick');
  const madMaxFilms = films.filter(film => film.saga === 'Mad Max');
  const gladiatorFilms = films.filter(film => film.saga === 'Gladiador');

  return (
    <div className="tabtres" id="anime-inicio">
      <div className="tabtres__shell">
        <header className="tabtres__header">
          <button className="tabtres__logo" onClick={() => go('inicio')}>
            <span>✦</span> PLANI<span className="tabtres__logo-accent">ACCIÓN</span>
          </button>
          <nav aria-label="Secciones de cine de acción">
            {[
              ['inicio', 'Inicio'], ['explorar', 'Películas'], ['sagas', 'Sagas'],
              ['generos', 'Géneros'], ['derivados', 'Otros contenidos']
            ].map(([id, name]) => (
              <button key={id} className={section === id ? 'tabtres__nav-active' : ''} onClick={() => go(id)}>{name}</button>
            ))}
          </nav>
          <button className="tabtres__header-search" onClick={() => go('explorar')}>⌕ <span>Buscar película</span></button>
        </header>

        <section className="tabtres__hero">
          <div className="tabtres__hero-copy">
            <span className="tabtres__eyebrow">✦ VELOCIDAD · ADRENALINA · SUPERVIVENCIA</span>
            <h1>El universo del <em>cine de acción.</em></h1>
            <p>Películas, sagas, historias, videojuegos, cómics y coleccionables reunidos en un solo lugar.</p>
            <div className="tabtres__hero-actions">
              <button className="tabtres__primary" onClick={() => go('explorar')}>Explorar películas <span>↗</span></button>
              <button className="tabtres__secondary" onClick={() => go('derivados')}>Ver contenidos derivados →</button>
            </div>
            <div className="tabtres__hero-stats">
              <span><b>{films.length}</b> películas</span>
              <span><b>3</b> universos principales</span>
              <span><b>2026</b> catálogo</span>
            </div>
          </div>
          <div className="tabtres__hero-art">
            <div className="tabtres__hero-glow" />
            {films.slice(0, 3).map((film, index) => (
              <button key={film.id} className={`tabtres__hero-cover tabtres__hero-cover--${index}`} onClick={() => setActive(film)} aria-label={`Descubrir ${film.title}`}>
                {film.poster ? <img src={film.poster} alt={film.title} /> : <span>{film.title}</span>}
              </button>
            ))}
            <span className="tabtres__hero-sticker">ACTION<br />CINEMA ✦</span>
          </div>
        </section>

        <div className="tabtres__quick">
          {['John Wick', 'Mad Max', 'Gladiador', 'Acción'].map(item => (
            <button key={item} onClick={() => {
              if (item === 'Acción') { setGenre('Acción'); go('explorar'); }
              else { setSaga(item); go('explorar'); }
            }}>{item} <span>↗</span></button>
          ))}
        </div>

        <section className="tabtres__section" id="anime-populares">
          <div className="tabtres__section-head">
            <div><span className="tabtres__kicker">SELECCIÓN PRINCIPAL</span><h2>Películas destacadas <span>✦</span></h2></div>
            <button onClick={() => go('explorar')}>Ver catálogo →</button>
          </div>
          <div className="tabtres__cards">{cards([films[0], films[8], films[11], films[13], films[14], films[12]])}</div>
        </section>

        <section className="tabtres__section" id="anime-explorar">
          <div className="tabtres__section-head">
            <div><span className="tabtres__kicker">ENCONTRÁ TU FAVORITA</span><h2>Explorar películas</h2></div>
            <span className="tabtres__count">{filtered.length} resultados</span>
          </div>
          <div className="tabtres__filters">
            <label className="tabtres__search"><span>⌕</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar título, director o actor..." aria-label="Buscar película" /></label>
            <label>Género<select value={genre} onChange={e => setGenre(e.target.value)}>{genres.map(g => <option key={g}>{g}</option>)}</select></label>
            <label>Saga<select value={saga} onChange={e => setSaga(e.target.value)}>{sagas.map(s => <option key={s}>{s}</option>)}</select></label>
            <label>Año<select value={year} onChange={e => setYear(e.target.value)}><option>Todos</option>{[2025, 2024, 2023, 2022, 2019, 2018, 2017, 2015, 2014, 2000, 1988, 1985, 1981, 1979].map(y => <option key={y}>{y}</option>)}</select></label>
            <label>Ordenar<select value={sort} onChange={e => setSort(e.target.value)}><option value="new">Más recientes</option><option value="old">Más antiguas</option><option value="az">Alfabético</option></select></label>
            <button className="tabtres__clear" onClick={reset}>Limpiar filtros ×</button>
          </div>
          {filtered.length ? <div className="tabtres__cards">{cards(filtered)}</div> : <div className="tabtres__empty">No encontramos películas con esos filtros. <button onClick={reset}>Restablecer búsqueda</button></div>}
        </section>

        <section className="tabtres__section" id="anime-sagas">
          <div className="tabtres__section-head">
            <div><span className="tabtres__kicker">HISTORIAS QUE CONTINÚAN</span><h2>Explorar por sagas</h2></div>
          </div>
          <h3 className="tabtres__subheading">Saga John Wick</h3>
          <p className="tabtres__footnote">Incluye las cuatro películas principales y el derivado Ballerina. The Continental amplía el universo en formato de serie.</p>
          <div className="tabtres__cards">{cards(johnWickFilms)}</div>
          <div className="tabtres__related">
            <h3>Más del universo John Wick</h3>
            <p><a href="https://johnwick.movie/" target="_blank" rel="noreferrer">Sitio oficial de John Wick ↗</a> · <a href="https://saber.games/untitledjohnwickgame/" target="_blank" rel="noreferrer">Nuevo videojuego anunciado ↗</a></p>
            <p><strong>The Continental (2023):</strong> miniserie precuela centrada en el hotel y su historia.</p>
          </div>
          <h3 className="tabtres__subheading">Universo Mad Max</h3>
          <div className="tabtres__cards">{cards(madMaxFilms)}</div>
          <h3 className="tabtres__subheading">Universo Gladiador</h3>
          <div className="tabtres__cards">{cards(gladiatorFilms)}</div>
        </section>

        <section className="tabtres__section" id="anime-generos">
          <div className="tabtres__section-head">
            <div><span className="tabtres__kicker">ESTILOS Y TEMÁTICAS</span><h2>Explorá por género</h2></div>
          </div>
          <div className="tabtres__genre-grid">
            {genres.slice(1).map((g, i) => (
              <button key={g} className="tabtres__genre" onClick={() => { setGenre(g); go('explorar'); }}>
                <span className="tabtres__genre-icon">{['⚔', '◈', '◉', '◆', '⌁', '◐', '◒', '◇'][i]}</span>
                <strong>{g}</strong><span>↗</span>
              </button>
            ))}
          </div>
        </section>

        <section className="tabtres__section" id="anime-derivados">
          <div className="tabtres__section-head">
            <div><span className="tabtres__kicker">MÁS ALLÁ DE LA PANTALLA</span><h2>Juegos, cómics y coleccionables</h2></div>
          </div>
          <p>Algunas películas dieron origen a videojuegos, cómics, bandas sonoras y figuras. Los enlaces llevan a páginas oficiales o fichas de referencia; la disponibilidad de productos puede cambiar.</p>
          <div className="tabtres__ranking-grid">
            {[
              { title: 'John Wick', links: films[0].related },
              { title: 'Mad Max: Furia en el camino', links: films[8].related },
              { title: 'Gladiador', links: films[11].related },
              { title: 'Gladiador II', links: films[12].related }
            ].map(group => (
              <div className="tabtres__ranking" key={group.title}>
                <h3>{group.title}</h3>
                {group.links.map(link => (
                  <div className="tabtres__media-link" key={link.title}>
                    <small>{link.type}</small>
                    <strong>{link.title}</strong>
                    <p>{link.description}</p>
                    <a href={link.url} target="_blank" rel="noreferrer">Consultar contenido ↗</a>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="tabtres__footnote">No todas las películas tienen videojuegos o cómics propios. En los casos donde no se encontró un producto derivado verificable, no se inventó un enlace.</p>
        </section>

        <section className="tabtres__cta">
          <span>✦ VELOCIDAD · ADRENALINA · SUPERVIVENCIA</span>
          <h2>Grandes historias, mucho más allá del cine.</h2>
          <button className="tabtres__primary" onClick={() => go('explorar')}>Descubrir películas ↗</button>
        </section>

        <footer className="tabtres__footer">
          <strong>✦ PLANI<span>ACCIÓN</span></strong>
          <p>Plani-Acción © 2026 — Proyecto colaborativo.</p>
        </footer>
      </div>

      {active && (
        <div className="tabtres__modal-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) setActive(null); }}>
          <div className="tabtres__modal" role="dialog" aria-modal="true" aria-label={`Detalles de ${active.title}`}>
            <button className="tabtres__modal-close" onClick={() => setActive(null)} aria-label="Cerrar detalles">×</button>
            <div className="tabtres__modal-top">
              {active.poster && <img src={active.poster} alt={`Póster de ${active.title}`} />}
              <div>
                <span className="tabtres__kicker">EXPEDIENTE DE ACCIÓN</span>
                <h2>{active.title}</h2>
                <div className="tabtres__tags">{active.genres.map(g => <span key={g}>{g}</span>)}</div>
                <p>{active.synopsis}</p>
                <div className="tabtres__facts">
                  {[
                    ['Año', active.year], ['Saga', active.saga], ['Director', active.director],
                    ['Reparto', active.cast], ['Duración', active.duration]
                  ].map(([key, value]) => <div key={key}><small>{key}</small><strong>{value}</strong></div>)}
                </div>
              </div>
            </div>
            <div className="tabtres__related"><h3>Escenas destacadas</h3>{active.highlights.map(item => <span key={item}>{item}</span>)}</div>
            <div className="tabtres__related"><h3>Origen de la película</h3><p>{active.origin}</p></div>
            <div className="tabtres__related"><h3>Revisión cultural</h3><p>{active.culture}</p></div>
            <div className="tabtres__related">
              <h3>Más allá de la pantalla</h3>
              {active.related.length ? active.related.map(item => (
                <div className="tabtres__media-link" key={item.title}>
                  <small>{item.type}</small><strong>{item.title}</strong><p>{item.description}</p>
                  <a href={item.url} target="_blank" rel="noreferrer">Ver enlace ↗</a>
                </div>
              )) : <p>No se agregaron enlaces de productos derivados para esta película porque no se encontró una referencia suficientemente clara.</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
