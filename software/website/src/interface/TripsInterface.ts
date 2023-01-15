export function queryTripDatapoints(routeId: number):Promise<Response>  {
    return fetch(`https://localhost:3001/dps/${routeId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          return result
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
        }
      );
}