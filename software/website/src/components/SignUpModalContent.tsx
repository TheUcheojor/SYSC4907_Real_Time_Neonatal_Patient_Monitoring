import React, { useState } from "react";
import CSS from "csstype";
import "css/App.css";

function SignUpModalContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [isEnabled, setEnabled] = useState(false);

  const validEmailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;

  const sendTempStyles: CSS.Properties = {
    fontSize: "16px",
    marginTop: "10px",
  };

  const modalDivStyles: CSS.Properties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const passwordGuideStyles: CSS.Properties = {
    fontSize: "15px",
  };

  function signUp() {
    console.log("Send temp password for: " + email);
  }

  function handleKeyUp() {
    console.log(password);
    let regexMatches = email.trim().match(validEmailRegex);
    let regexMatch =
      regexMatches != null && regexMatches.length > 0 ? regexMatches[0] : null;
    let emailValid =
      regexMatch != null && regexMatch.length === email.trim().length;
    let passwordValid = password.length >= 8 && password.length <= 16;
    let passwordVerifyValid =
      passwordVerify.length >= 8 && passwordVerify.length <= 16;
    let passwordsMatch = password === passwordVerify;
    if (emailValid && passwordValid && passwordVerifyValid && passwordsMatch)
      setEnabled(true);
    else setEnabled(false);
  }

  return (
    <div style={modalDivStyles}>
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
      <button style={sendTempStyles} disabled={!isEnabled} onClick={signUp}>
        Sign Up
      </button>
    </div>
  );
}

export default SignUpModalContent;
