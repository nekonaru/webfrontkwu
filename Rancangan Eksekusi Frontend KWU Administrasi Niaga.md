# Rancangan Eksekusi Frontend KWU Administrasi Niaga

KWU Campus Business Hub. Dokumen ini menggabungkan arahan awal dan rancangan final menjadi satu acuan pengerjaan.

## 1. Ringkasan konsep

KWU adalah pusat bisnis dan kewirausahaan kampus. Website ini menyatukan katalog produk, transaksi, pengajuan kerja sama, dan informasi kegiatan dalam satu pengalaman digital. Arahnya bukan website kampus yang kaku dan bukan marketplace generik, melainkan brand bisnis modern yang dekat dengan mahasiswa tetapi tetap layak dipakai perusahaan, pemasok, UMKM, dan institusi.

- Fokus tahap ini: frontend saja. Database, API, dan backend belum dibahas mendalam.
- Tagline sementara: "Tempat Ide Bertemu Peluang."
- Headline hero: "IDE BESAR. PELUANG NYATA."
- Bahasa utama: Indonesia, gaya ramah anak muda.
- Tidak ada fitur antar-jemput atau pengiriman oleh KWU.

## 2. Keputusan desain

| Keputusan | Pilihan |
| --- | --- |
| Gaya | Modern, bold, anak muda (judul besar, aksen orange kuat, kartu dinamis) |
| Logo | Wordmark "KWU" sementara, dengan teks kecil "Administrasi Niaga" |
| Cakupan | Seluruh halaman dengan satu sistem desain, dibangun bertahap dari beranda |

Catatan: pilihan gaya, logo, dan cakupan di atas mengikuti arah rancangan final. Ubah bila ada keputusan lain, misalnya logo kampus resmi.

## 3. Sistem desain

### Palet warna

| Nama | Hex | Peran |
| --- | --- | --- |
| KWU Orange | #F47721 | Tombol utama dan aksen |
| KWU Blue | #1756A9 | Navigasi, tombol sekunder, kesan tepercaya |
| White | #FFFFFF | Latar utama dan ruang lega |
| Deep Navy | #102D50 | Teks dan footer |

### Aturan visual

- Font sans-serif modern, misalnya Plus Jakarta Sans.
- Judul besar, pendek, berani. Deskripsi ringkas.
- Sudut kartu sekitar 12 sampai 18 px, jarak antarelemen konsisten.
- Ruang kosong cukup, tidak penuh elemen.
- Animasi ringan pada hover, perpindahan halaman, dan feedback tombol.
- Ikon konsisten. Responsif untuk laptop, tablet, dan HP.
- Hindari slider otomatis berlebihan. Pakai komposisi section yang kuat dan mudah dipindai.

### Wordmark sementara

Tulisan KWU huruf kapital tebal dan sedikit rapat, dengan aksen orange atau biru pada satu bagian. Harus jelas di header desktop, header HP, halaman login, dan footer. Jangan membuat lambang kampus fiktif atau mengubah logo resmi tanpa persetujuan.

## 4. Struktur navigasi

- Navigasi utama: Beranda, Katalog, Bisnis & Kolaborasi, Tentang KWU.
- Aksi kanan: Pencarian, Keranjang, Login / Akun.
- Ikon keranjang selalu terlihat di sebelah tombol login.
- HP: menu hamburger. Pencarian dan keranjang tetap mudah dijangkau, login masuk ke menu bila ruang terbatas.
- Halaman admin tidak masuk navigasi publik. Nantinya `/admin` memakai sistem desain yang sama dengan tampilan berorientasi pengelolaan data.

## 5. Peta halaman dan URL

| Halaman | URL | Fungsi utama |
| --- | --- | --- |
| Beranda | `/` | Memperkenalkan KWU dan mengarahkan pengunjung |
| Katalog | `/katalog` | Mencari, memfilter, menjelajahi produk |
| Detail produk | `/produk/[slug]` | Foto, harga, spesifikasi, stok, pembelian |
| Keranjang | `/keranjang` | Mengelola item dan jumlah |
| Checkout | `/checkout` | Data pembeli dan ringkasan transaksi |
| Konfirmasi transaksi | `/transaksi/[id]` | Ringkasan dan status transaksi |
| Riwayat transaksi | `/akun/transaksi` | Daftar dan detail transaksi pengguna |
| Bisnis & Kolaborasi | `/kolaborasi` | Pintu masuk berbagai jenis pengajuan |
| Pengajuan grosir | `/kolaborasi/grosir` | Formulir RFQ B2B |
| Pengajuan partnership | `/kolaborasi/partnership` | Formulir kemitraan |
| Pengajuan kolaborasi | `/kolaborasi/program` | Formulir event, proyek, program |
| Tentang KWU | `/tentang` | Profil dan informasi KWU |
| Berita dan kegiatan | `/aktivitas` | Artikel dan agenda kewirausahaan |
| Login | `/login` | Masuk ke akun |
| Daftar | `/daftar` | Membuat akun |
| Profil | `/akun` | Data akun dan pengajuan |
| Pusat bantuan | `/bantuan` | FAQ, kontak, panduan |

