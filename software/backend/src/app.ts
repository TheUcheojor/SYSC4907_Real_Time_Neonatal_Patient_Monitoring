import express  from 'express';

import { dpsCarletonCampus, dpsCivicToGeneral, dpsCivicToHull, dpsOttToTo, route1, route2, route3, route4 } from './mock/mockTrip';
import cors from 'cors';
import mysql, {sql} from 'mysql';

// const port = 3001;
// const app = express()
// app.use(cors())

// app.get('/dps/:id', (req, res) => {
//     let dps;
//     console.log(req.params)
//     switch(parseInt(req.params.id)) {
//         case 1:
//             dps = dpsCarletonCampus;
//             break;
//         case 2:
//             dps = dpsCivicToGeneral;
//             break;
//         case 3:
//             dps = dpsCivicToHull;
//             break;
//         case 4:
//             dps = dpsOttToTo;
//             break;
//         default:
//             dps = dpsCarletonCampus;
//             break;
//     }
//     res.send(dps);
// })

// app.get('/routes', (req, res) => {
//     res.send(
//         [
//             route1,
//             route2,
//             route3,
//             route4
//         ]
//     );
// })
  
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "tca_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
//   con.query("CREATE DATABASE tca_db", function (err, result) {
//     if (err) throw err;
//     console.log("Result: " + result);
//   });
  con.query("DROP TABLE IF EXISTS Routes", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
  con.query("DROP TABLE IF EXISTS RouteMeasurementDataPoints", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
  con.query("CREATE TABLE Routes (route_id INT AUTO_INCREMENT PRIMARY KEY, owner_id VARCHAR(16), organization_id VARCHAR(16), total_vibration_exposure MEDIUMINT, avg_temperature TINYINT, avg_noise TINYINT, avg_vibration TINYINT, avg_velocity SMALLINT, avg_pressure MEDIUMINT)", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
  con.query("CREATE TABLE RouteMeasurementDataPoints (route_data_point_id INT AUTO_INCREMENT PRIMARY KEY, segment_id VARCHAR(16), time TIMESTAMP, velocity_kmps MEDIUMINT, noise_db TINYINT, vibration FLOAT(5,4), temperature_celsius TINYINT, pressure_pascals MEDIUMINT, annotation TEXT, latitude FLOAT(9,5), longitude FLOAT(9,5))", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});