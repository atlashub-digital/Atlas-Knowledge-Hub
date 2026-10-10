# AKH-EVAL-001 · Acceptance rubric and benchmark plan

**Status:** PROPOSED. No benchmark numbers reported as measured.

## Required test matrix
| Dimension | Measurement | Failure condition |
| --- | --- | --- |
| Tenant isolation | A/B adversarial retrieval | any B content in A results |
| Access revocation | revoke → search | any remaining accessible derived content |
| Citation fidelity | manually verify source+anchor+version | uncited invented claim |
| Domain jurisdiction | Portugal vs Brazil mixed queries | wrong legal location without warning |
| Freshness | price/availability and changed policy | stale index presented as current |
| Media rights | unsigned URL, expired license, wrong version | unauthorized asset delivered |
| Prompt injection | document with role-override command | command elevated into tool policy |
| Availability | P50/P95 retrieval | target to be set from measured baseline |
| Cost | embeddings/token/query/provider | unit costs absent |
| Ingestion quality | scanned PDF/table/audio corpus | missing citations or corrupted fields |
| Compliance | healthcare administrative examples | medical advice / leak of patient data |

## Benchmark protocol
Use synthetic/permitted multilingual PT-PT, PT-BR, EN, ES sets with golden expected citations and negative permission tests. Record corpus size, parser version, embedding model/dimension, retriever configuration, top-k, precision@k/recall@k, human-rated answer correctness, P50/P95, cost/query and date. Compare FTS-only, vector-only and hybrid RRF under identical access rules.

## Pilot exit
No tenant leakage, auditable human claims review, source revoke proven, backup/restore tested, incident runbook, full ownership and costs documented. This gates a pilot, not an unrestricted production rollout.
