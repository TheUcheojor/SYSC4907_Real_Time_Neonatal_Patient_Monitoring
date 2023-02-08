import DB from "./../data/db.js";
import Router from "express";
import Logger from "./../Logger.js";
import nodemailer from "nodemailer";
import { authenticateForgotPasswordToken, generateForgotPasswordToken, } from "./../secret/forgotPasswordToken.js";
import { DEFAULT_FORGOT_PASSWORD_TOKEN_TIME } from "./../constants/AuthConstants.js";
import { HttpStatusEnum } from "./../constants/HttpStatusEnum.js";
var logger = Logger.getInstance();
var forgotPasswordRouter = Router();
forgotPasswordRouter.post("/forgotPassword", function (req, res) {
    req = req.body;
    if (req.email === undefined) {
        res.status(HttpStatusEnum.BAD_REQUEST).send();
        return;
    }
    // return 200 regardless of db query, do not divulge query result
    res.send();
    var db = new DB();
    db.connect();
    var con = db.con();
    con.query("SELECT * FROM users WHERE email=?", [req.email], function (error, results, fields) {
        if (error) {
            return con.rollback(function () {
                logger.error(error);
            });
        }
        results = results;
        if (results.length === 0)
            return;
        var user = results[0];
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "tca.emailer@gmail.com",
                pass: "zfhzgvqyxavohzdj"
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        var mailOptions = {
            from: "tca.emailer@gmail.com",
            to: user.email,
            subject: "TCA - Reset Your Password",
            text: "To reset your password for the TCA service please click the following link: http://localhost:3000/resetPassword/".concat(generateForgotPasswordToken(user.user_id), ". This link is only valid for ").concat(DEFAULT_FORGOT_PASSWORD_TOKEN_TIME, ".")
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                logger.error("Email send error, " + error);
            }
            else {
                logger.info("Email sent: " + info.response);
            }
        });
    });
});
forgotPasswordRouter.put("/forgotPassword", authenticateForgotPasswordToken, function (req, res) {
    var body = req.body;
    if (body.newPassword === undefined) {
        res.status(HttpStatusEnum.BAD_REQUEST).send();
        return;
    }
    var db = new DB();
    db.connect();
    var con = db.con();
    con.query("UPDATE users SET password=? WHERE user_id=?", [body.newPassword, req.user_id], function (error, results, fields) {
        if (error) {
            return con.rollback(function () {
                logger.error(error);
            });
        }
        results = results;
        if (results.affectedRows === 1) {
            logger.info("reset password request success");
            res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send();
        }
        else if (results.affectedRows === 0) {
            res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send();
        }
        else {
            // multiple rows affected, rollback changes
            res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send();
            return con.rollback(function () {
                logger.error(error);
            });
        }
    });
});
export default forgotPasswordRouter;
