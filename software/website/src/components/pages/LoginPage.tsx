import React, { useState } from "react";
import "css/App.css";
import "css/login.css";
import CSS from "csstype";
import ForgotPasswordModalContent from "components/ForgotPasswordModalContent";
import Modal from "components/Modal";
import SignUpModalContent from "components/SignUpModalContent";
import NavHeader from "components/NavHeader";

function LoginPage() {
  const [forgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);

  const babyIconStyles: CSS.Properties = {
    height: "200px",
    paddingTop: "40px"
  };

  function closeModal() {
    setSignUpModalOpen(false);
    setForgotPasswordModalOpen(false);
  }

  return (
    <div className="login">
      <NavHeader></NavHeader>
      <img
        style={babyIconStyles}
        src="/baby.svg"
        className="baby-icon"
        alt="baby-icon"
      />
      <div>
        <h1>Transport Comfort Analysis</h1>
        <div className="input-container">
          <input className="text-input" type="text" placeholder="Email" />
        </div>
        <div className="input-container">
          <input
            className="text-input"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="button-container">
          <button>Login</button>
        </div>
        <div>
          <span className="login-link" onClick={() => setSignUpModalOpen(true)}>
            No account? Sign up
          </span>
        </div>
        <div>
          <span
            className="login-link"
            onClick={() => setForgotPasswordModalOpen(true)}
          >
            Forgot password?
          </span>
        </div>
        <Modal
          title="Forgot your password"
          modalOpen={forgotPasswordModalOpen}
          closeModal={closeModal}
        >
          <ForgotPasswordModalContent></ForgotPasswordModalContent>
        </Modal>
        <Modal
          title="Sign up"
          modalOpen={signUpModalOpen}
          closeModal={closeModal}
        >
          <SignUpModalContent></SignUpModalContent>
        </Modal>
      </div>
    </div>
  );
}

export default LoginPage;
