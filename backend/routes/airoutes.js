import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    // ✅ Corrected API Call for Google Gemini
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GOOGLE_AI_KEY}`,
      {
        contents: [
          {
            parts: [{ text: message }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // ✅ Extract the AI response correctly
    const aiReply =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't process your request.";

    res.json({ reply: aiReply });
  } catch (error) {
    console.error("AI API Error:", error.response?.data || error.message);
    res
      .status(500)
      .json({ message: "AI response failed", error: error.response?.data });
  }
});

export default router;