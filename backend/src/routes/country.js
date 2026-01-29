import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;

    const response = await fetch(
      `https://restcountries.com/v3.1/name/${name}`
    );
    const data = await response.json();

    res.json({
      name: data[0].name.common,
      capital: data[0].capital?.[0],
      population: data[0].population,
      region: data[0].region,
      flag: data[0].flags.png,
    });
  } catch (e) {
    res.status(500).json({ error: "Country not found" });
  }
});

export default router;
