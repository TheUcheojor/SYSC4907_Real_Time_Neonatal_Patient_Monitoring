import React, { useState } from "react";
import CSS from "csstype";
import SearchIcon from "components/icons/SearchIcon";
import { render } from "@testing-library/react";

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
  marginBottom: "10px",
  backgroundColor: "black",
  borderRadius: "6px",
  width: "328px",
};

function OrganizationsPage() {
  const [searchValue, setSearchValue] = useState("");

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
          style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
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
          style={{ marginTop: "12px", height: 'calc(98vh - 70px - 35px - 45px - 12px)', overflow: "auto" }}
        >
          <ul style={{ padding: 0 }}>
            {MOCK_USERS.filter(
              (user) =>
                user.name.toLowerCase().includes(searchValue) ||
                user.role.toLowerCase().includes(searchValue)
            ).map((user) => (
              <div style={memberItemStyles}>
                <span
                  style={{
                    marginTop: "5px",
                    paddingLeft: "10px",
                    color: "white",
                  }}
                >
                  {user.name}
                </span>
                <div>
                  <span
                    style={{
                      paddingTop: "5px",
                      paddingLeft: "14px",
                      color: "white",
                      fontSize: "12px",
                    }}
                  >
                    {user.role}
                  </span>
                </div>
              </div>
            ))}
          </ul>
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
    </div>
  );
}

export default OrganizationsPage;
