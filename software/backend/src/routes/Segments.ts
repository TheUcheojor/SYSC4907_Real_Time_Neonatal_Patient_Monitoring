import DB from "./../data/db.js";
import Router from "express";
import { AuthenticatedRequest } from "./../models/requests/AuthRequests.js";
import Logger from "./../Logger.js";
import { authenticateSessionToken } from "./../secret/sessionToken.js";
import { HttpStatusEnum } from "./../constants/HttpStatusEnum.js";
import { RowDataPacket } from "mysql2";

const logger = Logger.getInstance();
const segmentsRouter = Router();

segmentsRouter.get(
  "/segments/:route_id",
  authenticateSessionToken,
  (req: AuthenticatedRequest, res) => {
    let db = new DB();
    db.connect();
    let con = db.con();

    con.query(
      "SELECT * FROM routes WHERE route_id=?",
      [req.params.route_id],
      function (error, routeResults, fields) {
        if (error) {
          return con.rollback(function () {
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

        con.query(
          "SELECT * FROM segments WHERE route_id=?",
          [req.params.route_id],
          function (error, segmentResults, fields) {
            if (error) {
              return con.rollback(function () {
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
  }
);

export default segmentsRouter;
