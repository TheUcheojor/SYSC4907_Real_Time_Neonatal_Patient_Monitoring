import DB from "data/db";
import Router from "express";
import { AuthenticatedRequest } from "models/requests/AuthRequests";
import Logger from "Logger";
import { authenticateSessionToken } from "secret/sessionToken";

const logger = Logger.getInstance();
const routeMeasurementDataPointsRouter = Router();

routeMeasurementDataPointsRouter.get(
  "/routeMeasurementDataPoints/:route_id",
  authenticateSessionToken,
  (req: AuthenticatedRequest, res) => {
    let db = new DB();
    db.connect();
    let con = db.con;

    con.query(
      "SELECT * FROM routes WHERE route_id=?",
      [req.params.route_id],
      function (error, routeResults, fields) {
        if (error) {
          return con.rollback(function () {
            logger.error(error);
          });
        }
        if (routeResults.length === 0) {
          res.status(404).send();
          return;
        }

        if (routeResults[0].owner_id !== req.user_id) {
          res.status(401).send();
          return;
        }

        con.query(
          "SELECT * FROM route_measurement_data_points WHERE route_id=?",
          [req.params.route_id],
          function (error, results, fields) {
            if (error) {
              return con.rollback(function () {
                logger.error(error);
              });
            }

            if (results.length === 0) {
              res.status(404).send();
              return;
            }

            res.send(results);
          }
        );
      }
    );
  }
);

export default routeMeasurementDataPointsRouter;
