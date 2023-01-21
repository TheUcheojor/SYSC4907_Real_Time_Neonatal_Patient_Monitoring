import express from "express";
import cors from "cors";
import fs from "fs";
import https from "https";
import loginRouter from "routes/Login";
import routesRouter from "routes/Routes";
import userRouter from "routes/User";
import routeMeasurementDataPointsRouter from "routes/RouteMeasurementDataPoints";
import devRouter from "routes/dev/Dev";

const port = 3001;

const privateKey = fs.readFileSync("./secret/server_DEVONLY.key", "utf8");
const certificate = fs.readFileSync("./secret/server_DEVONLY.crt", "utf8");
const credentials = { key: privateKey, cert: certificate };

const corsOptions = {
  exposedHeaders: ["Authorization"],
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb" }));

app.use(loginRouter);
app.use(routesRouter);
app.use(userRouter);
app.use(routeMeasurementDataPointsRouter);
app.use(devRouter);

/**
 * For development purposes only, we will use a http server
 * as it allows for communication between app and server.
 *
 * Using https with self-signed certificate requires extra configurations
 * that may be time consuming
 */
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

// const httpsServer = https.createServer(credentials, app);

// httpsServer.listen(port, () => {
//   console.log(`Https server listening on port ${port}`);
// });
 6 