import { useState, useEffect } from "react";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "Kasa - Location d'appartements entre particuliers" },
    { name: "description", content: "Chez vous, partout et ailleurs" },
  ];
}

interface Property {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error loading properties data:', error);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, []);

  if (loading) {
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
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              Chargement des annonces...
            </div>
          </div>
        </div>
      </div>
    );
  }

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
          {properties.map((property: Property) => (
            <Link
              key={property.id}
              to={`/logement/${property.id}`}
              className="property-card"
            >
              <div className="property-image">
                <img
                  src={property.cover}
                  alt={property.title}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const nextElement = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                    if (nextElement) nextElement.style.display = 'flex';
                  }}
                />
                <div className="placeholder-image" style={{ display: 'none' }}>
                  <span>Image non disponible</span>
                </div>
              </div>
              <h3 className="property-title">{property.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
