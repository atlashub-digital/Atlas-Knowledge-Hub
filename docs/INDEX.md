# Documentation map · AKH v0.1.0

## Executive track
1. [Purpose and boundaries](01-vision-and-scope.md)
2. [Architecture and stack](02-architecture.md)
3. [Decision alternatives](10-decisions-and-alternatives.md)
4. [Roadmap and gates](11-roadmap.md)

## Engineering track
1. [Domain boundaries & data ownership](03-data-ownership.md)
2. [Sources and inventory](04-source-inventory.md)
3. [Ingestion and sync](05-ingestion.md)
4. [Retrieval and agent contracts](06-retrieval.md)
5. [Agent composition](07-agent-composition.md)
6. [AMF DAM integration](08-amf-media.md)
7. [Schemas](../schemas/README.md) and [contracts](../contracts/knowledge-source.schema.json)

## Security & quality track
1. [Security and privacy](09-security.md)
2. [Acceptance metrics](12-evaluation.md)
3. [ADR-0001 — Transversal Knowledge Core](adr/ADR-0001-knowledge-core.md)
4. [ADR-0002 — Controlled Hybrid Retrieval](adr/ADR-0002-hybrid-retrieval.md)
5. [ADR-0003 — AMF DAM ownership](adr/ADR-0003-amf-dam.md)

## Studies / provenance
- [References and open-source candidates](references.md)
- [Dated analysis log](analysis-log.md)
- [CHANGELOG](../CHANGELOG.md)

## Document status taxonomy
**OBSERVED** = checked in connected source, not necessarily live. **PROPOSED** = design to validate. **ACCEPTED** = approved owner decision recorded. **IMPLEMENTED** = code exists. **VERIFIED** = tests/evidence provided. **PRODUCTION** = deployed with operational evidence. Never equate a README or staging fixture with production.

Search tags: `tenant` `RAG` `hybrid-search` `source-of-truth` `DAM` `AMF` `Agent-Pack` `jurisdiction` `policy` `Hermes` `AtlasHub`.
