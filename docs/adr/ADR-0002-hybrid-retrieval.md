# ADR-0002 — Hybrid retrieval with PostgreSQL (PROPOSED)

- Date: 2026-10-10
- Proposal: Supabase/Postgres private `knowledge` schema + FTS + pgvector and RRF; model/dimension pinned per index.
- Alternatives: FTS only, external Qdrant, OpenSearch, managed retrieval, separate Postgres.
- Reasoning: smallest new operations surface; SQL joins, versioning, provenance and policy.
- Gating: source grants, correct RLS configuration for exposed entities, shadow benchmarks by country/locale, load profile and cost.
- Rollback: retain canonical source IDs and normalized text to reindex in other engine.
- State: **proposed**.
