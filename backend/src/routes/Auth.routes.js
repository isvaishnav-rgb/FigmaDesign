import express from "express";
import { loginController, signupControlller, logoutController, refreshTokenController } from "../controllers/Auth.controller.js";
import authJwt from "../middlewares/AuthJwt.middleware.js";

const router = express.Router();

router.post("/login", loginController)
router.post("/signup", signupControlller)
router.get("/logout", authJwt, logoutController)
router.post("/refresh-token", refreshTokenController);

export default router;