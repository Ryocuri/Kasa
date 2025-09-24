export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span>KASA</span>
        </div>
        <nav className="navigation">
          <a href="/" className="nav-link active">Accueil</a>
          <a href="/about" className="nav-link">A Propos</a>
        </nav>
      </div>
    </header>
  );
}