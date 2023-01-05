import React from "react";
import useToken from "auth/useToken";
import App from "./App";
import LoginPage from "./pages/LoginPage";

function AuthenticatedApp() {
  const { token, setToken } = useToken();

  return token === "" || token === null ? (
    <LoginPage setToken={setToken} />
  ) : (
    <App />
  );
}

export default AuthenticatedApp;
