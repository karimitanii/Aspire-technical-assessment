
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const getAIResponse = async (req, res) => {
  try {
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
      { inputs: req.body.text },
      {
        headers: { Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}` },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
