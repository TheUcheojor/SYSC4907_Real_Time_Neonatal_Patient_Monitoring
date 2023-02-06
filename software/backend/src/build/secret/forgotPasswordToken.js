import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import Logger from "./../Logger";
import { DEFAULT_FORGOT_PASSWORD_TOKEN_TIME } from "./../constants/AuthConstants";
import { HttpStatusEnum } from "./../constants/HttpStatusEnum";
var logger = Logger.getInstance();
export function generateForgotPasswordToken(user_id) {
    dotenv.config();
    return jsonwebtoken.sign({ user_id: user_id }, process.env.RESET_PASSWORD_TOKEN_SECRET, {
        expiresIn: DEFAULT_FORGOT_PASSWORD_TOKEN_TIME
    });
}
export function authenticateForgotPasswordToken(req, res, next) {
    var authHeader = req.headers["authorization"];
    var token = authHeader && authHeader.split(" ")[1];
    if (token == null)
        return res.sendStatus(HttpStatusEnum.UNAUTHORIZED);
    dotenv.config();
    jsonwebtoken.verify(token, process.env.RESET_PASSWORD_TOKEN_SECRET, function (err, decodedToken) {
        if (err) {
            if (err instanceof jsonwebtoken.TokenExpiredError) {
                return res.sendStatus(HttpStatusEnum.UNAUTHORIZED);
            }
            logger.error(err);
            return res.sendStatus(HttpStatusEnum.UNAUTHORIZED);
        }
        req.user_id = decodedToken.user_id;
        next();
    });
}
