# AKH-SRC-001 · Initial source inventory and trust boundary

**Status:** PARTIALLY OBSERVED via connected Notion/GitHub/Supabase on 2026-10-10. Entries are references for discovery; not evidence of live ingestion.

| System | Existing reference | Authority | Sync proposal |
| --- | --- | --- | --- |
| AtlasHub corporate | [Notion Corporate OS](https://app.notion.com/p/2b2652fc5b9d826dbe25811b3f40aefb) | corporate policies / portfolio | opt-in approved pages |
| Governance | [Notion Knowledge Governance](https://app.notion.com/p/764652fc5b9d8390a53101f25bcf4c1d) | knowledge approval rules | capture state / access |
| AI Workforce | [AtlasHub-AI-WaaS](https://github.com/atlashub-digital/AtlasHub-AI-WaaS) | runtime/contracts, not all deployed | immutable tags/commits |
| Agent capabilities | [atlas-agent-packs](https://github.com/atlashub-digital/atlas-agent-packs) | pack/skills/guardrail definitions | versioned manifests |
| AMF governance | [Notion AMF Control Center](https://app.notion.com/p/3f4652fc5b9d81e98c2cc1865ea606b0) | briefs / claims / calendar | authorized references |
| AMF operational | [atlas-internal-factory](https://github.com/atlashub-digital/atlas-internal-factory) | Factory schema and code | never replicate as authoritative state |
| AMF media | Approved Drive folder(s), per source owner | canonical binaries | explicit folder allowlist |
| Device capture | [Atlas Device Bridge](https://github.com/atlashub-digital/Atlas-Device-Bridge) | local selected source | separate capture consent |

## Baseline observed in Supabase AtlasHub
Public schema includes Tenant, Membership, Role, PackRelease, Deployment, ToolGrant, ChannelBinding, TaskRun, AuditEvent and others. The vector extension was available but **not installed** when checked. Public table `waas_migrations` was reported with RLS disabled; verify grants/Data API exposure and remediation plan before further expansion. **No changes were made.**

## Before any ingestion
Verify content owner, access method, share authorization, retention, indexing license, consent/legal basis, revision detection, deletion events, rate limits and support for link revocation. Do not treat search results or internal links as automatic permission to ingest them.
