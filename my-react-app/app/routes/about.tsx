export function meta() {
  return [
    { title: "À propos - Kasa" },
    { name: "description", content: "En savoir plus sur Kasa" },
  ];
}

export default function About() {
  return (
    <div className="about">
      <div className="hero">
        <div className="hero-content">
          <h1>À propos</h1>
        </div>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="about-content">
        <div className="about-container">
          <div className="about-section">
            <h2>Fiabilité</h2>
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
              et toutes les informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
          
          <div className="about-section">
            <h2>Respect</h2>
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de 
              perturbation du voisinage entraînera une exclusion de notre plateforme.
            </p>
          </div>
          
          <div className="about-section">
            <h2>Service</h2>
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
              N'hésitez pas à nous contacter si vous avez la moindre question.
            </p>
          </div>
          
          <div className="about-section">
            <h2>Sécurité</h2>
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
              chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note 
              aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}