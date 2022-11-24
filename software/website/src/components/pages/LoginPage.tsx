import React, { useState } from "react";
import "css/App.css";
import CSS from "csstype";
import ForgotPasswordModalContent from "components/modal/ForgotPasswordModalContent";
import Modal from "components/modal/Modal";
import SignUpModalContent from "components/modal/SignUpModalContent";
import BabyIcon from "components/icons/BabyIcon";

const loginDivStyles: CSS.Properties = {
  textAlign: "center",
  fontSize: "calc(10px + 2vmin)",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
};

const loginModalLinkSpanStyles: CSS.Properties = {
  color: "#1877f2",
  fontSize: "14px",
  cursor: "pointer",
  width: "100%",
};

interface LoginPageProps {
  setToken: (param: boolean) => void;
}

function LoginPage({ setToken }: LoginPageProps) {
  const [forgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);

  const babyIconStyles: CSS.Properties = {
    height: "200px",
    paddingTop: "40px",
  };

  function closeModal() {
    setSignUpModalOpen(false);
    setForgotPasswordModalOpen(false);
  }

  return (
    <div style={loginDivStyles}>
      <BabyIcon fill="black" styles={babyIconStyles} />
      <div style={{ display: "flex", flexDirection:'column', alignItems: "center" }}>
        <h1>Transport Comfort Analysis</h1>
        <div style={{ width: "300px" }}>
          <input type="text" placeholder="Email" />
        </div>
        <div style={{ width: "300px" }}>
          <input type="password" placeholder="Password" />
        </div>
        <div>
          <button style={{ fontSize: "32px" }} onClick={() => setToken(true)}>
            Login
          </button>
        </div>
        <div>
          {" "}
          <span
            style={loginModalLinkSpanStyles}
            onClick={() => setSignUpModalOpen(true)}
          >
            No account? Sign up
          </span>
        </div>
        <div>
          <span
            style={loginModalLinkSpanStyles}
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
