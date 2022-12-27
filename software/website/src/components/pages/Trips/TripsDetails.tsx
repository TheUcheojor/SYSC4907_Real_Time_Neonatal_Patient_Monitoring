import React, { useState } from "react";
import { DatapointFieldEnum } from "constants/DatapointFieldEnum";
import Chart from "components/Chart";
import RouteMeasurementDataPoint from "mock/RouteMeasurementDataPoint";
import Modal from "components/modal/Modal";
import MapWithChart from "components/MapWithChart";
import Route from "mock/Route";
import { toClockString, toDateString } from "utility/StringUtil";

const chartLabelStyles = {
  color: "black",
  fontWeight: 700,
};

interface TripsDetailsProps {
  data: RouteMeasurementDataPoint[];
  route: Route;
}

function TripsDetails({ data, route }: TripsDetailsProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeMeasurand, setActiveMeasurand] = useState("");

  console.log(data);

  function closeModal() {
    setModalOpen(false);
  }

  function chartClickHandler(e: any) {
    setActiveMeasurand(e.activePayload[0].dataKey);
    setModalOpen(true);
  }

  return (
    <div style={{ marginLeft: "10px" }}>
      <span style={chartLabelStyles}>{toDateString(route.startTime)}</span>
      <p style={{ color: "#000", fontSize: "12px", margin: 0 }}>
        {toClockString(route.startTime, route.endTime)}
      </p>
      <p style={chartLabelStyles}>Vibration</p>
      <Chart
        data={data}
        measurand={DatapointFieldEnum.vibration}
        onClick={chartClickHandler}
      />
      <p style={chartLabelStyles}>Noise</p>
      <Chart
        data={data}
        measurand={DatapointFieldEnum.noise}
        onClick={chartClickHandler}
      />
      <p style={chartLabelStyles}>Temperature</p>
      <Chart
        data={data}
        measurand={DatapointFieldEnum.temperature}
        onClick={chartClickHandler}
      />
      <p style={chartLabelStyles}>Velocity</p>
      <Chart
        data={data}
        measurand={DatapointFieldEnum.velocity}
        onClick={chartClickHandler}
      />
      <Modal title="Compare" modalOpen={modalOpen} closeModal={closeModal}>
        <MapWithChart
          measurand={DatapointFieldEnum[activeMeasurand]}
          data={data}
        />
      </Modal>
    </div>
  );
}

export default TripsDetails;
