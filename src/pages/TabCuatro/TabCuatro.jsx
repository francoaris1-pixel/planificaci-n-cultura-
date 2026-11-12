
.tabcuatro {
  --bg: #08090b;
  --surface: #151719;
  --border: #34383d;
  --text: #f5f5f5;
  --muted: #a5a8ad;
  --accent: #e32636;

  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  padding: 25px 15px;
}

.tabtres * {
  box-sizing: border-box;
}

.tabtres__shell {
  max-width: 1250px;
  margin: auto;
}

.tabtres__hero {
  padding: 75px 25px;
  text-align: center;
  background:
    linear-gradient(90deg, rgba(0,0,0,.95), rgba(0,0,0,.45)),
    url("https://image.tmdb.org/t/p/original/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  margin-bottom: 45px;
}

.tabtres__hero h1 {
  font-size: clamp(38px, 7vw, 76px);
  font-weight: 900;
  letter-spacing: 4px;
  margin: 15px 0;
}

.tabtres__hero h2 {
  font-size: clamp(20px, 3vw, 32px);
}

.tabtres__hero p {
  color: #ddd;
}

.tabtres__kicker {
  color: var(--accent);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 3px;
}

.tabtres__section {
  margin: 55px 0;
}

.tabtres__section h2 {
  font-size: 30px;
  margin: 12px 0 25px;
}

.tabtres__section-head {
  margin-bottom: 25px;
}

.tabtres__filters {
  display: flex;
  gap: 12px;
  margin-bottom: 25px;
  flex-wrap: wrap;
}

.tabtres__filters input,
.tabtres__filters select {
  background: var(--surface);
  border: 1px solid var(--border);
  color: white;
  padding: 13px 15px;
  border-radius: 7px;
  font-size: 15px;
}

.tabtres__filters input {
  flex: 1;
  min-width: 200px;
}

.tabtres__cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 22px;
  margin: 25px 0 45px;
}

.tabtres__card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  transition: transform .25s, border-color .25s;
}

.tabtres__card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
}

.tabtres__poster {
  display: block;
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  background: #222;
}

.tabtres__card-content {
  padding: 15px;
}

.tabtres__card-content > span {
  color: var(--accent);
  font-size: 13px;
}

.tabtres__card-content h3 {
  font-size: 17px;
  min-height: 42px;
}

.tabtres__card-content p {
  color: var(--muted);
  font-size: 13px;
  min-height: 35px;
}

.tabtres button {
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 11px 16px;
  font-weight: 700;
  cursor: pointer;
}

.tabtres button:hover {
  background: #b91827;
}

.tabtres__cta {
  text-align: center;
  padding: 55px 20px;
  background: var(--surface);
  border-radius: 12px;
  border: 1px solid var(--border);
}

.tabtres__cta span {
  color: var(--accent);
  font-weight: bold;
  letter-spacing: 2px;
}

.tabtres__footer {
  text-align: center;
  padding: 35px 15px;
  margin-top: 35px;
  border-top: 1px solid var(--border);
  color: var(--muted);
}

.tabtres__footer strong {
  color: white;
  font-size: 25px;
  letter-spacing: 2px;
}

.tabtres__footer strong span {
  color: var(--accent);
}

.tabtres__modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0,0,0,.88);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  overflow-y: auto;
}

.tabtres__modal {
  background: #111315;
  border: 1px solid var(--border);
  border-radius: 12px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 25px;
  position: relative;
}

.tabtres__modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 38px;
  height: 38px;
  font-size: 24px;
  z-index: 2;
}

.tabtres__modal-top {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 25px;
  margin-bottom: 30px;
}

.tabtres__modal-top img {
  width: 100%;
  border-radius: 8px;
  aspect-ratio: 2 / 3;
  object-fit: cover;
}

.tabtres__modal-top h2 {
  font-size: 30px;
  margin: 10px 0;
}

.tabtres__modal p {
  line-height: 1.7;
  color: #ccc;
}

.tabtres__facts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px 15px;
}

.tabtres__related {
  border-top: 1px solid var(--border);
  padding: 20px 0;
}

.tabtres__related h3 {
  color: var(--accent);
  margin-bottom: 12px;
}

.tabtres__related h4 {
  color: white;
  margin: 15px 0 5px;
}

.tabtres__related li {
  margin: 8px 0;
  color: #ccc;
}

.tabtres__media-link {
  padding: 13px;
  margin: 10px 0;
  background: var(--surface);
  border-radius: 7px;
}

.tabtres__media-link small {
  color: var(--accent);
  display: block;
  margin-bottom: 5px;
}

@media (max-width: 650px) {
  .tabtres__modal-top {
    grid-template-columns: 1fr;
  }

  .tabtres__modal-top img {
    max-width: 220px;
  }

  .tabtres__hero {
    padding: 50px 15px;
  }

  .tabtres__cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .tabtres__modal {
    padding: 18px;
  }

  .tabtres__facts {
    grid-template-columns: 1fr;
  }
}
