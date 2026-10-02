function App() {
  return (
    <main className="page-shell">
      <section className="intro-card" aria-labelledby="page-title">
        <p className="eyebrow">TWÓJ KREATYWNY START</p>
        <h1 id="page-title">Losowanie trendów</h1>
        <p className="intro-copy">
          Aplikacja do odkrywania trendów. Wkrótce dodamy tu losowanie inspiracji.
        </p>
        <div className="status-pill">
          <span className="status-dot" aria-hidden="true" />
          Projekt React jest gotowy do rozwoju
        </div>
      </section>
      <footer>Mały pomysł. Wielka inspiracja.</footer>
    </main>
  );
}

export default App;
