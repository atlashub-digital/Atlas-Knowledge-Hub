# AKH-API-001 · Retrieval contract and response policy

**Status:** PROPOSED; [machine-readable JSON schema](../contracts/retrieval-request.schema.json).

## Core policy
Caller identities and tenant scope originate from verified session/deployment/channel binding; ignore any agent-supplied tenant in prompts. Enforce organization/tenant, role, audience, source ACL, classification, status, jurisdiction, rights and validity **before retrieving fragments**. Rerank only authorized candidate IDs; never postfilter leaked private text after showing it to the LLM.

## Request / result
```json
{
  "query": "Que procedimentos permitem agendar uma visita?",
  "purpose": "answer",
  "jurisdiction": {"country": "PT", "region": "Lisboa"},
  "locale": "pt-PT",
  "limit": 5
}
```

The gateway derives effective tenant, agent and permissions independently. Response includes `results[]` with `document_id`, `version`, `snippet`, `citation_anchor`, `source_url` (authorized link), `observed_at`, `effective_at`, `score`, `classification` and warning if stale/conflicted. Restricted links must be omitted or signed narrowly.

## Query routing
| Query type | Execution |
| --- | --- |
| General how-to, approved policy | authorized FTS/vector hybrid retrieval |
| Current prices, inventory, appointments | authoritative tool/API |
| Regulatory obligation | verified official source, effective date + reviewer |
| Agent procedure | version-pinned skills/pack contract |
| Campaign creative / ready-to-post | DAM catalog + exact approved artifact_version |
| Client-specific question | **only** approved tenant-scope sources |

## Search quality
Use FTS+vector candidates (RRF), optionally rerank top authorized results. Domain/locale metadata filtering is not access control by itself. Pin embedding model and dimension per index; reembed on model migration. Budget max documents, snippets, tokens and latency; return `no_authorized_evidence` rather than hallucinate.

## MCP
Publish a thin restricted MCP tool (e.g. `knowledge.search`) only after the REST contract, auth and audit semantics are stable. MCP scopes are checked server-side; no arbitrary SQL, no raw cross-tenant corpus endpoint.

## Audit
Log actor/deployment/tenant identity reference, query hash, corpus version, chosen source IDs, policy decision, duration, token consumption/cost. Do not log confidential text by default.
