/* =========================================================
   KWU Campus Business Hub - build.js
   Menggabungkan layout + partial menjadi halaman HTML statis.
   Jalankan: node build.js
   ========================================================= */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PARTIALS = path.join(ROOT, 'src', 'partials');

/* ---------------- SVG inline ---------------- */
const svg = {
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h2.5l2.4 12.2a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L21 7H5.5"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 6l6 6-6 6"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 3L10 14M21 3l-7 18-4-7-7-4z"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.8V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.8"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>'
};

/* ---------------- Header ---------------- */
const NAV = [
  { key: 'beranda', label: 'Beranda', href: 'index.html' },
  { key: 'katalog', label: 'Katalog', href: 'katalog.html' },
  { key: 'kolaborasi', label: 'Bisnis & Kolaborasi', href: 'kolaborasi.html' },
  { key: 'tentang', label: 'Tentang KWU', href: 'tentang.html' }
];

function header(active) {
  const nav = NAV.map(n =>
    `<a href="${n.href}" class="${active === n.key ? 'is-active' : ''}">${n.label}</a>`
  ).join('');

  return `
<div class="topbar">
  <div class="container row-between" style="gap:12px">
    <span class="topbar__text">Prototipe antarmuka. Brand, produk, harga, dan ulasan di katalog ini adalah karangan, bukan produk resmi KWU.</span>
    <a class="topbar__link" href="tentang.html">Tentang KWU</a>
  </div>
</div>
<header class="site-header">
  <div class="container site-header__bar">
    <a class="brand" href="index.html" aria-label="KWU Campus Business Hub, beranda">
      <span class="brand__mark">KWU</span>
      <span class="brand__text">
        <span class="brand__name">KW<span>U</span></span>
        <span class="brand__sub">Administrasi Niaga</span>
      </span>
    </a>

    <nav class="main-nav" aria-label="Navigasi utama">${nav}</nav>

    <div class="header-actions">
      <button class="icon-btn" data-search-open aria-label="Buka pencarian" title="Cari produk (Ctrl+K)">${svg.search}</button>
      <a class="icon-btn" href="keranjang.html" aria-label="Buka keranjang" title="Keranjang">
        ${svg.cart}
        <span class="icon-btn__count" data-cart-count aria-hidden="true">0</span>
      </a>
      <a class="btn btn--primary btn--sm btn--login" href="login.html" data-user-action>
        ${svg.user}<span data-user-name>Masuk</span>
      </a>
      <button class="icon-btn hamburger" data-drawer-open aria-label="Buka menu">${svg.menu}</button>
    </div>
  </div>
</header>

<div class="drawer" id="mobileDrawer">
  <div class="drawer__overlay"></div>
  <div class="drawer__panel" role="dialog" aria-modal="true" aria-label="Menu navigasi">
    <div class="drawer__head">
      <a class="brand" href="index.html">
        <span class="brand__mark">KWU</span>
        <span class="brand__text">
          <span class="brand__name">KW<span>U</span></span>
          <span class="brand__sub">Administrasi Niaga</span>
        </span>
      </a>
      <button class="icon-btn" data-drawer-close aria-label="Tutup menu">${svg.close}</button>
    </div>
    <nav class="drawer__nav" aria-label="Navigasi seluler">
      ${NAV.map(n => `<a href="${n.href}" class="${active === n.key ? 'is-active' : ''}">${n.label}${svg.chevron}</a>`).join('')}
      <a href="aktivitas.html" class="${active === 'aktivitas' ? 'is-active' : ''}">Aktivitas &amp; Berita${svg.chevron}</a>
      <a href="bantuan.html" class="${active === 'bantuan' ? 'is-active' : ''}">Pusat Bantuan${svg.chevron}</a>
      <a href="akun-transaksi.html" class="${active === 'transaksi' ? 'is-active' : ''}">Riwayat Transaksi${svg.chevron}</a>
    </nav>
    <div class="drawer__foot">
      <a class="btn btn--primary btn--block" href="login.html" data-user-action>${svg.user}<span data-user-name>Masuk</span></a>
      <a class="btn btn--ghost btn--block" href="keranjang.html">${svg.cart} Keranjang</a>
    </div>
  </div>
</div>

<div class="search-overlay" id="searchOverlay">
  <div class="modal__overlay" data-search-close></div>
  <div class="search-panel" role="dialog" aria-modal="true" aria-label="Pencarian produk">
    <form>
      <div class="input-group">
        <span class="input-group__icon">${svg.search}</span>
        <input class="input" type="search" placeholder="Cari produk, kategori, atau aktivitas..." aria-label="Kata kunci pencarian">
      </div>
      <div class="search-suggest">
        <h5>Pencarian populer</h5>
        <button data-suggest="kopi">Kopi bubuk</button>
        <button data-suggest="merchandise">Merchandise</button>
        <button data-suggest="notebook">Buku catatan</button>
        <button data-suggest="paket">Paket hemat</button>
      </div>
    </form>
  </div>
</div>`;
}

