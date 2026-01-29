import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { planetDetails } from "../data/planetDetails";
import jsPDF from "jspdf";

export default function PlanetDetail() {
  const { id } = useParams();

  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/planets/${id}`)
      .then(res => {
        const dbPlanet = res.data;
        const key = dbPlanet.name?.toLowerCase();
        const extra = planetDetails[key] || {};

        setPlanet({
          ...extra,
          ...dbPlanet,
        });

        setLoading(false);
      })
      .catch(() => {
        setError("Planet not found");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2 className="loading">Loading...</h2>;

  if (error)
    return (
      <div className="error-box">
        <h1>{error}</h1>
        <Link to="/planets">Go Back</Link>
      </div>
    );

  const paragraphs = planet.description
    ? planet.description.split("\n\n")
    : [];

  const downloadPDF = () => {
    const doc = new jsPDF();
    let y = 20;

    doc.setFontSize(18);
    doc.text(planet.name, 14, y);
    y += 10;

    doc.setFontSize(12);
    paragraphs.forEach(p => {
      doc.text(p, 14, y, { maxWidth: 180 });
      y += 10;
    });

    doc.save(`${planet.name}-Notes.pdf`);
  };

  return (
    <>
      {/* 🔹 INTERNAL CSS */}
      <style>{`
        body {
          background: #0b0f1a;
        }

        .page {
          max-width: 900px;
          margin: auto;
          padding: 40px 24px;
          font-family: "Georgia", "Times New Roman", serif;
          color: #e5e7eb;
        }

        .title {
          text-align: center;
          font-size: 48px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #ffffff;
        }

        .subtitle {
          text-align: center;
          font-size: 18px;
          color: #9ca3af;
          margin-bottom: 40px;
        }

        .pdf-btn {
          display: block;
          margin: 0 auto 40px;
          padding: 12px 24px;
          font-size: 16px;
          background: #4f46e5;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .pdf-btn:hover {
          background: #4338ca;
        }

        .section {
          margin-bottom: 50px;
        }

        .section h2 {
          font-size: 26px;
          border-bottom: 1px solid #374151;
          padding-bottom: 8px;
          margin-bottom: 20px;
          color: #ffffff;
        }

        .paragraph {
          font-size: 18px;
          line-height: 1.9;
          margin-bottom: 20px;
          color: #d1d5db;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 14px;
          font-size: 18px;
        }

        .info-grid span {
          color: #ffffff;
          font-weight: bold;
        }

        ul {
          margin-left: 20px;
          font-size: 18px;
          line-height: 1.8;
        }

        .back {
          display: block;
          text-align: center;
          margin-top: 40px;
          font-size: 18px;
          color: #818cf8;
          text-decoration: underline;
        }

        .loading {
          text-align: center;
          margin-top: 100px;
          color: #9ca3af;
          font-size: 22px;
        }

        .error-box {
          text-align: center;
          margin-top: 100px;
          color: white;
        }

        .error-box a {
          color: #60a5fa;
          text-decoration: underline;
        }
      `}</style>

      <div className="page">
        <h1 className="title">{planet.name}</h1>
        <p className="subtitle">
          Complete study notes for astronomy and exams
        </p>

        <button className="pdf-btn" onClick={downloadPDF}>
          📄 Download as PDF
        </button>

        {/* OVERVIEW */}
        <div className="section">
          <h2>Overview</h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="paragraph">{p}</p>
          ))}
        </div>

        {/* INFORMATION */}
        <div className="section">
          <h2>Planet Information</h2>
          <div className="info-grid">
            <p><span>Radius:</span> {planet.radius || "Unknown"} km</p>
            <p><span>Distance from Sun:</span> {planet.distance || "Unknown"}</p>
            <p><span>Order from Sun:</span> {planet.order || "Unknown"}</p>
            <p><span>Discovered By:</span> {planet.discoveredBy || "Unknown"}</p>
          </div>
        </div>

        {/* STUDY NOTES */}
        <div className="section">
          <h2>Study Notes</h2>
          <p className="paragraph">
            {planet.name} is an important celestial body that helps scientists
            understand planetary formation, atmospheric conditions, and space evolution.
          </p>
          <p className="paragraph">
            Research missions and telescopic observations provide valuable data
            about its structure, surface, and environmental behavior.
          </p>
          <p className="paragraph">
            These notes are ideal for handwritten preparation, competitive exams,
            and conceptual clarity in space science.
          </p>
        </div>

        {/* FACTS */}
        <div className="section">
          <h2>Interesting Facts</h2>
          {planet.facts?.length ? (
            <ul>
              {planet.facts.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          ) : (
            <p className="paragraph">No facts available</p>
          )}
        </div>

        <Link to="/planets" className="back">← Back to Planets</Link>
      </div>
    </>
  );
}
