import React, { useState } from "react";
import CSS from "csstype";
import BabyIcon from "components/icons/BabyIcon";
import UserIcon from "components/icons/UserIcon";
import { PageEnum } from "constants/PageEnum";

const headerStyles: CSS.Properties = {
  width: "100%",
  height: "70px",
  backgroundColor: "black",
  display: "flex",
  alignItems: "center",
};

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

const babyIconStyles: CSS.Properties = {
  height: "40px",
  ...headerTabStyles,
};

const myAccIconStyles: CSS.Properties = {
  height: "40px",
  width: "50px",
  ...headerTabStyles,
};

interface NavHeaderProps {
  activePage: PageEnum;
  setActivePage: (param: PageEnum) => void;
}

function NavHeader({ activePage, setActivePage }: NavHeaderProps) {
  const [organizationIsHover, setOrganizationIsHover] = useState(false);
  const [iconIsHover, setIconIsHover] = useState(false);
  const [tripsIsHover, setTripsIsHover] = useState(false);
  const [myAccIsHover, setMyAccIsHover] = useState(false);

  const headerMasterTabDivStylesIcon: CSS.Properties = {
    backgroundColor: iconIsHover ? "#2b2a2a" : "inherit",
    ...headerMasterTabDivStyles,
  };

  const headerMasterTabDivStylesOrganization: CSS.Properties = {
    backgroundColor: organizationIsHover ? "#2b2a2a" : "inherit",
    ...headerMasterTabDivStyles,
  };

  const headerMasterTabDivStylesTrips: CSS.Properties = {
    backgroundColor: tripsIsHover ? "#2b2a2a" : "inherit",
    ...headerMasterTabDivStyles,
  };

  const headerMasterTabDivStylesMyAcc: CSS.Properties = {
    backgroundColor: myAccIsHover ? "#2b2a2a" : "inherit",
    marginLeft: "auto",
    ...headerMasterTabDivStyles,
  };

  return (
    <div style={headerStyles}>
      <div
        style={headerMasterTabDivStylesIcon}
        onMouseEnter={() => setIconIsHover(true)}
        onMouseLeave={() => setIconIsHover(false)}
        onClick={() => setActivePage(PageEnum.Organization)}
      >
        <div style={headerTabDivStyles}>
          <BabyIcon fill="white" styles={babyIconStyles} />
        </div>
      </div>
      <div
        style={headerMasterTabDivStylesOrganization}
        onMouseEnter={() => setOrganizationIsHover(true)}
        onMouseLeave={() => setOrganizationIsHover(false)}
        onClick={() => setActivePage(PageEnum.Organization)}
      >
        <div style={headerTabDivStyles}>
          <span style={headerTabStyles}>Organizations</span>
          <div
            style={{
              ...tabSelectorStyles,
              visibility:
                activePage === PageEnum.Organization ? "visible" : "hidden",
            }}
          ></div>
        </div>
      </div>
      <div
        style={headerMasterTabDivStylesTrips}
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
        style={{...headerMasterTabDivStylesMyAcc, ...{paddingLeft: 0}}}
        onMouseEnter={() => setMyAccIsHover(true)}
        onMouseLeave={() => setMyAccIsHover(false)}
        onClick={() => setActivePage(PageEnum.MyAccount)}
      >
        <div style={headerTabDivStyles}>
          <UserIcon fill="white" styles={myAccIconStyles} />
          <div style={headerTabDivStyles}>
            <div
              style={{
                ...tabSelectorStyles,
                visibility:
                  activePage === PageEnum.MyAccount ? "visible" : "hidden",
              }}
            ></div>
            <span style={{ color: "white" }}>My Account</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavHeader;
