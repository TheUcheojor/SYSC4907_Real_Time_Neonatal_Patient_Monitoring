import { useState } from "react";

export default function useToken() {
  console.log("INVOKED useTOKEN", JSON.parse(sessionStorage.getItem("token")));
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
