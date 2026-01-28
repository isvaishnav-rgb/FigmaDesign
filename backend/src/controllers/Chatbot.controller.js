import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function chatbotController(req,res) {
  const { message } = await req.json();

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(message);
  const response = result.response.text();

  return res.json({ reply: response });
}
