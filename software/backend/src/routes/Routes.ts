import DB from "./../data/db";
import Router, { Response } from "express";
import Logger from "./../Logger";
import { authenticateSessionToken } from "./../secret/sessionToken";
import { PostRouteRequest } from "./../models/requests/PostRouteRequest";
import { AuthenticatedRequest } from "./../models/requests/AuthRequests";
import {
  getDatapointInsertionValues,
  getRouteStats,
  getSegmentInsertionValues,
} from "./../RouteInsertionLogic";
import { HttpStatusEnum } from "./../constants/HttpStatusEnum";
import RouteSegment from "./../models/RouteSegment";

const logger = Logger.getInstance();
const routesRouter = Router();

routesRouter.post(
  "/routes",
  authenticateSessionToken,
  (req: PostRouteRequest, res: Response) => {
    let body = req.body;
    let segments = body.route_segments;

    if (
      segments === undefined ||
      segments.length === 0 ||
      body.patient_id === undefined
    ) {
      res.status(HttpStatusEnum.BAD_REQUEST).send();
      return;
    }

    const {
      avg_noise,
      avg_pressure,
      avg_temperature,
      avg_velocity,
      avg_vibration,
      total_vibration,
      max_time_s,
      min_time_s,
    } = getRouteStats(segments);

    let db = new DB();
    db.connect();
    let con = db.con;

    //insert route into table
    con().beginTransaction(function (err) {
      if (err) {
        logger.error("BEGIN ROUTE TRANSACTION ERROR: " + err);
        return;
      }
      con().query(
        "INSERT INTO routes (owner_id, organization_id, patient_id, total_vibration, avg_temperature, avg_noise, avg_vibration, avg_velocity, avg_pressure, start_time_s, end_time_s) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
        [
          req.user_id,
          -1, // TODO: change to org id
          body.patient_id,
          total_vibration,
          avg_temperature,
          avg_noise,
          avg_vibration,
          avg_velocity,
          avg_pressure,
          body.start_time_s || min_time_s,
          body.end_time_s || max_time_s,
        ],
        function (error, routeResult, fields) {
          if (error) {
            return con().rollback(function () {
              logger.error("ROUTE INSERT ERROR: " + error);
            });
          }

          segments.forEach((seg: RouteSegment) => {
            const dbSegmentValues = getSegmentInsertionValues(
              [seg],
              routeResult.insertId
            );

            con().query(
              "INSERT INTO segments (route_id, segment_type, start_time_s, end_time_s) VALUES ?",
              [dbSegmentValues],
              function (error, segmentResult, fields) {
                if (error) {
                  return con().rollback(function () {
                    logger.error("SEG INSERT ERROR: " + error);
                  });
                }

                const dbDatapointValues = getDatapointInsertionValues(
                  seg.route_measurement_datapoints,
                  routeResult.insertId,
                  segmentResult.insertId
                );

                con().query(
                  "INSERT INTO route_measurement_data_points (route_id, segment_id, time_s, velocity_kmps, noise_db, vibration, temperature_celsius, pressure_pascals, annotation, latitude, longitude) VALUES ?",
                  [dbDatapointValues],
                  function (error, results, fields) {
                    if (error) {
                      return con().rollback(function () {
                        logger.error("DP INSERT ERROR: " + error);
                      });
                    }
                  }
                );
              }
            );
          });

          // after inserting route + segments + datapoints, commit all changes at once
          con().commit(function (err) {
            if (err) {
              return con().rollback(function () {
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

    con().query(
      "SELECT * FROM routes WHERE owner_id=? LIMIT ?,?",
      [req.user_id, (page - 1) * limit, limit],
      function (error, results, fields) {
        if (error) {
          return con().rollback(function () {
            logger.error(error);
          });
        }
        con().query(
          "SELECT COUNT(*) FROM routes WHERE owner_id=?",
          [req.user_id],
          function (error, countResult, fields) {
            if (error) {
              return con().rollback(function () {
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
