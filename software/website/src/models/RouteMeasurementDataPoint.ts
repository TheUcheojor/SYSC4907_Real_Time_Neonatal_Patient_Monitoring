export default interface RouteMeasurementDataPoint {
    routeDataPointId: string,
    segmentId: string,
    time: number,
    velocity: number,
    noise: number,
    vibration: number,
    temperature: number,
    annotation: string,
    coordinates: Array<number>
}
