export default function ScholarForgeLayout({ children }) {
  return (
    <div className="sf-layout">
      <header className="sf-header">
        <h1 className="brand">ScholarForge</h1>
        <nav className="sf-nav">
          <a href="#about">About</a>
          <a href="#brands">Brands</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="sf-main">
        {children}
      </main>

      <footer className="sf-footer">
        <p>© 2026 ScholarForge Ecosystem</p>
      </footer>
    </div>
  );
}
