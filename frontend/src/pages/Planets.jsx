// frontend/src/pages/Planets.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import PlanetCard from "../components/PlanetCard";
import { useSearchParams } from "react-router-dom";

// ✅ backend base URL (Render)
const API_BASE_URL = "https://space-hub-37p8.onrender.com";

export default function Planets() {
  const [planets, setPlanets] = useState([]);
  const [searchParams] = useSearchParams();
  const search = (searchParams.get("search") || "").toLowerCase();

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/planets`)
      .then((res) => setPlanets(res.data))
      .catch((err) => console.error("API error:", err));
  }, []);

  const filtered = planets.filter(p =>
    p.name?.toLowerCase().includes(search) ||
    (p.description || "").toLowerCase().includes(search)
  );

  const list = search ? filtered : planets;

  return (
    <div className="container">
      <h1 className="page-title">🪐 All Planets</h1>

      <div className="grid">
        {list.map(p => <PlanetCard key={p._id} planet={p} />)}
      </div>
    </div>
  );
}
