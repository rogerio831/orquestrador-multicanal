import express from "express";
import { processMessage } from "../services/orchestrator.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const response = await processMessage(req.body);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro");
  }
});

export default router;
