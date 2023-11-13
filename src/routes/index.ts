import express from "express";
import { getEpochTime } from "../services/time";
import { validateTime } from "../models/time";
const router = express.Router();

router.get("/time", function (req, res) {
  const epochTime = getEpochTime();
  const data = { epoch: epochTime };
  const valid = validateTime(data);
  if (!valid) {
    res.status(500).json({ error: validateTime.errors });
  }
  res.json(data);
});

export default router;
