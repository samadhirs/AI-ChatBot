/*const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL = `${import.meta.env.VITE_GEMINI_API_URL}key=${GEMINI_API_KEY}`;

export const generateContent = async (message) => {
  if (!GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not defined");
  }

  try {
    const response = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: [
          {
            parts: [
              { 
                text: message, 
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API error:", errorText);
      throw new Error(`Gemini API error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    if (!data || !data.candidates || data.candidates.length === 0) {
        throw new Error("No candidates found in the response");
    }

    //AI reply
    return data.candidates[0].content.parts[0].text;

  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
};*/


/*..............................ChatGPT Code.....................................*/



dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = process.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generate`;

app.post("/api/generate", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: { text: message },
        temperature: 0.7,
        candidate_count: 1
      }),
    });

    const data = await response.json();

    if (!data?.candidates || data.candidates.length === 0) {
      return res.json({ text: "Sorry, I couldn't generate a response." });
    }

    // Send back AI reply
    res.json({ text: data.candidates[0].content[0].text });

  } catch (err) {
    console.error("Backend error:", err);
    res.status(500).json({ text: "Sorry, I couldn't generate a response." });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));

