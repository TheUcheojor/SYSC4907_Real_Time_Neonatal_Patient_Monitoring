import { DatapointFieldEnum } from "./DatapointFieldEnum";

export enum MeasurandUnitEnum {
  MetresPerSecondSquared = "m/s^2",
  Celsius = "C",
  KiloMetresPerHour = "km/h",
  Decibel = "dB",
  KiloPascals = "kPa",
}

export const MeasurandUnitMap = new Map<DatapointFieldEnum, string>([
  [DatapointFieldEnum.vibration, MeasurandUnitEnum.MetresPerSecondSquared],
  [DatapointFieldEnum.temperature_celsius, MeasurandUnitEnum.Celsius],
  [DatapointFieldEnum.pressure_pascals, MeasurandUnitEnum.KiloPascals],
  [DatapointFieldEnum.velocity_kmps, MeasurandUnitEnum.KiloMetresPerHour],
  [DatapointFieldEnum.noise_db, MeasurandUnitEnum.Decibel],
]);
