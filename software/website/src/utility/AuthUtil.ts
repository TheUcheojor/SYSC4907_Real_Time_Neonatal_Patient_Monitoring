export function getFetchHeaderWithAuth() {
  return {
    Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token"))}`,
  };
}
