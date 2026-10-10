# AKH-PLAN-001 · Delivery roadmap and evidence gates

**Status:** PLANNED. This is not an execution order to run migrations/deploy without approval.

## P0 — Inventory & security (must pass first)
- Map authoritative sources, tenants, AMF independent data, grant ownership and retention.
- Inspect RLS and grants (notably `waas_migrations`), backup and rollback.
- Deliverables: verified inventory, threat model, signed access matrix.
- **Pass:** no unknown origin/cross-owner rights; risk findings assigned.

## P1 — Contract and schema
- Freeze `source manifest`, `retrieval request` and `agent binding` version 1.
- Review suggested private `knowledge` schema and retention; no production migration.
- **Pass:** architecture ADR accepted, schemas validated and negative tests written.

## P2 — Source ingestion MVP
- Build one approved Notion or GitHub connector + one selected Drive folder, parsing and delta/revoke handling in staging.
- **Pass:** ingest 10 approved synthetic or licensed items; mutate/revoke source and observe search invalidation.

## P3 — Authorized hybrid retrieval
- Install/test pgvector only in authorized staging, FTS+RRF, source citations, signed service principal, logs.
- **Pass:** tenant A/B impossible to leak, stale/archived records excluded; benchmark P95.

## P4 — AMF adapter
- Read approved creative/versions from Factory and source Drive; no alteration to Factory authority.
- **Pass:** denied unapproved asset, exact approved version retrieval, no unauthorized media URL.

## P5 — Agent packs
- PACK-004 real estate PT and BR jurisdictional corpus with private client overlay.
- PACK-001 clinic admin corpus with no clinical diagnosis.
- **Pass:** reproducible role/jurisdiction boundary and tool-vs-KB evaluation.

## P6 — Portable contracts
- MCP facade / Build & Transfer exports / dashboards / operations.
- **Pass:** restore, audit, cost and service runbooks evidenced.

## Deliverable evidence per phase
PR or tagged commit, tests and negative cases, relevant ADR, reviewer and date, measured metrics, rollback proof, operator manual, deployment owner. Never claim `GA` on passing a document review alone.

## Responsibility suggestions, not appointments
Platform Engineering = implementation; Security/Privacy = threat review; domain owners = curation; AMF Duarte/Laura/Rui = only AMF approvals; Helena = shared infrastructure coordination where authorized; customer owner = tenant grants.
