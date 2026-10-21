# KWU Campus Business Hub

Website frontend **KWU Administrasi Niaga** yang dibangun hanya dengan **HTML, CSS, dan JavaScript**
(tanpa framework, tanpa proses build wajib). Seluruh halaman dibuat statis, cepat, dan bisa langsung
dibuka di peramban.

Tagline: **Tempat Ide Bertemu Peluang.** · Hero: **IDE BESAR. PELUANG NYATA.**

> KWU bukan brand dagang. Seluruh brand, produk, harga, dan ulasan di katalog ini adalah karangan
> untuk keperluan demonstrasi antarmuka, bukan barang asli maupun penawaran resmi.

---

## Menjalankan

```bash
# 1. Bangun ulang halaman (opsional, hasil build sudah tersedia)
node build.js

# 2. Jalankan server statis
node tools/serve.js 8080
```

Buka `http://localhost:8080`. Situs juga tetap berjalan dengan klik dua kali `index.html`
karena tidak memakai modul ES.

---

## Struktur berkas

```
├── index.html ... 22 halaman hasil build (langsung bisa dipakai)
├── build.js                 penyusun halaman dari layout dan partial
├── CREDITS.md               daftar kredit foto dari Unsplash
├── assets/
│   ├── css/
│   │   ├── main.css         token desain, reset, tipografi, utilitas, animasi
│   │   ├── components.css   tombol, kartu, header, footer, formulir, chatbot, toast
│   │   ├── pages.css        komposisi khusus tiap halaman
│   │   └── mobile.css       desain khusus layar kecil (dimuat terakhir)
│   ├── js/
│   │   ├── data.js          katalog, kategori, ulasan, FAQ, status
│   │   ├── store.js         state di localStorage (keranjang, wishlist, akun, transaksi, ulasan)
│   │   ├── ui.js            ikon, toast, dialog, header, drawer, chatbot, reveal
│   │   ├── render.js        pembantu render kartu produk dan badge status
│   │   ├── review.js        ulasan produk: ringkasan, daftar, form tulis
│   │   ├── home.js          beranda
│   │   ├── catalog.js       katalog (filter, urutan, tampilan)
│   │   ├── product.js       detail produk
│   │   ├── cart.js          keranjang
│   │   ├── checkout.js      checkout dan konfirmasi transaksi
│   │   ├── forms.js         formulir 3 langkah, FAQ, kontak
│   │   ├── account.js       akun dan riwayat transaksi
│   │   ├── auth.js          login dan pendaftaran
│   │   ├── activity.js      halaman aktivitas
│   │   └── admin.js         panel admin
│   └── img/
│       ├── produk/          foto produk dan suasana (Unsplash, lihat CREDITS.md)
│       └── *.svg            logo, favicon, ilustrasi vektor buatan sendiri
├── src/partials/            sumber isi tiap halaman (dibangun oleh build.js)
└── tools/
    ├── serve.js             server statis untuk pratinjau
    ├── fetch-images.js      unduh foto produk
    ├── make-credits.js      buat CREDITS.md
    ├── scan-text.js         deteksi karakter asing atau em dash
    ├── cleanup-copy.js      konsistensi kalimat pada teks
    ├── mobile-preview.html  pratinjau tampilan layar kecil
    └── desktop-preview.html pratinjau tampilan desktop
```

---

## Peta halaman

| Halaman | Berkas | Isi |
| --- | --- | --- |
| Beranda | `index.html` | Hero, kategori, produk unggulan, jalur kerja sama, cerita, CTA penutup |
| Katalog | `katalog.html` | Pencarian, filter kategori, rentang harga, stok, urutan, tampilan grid/list |
| Detail produk | `produk.html?slug=...` | Galeri, harga, jumlah, stok, spesifikasi, tab, ulasan, produk terkait |
| Ulasan | bagian dalam detail produk | Ringkasan rating, daftar ulasan, form menulis ulasan |
| Keranjang | `keranjang.html` | Ubah jumlah, hapus, simpan ke wishlist, ringkasan |
| Checkout | `checkout.html` | Data pembeli, metode pembayaran, konfirmasi pesanan |
| Konfirmasi | `transaksi.html?id=...` | Nomor transaksi, status, timeline, ringkasan |
| Riwayat transaksi | `akun-transaksi.html` | Daftar pesanan plus filter status |
| Bisnis & Kolaborasi | `kolaborasi.html` | Tiga jalur, tabel perbandingan, alur, FAQ |
| Pengajuan grosir | `kolaborasi-grosir.html` | Formulir RFQ tiga langkah |
| Partnership | `kolaborasi-partnership.html` | Formulir kemitraan tiga langkah |
| Kolaborasi program | `kolaborasi-program.html` | Formulir program tiga langkah |
| Tentang KWU | `tentang.html` | Identitas, tujuan, layanan, kontribusi, data yang menunggu konfirmasi |
| Aktivitas | `aktivitas.html` | Daftar berita, filter kategori, agenda kegiatan |
| Login | `login.html` | Formulir masuk dan isi data demo |
| Daftar | `daftar.html` | Formulir pendaftaran |
| Akun | `akun.html` | Profil, transaksi, pengajuan, wishlist, pengaturan |
| Bantuan | `bantuan.html` | Panduan, FAQ dengan pencarian, formulir kontak |
| Kebijakan | `kebijakan-privasi.html`, `syarat-ketentuan.html`, `kebijakan-transaksi.html` | Kerangka dokumen legal |
| Admin | `admin.html` | Panel pengelolaan data, tidak ada di navigasi publik |
| 404 | `404.html` | Halaman tidak ditemukan |

