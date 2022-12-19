import React from "react";
import { routeMeasurementDataPoints } from "mock/mockTrip";
import { DatapointFieldEnum } from "constants/DatapointFieldEnum";
import Chart from "components/Chart";
import RouteMeasurementDataPoint from "mock/RouteMeasurementDataPoint";

const chartLabelStyles = {
  color: "black",
  fontWeight: 700,
};

interface TripsDetailsProps {
  data: RouteMeasurementDataPoint[];
}

function TripsDetails({ data }: TripsDetailsProps) {
  console.log(routeMeasurementDataPoints);
  return (
    <div style={{ marginLeft: "10px" }}>
      <p style={chartLabelStyles}>Date</p>
      <p style={chartLabelStyles}>Vibration</p>
      <Chart data={data} measurand={DatapointFieldEnum.vibration} />
      <p style={chartLabelStyles}>Noise</p>
      <Chart data={data} measurand={DatapointFieldEnum.noise} />
      <p style={chartLabelStyles}>Temperature</p>
      <Chart data={data} measurand={DatapointFieldEnum.temperature} />
      <p style={chartLabelStyles}>Velocity</p>
      <Chart data={data} measurand={DatapointFieldEnum.velocity} />
    </div>
  );
}

export default TripsDetails;