## 6. Rancangan tiap halaman

### A. Beranda

Urutan section:

1. Hero: judul besar, deskripsi singkat, foto produk atau aktivitas nyata, tombol `Jelajahi Katalog` dan `Ajukan Kerja Sama`. Jangan hanya berisi slogan.
2. Jelajahi produk: kategori visual, produk unggulan dan terbaru, tombol `Lihat Semua Produk`.
3. Bisnis bersama KWU: grosir, kemitraan, pengadaan, kolaborasi program. CTA `Temukan Peluang`.
4. Tentang KWU: pengenalan singkat dan tombol menuju profil lengkap.
5. Cerita dan aktivitas: kegiatan, program, dokumentasi kolaborasi yang benar-benar ada. CTA `Jelajahi Aktivitas`.
6. CTA penutup (belanja atau jadi mitra) lalu footer lengkap.

### B. Katalog dan detail produk

Katalog:

- Pencarian langsung, filter kategori, rentang harga, ketersediaan.
- Pengurutan: terbaru, harga, popularitas.
- Kartu produk: foto besar, nama, harga jelas, status stok, tombol mudah ditemukan.
- Label: `Terbaru`, `Unggulan`, `Grosir`.
- Empty state saat pencarian tidak menemukan produk.

Detail produk:

- Galeri foto, harga, pilihan jumlah, stok, spesifikasi, deskripsi, jumlah minimum pembelian bila berlaku.
- Dua aksi berbeda: `Tambah ke Keranjang` (reguler) dan `Ajukan Grosir` (mengarah ke formulir RFQ).

### C. Keranjang, checkout, dan transaksi

1. Keranjang: foto kecil, nama, harga, ubah kuantitas, hapus item, subtotal, total sementara.
2. Checkout: data pembeli, ringkasan barang, metode pembayaran yang benar-benar didukung, konfirmasi pesanan.
3. Konfirmasi: nomor transaksi, tanggal, ringkasan, status, petunjuk langkah berikutnya.
4. Riwayat: daftar pesanan, filter status, tombol lihat detail.

Status: `Menunggu konfirmasi`, `Menunggu pembayaran`, `Diproses`, `Selesai`, `Dibatalkan`. Status dan metode pembayaran final disesuaikan dengan prosedur resmi KWU. Ringkasan harga harus transparan, tanpa biaya tersembunyi.

### D. Bisnis & Kolaborasi (satu halaman, tiga jalur)

| Jalur | Untuk siapa | Isi formulir |
| --- | --- | --- |
| Pembelian Grosir / RFQ | Organisasi yang butuh jumlah besar | Organisasi, kontak, email bisnis, daftar produk, jumlah, tanggal kebutuhan, lokasi tujuan |
| Partnership | Perusahaan, pemasok, UMKM, institusi | Profil organisasi, bidang usaha, bentuk kemitraan, tujuan, kontak |
| Kolaborasi Program | Event, proyek kreatif, promosi, program kewirausahaan | Nama kegiatan, jenis kolaborasi, deskripsi ide, target, perkiraan jadwal, info pengusul |

Susunan ketiga formulir konsisten: indikator langkah, validasi inline, halaman sukses dengan nomor pengajuan, dan status pengajuan. Tombol aksi: `Ajukan RFQ`, `Jadi Mitra`, `Usulkan Kolaborasi` / `Ajukan Sekarang`.

### E. Login dan akun

- Login tidak wajib untuk melihat katalog. Login diminta saat perlu menyimpan data atau menyelesaikan transaksi.
- Desain login tidak kaku: grafis sederhana orange-biru, formulir ringkas, pesan kesalahan mudah dipahami.
- Halaman akun (sidebar di desktop, navigasi ringkas di HP): profil dan kontak, riwayat transaksi, wishlist atau keranjang tersimpan, status dan riwayat pengajuan kerja sama, pengaturan dan logout.

### F. Chatbot Asisten KWU

- Tombol mengambang di kanan bawah, bisa ditutup dan dibuka kembali.
- Tidak boleh menutupi tombol checkout atau formulir di HP.
- Quick replies: Cari produk, Kerja sama, Bantuan transaksi, Hubungi admin.
- Tahap pertama hanya antarmuka dan alur jawaban contoh. Tidak boleh mengklaim sudah terhubung ke AI atau sistem KWU.
- Rencana kemampuan: FAQ, bantu cari produk, jelaskan proses transaksi, bantu pilih jenis pengajuan, arahkan ke halaman relevan, opsi hubungi admin.

### G. Tentang KWU dan footer

