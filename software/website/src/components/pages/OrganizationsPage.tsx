import React, { useState } from "react";
import CSS from "csstype";
import SearchIcon from "components/icons/SearchIcon";
import LeaveOrgIcon from "components/icons/LeaveOrgIcon";
import HammerIcon from "components/icons/HammerIcon";
import TestMap from "components/testMap";

const MOCK_USERS = [
  {
    name: "Jon Apple",
    role: "Owner",
  },
  {
    name: "Jon Apple",
    role: "Admin",
  },
  {
    name: "Bob Apple",
    role: "Member",
  },
  {
    name: "Bob Apple",
    role: "Member",
  },
  {
    name: "Bob Apple",
    role: "Member",
  },
  {
    name: "Bob Apple",
    role: "Member",
  },
  {
    name: "Mark Apple",
    role: "Member",
  },
  {
    name: "Jon Apple",
    role: "Owner",
  },
  {
    name: "Jon Apple",
    role: "Admin",
  },
  {
    name: "Bob Apple",
    role: "Member",
  },
  {
    name: "Bob Apple",
    role: "Member",
  },
  {
    name: "Bob Apple",
    role: "Member",
  },
  {
    name: "Bob Apple",
    role: "Member",
  },
  {
    name: "Mark Apple",
    role: "Member",
  },
  {
    name: "Jon Apple",
    role: "Owner",
  },
  {
    name: "Jon Apple",
    role: "Admin",
  },
  {
    name: "Bob Apple",
    role: "Member",
  },
  {
    name: "Bob Apple",
    role: "Member",
  },
  {
    name: "Bob Apple",
    role: "Member",
  },
  {
    name: "Bob Apple",
    role: "Member",
  },
  {
    name: "Mark Apple",
    role: "Member",
  },
  {
    name: "Jon Apple",
    role: "Owner",
  },
  {
    name: "Jon Apple",
    role: "Admin",
  },
  {
    name: "Bob Apple",
    role: "Member",
  },
  {
    name: "Bob Apple",
    role: "Member",
  },
  {
    name: "Bob Apple",
    role: "Member",
  },
  {
    name: "Bob Apple",
    role: "Member",
  },
  {
    name: "Mark Apple",
    role: "Member",
  },
];

const memberItemStyles: CSS.Properties = {
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
  backgroundColor: "black",
  borderRadius: "6px",
  width: "328px",
};

function OrganizationsPage() {
  const [searchValue, setSearchValue] = useState("");
  const [isDisbandHover, setIsDisbandIconHover] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          height: "100%",
          marginLeft: "20px",
        }}
      >
        <span style={{ fontWeight: 600, marginTop: "16px" }}>Members</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "10px",
            width: "100%",
          }}
        >
          <SearchIcon styles={{ width: "28px", height: "28px" }} />
          <input
            type="text"
            style={{ margin: 0 }}
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value.toLowerCase());
            }}
          ></input>
        </div>
        <div
          style={{
            marginTop: "12px",
            height: "calc(98vh - 70px - 35px - 45px - 12px)",
            overflow: "auto",
            display: "flex",
          }}
        >
          <ul style={{ padding: 0, marginTop: 0 }}>
            {MOCK_USERS.filter(
              (user) =>
                user.name.toLowerCase().includes(searchValue) ||
                user.role.toLowerCase().includes(searchValue)
            ).map((user) => (
              <div style={memberItemStyles}>
                <div>
                  <div
                    style={{
                      paddingTop: "5px",
                      paddingLeft: "10px",
                      color: "white",
                    }}
                  >
                    {user.name}
                  </div>
                  <div>
                    <span
                      style={{
                        paddingLeft: "14px",
                        color: "white",
                        fontSize: "12px",
                      }}
                    >
                      {user.role}
                    </span>
                  </div>
                </div>
                <div style={{ marginLeft: "auto" }}>button area</div>
              </div>
            ))}
          </ul>
          <div style={{ width: "2px" }} />
        </div>
      </div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          height: "100%",
          marginLeft: "20px",
        }}
      >
        <h1>Hello, John Apple</h1>
        <h1>you are member of</h1>
        <h1>CHEO organization</h1>
        <span>Join Code: XYZ</span>
      </div>
      <div style={{ marginTop: "5px", marginLeft: "auto", marginRight: "5px" }}>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "6px",
            width: "fit-content",
            padding: 0,
          }}
        >
          <LeaveOrgIcon
            fill="#ffffff"
            styles={{ width: "50px", height: "50px" }}
          />
        </button>
      </div>
      <div style={{ marginTop: "5px", marginRight: "5px" }}>
        <button
          onMouseEnter={() => {
            setIsDisbandIconHover(true);
          }}
          onMouseLeave={() => {
            setIsDisbandIconHover(false);
          }}
          style={{
            backgroundColor: isDisbandHover ? "#ff6c6c" : "#FF5C5C",
            border: 0,
            display: "flex",
            alignItems: "center",
            borderRadius: "6px",
            width: "fit-content",
            padding: 0,
          }}
        >
          <TestMap />
          <HammerIcon
            fill="#ffffff"
            styles={{ width: "50px", height: "50px" }}
          />
        </button>
      </div>
    </div>
  );
}

export default OrganizationsPage;
