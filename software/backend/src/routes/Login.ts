import DB from "./../data/db.js";
import Router, { Response } from "express";
import { LoginRequest } from "./../models/requests/AuthRequests.js";
import Logger from "./../Logger.js";
import { generateSessionToken } from "./../secret/sessionToken.js";
import { HttpStatusEnum } from "./../constants/HttpStatusEnum.js";

const logger = Logger.getInstance();
const loginRouter = Router();

loginRouter.post("/login", (req: LoginRequest, res: Response) => {
  req = req.body;
  if (req.email === undefined || req.password === undefined) {
    res.status(HttpStatusEnum.BAD_REQUEST).send();
    return;
  }

  let db = new DB();
  db.connect();
  let con = db.con;

  con().query(
    "SELECT * FROM users WHERE email=? AND password=?",
    [req.email, req.password],
    function (error, results, fields) {
      if (error) {
        return con().rollback(function () {
          logger.error(error);
        });
      }

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
        con().query(
          "SELECT * FROM users WHERE email=?",
          [req.email, req.password],
          function (error, tmp, fields) {
            if (error) {
              return con().rollback(function () {
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

export default loginRouter;
