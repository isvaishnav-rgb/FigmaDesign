import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const chatbotController = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ message: "Message is required" });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash" 
    });

    const result = await model.generateContent(message);
    const response = result.response.text();

    return res.json({ reply: response });

  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong",
      error: err.message
    });
  }
};

export { chatbotController };
