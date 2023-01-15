import DB from "data/db";
import Router, { Response } from "express";
import Logger from "Logger";
import {
  authenticateSessionToken,
} from "secret/sessionToken";
import { PostRouteRequest } from "models/requests/PostRouteRequest";
import { AuthenticatedRequest } from "models/requests/AuthRequests";
import {
  getDatapointInsertionValues,
  getRouteStats,
} from "RouteInsertionLogic";

const logger = Logger.getInstance();
const routesRouter = Router();

routesRouter.post(
  "/routes",
  authenticateSessionToken,
  (req: PostRouteRequest, res: Response) => {
    let body = req.body;
    let segments = body.route_segments;

    if (segments === undefined || segments.length === 0) {
      res.status(400).send();
      return;
    }

    const {
      avg_noise,
      avg_pressure,
      avg_temperature,
      avg_velocity,
      avg_vibration,
      total_vibration_exposure,
      max_time_s,
      min_time_s,
    } = getRouteStats(segments);

    let db = new DB();
    db.connect();
    let con = db.con;

    //insert route into table
    con.beginTransaction(function (err) {
      if (err) {
        logger.error(err);
        return;
      }
      con.query(
        "INSERT INTO routes (owner_id, organization_id, total_vibration_exposure, avg_temperature, avg_noise, avg_vibration, avg_velocity, avg_pressure, start_time_s, end_time_s) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          req.user_id,
          -1, // TODO: change to org id
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
              logger.error(error);
            });
          }

          const dbValues = getDatapointInsertionValues(
            segments,
            routeResult.insertId
          );

          con.query(
            "INSERT INTO route_measurement_data_points (route_id, segment_id, time_s, velocity_kmps, noise_db, vibration, temperature_celsius, pressure_pascals, annotation, latitude, longitude) VALUES ?",
            [dbValues],
            function (error, results, fields) {
              if (error) {
                return con.rollback(function () {
                  logger.error(error);
                });
              }
            }
          );

          con.commit(function (err) {
            if (err) {
              return con.rollback(function () {
                logger.error(error);
              });
            }
            res.send("Success");
          });
        }
      );
    });
  }
);

const COUNT_KEY = "COUNT(*)";

routesRouter.get(
  "/routes",
  authenticateSessionToken,
  (req: AuthenticatedRequest, res: Response) => {
    let page = parseInt(req.query.page as undefined as string) || 1;
    let limit = parseInt(req.query.limit as undefined as string) || 3;

    let db = new DB();
    db.connect();
    let con = db.con;

    con.query(
      "SELECT * FROM routes WHERE owner_id=? LIMIT ?,?",
      [req.user_id, (page - 1) * limit, limit],
      function (error, results, fields) {
        if (error) {
          return con.rollback(function () {
            logger.error(error);
          });
        }
        con.query(
          "SELECT COUNT(*) FROM routes WHERE owner_id=?",
          [req.user_id],
          function (error, countResult, fields) {
            if (error) {
              return con.rollback(function () {
                logger.error(error);
              });
            }
            res.send({
              routes: results,
              totalRoutes: countResult[0][COUNT_KEY],
            });
          }
        );
      }
    );
  }
);

export default routesRouter;
