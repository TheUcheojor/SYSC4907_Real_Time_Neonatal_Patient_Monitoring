import React, { useState, useEffect } from "react";
import fetch from "node-fetch";
import CompareIcon from "components/icons/CompareIcon";
import {
  DatapointFieldEnum,
  RouteFieldEnum,
} from "constants/DatapointFieldEnum";
import List from "components/pages/Trips/List";
import { elapsedDurationInHoursAndMinutes } from "util/StringUtil";
import CancelIcon from "components/icons/CancelIcon";
import { ColorEnum } from "constants/ColorEnum";
import TripsDetails from "components/pages/Trips/TripsDetails";
import BackIcon from "components/icons/BackIcon";
import LoadingIcon from "components/icons/LoadingIcon";
import MapWithChartNet from "components/visualization/MapWithChartNet";
import { getFetchHeaderWithAuth } from "util/AuthUtil";
import Pagination from "components/pages/Pagination";
import { SERVER_HOST, SERVER_PORT } from "constants/SystemConfiguration";

const pStyles = {
  fontWeight: 400,
  marginLeft: "10px",
  color: ColorEnum.White,
  width: "100%",
  display: "block",
  paddingTop: "5px",
  paddingBottom: "5px",
};

const PAGE_SIZE = 12;

interface TripsProps {
  onLogout: () => void;
}

function TripsPage({ onLogout }: TripsProps) {
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedRoutes, setSelectedRoutes] = useState([]);
  const [isComparing, setIsComparing] = useState(false);
  const [routes, setRoutes] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRoutes, setTotalRoutes] = useState(0);
  console.log("TRIPS PAGE RENDER", totalRoutes);

  useEffect(() => {
    fetch(
      `http://${SERVER_HOST}:${SERVER_PORT}/routes?page=${currentPage}&limit=${PAGE_SIZE}`,
      {
        headers: getFetchHeaderWithAuth(),
      }
    )
      .then((res) => {
        if (res.status === 401) {
          onLogout();
        } else {
          return res.json();
        }
      })
      .then((result) => {
        setRoutes(result.routes);
        setTotalRoutes(result.totalRoutes);
      });
  }, [currentPage, onLogout]);

  function onListElemClick(e) {
    const targetedRoute = routes.find(
      (route) => route[RouteFieldEnum.route_id] === parseInt(e.currentTarget.id)
    );

    if (targetedRoute === undefined) {
      console.log("No route data matches the clicked list elements id");
      return;
    }
    if (isSelecting) {
      if (
        !selectedRoutes.some(
          (elem) =>
            elem[RouteFieldEnum.route_id] ===
            targetedRoute[RouteFieldEnum.route_id]
        )
      ) {
        selectedRoutes.push(targetedRoute);
        setSelectedRoutes([...selectedRoutes]);
      } else {
        setSelectedRoutes([
          ...selectedRoutes.filter(
            (elem) =>
              elem[RouteFieldEnum.route_id] !==
              targetedRoute[RouteFieldEnum.route_id]
          ),
        ]);
      }
    }

    if (!isSelecting) {
      setSelectedRoutes([targetedRoute]);
    }
  }

  function getContent() {
    if (!isComparing) {
      return (
        <div style={{ marginLeft: "10px", marginTop: "10px", display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: ColorEnum.Black,
                fontWeight: 700,
                width: "334px",
                textAlign: "center",
              }}
            >
              Trips
            </p>
            {routes === undefined ? (
              <LoadingIcon />
            ) : (
              <List
                routes={routes}
                elemOnClick={onListElemClick}
                activeRoutes={selectedRoutes}
              />
            )}
            <Pagination
              currentPage={currentPage}
              totalSize={totalRoutes}
              pageSize={PAGE_SIZE}
              siblingIndexSize={1}
              onPageChange={(page) => {
                setCurrentPage(page);
                setRoutes(undefined);
              }}
            />
          </div>
          {selectedRoutes.length > 0 && (
            <div style={{ marginLeft: "10px", marginRight: "10px" }}>
              <div
                style={{
                  width: "410px",
                  height: "fit-content",
                  backgroundColor: ColorEnum.Black,
                  borderRadius: "6px",
                }}
              >
                <span style={pStyles}>
                  Patient:{" "}
                  {
                    selectedRoutes[selectedRoutes.length - 1][
                      RouteFieldEnum.patient_id
                    ]
                  }
                </span>
                <span style={pStyles}>
                  Duration:{" "}
                  {elapsedDurationInHoursAndMinutes(
                    selectedRoutes[selectedRoutes.length - 1][
                      RouteFieldEnum.start_time_s
                    ],
                    selectedRoutes[selectedRoutes.length - 1][
                      RouteFieldEnum.end_time_s
                    ]
                  )}
                </span>
                <span style={pStyles}>
                  Vibration exposure:{" "}
                  {
                    selectedRoutes[selectedRoutes.length - 1][
                      RouteFieldEnum.total_vibration
                    ]
                  }
                </span>
              </div>
              <div style={{ marginTop: "10px" }}>
                <MapWithChartNet
                  onLogout={onLogout}
                  measurand={DatapointFieldEnum.vibration}
                  routeId={parseInt(
                    selectedRoutes[selectedRoutes.length - 1][
                      DatapointFieldEnum.route_id
                    ]
                  )}
                />
              </div>
            </div>
          )}
          {isSelecting && (
            <span style={{ color: ColorEnum.Black, marginLeft: "5px" }}>
              Select 1-4 routes to compare
            </span>
          )}
          <div
            style={{
              marginLeft: "auto",
            }}
          >
            {isSelecting && selectedRoutes.length > 0 && (
              <CompareIcon
                style={{
                  marginRight: "5px",
                  marginBottom: "5px",
                }}
                onClick={() => setIsComparing(true)}
                bgColor={ColorEnum.Green}
                bgColorHover={ColorEnum.LightGreen}
              />
            )}
            {isSelecting && (
              <CancelIcon
                style={{
                  marginRight: "5px",
                }}
                onClick={() => {
                  setIsSelecting(false);
                  selectedRoutes.length > 0
                    ? setSelectedRoutes([
                        selectedRoutes[selectedRoutes.length - 1],
                      ])
                    : setSelectedRoutes([]);
                }}
                bgColor={ColorEnum.Black}
                bgColorHover={ColorEnum.Grey}
              />
            )}
            {!isSelecting && (
              <CompareIcon
                style={{ marginRight: "5px" }}
                onClick={() => setIsSelecting(true)}
                bgColor={ColorEnum.Black}
                bgColorHover={ColorEnum.Grey}
              />
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ display: "flex" }}>
          <BackIcon onClick={() => setIsComparing(false)} />
          <TripsDetails selectedRoutes={selectedRoutes} />
        </div>
      );
    }
  }

  return getContent();
}

export default TripsPage;
