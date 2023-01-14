import React, { useState } from "react";
import { PASSWORD_LENGTH_MIN } from "constants/Auth";
import { LoadScript } from "@react-google-maps/api";
import LoadingIcon from "components/icons/LoadingIcon";
import { ColorEnum } from "constants/ColorEnum";
import { getFetchHeaderWithAuth } from "utility/AuthUtil";

interface changePasswordProps {
  setIsChangingPassword: (bool: boolean) => void;
}

function ChangePassword({ setIsChangingPassword }: changePasswordProps) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordVerify, setNewPasswordVerify] = useState("");
  const [isChangePWEnabled, setIsChangePWEnabled] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [changePasswordResult, setChangePasswordResult] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  function handleKeyUp() {
    let oldPwValid = oldPassword.length >= PASSWORD_LENGTH_MIN;
    let newPasswordValid = newPassword.length >= PASSWORD_LENGTH_MIN;
    let newPasswordVerifyValid =
      newPasswordVerify.length >= PASSWORD_LENGTH_MIN;

    let newPasswordMatches = newPassword === newPasswordVerify;

    setIsChangePWEnabled(
      oldPwValid &&
        newPasswordValid &&
        newPasswordVerifyValid &&
        newPasswordMatches
    );
  }

  function handleChangePassword() {
    setIsFetching(true);
    fetch(`https://localhost:3001/user`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", ...getFetchHeaderWithAuth() },
      body: JSON.stringify({
        newPassword: newPassword,
        oldPassword: oldPassword,
      }),
    }).then((res) => {
      if (res.status === 200) {
        setChangePasswordResult("Password succesfully changed");
        setIsSuccess(true);
      } else if (res.status === 409) {
        setChangePasswordResult("Password change failed");
      } else {
        setChangePasswordResult(`${res.status}: Password change failed...`);
      }
      setIsFetching(false);
    });
  }

  return (
    <form>
      {changePasswordResult !== "" && (
        <span
          style={{
            color: isSuccess ? ColorEnum.Green : ColorEnum.Red,
            marginBottom: "5px",
            maxWidth: "305px",
            wordBreak: "break-all",
          }}
        >
          {changePasswordResult}
        </span>
      )}
      <div>
        <label htmlFor="oldPassword">Old Password</label>
        <input
          type="password"
          id="oldPassword"
          value={oldPassword}
          onKeyUp={handleKeyUp}
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </div>
      <span
        style={{
          fontSize: "15px",
        }}
      >
        Password must be atleast {PASSWORD_LENGTH_MIN} characters
      </span>
      <div>
        <label htmlFor="newPassword">New Password</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onKeyUp={handleKeyUp}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="newPassword">New Password again</label>
        <input
          type="password"
          id="newPasswordVerify"
          value={newPasswordVerify}
          onKeyUp={handleKeyUp}
          onChange={(e) => setNewPasswordVerify(e.target.value)}
        />
      </div>
      {!isFetching ? (
        <input
          type="submit"
          value={"Change Password"}
          disabled={!isChangePWEnabled || isSuccess}
          onClick={() => handleChangePassword()}
        />
      ) : (
        <LoadingIcon diameter="30px" parentDiameter="50px" />
      )}
      <button
        style={{ marginLeft: "8px" }}
        disabled={isFetching}
        onClick={() => setIsChangingPassword(false)}
      >
        Go Back
      </button>
    </form>
  );
}

export default ChangePassword;
