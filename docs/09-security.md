# AKH-SEC-001 · Threat model, authorization and public-repo controls

**Status:** PROPOSED baseline; verify with security owners.

## Critical assets & threats
- Customer documents, health info, contracts and approved media; OAuth tokens; source ACL snapshots; vector/text chunks; query traces.
- Cross-tenant IDOR, incorrect inherited group permissions, stale ACL after revocation, prompt injection embedded in retrieved content, ingestion of private sources, source URL disclosure, embeddings that persist after deletion, arbitrary connector traversal, secret leakage in Git, SSRF via source fetch.

## Controls
1. Server derives tenant/deployment/role context from trusted auth, never a user/LLM-controlled tenant field.
2. Scope sources with deny-by-default grants, explicit jurisdiction/rights rules. Isolate venture/AMF/client tenant IDs.
3. Enforce permission in gateway and database (RLS on exposed tables; private schemas with grants, defense-in-depth). No `service_role` in browser or LLM.
4. Encrypt at rest/in transit, secret manager for connector tokens, rotation and audited grant/revoke. Do not store credentials in embeddings or public fixtures.
5. Ingest prompt text as untrusted data, never follow instructions in retrieved documents; role guardrails are independent.
6. Delete/revocation cascade to derived chunks, vectors, caches, exports and links with verifiable evidence; backups follow retention law.
7. Signed links constrained to object, tenant, purpose, expiry. Store only hashed search queries unless justified.
8. Human approval for sensitive external action; AKH itself does not execute.
9. PII minimization and documented processing basis/consent; health data uses stricter purpose, role and retention.
10. Test tenant A/B, redacted links, stale ACL and malformed metadata before staging gate.

## Observed Supabase risk (2026-10-10)
The AtlasHub project inspection reported `public.waas_migrations` with RLS disabled. Investigate grants and Data API visibility, then prepare a safe SQL migration and rollback. Do not auto-enable RLS without evaluating migration runner privileges because it can break writes. This baseline does **not** change existing DB.

## Public repository hygiene
Never add private customer content, device IDs, real medical records, access tokens, service account JSON, internal IPs, operational hostnames, sensitive traces or NDA documentation. Public forever once indexed/forked; making repo private later does not retract old content. Use synthetic examples, vetted external references and sanitized diagrams.
