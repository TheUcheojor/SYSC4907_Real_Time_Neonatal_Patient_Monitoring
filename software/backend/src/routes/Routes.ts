import DB from "./../data/db.js";
import Router, { Response } from "express";
import Logger from "./../Logger.js";
import { authenticateSessionToken } from "./../secret/sessionToken.js";
import { PostRouteRequest } from "./../models/requests/PostRouteRequest.js";
import { AuthenticatedRequest } from "./../models/requests/AuthRequests.js";
import {
  getDatapointInsertionValues,
  getRouteStats,
  getSegmentInsertionValues,
} from "./../RouteInsertionLogic.js";
import { HttpStatusEnum } from "./../constants/HttpStatusEnum.js";
import RouteSegment from "./../models/RouteSegment.js";
import { OkPacket } from "mysql2";
import {
  QUERY_PAGE_DEFAULT,
  QUERY_LIMIT_DEFAULT,
} from "./../constants/QueryConstants.js";

const logger = Logger.getInstance();
const routesRouter = Router();

type IOverload = {
  (param: number): number[];
  (param: object): object[];
};

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
    let con = db.con();

    //insert route into table
    con.beginTransaction(function (err) {
      if (err) {
        logger.error("BEGIN ROUTE TRANSACTION ERROR: " + err);
        res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send();
        return;
      }
      con.query(
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
            return con.rollback(function () {
              logger.error("ROUTE INSERT ERROR: " + error);
              res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send();
            });
          }

          segments.forEach((seg: RouteSegment) => {
            routeResult = <OkPacket>routeResult;
            const dbSegmentValues = getSegmentInsertionValues(
              [seg],
              routeResult.insertId
            );

            con.query(
              "INSERT INTO segments (route_id, segment_type, start_time_s, end_time_s) VALUES ?",
              [dbSegmentValues],
              function (error, segmentResult, fields) {
                routeResult = <OkPacket>routeResult;
                if (error) {
                  return con.rollback(function () {
                    logger.error("SEG INSERT ERROR: " + error);
                    res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send();
                  });
                }
                segmentResult = <OkPacket>segmentResult;

                const dbDatapointValues = getDatapointInsertionValues(
                  seg.route_measurement_datapoints,
                  routeResult.insertId,
                  segmentResult.insertId
                );

                con.query(
                  "INSERT INTO route_measurement_data_points (route_id, segment_id, time_s, velocity_kmps, noise_db, vibration, temperature_celsius, pressure_pascals, annotation, latitude, longitude) VALUES ?",
                  [dbDatapointValues],
                  function (error, results, fields) {
                    if (error) {
                      return con.rollback(function () {
                        logger.error("DP INSERT ERROR: " + error);
                        res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send();
                      });
                    }
                  }
                );
              }
            );
          });

          // after inserting route + segments + datapoints, commit all changes at once
          con.commit(function (err) {
            if (err) {
              return con.rollback(function () {
                logger.error(error);
                res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send();
              });
            }
            res.status(HttpStatusEnum.OK).send("Success");
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
    let page =
      parseInt(req.query.page as undefined as string) || QUERY_PAGE_DEFAULT;
    let limit =
      parseInt(req.query.limit as undefined as string) || QUERY_LIMIT_DEFAULT;

    // Fetch-all query
    let db_query = `SELECT * FROM routes WHERE owner_id=${req.user_id} LIMIT ${
      (page - 1) * limit
    },${limit}`;

    if (req.query.search_query) {
      let seach_query: string = req.query.search_query as string;

      // Fetch with custom constraints
      db_query = `SELECT * FROM routes WHERE owner_id=${
        req.user_id
      } AND ${seach_query} LIMIT ${(page - 1) * limit},${limit}`;

      logger.info("Fetch query with custom constraint: " + db_query);
    }
    let db = new DB();
    db.connect();
    let con = db.con();

    con.query(db_query, function (error, results, fields) {
      if (error) {
        return con.rollback(function () {
          logger.error(error);
          res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send();
        });
      }
      con.query(
        "SELECT COUNT(*) FROM routes WHERE owner_id=?",
        [req.user_id],
        function (error, countResult, fields) {
          if (error) {
            return con.rollback(function () {
              logger.error(error);
              res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send();
            });
          }
          res.status(HttpStatusEnum.OK).send({
            routes: results,
            totalRoutes: countResult[0][COUNT_KEY],
          });
        }
      );
    });
  }
);

export default routesRouter;
