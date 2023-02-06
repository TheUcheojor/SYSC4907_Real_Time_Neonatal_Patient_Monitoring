import { expect } from "chai";
import { getDatapointInsertionValues, getRouteStats, getSegmentInsertionValues, } from "../RouteInsertionLogic";
var routeSegments = [
    {
        segment_type: "aerial",
        start_time_s: 10,
        end_time_s: 20,
        route_measurement_datapoints: [
            {
                time_s: 1673642678,
                velocity_kmps: 68,
                noise_db: 33,
                vibration: 0,
                temperature_celsius: 28,
                pressure_pascals: 107065,
                annotation: "",
                latitude: 45.38553,
                longitude: -75.69637
            },
            {
                time_s: 1673642429,
                velocity_kmps: 90,
                noise_db: 61,
                vibration: 1,
                temperature_celsius: 25,
                pressure_pascals: 104256,
                annotation: "",
                latitude: 45.38546,
                longitude: -75.69637
            },
        ]
    },
    {
        segment_type: "road",
        start_time_s: 10,
        end_time_s: 20,
        route_measurement_datapoints: [
            {
                time_s: 1673642200,
                velocity_kmps: 110,
                noise_db: 90,
                vibration: 2,
                temperature_celsius: 21,
                pressure_pascals: 109564,
                annotation: "",
                latitude: 45.38533,
                longitude: -75.69637
            },
        ]
    },
];
describe("getRouteStats", function () {
    it("should return stats for segments", function () {
        var _a = getRouteStats(routeSegments), avg_temperature = _a.avg_temperature, avg_noise = _a.avg_noise, avg_vibration = _a.avg_vibration, avg_velocity = _a.avg_velocity, avg_pressure = _a.avg_pressure, total_vibration = _a.total_vibration, max_time_s = _a.max_time_s, min_time_s = _a.min_time_s;
        expect(avg_temperature).to.equal((routeSegments[0].route_measurement_datapoints[0].temperature_celsius +
            routeSegments[0].route_measurement_datapoints[1].temperature_celsius +
            routeSegments[1].route_measurement_datapoints[0].temperature_celsius) /
            3);
        expect(avg_noise).to.equal((routeSegments[0].route_measurement_datapoints[0].noise_db +
            routeSegments[0].route_measurement_datapoints[1].noise_db +
            routeSegments[1].route_measurement_datapoints[0].noise_db) /
            3);
        expect(avg_pressure).to.equal((routeSegments[0].route_measurement_datapoints[0].pressure_pascals +
            routeSegments[0].route_measurement_datapoints[1].pressure_pascals +
            routeSegments[1].route_measurement_datapoints[0].pressure_pascals) /
            3);
        expect(avg_velocity).to.equal((routeSegments[0].route_measurement_datapoints[0].velocity_kmps +
            routeSegments[0].route_measurement_datapoints[1].velocity_kmps +
            routeSegments[1].route_measurement_datapoints[0].velocity_kmps) /
            3);
        expect(avg_vibration).to.equal((routeSegments[0].route_measurement_datapoints[0].vibration +
            routeSegments[0].route_measurement_datapoints[1].vibration +
            routeSegments[1].route_measurement_datapoints[0].vibration) /
            3);
        expect(total_vibration).to.equal(routeSegments[0].route_measurement_datapoints[0].vibration +
            routeSegments[0].route_measurement_datapoints[1].vibration +
            routeSegments[1].route_measurement_datapoints[0].vibration);
        expect(max_time_s).to.equal(routeSegments[0].route_measurement_datapoints[0].time_s);
        expect(min_time_s).to.equal(routeSegments[1].route_measurement_datapoints[0].time_s);
    });
});
describe("getDatapointInsertionValues", function () {
    it("should return mysql insertion compatible datapoint values", function () {
        var ROUTE_ID = 2;
        var SEGMENT_ID = 2;
        var dbValues = getDatapointInsertionValues(routeSegments[0].route_measurement_datapoints, ROUTE_ID, SEGMENT_ID);
        expect(dbValues).to.eql([
            [
                ROUTE_ID,
                SEGMENT_ID,
                routeSegments[0].route_measurement_datapoints[0].time_s,
                routeSegments[0].route_measurement_datapoints[0].velocity_kmps,
                routeSegments[0].route_measurement_datapoints[0].noise_db,
                routeSegments[0].route_measurement_datapoints[0].vibration,
                routeSegments[0].route_measurement_datapoints[0].temperature_celsius,
                routeSegments[0].route_measurement_datapoints[0].pressure_pascals,
                routeSegments[0].route_measurement_datapoints[0].annotation,
                routeSegments[0].route_measurement_datapoints[0].latitude,
                routeSegments[0].route_measurement_datapoints[0].longitude,
            ],
            [
                ROUTE_ID,
                SEGMENT_ID,
                routeSegments[0].route_measurement_datapoints[1].time_s,
                routeSegments[0].route_measurement_datapoints[1].velocity_kmps,
                routeSegments[0].route_measurement_datapoints[1].noise_db,
                routeSegments[0].route_measurement_datapoints[1].vibration,
                routeSegments[0].route_measurement_datapoints[1].temperature_celsius,
                routeSegments[0].route_measurement_datapoints[1].pressure_pascals,
                routeSegments[0].route_measurement_datapoints[1].annotation,
                routeSegments[0].route_measurement_datapoints[1].latitude,
                routeSegments[0].route_measurement_datapoints[1].longitude,
            ],
        ]);
    });
});
describe("getSegmentInsertionValues", function () {
    it("should return mysql insertion compatible datapoint values", function () {
        var ROUTE_ID = 2;
        var dbValues = getSegmentInsertionValues(routeSegments, ROUTE_ID);
        expect(dbValues).to.eql([
            [
                ROUTE_ID,
                routeSegments[0].segment_type,
                routeSegments[0].start_time_s,
                routeSegments[0].end_time_s,
            ],
            [
                ROUTE_ID,
                routeSegments[1].segment_type,
                routeSegments[1].start_time_s,
                routeSegments[1].end_time_s,
            ],
        ]);
    });
});
