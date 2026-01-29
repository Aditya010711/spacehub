import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import User from "../models/User.js";

const router = express.Router();

/* ================= UPDATE PROFILE ================= */
router.put("/profile", authMiddleware, async (req, res) => {
  try {
    const { name, profileImage } = req.body;

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (name) user.name = name;
    if (profileImage) user.profileImage = profileImage;

    await user.save();

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save profile" });
  }
});

export default router;
