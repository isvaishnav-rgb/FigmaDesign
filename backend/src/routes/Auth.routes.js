import express from "express";
import { loginController, signupControlller } from "../controllers/Auth.controller";

const router = express.Router();

router.post("/login", loginController)
router.post("/signup", signupControlller)

export default router;