import mongoose from "mongoose";

const planetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    imageUrl: {
      type: String,
      required: true
    },

    diameter: {
      type: String,
      required: true
    },

    mass: {
      type: String,
      required: true
    },

    gravity: {
      type: String,
      required: true
    },

    distanceFromSun: {
      type: String,
      required: true
    },

    lengthOfDay: {
      type: String,
      required: true
    },

    lengthOfYear: {
      type: String,
      required: true
    },

    temperature: {
      type: String,
      required: true
    },

    atmosphere: {
      type: String,
      required: true
    },

    moons: {
      type: Number,
      required: true
    },

    composition: {
      type: String,
      required: true
    },

    rawMinerals: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

// ✅ Prevent model overwrite error
const Planet = mongoose.models.Planet || mongoose.model("Planet", planetSchema);

export default Planet;
