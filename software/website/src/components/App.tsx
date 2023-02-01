import React, { useState } from "react";
import "css/App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavHeader from "components/NavHeader";
import LoginPage from "components/pages/LoginPage";
import OrganizationsPage from "components/pages/OrganizationsPage";
import TripsPage from "components/pages/Trips/TripsPage";
import MyAccountPage from "components/pages/MyAccount/MyAccountPage";
import ResetPasswordPage from "components/pages/ResetPasswordPage";
import useToken from "auth/useToken";
import { PageEnum } from "constants/PageEnum";
import { ColorEnum } from "constants/ColorEnum";

function App() {
  const [activePage, setActivePage] = useState(PageEnum.DefaultLandingPage);
  const { token, setToken } = useToken();
  const [loginMessage, setLoginMessage] = useState("");
  const [loginMessageColor, setLoginMessageColor] = useState(ColorEnum.Black);

  const navigate = useNavigate();

  function onLogout() {
    setToken(null);
    setActivePage(PageEnum.DefaultLandingPage);
    setLoginMessageColor(ColorEnum.Red);
  }

  function renderActivePage() {
    switch (activePage) {
      case PageEnum.Organization:
        return <OrganizationsPage />;
      case PageEnum.Trips:
        return (
          <TripsPage
            onLogout={() => {
              onLogout();
              setLoginMessage("Session expired");
            }}
          />
        );
      case PageEnum.MyAccount:
        return <MyAccountPage onLogout={onLogout} />;
      case PageEnum.DefaultLandingPage:
        return (
          <TripsPage
            onLogout={() => {
              onLogout();
              setLoginMessage("Session expired");
            }}
          />
        );
    }
  }

  return (
    <Routes>
      <Route
        path="/resetPassword/:resetCode"
        element={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
            }}
          >
            <ResetPasswordPage
              onReset={() => {
                navigate("/");
                setLoginMessage("Successfully reset password");
                setLoginMessageColor(ColorEnum.Green);
              }}
            />
          </div>
        }
      />
      <Route
        path="/"
        element={
          <div>
            {token === null ? (
              <LoginPage
                setToken={(string) => {
                  setToken(string);
                  setLoginMessage("");
                }}
                onLoginError={(str) => {
                  setLoginMessage(str);
                  setLoginMessageColor(ColorEnum.Red);
                }}
                message={loginMessage}
                messageColor={loginMessageColor}
              />
            ) : (
              <div className="App" style={{ overflow: "overlay" }}>
                <NavHeader
                  activePage={activePage}
                  setActivePage={setActivePage}
                />
                <div
                  className="App-Content"
                  style={{
                    overflow: "auto",
                    minHeight: "calc(100vh - 70px)",
                    height: "1px",
                  }}
                >
                  {renderActivePage()}
                </div>
              </div>
            )}
          </div>
        }
      />
    </Routes>
  );
}

export default App;
