import { coordsBarrhavenToQueensway, coordsQueenswayToGeneral } from "./coords";
export function generateRandomDatapoints(coords) {
    var dps = [];
    for (var i = 0; i < coords.length; i++) {
        var dp = {
            time_s: Math.floor(Date.now() / 1000) + 3 * i,
            velocity_kmps: i % 160,
            noise_db: (i % 2) + 60,
            vibration: 1 + Math.floor(Math.random() * 3),
            temperature_celsius: 21 + Math.floor(Math.random() * 8),
            pressure_pascals: 100000 + Math.floor(Math.random() * 10000),
            annotation: Math.floor(Math.random() * 100) === 0 ? "foo bar" : "",
            latitude: coords[i][1],
            longitude: coords[i][0]
        };
        dps.push(dp);
    }
    return dps;
}
export function generateRoadAerialTrip(aerialDivisions) {
    var start = coordsQueenswayToGeneral[0];
    var end = coordsQueenswayToGeneral[1];
    var dist = [end[0] - start[0], end[1] - start[1]];
    var aerialCoords = [];
    for (var i = 0; i < aerialDivisions; i++) {
        aerialCoords.push([
            start[0] + (dist[0] / aerialDivisions) * i,
            start[1] + (dist[1] / aerialDivisions) * i,
        ]);
    }
    var SURFACE_AIR_PRESSURE = 101000;
    var JANUARY_TEMP = -3;
    var MIN_G_ROAD = 0.5;
    var MAX_G_ROAD = 1.5;
    var G_TO_MPSS = 9.8;
    var MIN_G_AERIAL = MIN_G_ROAD * 1.25; // best guess scale factor
    var MAX_G_AERIAL = MAX_G_ROAD * 1.25;
    var ROAD_SPEED = 80;
    var AERIAL_SPEED = 200;
    var groundCoords = coordsBarrhavenToQueensway;
    var groundDps = [];
    var aerialDps = [];
    var SAMPLE_RATE_S = 3;
    var START_OF_SEG_1_S = Math.floor(Date.now() / 1000);
    var START_OF_SEG_2_S = Math.floor(START_OF_SEG_1_S + SAMPLE_RATE_S * groundCoords.length);
    var END_OF_SEG_2_S = Math.floor(START_OF_SEG_2_S + SAMPLE_RATE_S * aerialCoords.length);
    for (var i = 0; i < groundCoords.length; i++) {
        var vib_value = (MIN_G_ROAD + (Math.random() * (MAX_G_ROAD - MIN_G_ROAD)) / 10) *
            G_TO_MPSS;
        var noise_value = (i % 2) + 60;
        var velocity_value = ROAD_SPEED * (0.5 * Math.sin(i) + 0.5);
        var annotation_value = "";
        if (groundCoords[i][0] === -75.80643 && groundCoords[i][1] === 45.32757) {
            noise_value = (i % 2) + 90;
            vib_value = MAX_G_ROAD * 0.9 * G_TO_MPSS;
            G_TO_MPSS;
            annotation_value = "Pot hole";
        }
        if (i <= groundCoords.length / 4 && i >= groundCoords.length / 8) {
            noise_value = (i % 2) + 65;
            velocity_value = 120;
            vib_value =
                (MAX_G_ROAD * 0.5 - (Math.random() * (MAX_G_ROAD - MIN_G_ROAD)) / 10) *
                    G_TO_MPSS;
            annotation_value =
                i === Math.floor(groundCoords.length / 6)
                    ? "Fallowfield, rough conditions"
                    : "";
        }
        if (groundCoords[i][0] === -75.73359 && groundCoords[i][1] === 45.30281) {
            noise_value = (i % 2) + 80;
            vib_value = MAX_G_ROAD * 0.6 * G_TO_MPSS;
            annotation_value = "Train Crossing";
        }
        var dp = {
            time_s: START_OF_SEG_1_S + SAMPLE_RATE_S * i,
            velocity_kmps: velocity_value,
            noise_db: noise_value,
            vibration: vib_value,
            temperature_celsius: JANUARY_TEMP + Math.floor(Math.random() * 0.5),
            pressure_pascals: SURFACE_AIR_PRESSURE + Math.floor(Math.random() * 1000),
            annotation: annotation_value,
            latitude: groundCoords[i][1],
            longitude: groundCoords[i][0]
        };
        groundDps.push(dp);
    }
    for (var i = 0; i < aerialCoords.length; i++) {
        var dp = {
            time_s: START_OF_SEG_2_S + SAMPLE_RATE_S * i,
            velocity_kmps: AERIAL_SPEED * (1 - Math.exp(-i)) + (i % 2),
            noise_db: i < aerialCoords.length / 4 && i > aerialCoords.length / 5
                ? (i % 2) + 80
                : (i % 2) + 70,
            vibration: i < aerialCoords.length / 2 && i > aerialCoords.length / 5
                ? (MAX_G_AERIAL * 0.6 -
                    (Math.random() * (MAX_G_AERIAL - MIN_G_AERIAL)) / 7) *
                    G_TO_MPSS
                : (MIN_G_AERIAL +
                    (Math.random() * (MAX_G_AERIAL - MIN_G_AERIAL)) / 10) *
                    G_TO_MPSS,
            temperature_celsius: JANUARY_TEMP + Math.floor(Math.random() * 0.5),
            pressure_pascals: SURFACE_AIR_PRESSURE * 0.7 + Math.floor(Math.random() * 1000),
            annotation: i === aerialCoords.length / 4 ? "turbulence" : "",
            latitude: aerialCoords[i][1],
            longitude: aerialCoords[i][0]
        };
        aerialDps.push(dp);
    }
    return {
        start_time_s: START_OF_SEG_1_S,
        end_time_s: END_OF_SEG_2_S,
        patient_id: "Favour",
        route_segments: [
            {
                segment_type: "road",
                start_time_s: START_OF_SEG_1_S,
                end_time_s: START_OF_SEG_2_S,
                route_measurement_datapoints: groundDps
            },
            {
                segment_type: "aerial",
                start_time_s: START_OF_SEG_2_S,
                end_time_s: END_OF_SEG_2_S,
                route_measurement_datapoints: aerialDps
            },
        ]
    };
}
