import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import chatbotRoutes from "../src/routes/Chatbot.routes";

dotenv.config();
//connectDB();
const app = express();

cors({
    origin: "*",
    credential: true
})

app.use(express.json());

//routes
app.use("/chatbot", chatbotRoutes)


app.listen(process.env.PORT, () => {
    console.log(`server is runninhg on port : ${process.env.PORT}`)
})
