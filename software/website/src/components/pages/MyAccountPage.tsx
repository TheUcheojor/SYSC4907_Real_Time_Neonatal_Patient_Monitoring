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

const changePasswordButtonStyles: CSS.Properties = {
  fontSize: "20px",
};

function MyAccountPage() {
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={accountOptionsDivStyles}>
        <h3>Account Options</h3>
        {!isChangingPassword && (
          <button
            onClick={() => setIsChangingPassword(true)}
            style={changePasswordButtonStyles}
          >
            Change password
          </button>
        )}
        {isChangingPassword &&
      //   <input
      //   className="text-input"
      //   placeholder="Password"
      //   type="password"
      //   value={}
      //   onKeyUp={() => {}}
      //   onChange={() => {}}
      // />
      // <input
      //   className="text-input"
      //   placeholder="Password again"
      //   type="password"
      //   value={passwordVerify}
      //   onKeyUp={handleKeyUp}
      //   onChange={(event) => setPasswordVerify(event.target.value)}
      // />
        <span>tmp</span>}
      </div>
    </div>
  );
}

export default MyAccountPage;
