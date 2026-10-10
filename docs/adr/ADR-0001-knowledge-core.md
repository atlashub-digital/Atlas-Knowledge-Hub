# ADR-0001 — Transversal Knowledge Core (PROPOSED)

- Date: 2026-10-10
- Context: AtlasHub.SI, AMF, ventures and client agents require one governed retrieval service but separate sources/owners.
- Proposal: API-first transversal AKH with multiple logical libraries and strict tenant entitlements; never move canonical operational state.
- Alternatives: one KB per agent; central universal document dump; monolithic agent memory; commercial hosted RAG provider.
- Benefits: reuse, traceability, provider portability.
- Risks: centralized service blast radius; incorrect policy mapping.
- Evidence required: source mapping, A/B denial tests, restore and ownership review.
- State: **proposed pending owners/security sign-off**; not an approved deployment decision.
