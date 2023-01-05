import express, { Response } from "express";

import cors from "cors";
import DB from "./data/DB";
import { generateRandomDatapoints } from "./mock/mock";
import {
  coordsCarletonCampus,
  coordsCivicToGeneral,
  coordsCivicToHull,
  coordsOttToTo,
} from "./mock/coords";
import { PostRouteRequest } from "./models/requests/PostRouteRequest";
import { LoginRequest, SignUpRequest } from "./models/requests/AuthRequests";
import fs from "fs";
import https from "https";
import { Logger } from "./Logger";

const port = 3001;

const privateKey = fs.readFileSync("./secret/server_DEVONLY.key", "utf8");
const certificate = fs.readFileSync("./secret/server_DEVONLY.crt", "utf8");
const credentials = { key: privateKey, cert: certificate };

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb" }));

const httpsServer = https.createServer(credentials, app);

const logger = Logger.getInstance();

httpsServer.listen(port, () => {
  console.log(`Https server listening on port ${port}`);
});

app.get("/mock", (req, res) => {
  res.send({
    coordsCarletonCampus: generateRandomDatapoints(coordsCarletonCampus),
    coordsCivicToGeneral: generateRandomDatapoints(coordsCivicToGeneral),
    coordsCivicToHull: generateRandomDatapoints(coordsCivicToHull),
    coordsOttToTo: generateRandomDatapoints(coordsOttToTo),
  });
});

app.get("/initDb", (req, res) => {
  let db = new DB();
  db.connect();
  db.initDb();
  res.send("success");
});

app.post("/routes", (req: PostRouteRequest, res: Response) => {
  req = req.body;
  let segs = req.route_segments;

  if (req.owner_id === undefined || segs === undefined || segs.length === 0) {
    res.status(400).send("improper request body");
    return;
  }

  let db = new DB();
  db.connect();
  let con = db.con;

  let total_vibration_exposure = 0;
  let avg_temperature = 0;
  let avg_noise = 0;
  let avg_vibration = 0;
  let avg_velocity = 0;
  let avg_pressure = 0;
  let num_dps = 0;
  let min_time_s, max_time_s;

  for (let i = 0; i < segs.length; i++) {
    let segDps = segs[i].route_measurement_datapoints;
    num_dps += segDps.length;

    for (let j = 0; j < segDps.length; j++) {
      if (min_time_s === undefined || min_time_s > segDps[j].time_s)
        min_time_s = segDps[j].time_s;
      if (max_time_s === undefined || max_time_s < segDps[j].time_s)
        max_time_s = segDps[j].time_s;
      total_vibration_exposure += segDps[j].vibration;
      avg_temperature += segDps[j].temperature_celsius;
      avg_noise += segDps[j].noise_db;
      avg_vibration += segDps[j].vibration;
      avg_velocity += segDps[j].velocity_kmps;
      avg_pressure += segDps[j].pressure_pascals;
    }
  }

  avg_temperature /= num_dps;
  avg_noise /= num_dps;
  avg_vibration /= num_dps;
  avg_velocity /= num_dps;
  avg_pressure /= num_dps;

  //insert route into table
  con.beginTransaction(function (err) {
    if (err) {
      throw err;
    }
    con.query(
      "INSERT INTO routes (owner_id, organization_id, total_vibration_exposure, avg_temperature, avg_noise, avg_vibration, avg_velocity, avg_pressure, start_time_s, end_time_s) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        req.owner_id,
        0,
        total_vibration_exposure,
        avg_temperature,
        avg_noise,
        avg_vibration,
        avg_velocity,
        avg_pressure,
        min_time_s,
        max_time_s,
      ],
      function (error, routeResult, fields) {
        if (error) {
          return con.rollback(function () {
            console.log("Route insertion failed!");
            throw error;
          });
        }

        let values: any[][] = [];
        for (let i = 0; i < segs.length; i++) {
          let segDps = segs[i].route_measurement_datapoints;

          for (let j = 0; j < segDps.length; j++) {
            values.push([
              routeResult.insertId,
              1,
              segDps[j].time_s,
              segDps[j].velocity_kmps,
              segDps[j].noise_db,
              segDps[j].vibration,
              segDps[j].temperature_celsius,
              segDps[j].pressure_pascals,
              segDps[j].annotation,
              segDps[j].latitude,
              segDps[j].longitude,
            ]);
          }
        }

        con.query(
          "INSERT INTO route_measurement_data_points (route_id, segment_id, time_s, velocity_kmps, noise_db, vibration, temperature_celsius, pressure_pascals, annotation, latitude, longitude) VALUES ?",
          [values],
          function (error, results, fields) {
            if (error) {
              return con.rollback(function () {
                console.log("DP insertion failed!");
                throw error;
              });
            }
          }
        );

        con.commit(function (err) {
          if (err) {
            return con.rollback(function () {
              throw err;
            });
          }
          res.send("success");
        });
      }
    );
  });
});

