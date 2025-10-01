export function meta() {
  return [
    { title: "404 - Page non trouvée - Kasa" },
    { name: "description", content: "La page que vous cherchez n'existe pas" },
  ];
}

export default function NotFound() {
  return (
    <div className="error-404">
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <p className="error-message">
          Oups! La page que<br />
          vous demandez n'existe pas.
        </p>
        <a href="/" className="error-link">
          Retourner sur la page d'accueil
        </a>
      </div>
    </div>
  );
}