import React, { useState, useRef } from "react";
import { PASSWORD_LENGTH_MIN } from "constants/Auth";
import LoadingIcon from "components/icons/LoadingIcon";
import { ColorEnum } from "constants/ColorEnum";
import { getFetchHeaderWithAuth } from "util/AuthUtil";
import NewPassword from "components/pages/Trips/NewPassword";
import { SERVER_HOST, SERVER_PORT } from "constants/SystemConfiguration";
import { HttpStatusEnum } from "constants/HttpStatusEnum";

interface changePasswordProps {
  setIsChangingPassword: (bool: boolean) => void;
}

function ChangePassword({ setIsChangingPassword }: changePasswordProps) {
  const oldPassword = useRef("");
  const newPassword = useRef("");
  const newPasswordVerify = useRef("");
  const [isChangePWEnabled, setIsChangePWEnabled] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [changePasswordResult, setChangePasswordResult] = useState("");

  function handleKeyUp() {
    let oldPwValid = oldPassword.current.length >= PASSWORD_LENGTH_MIN;
    let newPasswordValid = newPassword.current.length >= PASSWORD_LENGTH_MIN;
    let newPasswordVerifyValid =
      newPasswordVerify.current.length >= PASSWORD_LENGTH_MIN;

    let newPasswordMatches = newPassword.current === newPasswordVerify.current;

    setIsChangePWEnabled(
      oldPwValid &&
        newPasswordValid &&
        newPasswordVerifyValid &&
        newPasswordMatches
    );
  }

  function handleChangePassword() {
    setIsFetching(true);
    fetch(`http://${SERVER_HOST}:${SERVER_PORT}/user`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...getFetchHeaderWithAuth(),
      },
      body: JSON.stringify({
        newPassword: newPassword.current,
        oldPassword: oldPassword.current,
      }),
    }).then((res) => {
      if (res.status === HttpStatusEnum.OK) {
        setChangePasswordResult("Password succesfully changed");
        setIsSuccess(true);
      } else if (res.status === HttpStatusEnum.CONFLICT) {
        setChangePasswordResult("Password change failed");
      } else {
        setChangePasswordResult(`${res.status}: Password change failed...`);
      }
      setIsFetching(false);
    });
  }

  return (
    <form
      style={{
        maxWidth: "410px",
      }}
    >
      {changePasswordResult !== "" && (
        <p
          style={{
            color: isSuccess ? ColorEnum.Green : ColorEnum.Red,
            marginBottom: "5px",
            wordBreak: "break-all",
            marginTop: 0,
          }}
        >
          {changePasswordResult}
        </p>
      )}
      <label htmlFor="oldPassword">Old Password</label>
      <input
        type="password"
        id="oldPassword"
        onKeyUp={handleKeyUp}
        onChange={(e) => (oldPassword.current = e.target.value)}
      />
      <NewPassword
        handleKeyUp={handleKeyUp}
        onChangePW={(e) => {
          newPassword.current = e.target.value;
        }}
        onChangePWVerify={(e) => {
          newPasswordVerify.current = e.target.value;
        }}
      />
      {!isFetching ? (
        <input
          style={{
            cursor: !isChangePWEnabled || isSuccess ? "auto" : "pointer",
          }}
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
