import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import LoadingIcon from "components/icons/LoadingIcon";
import { PASSWORD_LENGTH_MIN } from "constants/Auth";
import { ColorEnum } from "constants/ColorEnum";
import NewPassword from "components/pages/Trips/NewPassword";
import { SERVER_HOST, SERVER_PORT } from "constants/SystemConfiguration";
import { HttpStatusEnum } from "constants/HttpStatusEnum";

interface resetPasswordProps {
  onReset: () => void;
}

function ResetPasswordPage({ onReset }: resetPasswordProps) {
  const newPassword = useRef("");
  const newPasswordVerify = useRef("");
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [resetPasswordResult, setResetPasswordResult] = useState("");

  const { resetCode } = useParams();
  console.log(resetCode);

  function handleResetPassword() {
    setIsFetching(true);
    fetch(
      `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/forgotPassword`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resetCode}`,
        },
        body: JSON.stringify({
          newPassword: newPassword.current,
        }),
      }
    ).then((res) => {
      if (res.status === HttpStatusEnum.OK) {
        onReset();
      } else if (res.status === HttpStatusEnum.CONFLICT) {
        setResetPasswordResult("Password change failed");
      } else {
        setResetPasswordResult(`${res.status}: Password change failed...`);
      }
      setIsFetching(false);
    });
  }

  function handleKeyUp() {
    let newPasswordValid = newPassword.current.length >= PASSWORD_LENGTH_MIN;
    let newPasswordVerifyValid =
      newPasswordVerify.current.length >= PASSWORD_LENGTH_MIN;

    let newPasswordMatches = newPassword.current === newPasswordVerify.current;

    setIsSubmitEnabled(
      newPasswordValid && newPasswordVerifyValid && newPasswordMatches
    );
  }

  return (
    <form
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
        maxWidth: "410px",
      }}
    >
      {resetPasswordResult !== "" && (
        <p
          style={{
            color: ColorEnum.Red,
            marginBottom: "5px",
            wordBreak: "break-all",
            marginTop: 0,
          }}
        >
          {resetPasswordResult}
        </p>
      )}
      <NewPassword
        onChangePW={(e) => {
          newPassword.current = e.target.value;
        }}
        onChangePWVerify={(e) => {
          newPasswordVerify.current = e.target.value;
        }}
        handleKeyUp={handleKeyUp}
      />
      {!isFetching ? (
        <input
          type="submit"
          value={"Change Password"}
          disabled={!isSubmitEnabled}
          onClick={handleResetPassword}
        />
      ) : (
        <LoadingIcon diameter="30px" parentDiameter="50px" />
      )}
    </form>
  );
}

export default ResetPasswordPage;
