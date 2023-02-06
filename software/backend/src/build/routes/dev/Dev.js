import DB from "./../../data/db.js";
import Router from "express";
import { generateRoadAerialTrip, } from "./../../data/mock/mock.js";
var devRouter = Router();
devRouter.get("/mock", function (req, res) {
    res.send(generateRoadAerialTrip(100));
    // res.send({
    //   coordsCarletonCampus: generateRandomDatapoints(coordsCarletonCampus),
    //   coordsCivicToGeneral: generateRandomDatapoints(coordsCivicToGeneral),
    //   coordsCivicToHull: generateRandomDatapoints(coordsCivicToHull),
    //   coordsOttToTo: generateRandomDatapoints(coordsOttToTo),
    // });
});
devRouter.get("/initDb", function (req, res) {
    var db = new DB();
    db.connect();
    db.initDb();
    res.send("success");
});
export default devRouter;
