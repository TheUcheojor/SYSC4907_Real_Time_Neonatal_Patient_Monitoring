import React, { useState } from "react";
import TripsDetails from "components/pages/Trips/TripsDetails";
import { routeMeasurementDataPoints } from "mock/mockTrip";
import BackIcon from "components/icons/BackIcon";

function TripsPage() {
  const [backHover, setBackHover] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{ display: "flex" }}
        onMouseEnter={() => setBackHover(true)}
        onMouseLeave={() => setBackHover(false)}
      >
        <BackIcon
          fill={backHover ? "#2a2a2a" : "#000"}
          style={{
            marginTop: "20px",
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        ></BackIcon>
        <div
          style={{
            display: "inline-block",
            width: "2px",
            height: "30px",
            borderRadius: "6px",
            backgroundColor: "#969696",
            marginTop: "24px",
          }}
        ></div>
      </div>
      <TripsDetails data={routeMeasurementDataPoints}></TripsDetails>
      <TripsDetails data={routeMeasurementDataPoints}></TripsDetails>
      <TripsDetails data={routeMeasurementDataPoints}></TripsDetails>
      <TripsDetails data={routeMeasurementDataPoints}></TripsDetails>
    </div>
  );
}

export default TripsPage;
