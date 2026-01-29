// backend/src/seed/seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Planet from "../models/Planet.js";
import connectDB from "../config/db.js";

dotenv.config();

const planets = [
  {
    name: "Mercury",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg",
    diameter: "4,879 km",
    mass: "3.30 × 10²³ kg",
    gravity: "3.7 m/s²",
    distanceFromSun: "57.9 million km",
    lengthOfDay: "58.6 Earth days",
    lengthOfYear: "88 Earth days",
    temperature: "-173°C to 427°C",
    atmosphere: "Oxygen, Sodium, Hydrogen",
    moons: 0,
    composition: "Rock and metal",
    rawMinerals: "Iron, Nickel",
    description: "Smallest planet and closest to the Sun."
  },
  {
    name: "Venus",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
    diameter: "12,104 km",
    mass: "4.87 × 10²⁴ kg",
    gravity: "8.87 m/s²",
    distanceFromSun: "108.2 million km",
    lengthOfDay: "243 Earth days",
    lengthOfYear: "225 Earth days",
    temperature: "462°C",
    atmosphere: "Carbon dioxide, Nitrogen",
    moons: 0,
    composition: "Rocky",
    rawMinerals: "Basalt, Iron",
    description: "Hottest planet with thick toxic atmosphere."
  },
  {
    name: "Earth",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
    diameter: "12,742 km",
    mass: "5.97 × 10²⁴ kg",
    gravity: "9.8 m/s²",
    distanceFromSun: "149.6 million km",
    lengthOfDay: "24 hours",
    lengthOfYear: "365 days",
    temperature: "-88°C to 58°C",
    atmosphere: "Nitrogen, Oxygen",
    moons: 1,
    composition: "Rock, Water",
    rawMinerals: "Iron, Silicon, Nickel",
    description: "Only known planet with life."
  },
  {
    name: "Mars",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
    diameter: "6,779 km",
    mass: "6.39 × 10²³ kg",
    gravity: "3.7 m/s²",
    distanceFromSun: "227.9 million km",
    lengthOfDay: "24.6 hours",
    lengthOfYear: "687 days",
    temperature: "-125°C to 20°C",
    atmosphere: "CO₂, Nitrogen",
    moons: 2,
    composition: "Rock, Dust, Ice",
    rawMinerals: "Iron oxide",
    description: "Known as the Red Planet."
  },
  {
    name: "Jupiter",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
    diameter: "139,820 km",
    mass: "1.90 × 10²⁷ kg",
    gravity: "24.79 m/s²",
    distanceFromSun: "778.5 million km",
    lengthOfDay: "9.9 hours",
    lengthOfYear: "12 Earth years",
    temperature: "-145°C",
    atmosphere: "Hydrogen, Helium",
    moons: 95,
    composition: "Gas giant",
    rawMinerals: "Hydrogen, Helium",
    description: "Largest planet with strong storms and the Great Red Spot."
  },
  {
    name: "Saturn",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
    diameter: "116,460 km",
    mass: "5.68 × 10²⁶ kg",
    gravity: "10.44 m/s²",
    distanceFromSun: "1.43 billion km",
    lengthOfDay: "10.7 hours",
    lengthOfYear: "29 Earth years",
    temperature: "-178°C",
    atmosphere: "Hydrogen, Helium",
    moons: 146,
    composition: "Gas giant with rings",
    rawMinerals: "Hydrogen, Helium",
    description: "Famous for its bright ring system and many moons."
  },
  {
    name: "Uranus",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
    diameter: "50,724 km",
    mass: "8.68 × 10²⁵ kg",
    gravity: "8.69 m/s²",
    distanceFromSun: "2.87 billion km",
    lengthOfDay: "17 hours",
    lengthOfYear: "84 Earth years",
    temperature: "-224°C",
    atmosphere: "Hydrogen, Helium, Methane",
    moons: 27,
    composition: "Ice giant",
    rawMinerals: "Water ice, Methane ice",
    description: "Ice giant that rotates sideways."
  },
  {
    name: "Neptune",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
    diameter: "49,244 km",
    mass: "1.02 × 10²⁶ kg",
    gravity: "11.15 m/s²",
    distanceFromSun: "4.50 billion km",
    lengthOfDay: "16 hours",
    lengthOfYear: "165 Earth years",
    temperature: "-214°C",
    atmosphere: "Hydrogen, Helium, Methane",
    moons: 14,
    composition: "Ice giant",
    rawMinerals: "Methane, Water Ice",
    description: "Has the strongest winds and deep blue color."
  }
];

async function seedData() {
  try {
    await connectDB();
    await Planet.deleteMany({});
    await Planet.insertMany(planets);
    console.log("✅ Planet data seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding error:", error);
    process.exit(1);
  }
}

seedData();
