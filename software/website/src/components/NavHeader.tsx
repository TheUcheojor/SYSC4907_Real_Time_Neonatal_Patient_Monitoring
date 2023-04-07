import React, { useState } from "react";
import CSS from "csstype";
import BabyIcon from "components/icons/BabyIcon";
import UserIcon from "components/icons/UserIcon";
import { PageEnum } from "constants/PageEnum";

const headerTabStyles: CSS.Properties = {
  color: "white",
  cursor: "pointer",
};

const headerMasterTabDivStyles: CSS.Properties = {
  paddingLeft: "20px",
  paddingRight: "20px",
  height: "100%",
  cursor: "pointer",
};

const headerTabDivStyles: CSS.Properties = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  position: "relative",
};

const tabSelectorStyles: CSS.Properties = {
  backgroundColor: "white",
  height: "4px",
  width: "100%",
  borderRadius: "9999px",
  position: "absolute",
  bottom: "2px",
};

interface NavHeaderProps {
  activePage: PageEnum;
  setActivePage: (param: PageEnum) => void;
}

function NavHeader({ activePage, setActivePage }: NavHeaderProps) {
  const [iconIsHover, setIconIsHover] = useState(false);
  const [tripsIsHover, setTripsIsHover] = useState(false);
  const [myAccIsHover, setMyAccIsHover] = useState(false);

  return (
    <div
      style={{
        height: "70px",
        backgroundColor: "black",
        display: "flex",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: iconIsHover ? "#2a2a2a" : "inherit",
          ...headerMasterTabDivStyles,
        }}
        onMouseEnter={() => setIconIsHover(true)}
        onMouseLeave={() => setIconIsHover(false)}
        onClick={() => setActivePage(PageEnum.Trips)}
      >
        <div style={headerTabDivStyles}>
          <BabyIcon
            fill="white"
            styles={{
              height: "40px",
              ...headerTabStyles,
            }}
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: tripsIsHover ? "#2a2a2a" : "inherit",
          ...headerMasterTabDivStyles,
        }}
        onMouseEnter={() => setTripsIsHover(true)}
        onMouseLeave={() => setTripsIsHover(false)}
        onClick={() => setActivePage(PageEnum.Trips)}
      >
        <div style={headerTabDivStyles}>
          <span style={headerTabStyles}>Trips</span>
          <div
            style={{
              ...tabSelectorStyles,
              visibility: activePage === PageEnum.Trips ? "visible" : "hidden",
            }}
          ></div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: myAccIsHover ? "#2a2a2a" : "inherit",
          marginLeft: "auto",
          paddingLeft: 0,
          ...headerMasterTabDivStyles,
        }}
        onMouseEnter={() => setMyAccIsHover(true)}
        onMouseLeave={() => setMyAccIsHover(false)}
        onClick={() => setActivePage(PageEnum.MyAccount)}
      >
        <div style={headerTabDivStyles}>
          <UserIcon
            fill="white"
            styles={{
              height: "40px",
              width: "40px",
              ...headerTabStyles,
            }}
          />
          <div style={headerTabDivStyles}>
            <div
              style={{
                ...tabSelectorStyles,
                visibility:
                  activePage === PageEnum.MyAccount ? "visible" : "hidden",
              }}
            ></div>
            <span style={{ color: "white" }}>
              {JSON.parse(sessionStorage.getItem("fullName"))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavHeader;
