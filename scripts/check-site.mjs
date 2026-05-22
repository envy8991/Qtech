import { access, readFile } from 'node:fs/promises';

// Keep checks compatible with both legacy and migrated branches to reduce merge churn.
const requiredFiles = ['index.html', 'src/main.jsx', 'src/App.jsx', 'src/styles.css', 'src/main.js'];
for (const file of requiredFiles) {
  await access(file);
}

const indexHtml = await readFile('index.html', 'utf8');
if (!indexHtml.includes('id="root"')) {
  throw new Error('index.html must contain #root mount point for React.');
}

if (!(indexHtml.includes('/src/main.jsx') || indexHtml.includes('src/main.js'))) {
  throw new Error('index.html must load a valid frontend entrypoint.');
}

const mainJs = await readFile('src/main.js', 'utf8');
if (!mainJs.includes("import './main.jsx'")) {
  throw new Error('src/main.js must remain a compatibility shim that forwards to main.jsx.');
}

console.log('Aether Node compatibility check passed.');
