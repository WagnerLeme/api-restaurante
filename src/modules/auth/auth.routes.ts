import { Router } from "express"; 
import authController from "./auth.controller.js";

const authRoutes = Router();

authRoutes.post("/", authController.login);

export default authRoutes;