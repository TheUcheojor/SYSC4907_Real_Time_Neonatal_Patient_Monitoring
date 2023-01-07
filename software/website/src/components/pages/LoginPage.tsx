import React, { useState, useRef } from "react";
import "css/App.css";
import CSS from "csstype";
import ForgotPasswordModalContent from "components/modal/ForgotPasswordModalContent";
import Modal from "components/modal/Modal";
import SignUpModalContent from "components/modal/SignUpModalContent";
import BabyIcon from "components/icons/BabyIcon";
import LoadingIcon from "components/icons/LoadingIcon";
import { ColorEnum } from "constants/ColorEnum";

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
  color: ColorEnum.Link,
  fontSize: "14px",
  cursor: "pointer",
  width: "100%",
};

interface LoginPageProps {
  setToken: (param: string) => void;
}

function LoginPage({ setToken }: LoginPageProps) {
  console.log("LOGIN render");
  const [forgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isFetching, setFetching] = useState(false);
  const email = useRef("");
  const password = useRef("");

  function closeModal() {
    setSignUpModalOpen(false);
    setForgotPasswordModalOpen(false);
  }
  console.log("LOGIN render");

  function handleLogin() {
    setFetching(true);
    let _token;
    console.log(email.current, password.current);
    fetch(`https://localhost:3001/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.current,
        password: password.current,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          _token = res.headers.get("Authorization").split(" ")[1];
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then(
        (res) => {
          sessionStorage.setItem("fullName", JSON.stringify(res.full_name));
          setToken(_token);
          setFetching(false);
        },
        (error) => {
          setFetching(false);
          setLoginError("Unable to authenticate");
        }
      );
  }

  return (
    <div style={loginDivStyles}>
      <BabyIcon
        fill="black"
        styles={{
          height: "200px",
          paddingTop: "40px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Transport Comfort Analysis</h1>
        <form>
          <div style={{ width: "300px" }}>
            {loginError !== "" && (
              <span
                style={{
                  color: ColorEnum.Red,
                  marginBottom: "5px",
                  wordBreak: "break-all",
                  fontSize: "14px",
                }}
              >
                {loginError}
              </span>
            )}
            <input
              type="email"
              placeholder="Email"
              onChange={(event) => (email.current = event.target.value)}
            />
          </div>
          <div style={{ width: "300px" }}>
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => (password.current = event.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
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
          </div>
        </form>
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
          <SignUpModalContent />
        </Modal>
      </div>
    </div>
  );
}

export default LoginPage;
