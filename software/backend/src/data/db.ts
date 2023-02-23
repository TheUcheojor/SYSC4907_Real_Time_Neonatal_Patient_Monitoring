import mysql, { Connection } from "mysql2";
import { DB_NAME } from "./../constants/DbConstants.js";

class DB {
  dbName: string;
  dbPassword: string;
  _con: Connection;

  connect() {
    if (!this._con) {
      this._con = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: DB_NAME,
      });
      console.log("connected");
    }
  }

  con() {
    return this._con;
  }
}

export default DB;
