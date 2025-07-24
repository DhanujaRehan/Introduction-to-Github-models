require('dotenv').config();
const axios = require('axios');

const inputText = "GitHub Models are powerful!";

async function getEmbeddingFromMistral() {
  try {
    const response = await axios.post(
      'https://api.mistral.ai/v1/embeddings',
      {
        model: "mistral-embed", // Check for exact model name in API docs
        input: inputText
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const embedding = response.data.data[0].embedding;
    console.log("✅ Embedding Vector:\n", embedding);
  } catch (error) {
    console.error("❌ Error getting embedding:", error.response?.data || error.message);
  }
}

getEmbeddingFromMistral();
