import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    planet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Planet",
      required: true,
    },
  },
  { timestamps: true }
);

const Event =
  mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;
