import React, { useState } from "react";
import LoginPage from "components/pages/LoginPage";
import OrganizationsPage from "components/pages/OrganizationsPage";
import TripsPage from "components/pages/Trips/TripsPage";
import MyAccountPage from "components/pages/MyAccountPage";
import NavHeader from "components/NavHeader";
import { PageEnum } from "constants/PageEnum";

function App() {
  const [activePage, setActivePage] = useState(PageEnum.Organization);
  const [token, setToken] = useState(false);

  function renderActivePage() {
    switch (activePage) {
      case PageEnum.Organization:
        return <OrganizationsPage />;
      case PageEnum.Trips:
        return <TripsPage />;
      case PageEnum.MyAccount:
        return <MyAccountPage />;
      default:
        return <LoginPage setToken={setToken} />;
    }
  }

  if (!token) {
    return <LoginPage setToken={setToken} />;
  }

  return (
    <div className="App">
      <NavHeader activePage={activePage} setActivePage={setActivePage} />
      <div className="App-Content">{renderActivePage()}</div>
    </div>
  );
}

export default App;