import DB from "./../data/db.js";
import Router from "express";
import Logger from "./../Logger.js";
import { authenticateSessionToken } from "./../secret/sessionToken.js";
import { HttpStatusEnum } from "./../constants/HttpStatusEnum.js";
var logger = Logger.getInstance();
var routeMeasurementDataPointsRouter = Router();
routeMeasurementDataPointsRouter.get("/routeMeasurementDataPoints/:route_id", authenticateSessionToken, function (req, res) {
    var db = new DB();
    db.connect();
    var con = db.con();
    con.query("SELECT * FROM routes WHERE route_id=?", [req.params.route_id], function (error, routeResults, fields) {
        if (error) {
            return con.rollback(function () {
                logger.error(error);
            });
        }
        routeResults = routeResults;
        if (routeResults.length === 0) {
            res.status(HttpStatusEnum.NOT_FOUND).send();
            return;
        }
        if (routeResults[0].owner_id !== req.user_id) {
            res.status(HttpStatusEnum.UNAUTHORIZED).send();
            return;
        }
        con.query("SELECT * FROM route_measurement_data_points WHERE route_id=? ORDER BY segment_id ASC", [req.params.route_id], function (error, results, fields) {
            if (error) {
                return con.rollback(function () {
                    logger.error(error);
                });
            }
            results = results;
            if (results.length === 0) {
                res.status(HttpStatusEnum.NOT_FOUND).send();
                return;
            }
            res.send(results);
        });
    });
});
export default routeMeasurementDataPointsRouter;
