import DB from "./../data/db";
import Router from "express";
import Logger from "./../Logger";
import { authenticateSessionToken } from "./../secret/sessionToken";
import { HttpStatusEnum } from "./../constants/HttpStatusEnum";
var logger = Logger.getInstance();
var userRouter = Router();
userRouter.post("/user", function (req, res) {
    req = req.body;
    if (req.full_name === undefined ||
        req.email === undefined ||
        req.password === undefined) {
        res.status(HttpStatusEnum.BAD_REQUEST).send();
        return;
    }
    var db = new DB();
    db.connect();
    var con = db.con;
    con().query("SELECT * FROM users WHERE email=?", [req.email], function (error, results, fields) {
        if (error) {
            return con().rollback(function () {
                logger.error(error);
            });
        }
        if (results.length > 0) {
            res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send();
            return;
        }
        con().query("INSERT INTO users (full_name, email, password, organization_id, organization_permission) VALUES (?, ?, ?, null, null)", [req.full_name, req.email, req.password], function (error, results, fields) {
            if (error) {
                return con().rollback(function () {
                    logger.error(error);
                });
            }
            logger.info("signup request success");
            res.send({
                msg: "User ".concat(req.full_name, " succesfully registered")
            });
        });
    });
});
userRouter.put("/user", authenticateSessionToken, function (req, res) {
    var body = req.body;
    if (body.oldPassword === undefined || body.newPassword === undefined) {
        res.status(HttpStatusEnum.BAD_REQUEST).send();
        return;
    }
    var db = new DB();
    db.connect();
    var con = db.con;
    con().query("SELECT * FROM users WHERE user_id = ? AND password=?", [req.user_id, body.oldPassword], function (error, results, fields) {
        if (error) {
            return con().rollback(function () {
                logger.error(error);
            });
        }
        if (results.length === 0) {
            res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send();
            return;
        }
        con().query("UPDATE users SET password=? WHERE user_id=?", [body.newPassword, req.user_id], function (error, results, fields) {
            if (error) {
                return con().rollback(function () {
                    logger.error(error);
                });
            }
            logger.info("change password request success");
            res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send();
        });
    });
});
export default userRouter;
