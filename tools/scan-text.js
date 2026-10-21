/* Pemeriksaan cepat untuk mendeteksi karakter asing (CJK, Cyrillic, dll)
   yang mungkin ikut terisi tidak sengaja pada teks Indonesia. */
const fs = require('fs');
const path = require('path');

const roots = ['src', 'assets', 'build.js'];
const files = [];

function walk(p) {
  const stat = fs.statSync(p);
  if (stat.isDirectory()) {
    fs.readdirSync(p).forEach(f => walk(path.join(p, f)));
  } else if (/\.(html|js|css|md)$/.test(p)) {
    files.push(p);
  }
}
roots.forEach(walk);

const bad = /[\u0400-\u04FF\u3000-\u30FF\u4E00-\u9FFF\uFF00-\uFFEF\u0600-\u06FF\u0400-\u04FF\u2020-\u206F\u0080-\u009F]/g;
let found = 0;

files.forEach(f => {
  const lines = fs.readFileSync(f, 'utf8').split('\n');
  lines.forEach((line, i) => {
    const matches = line.match(bad);
    if (matches) {
      found++;
      console.log(`${f}:${i + 1}  [${matches.join(' ')}]  ${line.trim().slice(0, 160)}`);
    }
  });
});

console.log(found ? `\n${found} baris perlu diperiksa.` : '\nTidak ada karakter asing yang terdeteksi.');
