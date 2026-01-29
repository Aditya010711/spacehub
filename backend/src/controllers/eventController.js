import Event from "../models/Event.js";

export const getEvents = async (req, res) => {
  try {
    const { upcoming } = req.query;
    const now = new Date();
    const query = upcoming === "true" ? { date: { $gte: now } } : {};
    const sort = upcoming === "true" ? { date: 1 } : { date: -1 };
    const events = await Event.find(query).sort(sort);
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};