import mysql, { Connection } from "mysql";
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_USER,
} from "../constants/dbConstants";

class DB {
  dbName: string;
  dbPassword: string;
  _con: Connection;

  connect() {
    if (!this.con) {
      this._con = mysql.createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
      });
      console.log("connected");
    }
  }

  get con() {
    return this._con;
  }

  initDb() {
    if (!this._con) {
      console.log("No connection available");
      return;
    }

    // this.con.query("CREATE DATABASE tca_db", function (err, result) {
    //   if (err) throw err;
    //   console.log("Result: " + result);
    // });
    this._con.query("DROP TABLE IF EXISTS routes")
    this._con.query("DROP TABLE IF EXISTS route_measurement_data_points")
    this._con.query("DROP TABLE IF EXISTS users");
    this._con.query("CREATE TABLE routes (route_id INT AUTO_INCREMENT PRIMARY KEY, owner_id INT, organization_id INT, total_vibration_exposure INT, avg_temperature TINYINT, avg_noise TINYINT, avg_vibration TINYINT, avg_velocity SMALLINT, avg_pressure MEDIUMINT, start_time_s BIGINT, end_time_s BIGINT)")
    this._con.query("CREATE TABLE route_measurement_data_points (route_data_point_id INT AUTO_INCREMENT PRIMARY KEY, route_id INT, segment_id INT, time_s BIGINT, velocity_kmps MEDIUMINT, noise_db TINYINT, vibration FLOAT(5,4), temperature_celsius TINYINT, pressure_pascals MEDIUMINT, annotation TEXT, latitude FLOAT(9,5), longitude FLOAT(9,5))")
    this._con.query(
      "CREATE TABLE users (user_id INT AUTO_INCREMENT PRIMARY KEY, full_name VARCHAR(255), email VARCHAR(320), password VARCHAR(255), organization_id INT, organization_permission ENUM('admin', 'owner', 'member'))"
    );
    this._con.query(
      "INSERT INTO users (full_name, email, password) VALUES (?,?,?)",
      ["root", "root", "root"]
    );
    console.log("db initialized");
  }
}

export default DB;
