import React, { useState } from "react";
import CSS from "csstype";
import ChangePassword from "components/pages/MyAccount/ChangePassword";

const buttonStyles: CSS.Properties = {
  fontSize: "20px",
};

interface myAccountsPageProps {
  onLogout: () => void;
}

function MyAccountPage({ onLogout }: myAccountsPageProps) {
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
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
        }}
      >
        <h3>Account Options</h3>
        {!isChangingPassword ? (
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
        ) : (
          <ChangePassword setIsChangingPassword={setIsChangingPassword} />
        )}
      </div>
    </div>
  );
}

export default MyAccountPage;
