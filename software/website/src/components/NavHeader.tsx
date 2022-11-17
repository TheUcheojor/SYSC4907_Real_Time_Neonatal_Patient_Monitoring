import React, { useState } from "react";
import CSS from "csstype";

const headerStyles: CSS.Properties = {
  width: "100%",
  height: "70px",
  backgroundColor: "black",
  display: "flex",
  alignItems: "center",
};

const headerTabStyles: CSS.Properties = {
  color: "white",
  paddingLeft: "20px",
  paddingRight: "20px",
  cursor: "pointer"
};

const babyIconStyles: CSS.Properties = {
  height: "40px",
  ...headerTabStyles,
};

function NavHeader() {
  return (
    <div style={headerStyles}>
      <img
        src="/white-baby.svg"
        style={babyIconStyles}
        alt="baby-icon"
        color="white"
      />
      <span style={headerTabStyles}>Organizations</span>
      <span style={headerTabStyles}>Trips</span>
    </div>
  );
}

export default NavHeader;
