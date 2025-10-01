import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router";

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

export function meta({ params }: { params: { id: string } }) {
  return [
    { title: `Fiche logement - Kasa` },
    { name: "description", content: "Détails du logement" },
  ];
}

export default function PropertyListing() {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const loadProperty = async () => {
      try {
        const response = await fetch('/data.json');
        const properties: Property[] = await response.json();
        const foundProperty = properties.find(p => p.id === id);
        setProperty(foundProperty || null);
      } catch (error) {
        console.error('Error loading property data:', error);
        setProperty(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadProperty();
    }
  }, [id]);

  const nextImage = () => {
    if (property && property.pictures.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === property.pictures.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (property && property.pictures.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? property.pictures.length - 1 : prev - 1
      );
    }
  };

  if (loading) {
    return (
      <div className="property-listing">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          Chargement des détails du logement...
        </div>
      </div>
    );
  }

  if (!property) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="property-listing">
      {/* Galerie d'images */}
      <div className="property-gallery">
        <div className="main-image">
          {property.pictures.length > 0 ? (
            <img
              src={property.pictures[currentImageIndex]}
              alt={property.title}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                const nextElement = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                if (nextElement) nextElement.style.display = 'flex';
              }}
            />
          ) : (
            <div className="placeholder-image">
              <span>Image non disponible</span>
            </div>
          )}
          {property.pictures.length > 1 && (
            <>
              <button
                className="gallery-nav prev"
                aria-label="Image précédente"
                onClick={prevImage}
              >
                ❮
              </button>
              <button
                className="gallery-nav next"
                aria-label="Image suivante"
                onClick={nextImage}
              >
                ❯
              </button>
              <div className="image-counter">
                {currentImageIndex + 1}/{property.pictures.length}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Informations principales */}
      <div className="property-info">
        <div className="property-header">
          <div className="property-details">
            <h1 className="property-title">{property.title}</h1>
            <p className="property-location">{property.location}</p>
            <div className="property-tags">
              {property.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="host-info">
            <div className="host-details">
              <span className="host-name">{property.host.name}</span>
              <div className="host-picture">
                <img
                  src={property.host.picture}
                  alt={property.host.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const nextElement = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                    if (nextElement) nextElement.style.display = 'flex';
                  }}
                />
                <div className="placeholder-avatar" style={{ display: 'none' }}>
                  {property.host.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
            </div>
            <div className="property-rating">
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${star <= parseInt(property.rating) ? 'filled' : ''}`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dropdowns pour description et équipements */}
        <div className="property-dropdowns">
          <div className="dropdown">
            <button className="dropdown-toggle">
              <span>Description</span>
              <span className="dropdown-arrow">❯</span>
            </button>
            <div className="dropdown-content">
              <p>{property.description}</p>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropdown-toggle">
              <span>Équipements</span>
              <span className="dropdown-arrow">❯</span>
            </button>
            <div className="dropdown-content">
              <ul className="equipment-list">
                {property.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}