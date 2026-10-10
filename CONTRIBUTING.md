# Contributing / engineering governance

This repository has a public **study + prototype** baseline, not production certification.

- Read README → AGENTS.md → docs/INDEX.md → relevant ADR and contract.
- Classify change: research observation / proposal / accepted decision / implementation / verified deployment.
- Update docs/analysis-log.md for changed assumptions and CHANGELOG.md for delivered changes; increment SemVer when contract behavior changes.
- Update JSON Schemas and tests together. Negative authorization/consent tests required for security or tenancy changes.
- Never commit customer data, screenshots, private links, credentials, deployment addresses, access tokens or regulated records.
- Run `npm test && npm run check:docs && npm run demo` before promoting a commit.
- Direct-main bootstrap was explicitly requested. Adopt reviewed PRs and branch protections for live integrations.
- An ADR marked PROPOSED must not be represented as organizational approval.
