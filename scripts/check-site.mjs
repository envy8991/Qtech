import { access, readFile } from 'node:fs/promises';

const requiredFiles = ['index.html', 'src/main.jsx', 'src/App.jsx', 'src/styles.css', 'src/main.js'];
for (const file of requiredFiles) await access(file);

const indexHtml = await readFile('index.html', 'utf8');
if (!indexHtml.includes('id="root"')) throw new Error('Missing #root mount point.');
if (!(indexHtml.includes('/src/main.jsx') || indexHtml.includes('src/main.js'))) {
  throw new Error('Missing valid app entrypoint.');
}

const mainJs = await readFile('src/main.js', 'utf8');
if (!mainJs.includes("import './main.jsx'")) throw new Error('src/main.js must forward to src/main.jsx.');

console.log('Compatibility checks passed.');
