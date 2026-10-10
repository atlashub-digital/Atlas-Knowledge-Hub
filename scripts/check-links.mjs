import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
const root=resolve('.');
const files=[];
function walk(d) {
  for (const entry of readdirSync(d,{withFileTypes:true})) {
    if (['node_modules','.git'].includes(entry.name)) continue;
    const target=join(d,entry.name);
    if (entry.isDirectory()) walk(target);
    else if (entry.name.endsWith('.md')) files.push(target);
  }
}
walk(root);
let failures=0;
for (const file of files) {
  const src=readFileSync(file,'utf8');
  for (const match of src.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)) {
    const href=match[1].trim().split(' "')[0].split('#')[0];
    if (!href || /^(https?:|mailto:|data:|file:)/i.test(href)) continue;
    const target=resolve(dirname(file),decodeURIComponent(href));
    if (!existsSync(target)) { console.error('Broken local reference:',file,'→',href); failures++; }
  }
}
if(failures) process.exit(1);
console.log('Local markdown references checked:',files.length,'documents');
