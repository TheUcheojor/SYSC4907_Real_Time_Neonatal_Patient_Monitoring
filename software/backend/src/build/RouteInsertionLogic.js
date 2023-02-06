export function getRouteStats(segments) {
    var total_vibration = 0;
    var avg_temperature = 0;
    var avg_noise = 0;
    var avg_vibration = 0;
    var avg_velocity = 0;
    var avg_pressure = 0;
    var num_dps = 0;
    var min_time_s, max_time_s;
    for (var i = 0; i < segments.length; i++) {
        var segDps = segments[i].route_measurement_datapoints;
        num_dps += segDps.length;
        for (var j = 0; j < segDps.length; j++) {
            if (min_time_s === undefined || min_time_s > segDps[j].time_s)
                min_time_s = segDps[j].time_s;
            if (max_time_s === undefined || max_time_s < segDps[j].time_s)
                max_time_s = segDps[j].time_s;
            total_vibration += segDps[j].vibration;
            avg_temperature += segDps[j].temperature_celsius;
            avg_noise += segDps[j].noise_db;
            avg_vibration += segDps[j].vibration;
            avg_velocity += segDps[j].velocity_kmps;
            avg_pressure += segDps[j].pressure_pascals;
        }
    }
    avg_temperature /= num_dps;
    avg_noise /= num_dps;
    avg_vibration /= num_dps;
    avg_velocity /= num_dps;
    avg_pressure /= num_dps;
    return {
        avg_temperature: avg_temperature,
        avg_noise: avg_noise,
        avg_vibration: avg_vibration,
        avg_velocity: avg_velocity,
        avg_pressure: avg_pressure,
        total_vibration: total_vibration,
        max_time_s: max_time_s,
        min_time_s: min_time_s
    };
}
export function getSegmentInsertionValues(segments, routeId) {
    return segments.map(function (seg) {
        return [routeId, seg.segment_type, seg.start_time_s, seg.end_time_s];
    });
}
export function getDatapointInsertionValues(datapoints, routeId, segmentId) {
    return datapoints.map(function (dp) {
        return [
            routeId,
            segmentId,
            dp.time_s,
            dp.velocity_kmps,
            dp.noise_db,
            dp.vibration,
            dp.temperature_celsius,
            dp.pressure_pascals,
            dp.annotation,
            dp.latitude,
            dp.longitude,
        ];
    });
}
