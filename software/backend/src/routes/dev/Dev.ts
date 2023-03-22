import MySQLRepository from "./../../data/MySQLRepository.js";
import Router from "express";
import { generateRoadAerialTrip } from "./../../data/mock/mock.js";
const devRouter = Router();

const db = MySQLRepository.getInstance();

devRouter.get("/mock", (req, res) => {
  res.send(generateRoadAerialTrip(100));
  // res.send({
  //   coordsCarletonCampus: generateRandomDatapoints(coordsCarletonCampus),
  //   coordsCivicToGeneral: generateRandomDatapoints(coordsCivicToGeneral),
  //   coordsCivicToHull: generateRandomDatapoints(coordsCivicToHull),
  //   coordsOttToTo: generateRandomDatapoints(coordsOttToTo),
  // });
});

devRouter.get("/initDb", (req, res) => {
  db.initDb();
  res.send("success");
});

export default devRouter;
