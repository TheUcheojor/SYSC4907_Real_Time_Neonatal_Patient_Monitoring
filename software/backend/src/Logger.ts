import { QueryError } from "mysql2";

export default class Logger {
  private static instance: Logger;

  private constructor() {}

  public static getInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }

    return Logger.instance;
  }

  info(msg: string | QueryError) {
    const date = new Date();
    console.log(`[INFO] ${date.toJSON()}: ${msg}`);
  }

  warning(msg: string | QueryError) {
    const date = new Date();
    console.log(`[WARN] ${date.toJSON()}: ${msg}`);
  }

  error(msg: string | QueryError) {
    const date = new Date();
    console.log(`[ERROR] ${date.toJSON()}: ${msg}`);
  }
}
