/** AKH policy POC: synchronous in-memory authorization. NOT production auth or vector retrieval. */
export function authorized(doc, principal) {
  if (!principal || typeof principal.tenantId !== 'string' || !principal.scopes?.includes('knowledge:read')) return false;
  if (!['verified', 'published'].includes(doc.lifecycle)) return false;
  if (doc.tenantId !== null && doc.tenantId !== principal.tenantId) return false;
  if (!principal.allowedLibraries?.includes(doc.library)) return false;
  if (doc.classification === 'restricted' && !principal.scopes.includes('knowledge:restricted')) return false;
  if (doc.classification === 'internal' && doc.tenantId === null && !principal.scopes.includes('knowledge:internal-shared')) return false;
  return true;
}
export function searchAuthorized(docs, principal, query) {
  if (typeof query !== 'string' || !query.trim()) return [];
  const terms = query.toLocaleLowerCase().split(/\s+/).filter(Boolean);
  return docs.filter(d => authorized(d, principal))
    .map(d => ({ id:d.id, title:d.title, version:d.version, source:d.source,
      score:terms.reduce((n,term)=>n+(d.content.toLocaleLowerCase().includes(term)?1:0),0) }))
    .filter(d => d.score > 0).sort((a,b)=>b.score-a.score || a.id.localeCompare(b.id));
}
/** Reciprocal Rank Fusion for pre-authorized result sets ONLY. */
export function rrf(lists, k=60) {
  const scores = new Map();
  for (const list of lists) list.forEach((id,i)=>scores.set(id,(scores.get(id)||0)+1/(k+i+1)));
  return [...scores.entries()].sort((a,b)=>b[1]-a[1]).map(([id,score])=>({id,score}));
}
