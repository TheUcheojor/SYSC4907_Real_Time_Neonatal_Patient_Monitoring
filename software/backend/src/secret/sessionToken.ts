import jsonwebtoken, { TokenExpiredError } from "jsonwebtoken";
import dotenv from "dotenv";
import Logger from "Logger";
import { DEFAULT_SESSION_TOKEN_TIME } from "constants/AuthConstants";

const logger = Logger.getInstance();

export function generateSessionToken(user_id: number): string {
  dotenv.config();
  return jsonwebtoken.sign({ user_id: user_id }, process.env.TOKEN_SECRET, {
    expiresIn: DEFAULT_SESSION_TOKEN_TIME,
  });
}

export function authenticateSessionToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(HttpStatusEnum.UNAUTHORIZED);
  dotenv.config();

  jsonwebtoken.verify(
    token as string,
    process.env.TOKEN_SECRET as string,
    (err: any, decodedToken: any) => {
      if (err) {
        if (err instanceof TokenExpiredError) {
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
