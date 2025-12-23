// server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = process.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generate?key=${GEMINI_API_KEY}`;

app.post("/api/generate", async (req, res) => {
  try {
    const { message } = req.body;
    const response = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: { text: message },
        temperature: 0.7,
        candidate_count: 1,
      }),
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate content" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
