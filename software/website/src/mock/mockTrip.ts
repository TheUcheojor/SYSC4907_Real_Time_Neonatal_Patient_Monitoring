import RouteMeasurementDataPoint from "./RouteMeasurementDataPoint"
import RouteSegment from "./RouteSegment"
import Route from "./Route"

export function generateRandomDatapoints(coords: number[][]):RouteMeasurementDataPoint[] {
    const dps = [];

	for(let i = 0; i < coords.length; i++) {
		const dp: RouteMeasurementDataPoint = {
			routeDataPointId: i.toString(),
			segmentId: "1",
			time: Date.now() + i*10,
			velocity: i % 160,
			noise: i % 2 + 60,
			vibration: 1 + Math.floor(Math.random() * 3),
			temperature: 21 + Math.floor(Math.random() * 8),
			annotation: Math.floor(Math.random() * 100) === 0 ? "foo bar" : "",
			coordinates: coords[i]
		}

		dps.push(dp)
	}
    return dps;
}

export const route1: Route = {
    routeId: "1",
    ownerId: "1",
    organizationId: "1",
    startTime: Date.now() - 1000,
    endTime: Date.now(),
    totalVibrationExposure: 100,
    avgTemperature: 40,
    avgNoise: 40,
    avgVibration: 40,
    avgVelocity: 80
}

export const route2: Route = {
    routeId: "2",
    ownerId: "1",
    organizationId: "1",
    startTime: Date.now() - 10000000,
    endTime: Date.now(),
    totalVibrationExposure: 20,
    avgTemperature: 40,
    avgNoise: 40,
    avgVibration: 10,
    avgVelocity: 80
}

export const route3: Route = {
    routeId: "3",
    ownerId: "1",
    organizationId: "1",
    startTime: Date.now() - 100000000000,
    endTime: Date.now() - 100000000,
    totalVibrationExposure: 20,
    avgTemperature: 40,
    avgNoise: 40,
    avgVibration: 10,
    avgVelocity: 80
}

export const routeSegment: RouteSegment = {
    segmentId: "1",
    routeId: "1",
    segmentType: "road",
    startTime: Date.now() - 1000,
    endTime: Date.now(),
    startLocation: "CU",
    endLocation: "CU"
}