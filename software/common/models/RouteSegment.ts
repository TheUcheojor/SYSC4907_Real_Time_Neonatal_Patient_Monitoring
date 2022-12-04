export interface RouteSegment {
    segmentId: string,
    routeId: string,
    segmentType: string,
    startTime: number, // TODO: dates use a more suitable type instead of numbers
    endTime: number,
    startLocation: string,
    endLocation: string
}
