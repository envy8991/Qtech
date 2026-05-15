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

const combined = `${await readFile('index.html', 'utf8')}\n${await readFile('src/main.js', 'utf8')}\n${await readFile('src/styles.css', 'utf8')}`;
const missing = requiredPhrases.filter((phrase) => !combined.includes(phrase));

if (missing.length > 0) {
  throw new Error(`Missing expected portfolio content: ${missing.join(', ')}`);
}

console.log('Static portfolio check passed.');
