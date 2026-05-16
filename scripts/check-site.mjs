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

const indexHtml = await readFile('index.html', 'utf8');
const mainJs = await readFile('src/main.js', 'utf8');
const stylesCss = await readFile('src/styles.css', 'utf8');
const combined = `${indexHtml}\n${mainJs}\n${stylesCss}`;
const missing = requiredPhrases.filter((phrase) => !combined.includes(phrase));

if (missing.length > 0) {
  throw new Error(`Missing expected portfolio content: ${missing.join(', ')}`);
}

if (!indexHtml.includes('href="src/styles.css"')) {
  throw new Error('index.html must link to src/styles.css so Firebase Hosting serves the stylesheet.');
}

if (!indexHtml.includes('src="src/main.js"')) {
  throw new Error('index.html must load src/main.js with a relative path for static hosting.');
}

if (!stylesCss.includes('transform: translateX(-50%);')) {
  throw new Error('Navigation bar needs translateX(-50%) to stay centered after left: 50%.');
}

console.log('Static portfolio check passed.');
