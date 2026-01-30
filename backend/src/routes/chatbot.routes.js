import express from "express";
import {chatbotController} from "../controllers/Chatbot.controller.js"

const router = express.Router();

router.post("/", chatbotController)

export default router;