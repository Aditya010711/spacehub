import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import connectDB from "../config/db.js";
import User from "../models/User.js";

dotenv.config();

async function createAdmin() {
  try {
    await connectDB();

    const email = "Admin@123";
    const password = "Adi@3871";

    // Check if admin already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("✅ Admin already exists.");

      if (existingUser.role !== "admin") {
        existingUser.role = "admin";
        await existingUser.save();
        console.log("✅ Existing user promoted to ADMIN.");
      }

      process.exit(0);
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new admin
    const adminUser = new User({
      name: "Admin",
      email: email,
      password: hashedPassword,
      role: "admin",
      favorites: [],
    });

    await adminUser.save();

    console.log("✅ ADMIN CREATED SUCCESSFULLY");
    console.log("EMAIL:", email);
    console.log("PASSWORD:", password);

    process.exit(0);
  } catch (error) {
    console.error("❌ ADMIN CREATION FAILED:", error.message);
    process.exit(1);
  }
}

createAdmin();
