import express from "express";

const router = express.Router();

/**
 * POST /api/spacebot/chat
 */
router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ reply: "Please ask a question." });
    }

    // 🔹 Temporary intelligent replies (unlimited questions)
    let reply = "";

    const q = message.toLowerCase();

    if (q.includes("earth")) {
      reply =
        "🌍 Earth is the third planet from the Sun and the only known planet that supports life.";
    } else if (q.includes("mars")) {
      reply =
        "🔴 Mars is called the Red Planet and is a major target for future human missions.";
    } else if (q.includes("black hole")) {
      reply =
        "🕳 A black hole is a region of space where gravity is so strong that nothing can escape it.";
    } else if (q.includes("nasa")) {
      reply =
        "🚀 NASA is the United States space agency responsible for space exploration and research.";
    } else if (q.includes("isro")) {
      reply =
        "🇮🇳 ISRO is India's space agency known for missions like Chandrayaan and Gaganyaan.";
    } else {
      reply =
        "🤖 I can answer any space-related question! Ask about planets, missions, black holes, ISS, or astronomy.";
    }

    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Server error. Try again later." });
  }
});

export default router;
