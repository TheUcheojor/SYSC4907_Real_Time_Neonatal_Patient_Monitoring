export interface RouteMeasurementDataPoint {
    routeDataPointId: string,
    segmentId: string,
    time: number,  // TODO: dates use a more suitable type instead of numbers
    velocity: number,
    noise: number,
    vibration: number,
    temperature: number,
    annotation: string,
    coordinates: Array<number>
}
