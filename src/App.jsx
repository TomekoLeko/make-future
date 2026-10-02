import { useState } from 'react';
import trends from '../docs/trends.json';

const DRAW_COUNT = 3;

function drawTrends() {
  const shuffledTrends = [...trends];

  for (let index = 0; index < DRAW_COUNT; index += 1) {
    const randomIndex = index + Math.floor(Math.random() * (shuffledTrends.length - index));
    [shuffledTrends[index], shuffledTrends[randomIndex]] = [
      shuffledTrends[randomIndex],
      shuffledTrends[index],
    ];
  }

  return shuffledTrends.slice(0, DRAW_COUNT);
}

function App() {
  const [selectedTrends, setSelectedTrends] = useState([]);

  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Trendownik — strona główna">
          <span className="brand-mark" aria-hidden="true">✳</span>
          <span>trendownik</span>
        </a>
        <span className="header-note"><span className="status-dot" /> Baza: {trends.length} trendów</span>
      </header>

      <section className="hero" id="top" aria-labelledby="page-title">
        <p className="eyebrow"><span className="eyebrow-line" /> PORCJA INSPIRACJI</p>
        <h1 id="page-title">Co będzie<br /><span>następne?</span></h1>
        <p className="intro-copy">
          Odkryj trzy trendy, które mogą zainspirować Twój kolejny pomysł.
        </p>
        <button className="draw-button" onClick={() => setSelectedTrends(drawTrends())}>
          <span aria-hidden="true">⤨</span>
          {selectedTrends.length ? 'Losuj ponownie' : 'Wylosuj 3 trendy'}
          <span className="button-arrow" aria-hidden="true">↗</span>
        </button>
      </section>

      <section className="results-section" aria-label="Wylosowane trendy" aria-live="polite">
        {selectedTrends.length ? (
          <>
            <div className="results-heading">
              <p className="eyebrow">TWÓJ ZESTAW</p>
              <span>3 losowe inspiracje</span>
            </div>
            <div className="trend-grid">
              {selectedTrends.map((trend, index) => (
                <article className="trend-card" key={trend.nazwa_trendu} style={{ '--card-index': index }}>
                  <div className="card-topline">
                    <span className="card-number">0{index + 1}</span>
                    <span className="card-spark" aria-hidden="true">✳</span>
                  </div>
                  <p className="trend-category">{trend.megatrend}</p>
                  <h2>{trend.nazwa_trendu}</h2>
                  <p className="trend-description">{trend.opis}</p>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="empty-state">
            <span className="empty-icon" aria-hidden="true">✳</span>
            <p>Trzy nowe tropy czekają na odkrycie.</p>
          </div>
        )}
      </section>

      <footer>Mały pomysł. Wielka inspiracja.</footer>
    </main>
  );
}

export default App;
