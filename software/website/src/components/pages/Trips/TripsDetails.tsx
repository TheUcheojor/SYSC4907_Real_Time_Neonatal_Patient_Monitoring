import React, { useEffect, useState } from "react";
import { DatapointFieldEnum, RouteFieldEnum } from "constants/DatapointFieldEnum";
import Chart from "components/Chart";
import Modal from "components/modal/Modal";
import MapWithChart from "components/MapWithChart";
import Route from "models/Route";
import { toClockString, toDateString } from "utility/StringUtil";
import { queryTripDatapoints } from "interface/TripsInterface";
import MapWithChartNet from "components/MapWithChartNet";
import LoadingIcon from "components/icons/LoadingIcon";

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
  const [data, setData] = useState([]);
  const [netError, setNetError] = useState(undefined);

  function closeModal() {
    setModalOpen(false);
  }

  function chartClickHandler(e: any) {
    setActiveMeasurand(e.activePayload[0].dataKey);
    setModalOpen(true);
  }

  useEffect(() => {
    selectedRoutes.forEach((route, i) => {
      fetch(`http://localhost:3001/routeMeasurementDataPoints/${route[RouteFieldEnum.route_id]}`)
        .then((res) => res.json())
        .then(
          (result) => {
            data.push(result);
            setData([...data]);
          },
          (error) => {
            setNetError(error);
          }
        );
    });
  }, []);

  return (
    <div style={{ marginLeft: "10px" }}>
      <ul style={{ display: "flex" }}>
        {selectedRoutes.map((route, i) => {
          return data[i] !== undefined ? (
            <div style={{ marginLeft: "10px" }}>
              <span style={chartLabelStyles}>
                {toDateString(route[RouteFieldEnum.start_time_s])}
              </span>
              <p style={{ color: "#000", fontSize: "12px", margin: 0 }}>
                {toClockString(route[RouteFieldEnum.start_time_s], route[RouteFieldEnum.end_time_s])}
              </p>
              <p style={chartLabelStyles}>Vibration</p>
              <Chart
                data={data[i]}
                measurand={DatapointFieldEnum.vibration}
                onClick={chartClickHandler}
              />
              <p style={chartLabelStyles}>Noise</p>
              <Chart
                data={data[i]}
                measurand={DatapointFieldEnum.noise_db}
                onClick={chartClickHandler}
              />
              <p style={chartLabelStyles}>Temperature</p>
              <Chart
                data={data[i]}
                measurand={DatapointFieldEnum.temperature_celsius}
                onClick={chartClickHandler}
              />
              <p style={chartLabelStyles}>Velocity</p>
              <Chart
                data={data[i]}
                measurand={DatapointFieldEnum.velocity_kmps}
                onClick={chartClickHandler}
              />
            </div>
          ) : (
            <div
              style={{
                width: "410px",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LoadingIcon />
            </div>
          );
        })}
      </ul>
      <Modal title="Compare" modalOpen={modalOpen} closeModal={closeModal}>
        <ul style={{ display: "flex", padding: 0 }}>
          {selectedRoutes.map((route) => {
            return (
              <MapWithChartNet
                measurand={DatapointFieldEnum[activeMeasurand]}
                routeId={parseInt(route[RouteFieldEnum.route_id])}
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
