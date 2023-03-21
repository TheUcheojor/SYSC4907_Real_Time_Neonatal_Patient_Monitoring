import MySQLRepository from "../data/MySQLRepository.js";
import Router from "express";
import { AuthenticatedRequest } from "./../models/requests/AuthRequests.js";
import Logger from "./../Logger.js";
import { authenticateSessionToken } from "./../secret/sessionToken.js";
import { HttpStatusEnum } from "./../constants/HttpStatusEnum.js";
import { RowDataPacket } from "mysql2";

const logger = Logger.getInstance();
const db = MySQLRepository.getInstance();
const routeMeasurementDataPointsRouter = Router();

routeMeasurementDataPointsRouter.get(
  "/routeMeasurementDataPoints/:route_id",
  authenticateSessionToken,
  (req: AuthenticatedRequest, res) => {
    db.query((conn) => {
      conn.query(
        "SELECT * FROM routes WHERE route_id=?",
        [req.params.route_id],
        function (error, routeResults, fields) {
          if (error) {
            return conn.rollback(function () {
              logger.error(error);
              res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send();
            });
          }
          routeResults = <Array<RowDataPacket>>routeResults;

          if (routeResults.length === 0) {
            res.status(HttpStatusEnum.NOT_FOUND).send();
            return;
          }

          if (routeResults[0].owner_id !== req.user_id) {
            res.status(HttpStatusEnum.UNAUTHORIZED).send();
            return;
          }

          conn.query(
            "SELECT * FROM route_measurement_data_points WHERE route_id=? ORDER BY segment_id ASC",
            [req.params.route_id],
            function (error, results, fields) {
              if (error) {
                return conn.rollback(function () {
                  logger.error(error);
                  res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send();
                });
              }
              results = <Array<RowDataPacket>>results;

              if (results.length === 0) {
                res.status(HttpStatusEnum.NOT_FOUND).send();
                return;
              }

              res.send(results);
            }
          );
        }
      );
    });
  }
);

export default routeMeasurementDataPointsRouter;
