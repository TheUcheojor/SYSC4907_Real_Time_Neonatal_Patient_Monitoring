// import { assert } from "chai";
// import {
//   generateSessionToken,
//   authenticateSessionToken,
// } from "../src/secret/sessionToken";

// describe("sessionToken.ts", () => {
//   it("should encode user id in token", () => {
//     const user_id = 2;
//     const token = generateSessionToken(user_id);
//     authenticateSessionToken(
//       { headers: { authorization: token } },
//       new Response(),
//       () => {
//         assert.equal(req.user_id, user_id);
//       }
//     );
//   });
// });
