# KWU Campus Business Hub

Website frontend **KWU Administrasi Niaga** yang dibangun hanya dengan **HTML, CSS, dan JavaScript**
(tanpa framework, tanpa build tool wajib). Seluruh halaman dibuat statis, cepat, dan bisa langsung
dibuka di peramban.

Tagline: **Tempat Ide Bertemu Peluang.** · Hero: **IDE BESAR. PELUANG NYATA.**

---

## Menjalankan

```bash
# 1. Bangun ulang halaman (opsional, sudah ada hasil build)
node build.js

# 2. Jalankan server statis
node tools/serve.js 8080
```

Buka `http://localhost:8080`. alternatively, klik dua kali `index.html` — situs tetap berjalan
dengan `file://` karena tidak memakai modul ES.

---

## Struktur berkas

```
├── index.html ... 22 halaman hasil build (langsung bisa dipakai)
├── build.js                 penyusun halaman dari layout + partial
├── assets/
│   ├── css/
│   │   ├── main.css         token desain, reset, tipografi, utilitas, animasi
│   │   ├── components.css   tombol, kartu, header, footer, formulir, chatbot, toast
│   │   └── pages.css        komposisi khusus tiap halaman
│   ├── js/
│   │   ├── data.js          data contoh (produk, kategori, aktivitas, FAQ, status)
│   │   ├── store.js         state di localStorage (keranjang, wishlist, akun, transaksi)
│   │   ├── ui.js            ikon, toast, dialog, header, drawer, chatbot, reveal
│   │   ├── render.js        pembantu render kartu produk dan badge status
│   │   ├── home.js          beranda
│   │   ├── catalog.js       katalog (filter, urutan, tampilan)
│   │   ├── product.js       detail produk
│   │   ├── cart.js          keranjang
│   │   ├── checkout.js      checkout + konfirmasi transaksi
│   │   ├── forms.js         formulir 3 langkah + FAQ + kontak
│   │   ├── account.js       akun dan riwayat transaksi
│   │   ├── auth.js          login dan pendaftaran
│   │   ├── activity.js      halaman aktivitas
│   │   └── admin.js         panel admin
│   └── img/                 ilustrasi SVG buatan sendiri (tanpa aset pihak ketiga)
├── src/partials/            sumber isi tiap halaman (diassin oleh build.js)
└── tools/
    ├── serve.js             server statis untuk pratinjau
    ├── scan-text.js         deteksi karakter asing yang tidak sengaja masuk
    └── mobile-preview.html  pratinjau responsif (HP, tablet, desktop)
```

---

## Peta halaman

| Halaman | Berkas | Isi |
| --- | --- | --- |
| Beranda | `index.html` | Hero, kategori, produk unggulan, jalur kerja sama, cerita, CTA penutup |
| Katalog | `katalog.html` | Pencarian, filter kategori, rentang harga, stok, urutan, tampilan grid/list |
| Detail produk | `produk.html?slug=...` | Galeri, harga, jumlah, stok, spesifikasi, tab, produk terkait |
| Keranjang | `keranjang.html` | Ubah jumlah, hapus, simpan ke wishlist, ringkasan |
| Checkout | `checkout.html` | Data pembeli, metode pembayaran, konfirmasi pesanan |
| Konfirmasi | `transaksi.html?id=...` | Nomor transaksi, status, timeline, ringkasan |
| Riwayat transaksi | `akun-transaksi.html` | Daftar pesanan + filter status |
| Bisnis & Kolaborasi | `kolaborasi.html` | Tiga jalur, tabel perbandingan, alur, FAQ |
| Pengajuan grosir | `kolaborasi-grosir.html` | Formulir RFQ 3 langkah |
| Partnership | `kolaborasi-partnership.html` | Formulir kemitraan 3 langkah |
| Kolaborasi program | `kolaborasi-program.html` | Formulir program 3 langkah |
| Tentang KWU | `tentang.html` | Identitas, tujuan, layanan, kontribusi, data yang menunggu konfirmasi |
| Aktivitas | `aktivitas.html` | Daftar berita, filter kategori, agenda kegiatan |
| Login | `login.html` | Formulir masuk + isi data demo |
| Daftar | `daftar.html` | Formulir pendaftaran |
| Akun | `akun.html` | Profil, transaksi, pengajuan, wishlist, pengaturan |
| Bantuan | `bantuan.html` | Panduan, FAQ, formulir kontak |
| Kebijakan | `kebijakan-privasi.html`, `syarat-ketentuan.html`, `kebijakan-transaksi.html` | Kerangka dokumen legal |
| Admin | `admin.html` | Panel pengelolaan data (tidak ada di navigasi publik) |
| 404 | `404.html` | Halaman tidak ditemukan |

