import jwt from "jsonwebtoken";
import { createUser, findUserByEmail } from "../models/userModel.js";
import dotenv from "dotenv";

dotenv.config();

// User Login (No Hashing - Direct Comparison)
export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log("Login attempt:", email, password); // ✅ Debugging

  try {
    const user = await findUserByEmail(email);
    console.log("User found in DB:", user); // ✅ Debugging

    if (!user) {
      console.log("User not found");
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // ✅ Direct string comparison (No Hashing)
    if (password !== user.password) {
      console.log("Password mismatch");
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};