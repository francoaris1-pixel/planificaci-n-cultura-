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
