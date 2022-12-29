import express  from 'express';
import { dpsCarletonCampus, dpsCivicToGeneral, dpsCivicToHull, dpsOttToTo, route1, route2, route3, route4 } from './mock/mockTrip';
import cors from 'cors';
import { DB_NAME, DB_PW } from './constants/dbConstants';
import DB from './data/DB';

const port = 3001;
const app = express()
app.use(cors())

app.get('/dps/:id', (req, res) => {
    let dps;
    console.log(req.params)
    switch(parseInt(req.params.id)) {
        case 1:
            dps = dpsCarletonCampus;
            break;
        case 2:
            dps = dpsCivicToGeneral;
            break;
        case 3:
            dps = dpsCivicToHull;
            break;
        case 4:
            dps = dpsOttToTo;
            break;
        default:
            dps = dpsCarletonCampus;
            break;
    }
    res.send(dps);
})

app.get('/routes', (req, res) => {
    const db = new DB(DB_NAME, DB_PW);
    db.connect();
    
    res.send(
        [
            route1,
            route2,
            route3,
            route4
        ]
    );
})
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})