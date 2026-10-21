/* =========================================================
   KWU Campus Business Hub — data.js
   Data contoh (simulasi). Semua data di berkas ini adalah data
   contoh dan bukan data resmi KWU / kampus.
   ========================================================= */

const KWU_DATA = {
  /* ---------- Kategori ---------- */
  categories: [
    { id: 'kopi-teh', name: 'Kopi & Teh', desc: 'Hasil panen kampus yang disangrai ringan.', image: 'assets/img/kopi-bubuk.svg', icon: 'coffee' },
    { id: 'snack', name: 'Makanan & Minuman', desc: 'Camilan produksi mitra usaha mahasiswa.', image: 'assets/img/kue.svg', icon: 'cookie' },
    { id: 'fashion', name: 'Fashion & Merchandise', desc: 'Merchandise resmi KWU Administrasi Niaga.', image: 'assets/img/kaos.svg', icon: 'shirt' },
    { id: 'stationery', name: 'Alat Tulis & Kriya', desc: 'Perlengkapan belajar dan kerja.', image: 'assets/img/notebook.svg', icon: 'book' },
    { id: 'rumah-tanis', name: 'Rumah & Taman', desc: 'Dekorasi hijau untuk ruang belajar.', image: 'assets/img/planter.svg', icon: 'leaf' },
    { id: 'paket', name: 'Paket & Bundling', desc: 'Paket hemat siap pakai.', image: 'assets/img/stiker.svg', icon: 'box' }
  ],

  /* ---------- Produk (data contoh) ---------- */
  products: [
    {
      id: 'p01', slug: 'kopi-bubuk-kwu-250g', name: 'Kopi Bubuk KWU 250 g', category: 'kopi-teh',
      price: 42000, comparePrice: 52000, stock: 120, unit: 'pack', minOrder: 1,
      image: 'assets/img/kopi-bubuk.svg', gallery: ['assets/img/kopi-bubuk.svg', 'assets/img/kopi-berry.svg', 'assets/img/gelas.svg'],
      tags: ['unggulan'], rating: 4.8, reviews: 126,
      isNew: false, isFeatured: true, isGrosir: false,
      desc: 'Kopi bubuk dengan profil rasa Medium Roast yang manis dan lembut. Dikemas dalam pouch 250 gram. Cocok diseduh manual maupun dengan mesin espresso dasar.',
      specs: { 'Berat bersih': '250 gram', 'Roast level': 'Medium', 'Biji kopi': 'Arabika', 'Kemasan': 'Standing pouch', 'Asal': 'Kampus KWU' }
    },
    {
      id: 'p02', slug: 'kopi-berry-kwu-200g', name: 'Kopi Berry KWU 200 g', category: 'kopi-teh',
      price: 48000, comparePrice: null, stock: 64, unit: 'pack', minOrder: 1,
      image: 'assets/img/kopi-berry.svg', gallery: ['assets/img/kopi-berry.svg', 'assets/img/kopi-bubuk.svg'],
      tags: ['baru'], rating: 4.7, reviews: 84,
      isNew: true, isFeatured: true, isGrosir: false,
      desc: 'Perpaduan biji kopi dan buah berry untuk rasa fruity yang segar. Kemasan 200 gram dengan label KWU yang mudah dikenali di rak.',
      specs: { 'Berat bersih': '200 gram', 'Roast level': 'Medium', 'Biji kopi': 'Arabika dan Robusta', 'Kemasan': 'Standing pouch', 'Asal': 'Kampus KWU' }
    },
    {
      id: 'p03', slug: 'teh-melati-kwu-25s', name: 'Teh Melati KWU Isi 25 s', category: 'kopi-teh',
      price: 28000, comparePrice: null, stock: 210, unit: 'box', minOrder: 1,
      image: 'assets/img/teh.svg', gallery: ['assets/img/teh.svg'],
      tags: ['grosir'], rating: 4.6, reviews: 57,
      isNew: false, isFeatured: false, isGrosir: true,
      desc: 'Teh melati pilihan dengan aroma bunga yang hangat, dikemas 25 bags dalam dus rapi untuk ditaruh di meja kerja.',
      specs: { 'Isi': '25 bags', 'Bahan': 'Daun teh melati', 'Kemasan': 'Dus', 'Asal': 'Kampus KWU' }
    },
    {
      id: 'p04', slug: 'tote-bag-kanvas-kwu', name: 'Tote Bag Kanvas KWU', category: 'fashion',
      price: 35000, comparePrice: null, stock: 88, unit: 'pcs', minOrder: 1,
      image: 'assets/img/tote-bag.svg', gallery: ['assets/img/tote-bag.svg', 'assets/img/kaos.svg'],
      tags: ['unggulan'], rating: 4.8, reviews: 143,
      isNew: false, isFeatured: true, isGrosir: true,
      desc: 'Tote bag bahan kanvas 12 oz dengan sablon logo KWU. Memuat laptop 14 inci dan buku tebal, dipakai untuk aktivitas sekolah maupun kerja.',
      specs: { 'Bahan': 'Kanvas 12 oz', 'Ukuran': '38 x 42 x 10 cm', 'Sablon': 'Plastisol 1 warna', 'Warna': 'Orange KWU', 'Perawatan': 'Cuci air dingin' }
    },
    {
      id: 'p05', slug: 'hoodie-navy-kwu', name: 'Hoodie Navy KWU', category: 'fashion',
      price: 145000, comparePrice: 165000, stock: 34, unit: 'pcs', minOrder: 1,
      image: 'assets/img/hoodie.svg', gallery: ['assets/img/hoodie.svg', 'assets/img/kaos.svg'],
      tags: ['grosir'], rating: 4.9, reviews: 96,
      isNew: false, isFeatured: true, isGrosir: true,
      desc: 'Hoodie fleece 280 gsm dengan bordir logo KWU dan bagian dalam bertelur. Tersedia ukuran S sampai XXL, cocok untuk event kampus dan merchandise tim.',
      specs: { 'Bahan': 'Cotton fleece 280 gsm', 'Ukuran': 'S sampai XXL', 'Logo': 'Bordir', 'Warna': 'Navy', 'Minimum grosir': '12 pcs' }
    },
    {
      id: 'p06', slug: 'kaos-putih-kwu', name: 'Kaos Putih KWU', category: 'fashion',
      price: 79000, comparePrice: null, stock: 156, unit: 'pcs', minOrder: 1,
      image: 'assets/img/kaos.svg', gallery: ['assets/img/kaos.svg', 'assets/img/hoodie.svg'],
      tags: [], rating: 4.7, reviews: 118,
      isNew: false, isFeatured: false, isGrosir: true,
      desc: 'Kaos cotton combed 30s dengan sablon plastisol dan neck label. Warna putih bersih, cocok untuk event, seminar, dan merchandise harian.',
      specs: { 'Bahan': 'Cotton combed 30s', 'Ukuran': 'S sampai XXL', 'Sablon': 'Plastisol', 'Warna': 'Putih', 'Minimum grosir': '12 pcs' }
    },
    {
      id: 'p07', slug: 'buku-catatan-kwu', name: 'Buku Catatan KWU', category: 'stationery',
      price: 32000, comparePrice: null, stock: 240, unit: 'pcs', minOrder: 1,
      image: 'assets/img/notebook.svg', gallery: ['assets/img/notebook.svg', 'assets/img/stiker.svg'],
      tags: [], rating: 4.5, reviews: 64,
      isNew: false, isFeatured: false, isGrosir: true,
      desc: 'Buku catatan A5 dengan 80 halaman bergaris, cover keras, dan penanda buku. Ruang yang cukup untuk ide, catatan rapat, dan catatan ide usaha.',
      specs: { 'Ukuran': 'A5 (14 x 21 cm)', 'Halaman': '80 halaman bergaris', 'Cover': 'Hard cover', 'Kertas': '80 gsm', 'Binding': 'Spiral' }
    },
    {
      id: 'p08', slug: 'planter-minimalis-kwu', name: 'Planter Minimalis KWU', category: 'rumah-tanis',
      price: 55000, comparePrice: null, stock: 42, unit: 'pcs', minOrder: 1,
      image: 'assets/img/planter.svg', gallery: ['assets/img/planter.svg'],
      tags: ['baru'], rating: 4.6, reviews: 41,
      isNew: true, isFeatured: true, isGrosir: false,
      desc: 'Pot planter keramik dengan finishing matte dan nampan penyiram. Menambah sudut hijau di ruang kelas, kos, atau meja kerja.',
      specs: { 'Material': 'Keramik dan nampan', 'Diameter': '16 cm', 'Tinggi': '18 cm', 'Finishing': 'Matte orange', 'Termasuk': 'Nampan penyiram' }
    },
    {
      id: 'p09', slug: 'lilin-kedelai-kwu', name: 'Lilin Kedelai Aroma Hangat', category: 'rumah-tanis',
      price: 38000, comparePrice: 45000, stock: 0, unit: 'pcs', minOrder: 1,
      image: 'assets/img/lilin.svg', gallery: ['assets/img/lilin.svg'],
      tags: ['habis'], rating: 4.9, reviews: 72,
      isNew: false, isFeatured: false, isGrosir: false,
      desc: 'Lilin kedelai murni dengan sumbu katun, waktu bakar sekitar 20 jam, dan aroma amber yang lembut. Diolah dari kedelai lokal.',
      specs: { 'Volume': '180 gram', 'Bahan': 'Lilin kedelai', 'Sumbu': 'Katun', 'Waktu bakar': 'Sekitar 20 jam', 'Warna': 'Amber' }
    },
    {
      id: 'p10', slug: 'kue-expiring-box-kwu', name: 'Kue Expiring Box KWU', category: 'snack',
      price: 55000, comparePrice: null, stock: 75, unit: 'box', minOrder: 1,
      image: 'assets/img/kue.svg', gallery: ['assets/img/kue.svg'],
      tags: [], rating: 4.7, reviews: 88,
      isNew: false, isFeatured: false, isGrosir: false,
      desc: 'Kue expires renyah dengan pilihan rasa yang berganti setiap pekan. Dikemas 12 pcs per dus, dengan tanggal produksi pada label.',
      specs: { 'Isi': '12 pcs', 'Varian': '5 rasa', 'Daya simpan': '7 hari', 'Kemasan': 'Dus dan inner box', 'Catatan': 'Produk fresh, kirim sesuai jadwal' }
    },
    {
      id: 'p11', slug: 'gelas-keramik-kwu', name: 'Gelas Keramik KWU', category: 'rumah-tanis',
      price: 45000, comparePrice: null, stock: 58, unit: 'pcs', minOrder: 1,
      image: 'assets/img/gelas.svg', gallery: ['assets/img/gelas.svg'],
      tags: [], rating: 4.4, reviews: 37,
      isNew: false, isFeatured: false, isGrosir: true,
      desc: 'Gelas keramik 350 ml dengan cetakan logo KWU. Aman untuk minuman panas dan penggunaan harian.',
      specs: { 'Volume': '350 ml', 'Material': 'Keramik', 'Tinggi': '10 cm', 'Diameter': '8 cm', 'Keterangan': 'Food grade (simulasi)' }
    },
    {
      id: 'p12', slug: 'stiker-phone-holder-kwu', name: 'Stiker dan Phone Holder KWU', category: 'stationery',
      price: 25000, comparePrice: null, stock: 310, unit: 'paket', minOrder: 1,
      image: 'assets/img/stiker.svg', gallery: ['assets/img/stiker.svg', 'assets/img/notebook.svg'],
      tags: ['baru'], rating: 4.6, reviews: 152,
      isNew: true, isFeatured: true, isGrosir: false,
      desc: 'Paket stiker KWU dan phone holder untuk meja kerja. Stiker tahan air, holder ringan dan mudah dilepas.',
      specs: { 'Isi': '1 set stiker dan 1 holder', 'Bahan stiker': 'Vinyl tahan air', 'Holder': 'Aluminium', 'Ukuran holder': '10 x 7 cm', 'Perawatan': 'Bersihkan dengan kain lembap' }
    },
    {
      id: 'p13', slug: 'paket-hemat-ngopi', name: 'Paket Hemat Ngopi', category: 'paket',
      price: 89000, comparePrice: 108000, stock: 46, unit: 'paket', minOrder: 1,
      image: 'assets/img/kopi-berry.svg', gallery: ['assets/img/kopi-berry.svg', 'assets/img/kopi-bubuk.svg'],
      tags: ['unggulan'], rating: 4.8, reviews: 203,
      isNew: false, isFeatured: true, isGrosir: true,
      desc: 'Isi dua pouch kopi bubuk 250 gram dan satu dus teh melati. Paket yang paling sering dipilih untuk kerja kelompok dan acara kecil.',
      specs: { 'Isi': '2 pouch kopi dan 1 dus teh', 'Total berat': '525 gram dan 25 teh', 'Penghematan': 'Sekitar Rp 19.000', 'Kondisi': 'Paket baru', 'Minimum grosir': '5 paket' }
    },
    {
      id: 'p14', slug: 'paket-merchandise-kampus', name: 'Paket Merchandise Kampus', category: 'paket',
      price: 199000, comparePrice: 249000, stock: 22, unit: 'paket', minOrder: 1,
      image: 'assets/img/kaos.svg', gallery: ['assets/img/kaos.svg', 'assets/img/hoodie.svg', 'assets/img/tote-bag.svg'],
      tags: ['grosir'], rating: 4.9, reviews: 64,
      isNew: false, isFeatured: false, isGrosir: true,
      desc: 'Satu kaos, satu hoodie, satu tote bag, dan satu buku catatan. Paket event untuk kebutuhan tim dan souvenir Delegates.',
      specs: { 'Isi': 'Kaos, hoodie, tote, buku', 'Ukuran': 'S sampai XXL', 'Penghematan': 'Sekitar Rp 50.000', 'Kondisi': 'Paket baru', 'Minimum grosir': '5 paket' }
    }
  ],

  /* ---------- Aktivitas dan berita (data contoh) ---------- */
  activities: [
    {
      id: 'a1', slug: 'bazar-usaha-mahasiswa', title: 'Bazar Usaha Mahasiswa: Puluhan Brand Kampung',
      excerpt: 'Bazar dua hari yang mempertemukan produk mahasiswa dengan pembeli dan calon mitra dagang.',
      date: '2026-09-18', category: 'Kegiatan', readTime: 4, image: 'assets/img/scene-2.svg',
      body: 'Bazar usaha mahasiswa mempertemukan puluhan brand lokal. Seluruh transaksi memakai katalog KWU dan pencatatan pesanan terpusat.'
    },
    {
      id: 'a2', slug: 'lokakarya-brand-mahasiswa', title: 'Lokakarya Membangun Brand dari Nol',
      excerpt: 'Workshop satu hari untuk mahasiswa yang ingin memulai peluncuran produk dengan judul harga dan kemasan yang rapi.',
      date: '2026-08-27', category: 'Workshop', readTime: 6, image: 'assets/img/scene-3.svg',
      body: 'Lokakarya membahas riset pasar, penentuan harga, dan desain kemasan. Peserta membuat mockup label sederhana.'
    },
    {
      id: 'a3', slug: 'kopdar-mitra-usaha', title: 'Kopdar Mitra Usaha: Belajar dari Praktis',
      excerpt: 'Diskusi terbuka antara pelaku usaha mahasiswa dan alumni tentang channel penjualan.',
      date: '2026-08-05', category: 'Kolaborasi', readTime: 5, image: 'assets/img/scene-4.svg',
      body: 'Sesi berbagi dari alumni usaha dan pembicara dari lingkungan industri. Ringkasan materi tersedia setelah acara.'
    },
    {
      id: 'a4', slug: 'pelatihan-penjualan-online', title: 'Pelatihan Penjualan Online untuk Mitra',
      excerpt: 'Cara menampilkan produk, menjelaskan manfaat, dan menangani pertanyaan pembeli.',
      date: '2026-07-12', category: 'Pelatihan', readTime: 7, image: 'assets/img/scene-1.svg',
      body: 'Pelatihan dua sesi dengan latihan langsung pada katalog simulasi KWU.'
    },
    {
      id: 'a5', slug: 'program-pendampingan-produk', title: 'Program Pendampingan Produk Unggulan',
      excerpt: 'Pendampingan selama satu semester untuk produk yang siap naik kelas.',
      date: '2026-06-20', category: 'Program', readTime: 8, image: 'assets/img/scene-2.svg',
      body: 'Pendampingan mencakup penataan produk, pelabelan, dan promosi internal kampus.'
    },
    {
      id: 'a6', slug: 'audit-kemasan-label', title: 'Audit Kemasan dan Label Produk Mitra',
      excerpt: 'Evaluasi keterbacaan informasi kemasan agar pembeli tidak keliru menilai.',
      date: '2026-05-30', category: 'Kolaborasi', readTime: 5, image: 'assets/img/scene-3.svg',
      body: 'Tim KWU meninjau kelengkapan informasi kemasan: berat, bahan, tanggal, dan kontak.'
    }
  ],

  /* ---------- Agenda kegiatan (data contoh) ---------- */
  events: [
    { date: '2026-11-12', month: 'Nov', day: '12', title: 'Open House Produk Kriya', location: 'Ruang Pamer', desc: 'Open house produksi aksesoris mahasiswa.' },
    { date: '2026-11-28', month: 'Nov', day: '28', title: 'Bazar Buku dan Alat Tulis', location: 'Halaman Utama', desc: 'Bazar buku bekas dan alat tulis.' },
    { date: '2026-12-09', month: 'Des', day: '09', title: 'Kopdar Mitra Usaha', location: 'Ruang Multimoda', desc: 'Pertemuan rutin pelaku usaha mitra.' },
    { date: '2026-12-20', month: 'Des', day: '20', title: 'Night Market KWU', location: 'Area Parkir', desc: 'Bazar akhir semester.' }
  ],

  /* ---------- Jalur kolaborasi ---------- */
  paths: [
    {
      id: 'grosir', icon: 'box', title: 'Pembelian Grosir / RFQ',
      desc: 'Untuk organisasi, instansi, atau toko yang membutuhkan jumlah besar dengan harga khusus.',
      points: ['Harga khusus berdasarkan kuantitas', 'Dukungan sampel produk', 'Pengiriman ke alamat tujuan'],
      cta: 'Ajukan RFQ', href: 'kolaborasi-grosir.html'
    },
    {
      id: 'partnership', icon: 'handshake', title: 'Partnership',
      desc: 'Untuk perusahaan, pemasok, UMKM, dan institusi yang ingin bekerja sama dengan KWU.',
      points: ['Kemitraan produk dan distribusi', 'Kolaborasi kegiatan dan event', 'Konsultasi akses pasar kampus'],
      cta: 'Jadi Mitra', href: 'kolaborasi-partnership.html'
    },
    {
      id: 'program', icon: 'spark', title: 'Kolaborasi Program',
      desc: 'Untuk event, proyek kreatif, promosi, dan program kewirausahaan kampus.',
      points: ['Ruang acara dan publikasi', 'Pendampingan program', 'Promosi ke jaringan mahasiswa'],
      cta: 'Usulkan Kolaborasi', href: 'kolaborasi-program.html'
    }
  ],

  /* ---------- FAQ (data contoh) ---------- */
  faqs: [
    { q: 'Apakah saya harus login untuk melihat katalog?', a: 'Tidak. Katalog, kategori, dan detail produk dapat diakses tanpa login. Login dibutuhkan saat menyimpan wishlist, mengisi formulir kerja sama, dan menyelesaikan transaksi.' },
    { q: 'Berapa lama pesanan diproses?', a: 'Pada tahap frontend ini, alur pemesanan hanya simulasi. Waktu proses dan serah terima resmi akan ditampilkan setelah prosedur KWU tersedia.' },
    { q: 'Apakah KWU menyediakan antar-jemput atau pengiriman?', a: 'Tidak. KWU tidak menyediakan layanan antar-jemput. Pengambilan atau pengiriman produk mengikuti ketentuan resmi yang akan diumumkan KWU.' },
    { q: 'Bagaimana cara mengajukan pembelian grosir?', a: 'Gunakan formulir RFQ pada halaman Kolaborasi Grosir. Isi data organisasi, daftar produk, jumlah, dan tanggal kebutuhan. Nomor pengajuan muncul setelah formulir dikirim.' },
    { q: 'Berapa minimum pembelian grosir?', a: 'Setiap produk memiliki minimum pembelian berbeda, umumnya mulai dari 5 paket. Detail minimum tampil pada setiap halaman produk dan dapat disesuaikan oleh admin KWU.' },
    { q: 'Metode pembayaran apa saja yang didukung?', a: 'Pada versi simulasi ini pilihan metode ditampilkan sebagai contoh. Metode pembayaran final mengikuti prosedur resmi KWU Administrasi Niaga.' },
    { q: 'Bisakah melacak status pengajuan kerja sama?', a: 'Ya. Setiap pengajuan yang tersimpan memiliki nomor dan status di halaman Akun, menu Pengajuan.' },
    { q: 'Apakah data transaksi saya aman?', a: 'Frontend ini belum terhubung ke server. Data tersimpan secara lokal di peramban Anda untuk simulasi dan akan hilang saat cache browser dibersihkan.' }
  ],

  /* ---------- Metode pembayaran (simulasi) ---------- */
  payments: [
    { id: 'qris', name: 'QRIS', desc: 'Pemindaian QR melalui aplikasi pembayaran digital.', icon: 'qr' },
    { id: 'transfer', name: 'Transfer Bank', desc: 'Virtual account atau transfer manual ke rekening resmi.', icon: 'bank' },
    { id: 'tunai', name: 'Tunai di KWU', desc: 'Pembayaran langsung di loket KWU Administrasi Niaga.', icon: 'cash' }
  ],

  /* ---------- Status transaksi ---------- */
  orderStatus: [
    { id: 'menunggu_konfirmasi', label: 'Menunggu Konfirmasi', tone: 'warning' },
    { id: 'menunggu_pembayaran', label: 'Menunggu Pembayaran', tone: 'info' },
    { id: 'diproses', label: 'Diproses', tone: 'blue' },
    { id: 'selesai', label: 'Selesai', tone: 'success' },
    { id: 'dibatalkan', label: 'Dibatalkan', tone: 'danger' }
  ],

  /* ---------- Status pengajuan ---------- */
  requestStatus: [
    { id: 'diterima', label: 'Diterima', tone: 'success' },
    { id: 'ditinjau', label: 'Ditinjau', tone: 'info' },
    { id: 'butuh_informasi', label: 'Butuh Informasi', tone: 'warning' },
    { id: 'ditanggapi', label: 'Ditanggapi', tone: 'blue' }
  ]
};

if (typeof window !== 'undefined') window.KWU_DATA = KWU_DATA;
