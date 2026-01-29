// frontend/src/pages/Planets.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import PlanetCard from "../components/PlanetCard";
import { useSearchParams } from "react-router-dom";

export default function Planets() {
  const [planets, setPlanets] = useState([]);
  const [searchParams] = useSearchParams();
  const search = (searchParams.get("search") || "").toLowerCase();

  useEffect(() => {
    axios.get("http://localhost:5000/api/planets")
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