app.get("/routes", (req, res) => {
  let db = new DB();
  db.connect();
  let con = db.con;

  con.query("SELECT * FROM routes", function (error, results, fields) {
    if (error) {
      return con.rollback(function () {
        throw error;
      });
    }
    res.send(results);
  });
});

app.get("/routeMeasurementDataPoints/:route_id", (req, res) => {
  let db = new DB();
  db.connect();
  let con = db.con;

  con.query(
    "SELECT * FROM route_measurement_data_points WHERE route_id=?",
    [req.params.route_id],
    function (error, results, fields) {
      if (error) {
        return con.rollback(function () {
          throw error;
        });
      }
      res.send(results);
    }
  );
});

app.post("/login", (req: LoginRequest, res: Response) => {
  req = req.body;
  if (req.email === undefined || req.password === undefined) {
    res.status(400).send({ is_success: false, msg: "improper request body" });
    return;
  }

  let db = new DB();
  db.connect();
  let con = db.con;

  con.query(
    "SELECT * FROM users WHERE email=? AND password=?",
    [req.email, req.password],
    function (error, results, fields) {
      if (error) {
        return con.rollback(function () {
          throw error;
        });
      }
      if (results.length === 1) {
        res.send({
          is_success: true,
          msg: "Login success",
          full_name: results[0].full_name
        });
      } else if (results.length === 0) {
        res.send({
          is_success: false,
          msg: "Unable to authenticate, try again...",
        });
      } else {
        logger.warning(
          "db query found multiple users with same email and password"
        );
        res.status(500).send({
          is_success: false,
          msg: "Unable to authenticate, account conflict on server",
        });
      }
    }
  );
});

app.post("/signUp", (req: SignUpRequest, res: Response) => {
  req = req.body;
  if (
    req.full_name === undefined ||
    req.email === undefined ||
    req.password === undefined
  ) {
    res.status(400).send({ is_success: false, msg: "improper request body" });
    return;
  }

  let db = new DB();
  db.connect();
  let con = db.con;

  con.query(
    "SELECT * FROM users WHERE email=?",
    [req.email],
    function (error, results, fields) {
      if (error) {
        return con.rollback(function () {
          throw error;
        });
      }
      if (results.length > 0) {
        res.send({
          is_success: false,
          msg: `An account using the email ${req.email} already exists`,
        });
        return;
      }

      con.query(
        "INSERT INTO users (full_name, email, password, organization_id, organization_permission) VALUES (?, ?, ?, null, null)",
        [req.full_name, req.email, req.password],
        function (error, results, fields) {
          if (error) {
            return con.rollback(function () {
              throw error;
            });
          }
          logger.info("signup request success");
          res.send({
            is_success: true,
            msg: `User ${req.full_name} succesfully registered`,
          });
        }
      );
    }
  );
});
