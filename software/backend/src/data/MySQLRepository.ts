import Logger from "./../Logger.js";
import mysql from "mysql2";
import Connection from "mysql2/typings/mysql/lib/Connection.js";
import Pool from "mysql2/typings/mysql/lib/Pool.js";
import { DB_NAME } from "../constants/DbConstants.js";

const logger = Logger.getInstance();

/**
 * A class for interfacing with the MYSQL Repository.
 */
export default class MySQLRepository {
  private static instance: MySQLRepository;
  private pool: Pool;

  private constructor() {}

  public static getInstance() {
    if (!MySQLRepository.instance) {
      MySQLRepository.instance = new MySQLRepository();
    }

    return MySQLRepository.instance;
  }

  /**
   * Using MySQL pool keeps connections open for X amount of time after a request terminates. Allowing the app to reuse connections when requests are clustered. 
   */
  private getPool(): Pool {
    if (!this.pool) {
      this.pool = mysql.createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: DB_NAME,
        waitForConnections: true,
        connectionLimit: 10,
        maxIdle: 10,
        idleTimeout: 60000,
        queueLimit: 0,
      });
    }

    return this.pool;
  }

  // A wrapper function for queries that manages the overhead of acquiring and releasing a connection
  // Also ensures that query only uses one connection. 
  query(queryFunction: (conn: Connection) => void) {
    this.getPool().getConnection((err, conn) => {
      if (err) {
        logger.error(err.toString());
        return;
      }
      queryFunction(conn);
      conn.release();
    });
  }

  // Initializes the DB tables and inserts a default account
  initDb() {
    this.query((conn: Connection) => {
      conn.query(
        "CREATE DATABASE IF NOT EXISTS tca_db",
        function (err, result) {
          if (err) throw err;
          console.log("Result: " + result);
        }
      );
      conn.query("DROP TABLE IF EXISTS routes");
      conn.query("DROP TABLE IF EXISTS segments");
      conn.query("DROP TABLE IF EXISTS route_measurement_data_points");
      conn.query("DROP TABLE IF EXISTS users");
      conn.query(
        "CREATE TABLE IF NOT EXISTS routes (route_id INT AUTO_INCREMENT PRIMARY KEY, owner_id INT, patient_id VARCHAR(255), organization_id INT, total_vibration INT, avg_temperature TINYINT, avg_noise TINYINT, avg_vibration TINYINT, avg_velocity SMALLINT, avg_pressure MEDIUMINT, start_time_s BIGINT, end_time_s BIGINT)"
      );
      conn.query(
        "CREATE TABLE IF NOT EXISTS segments (segment_id INT AUTO_INCREMENT PRIMARY KEY, route_id INT, start_time_s BIGINT, end_time_s BIGINT, segment_type enum('road', 'aerial', 'boat'))"
      );
      conn.query(
        "CREATE TABLE IF NOT EXISTS route_measurement_data_points (route_data_point_id INT AUTO_INCREMENT PRIMARY KEY, route_id INT, segment_id INT, time_s BIGINT, velocity_kmps MEDIUMINT, noise_db TINYINT, vibration FLOAT(7,4), temperature_celsius TINYINT, pressure_pascals MEDIUMINT, annotation TEXT, latitude FLOAT(9,5), longitude FLOAT(9,5))"
      );
      conn.query(
        "CREATE TABLE IF NOT EXISTS users (user_id INT AUTO_INCREMENT PRIMARY KEY, full_name VARCHAR(255), email VARCHAR(320), password VARCHAR(255), organization_id INT, organization_permission ENUM('admin', 'owner', 'member'))"
      );
      conn.query(
        "INSERT INTO users (full_name, email, password) VALUES (?,?,?)",
        ["root", "root@root.ca", "rootroot"]
      );
      console.log("db initialized");
    });
  }
}
