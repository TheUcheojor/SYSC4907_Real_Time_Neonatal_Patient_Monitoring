import { useState } from "react";

// Gets an auth token from the browser's session storage, then sets it in web pages state
export default function useToken() {
  const getToken = () => {
    return JSON.parse(sessionStorage.getItem("token"));
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}
