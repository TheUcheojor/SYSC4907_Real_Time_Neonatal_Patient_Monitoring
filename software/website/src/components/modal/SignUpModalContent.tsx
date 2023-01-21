import React, { useState } from "react";
import "css/App.css";
import LoadingIcon from "components/icons/LoadingIcon";
import { ColorEnum } from "constants/ColorEnum";
import { PASSWORD_LENGTH_MIN, VALID_EMAIL_REGEX } from "constants/Auth";

function SignUpModalContent() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [signUpResult, setSignUpResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  
  function handleSignUp() {
    setIsFetching(true);
    setIsEnabled(false);
    fetch(`https://localhost:3001/user`, {
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
        setIsEnabled(true);
      } else {
        setSignUpResult(`${res.status}: Sign up failed...`);
        setIsEnabled(true);
      }
      setIsFetching(false);
    });
  }

  function handleKeyUp() {
    let regexMatches = email.trim().match(VALID_EMAIL_REGEX);
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
