import React, { useState, useRef } from "react";
import LoadingIcon from "components/icons/LoadingIcon";
import { ColorEnum } from "constants/ColorEnum";
import { PASSWORD_LENGTH_MIN, VALID_EMAIL_REGEX } from "constants/Auth";
import { SERVER_HOST, SERVER_PORT } from "constants/SystemConfiguration";
import { HttpStatusEnum } from "constants/HttpStatusEnum";

function SignUpModalContent() {
  const fullName = useRef("");
  const email = useRef("");
  const password = useRef("");
  const passwordVerify = useRef("");
  const [signUpResult, setSignUpResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  function handleSignUp() {
    setIsFetching(true);
    setIsEnabled(false);
    fetch(
      `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/user`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.current,
          password: password,
          full_name: fullName,
        }),
      }
    ).then((res) => {
      if (res.status === HttpStatusEnum.OK) {
        setSignUpResult("Sign up success!");
        setIsSuccess(true);
      } else if (res.status === HttpStatusEnum.CONFLICT) {
        setSignUpResult(
          "Sign up failed, account using this email already exists"
        );
        setIsEnabled(true);
      } else {
        setSignUpResult(`${res.status}: Sign up failed...`);
        setIsEnabled(true);
      }
      setIsFetching(false);
    });
  }

  function handleKeyUp() {
    let regexMatches = email.current.trim().match(VALID_EMAIL_REGEX);
    let regexMatch =
      regexMatches != null && regexMatches.length > 0 ? regexMatches[0] : null;

    let fullNameValid =
      fullName.current.length > 1 && fullName.current.length < 255;
    let emailValid =
      regexMatch != null && regexMatch.length === email.current.trim().length;
    let passwordValid =
      password.current.length >= 8 && password.current.length <= 16;
    let passwordVerifyValid =
      passwordVerify.current.length >= 8 && passwordVerify.current.length <= 16;
    let passwordsMatch = password === passwordVerify;

    if (
      fullNameValid &&
      emailValid &&
      passwordValid &&
      passwordVerifyValid &&
      passwordsMatch
    )
      setIsEnabled(true);
    else setIsEnabled(false);
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
      {signUpResult !== "" && (
        <span
          style={{
            color: isSuccess ? ColorEnum.Green : ColorEnum.Red,
            marginBottom: "5px",
            wordBreak: "break-all",
          }}
        >
          {signUpResult}
        </span>
      )}
      <input
        className="text-input"
        placeholder="Full Name"
        onKeyUp={handleKeyUp}
        onChange={(e) => (fullName.current = e.target.value)}
      />
      <input
        className="text-input"
        placeholder="Email"
        onKeyUp={handleKeyUp}
        onChange={(e) => (email.current = e.target.value)}
      />
      <span
        style={{
          fontSize: "15px",
        }}
      >
        Password must be atleast {PASSWORD_LENGTH_MIN} characters
      </span>
      <input
        className="text-input"
        placeholder="Password"
        type="password"
        onKeyUp={handleKeyUp}
        onChange={(e) => (password.current = e.target.value)}
      />
      <input
        className="text-input"
        placeholder="Password again"
        type="password"
        onKeyUp={handleKeyUp}
        onChange={(e) => (passwordVerify.current = e.target.value)}
      />
      {!isFetching ? (
        <input
          type="submit"
          disabled={!isEnabled}
          onClick={handleSignUp}
          value={"Sign Up"}
        />
      ) : (
        <LoadingIcon diameter={"30px"} parentDiameter={"50px"} />
      )}
    </form>
  );
}

export default SignUpModalContent;
