import React, { useState, useRef } from "react";
import CSS from "csstype";
import ForgotPasswordModalContent from "components/modal/ForgotPasswordModalContent";
import Modal from "components/modal/Modal";
import SignUpModalContent from "components/modal/SignUpModalContent";
import BabyIcon from "components/icons/BabyIcon";
import LoadingIcon from "components/icons/LoadingIcon";
import { ColorEnum } from "constants/ColorEnum";
import { SERVER_HOST, SERVER_PORT } from "constants/SystemConfiguration";
import { HttpStatusEnum } from "constants/HttpStatusEnum";

const loginModalLinkSpanStyles: CSS.Properties = {
  color: ColorEnum.Link,
  fontSize: "14px",
  cursor: "pointer",
  marginTop: "8px",
};

interface LoginPageProps {
  setToken: (param: string) => void;
  onLoginError: (string) => void;
  message: string;
  messageColor: ColorEnum;
}

function LoginPage({
  message,
  messageColor,
  onLoginError,
  setToken,
}: LoginPageProps) {
  console.log("LOGIN render");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(undefined);
  const [modalTitle, setModalTitle] = useState(undefined);
  const [isFetching, setFetching] = useState(false);
  const email = useRef("");
  const password = useRef("");

  function handleLogin() {
    setFetching(true);
    let _token;
    fetch(`http://${SERVER_HOST}:${SERVER_PORT}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.current,
        password: password.current,
      }),
    })
      .then((res) => {
        if (res.status === HttpStatusEnum.OK) {
          _token = res.headers.get("Authorization").split(" ")[1];
          return res.json();
        } else {
          throw Error;
        }
      })
      .then(
        (res) => {
          sessionStorage.setItem("fullName", JSON.stringify(res.full_name));
          setToken(_token);
        },
        (error) => {
          onLoginError("Unable to authenticate");
          setFetching(false);
        }
      );
  }

  return (
    <div
      style={{
        fontSize: "calc(10px + 2vmin)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BabyIcon
        fill="black"
        styles={{
          height: "200px",
          paddingTop: "40px",
        }}
      />
      <h1>Transport Comfort Analysis</h1>
      <form
        style={{
          width: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <span
          style={{
            color: messageColor,
            marginBottom: "5px",
            wordBreak: "break-all",
            fontSize: "14px",
          }}
        >
          {message}
        </span>
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => (email.current = event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => (password.current = event.target.value)}
        />
        {!isFetching ? (
          <input
            type="submit"
            style={{ fontSize: "32px" }}
            onClick={() => {
              handleLogin();
            }}
            value="Login"
          />
        ) : (
          <LoadingIcon diameter={"30px"} parentDiameter={"50px"} />
        )}
      </form>
      <span
        style={loginModalLinkSpanStyles}
        onClick={() => {
          setModalTitle("Sign Up");
          setModalContent(<SignUpModalContent />);
          setModalOpen(true);
        }}
      >
        No account? Sign up
      </span>
      <span
        style={loginModalLinkSpanStyles}
        onClick={() => {
          setModalTitle("Forgot Password");
          setModalContent(<ForgotPasswordModalContent />);
          setModalOpen(true);
        }}
      >
        Forgot password?
      </span>
      <Modal
        title={modalTitle}
        modalOpen={modalOpen}
        closeModal={() => {
          setModalOpen(false);
        }}
      >
        {modalContent}
      </Modal>
    </div>
  );
}

export default LoginPage;
