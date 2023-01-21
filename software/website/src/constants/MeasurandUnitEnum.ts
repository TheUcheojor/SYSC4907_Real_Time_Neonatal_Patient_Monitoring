import { DatapointFieldEnum, RouteFieldEnum } from "./DatapointFieldEnum";

export enum MeasurandUnitEnum {
  MetresPerSecondSquared = "m/s^2",
  Celsius = "C",
  KiloMetresPerHour = "km/h",
  Decibel = "dB",
  KiloPascals = "kPa",
}

export const MeasurandUnitMap = new Map<string, string>([
  [DatapointFieldEnum.vibration, MeasurandUnitEnum.MetresPerSecondSquared],
  [RouteFieldEnum.total_vibration, MeasurandUnitEnum.MetresPerSecondSquared],
  [RouteFieldEnum.avg_vibration, MeasurandUnitEnum.MetresPerSecondSquared],
  [RouteFieldEnum.avg_pressure, MeasurandUnitEnum.KiloPascals],
  [RouteFieldEnum.avg_noise, MeasurandUnitEnum.Decibel],
  [RouteFieldEnum.avg_velocity, MeasurandUnitEnum.KiloMetresPerHour],
  [RouteFieldEnum.avg_temperature, MeasurandUnitEnum.Celsius],
  [DatapointFieldEnum.temperature_celsius, MeasurandUnitEnum.Celsius],
  [DatapointFieldEnum.pressure_pascals, MeasurandUnitEnum.KiloPascals],
  [DatapointFieldEnum.velocity_kmps, MeasurandUnitEnum.KiloMetresPerHour],
  [DatapointFieldEnum.noise_db, MeasurandUnitEnum.Decibel],
]);
