// backend/src/routes/planets.js
import express from "express";
import Planet from "../models/Planet.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const planets = await Planet.find().sort({ orderFromSun: 1, name: 1 });
    res.json(planets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const planet = await Planet.findById(req.params.id);
    if (!planet) return res.status(404).json({ error: "Planet not found" });
    res.json(planet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
