import React, { useState, useRef } from "react";
import LoadingIcon from "components/icons/LoadingIcon";
import { ColorEnum } from "constants/ColorEnum";
import { VALID_EMAIL_REGEX } from "constants/Auth";
import { HttpStatusEnum } from "constants/HttpStatusEnum";

function ForgotPasswordModalContent() {
  const email = useRef("");
  const [isFetching, setIsFetching] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [requestResetResult, setRequestResetResult] = useState("");
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  function handleSubmit() {
    setIsFetching(true);
    setIsSubmitEnabled(false);
    fetch(
      `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/forgotPassword`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.current,
        }),
      }
    ).then((res) => {
      if (res.status === HttpStatusEnum.OK) {
        setIsSuccess(true);
        setRequestResetResult(
          "If an account is associated with this email, a reset email will be sent"
        );
      } else if (res.status === HttpStatusEnum.CONFLICT) {
        setRequestResetResult("Request reset failed");
        setIsSubmitEnabled(true);
      } else {
        setRequestResetResult(`${res.status}: Request reset failed...`);
        setIsSubmitEnabled(true);
      }
      setIsFetching(false);
    });
  }

  function handleKeyUp() {
    let regexMatches = email.current.trim().match(VALID_EMAIL_REGEX);
    let regexMatch =
      regexMatches != null && regexMatches.length > 0 ? regexMatches[0] : null;
    if (regexMatch != null && regexMatch.length === email.current.trim().length)
      setIsSubmitEnabled(true);
    else setIsSubmitEnabled(false);
  }

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "305px",
      }}
    >
      {requestResetResult !== "" && (
        <p
          style={{
            color: isSuccess ? ColorEnum.Black : ColorEnum.Red,
            marginBottom: "5px",
            wordBreak: "break-all",
            marginTop: 0,
          }}
        >
          {requestResetResult}
        </p>
      )}
      <input
        className="text-input"
        placeholder="Email"
        onKeyUp={handleKeyUp}
        onChange={(e) => (email.current = e.target.value)}
      />
      {!isFetching ? (
        <input
          type="submit"
          disabled={!isSubmitEnabled}
          onClick={handleSubmit}
          value={"Send Reset Link"}
        />
      ) : (
        <LoadingIcon diameter={"30px"} parentDiameter={"50px"} />
      )}
    </form>
  );
}

export default ForgotPasswordModalContent;
