// FULL FILE CONTENT (ALIGNMENT FIXED)
import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";
import html2pdf from "html2pdf.js";

/* ================= EARTH ================= */
const Earth = ({ onClick }) => {
  const earthRef = useRef();
  const nightRef = useRef();
  const cloudRef = useRef();

  const [day, night, clouds] = useTexture([
    "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg",
    "https://threejs.org/examples/textures/planets/earth_lights_2048.png",
    "https://threejs.org/examples/textures/planets/earth_clouds_1024.png",
  ]);

  useFrame(() => {
    earthRef.current.rotation.y += 0.0006;
    nightRef.current.rotation.y += 0.0006;
    cloudRef.current.rotation.y += 0.001;
  });

  return (
    <>
      <mesh ref={earthRef} onClick={onClick}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial map={day} />
      </mesh>

      <mesh ref={nightRef}>
        <sphereGeometry args={[2.001, 64, 64]} />
        <meshStandardMaterial
          map={night}
          transparent
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <mesh ref={cloudRef}>
        <sphereGeometry args={[2.03, 64, 64]} />
        <meshStandardMaterial map={clouds} transparent opacity={0.35} />
      </mesh>
    </>
  );
};

/* ================= HELPERS ================= */
const latLonToVector = (lat, lon, r = 2.05) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return [
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  ];
};

/* ================= MAP PAGE ================= */
const Map = () => {
  const [country, setCountry] = useState(null);
  const [notes, setNotes] = useState("");
  const [cityPin, setCityPin] = useState(null);
  const [search, setSearch] = useState("");

  /* 🌍 CLICK ON EARTH */
  const handleEarthClick = async (e) => {
    const p = e.point.clone().normalize();
    const lat = Math.asin(p.y) * (180 / Math.PI);
    const lon = Math.atan2(-p.x, p.z) * (180 / Math.PI);

    try {
      const geoRes = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
      );
      const geo = await geoRes.json();

      if (!geo.countryCode) return;

      const res = await fetch(
        `https://restcountries.com/v3.1/alpha/${geo.countryCode}`
      );
      const [c] = await res.json();
      applyCountry(c);
    } catch (err) {
      console.error(err);
    }
  };

  /* 🔍 SEARCH */
  const searchCountry = async () => {
    if (!search) return;

    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${search}?fullText=true`
      );
      const [c] = await res.json();
      applyCountry(c);
    } catch {
      alert("Country not found");
    }
  };

  const applyCountry = (c) => {
    setCountry(c);
    setNotes(localStorage.getItem(`notes_${c.cca2}`) || "");

    if (c.capitalInfo?.latlng) {
      setCityPin(
        latLonToVector(c.capitalInfo.latlng[0], c.capitalInfo.latlng[1])
      );
    }
  };

  const saveNotes = () => {
    if (!country) return;
    localStorage.setItem(`notes_${country.cca2}`, notes);
    alert("Notes saved");
  };

  const downloadPDF = () => {
    if (!country) return;

    const html = `
      <div style="font-family:Arial;color:black;padding:20px">
        <h1>${country.name.common}</h1>
        <img src="${country.flags.png}" width="160"/>
        <p><b>Capital:</b> ${country.capital?.[0]}</p>
        <p><b>Region:</b> ${country.region}</p>
        <p><b>Population:</b> ${country.population.toLocaleString()}</p>
        <h3>Notes</h3>
        <p>${notes || "No notes added"}</p>
      </div>
    `;

    html2pdf().from(html).set({
      filename: `${country.name.common}.pdf`,
      jsPDF: { format: "a4" },
      html2canvas: { scale: 2 },
    }).save();
  };

  return (
    <div style={{ height: "100vh", background: "black", position: "relative" }}>
      {/* 🔍 SEARCH BAR */}
      <div style={searchStyle}>
        <input
          placeholder="Search country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchCountry}>Search</button>
      </div>

      {/* 📄 INFO PANEL */}
      {country && (
        <div style={panelStyle}>
          <h3>{country.name.common}</h3>
          <img src={country.flags.png} width="100%" />

          <p>Capital: {country.capital?.[0]}</p>

          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Write notes..."
          />

          <div style={buttonGroup}>
            <button onClick={saveNotes}>💾 Save Notes</button>
            <button onClick={downloadPDF}>📄 Download PDF</button>
          </div>
        </div>
      )}

      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[5, 3, 5]} intensity={1} />
        <Stars radius={300} depth={60} count={9000} factor={7} fade />

        <Suspense fallback={null}>
          <Earth onClick={handleEarthClick} />

          {cityPin && (
            <mesh position={cityPin}>
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshStandardMaterial emissive="red" />
            </mesh>
          )}
        </Suspense>

        <OrbitControls enableZoom enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Map;

/* ================= STYLES ================= */
const panelStyle = {
  position: "absolute",
  top: 80,
  left: 20,
  width: "280px",
  padding: "14px",
  background: "rgba(0,0,0,0.85)",
  color: "white",
  borderRadius: "12px",
  zIndex: 10,
};

const searchStyle = {
  position: "absolute",
  top: 20,
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: "8px",
  zIndex: 10,
};

const buttonGroup = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginTop: "10px",
};
