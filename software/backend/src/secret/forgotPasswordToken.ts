import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import Logger from "../Logger.js";
import { DEFAULT_FORGOT_PASSWORD_TOKEN_TIME } from "../constants/AuthConstants.js";
import { HttpStatusEnum } from "../constants/HttpStatusEnum.js";

const logger = Logger.getInstance();

export function generateForgotPasswordToken(user_id: number): string {
  dotenv.config();
  return jsonwebtoken.sign(
    { user_id: user_id },
    process.env.RESET_PASSWORD_TOKEN_SECRET,
    {
      expiresIn: DEFAULT_FORGOT_PASSWORD_TOKEN_TIME,
    }
  );
}

export function authenticateForgotPasswordToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(HttpStatusEnum.UNAUTHORIZED);
  dotenv.config();

  jsonwebtoken.verify(
    token as string,
    process.env.RESET_PASSWORD_TOKEN_SECRET as string,
    (err: any, decodedToken: any) => {
      if (err) {
        if (err instanceof jsonwebtoken.TokenExpiredError) {
          return res.sendStatus(HttpStatusEnum.UNAUTHORIZED);
        }

        logger.error(err);
        return res.sendStatus(HttpStatusEnum.UNAUTHORIZED);
      }

      req.user_id = decodedToken.user_id;

      next();
    }
  );
}
