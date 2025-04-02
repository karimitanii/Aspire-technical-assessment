import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import aiRoutes from "./routes/airoutes.js";
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookroutes.js"; // ✅ You forgot to import this
import connection from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Load Routes
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/books", bookRoutes); // ✅ Register book routes

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
