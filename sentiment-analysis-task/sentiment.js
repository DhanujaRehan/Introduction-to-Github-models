require('dotenv').config();
const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function analyzeSentiment(text) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a sentiment analysis assistant. Respond with only 'positive', 'negative', or 'neutral'.",
        },
        {
          role: "user",
          content: `What is the sentiment of this text: "${text}"?`,
        },
      ],
    });

    const sentiment = completion.choices[0].message.content.trim();
    console.log(`Sentiment: ${sentiment}`);
  } catch (error) {
    console.error("Error analyzing sentiment:", error);
  }
}

// Example usage
const userText = "I love learning new things!";
analyzeSentiment(userText);


