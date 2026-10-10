# AKH-DATA-001 · Multi-organization ownership and data catalog

**Status:** PROPOSED; respect already documented Notion governance.

## Distinct owner classes
- AtlasHub.SI corporate B2B; Atlas Media Factory as independent Holding unit; separate ventures such as LeveLab/LIA and EspelhoMeu; each external client tenant; shared curated domain libraries.
- Group membership does not confer read rights. A shared service provider is not a shared data controller by default.
- Origin may be Notion, GitHub, Drive, Supabase, approved SaaS connector or Device Bridge selected capture. Store durable source ID and scope, not a copied identity claim.

## Logical collections (not physical bucket names)
```text
Atlas Knowledge Catalog
├── corporate/atlashub
├── units/amf                 [isolated rights]
├── ventures/{venture-id}     [separate rights]
├── domains/real-estate/global
├── domains/real-estate/PT/Lisboa
├── domains/real-estate/BR/GO
├── domains/healthcare/administrative
├── clients/{tenant-id}       [strict private]
└── shared/{approved-resource-id}
```

## Canonical record fields
id, owner_org_id, tenant_id or shared_library_id, source_system, source_locator (non-secret), source_version, content_sha256, document_version, doc_type, country, region, locale, jurisdiction, status (Draft/Review/Verified/Published/Archived), classification (Public/Commercial/Internal/Restricted), rights_grant, license, owner/approver, valid_from, valid_to, observed_at, last_indexed_at, deletion_marker and approved audience.

An index is derived and disposable; restore from canonical sources, not from vectors.

## Data classes
**Public**: approved distribution. **Commercial**: authorized proposals. **Internal**: restricted employees/approved agents. **Restricted**: highly confidential, regulated or personal data; do not automatically index; use explicit legal basis and least privilege.

## Conflict resolution
Policy-approved > owner-approved decision > verified technology contract > project draft > conversational memory. Stale, superseded or conflicted sources trigger clarification or human review, never automatic upgrade.

## Jurisdiction model
Countries alone are insufficient. Store country, subnational area, municipality where relevant, source authority, effective date, law/version and reviewer. Prefer governmental/regulator primary sources and specialist review for healthcare/legal/compliance.