---

## Fitur

**Sistem desain**
- Palet: KWU Orange `#F47721`, KWU Blue `#1756A9`, Deep Navy `#102D50`, putih.
- Font Plus Jakarta Sans (dengan fallback sistem).
- Sudut kartu 10–18 px, bayangan lembut, ruang lega, tipografi besar dan tegas.
- Wordmark "KWU" + teks kecil "Administrasi Niaga" (sementara,menunggu logo resmi).

**Animasi**
- Reveal saat elemen masuk layar (IntersectionObserver, dengan jeda bertingkat).
- Hero: parallax ringan, kartu melayang, blob bergerak, marquee kategori.
- Tombol: lift, sheen, keadaan loading.
- Header menyusut saat digulir, drawer dan panel filter meluncur.
- Transisi halaman, angka statistik menghitung naik, toast masuk halus.
- `prefers-reduced-motion` dihormati.

**Fungsional**
- Katalog: pencarian langsung, filter kategori, rentang harga, filter stok, 5 pilihan urutan,
  tampilan grid/list, URL ikut berubah, empty state, skeleton loading.
- Detail produk: galeri, stepper jumlah, tambah ke keranjang, wishlist, bagikan, tab,
  produk terkait, prefill RFQ.
- Keranjang: ubah jumlah, hapus (dengan dialog konfirmasi), simpan ke wishlist, subtotal transparan.
- Checkout: validasi inline, metode pembayaran, ringkasan, nomor transaksi, status.
- Tiga formulir kerja sama: indikator langkah, validasi inline, halaman tinjauan, nomor pengajuan.
- Akun: profil, riwayat transaksi, status pengajuan, wishlist, pengaturan, hapus data lokal.
- FAQ dengan pencarian dan filter kategori, akordeon.
- Chatbot: tombol mengambang, quick replies, typing indicator, jawaban berbasis kata kunci.
- Toast, ConfirmDialog, tombol kembali ke atas, pencarian cepat `Ctrl+K`.
- Responsif untuk HP, tablet, dan desktop. Tanpa layanan antar-jemput.

---

## Catatan kejujuran data

Situs ini adalah **tahap frontend**. Semua isi bersifat simulasi dan ditandai di dalam antarmuka:

- Produk, harga, stok, ulasan, dan aktivitas adalah **data contoh**.
- Login, pembayaran, dan pengiriman pengajuan **belum terhubung ke server**.
- Data tersimpan di `localStorage` peramban saja.
- Logo, alamat, nomor kontak, akun media sosial, visi-misi, dan naskah kebijakan resmi
  **belum dipublikasikan** — bagian tersebut sengaja tidak dikarang.
- Tidak ada fitur antar-jemput.

Sebelum peluncuran, isi `assets/js/data.js`, konfirmasi identitas resmi, dan lengkapi
dokumen kebijakan sesuai ketentuan KWU.

---

## Mengubah isi halaman

1. Edit partial terkait di `src/partials/`.
2. Jalankan `node build.js`.
3. Header, footer, navigasi, dan sidebar chatbot berasal dari `build.js` sehingga tetap konsisten.

Pemeriksaan cepat karakter yang tidak sengaja masuk (misalnya huruf Mandarin/Cyrillic):

```bash
node tools/scan-text.js
```
