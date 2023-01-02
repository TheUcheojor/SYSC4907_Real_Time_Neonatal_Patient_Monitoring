export enum DatapointFieldEnum {
    route_id = "route_id",
    vibration = 'vibration',
    temperature_celsius = 'temperature_celsius',
    velocity_kmps = 'velocity_kmps',
    noise_db = 'noise_db',
    time_s = 'time_s',
    pressure_pascals = 'pressure_pascals',
    annotation = 'annotation',
    longitude = 'longitude',
    latitude = 'latitude'
}

export enum RouteFieldEnum {
    route_id = "route_id",
    owner_id = "owner_id",
    organization_id = "organization_id",
    total_vibration_exposure = "total_vibration_exposure",
    avg_temperature = "avg_temperature",
    avg_noise = "avg_noise",
    avg_vibration = "avg_vibration",
    avg_velocity = "avg_velocity",
    avg_pressure = "avg_pressure",
    start_time_s = "start_time_s",
    end_time_s = "end_time_s",
}