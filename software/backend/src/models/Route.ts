export default interface Route {
    routeId: string,
    ownerId: string,
    organizationId: string,
    startTime: number,
    endTime: number,
    totalVibrationExposure: number,
    avgTemperature: number,
    avgNoise: number,
    avgVibration: number,
    avgVelocity: number,
}