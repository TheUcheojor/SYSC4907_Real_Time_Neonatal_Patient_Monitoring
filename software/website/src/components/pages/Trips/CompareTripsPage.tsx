import React, { useState } from "react";
import TripsDetails from "components/pages/Trips/TripsDetails";
import { generateRandomDatapoints } from "mock/mockTrip";
import BackIcon from "components/icons/BackIcon";
import {
  coordsCarletonCampus,
  coordsCivicToHull,
  coordsCivicToGeneral,
  coordsOttToTo,
} from "mock/coords";

function CompareTripsPage() {
  return (
    <div style={{ display: "flex" }}>
      <BackIcon />
      <TripsDetails
        data={generateRandomDatapoints(coordsCarletonCampus)}
      ></TripsDetails>
      {/* <TripsDetails
        data={generateRandomDatapoints(coordsCivicToHull)}
      ></TripsDetails>
      <TripsDetails
        data={generateRandomDatapoints(coordsCivicToGeneral)}
      ></TripsDetails>
      <TripsDetails
        data={generateRandomDatapoints(coordsOttToTo)}
      ></TripsDetails> */}
    </div>
  );
}

export default CompareTripsPage;
