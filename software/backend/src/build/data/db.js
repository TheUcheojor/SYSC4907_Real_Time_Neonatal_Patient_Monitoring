import mysql from "mysql2";
import { DB_NAME } from "./../constants/DbConstants.js";
var DB = /** @class */ (function () {
    function DB() {
    }
    DB.prototype.connect = function () {
        if (!this._con) {
            this._con = mysql.createConnection({
                host: process.env.MYSQL_HOST,
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: DB_NAME
            });
            console.log("connected");
        }
    };
    DB.prototype.con = function () {
        return this._con;
    };
    DB.prototype.initDb = function () {
        if (!this._con) {
            console.log("No connection available");
            return;
        }
        this._con.query("CREATE DATABASE IF NOT EXISTS tca_db", function (err, result) {
            if (err)
                throw err;
            console.log("Result: " + result);
        });
        this._con.query("DROP TABLE IF EXISTS routes");
        this._con.query("DROP TABLE IF EXISTS segments");
        this._con.query("DROP TABLE IF EXISTS route_measurement_data_points");
        this._con.query("DROP TABLE IF EXISTS users");
        this._con.query("CREATE TABLE routes (route_id INT AUTO_INCREMENT PRIMARY KEY, owner_id INT, patient_id VARCHAR(255), organization_id INT, total_vibration INT, avg_temperature TINYINT, avg_noise TINYINT, avg_vibration TINYINT, avg_velocity SMALLINT, avg_pressure MEDIUMINT, start_time_s BIGINT, end_time_s BIGINT)");
        this._con.query("CREATE TABLE segments (segment_id INT AUTO_INCREMENT PRIMARY KEY, route_id INT, start_time_s BIGINT, end_time_s BIGINT, segment_type enum('road', 'aerial', 'boat'))");
        this._con.query("CREATE TABLE route_measurement_data_points (route_data_point_id INT AUTO_INCREMENT PRIMARY KEY, route_id INT, segment_id INT, time_s BIGINT, velocity_kmps MEDIUMINT, noise_db TINYINT, vibration FLOAT(7,4), temperature_celsius TINYINT, pressure_pascals MEDIUMINT, annotation TEXT, latitude FLOAT(9,5), longitude FLOAT(9,5))");
        this._con.query("CREATE TABLE users (user_id INT AUTO_INCREMENT PRIMARY KEY, full_name VARCHAR(255), email VARCHAR(320), password VARCHAR(255), organization_id INT, organization_permission ENUM('admin', 'owner', 'member'))");
        this._con.query("INSERT INTO users (full_name, email, password) VALUES (?,?,?)", ["root", "root@root.ca", "rootroot"]);
        console.log("db initialized");
    };
    return DB;
}());
export default DB;
