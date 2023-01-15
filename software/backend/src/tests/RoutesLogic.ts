import { expect } from "chai";
import RouteSegment from "models/RouteSegment";
import {
  getDatapointInsertionValues,
  getRouteStats,
} from "./../RouteInsertionLogic";

describe("getRouteStats", () => {
  it("should return stats for segments", () => {
    const routeSegments: RouteSegment[] = [
      {
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
            longitude: -75.69637,
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
            longitude: -75.69637,
          },
        ],
      },
      {
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
            longitude: -75.69637,
          },
        ],
      },
    ];

    const {
      avg_temperature,
      avg_noise,
      avg_vibration,
      avg_velocity,
      avg_pressure,
      total_vibration_exposure,
      max_time_s,
      min_time_s,
    } = getRouteStats(routeSegments);

    expect(avg_temperature).to.equal(
      (routeSegments[0].route_measurement_datapoints[0].temperature_celsius +
        routeSegments[0].route_measurement_datapoints[1].temperature_celsius +
        routeSegments[1].route_measurement_datapoints[0].temperature_celsius) /
        3
    );
    expect(avg_noise).to.equal(
      (routeSegments[0].route_measurement_datapoints[0].noise_db +
        routeSegments[0].route_measurement_datapoints[1].noise_db +
        routeSegments[1].route_measurement_datapoints[0].noise_db) /
        3
    );
    expect(avg_pressure).to.equal(
      (routeSegments[0].route_measurement_datapoints[0].pressure_pascals +
        routeSegments[0].route_measurement_datapoints[1].pressure_pascals +
        routeSegments[1].route_measurement_datapoints[0].pressure_pascals) /
        3
    );
    expect(avg_velocity).to.equal(
      (routeSegments[0].route_measurement_datapoints[0].velocity_kmps +
        routeSegments[0].route_measurement_datapoints[1].velocity_kmps +
        routeSegments[1].route_measurement_datapoints[0].velocity_kmps) /
        3
    );
    expect(avg_vibration).to.equal(
      (routeSegments[0].route_measurement_datapoints[0].vibration +
        routeSegments[0].route_measurement_datapoints[1].vibration +
        routeSegments[1].route_measurement_datapoints[0].vibration) /
        3
    );
    expect(total_vibration_exposure).to.equal(
      routeSegments[0].route_measurement_datapoints[0].vibration +
        routeSegments[0].route_measurement_datapoints[1].vibration +
        routeSegments[1].route_measurement_datapoints[0].vibration
    );
    expect(max_time_s).to.equal(
      routeSegments[0].route_measurement_datapoints[0].time_s
    );
    expect(min_time_s).to.equal(
      routeSegments[1].route_measurement_datapoints[0].time_s
    );
  });
});

describe("getDatapointInsertionValues", () => {
  it("should return mysql insertion compatible datapoint values", () => {
    const routeSegments: RouteSegment[] = [
      {
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
            longitude: -75.69637,
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
            longitude: -75.69637,
          },
        ],
      },
      {
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
            longitude: -75.69637,
          },
        ],
      },
    ];

    const ROUTE_ID = 1;
    const dbValues = getDatapointInsertionValues(routeSegments, 1);
    expect(dbValues).to.eql([
      [
        ROUTE_ID,
        1,
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
        1,
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
      [
        ROUTE_ID,
        1,
        routeSegments[1].route_measurement_datapoints[0].time_s,
        routeSegments[1].route_measurement_datapoints[0].velocity_kmps,
        routeSegments[1].route_measurement_datapoints[0].noise_db,
        routeSegments[1].route_measurement_datapoints[0].vibration,
        routeSegments[1].route_measurement_datapoints[0].temperature_celsius,
        routeSegments[1].route_measurement_datapoints[0].pressure_pascals,
        routeSegments[1].route_measurement_datapoints[0].annotation,
        routeSegments[1].route_measurement_datapoints[0].latitude,
        routeSegments[1].route_measurement_datapoints[0].longitude,
      ],
    ]);
  });
});
