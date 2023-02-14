import { DatapointFieldEnum } from "./DatapointFieldEnum";

export const MeasurandThresholdDefaultMap = new Map<string, string> ([
    [`${DatapointFieldEnum.vibration}Alert`, "8"],
    [`${DatapointFieldEnum.vibration}Warning`, "6.5"],
    [`${DatapointFieldEnum.velocity_kmps}Alert`, "160"],
    [`${DatapointFieldEnum.velocity_kmps}Warning`, "120"],
    [`${DatapointFieldEnum.temperature_celsius}Alert`, "35"],
    [`${DatapointFieldEnum.temperature_celsius}Warning`, "28"],
    [`${DatapointFieldEnum.noise_db}Alert`, "85"],
    [`${DatapointFieldEnum.noise_db}Warning`, "65"],
    [`${DatapointFieldEnum.pressure_pascals}Alert`, "120000"],
    [`${DatapointFieldEnum.pressure_pascals}Warning`, "110000"]
]);

