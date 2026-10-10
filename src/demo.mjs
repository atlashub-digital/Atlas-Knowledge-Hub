import {readFileSync} from 'node:fs';
import {searchAuthorized} from './policy.mjs';
const docs=JSON.parse(readFileSync(new URL('../examples/synthetic-sources.json',import.meta.url),'utf8'));
const principal={tenantId:'tenant-A',scopes:['knowledge:read'],allowedLibraries:['domains/real-estate/PT/Lisboa','clients/tenant-A']};
console.log(JSON.stringify({warning:'Synthetic local policy demonstration only; not a server.',result:searchAuthorized(docs,principal,'visita')},null,2));
