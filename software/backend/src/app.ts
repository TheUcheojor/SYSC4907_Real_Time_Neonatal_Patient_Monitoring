import express  from 'express';
import { dpsCarletonCampus, dpsCivicToGeneral, dpsCivicToHull, dpsOttToTo, route1, route2, route3, route4 } from './mock/mockTrip';
import cors from 'cors';

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