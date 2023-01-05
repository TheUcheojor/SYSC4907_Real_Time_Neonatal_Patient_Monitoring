import React, { useState } from "react";
import CSS from "csstype";

const accountOptionsDivStyles: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  width: "fit-content",
  marginLeft: "20px",
  marginTop: "20px",
  border: "2px solid black",
  borderRadius: "6px",
  paddingTop: "5px",
  paddingLeft: "10px",
  paddingRight: "10px",
  paddingBottom: "10px",
};

const buttonStyles: CSS.Properties = {
  fontSize: "20px",
};

const inputStyles: CSS.Properties = {
  width: "100%",
};

interface myAccountsPageProps {
  onLogout: () => void;
}

function MyAccountPage({ onLogout }: myAccountsPageProps) {
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={accountOptionsDivStyles}>
        <h3>Account Options</h3>
        {!isChangingPassword && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              onClick={() => setIsChangingPassword(true)}
              style={buttonStyles}
            >
              Change password
            </button>
            <button
              onClick={() => {
                sessionStorage.clear();
                onLogout();
              }}
              style={{ ...buttonStyles, marginTop: "5px" }}
            >
              Logout
            </button>
          </div>
        )}
        {isChangingPassword && (
          <div>
            <div>
              <label htmlFor="oldPassword">Old Password</label>
              <input type="password" id="oldPassword" style={inputStyles} />
            </div>
            <div>
              <label htmlFor="newPassword">New Password</label>
              <input type="password" id="newPassword" style={inputStyles} />
            </div>
            <div>
              <label htmlFor="newPassword">New Password again</label>
              <input type="password" id="newPassword" style={inputStyles} />
            </div>
            <button style={{ fontSize: "20px" }}>Change Password</button>
            <button
              style={{ fontSize: "20px", marginLeft: "8px" }}
              onClick={() => setIsChangingPassword(false)}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyAccountPage;
