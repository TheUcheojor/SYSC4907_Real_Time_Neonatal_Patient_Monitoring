export function getFetchHeaderWithAuth() {
  return {
    headers: {
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token"))}`,
    }
  };
}