---

## Katalog

Lima kategori, 37 produk dengan brand fiktif seperti *Sari Banih*,
*Rumah Biskuit*, *Kopi Kanduri*, *Ink Line*, dan *Serat Lokal*.

| Kategori | Isi |
| --- | --- |
| Makanan | Keripik, cookies, kue lapis, sambal, kerupuk, brownies, biskuit, jelly, es krim, snack box |
| Minuman | Kopi susu gula aren, kopi bubuk, teh celup, sirup markisa, jus mangga, susu UHT, matcha, madu hutan |
| Merchandise & Aksesoris | Kaos, hoodie, tote bag, topi, tumbler, mug keramik, ransel |
| Alat Tulis & Kreativitas | Buku tulis, set pulpen, set spidol, sticky notes, pensil warna, penghapus, organizer, binder clip, penggaris |
| Paket Hemat | Paket Sarapan Kantor, Paket Alat Tulis, Paket Merchandise Tim |

Setiap produk punya foto, harga, minimum pembelian, spesifikasi, rating, dan ulasan.

---

## Fitur

**Sistem desain**
- Palet: KWU Orange `#F47721`, KWU Blue `#1756A9`, Deep Navy `#102D50`, putih.
- Font Plus Jakarta Sans dengan fallback sistem.
- Sudut kartu 10 sampai 18 px, bayangan lembut, ruang lega, tipografi besar dan tegas.
- Wordmark "KWU" dengan teks kecil "Administrasi Niaga".

**Animasi**
- Reveal berjenjang saat elemen masuk layar.
- Hero melayang, blob bergerak, marquee kategori.
- Tombol lift dan sheen, keadaan loading.
- Header menyusut saat digulir, drawer dan panel filter meluncur.
- Angka statistik menghitung naik, toast masuk halus, transisi halaman.

**Fungsional**
- Katalog: pencarian langsung, filter kategori, rentang harga, filter stok, lima pilihan urutan,
  tampilan grid dan list, URL ikut berubah, empty state, skeleton loading.
- Detail produk: galeri, stepper jumlah, tambah ke keranjang, wishlist, bagikan, tab,
  produk terkait, prefill RFQ.
- Ulasan: ringkasan rating dengan grafik batang, daftar ulasan, form tulis ulasan yang
  tersimpan di peramban dan langsung tampil di daftar.
- Keranjang: ubah jumlah, hapus dengan dialog konfirmasi, simpan ke wishlist, subtotal transparan.
- Checkout: validasi inline, metode pembayaran, ringkasan, nomor transaksi, status.
- Tiga formulir kerja sama: indikator langkah, validasi inline, halaman tinjauan, nomor pengajuan.
- Akun: profil, riwayat transaksi, status pengajuan, wishlist, pengaturan, hapus data lokal.
- FAQ dengan pencarian dan filter, akordeon.
- Chatbot dengan 28 topik, tombol mengambang, quick replies, typing indicator.
- Toast, ConfirmDialog, tombol kembali ke atas, pencarian cepat `Ctrl+K`.

**Desain khusus layar kecil**
- Navigasi bawah dengan empat menu utama, bukan hanya hamburger.
- Panel aksi produk yang menempel di bawah layar, menggantikan navigasi bawah.
- Kartu produk jadi dua kolom dengan tombol ringkas, rating disembunyikan.
- Tipografi, jarak, dan target sentuh diatur ulang, bukan sekadar dikecilkan.
- Formulir memakai font 16 px agar tidak memicu zoom otomatis di iOS.
- Panel filter jadi sheet layar penuh dengan header dan footer menempel.

---

## Catatan kejujuran data

- Brand, produk, harga, ulasan, dan isi halaman adalah karangan untuk demonstrasi antarmuka.
- Login, pembayaran, dan pengiriman pengajuan belum terhubung ke server.
- Data tersimpan di `localStorage` peramban saja.
- Logo resmi, alamat, nomor kontak, media sosial, visi-misi, dan naskah kebijakan resmi
  belum dipublikasikan, bagian tersebut sengaja tidak dikarang.
- Tidak ada fitur antar-jemput.

---

## Mengubah isi halaman

1. Edit partial terkait di `src/partials/`.
2. Jalankan `node build.js`.
3. Header, footer, navigasi bawah, dan chatbot berasal dari `build.js` sehingga tetap konsisten.

Pemeriksaan cepat karakter asing atau em dash:

```bash
node tools/scan-text.js
```
