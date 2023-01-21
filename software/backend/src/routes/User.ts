import DB from "../data/db";
import Router, { Response } from "express";
import {
  ChangePasswordRequest,
  SignUpRequest,
} from "models/requests/AuthRequests";
import Logger from "../Logger";
import {
  authenticateSessionToken,
  generateSessionToken,
} from "../secret/sessionToken";

const logger = Logger.getInstance();
const userRouter = Router();

userRouter.post("/user", (req: SignUpRequest, res: Response) => {
  req = req.body;
  if (
    req.full_name === undefined ||
    req.email === undefined ||
    req.password === undefined
  ) {
    res.status(400).send();
    return;
  }

  let db = new DB();
  db.connect();
  let con = db.con;

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
        res.status(409).send();
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
    console.log("HMM");
    let body = req.body;
    if (body.oldPassword === undefined || body.newPassword === undefined) {
      res.status(400).send();
      return;
    }

    let db = new DB();
    db.connect();
    let con = db.con;

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
          res.status(409).send();
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
            res.status(200).send();
          }
        );
      }
    );
  }
);

export default userRouter;
