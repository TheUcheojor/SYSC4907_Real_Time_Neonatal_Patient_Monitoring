import React, { useState } from "react";
import "css/App.css";

function ForgotPasswordModalContent() {
  const [email, setEmail] = useState("");
  const [isEnabled, setEnabled] = useState(true);

  function sendTemporaryPassword() {}

  function handleKeyUp() {
    if (email.length > 0 && email.includes("@") && email.includes("."))
      setEnabled(true);
    else setEnabled(false);
  }

  return (
    <div>
      <h2 className="modal-header2">Forgot your password</h2>
      <input
        className="text-input"
        placeholder="Email"
        value={email}
        onKeyUp={handleKeyUp}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button disabled={!isEnabled} onClick={sendTemporaryPassword}>
        Send temporary password
      </button>
    </div>
  );
}

export default ForgotPasswordModalContent;
