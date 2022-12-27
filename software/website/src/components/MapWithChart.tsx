import React, { useState, useEffect } from "react";
import Chart from "components/Chart";
import { DatapointFieldEnum } from "constants/DatapointFieldEnum";
import RouteMeasurementDataPoint from "mock/RouteMeasurementDataPoint";
import { toTitleCase } from "utility/StringUtil";
import { ColorEnum } from "constants/ColorEnum";
import { MeasurandThresholdDefaultEnum } from "constants/MeasurandThresholdEnum";
import Map from "components/Map";

function getColor(value: any, measurand: DatapointFieldEnum): string {
  if (
    MeasurandThresholdDefaultEnum[`${measurand}Alert`] === undefined ||
    MeasurandThresholdDefaultEnum[`${measurand}Warning`] === undefined
  )
    return ColorEnum.Grey;

  if (value >= MeasurandThresholdDefaultEnum[`${measurand}Alert`]) {
    return ColorEnum.Red;
  } else if (value >= MeasurandThresholdDefaultEnum[`${measurand}Warning`]) {
    return ColorEnum.Yellow;
  } else {
    return ColorEnum.Green;
  }
}

interface modalProps {
  data: RouteMeasurementDataPoint[];
  measurand: DatapointFieldEnum;
}

function MapWithChart({ data, measurand }: modalProps) {
  const [focusLat, setFocusLat] = useState(data[0].coordinates[1]);
  const [focusLon, setFocusLon] = useState(data[0].coordinates[0]);

  // hacky way to ensure state updates when props change
  useEffect(() => {
    setFocusLat(data[0].coordinates[1]);
    setFocusLon(data[0].coordinates[0]);
  }, [data]);

  const chartClickHandler = (data: any) => {
    setFocusLat(data.activePayload[0].payload.coordinates[1]);
    setFocusLon(data.activePayload[0].payload.coordinates[0]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span
        style={{ marginBottom: "10px", textAlign: "center", fontWeight: 700 }}
      >
        {toTitleCase(measurand)}
      </span>
      <Chart data={data} measurand={measurand} onClick={chartClickHandler} />
      <Map
        data={data}
        focusLat={focusLat}
        focusLon={focusLon}
        style={{
          height: "calc(100vh - 430px)",
          width: "410px",
          borderRadius: "6px",
          marginTop: "10px",
        }}
      />
    </div>
  );
}

export default MapWithChart;
