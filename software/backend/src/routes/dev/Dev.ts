import DB from "data/db";
import Router from "express";
import { generateRandomDatapoints } from "data/mock/mock";
import {
  coordsCarletonCampus,
  coordsCivicToGeneral,
  coordsCivicToHull,
  coordsOttToTo,
} from "data/mock/coords";

const devRouter = Router();

devRouter.get("/mock", (req, res) => {
  res.send({
    coordsCarletonCampus: generateRandomDatapoints(coordsCarletonCampus),
    coordsCivicToGeneral: generateRandomDatapoints(coordsCivicToGeneral),
    coordsCivicToHull: generateRandomDatapoints(coordsCivicToHull),
    coordsOttToTo: generateRandomDatapoints(coordsOttToTo),
  });
});

devRouter.get("/initDb", (req, res) => {
  let db = new DB();
  db.connect();
  db.initDb();
  res.send("success");
});

export default devRouter;
