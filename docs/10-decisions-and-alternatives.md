# AKH-DEC-001 · Decision register & alternative scenarios

**Status:** OPEN / PROPOSED; not a ratification by stakeholder.

| ID | Proposal | Alternative | Gate to close |
| --- | --- | --- | --- |
| D01 | Knowledge Core as transversal technical service | separate KB per business line | owners + tenancy contract |
| D02 | Supabase Postgres + pgvector + FTS initially | dedicated PG, Qdrant, OpenSearch | load, security, cost measurements |
| D03 | Keep Notion, GitHub, Drive canonical | migrate everything into new DMS/DAM | cost/rights comparison |
| D04 | Retrieval + tools, not model fine-tuning | fine-tuning specialist models | measured errors and lifecycle cost |
| D05 | Domain library + jurisdiction + client overlay | one duplicated KB per agent | tenant A/B and jurisdiction tests |
| D06 | REST API before MCP facade | MCP-only | auth semantics and clients |
| D07 | AMF Factory owns publication, AKH indexes pointers | new AKH publisher | avoid duplication; AMF ADR review |
| D08 | Optional ADB capture with consent | autonomous endpoint crawling | device security and scope POC |
| D09 | Optional dedicated object storage for renditions | Drive-only / dedicated DAM | upload/search/distribution thresholds |
| D10 | Shared infra with separate grants and resource limits | separate isolated infra per client | residency, scale, contractual needs |

## Explicit unknowns
Actual Supabase RLS grants/schema ownership; AMF Supabase operational readiness; Drive scopes/permissions and rights; input volumes; embedding provider/locale benchmarks; regulated workloads; jurisdiction reviewers; target SLA; storage costs. Each unknown blocks promotion to production claims.

Follow [ADR governance](adr/ADR-0001-knowledge-core.md) and record changed assumptions in [analysis log](analysis-log.md).
