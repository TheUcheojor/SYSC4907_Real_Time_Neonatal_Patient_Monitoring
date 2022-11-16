import React, { useState } from "react";
import "css/App.css";
import "css/login.css";
import Modal from "react-modal";
import ForgotPasswordModalContent from "components/ForgotPasswordModalContent";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Login() {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div className="login">
      <img src="/baby.svg" className="baby-icon" alt="baby-icon" />
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
          <span className="login-link">No account? Sign up</span>
        </div>
        <div>
          <span className="login-link" onClick={openModal}>
            Forgot password?
          </span>
        </div>
        <Modal
          isOpen={modalOpen}
          style={customStyles}
          contentLabel="Forgot Password"
        >
          <ForgotPasswordModalContent></ForgotPasswordModalContent>
        </Modal>
      </div>
    </div>
  );
}

export default Login;
