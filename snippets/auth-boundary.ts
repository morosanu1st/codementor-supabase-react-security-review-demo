/**
 * Auth boundary notes (illustrative TypeScript)
 * Browser: use anon key + user session. Never ship the service role.
 * Server (Netlify Function): verify JWT / session; use service role only when RLS must be bypassed carefully.
 */

// BAD: trusting only a client-sent userId
export function insecureLoadOrders(userIdFromBody: string) {
  // An attacker can pass someone else's id.
  return { query: `orders?user_id=${userIdFromBody}` };
}

// BETTER: derive identity from verified auth on the server
export function secureLoadOrders(verifiedUserId: string) {
  return { filter: { user_id: verifiedUserId }, note: "id comes from auth, not the request body" };
}
