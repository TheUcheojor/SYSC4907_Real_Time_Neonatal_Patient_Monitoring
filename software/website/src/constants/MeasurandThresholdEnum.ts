import { DatapointFieldEnum } from "./DatapointFieldEnum";

export const MeasurandThresholdDefaultMap = new Map<string, string> ([
    [`${DatapointFieldEnum.vibration}Alert`, "3"],
    [`${DatapointFieldEnum.vibration}Warning`, "2"],
    [`${DatapointFieldEnum.velocity_kmps}Alert`, "120"],
    [`${DatapointFieldEnum.velocity_kmps}Warning`, "100"],
    [`${DatapointFieldEnum.temperature_celsius}Alert`, "35"],
    [`${DatapointFieldEnum.temperature_celsius}Warning`, "28"],
    [`${DatapointFieldEnum.noise_db}Alert`, "85"],
    [`${DatapointFieldEnum.noise_db}Warning`, "65"]
]);

