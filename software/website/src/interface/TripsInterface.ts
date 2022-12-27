import { coordsCarletonCampus, coordsCivicToGeneral } from "mock/coords";
import { generateRandomDatapoints } from "mock/mockTrip";
import RouteMeasurementDataPoint from "mock/RouteMeasurementDataPoint";

export function queryTripDatapoints(routeId: number):RouteMeasurementDataPoint[]  {
    switch(routeId) {
        case 1:
            return generateRandomDatapoints(coordsCarletonCampus);
        case 2: 
            return generateRandomDatapoints(coordsCivicToGeneral);
    }
}