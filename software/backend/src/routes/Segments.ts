import MySQLRepository from "../data/MySQLRepository.js";
import Router from "express";
import { AuthenticatedRequest } from "./../models/requests/AuthRequests.js";
import Logger from "./../Logger.js";
import { authenticateSessionToken } from "../secret/SessionToken.js";
import { HttpStatusEnum } from "./../constants/HttpStatusEnum.js";
import { RowDataPacket } from "mysql2";

const logger = Logger.getInstance();
const db = MySQLRepository.getInstance();
const segmentsRouter = Router();

segmentsRouter.get(
  "/segments/:route_id",
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
            "SELECT * FROM segments WHERE route_id=?",
            [req.params.route_id],
            function (error, segmentResults, fields) {
              if (error) {
                return conn.rollback(function () {
                  logger.error(error);
                  res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send();
                });
              }
              segmentResults = <Array<RowDataPacket>>segmentResults;

              if (segmentResults.length === 0) {
                res.status(HttpStatusEnum.NOT_FOUND).send();
                return;
              }

              res.send(segmentResults);
            }
          );
        }
      );
    });
  }
);

export default segmentsRouter;
