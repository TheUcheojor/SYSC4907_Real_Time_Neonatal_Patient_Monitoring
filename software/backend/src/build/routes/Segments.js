import DB from "./../data/db.js";
import Router from "express";
import Logger from "./../Logger.js";
import { authenticateSessionToken } from "./../secret/sessionToken.js";
import { HttpStatusEnum } from "./../constants/HttpStatusEnum.js";
var logger = Logger.getInstance();
var segmentsRouter = Router();
segmentsRouter.get("/segments/:route_id", authenticateSessionToken, function (req, res) {
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
        con.query("SELECT * FROM segments WHERE route_id=?", [req.params.route_id], function (error, segmentResults, fields) {
            if (error) {
                return con.rollback(function () {
                    logger.error(error);
                });
            }
            segmentResults = segmentResults;
            if (segmentResults.length === 0) {
                res.status(HttpStatusEnum.NOT_FOUND).send();
                return;
            }
            res.send(segmentResults);
        });
    });
});
export default segmentsRouter;
