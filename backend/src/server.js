
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import planetRoutes from "./routes/planets.js";
import eventRoutes from "./routes/events.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import countryRoute from "./routes/country.js";
import spaceBotRoutes from "./routes/spaceBot.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.use("/api/planets", planetRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/country", countryRoute);
app.use("/api/spacebot", spaceBotRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on port ${PORT}`)
);





