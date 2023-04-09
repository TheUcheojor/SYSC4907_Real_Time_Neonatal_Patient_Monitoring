import MySQLRepository from "../data/MySQLRepository.js";
import Router, { Response } from "express";
import {
  ForgotPasswordRequest,
  ResetPasswordRequest,
} from "./../models/requests/AuthRequests.js";
import Logger from "./../Logger.js";
import nodemailer from "nodemailer";
import {
  authenticateForgotPasswordToken,
  generateForgotPasswordToken,
} from "../secret/ForgotPasswordToken.js";
import { DEFAULT_FORGOT_PASSWORD_TOKEN_TIME } from "./../constants/AuthConstants.js";
import { HttpStatusEnum } from "./../constants/HttpStatusEnum.js";
import { OkPacket, RowDataPacket } from "mysql2";

const logger = Logger.getInstance();
const db = MySQLRepository.getInstance();
const forgotPasswordRouter = Router();

forgotPasswordRouter.post(
  "/forgotPassword",
  (req: ForgotPasswordRequest, res: Response) => {
    req = req.body;
    if (req.email === undefined) {
      res.status(HttpStatusEnum.BAD_REQUEST).send();
      return;
    }

    // return 200 regardless of db query, do not divulge query result
    res.send();

    db.query((conn) => {
      conn.query(
        "SELECT * FROM users WHERE email=?",
        [req.email],
        function (error, results, fields) {
          if (error) {
            return conn.rollback(function () {
              logger.error(error);
              res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send();
            });
          }
          results = <Array<RowDataPacket>>results;

          if (results.length === 0) return;
          const user = results[0];

          var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "tca.emailer@gmail.com",
              // for gmail need to use an app key instead of pw
              pass: "kpbkrkmmpytquvpn",
            },
            tls: {
              rejectUnauthorized: false,
            },
          });

          var mailOptions = {
            from: "tca.emailer@gmail.com",
            to: user.email,
            subject: "TCA - Reset Your Password",
            text: `To reset your password for the TCA service please click the following link: ${
              process.env.SERVER_URL
            }/resetPassword/${generateForgotPasswordToken(
              user.user_id
            )} . This link is only valid for ${DEFAULT_FORGOT_PASSWORD_TOKEN_TIME}.`,
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              logger.error("Email send error, " + error);
            } else {
              logger.info("Email sent: " + info.response);
            }
          });
        }
      );
    });
  }
);

forgotPasswordRouter.put(
  "/forgotPassword",
  authenticateForgotPasswordToken,
  (req: ResetPasswordRequest, res: Response) => {
    const body = req.body;
    if (body.newPassword === undefined) {
      res.status(HttpStatusEnum.BAD_REQUEST).send();
      return;
    }
    db.query((conn) => {
      conn.query(
        "UPDATE users SET password=? WHERE user_id=?",
        [body.newPassword, req.user_id],
        function (error, results, fields) {
          if (error) {
            return conn.rollback(function () {
              logger.error(error);
              res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send();
            });
          }

          results = <OkPacket>results;

          if (results.affectedRows === 1) {
            logger.info("reset password request success");
            res.status(HttpStatusEnum.OK).send();
          } else if (results.affectedRows === 0) {
            res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send();
          } else {
            // multiple rows affected, rollback changes
            res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send();
            return conn.rollback(function () {
              logger.error(error);
            });
          }
        }
      );
    });
  }
);

export default forgotPasswordRouter;
