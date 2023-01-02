import express, { Response }  from 'express';

import cors from 'cors';
import mysql, {sql} from 'mysql';
import DB from './data/DB';
import { generateRandomDatapoints } from './mock/mock';
import { coordsCarletonCampus } from './mock/coords';
import bodyParser from 'body-parser';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from './constants/dbConstants';
import { PostRouteRequest } from './models/requests/PostRouteRequest';


const port = 3001;
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/mock', (req, res) => {
  res.send(generateRandomDatapoints(coordsCarletonCampus));
})

app.get('/initDb', (req, res) => {
  let db = new DB();
  db.connect();
  db.initDb();
  res.send("success");
})

app.post('/routes', (req: PostRouteRequest, res: Response) => {
  req = req.body;
  let segs = req.routeSegments;

  if(req.ownerId === undefined || segs === undefined || segs.length === 0) {
    res.status(400).send("improper requests")
    return;
  }
  
  let db = new DB();
  db.connect();
  let con = db.con;

  let total_vibration_exposure = 0;
  let avg_temperature = 0;
  let avg_noise = 0;
  let avg_vibration = 0;
  let avg_velocity = 0;
  let avg_pressure = 0;
  let num_dps = 0;
  let min_time_s, max_time_s;

  for(let i = 0; i < segs.length; i++) {
    let segDps = segs[i].routeMeasurementDataPoints;
    num_dps += segDps.length

    for(let j = 0; j < segDps.length; j++) {
      if(min_time_s === undefined || min_time_s > segDps[j].time_s) min_time_s = segDps[j].time_s;
      if(max_time_s === undefined || max_time_s < segDps[j].time_s) max_time_s = segDps[j].time_s;
      total_vibration_exposure += segDps[j].vibration;
      avg_temperature += segDps[j].temperature_celsius;
      avg_noise += segDps[j].noise_db;
      avg_vibration += segDps[j].vibration;
      avg_velocity += segDps[j].velocity_kmps;
      avg_pressure += segDps[j].pressure_pascals;
    }
  }

  avg_temperature /= num_dps;
  avg_noise /= num_dps;
  avg_vibration /= num_dps;
  avg_velocity /= num_dps;
  avg_pressure /= num_dps;

  //insert route into table
  con.beginTransaction(function(err) {
    if (err) { throw err; }
    con.query("INSERT INTO routes (owner_id, organization_id, total_vibration_exposure, avg_temperature, avg_noise, avg_vibration, avg_velocity, avg_pressure, start_time_s, end_time_s) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [req.ownerId, 0, total_vibration_exposure, avg_temperature, avg_noise, avg_vibration, avg_velocity, avg_pressure, min_time_s, max_time_s],function (error, routeResult, fields) {
      if (error) {
        return con.rollback(function() {
          console.log("Route insertion failed!")
          throw error;
        });
      }

      let values: any[][] = [];
      for(let i = 0; i < segs.length; i++) {
        let segDps = segs[i].routeMeasurementDataPoints;
    
        for(let j = 0; j < segDps.length; j++) {
          values.push([
            routeResult.insertId,
            1,
            segDps[j].time_s,
            segDps[j].velocity_kmps,
            segDps[j].noise_db,
            segDps[j].vibration,
            segDps[j].temperature_celsius,
            segDps[j].pressure_pascals,
            segDps[j].annotation,
            segDps[j].latitude,
            segDps[j].longitude,
          ])
        }
      }

      con.query('INSERT INTO route_measurement_data_points (route_id, segment_id, time_s, velocity_kmps, noise_db, vibration, temperature_celsius, pressure_pascals, annotation, latitude, longitude) VALUES ?', [values], function (error, results, fields) {
        if (error) {
          return con.rollback(function() {
            console.log("DP insertion failed!")
            throw error;
          });
        }
      });
      
      
        con.commit(function(err) {
          if (err) {
            return con.rollback(function() {
              throw err;
            });
          }
          res.send("success")
        });
      });
})
})

app.get('/routes', (req, res) => {
  let db = new DB(); 
  db.connect();
  let con = db.con;

  con.query("SELECT * FROM routes",  function (error, results, fields) {
    if (error) {
      return con.rollback(function() {
        throw error;
      });
    }
    res.send(results);
  })
})

app.get('/routeMeasurementDataPoints/:route_id', (req, res) => {
    let db = new DB();
    db.connect();
    let con = db.con;

    con.query("SELECT * FROM route_measurement_data_points WHERE route_id=?", [req.params.route_id], function (error, results, fields) {
      if (error) {
        return con.rollback(function() {
          throw error;
        });
      }
      res.send(results);
    })
})
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})