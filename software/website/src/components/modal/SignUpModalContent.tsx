import React, { useState } from "react";
import CSS from "csstype";
import "css/App.css";
import LoadingIcon from "components/icons/LoadingIcon";
import { ColorEnum } from "constants/ColorEnum";

function SignUpModalContent() {
  console.log("SUMC RENDER");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [signUpResult, setSignUpResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFetching, setFetching] = useState(false);
  const [isEnabled, setEnabled] = useState(false);

  const validEmailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;

  const modalDivStyles: CSS.Properties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const passwordGuideStyles: CSS.Properties = {
    fontSize: "15px",
  };

  function handleSignUp() {
    setFetching(true);
    fetch(`https://localhost:3001/signUp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        full_name: fullName,
      }),
    }).then((res) => {
      if (res.status === 200) {
        setSignUpResult("Sign up success!");
        setIsSuccess(true);
      } else if (res.status === 409) {
        setSignUpResult(
          "Sign up failed, account using this email already exists"
        );
      } else {
        setSignUpResult(`${res.status}: Sign up failed...`);
      }
      setFetching(false);
    });
  }

  function handleKeyUp() {
    let regexMatches = email.trim().match(validEmailRegex);
    let regexMatch =
      regexMatches != null && regexMatches.length > 0 ? regexMatches[0] : null;

    let fullNameValid = fullName.length > 1 && fullName.length < 255;
    let emailValid =
      regexMatch != null && regexMatch.length === email.trim().length;
    let passwordValid = password.length >= 8 && password.length <= 16;
    let passwordVerifyValid =
      passwordVerify.length >= 8 && passwordVerify.length <= 16;
    let passwordsMatch = password === passwordVerify;

    if (
      fullNameValid &&
      emailValid &&
      passwordValid &&
      passwordVerifyValid &&
      passwordsMatch
    )
      setEnabled(true);
    else setEnabled(false);
  }

  return (
    <div style={modalDivStyles}>
      {signUpResult !== "" && (
        <span
          style={{
            color: isSuccess ? ColorEnum.Green : ColorEnum.Red,
            marginBottom: "5px",
            maxWidth: "305px",
            wordBreak: "break-all",
          }}
        >
          {signUpResult}
        </span>
      )}
      <input
        className="text-input"
        placeholder="Full Name"
        value={fullName}
        onKeyUp={handleKeyUp}
        onChange={(event) => setFullName(event.target.value)}
      />
      <input
        className="text-input"
        placeholder="Email"
        value={email}
        onKeyUp={handleKeyUp}
        onChange={(event) => setEmail(event.target.value)}
      />
      <span style={passwordGuideStyles}>
        Password must be within 8-16 characters
      </span>
      <input
        className="text-input"
        placeholder="Password"
        type="password"
        value={password}
        onKeyUp={handleKeyUp}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input
        className="text-input"
        placeholder="Password again"
        type="password"
        value={passwordVerify}
        onKeyUp={handleKeyUp}
        onChange={(event) => setPasswordVerify(event.target.value)}
      />
      {!isFetching ? (
        <button
          style={{
            fontSize: "16px",
            cursor: !isEnabled || isSuccess ? "auto" : "pointer",
          }}
          disabled={!isEnabled || isSuccess}
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      ) : (
        <LoadingIcon diameter={"30px"} parentDiameter={"50px"} />
      )}
    </div>
  );
}

export default SignUpModalContent;
