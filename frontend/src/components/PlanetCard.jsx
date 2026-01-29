// frontend/src/components/PlanetCard.jsx
import { Link } from "react-router-dom";
import "../styles/globals.css"; // ensures classes available

export default function PlanetCard({ planet }) {
  if (!planet) return null;

  return (
    <Link to={`/planet/${planet._id}`} className="planet-card" style={{ textDecoration: "none" }}>
      <img
        className="card-image"
        src={planet.imageUrl || "https://via.placeholder.com/300"}
        alt={planet.name || "Planet"}
        onError={(e) => e.currentTarget.src = "https://via.placeholder.com/300"}
      />
      <h3>{planet.name}</h3>
      <p>{planet.description}</p>
    </Link>
  );
}
