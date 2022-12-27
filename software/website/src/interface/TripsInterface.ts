import RouteMeasurementDataPoint from "mock/RouteMeasurementDataPoint";
import { dpsCarletonCampus, dpsCivicToGeneral, dpsCivicToHull, dpsOttToTo } from "mock/tripCache";

export function queryTripDatapoints(routeId: number):RouteMeasurementDataPoint[]  {
    switch(routeId) {
        case 1:
            return dpsCarletonCampus;
        case 2: 
            return dpsCivicToGeneral;
        case 3: 
            return dpsCivicToHull;
        case 4:
            return dpsOttToTo;
    }
}