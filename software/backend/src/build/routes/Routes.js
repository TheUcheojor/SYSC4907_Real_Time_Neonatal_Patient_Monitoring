import DB from "./../data/db.js";
import Router from "express";
import Logger from "./../Logger.js";
import { authenticateSessionToken } from "./../secret/sessionToken.js";
import { getDatapointInsertionValues, getRouteStats, getSegmentInsertionValues, } from "./../RouteInsertionLogic.js";
import { HttpStatusEnum } from "./../constants/HttpStatusEnum.js";
var logger = Logger.getInstance();
var routesRouter = Router();
routesRouter.post("/routes", authenticateSessionToken, function (req, res) {
    var body = req.body;
    var segments = body.route_segments;
    if (segments === undefined ||
        segments.length === 0 ||
        body.patient_id === undefined) {
        res.status(HttpStatusEnum.BAD_REQUEST).send();
        return;
    }
    var _a = getRouteStats(segments), avg_noise = _a.avg_noise, avg_pressure = _a.avg_pressure, avg_temperature = _a.avg_temperature, avg_velocity = _a.avg_velocity, avg_vibration = _a.avg_vibration, total_vibration = _a.total_vibration, max_time_s = _a.max_time_s, min_time_s = _a.min_time_s;
    var db = new DB();
    db.connect();
    var con = db.con;
    //insert route into table
    con().beginTransaction(function (err) {
        if (err) {
            logger.error("BEGIN ROUTE TRANSACTION ERROR: " + err);
            return;
        }
        con().query("INSERT INTO routes (owner_id, organization_id, patient_id, total_vibration, avg_temperature, avg_noise, avg_vibration, avg_velocity, avg_pressure, start_time_s, end_time_s) VALUES (?,?,?,?,?,?,?,?,?,?,?)", [
            req.user_id,
            -1,
            body.patient_id,
            total_vibration,
            avg_temperature,
            avg_noise,
            avg_vibration,
            avg_velocity,
            avg_pressure,
            body.start_time_s || min_time_s,
            body.end_time_s || max_time_s,
        ], function (error, routeResult, fields) {
            if (error) {
                return con().rollback(function () {
                    logger.error("ROUTE INSERT ERROR: " + error);
                });
            }
            segments.forEach(function (seg) {
                var dbSegmentValues = getSegmentInsertionValues([seg], routeResult.insertId);
                con().query("INSERT INTO segments (route_id, segment_type, start_time_s, end_time_s) VALUES ?", [dbSegmentValues], function (error, segmentResult, fields) {
                    if (error) {
                        return con().rollback(function () {
                            logger.error("SEG INSERT ERROR: " + error);
                        });
                    }
                    var dbDatapointValues = getDatapointInsertionValues(seg.route_measurement_datapoints, routeResult.insertId, segmentResult.insertId);
                    con().query("INSERT INTO route_measurement_data_points (route_id, segment_id, time_s, velocity_kmps, noise_db, vibration, temperature_celsius, pressure_pascals, annotation, latitude, longitude) VALUES ?", [dbDatapointValues], function (error, results, fields) {
                        if (error) {
                            return con().rollback(function () {
                                logger.error("DP INSERT ERROR: " + error);
                            });
                        }
                    });
                });
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
        });
    });
});
var COUNT_KEY = "COUNT(*)";
routesRouter.get("/routes", authenticateSessionToken, function (req, res) {
    var page = parseInt(req.query.page) || 1;
    var limit = parseInt(req.query.limit) || 3;
    var db = new DB();
    db.connect();
    var con = db.con;
    con().query("SELECT * FROM routes WHERE owner_id=? LIMIT ?,?", [req.user_id, (page - 1) * limit, limit], function (error, results, fields) {
        if (error) {
            return con().rollback(function () {
                logger.error(error);
            });
        }
        con().query("SELECT COUNT(*) FROM routes WHERE owner_id=?", [req.user_id], function (error, countResult, fields) {
            if (error) {
                return con().rollback(function () {
                    logger.error(error);
                });
            }
            res.send({
                routes: results,
                totalRoutes: countResult[0][COUNT_KEY]
            });
        });
    });
});
export default routesRouter;
