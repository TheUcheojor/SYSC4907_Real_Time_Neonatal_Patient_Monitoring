import DB from "./../data/db.js";
import Router, { Response } from "express";
import {
  ChangePasswordRequest,
  SignUpRequest,
} from "./../models/requests/AuthRequests.js";
import Logger from "./../Logger.js";
import { authenticateSessionToken } from "./../secret/sessionToken.js";
import { HttpStatusEnum } from "./../constants/HttpStatusEnum.js";

const logger = Logger.getInstance();
const userRouter = Router();

userRouter.post("/user", (req: SignUpRequest, res: Response) => {
  req = req.body;
  if (
    req.full_name === undefined ||
    req.email === undefined ||
    req.password === undefined
  ) {
    res.status(HttpStatusEnum.BAD_REQUEST).send();
    return;
  }

  let db = new DB();
  db.connect();
  let con = db.con();

  con.query(
    "SELECT * FROM users WHERE email=?",
    [req.email],
    function (error, results, fields) {
      if (error) {
        return con.rollback(function () {
          logger.error(error);
        });
      }
      if (results.length > 0) {
        res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send();
        return;
      }

      con.query(
        "INSERT INTO users (full_name, email, password, organization_id, organization_permission) VALUES (?, ?, ?, null, null)",
        [req.full_name, req.email, req.password],
        function (error, results, fields) {
          if (error) {
            return con.rollback(function () {
              logger.error(error);
            });
          }
          logger.info("signup request success");
          res.send({
            msg: `User ${req.full_name} succesfully registered`,
          });
        }
      );
    }
  );
});

userRouter.put(
  "/user",
  authenticateSessionToken,
  (req: ChangePasswordRequest, res: Response) => {
    let body = req.body;
    if (body.oldPassword === undefined || body.newPassword === undefined) {
      res.status(HttpStatusEnum.BAD_REQUEST).send();
      return;
    }

    let db = new DB();
    db.connect();
    let con = db.con();

    con.query(
      "SELECT * FROM users WHERE user_id = ? AND password=?",
      [req.user_id, body.oldPassword],
      function (error, results, fields) {
        if (error) {
          return con.rollback(function () {
            logger.error(error);
          });
        }
        if (results.length === 0) {
          res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send();
          return;
        }

        con.query(
          "UPDATE users SET password=? WHERE user_id=?",
          [body.newPassword, req.user_id],
          function (error, results, fields) {
            if (error) {
              return con.rollback(function () {
                logger.error(error);
              });
            }
            logger.info("change password request success");
            res.status(HttpStatusEnum.INTERNAL_SERVER_ERROR).send();
          }
        );
      }
    );
  }
);

export default userRouter;
