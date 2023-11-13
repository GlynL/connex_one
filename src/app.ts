import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes/index";
import { auth } from "./middleware/auth";
import prometheusMiddleware from "express-prometheus-middleware";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(logger("dev"));
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(auth);
app.use("/", indexRouter);
app.use(
  prometheusMiddleware({
    metricsPath: "/metrics",
    metricsApp: app,
    collectDefaultMetrics: true,
    requestDurationBuckets: [0.1, 0.5, 1, 1.5],
    requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
    responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
  }),
);

export default app;
