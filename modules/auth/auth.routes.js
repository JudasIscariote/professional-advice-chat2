import { Router } from "express";
import { placeholderAuthController } from "./auth.controller.js";

const router = Router();

router.get("/placeholder", placeholderAuthController);

export default router;
