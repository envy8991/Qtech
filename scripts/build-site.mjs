import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';

const distDir = 'dist';
const sourceHtml = await readFile('index.html', 'utf8');

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });
await writeFile(`${distDir}/index.html`, sourceHtml);
await cp('src', `${distDir}/src`, { recursive: true });

console.log('Built Firebase-ready static site in dist/.');
