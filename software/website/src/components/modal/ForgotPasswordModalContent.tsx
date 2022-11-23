import React, { useState } from "react";
import CSS from "csstype";
import "css/App.css";

function ForgotPasswordModalContent() {
  const [email, setEmail] = useState("");
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

  function sendTemporaryPassword() {
    console.log(email);
  }

  function handleKeyUp() {
    let regexMatches = email.trim().match(validEmailRegex);
    let regexMatch =
      regexMatches != null && regexMatches.length > 0 ? regexMatches[0] : null;
    if (regexMatch != null && regexMatch.length === email.trim().length)
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
      <button
        style={sendTempStyles}
        disabled={!isEnabled}
        onClick={sendTemporaryPassword}
      >
        Send temporary password
      </button>
    </div>
  );
}

export default ForgotPasswordModalContent;
