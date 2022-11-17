import React, { useState } from "react";
import LoginPage from "components/pages/LoginPage";
import OrganizationsPage from "components/pages/OrganizationsPage";
import TripsPage from "components/pages/TripsPage";
import MyAccountPage from "components/pages/MyAccountPage";
import NavHeader from "./NavHeader";

enum Page {
  Organization,
  Trips,
  MyAccount,
}

function App() {
  const [activePage, setActivePage] = useState(Page.Organization);
  const [token, setToken] = useState();

  function renderActivePage() {
    switch (activePage) {
      case Page.Organization:
        <OrganizationsPage />;
        break;
      case Page.Trips:
        <TripsPage />;
        break;
      case Page.MyAccount:
        <MyAccountPage />;
        break;
      default:
        <LoginPage />;
    }
  }

  if (!token) {
    return <LoginPage />;
  }

  return (
    <div>
      <NavHeader />
      <div>{renderActivePage}</div>
    </div>
  );
}

export default App;
