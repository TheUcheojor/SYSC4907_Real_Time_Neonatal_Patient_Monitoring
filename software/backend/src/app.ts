import express from "express";
import cors from "cors";
import fs from "fs";
import https from "https";
import loginRouter from "routes/Login";
import routesRouter from "routes/Routes";
import userRouter from "routes/User";
import routeMeasurementDataPointsRouter from "routes/RouteMeasurementDataPoints";
import devRouter from "routes/dev/Dev";
import forgotPasswordRouter from "routes/ForgotPassword";

const PORT = 3001;
const PAYLOAD_LIMIT = "10mb";
const FILE_CHARACTER_ENCODING = "utf8";

const privateKey = fs.readFileSync(
  "secret/server_DEVONLY.key",
  FILE_CHARACTER_ENCODING
);
const certificate = fs.readFileSync(
  "secret/server_DEVONLY.crt",
  FILE_CHARACTER_ENCODING
);
const credentials = { key: privateKey, cert: certificate };

const corsOptions = {
  exposedHeaders: ["Authorization"],
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json({ limit: PAYLOAD_LIMIT }));
app.use(express.urlencoded({ limit: PAYLOAD_LIMIT }));

app.use(loginRouter);
app.use(routesRouter);
app.use(userRouter);
app.use(routeMeasurementDataPointsRouter);
app.use(devRouter);
app.use(forgotPasswordRouter);

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(PORT, () => {
  console.log(`Https server listening on port ${PORT}`);
});
