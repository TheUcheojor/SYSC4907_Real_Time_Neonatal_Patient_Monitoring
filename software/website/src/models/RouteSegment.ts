export default interface RouteSegment {
    segment_id: string,
    route_id: string,
    segment_type: string,
    start_time_s: number,
    end_time_s: number,
    start_location: string,
    end_location: string
}