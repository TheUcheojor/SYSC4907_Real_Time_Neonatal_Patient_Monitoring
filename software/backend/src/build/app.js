import express from "express";
import cors from "cors";
import loginRouter from "./routes/Login";
import routesRouter from "./routes/Routes";
import userRouter from "./routes/User";
import routeMeasurementDataPointsRouter from "./routes/RouteMeasurementDataPoints";
import devRouter from "./routes/dev/Dev";
import forgotPasswordRouter from "./routes/ForgotPassword";
import segmentsRouter from "./routes/Segments";
import dotenv from "dotenv";
var PAYLOAD_LIMIT = "10mb";
dotenv.config();
var corsOptions = {
    exposedHeaders: ["Authorization"]
};
var app = express();
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
var PORT = process.env.SERVER_PORT;
app.listen(PORT, function () {
    console.log("server listening on port ".concat(PORT));
});
// const httpsServer = https.createServer(credentials, app);
// httpsServer.listen(port, () => {
//   console.log(`Https server listening on port ${port}`);
// });
6;
