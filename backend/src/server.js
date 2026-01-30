import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import connectDB from "../src/config/DBConnection.js"
import chatbotRoutes from "../src/routes/chatbot.routes.js";
import authRoutes from "../src/routes/Auth.routes.js"

dotenv.config();
connectDB();
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

//routes
app.use("/auth", authRoutes)
app.use("/chat", chatbotRoutes)


app.listen(process.env.PORT, () => {
    console.log(`server is running on port : ${process.env.PORT}`)
})
