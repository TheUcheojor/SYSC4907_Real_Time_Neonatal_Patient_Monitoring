import MySQLRepository from "../data/MySQLRepository.js";
import Router, { Response } from "express";
import { LoginRequest } from "./../models/requests/AuthRequests.js";
import Logger from "./../Logger.js";
import { generateSessionToken } from "../secret/SessionToken.js";
import { HttpStatusEnum } from "./../constants/HttpStatusEnum.js";
import { RowDataPacket } from "mysql2";

const logger = Logger.getInstance();
const db = MySQLRepository.getInstance();
const loginRouter = Router();

loginRouter.post("/login", (req: LoginRequest, res: Response) => {
  req = req.body;
  if (req.email === undefined || req.password === undefined) {
    res.status(HttpStatusEnum.BAD_REQUEST).send();
    return;
  }

  db.query((conn) => {
    conn.query(
      "SELECT * FROM users WHERE email=? AND password=?",
      [req.email, req.password],
      function (error, results, fields) {
        if (error) {
          return conn.rollback(function () {
            logger.error(error);
            res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send();
          });
        }
        results = <Array<RowDataPacket>>results;

        if (results.length === 1) {
          let user = results[0];
          res
            .header({
              Authorization: `Bearer ${generateSessionToken(user.user_id)}`,
            })
            .send({
              full_name: user.full_name,
            });
        } else if (results.length === 0) {
          conn.query(
            "SELECT * FROM users WHERE email=?",
            [req.email, req.password],
            function (error, tmp, fields) {
              if (error) {
                return conn.rollback(function () {
                  logger.error(error);
                });
              }
            }
          );
          res.status(404).send();
        } else {
          logger.warning(
            "db query found multiple users with same email and password"
          );
          res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send({
            msg: "Account conflict",
          });
        }
      }
    );
  });
});

export default loginRouter;
