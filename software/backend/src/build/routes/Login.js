import DB from "./../data/db.js";
import Router from "express";
import Logger from "./../Logger.js";
import { generateSessionToken } from "./../secret/sessionToken.js";
import { HttpStatusEnum } from "./../constants/HttpStatusEnum.js";
var logger = Logger.getInstance();
var loginRouter = Router();
loginRouter.post("/login", function (req, res) {
    req = req.body;
    if (req.email === undefined || req.password === undefined) {
        res.status(HttpStatusEnum.BAD_REQUEST).send();
        return;
    }
    var db = new DB();
    db.connect();
    var con = db.con();
    con.query("SELECT * FROM users WHERE email=? AND password=?", [req.email, req.password], function (error, results, fields) {
        if (error) {
            return con.rollback(function () {
                logger.error(error);
            });
        }
        if (results.length === 1) {
            var user = results[0];
            res
                .header({
                Authorization: "Bearer ".concat(generateSessionToken(user.user_id))
            })
                .send({
                full_name: user.full_name
            });
        }
        else if (results.length === 0) {
            con.query("SELECT * FROM users WHERE email=?", [req.email, req.password], function (error, tmp, fields) {
                if (error) {
                    return con.rollback(function () {
                        logger.error(error);
                    });
                }
            });
            res.status(404).send();
        }
        else {
            logger.warning("db query found multiple users with same email and password");
            res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send({
                msg: "Account conflict"
            });
        }
    });
});
export default loginRouter;
