-- AKH schema draft v0.1.0. NOT A READY-TO-RUN PRODUCTION MIGRATION.
-- Apply only to isolated staging after reviewing permissions/owners.
-- No pgvector or GRANT automation here: embedding extension, schema and policies need a separate ADR.
create schema if not exists knowledge;
revoke all on schema knowledge from public;

create table if not exists knowledge.spaces (
  id uuid primary key default gen_random_uuid(),
  owner_org_id text not null,
  tenant_id text,
  namespace text not null unique,
  classification text not null check (classification in ('public','commercial','internal','restricted')),
  created_at timestamptz not null default now()
);

create table if not exists knowledge.sources (
  id uuid primary key default gen_random_uuid(),
  space_id uuid not null references knowledge.spaces(id),
  provider text not null,
  external_ref text not null,
  grant_ref text not null,
  sync_cursor text,
  state text not null default 'pending',
  unique(space_id, provider, external_ref)
);

create table if not exists knowledge.documents (
  id uuid primary key default gen_random_uuid(),
  source_id uuid not null references knowledge.sources(id),
  external_item_ref text not null,
  title text not null,
  locale text not null default 'und',
  country text,
  region text,
  classification text not null,
  lifecycle text not null check (lifecycle in ('draft','review','verified','published','archived')),
  content_hash text not null,
  source_version text not null,
  valid_from timestamptz,
  valid_to timestamptz,
  removed_at timestamptz,
  created_at timestamptz not null default now(),
  unique(source_id, external_item_ref, source_version)
);

create table if not exists knowledge.sections (
  id uuid primary key default gen_random_uuid(),
  document_id uuid not null references knowledge.documents(id) on delete cascade,
  ordinal integer not null,
  content text not null,
  anchor text,
  fts tsvector generated always as (to_tsvector('simple', content)) stored,
  unique(document_id, ordinal)
);
create index if not exists knowledge_sections_fts_idx on knowledge.sections using gin(fts);

create table if not exists knowledge.access_grants (
  id uuid primary key default gen_random_uuid(),
  space_id uuid not null references knowledge.spaces(id),
  principal_kind text not null,
  principal_ref text not null,
  scope text not null,
  expires_at timestamptz,
  revoked_at timestamptz,
  unique(space_id, principal_kind, principal_ref, scope)
);

create table if not exists knowledge.ingestion_jobs (
  id uuid primary key default gen_random_uuid(),
  source_id uuid not null references knowledge.sources(id),
  source_version text,
  state text not null default 'queued',
  attempt integer not null default 0,
  failure_code text,
  created_at timestamptz not null default now()
);

-- RLS default-denies in exposed tables; do not grant broad access.
alter table knowledge.spaces enable row level security;
alter table knowledge.sources enable row level security;
alter table knowledge.documents enable row level security;
alter table knowledge.sections enable row level security;
alter table knowledge.access_grants enable row level security;
alter table knowledge.ingestion_jobs enable row level security;

-- Pending architecture decisions:
-- 1. trusted tenant identity + service role mapping (never from user prompt);
-- 2. reviewed policies/grants and tests A/B;
-- 3. chosen embedding dimension => separate versioned sections_embedding index;
-- 4. deletion propagation, audit, residency, backups and rollback.
