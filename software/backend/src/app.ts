import express  from 'express';
import { dpsCarletonCampus, dpsCivicToGeneral, dpsCivicToHull, dpsOttToTo } from './mock/mockTrip';

const app = express()
const port = 3001;

app.get('/:id', (req, res) => {
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
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})