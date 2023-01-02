import mysql, {Connection} from 'mysql'
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from '../constants/dbConstants';

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
        })
        console.log("connected")
      }
    }

    get con() {
      return this._con;
    }

    initDb() {
      if(!this._con){
        console.log("No connection available");
        return;
      }

      // this.con.query("CREATE DATABASE tca_db", function (err, result) {
      //   if (err) throw err;
      //   console.log("Result: " + result);
      // });
      this._con.query("DROP TABLE IF EXISTS routes")
      this._con.query("DROP TABLE IF EXISTS route_measurement_data_points")
      this._con.query("CREATE TABLE routes (route_id INT AUTO_INCREMENT PRIMARY KEY, owner_id INT, organization_id INT, total_vibration_exposure INT, avg_temperature TINYINT, avg_noise TINYINT, avg_vibration TINYINT, avg_velocity SMALLINT, avg_pressure MEDIUMINT)")
      this._con.query("CREATE TABLE route_measurement_data_points (route_data_point_id INT AUTO_INCREMENT PRIMARY KEY, route_id INT, segment_id INT, time BIGINT, velocity_kmps MEDIUMINT, noise_db TINYINT, vibration FLOAT(5,4), temperature_celsius TINYINT, pressure_pascals MEDIUMINT, annotation TEXT, latitude FLOAT(9,5), longitude FLOAT(9,5))")
      console.log("db initialized")
    }
  }

  export default DB;