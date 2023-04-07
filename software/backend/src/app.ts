import express from "express";
import cors from "cors";
import loginRouter from "./routes/Login.js";
import routesRouter from "./routes/Routes.js";
import userRouter from "./routes/User.js";
import routeMeasurementDataPointsRouter from "./routes/RouteMeasurementDataPoints.js";
import devRouter from "./routes/dev/Dev.js";
import forgotPasswordRouter from "./routes/ForgotPassword.js";
import segmentsRouter from "./routes/Segments.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import Logger from "./Logger.js";

const PAYLOAD_LIMIT = "10mb";
dotenv.config();

const corsOptions = {
  exposedHeaders: ["Authorization"],
};

const app = express();
const logger = Logger.getInstance();

function logEndpoint(req, res, next) {
  logger.info(`Endpoint hit: ${req.url}, Request Type: ${req.method}`);
  next();
}

app.use(logEndpoint);

app.use(cors(corsOptions));
app.use(express.json({ limit: PAYLOAD_LIMIT }));
app.use(express.urlencoded({ limit: PAYLOAD_LIMIT, extended: true }));

// auth routes
app.use(loginRouter);
app.use(forgotPasswordRouter);
app.use(userRouter);
// data routes
app.use(routesRouter);
app.use(segmentsRouter);
app.use(routeMeasurementDataPointsRouter);
// dev only routes
app.use(devRouter);

/**
 * For development purposes only, we will use a http server
 * as it allows for communication between app and server.
 *
 * In prod should use https
 */
const PORT = process.env.SERVER_PORT || 7001;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// serve the frontend build through default endpoint
app.use(express.static(path.join(__dirname, "frontendBuild")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "frontendBuild", "index.html"));
});
