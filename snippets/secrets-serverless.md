# Secrets handling for Netlify Functions (patterns)

## Do

- Store `SUPABASE_SERVICE_ROLE_KEY`, payment webhook secrets, etc. in the host’s env / secret UI
- Read via `process.env.MY_SECRET` inside functions only
- Rotate immediately if a secret appears in git, screenshots, or chat

## Don’t

- Prefix secrets with `VITE_` / `REACT_APP_` / `NEXT_PUBLIC_` (those ship to the browser)
- Commit `.env` with real values (keep `.env.example` with placeholders only)
- Log full Authorization headers or webhook payloads containing PII

## Example `.env.example` (placeholders only)

```
SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=server-only-never-in-frontend
PAYMENT_WEBHOOK_SECRET=whsec_xxx_placeholder
```
