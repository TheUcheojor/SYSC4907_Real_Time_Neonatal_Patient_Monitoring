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
import segmentsRouter from "routes/Segments";

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
 * Using https with self-signed certificate requires extra configurations
 * that may be time consuming
 */
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);

});

// const httpsServer = https.createServer(credentials, app);

// httpsServer.listen(port, () => {
//   console.log(`Https server listening on port ${port}`);
// });
 6 