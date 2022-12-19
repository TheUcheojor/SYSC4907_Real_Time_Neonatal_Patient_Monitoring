import React, { useState } from "react";
import Map from "components/Map";
import Chart from "components/Chart";
import { routeMeasurementDataPoints } from "mock/mockTrip";
import { DatapointFieldEnum } from "constants/DatapointFieldEnum";

function CompareTripsModalContent() {
  const [focusLat, setFocusLat] = useState(
    routeMeasurementDataPoints[0].coordinates[0]
  );
  const [focusLon, setFocusLon] = useState(
    routeMeasurementDataPoints[0].coordinates[1]
  );
  const [zoomLevel, setZoomLevel] = useState(17);

  const chartClickHandler = (data: any) => {
    setFocusLat(data.activePayload[0].payload.lat);
    setFocusLon(data.activePayload[0].payload.lon);
    setZoomLevel(20);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <span
        style={{ marginBottom: "10px", textAlign: "center", fontWeight: 700 }}
      >
        Temperature
      </span>
      <Chart
        data={routeMeasurementDataPoints}
        measurand={DatapointFieldEnum.temperature}
        chartClickHandler={chartClickHandler}
      />
      <Map
        data={routeMeasurementDataPoints}
        focusLat={focusLat}
        focusLon={focusLon}
        zoomLevel={zoomLevel}
      />
    </div>
  );
}

export default CompareTripsModalContent;
