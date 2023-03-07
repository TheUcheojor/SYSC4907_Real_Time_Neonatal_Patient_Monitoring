import React, { memo, useState, useEffect, useRef, useCallback } from "react";
import fetch from "node-fetch";
import CompareIcon from "components/icons/CompareIcon";
import {
  DatapointFieldEnum,
  RouteFieldEnum,
} from "constants/DatapointFieldEnum";
import List from "components/pages/Trips/List";
import CancelIcon from "components/icons/CancelIcon";
import { ColorEnum } from "constants/ColorEnum";
import TripsDetails from "components/pages/Trips/TripsDetails";
import BackIcon from "components/icons/BackIcon";
import LoadingIcon from "components/icons/LoadingIcon";
import MapWithChartNet from "components/visualization/MapWithChartNet";
import { getFetchHeaderWithAuth } from "util/AuthUtil";
import Pagination from "components/pages/Pagination";
import QueryBar, { comparatorOptions, statisticOptions } from "./QueryBar";
import { HttpStatusEnum } from "constants/HttpStatusEnum";
import TripPreview from "./TripPreview";
import Modal from "components/modal/Modal";
import DeleteTripModalContent from "components/modal/DeleteTripModalContent";

const PAGE_SIZE = 8;

interface TripsProps {
  onLogout: () => void;
}

function TripsPage({ onLogout }: TripsProps) {
  console.log("TRIPS PAGE RENDER");
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedRoutes, setSelectedRoutes] = useState([]);
  const [isComparing, setIsComparing] = useState(false);
  const [routes, setRoutes] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRoutes, setTotalRoutes] = useState(0);
  const [queryStat, setQueryStat] = useState(statisticOptions[0].value);
  const [queryComparator, setQueryComparator] = useState(
    comparatorOptions[0].value
  );
  const [queryValue, setQueryValue] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const deleteTripId = useRef(undefined);
  const deleteTripPatient = useRef("");

  const queryString =
    queryStat !== "-" &&
    queryComparator !== "-" &&
    queryValue !== "" &&
    /^[0-9.]+$/.test(queryValue)
      ? `&search_query=${queryStat}${queryComparator}${queryValue}`
      : "";

  useEffect(() => {
    setRoutes(undefined);
    fetch(
      `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/routes?page=${currentPage}&limit=${PAGE_SIZE}${queryString}`,
      {
        headers: getFetchHeaderWithAuth(),
      }
    )
      .then((res) => {
        if (res.status === HttpStatusEnum.UNAUTHORIZED) {
          onLogout();
        } else {
          return res.json();
        }
      })
      .then((result) => {
        setRoutes(result.routes);
        setTotalRoutes(result.totalRoutes);
      });
  }, [currentPage, queryString, onLogout]);

  const onDeleteTrip = useCallback(() => {
    setRoutes(undefined);
    fetch(
      `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/routes/${deleteTripId.current}`,
      {
        method: "DELETE",
        headers: getFetchHeaderWithAuth(),
      }
    )
      .then((res) => {
        if (res.status === HttpStatusEnum.UNAUTHORIZED) {
          onLogout();
        } else {
          return res;
        }
      })
      .then((result) => {
        console.log("DELETED TRIP");
        setModalOpen(false);
      });
  }, []);

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
        <div
          style={{
            marginLeft: "10px",
            marginTop: "10px",
            display: "flex",
            columnGap: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "334px",
            }}
          >
            <p
              style={{
                fontWeight: 700,
              }}
            >
              Trips
            </p>
            <QueryBar
              activeSearch={queryString !== ""}
              setQueryStat={(e) => {
                setQueryStat(e);
              }}
              setQueryComparator={(e) => {
                setQueryComparator(e);
              }}
              setQueryValue={(e) => {
                setQueryValue(e);
              }}
            />
            {routes === undefined ? (
              <LoadingIcon />
            ) : routes.length > 0 ? (
              <List
                routes={routes}
                elemOnClick={onListElemClick}
                activeRoutes={selectedRoutes}
                elemDeleteOnClick={(e, route) => {
                  setModalOpen(true);
                  deleteTripPatient.current = route[RouteFieldEnum.patient_id];
                  deleteTripId.current = route[RouteFieldEnum.route_id];
                }}
              />
            ) : (
              <p>No routes found</p>
            )}
            <Pagination
              currentPage={currentPage}
              totalSize={totalRoutes}
              pageSize={PAGE_SIZE}
              siblingIndexSize={1}
              onPageChange={(page) => {
                setCurrentPage(page);
              }}
            />
          </div>
          {selectedRoutes.length > 0 && (
            <div
              style={{
                minWidth: "200px",
                display: "flex",
                flexDirection: "column",
                flexGrow: 3,
              }}
            >
              <div
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <TripPreview
                  onLogout={onLogout}
                  selectedRoute={selectedRoutes[selectedRoutes.length - 1]}
                />
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
            <p>
              <p style={{ color: ColorEnum.Black, margin: 0 }}>
                Select 1-4 routes to compare
              </p>
              <p>{selectedRoutes.length} routes selected</p>
            </p>
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
                  marginLeft: "5px",
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
                  marginLeft: "5px",
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
                style={{ marginRight: "5px", marginLeft: "5px" }}
                onClick={() => setIsSelecting(true)}
                bgColor={ColorEnum.Black}
                bgColorHover={ColorEnum.Grey}
              />
            )}
          </div>

          <Modal
            title={"Delete trip"}
            modalOpen={isModalOpen}
            closeModal={() => {
              setModalOpen(false);
            }}
          >
            <DeleteTripModalContent
              trip_id={deleteTripId.current}
              patient_id={deleteTripPatient.current.toString()}
              onDelete={onDeleteTrip}
            />
          </Modal>
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

export default memo(TripsPage);