- Halaman Tentang menjelaskan identitas resmi, tujuan, layanan, dan kontribusi KWU bagi kewirausahaan kampus. Jangan mengarang sejarah, angka penjualan, mitra, atau pencapaian yang belum dikonfirmasi.
- Footer di semua halaman publik, latar navy, tulisan putih, aksen orange, bertumpuk rapi di HP:
  - KWU: profil singkat dan identitas Administrasi Niaga.
  - Jelajahi: Beranda, Katalog, Tentang, Aktivitas.
  - Layanan: Transaksi, Grosir, Partnership, Kolaborasi, Bantuan.
  - Informasi: Kebijakan Privasi, Syarat dan Ketentuan, Kebijakan Transaksi, kontak resmi, media sosial, informasi kampus.

## 7. Komponen bersama

| Komponen | Aturan |
| --- | --- |
| `SiteHeader` | Logo, navigasi, pencarian, keranjang, login |
| `SiteFooter` | Informasi, tautan, kontak resmi |
| `PrimaryButton` | Orange, teks kontras, hover dan fokus terlihat, keadaan loading |
| Tombol sekunder | Biru atau outline |
| `ProductCard` | Foto, nama, harga, status stok, aksi |
| `SearchBar` | Input pencarian konsisten |
| `FilterPanel` | Filter katalog responsif |
| `FormField` | Label jelas, validasi inline, pesan bantuan |
| `StatusBadge` | Status transaksi dan pengajuan, teks dan warna mudah dibedakan |
| `EmptyState` | Tampilan saat belum ada data |
| `ChatbotWidget` | Tombol mengambang, jendela chat, quick replies |
| `Toast` | Konfirmasi aksi dan pesan kesalahan |
| `ConfirmDialog` | Konfirmasi tindakan penting |

## 8. Stack dan batas tahap pertama

- Next.js App Router + TypeScript.
- Tailwind CSS untuk sistem desain dan responsivitas.
- Komponen UI bersama agar gaya seragam.
- Data produk dan aktivitas contoh dalam berkas lokal.
- `localStorage` untuk simulasi keranjang dan wishlist.
- Validasi sisi klien pada formulir.
- Data transaksi dan pengajuan simulasi, dengan status yang jelas berbeda dari data nyata.
- Chatbot berupa antarmuka dan alur jawaban contoh.

Aturan kejujuran: setiap tombol punya perilaku jelas. Bila datanya dummy, tampilkan hasil simulasi yang jujur dan jangan memberi kesan pembayaran atau pengajuan resmi sudah berhasil diproses. Login, pembayaran, pengajuan tersimpan, dan pelacakan transaksi nyata baru berfungsi penuh setelah backend terintegrasi.

## 9. Urutan pengerjaan

1. Fondasi desain: warna, tipografi, wordmark, header, footer, tombol, sistem kartu.
2. Beranda: hero, kategori, produk unggulan, bagian kerja sama, pengenalan KWU.
3. Katalog dan detail produk: pencarian, filter, kartu, tombol pembelian.
4. Keranjang dan checkout: alur transaksi dengan data contoh.
5. Bisnis & Kolaborasi: halaman pilihan jalur dan tiga formulir.
6. Login dan akun: autentikasi (tampilan), riwayat transaksi, status pengajuan.
7. Chatbot dan penyempurnaan: antarmuka percakapan, animasi ringan, aksesibilitas, uji mobile.

Jangan membuat semua halaman sekaligus. Bangun dari yang paling penting dan saling terhubung, lalu pakai komponen yang sama di halaman berikutnya.

## 10. Fitur lanjutan (bertahap, setelah inti selesai)

- Rekomendasi produk "Mungkin Kamu Suka" (awalnya pilihan editor tanpa AI).
- Pusat peluang mitra: pemasok, event, program, kerja sama institusi.
- Pelacak pengajuan: timeline visual (diterima, ditinjau, butuh informasi, ditanggapi).
- Cerita bisnis kampus: artikel singkat tentang produk, kegiatan, dan mitra.
- Wishlist dan perbandingan produk.
- Kalender kegiatan KWU: bazar, workshop, pelatihan, kolaborasi.

## 11. Kriteria selesai frontend

- Semua halaman utama bisa dibuka dan saling terhubung.
- Header, footer, tombol, kartu, dan formulir konsisten.
- Nyaman di desktop, tablet, dan HP.
- Pencarian dan filter katalog berfungsi dengan data contoh.
- Keranjang bisa ditambah, diubah, dan dihapus.
- Formulir grosir, partnership, dan kolaborasi punya validasi.
- Chatbot bisa dibuka, ditutup, dan menampilkan contoh percakapan.
- Ada keadaan loading, kosong, sukses, dan error yang sesuai.
- Tidak ada fitur antar-jemput.
- Tidak ada data kampus, produk, mitra, atau transaksi fiktif yang ditampilkan sebagai fakta resmi.

## 12. Perlu dikonfirmasi sebelum peluncuran

- Logo resmi kampus atau KWU (jika ada).
- Alamat, email resmi, akun media sosial, dan identitas kampus yang benar.
- Data produk, foto, dan harga resmi.
- Metode pembayaran dan prosedur penyerahan barang resmi KWU.
- Teks profil, visi-misi, dan tim KWU Administrasi Niaga.
- Isi Kebijakan Privasi, Syarat dan Ketentuan, dan Kebijakan Transaksi.
