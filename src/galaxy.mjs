/**
 * AKH reference graph projection, with ACL applied before building any node or link.
 * This is an in-memory POC, NOT a production gateway nor a persistence layer.
 */
import { authorized } from './policy.mjs';

export function graphForPrincipal(documents, relationships, principal, generatedAt = new Date().toISOString()) {
  const tenantId = typeof principal?.tenantId === 'string' ? principal.tenantId : '';
  const visible = new Map();
  for (const doc of documents || []) {
    if (!doc || !authorized(doc, principal) || typeof doc.id !== 'string' || visible.has(doc.id)) continue;
    visible.set(doc.id, {
      id: doc.id,
      kind: 'document',
      label: doc.title,
      group: doc.library,
      version: doc.version,
      lifecycle: doc.lifecycle,
      sourceRef: doc.source,
    });
  }
  const links = [];
  const unique = new Set();
  for (const relation of relationships || []) {
    if (!relation || !visible.has(relation.source) || !visible.has(relation.target) ||
        typeof relation.relation !== 'string' || !relation.relation.trim()) continue;
    const key = [relation.source, relation.target, relation.relation].join('::');
    if (unique.has(key)) continue;
    unique.add(key);
    links.push({ source: relation.source, target: relation.target, relation: relation.relation });
  }
  return { schemaVersion: '0.1', tenantId, nodes: [...visible.values()], links, generatedAt };
}
