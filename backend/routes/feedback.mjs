import { Router } from "express";
import { handleFeedback } from "../controllers/feedbackController.mjs";

const router = Router();

router.post("/", handleFeedback); // Use the controller function here

export default router;
