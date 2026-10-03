# Security + code review checklist (Supabase + React + serverless)

## Auth & sessions

- [ ] Auth tokens never logged or sent to third-party analytics
- [ ] Protected routes enforce session on **server** paths that matter (not UI-only guards)
- [ ] Role/claim checks match the least privilege needed

## Supabase RLS

- [ ] RLS enabled on every table with user data
- [ ] Policies use `auth.uid()` (or equivalent) — no open `USING (true)` on writes
- [ ] Service role key used **only** in trusted server/runtime, never in the browser bundle
- [ ] Storage buckets have explicit policies for read/write

## Payments & webhooks

- [ ] Payment secret / webhook signing secret only in server env
- [ ] Webhook signature verified before mutating orders
- [ ] Idempotency for webhook retries
- [ ] Amounts/prices not trusted solely from the client body

## Netlify Functions / serverless

- [ ] Secrets via env vars / secret store — not committed
- [ ] CORS locked to known origins where needed
- [ ] Input validation at the function edge
- [ ] Error messages don’t leak schema or stack traces to clients

## OWASP-oriented notes

| Area | Look for |
|------|----------|
| Injection | Parameterized queries / Supabase client — no string-built SQL |
| Broken access control | Missing RLS; IDOR on order/user IDs |
| Security misconfig | Public anon key OK; service role in frontend = critical |
| Sensitive data | PII in logs; card data never stored by your app |
| SSRF / unsafe fetch | Server fetching user-supplied URLs |
