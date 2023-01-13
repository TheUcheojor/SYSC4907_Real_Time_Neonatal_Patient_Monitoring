import React, { useState } from "react";
import OrganizationsPage from "components/pages/OrganizationsPage";
import TripsPage from "components/pages/Trips/TripsPage";
import MyAccountPage from "components/pages/MyAccount/MyAccountPage";
import NavHeader from "components/NavHeader";
import { PageEnum } from "constants/PageEnum";
import useToken from "auth/useToken";
import LoginPage from "./pages/LoginPage";

function App() {
  const [activePage, setActivePage] = useState(PageEnum.DefaultLandingPage);
  const { token, setToken } = useToken();
  const [logoutError, setLogoutError] = useState("");

  if (token === null) {
    return (
      <LoginPage
        setToken={(string) => {
          setToken(string);
          setLogoutError("");
        }}
        logoutError={logoutError}
      />
    );
  }

  function onLogout() {
    setToken(null);
    setActivePage(PageEnum.DefaultLandingPage);
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
              setLogoutError("Session expired");
            }}
          />
        );
      case PageEnum.MyAccount:
        return <MyAccountPage onLogout={onLogout} />;
      case PageEnum.DefaultLandingPage:
        return <OrganizationsPage />;
    }
  }

  return (
    <div className="App" style={{ overflow: "overlay" }}>
      <NavHeader activePage={activePage} setActivePage={setActivePage} />
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
  );
}

export default App;