/* ---------------- Footer ---------------- */
function footer() {
  const col = (title, links) => `
    <div>
      <h4>${title}</h4>
      <ul>${links.map(l => `<li><a href="${l[1]}">${l[0]}</a></li>`).join('')}</ul>
    </div>`;

  return `
<footer class="site-footer">
  <div class="container">
    <div class="site-footer__grid">
      <div class="site-footer__brand">
        <a class="brand" href="index.html">
          <span class="brand__mark">KWU</span>
          <span class="brand__text">
            <span class="brand__name">KW<span>U</span></span>
            <span class="brand__sub">Administrasi Niaga</span>
          </span>
        </a>
        <p>
          KWU Campus Business Hub menyatukan katalog produk, transaksi, pengajuan kerja sama,
          dan informasi kegiatan dalam satu pengalaman digital untuk mahasiswa, mitra usaha,
          dan institusi.
        </p>
        <div class="socials" aria-label="Media sosial">
          <a href="#" data-social-placeholder aria-label="Instagram KWU">${svg.chevron}</a>
          <a href="#" data-social-placeholder aria-label="Facebook KWU">${svg.chevron}</a>
          <a href="#" data-social-placeholder aria-label="LinkedIn KWU">${svg.chevron}</a>
        </div>
        <div class="footer-note">
          KWU bukan brand dagang. Seluruh brand, produk, harga, dan ulasan di situs ini
          adalah karangan untuk demonstrasi antarmuka, bukan penawaran barang asli.
        </div>
      </div>
      ${col('Jelajahi', [['Beranda', 'index.html'], ['Katalog', 'katalog.html'], ['Tentang KWU', 'tentang.html'], ['Aktivitas', 'aktivitas.html']])}
      ${col('Layanan', [['Transaksi', 'akun-transaksi.html'], ['Grosir', 'kolaborasi-grosir.html'], ['Partnership', 'kolaborasi-partnership.html'], ['Kolaborasi Program', 'kolaborasi-program.html'], ['Bantuan', 'bantuan.html']])}
      ${col('Informasi', [['Kebijakan Privasi', 'kebijakan-privasi.html'], ['Syarat dan Ketentuan', 'syarat-ketentuan.html'], ['Kebijakan Transaksi', 'kebijakan-transaksi.html'], ['Tentang', 'tentang.html'], ['Akun', 'akun.html']])}
    </div>
    <div class="site-footer__bottom">
      <span>&copy; <span data-year>2026</span> KWU Administrasi Niaga · Campus Business Hub</span>
      <span>Tempat Ide Bertemu Peluang.</span>
    </div>
  </div>
</footer>

<button class="to-top" id="toTop" aria-label="Kembali ke atas">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
</button>

<nav class="mobile-nav" aria-label="Navigasi utama untuk layar kecil">
  <a href="index.html" class="mobile-nav__item">${svg.home}<span>Beranda</span></a>
  <a href="katalog.html" class="mobile-nav__item">${svg.grid}<span>Katalog</span></a>
  <a href="keranjang.html" class="mobile-nav__item mobile-nav__item--cart">${svg.cart}<span>Keranjang</span><em class="mobile-nav__badge" data-cart-count>0</em></a>
  <a href="akun.html" class="mobile-nav__item">${svg.user}<span>Akun</span></a>
</nav>

<div class="chat-fab" id="chatFab" role="button" tabindex="0" aria-expanded="false" aria-label="Buka Asisten KWU">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-8 8H7l-4 3 1-5.2A8 8 0 0 1 13 4a8 8 0 0 1 8 8z"/></svg>
  <span class="chat-fab__label">Asisten KWU</span>
</div>

<div class="chat-panel" id="chatPanel" role="dialog" aria-label="Asisten KWU">
  <div class="chat-head">
    <span class="chat-head__avatar">KWU</span>
    <div>
      <h4>Asisten KWU</h4>
      <p><span class="chat-head__dot"></span> Contoh jawaban otomatis</p>
    </div>
    <button class="chat-close" data-chat-close aria-label="Tutup asisten">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
    </button>
  </div>
  <div class="chat-body"></div>
  <div class="chat-quick">
    <button>Cari produk</button>
    <button>Kategori apa saja?</button>
    <button>Cara pesan grosir</button>
    <button>Ulasan produk</button>
    <button>Status pesanan</button>
    <button>Hubungi admin</button>
  </div>
  <div class="chat-input">
    <input class="input" type="text" placeholder="Tulis pertanyaanmu..." aria-label="Tulis pesan ke asisten">
    <button class="chat-input__send" data-chat-send aria-label="Kirim pesan">${svg.send}</button>
  </div>
  <div class="chat-note">Jawaban contoh untuk prototipe antarmuka. Belum terhubung ke sistem KWU.</div>
</div>`;
}

