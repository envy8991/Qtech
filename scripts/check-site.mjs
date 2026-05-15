import { access, readFile } from 'node:fs/promises';

const requiredFiles = ['index.html', 'src/main.js', 'src/styles.css'];
const requiredPhrases = [
  'Bridging the Physical and Digital',
  'Engineering Portfolio',
  'Interactive Resume Timeline',
  'Software stack meets field hardware',
  'liquid-canvas',
  'glass-panel',
];

for (const file of requiredFiles) {
  await access(file);
}

const html = await readFile('index.html', 'utf8');
const combined = `${html}\n${await readFile('src/main.js', 'utf8')}\n${await readFile('src/styles.css', 'utf8')}`;
const missing = requiredPhrases.filter((phrase) => !combined.includes(phrase));

if (!html.includes('rel="stylesheet" href="src/styles.css"')) {
  throw new Error('index.html must load the stylesheet with href="src/styles.css" for Firebase Hosting.');
}

if (!html.includes('type="module" src="src/main.js"')) {
  throw new Error('index.html must load the app with src="src/main.js" so dist/ deployments work.');
}

if (missing.length > 0) {
  throw new Error(`Missing expected portfolio content: ${missing.join(', ')}`);
}

try {
  const distHtml = await readFile('dist/index.html', 'utf8');
  await access('dist/src/styles.css');
  await access('dist/src/main.js');

  if (!distHtml.includes('rel="stylesheet" href="src/styles.css"')) {
    throw new Error('dist/index.html is missing href="src/styles.css".');
  }
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

console.log('Static portfolio check passed.');
