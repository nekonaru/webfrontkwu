/* Membuat CREDITS.md berisi daftar foto yang dipakai beserta sumbernya. */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const src = JSON.parse(fs.readFileSync(path.join(root, 'tools', 'image-sources.json'), 'utf8'));
const data = fs.readFileSync(path.join(root, 'assets', 'js', 'data.js'), 'utf8');

// Ambil nama file gambar yang benar-benar dipakai
const used = new Set();
for (const m of data.matchAll(/assets\/img\/produk\/([a-z0-9\-]+-\d)\.jpg/g)) used.add(m[1]);

const lines = [];
lines.push('# Kredit Foto');
lines.push('');
lines.push('Seluruh foto produk dan foto suasana di situs ini diambil dari **Unsplash**');
lines.push('dengan lisensi [Unsplash License](https://unsplash.com/license), yaitu gratis dipakai');
lines.push('untuk keperluan komersial dan non-komersial tanpa kewajiban mencantumkan nama.');
lines.push('');
lines.push('Atribusi tetap disertakan di sini sebagai Referensi. Jika sebuah foto perlu diganti,');
lines.push('cukup ganti berkas di `assets/img/produk/` lalu perbarui nama file pada `assets/js/data.js`.');
lines.push('');
lines.push('## Foto yang dipakai');
lines.push('');
lines.push('| Berkas | Sumber |');
lines.push('| --- | --- |');

const rows = [];
for (const [key, urls] of Object.entries(src)) {
  urls.forEach((u, i) => {
    const name = `${key}-${i}`;
    if (!used.has(name)) return;
    const id = u.split('/photo-')[1];
    rows.push(`| \`assets/img/produk/${name}.jpg\` | [Unsplash](${u}) |`);
  });
}
// Foto suasana yang diambil terpisah
const extra = {
  'scene-bazaar': 'https://images.unsplash.com/photo-1775340137312-24a147909969',
  'scene-workshop': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
  'scene-meeting': 'https://images.unsplash.com/photo-1571624436279-b272aff752b5',
  'scene-packing': 'https://images.unsplash.com/photo-1617825295690-28ae56c56135',
  'scene-hero': 'https://images.unsplash.com/photo-1751199199992-b32cefa81c72',
  'scene-usaha': 'https://images.unsplash.com/photo-1531058240690-006c446962d8'
};
for (const [key, url] of Object.entries(extra)) {
  for (let i = 0; i < 2; i++) {
    const name = `${key}-${i}`;
    if (!used.has(name)) continue;
    rows.push(`| \`assets/img/produk/${name}.jpg\` | [Unsplash](${url}) |`);
  }
}

rows.sort();
lines.push(...rows);
lines.push('');
lines.push('## Ilustrasi vektor');
lines.push('');
lines.push('Logo, favicon, dan ilustrasi lain yang tersisa di `assets/img/*.svg` dibuat sendiri');
lines.push('untuk proyek ini dan bebas dipakai.');
lines.push('');

fs.writeFileSync(path.join(root, 'CREDITS.md'), lines.join('\n'), 'utf8');
console.log(`CREDITS.md dibuat dengan ${rows.length} foto.`);
