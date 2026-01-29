// backend/src/controllers/planetController.js
import Planet from "../models/Planet.js";

/**
 * GET /api/planets
 * Return all planets sorted by orderFromSun (if available)
 */
export const getPlanets = async (_req, res) => {
  try {
    const planets = await Planet.find().sort({ orderFromSun: 1 });
    return res.json(planets);
  } catch (err) {
    console.error("getPlanets error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

/**
 * GET /api/planets/:id
 * Return a single planet by _id
 */
export const getPlanetById = async (req, res) => {
  try {
    const { id } = req.params;
    const planet = await Planet.findById(id);
    if (!planet) return res.status(404).json({ error: "Planet not found" });
    return res.json(planet);
  } catch (err) {
    console.error("getPlanetById error:", err);
    // if id is invalid ObjectId, return 400
    if (err.kind === "ObjectId" || err.name === "CastError") {
      return res.status(400).json({ error: "Invalid planet id" });
    }
    return res.status(500).json({ error: "Server error" });
  }
};
