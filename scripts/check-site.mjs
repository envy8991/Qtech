import { access, readFile } from 'node:fs/promises';

// Compatibility check kept so legacy CI jobs don't fail after migration.
const requiredFiles = ['index.html', 'src/main.jsx', 'src/App.jsx', 'src/styles.css'];
for (const file of requiredFiles) {
  await access(file);
}

const indexHtml = await readFile('index.html', 'utf8');
if (!indexHtml.includes('id="root"')) {
  throw new Error('index.html must contain #root mount point for React.');
}

if (!indexHtml.includes('/src/main.jsx')) {
  throw new Error('index.html must load /src/main.jsx for Vite.');
}

console.log('Aether Node static compatibility check passed.');
