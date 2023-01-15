import { ColorEnum } from "constants/ColorEnum";
import { DatapointFieldEnum } from "constants/DatapointFieldEnum";
import {MeasurandThresholdDefaultMap } from "constants/MeasurandThresholdEnum";

export function getMapColor(value: any, measurand: DatapointFieldEnum): string {
    if (
        MeasurandThresholdDefaultMap.get(`${measurand}Alert`) === undefined ||
        MeasurandThresholdDefaultMap.get(`${measurand}Warning`) === undefined
    )
      return ColorEnum.Grey;
  
    if (value >= MeasurandThresholdDefaultMap.get(`${measurand}Alert`)) {
      return ColorEnum.Red;
    } else if (value >= MeasurandThresholdDefaultMap.get(`${measurand}Warning`)) {
      return ColorEnum.Yellow;
    } else {
      return ColorEnum.Green;
    }
  }