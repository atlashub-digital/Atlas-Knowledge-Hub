# Schema proposals — DO NOT APPLY DIRECTLY TO PRODUCTION

[knowledge-core.proposed.sql](knowledge-core.proposed.sql) is a conceptual PostgreSQL draft. It intentionally creates **no exposed Data API grants** and enables RLS without production policies. Without a reviewed auth mapping, access may fail even for legitimate roles. It requires threat-model review, pinned pgvector dimension/model and explicit migration/rollback scripts before use.

Authoritative AI Workforce and AMF schemas remain in their own repositories. Never merge Factory operations into `knowledge`.
