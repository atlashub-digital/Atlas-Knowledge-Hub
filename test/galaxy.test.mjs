import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { graphForPrincipal } from '../src/galaxy.mjs';

const docs = JSON.parse(readFileSync(new URL('../examples/synthetic-sources.json', import.meta.url), 'utf8'));
const A = {
  tenantId: 'tenant-A', scopes: ['knowledge:read'],
  allowedLibraries: ['domains/real-estate/PT/Lisboa', 'clients/tenant-A', 'clients/tenant-B']
};
const relations = [
  { source:'d1', target:'d2', relation:'context' },
  { source:'d1', target:'d3', relation:'private-link' },
  { source:'d2', target:'d4', relation:'draft-link' },
];

test('galaxy includes only authorized documents and permitted edges', () => {
  const graph = graphForPrincipal(docs, relations, A, '2026-10-18T18:00:00Z');
  assert.deepEqual(graph.nodes.map(n => n.id), ['d1','d2']);
  assert.deepEqual(graph.links, [{ source:'d1', target:'d2', relation:'context' }]);
  assert.equal(graph.tenantId, 'tenant-A');
  assert.equal(graph.nodes[1].sourceRef, 'example://tenant-a');
});
test('galaxy rejects missing scopes and other-tenant sources', () => {
  const graph = graphForPrincipal(docs, relations, { ...A, scopes: [] });
  assert.equal(graph.nodes.length, 0);
  assert.equal(graph.links.length, 0);
});
test('galaxy is fail-closed when principal is missing', () => {
  const graph = graphForPrincipal(docs, relations, null);
  assert.deepEqual(graph.nodes, []);
  assert.deepEqual(graph.links, []);
});
test('galaxy de-duplicates links', () => {
  const graph = graphForPrincipal(docs, [relations[0], relations[0]], A);
  assert.equal(graph.links.length, 1);
});
