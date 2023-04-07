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
import { Toaster } from "react-hot-toast";

function App() {
  const [activePage, setActivePage] = useState(PageEnum.DefaultLandingPage);
  const { token, setToken } = useToken();
  const [loginMessage, setLoginMessage] = useState("");
  const [loginMessageColor, setLoginMessageColor] = useState(ColorEnum.Black);

  const navigate = useNavigate();

  // used for logout and session expiry
  function onLogout() {
    setToken(null);
    setActivePage(PageEnum.DefaultLandingPage);
    setLoginMessageColor(ColorEnum.Red);
  }

  function renderActivePage() {
    let page;
    switch (activePage) {
      case PageEnum.Organization:
        page = <OrganizationsPage />;
        break;
      case PageEnum.Trips:
        page = (
          <TripsPage
            onLogout={() => {
              onLogout();
              setLoginMessage("Session expired");
            }}
          />
        );
        break;
      case PageEnum.MyAccount:
        page = <MyAccountPage onLogout={onLogout} />;
        break;
      case PageEnum.DefaultLandingPage:
        page = (
          <TripsPage
            onLogout={() => {
              onLogout();
              setLoginMessage("Session expired");
            }}
          />
        );
        break;
    }
    return (
      <div>
        <Toaster />
        {page}
      </div>
    );
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
