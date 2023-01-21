import { PASSWORD_LENGTH_MIN } from "constants/Auth";
import React from "react";

interface NewPasswordProps {
  onChangePW: (e: any) => void;
  onChangePWVerify: (e: any) => void;
  handleKeyUp?: () => void;
}

function NewPassword({
  onChangePW,
  onChangePWVerify,
  handleKeyUp,
}: NewPasswordProps) {
  return (
    <div>
      <p
        style={{
          fontSize: "15px",
        }}
      >
        Password must be atleast {PASSWORD_LENGTH_MIN} characters
      </p>
      <label htmlFor="newPassword">New Password</label>
      <input
        type="password"
        id="newPassword"
        onKeyUp={handleKeyUp}
        onChange={onChangePW}
      />
      <label htmlFor="newPassword">Confirm New Password</label>
      <input
        type="password"
        id="newPasswordVerify"
        onKeyUp={handleKeyUp}
        onChange={onChangePWVerify}
      />
    </div>
  );
}

export default NewPassword;
