import React, { useState } from "react";
import OrganizationsPage from "components/pages/OrganizationsPage";
import TripsPage from "components/pages/Trips/TripsPage";
import MyAccountPage from "components/pages/MyAccountPage";
import NavHeader from "components/NavHeader";
import { PageEnum } from "constants/PageEnum";

function App() {
  const [activePage, setActivePage] = useState(PageEnum.Organization);

  console.log("APP RENDER");
  function renderActivePage() {
    switch (activePage) {
      case PageEnum.Organization:
        return <OrganizationsPage />;
      case PageEnum.Trips:
        return <TripsPage />;
      case PageEnum.MyAccount:
        return <MyAccountPage />;
      default:
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
