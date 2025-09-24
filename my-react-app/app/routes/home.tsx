export function meta() {
  return [
    { title: "Kasa - Location d'appartements entre particuliers" },
    { name: "description", content: "Chez vous, partout et ailleurs" },
  ];
}

export default function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="properties-grid">
        <div className="properties-container">
          {/* Grid de propriétés sera ajouté plus tard */}
          <div className="property-card">
            <div className="property-image">
              <div className="placeholder-image"></div>
            </div>
            <h3 className="property-title">Titre de la location</h3>
          </div>
          
          <div className="property-card">
            <div className="property-image">
              <div className="placeholder-image"></div>
            </div>
            <h3 className="property-title">Titre de la location</h3>
          </div>
          
          <div className="property-card">
            <div className="property-image">
              <div className="placeholder-image"></div>
            </div>
            <h3 className="property-title">Titre de la location</h3>
          </div>
          
          <div className="property-card">
            <div className="property-image">
              <div className="placeholder-image"></div>
            </div>
            <h3 className="property-title">Titre de la location</h3>
          </div>
          
          <div className="property-card">
            <div className="property-image">
              <div className="placeholder-image"></div>
            </div>
            <h3 className="property-title">Titre de la location</h3>
          </div>
          
          <div className="property-card">
            <div className="property-image">
              <div className="placeholder-image"></div>
            </div>
            <h3 className="property-title">Titre de la location</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
