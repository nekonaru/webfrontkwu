/* Unduh foto produk dari Unsplash sesuai tools/image-sources.json */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const dir = path.join(root, 'assets', 'img', 'produk');
const map = JSON.parse(fs.readFileSync(path.join(root, 'tools', 'image-sources.json'), 'utf8'));
const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36';

if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

let ok = 0, skip = 0, fail = 0;
Object.entries(map).forEach(([key, urls]) => {
  urls.forEach((u, idx) => {
    const file = path.join(dir, `${key}-${idx}.jpg`);
    if (fs.existsSync(file) && fs.statSync(file).size > 8000) { skip++; return; }
    const url = `${u}?auto=format&fit=crop&w=900&q=72`;
    try {
      execFileSync('curl.exe', ['-s', '-m', '25', '-A', ua, '-o', file, url], { stdio: 'ignore' });
      const size = fs.existsSync(file) ? fs.statSync(file).size : 0;
      if (size < 8000) { fs.existsSync(file) && fs.unlinkSync(file); fail++; }
      else ok++;
    } catch (e) { fail++; }
  });
});
console.log(`Selesai. baru: ${ok}, sudah ada: ${skip}, gagal: ${fail}`);
