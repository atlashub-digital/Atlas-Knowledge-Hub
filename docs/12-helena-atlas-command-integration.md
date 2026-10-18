# AKH — Knowledge Galaxy and REA integration (G0 only)

Parent mission: [Workspaces #3](https://github.com/atlashub-digital/AtlasHub-Workspaces/issues/3). AKH execution: [#1](https://github.com/atlashub-digital/Atlas-Knowledge-Hub/issues/1) and REA [#2](https://github.com/atlashub-digital/Atlas-Knowledge-Hub/issues/2).

## This PR actually implements
- In-memory **reference projection** `graphForPrincipal`: runs `authorized` for each source before constructing nodes or edges.
- Synthetic negative tests for tenant isolation, missing scopes, dangling edges, and duplicate relationships.
- Draft contract for evidence-attributed REA reports. Not a real REST API, Chrome runner, ingest worker, database or Hermes connection.

## Integration guardrails
- Knowledge sources remain canonical in GitHub / Notion / Drive, stored with version, owner, provenance, lifecycle, grants, delete/revoke status. New voice-captured knowledge is a **draft** pending approval; never silently edits source truth.
- Knowledge Gateway enforces auth+ACL **before ranking and before LLM calls**; graph results are **server filtered**, even if UI checks tenant.
- Keep `AtlasHub-AI-WaaS` as core auth/tenancy authority; no client cross-scope reads. No existing schema migration without explicit review.
- Evaluate GBrain vs LightRAG vs existing PostgreSQL FTS/pgvector; choose minimal effective composition with benchmark, security and licensing evidence.
- REA only on own/public/authorized sites via sandbox runner; no credentials/cookies from user's browser; loopback Chrome debugging, SSRF defenses and cleanup. Evidence vs inference must be explicit.
- Prove real delivery with small approved source set, retrieval citations, revoked source no longer retrievable, and real report in Galaxy. No production claims without staging tests.

## Codex work sequence
1. Confirm existing contracts/schema/policy and tests; write ADR on knowledge motor.
2. Build source registry, authoritative tenant/service-principal binding and filtered read service in staging.
3. Add ingestion and version/revoke semantics for selected GitHub + Drive/Notion folders, using synthetic fixtures first.
4. Add graph API under reviewed contract with semantic edges + source references.
5. Add REA evidence contract validator + isolated runner adapter after Hermes/REA capabilities are verified.
6. Record measured performance, backup/rollback, tenant A/B denial and P95 retrieval, obtain Helena approval.
