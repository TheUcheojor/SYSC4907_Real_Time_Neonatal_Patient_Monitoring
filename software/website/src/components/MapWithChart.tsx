import React, { useState, useEffect, memo } from "react";
import Chart from "components/Chart";
import { DatapointFieldEnum } from "constants/DatapointFieldEnum";
import RouteMeasurementDataPoint from "mock/RouteMeasurementDataPoint";
import { toTitleCase } from "utility/StringUtil";
import CSS from "csstype";
import Map from "components/Map";

const mapStyles = {
  height: "calc(100vh - 430px)",
  width: "410px",
  borderRadius: "6px",
  marginTop: "10px",
};

interface modalProps {
  data: RouteMeasurementDataPoint[];
  measurand: DatapointFieldEnum;
  style?: CSS.Properties;
}

function MapWithChart({ data, measurand, style }: modalProps) {
  console.log("MWC RENDER");
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
        ...style,
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
        measurand={measurand}
        style={mapStyles}
      />
    </div>
  );
}

export default memo(MapWithChart);
