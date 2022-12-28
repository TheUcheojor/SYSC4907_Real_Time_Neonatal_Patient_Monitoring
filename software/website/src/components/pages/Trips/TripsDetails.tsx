import React, { useState } from "react";
import { DatapointFieldEnum } from "constants/DatapointFieldEnum";
import Chart from "components/Chart";
import Modal from "components/modal/Modal";
import MapWithChart from "components/MapWithChart";
import Route from "models/Route";
import { toClockString, toDateString } from "utility/StringUtil";
import { queryTripDatapoints } from "interface/TripsInterface";

const chartLabelStyles = {
  color: "black",
  fontWeight: 700,
};

interface TripsDetailsProps {
  selectedRoutes: Route[];
}

function TripsDetails({ selectedRoutes }: TripsDetailsProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeMeasurand, setActiveMeasurand] = useState("");

  function closeModal() {
    setModalOpen(false);
  }

  function chartClickHandler(e: any) {
    setActiveMeasurand(e.activePayload[0].dataKey);
    setModalOpen(true);
  }

  return (
    <div style={{ marginLeft: "10px" }}>
      {/* <ul style={{ display: "flex" }}>
        {selectedRoutes.map((route) => {
          return (
            <div style={{ marginLeft: "10px" }}>
              <span style={chartLabelStyles}>
                {toDateString(route.startTime)}
              </span>
              <p style={{ color: "#000", fontSize: "12px", margin: 0 }}>
                {toClockString(route.startTime, route.endTime)}
              </p>
              <p style={chartLabelStyles}>Vibration</p>
              <Chart
                data={queryTripDatapoints(parseInt(route.routeId))}
                measurand={DatapointFieldEnum.vibration}
                onClick={chartClickHandler}
              />
              <p style={chartLabelStyles}>Noise</p>
              <Chart
                data={queryTripDatapoints(parseInt(route.routeId))}
                measurand={DatapointFieldEnum.noise}
                onClick={chartClickHandler}
              />
              <p style={chartLabelStyles}>Temperature</p>
              <Chart
                data={queryTripDatapoints(parseInt(route.routeId))}
                measurand={DatapointFieldEnum.temperature}
                onClick={chartClickHandler}
              />
              <p style={chartLabelStyles}>Velocity</p>
              <Chart
                data={queryTripDatapoints(parseInt(route.routeId))}
                measurand={DatapointFieldEnum.velocity}
                onClick={chartClickHandler}
              />
            </div>
          );
        })}
      </ul> */}
      <Modal title="Compare" modalOpen={modalOpen} closeModal={closeModal}>
        <ul style={{ display: "flex", padding: 0 }}>
          {selectedRoutes.map((route) => {
            return (
              <MapWithChart
                measurand={DatapointFieldEnum[activeMeasurand]}
                routeId={parseInt(route.routeId)}
                style={{ marginLeft: "5px", marginRight: "5px" }}
              />
            );
          })}
        </ul>
      </Modal>
    </div>
  );
}

export default TripsDetails;
