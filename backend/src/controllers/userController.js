// backend/src/controllers/userController.js
import User from "../models/User.js";

export const getMe = async (req, res) => {
  res.json(req.user);
};

export const addFavorite = async (req, res) => {
  const userId = req.user._id;
  const { planetId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });
    if (!user.favorites.includes(planetId)) {
      user.favorites.push(planetId);
      await user.save();
    }
    res.json({ favorites: user.favorites });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const removeFavorite = async (req, res) => {
  const userId = req.user._id;
  const { planetId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });
    user.favorites = user.favorites.filter(id => id.toString() !== planetId);
    await user.save();
    res.json({ favorites: user.favorites });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