/* ---------------- Layout ---------------- */
function layout({ title, desc, active, body, scripts = [], bodyClass = '' }) {
  const scriptTags = ['assets/js/data.js', 'assets/js/store.js', 'assets/js/ui.js', 'assets/js/render.js']
    .concat(scripts)
    .map(src => `<script src="${src}"></script>`)
    .join('\n  ');

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${desc}">
  <meta name="theme-color" content="#F47721">
  <link rel="icon" href="assets/img/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/main.css">
  <link rel="stylesheet" href="assets/css/components.css">
  <link rel="stylesheet" href="assets/css/pages.css">
  <link rel="stylesheet" href="assets/css/mobile.css">
  <script>document.documentElement.classList.add('js');</script>
</head>
<body class="${bodyClass}">
  <a class="skip-link" href="#main">Lewati ke konten utama</a>
  ${header(active)}
  <main id="main">
${body}
  </main>
  ${footer()}
  <script src="assets/js/data.js"></script>
  <script src="assets/js/store.js"></script>
  <script src="assets/js/ui.js"></script>
  <script src="assets/js/render.js"></script>
${scripts.map(s => `  <script src="${s}"></script>`).join('\n')}
</body>
</html>
`;
}

/* ---------------- Daftar halaman ---------------- */
const PAGES = [
  { file: 'index.html', partial: 'beranda', active: 'beranda', title: 'KWU Campus Business Hub | Tempat Ide Bertemu Peluang', desc: 'KWU Campus Business Hub memuat katalog produk, transaksi, pengajuan kerja sama, dan aktivitas kewirausahaan kampus dalam satu pengalaman digital.', scripts: ['assets/js/home.js'] },
  { file: 'katalog.html', partial: 'katalog', active: 'katalog', title: 'Katalog Produk | KWU Campus Business Hub', desc: 'Jelajahi katalog produk KWU: kopi, merchandise, alat tulis, paket hemat, dan lainnya. Cari, saring, dan pesan dengan mudah.', scripts: ['assets/js/catalog.js'] },
  { file: 'produk.html', partial: 'produk', active: 'katalog', title: 'Detail Produk | KWU Campus Business Hub', desc: 'Lihat foto, harga, spesifikasi, stok, ulasan, dan pilihan pembelian produk KWU.', scripts: ['assets/js/product.js', 'assets/js/review.js'] },
  { file: 'keranjang.html', partial: 'keranjang', active: 'katalog', title: 'Keranjang Belanja | KWU Campus Business Hub', desc: 'Kelola item dan jumlah pembelianmu di keranjang KWU sebelum melanjutkan ke checkout.', scripts: ['assets/js/cart.js'] },
  { file: 'checkout.html', partial: 'checkout', active: 'katalog', title: 'Checkout | KWU Campus Business Hub', desc: 'Isi data pembeli, pilih metode pembayaran, dan konfirmasi pesananmu di KWU Campus Business Hub.', scripts: ['assets/js/checkout.js'] },
  { file: 'transaksi.html', partial: 'transaksi', active: 'transaksi', title: 'Konfirmasi Transaksi | KWU Campus Business Hub', desc: 'Ringkasan pesanan, status transaksi, dan langkah berikutnya untuk pesananmu di KWU.', scripts: ['assets/js/checkout.js'] },
  { file: 'akun-transaksi.html', partial: 'akun-transaksi', active: 'transaksi', title: 'Riwayat Transaksi | KWU Campus Business Hub', desc: 'Daftar pesanan, filter status, dan detail transaksi pengguna di KWU Campus Business Hub.', scripts: ['assets/js/account.js'] },
  { file: 'kolaborasi.html', partial: 'kolaborasi', active: 'kolaborasi', title: 'Bisnis & Kolaborasi | KWU Campus Business Hub', desc: 'Pintu masuk pengajuan grosir, partnership, dan kolaborasi program bersama KWU Administrasi Niaga.' },
  { file: 'kolaborasi-grosir.html', partial: 'kolaborasi-grosir', active: 'kolaborasi', title: 'Pengajuan Grosir (RFQ) | KWU Campus Business Hub', desc: 'Formulir RFQ untuk pembelian jumlah besar: organisasi, kontak, daftar produk, jumlah, dan tanggal kebutuhan.', scripts: ['assets/js/forms.js'] },
  { file: 'kolaborasi-partnership.html', partial: 'kolaborasi-partnership', active: 'kolaborasi', title: 'Pengajuan Partnership | KWU Campus Business Hub', desc: 'Formulir kemitraan untuk perusahaan, pemasok, UMKM, dan institusi yang ingin bekerja sama dengan KWU.', scripts: ['assets/js/forms.js'] },
  { file: 'kolaborasi-program.html', partial: 'kolaborasi-program', active: 'kolaborasi', title: 'Pengajuan Kolaborasi Program | KWU Campus Business Hub', desc: 'Formulir kolaborasi untuk event, proyek kreatif, promosi, dan program kewirausahaan kampus.', scripts: ['assets/js/forms.js'] },
  { file: 'tentang.html', partial: 'tentang', active: 'tentang', title: 'Tentang KWU | KWU Campus Business Hub', desc: 'Profil, tujuan, layanan, dan kontribusi KWU Administrasi Niaga bagi kewirausahaan kampus.' },
  { file: 'aktivitas.html', partial: 'aktivitas', active: 'aktivitas', title: 'Aktivitas & Berita | KWU Campus Business Hub', desc: 'Berita, workshop, program, dan agenda kegiatan kewirausahaan yang tersedia di KWU Campus Business Hub.', scripts: ['assets/js/activity.js'] },
  { file: 'login.html', partial: 'login', active: 'login', title: 'Masuk | KWU Campus Business Hub', desc: 'Masuk ke akun KWU untuk menyimpan wishlist, mengisi formulir kerja sama, dan menyelesaikan transaksi.', scripts: ['assets/js/auth.js'] },
  { file: 'daftar.html', partial: 'daftar', active: 'login', title: 'Daftar Akun | KWU Campus Business Hub', desc: 'Buat akun KWU Campus Business Hub untuk menyimpan transaksi, pengajuan, dan wishlist produk.', scripts: ['assets/js/auth.js'] },
  { file: 'akun.html', partial: 'akun', active: 'akun', title: 'Akun Saya | KWU Campus Business Hub', desc: 'Kelola profil, riwayat transaksi, status pengajuan kerja sama, wishlist, dan pengaturan akun.', scripts: ['assets/js/account.js'] },
  { file: 'bantuan.html', partial: 'bantuan', active: 'bantuan', title: 'Pusat Bantuan | KWU Campus Business Hub', desc: 'FAQ, panduan transaksi, dan formulir kontak untuk_admin KWU Campus Business Hub.', scripts: ['assets/js/forms.js'] },
  { file: 'kebijakan-privasi.html', partial: 'kebijakan-privasi', active: 'bantuan', title: 'Kebijakan Privasi | KWU Campus Business Hub', desc: 'Kebijakan privasi KWU Campus Business Hub.' },
  { file: 'syarat-ketentuan.html', partial: 'syarat-ketentuan', active: 'bantuan', title: 'Syarat dan Ketentuan | KWU Campus Business Hub', desc: 'Syarat dan ketentuan penggunaan layanan KWU Campus Business Hub.' },
  { file: 'kebijakan-transaksi.html', partial: 'kebijakan-transaksi', active: 'bantuan', title: 'Kebijakan Transaksi | KWU Campus Business Hub', desc: 'Kebijakan transaksi, pembayaran, dan pengambilan produk di KWU Campus Business Hub.' },
  { file: 'admin.html', partial: 'admin', active: 'admin', title: 'Panel Admin | KWU Campus Business Hub', desc: 'Tampilan pengelolaan data transaksi dan pengajuan dengan sistem desain KWU Campus Business Hub.', scripts: ['assets/js/admin.js'] },
  { file: '404.html', partial: '404', active: '', title: 'Halaman Tidak Ditemukan | KWU Campus Business Hub', desc: 'Halaman yang kamu cari tidak ditemukan.' }
];

/* ---------------- Build ---------------- */
let built = 0;
const missing = [];
const warnings = [];

PAGES.forEach(page => {
  const partialPath = path.join(PARTIALS, page.partial + '.html');
  if (!fs.existsSync(partialPath)) {
    missing.push(page.partial);
    return;
  }
  const body = fs.readFileSync(partialPath, 'utf8').trim();
  const scripts = page.scripts || [];

  // Pengaman: halaman yang punya <form> wajib punya skrip penangan
  if (/<form[\s>]/.test(body) && scripts.length === 0) {
    warnings.push(`${page.file}: memuat <form> tetapi tidak punya skrip JS.`);
  }
  // Pengaman: elemen yang butuh JS tapi tidak ada skrip
  const needsJs = ['data-request-form', 'id="catalogGrid"', 'id="productDetail"', 'id="cartList"', 'id="checkoutForm"', 'id="transactionDetail"', 'id="accountPanel"', 'id="orderHistory"', 'id="adminPanel"', 'id="faqAccordion"', 'id="contactForm"', 'id="loginForm"', 'id="registerForm"', 'id="homeFeatured"', 'id="activityList"'];
  const missingJs = needsJs.filter(sel => body.includes(sel) && scripts.length === 0);
  if (missingJs.length) {
    warnings.push(`${page.file}: butuh JS untuk ${missingJs.join(', ')} tetapi tidak punya skrip.`);
  }

  const html = layout({
    title: page.title,
    desc: page.desc,
    active: page.active,
    body,
    scripts
  });
  fs.writeFileSync(path.join(ROOT, page.file), html, 'utf8');
  built++;
});

console.log(`Selesai: ${built} halaman dibangun.`);
if (missing.length) {
  console.log('Partial belum ada: ' + missing.join(', '));
}
if (warnings.length) {
  console.log('\nPERINGATAN:');
  warnings.forEach(w => console.log('  - ' + w));
}
