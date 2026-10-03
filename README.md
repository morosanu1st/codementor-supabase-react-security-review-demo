# Supabase + React Security Review Demo

Sample materials for a Codementor **1:1 security / code review** on a stack like **React + Supabase + Netlify Functions**, especially apps that take payments.

## What this demo covers

- RLS-first mindset for Postgres/Supabase
- Auth boundary notes (client vs server)
- Secrets handling for serverless (Netlify Functions)
- OWASP-oriented review checklist (no real secrets included)

## How I’d run a live 1:1 review session

1. **Scope (5 min)** — Which flows matter? (signup, checkout, webhooks, admin)
2. **Threat sketch (10 min)** — Who can call what? Where is trust misplaced?
3. **Live walkthrough (30–40 min)** — Trace one payment path: browser → API → Supabase → webhook
4. **Prioritized findings (10 min)** — Critical / high / medium with concrete fixes
5. **Follow-up plan** — What to patch first; optional re-review after changes

I teach *why* each issue matters so you can spot the next one yourself.

## Quick start

- Checklist: [`checklists/security-review.md`](checklists/security-review.md)
- Snippets: [`snippets/`](snippets/) — RLS mindset, auth boundaries, serverless secrets patterns

## Disclaimer

Illustrative patterns only. Do not paste production keys. Rotate anything that ever leaked into git or chat.

---

*Demo for Codementor mentoring offers — topic/skill focused, not client-specific.*
