/* =========================================================
   KWU Campus Business Hub - data.js
   Data katalog untuk prototipe antarmuka.

   CATATAN: seluruh nama brand, produk, harga, dan ulasan di
   berkas ini adalah karangan untuk keperluan demo antarmuka.
   KWU bukan brand dagang, sehingga tidak ada klaim bahwa
   produk di bawah ini berasal dari KWU atau pihak mana pun.
   ========================================================= */

const KWU_DATA = {
  /* ---------- Kategori ---------- */
  categories: [
    {
      id: 'makanan', name: 'Makanan', icon: 'cookie',
      desc: 'Camilan, kue, dan jajanan dari dapur mitra lokal.',
      image: 'assets/img/produk/snackbox-0.jpg'
    },
    {
      id: 'minuman', name: 'Minuman', icon: 'coffee',
      desc: 'Kopi, teh, susu, dan minuman racikan khas daerah.',
      image: 'assets/img/produk/kopisusu-1.jpg'
    },
    {
      id: 'merchandise', name: 'Merchandise & Aksesoris', icon: 'shirt',
      desc: 'Pakaian, tas, dan perlengkapan harian dari koleksi lokal.',
      image: 'assets/img/produk/kaos-0.jpg'
    },
    {
      id: 'alat-tulis', name: 'Alat Tulis & Kreativitas', icon: 'book',
      desc: 'Perlengkapan belajar, bekerja, dan berkarya.',
      image: 'assets/img/produk/buku-2.jpg'
    },
    {
      id: 'paket', name: 'Paket Hemat', icon: 'box',
      desc: 'Bundling terbaik untuk kebutuhan acara dan kantor.',
      image: 'assets/img/produk/hadiah-0.jpg'
    }
  ],

  /* ---------- Produk: MAKANAN ---------- */
  productsMakanan: [
    {
      id: 'm01', slug: 'keripik-pisang-madu-sari-banih', name: 'Keripik Pisang Madu', brand: 'Sari Banih',
      category: 'makanan', price: 18000, comparePrice: 22000, stock: 240, unit: 'pak', minOrder: 6,
      image: 'assets/img/produk/keripik-1.jpg', gallery: ['assets/img/produk/keripik-1.jpg', 'assets/img/produk/keripik-2.jpg'],
      tags: ['unggulan'], rating: 4.7, reviewCount: 128,
      desc: 'Pisang cavendish dari kebun lokal diolah menjadi keripik dengan pengeringan lambat sehingga tetap renyah. Tersedia dalam tiga rasa: original, madu, dan_original.',
      specs: { 'Berat bersih': '120 gram', 'Rasa': 'Original, Madu, Pisang Cavendish', 'Bahan': 'Pisang, minyak kelapa', 'Kemasan': 'Standing pouch', 'Daya simpan': '4 bulan' },
      isNew: false, isFeatured: true, isGrosir: true
    },
    {
      id: 'm02', slug: 'cookies-cokelat-rumah-biskuit', name: 'Cookies Cokelat Chip', brand: 'Rumah Biskuit',
      category: 'makanan', price: 32000, comparePrice: null, stock: 180, unit: 'box', minOrder: 4,
      image: 'assets/img/produk/biskuit-0.jpg', gallery: ['assets/img/produk/biskuit-0.jpg', 'assets/img/produk/biskuit-2.jpg'],
      tags: ['unggulan'], rating: 4.8, reviewCount: 214,
      desc: 'Biskuit renyah dengan butiran cokelat yang melimpah. Dipanggang setiap hari dalam batch kecil supaya rasa dan teksturnya konsisten.',
      specs: { 'Isi': '12 pcs', 'Berat bersih': '300 gram', 'Bahan': 'Tepung, mentega, cokelat', 'Daya simpan': '3 minggu', 'Alergi': 'Mengandung susu dan gandum' },
      isNew: false, isFeatured: true, isGrosir: true
    },
    {
      id: 'm03', slug: 'kue-lapis-legit-dapoer-cahaya', name: 'Kue Lapis Legit Kukus', brand: 'Dapoer Cahaya',
      category: 'makanan', price: 45000, comparePrice: 52000, stock: 96, unit: 'box', minOrder: 3,
      image: 'assets/img/produk/kue-2.jpg', gallery: ['assets/img/produk/kue-2.jpg', 'assets/img/produk/kue-0.jpg'],
      tags: ['baru'], rating: 4.6, reviewCount: 87,
      desc: 'Kue lapis kukus dengan santan premium, ketan, dan gula aren. Lapisannya rapat dan tidak mudah lepas saat dipotong.',
      specs: { 'Isi': '8 potong', 'Berat bersih': '400 gram', 'Bahan': 'Santan, ketan, gula aren', 'Daya simpan': '3 hari', 'Kondisi': 'Simpan di lemari es' },
      isNew: true, isFeatured: true, isGrosir: false
    },
    {
      id: 'm04', slug: 'sambal-bawang-nusa-rasa', name: 'Sambal Bawang Ekstrak 200 g', brand: 'Nusa Rasa',
      category: 'makanan', price: 28000, comparePrice: null, stock: 320, unit: 'botol', minOrder: 12,
      image: 'assets/img/produk/sambal-0.jpg', gallery: ['assets/img/produk/sambal-0.jpg'],
      tags: ['grosir'], rating: 4.5, reviewCount: 156,
      desc: 'Sambal bawang goreng dengan tingkat pedas yang buildup secara bertahap. Bawang merah dan cabai dihaluskan masih segar.',
      specs: { 'Berat bersih': '200 gram', 'Level pedas': 'Sedang hingga pedas', 'Bahan': 'Bawang merah, cabai, terasi', 'Kemasan': 'Botol kaca 200 ml', 'Daya simpan': '6 bulan' },
      isNew: false, isFeatured: false, isGrosir: true
    },
    {
      id: 'm05', slug: 'kerupuk-udang-samudra-kencana', name: 'Kerupuk Udang Panen', brand: 'Samudra Kencana',
      category: 'makanan', price: 35000, comparePrice: null, stock: 140, unit: 'pak', minOrder: 6,
      image: 'assets/img/produk/kerupuk-1.jpg', gallery: ['assets/img/produk/kerupuk-1.jpg', 'assets/img/produk/kerupuk-2.jpg'],
      tags: [], rating: 4.4, reviewCount: 63,
      desc: 'Kerupuk udang dengan tekstur renyah di luar dan lembut di dalam. Dibuat dari udang segar tanpa pemanis buatan.',
      specs: { 'Berat bersih': '250 gram', 'Bahan': 'Udang, pati, BUMI', 'Rasa': 'Original dan pedas', 'Kemasan': 'Plastik vakum', 'Daya simpan': '5 bulan' },
      isNew: false, isFeatured: false, isGrosir: true
    },
    {
      id: 'm06', slug: 'brownies-panggang-cokelat-ruma', name: 'Brownies Panggang 6 pcs', brand: 'Cokelat Ruma',
      category: 'makanan', price: 42000, comparePrice: 48000, stock: 110, unit: 'box', minOrder: 3,
      image: 'assets/img/produk/brownies-0.jpg', gallery: ['assets/img/produk/brownies-0.jpg', 'assets/img/produk/brownies-1.jpg'],
      tags: ['unggulan'], rating: 4.8, reviewCount: 142,
      desc: 'Brownies dengan bagian tengah yang lembut dan lapisan atas yangkenyal. Dipanggang per pesanan supaya teksturnya tetap lembut.',
      specs: { 'Isi': '6 potong', 'Berat bersih': '450 gram', 'Bahan': 'Cokelat 70%, mentega, telur', 'Daya simpan': '5 hari', 'Kondisi': 'Simpan di lemari es' },
      isNew: false, isFeatured: true, isGrosir: false
    },
    {
      id: 'm07', slug: 'biskuit-assortment-gandum-jaya', name: 'Biskuit Assortment 300 g', brand: 'Gandum Jaya',
      category: 'makanan', price: 26000, comparePrice: null, stock: 210, unit: 'pak', minOrder: 8,
      image: 'assets/img/produk/biskuit-1.jpg', gallery: ['assets/img/produk/biskuit-1.jpg', 'assets/img/produk/biskuit-3.jpg'],
      tags: [], rating: 4.3, reviewCount: 74,
      desc: 'Isi assortment: butter, cokelat, dan sandwich krim. Cocok sebagai pengisi waktu rapat atau camilan di meja kerja.',
      specs: { 'Isi': '18 pcs', 'Berat bersih': '300 gram', 'Varian': 'Butter, cokelat, sandwich', 'Kemasan': 'Plastik rapat', 'Daya simpan': '2 bulan' },
      isNew: false, isFeatured: false, isGrosir: true
    },
    {
      id: 'm08', slug: 'jelly-buah-kaleng-fruit-kitchen', name: 'Jelly Buah Kaleng 6 pcs', brand: 'Fruit Kitchen',
      category: 'makanan', price: 24000, comparePrice: null, stock: 260, unit: 'box', minOrder: 6,
      image: 'assets/img/produk/jelly-0.jpg', gallery: ['assets/img/produk/jelly-0.jpg', 'assets/img/produk/jelly-1.jpg'],
      tags: ['baru'], rating: 4.5, reviewCount: 58,
      desc: 'Jelly buah dengan potongan buah yang utuh dan rasa buah yang terasa. Enam varian rasa dalam satu dus.',
      specs: { 'Isi': '6 cup', 'Berat bersih': '600 gram', 'Varian': 'Ananas, anggur, stroberi, dan lainnya', 'Bahan': 'Buah, gelatin, gula', 'Daya simpan': '6 bulan' },
      isNew: true, isFeatured: false, isGrosir: true
    },
    {
      id: 'm09', slug: 'es-krim-puter-dingin-indo', name: 'Es Krim Puter 5 Cup', brand: 'Dingin Indo',
      category: 'makanan', price: 30000, comparePrice: null, stock: 95, unit: 'box', minOrder: 4,
      image: 'assets/img/produk/eskrim-0.jpg', gallery: ['assets/img/produk/eskrim-0.jpg', 'assets/img/produk/eskrim-1.jpg'],
      tags: [], rating: 4.6, reviewCount: 81,
      desc: 'Es krim puter dengan kadar susu tinggi,teksturnya padat tapi tetap lembut di lidah. Dikemas bersama dry ice agar tetap beku.',
      specs: { 'Isi': '5 cup', 'Varian': 'Original, cokelat, stroberi', 'Berat bersih': '750 gram', 'Pengiriman': 'Dengan dry ice', 'Daya simpan': 'Simpan di freezer' },
      isNew: false, isFeatured: false, isGrosir: false
    },
    {
      id: 'm10', slug: 'snack-box-8-varian-rasa-ria', name: 'Snack Box 8 Varian', brand: 'Rasa Ria',
      category: 'makanan', price: 88000, comparePrice: 105000, stock: 70, unit: 'box', minOrder: 2,
      image: 'assets/img/produk/snackbox-0.jpg', gallery: ['assets/img/produk/snackbox-0.jpg', 'assets/img/produk/snackbox-2.jpg'],
      tags: ['unggulan', 'grosir'], rating: 4.7, reviewCount: 119,
      desc: 'Satu dus berisi delapan varian camilan: keripik, biskuit, jelly, kerupuk, dan lainnya. Praktis untuk dibawa pulang atau dibagikan.',
      specs: { 'Isi': '8 varian', 'Berat bersih': '1 kilogram', 'Kemasan': 'Dus karton', 'Bonus': 'Kartu ucapan', 'Minimum grosir': '2 dus' },
      isNew: false, isFeatured: true, isGrosir: true
    }
  ],

  /* ---------- Produk: MINUMAN ---------- */
  productsMinuman: [
    {
      id: 'mn01', slug: 'kopi-susu-gula-aren-kopi-kanduri', name: 'Kopi Susu Gula Aren 250 ml', brand: 'Kopi Kanduri',
      category: 'minuman', price: 28000, comparePrice: null, stock: 300, unit: 'botol', minOrder: 12,
      image: 'assets/img/produk/kopisusu-1.jpg', gallery: ['assets/img/produk/kopisusu-1.jpg', 'assets/img/produk/kopisusu-3.jpg'],
      tags: ['unggulan'], rating: 4.8, reviewCount: 236,
      desc: 'Kopi susu dengan pemanis gula aren tanpa tambahan gula putih. Rasanya tebal dan berlapis,similar dengan kopi di kedai lokal.',
      specs: { 'Volume': '250 ml', 'Kadar kopi': '3 gram', 'Pemanis': 'Gula aren', 'Kemasan': 'Botol HDPE', 'Daya simpan': '9 bulan' },
      isNew: false, isFeatured: true, isGrosir: true
    },
    {
      id: 'mn02', slug: 'kopi-bubuk-200g-kopi-rindu', name: 'Kopi Bubuk 200 g', brand: 'Kopi Rindu',
      category: 'minuman', price: 45000, comparePrice: 52000, stock: 150, unit: 'pak', minOrder: 6,
      image: 'assets/img/produk/kopibiji-2.jpg', gallery: ['assets/img/produk/kopibiji-2.jpg', 'assets/img/produk/kopibiji-0.jpg'],
      tags: [], rating: 4.5, reviewCount: 97,
      desc: 'Kopi bubuk untuk filter dan espresso, profil rasa medium dengan catatan cokelat dan remah. Dikemas dalam pouch 200 gram.',
      specs: { 'Berat bersih': '200 gram', 'Roast level': 'Medium', 'Biji': 'Arabika dan robusta', 'Kemasan': 'Standing pouch', 'Daya simpan': '8 bulan' },
      isNew: false, isFeatured: true, isGrosir: true
    },
    {
      id: 'mn03', slug: 'teh-celup-melati-25s-teh-alam', name: 'Teh Celup Melati 25 s', brand: 'Teh Alam',
      category: 'minuman', price: 22000, comparePrice: null, stock: 280, unit: 'box', minOrder: 10,
      image: 'assets/img/produk/teh-1.jpg', gallery: ['assets/img/produk/teh-1.jpg', 'assets/img/produk/teh-2.jpg'],
      tags: ['grosir'], rating: 4.6, reviewCount: 112,
      desc: 'Teh melati celup dengan aroma bunga yang jelas dan rasa yang tidak pahit meski diseduh berulang kali.',
      specs: { 'Isi': '25 bags', 'Bahan': 'Daun teh melati', 'Kemasan': 'Dus dengan 5 envelope', 'Daya simpan': '12 bulan', 'Aroma': 'Melati' },
      isNew: false, isFeatured: false, isGrosir: true
    },
    {
      id: 'mn04', slug: 'sirup-markisa-630ml-buah-naga', name: 'Sirup Markisa 630 ml', brand: 'Buah Naga',
      category: 'minuman', price: 38000, comparePrice: null, stock: 190, unit: 'botol', minOrder: 12,
      image: 'assets/img/produk/sirup-0.jpg', gallery: ['assets/img/produk/sirup-0.jpg', 'assets/img/produk/sirup-2.jpg'],
      tags: [], rating: 4.4, reviewCount: 68,
      desc: 'Sirup markisa pekat dari buah markisa tropis, tanpa pewarna buatan. Cukup untuk membuat 15 gelas minuman dingin.',
      specs: { 'Volume': '630 ml', 'Bahan': 'Ekstrak markisa, gula', 'Pewarna': 'Tanpa pewarna buatan', 'Kemasan': 'Botol kaca', 'Daya simpan': '9 bulan' },
      isNew: false, isFeatured: false, isGrosir: true
    },
    {
      id: 'mn05', slug: 'jus-mangga-250ml-sari-buah', name: 'Jus Mangga Botol 250 ml', brand: 'Sari Buah',
      category: 'minuman', price: 15000, comparePrice: null, stock: 420, unit: 'botol', minOrder: 24,
      image: 'assets/img/produk/jusmangga-0.jpg', gallery: ['assets/img/produk/jusmangga-0.jpg', 'assets/img/produk/jusmangga-2.jpg'],
      tags: ['grosir'], rating: 4.3, reviewCount: 89,
      desc: 'Jus mangga harum manis dengan kandungan pulp buah yang terasa. Botol PET ringan, praktis dibawa ke acara atau rapat.',
      specs: { 'Volume': '250 ml', 'Bahan': 'Pulp mangga 30 persen', 'Kemasan': 'Botol PET', 'Daya simpan': '6 bulan', 'Suhu': 'Simpan suhu ruang' },
      isNew: false, isFeatured: false, isGrosir: true
    },
    {
      id: 'mn06', slug: 'susu-uht-full-cream-1l-sapi-perah', name: 'Susu UHT Full Cream 1 L', brand: 'Sapi Perah',
      category: 'minuman', price: 28000, comparePrice: 30000, stock: 260, unit: 'kotak', minOrder: 12,
      image: 'assets/img/produk/susu-0.jpg', gallery: ['assets/img/produk/susu-0.jpg', 'assets/img/produk/susu-2.jpg'],
      tags: [], rating: 4.5, reviewCount: 134,
      desc: 'Susu UHT full cream dengan kadar lemak 3,5 persen. Krimnya tebal dan rasa susunya terasa, tanpa pemanis tambahan.',
      specs: { 'Volume': '1 liter', 'Kadar lemak': '3,5 persen', 'Susu': '100 persen susu sapi', 'Kemasan': 'Kotak aseptik', 'Daya simpan': '9 bulan' },
      isNew: false, isFeatured: false, isGrosir: true
    },
    {
      id: 'mn07', slug: 'matcha-latte-botol-250ml-zen-matcha', name: 'Matcha Latte Botol 250 ml', brand: 'Zen Matcha',
      category: 'minuman', price: 35000, comparePrice: null, stock: 175, unit: 'botol', minOrder: 12,
      image: 'assets/img/produk/matcha-0.jpg', gallery: ['assets/img/produk/matcha-0.jpg', 'assets/img/produk/matcha-2.jpg'],
      tags: ['baru'], rating: 4.7, reviewCount: 102,
      desc: 'Matcha latte siap minum dengan matcha dari daun hijau pilihan dan susu. Rasanya sedikit pahit dan creamy, tidak terlalu manis.',
      specs: { 'Volume': '250 ml', 'Bahan': 'Matcha, susu, pemanis alami', 'Kadar matcha': '1,2 gram', 'Kemasan': 'Botol', 'Daya simpan': '6 bulan' },
      isNew: true, isFeatured: true, isGrosir: true
    },
    {
      id: 'mn08', slug: 'madu-hutan-250ml-madu-rimba', name: 'Madu Hutan Botol 250 ml', brand: 'Madu Rimba',
      category: 'minuman', price: 65000, comparePrice: 72000, stock: 85, unit: 'botol', minOrder: 6,
      image: 'assets/img/produk/madu-0.jpg', gallery: ['assets/img/produk/madu-0.jpg', 'assets/img/produk/madu-1.jpg'],
      tags: [], rating: 4.8, reviewCount: 76,
      desc: 'Madu hutan liar yang dipanen dari lebah liar di kawasan pegunungan. Warnanya gelap dan rasaannya lebih kuat dari madu toko.',
      specs: { 'Volume': '250 ml', 'Jenis': 'Madu hutan liar', 'Kadar air': 'Maksimal 20 persen', 'Kemasan': 'Botol kaca', 'Daya simpan': '12 bulan' },
      isNew: false, isFeatured: true, isGrosir: false
    }
  ],

  /* ---------- Produk: MERCHANDISE & AKSESORIS ---------- */
  productsMerch: [
    {
      id: 'mc01', slug: 'kaos-katun-heavy-koleksi-harian', name: 'Kaos Katun Heavy 30s', brand: 'Koleksi Harian',
      category: 'merchandise', price: 89000, comparePrice: 105000, stock: 140, unit: 'pcs', minOrder: 12,
      image: 'assets/img/produk/kaos-0.jpg', gallery: ['assets/img/produk/kaos-0.jpg', 'assets/img/produk/kaos-2.jpg'],
      tags: ['unggulan', 'grosir'], rating: 4.7, reviewCount: 158,
      desc: 'Kaos katun combed 30s dengan jahitan rapi dan label leher khusus. Potongan regular fit yang nyaman dipakai seharian.',
      specs: { 'Bahan': 'Cotton combed 30s', 'Ukuran': 'S sampai XXL', 'Jahitan': 'Rantai 220 jahitan', 'Warna': 'Putih dan navy', 'Minimum grosir': '12 pcs' },
      isNew: false, isFeatured: true, isGrosir: true
    },
    {
      id: 'mc02', slug: 'hoodie-oversize-koleksi-harian', name: 'Hoodie Oversize Fleece', brand: 'Koleksi Harian',
      category: 'merchandise', price: 165000, comparePrice: 189000, stock: 90, unit: 'pcs', minOrder: 12,
      image: 'assets/img/produk/hoodie-3.jpg', gallery: ['assets/img/produk/hoodie-3.jpg', 'assets/img/produk/hoodie-1.jpg'],
      tags: ['grosir'], rating: 4.8, reviewCount: 112,
      desc: 'Hoodie potongan oversize dengan fleece 320 gsm yang hangat tapi tidak berat. Ada saku depan dan tali yang bisa diatur.',
      specs: { 'Bahan': 'Cotton fleece 320 gsm', 'Ukuran': 'M sampai XXL', 'Potongan': 'Oversize', 'Warna': 'Hitam dan abu', 'Minimum grosir': '12 pcs' },
      isNew: false, isFeatured: true, isGrosir: true
    },
    {
      id: 'mc03', slug: 'totebag-kanvas-serat-lokal', name: 'Totebag Kanvas Serat', brand: 'Serat Lokal',
      category: 'merchandise', price: 45000, comparePrice: null, stock: 210, unit: 'pcs', minOrder: 20,
      image: 'assets/img/produk/totebag-0.jpg', gallery: ['assets/img/produk/totebag-0.jpg', 'assets/img/produk/totebag-2.jpg'],
      tags: [], rating: 4.6, reviewCount: 93,
      desc: 'Totebag dari kanvas serat buatan tangan lokal, muat laptop 14 inci. Ada compartment dalam untuk merapikan kunci dan dompet.',
      specs: { 'Bahan': 'Kanvas serat 12 oz', 'Ukuran': '38 x 42 x 12 cm', 'Kapasitas': '15 liter', 'Warna': 'Natural dan hitam', 'Perawatan': 'Cuci air dingin' },
      isNew: false, isFeatured: false, isGrosir: true
    },
    {
      id: 'mc04', slug: 'topi-baseball-koleksi-harian', name: 'Topi Baseball Katun Twill', brand: 'Koleksi Harian',
      category: 'merchandise', price: 59000, comparePrice: null, stock: 165, unit: 'pcs', minOrder: 12,
      image: 'assets/img/produk/topi-1.jpg', gallery: ['assets/img/produk/topi-1.jpg', 'assets/img/produk/topi-3.jpg'],
      tags: ['baru'], rating: 4.5, reviewCount: 67,
      desc: 'Topi baseball dari katun twill dengan tali ukuran yang bisa diatur di belakang. Bordir logo di depan memakai benang warna senada.',
      specs: { 'Bahan': 'Katun twill', 'Ukuran': 'Lingkar 54 sampai 60 cm', 'Tali': 'Bisa diatur', 'Warna': 'Putih, navy, hitam', 'Minimum grosir': '12 pcs' },
      isNew: true, isFeatured: false, isGrosir: true
    },
    {
      id: 'mc05', slug: 'tumbler-stainless-500ml-pelan', name: 'Tumbler Stainless 500 ml', brand: 'Pelan',
      category: 'merchandise', price: 79000, comparePrice: 95000, stock: 130, unit: 'pcs', minOrder: 12,
      image: 'assets/img/produk/tumbler-2.jpg', gallery: ['assets/img/produk/tumbler-2.jpg', 'assets/img/produk/tumbler-1.jpg'],
      tags: ['grosir'], rating: 4.7, reviewCount: 104,
      desc: 'Tumbler stainless food grade 316 dengan lapisan vakum ganda. Panas bertahan enam jam dan dingin dua belas jam.',
      specs: { 'Volume': '500 ml', 'Material': 'Stainless 316', 'Lapis': 'Vakum ganda', 'Tahan panas': '6 jam', 'Warna': 'Hitam dan navy' },
      isNew: false, isFeatured: true, isGrosir: true
    },
    {
      id: 'mc06', slug: 'mug-keramik-350ml-siram', name: 'Mug Keramik 350 ml', brand: 'Siram',
      category: 'merchandise', price: 55000, comparePrice: null, stock: 175, unit: 'pcs', minOrder: 12,
      image: 'assets/img/produk/mug-2.jpg', gallery: ['assets/img/produk/mug-2.jpg', 'assets/img/produk/mug-3.jpg'],
      tags: [], rating: 4.6, reviewCount: 71,
      desc: 'Mug keramik dengan finishing stoneware matte dan pegangan yang nyaman digenggam. Bisa dipakai di microwave dan dishwasher.',
      specs: { 'Volume': '350 ml', 'Material': 'Stoneware', 'Diameter': '8,5 cm', 'Tinggi': '10 cm', 'Perawatan': 'Boleh dishwasher' },
      isNew: false, isFeatured: false, isGrosir: true
    },
    {
      id: 'mc07', slug: 'ransel-kanvas-22l-lumbung', name: 'Ransel Kanvas 22 L', brand: 'Lumbung',
      category: 'merchandise', price: 145000, comparePrice: 169000, stock: 95, unit: 'pcs', minOrder: 12,
      image: 'assets/img/produk/ransel-0.jpg', gallery: ['assets/img/produk/ransel-0.jpg', 'assets/img/produk/ransel-2.jpg'],
      tags: ['grosir'], rating: 4.7, reviewCount: 85,
      desc: 'Ransel kanvas 22 liter dengan compartment laptop 15 inci, tali bahu empuk, dan bantalan punggung berlapis busa.',
      specs: { 'Kapasitas': '22 liter', 'Bahan': 'Kanvas tebal dan poliester', 'Laptop': 'Sampai 15 inci', 'Warna': 'Navy dan marun', 'Minimum grosir': '12 pcs' },
      isNew: false, isFeatured: true, isGrosir: true
    }
  ],

  /* ---------- Produk: ALAT TULIS & KREATIVITAS ---------- */
  productsStationery: [
    {
      id: 'at01', slug: 'buku-tulis-a5-polos-80-hal', name: 'Buku Tulis A5 Polos 80 hal', brand: 'Kertas Timur',
      category: 'alat-tulis', price: 18000, comparePrice: null, stock: 380, unit: 'pcs', minOrder: 12,
      image: 'assets/img/produk/buku-2.jpg', gallery: ['assets/img/produk/buku-2.jpg', 'assets/img/produk/buku-1.jpg'],
      tags: ['grosir'], rating: 4.4, reviewCount: 210,
      desc: 'Buku tulis A5 dengan kertas 80 gsm yang tidak menerawang saat ditulis pensil. Sampul laminasi tebal dan nyaman ditulis di atasnya.',
      specs: { 'Ukuran': 'A5 (14 x 21 cm)', 'Halaman': '80 halaman bergaris', 'Kertas': '80 gsm', 'Sampul': 'Laminasi', 'Minimum grosir': '12 pcs' },
      isNew: false, isFeatured: true, isGrosir: true
    },
    {
      id: 'at02', slug: 'set-pulpen-12-warna-ink', name: 'Set Pulpen 12 Warna', brand: 'Ink Line',
      category: 'alat-tulis', price: 32000, comparePrice: 38000, stock: 260, unit: 'set', minOrder: 12,
      image: 'assets/img/produk/pulpen-0.jpg', gallery: ['assets/img/produk/pulpen-0.jpg', 'assets/img/produk/pulpen-2.jpg'],
      tags: ['unggulan'], rating: 4.6, reviewCount: 156,
      desc: 'Dua belas pulpen dengan warna yang jelas dan tidak luntur di kertas biasa. Ujung berpori membuat tulisan tidak blotchy.',
      specs: { 'Isi': '12 pulpen', 'Ujung': '0,5 mm', 'Warna': '12 warna dasar', 'Tinta': 'Pigmen', 'Kemasan': 'Pouch zip' },
      isNew: false, isFeatured: true, isGrosir: true
    },
    {
      id: 'at03', slug: 'set-spidol-fruit-6-warna', name: 'Set Spidol Fruit 6 Warna', brand: 'Ink Line',
      category: 'alat-tulis', price: 45000, comparePrice: null, stock: 190, unit: 'set', minOrder: 12,
      image: 'assets/img/produk/marker-3.jpg', gallery: ['assets/img/produk/marker-3.jpg', 'assets/img/produk/marker-1.jpg'],
      tags: ['baru'], rating: 4.7, reviewCount: 92,
      desc: 'Spidol marker dengan tinta berbasis air, warnanya mencolok dan bisa dipoles ulang. Ujung ganda yang bisa diubah untuk garis tipis atau tebal.',
      specs: { 'Isi': '6 spidol', 'Ujung': 'Ganda, tip dan chisel', 'Tinta': 'Basis air', 'Warna': 'Fruit set', 'Perawatan': 'Tutup rapat setelah pakai' },
      isNew: true, isFeatured: true, isGrosir: true
    },
    {
      id: 'at04', slug: 'sticky-notes-80-lembar-warna', name: 'Sticky Notes 80 lembar', brand: 'Tempel',
      category: 'alat-tulis', price: 16000, comparePrice: null, stock: 340, unit: 'pak', minOrder: 20,
      image: 'assets/img/produk/sticky-0.jpg', gallery: ['assets/img/produk/sticky-0.jpg', 'assets/img/produk/sticky-1.jpg'],
      tags: [], rating: 4.5, reviewCount: 118,
      desc: 'Sticky notes 80 lembar dengan perekat yang kuat dan mudah dilepas tanpa meninggalkan noda. Empat warna dalam satu pak.',
      specs: { 'Isi': '80 lembar', 'Ukuran': '76 x 76 mm', 'Warna': '4 warna', 'Perekat': 'Akrilik', 'Kemasan': 'Pak pilihan' },
      isNew: false, isFeatured: false, isGrosir: true
    },
    {
      id: 'at05', slug: 'pensil-warna-24-warna-hexagonal', name: 'Pensil Warna 24 Warna', brand: 'Kreasindo',
      category: 'alat-tulis', price: 38000, comparePrice: 45000, stock: 230, unit: 'set', minOrder: 12,
      image: 'assets/img/produk/pensil-3.jpg', gallery: ['assets/img/produk/pensil-3.jpg', 'assets/img/produk/pensil-1.jpg'],
      tags: ['grosir'], rating: 4.6, reviewCount: 134,
      desc: 'Pensil warna 24 warna dengan bentuk hexagonal yang nyaman digenggam. Warnanya pekat dan bisa diaplikasi dengan air untuk efek menyatu.',
      specs: { 'Isi': '24 warna', 'Bentuk': 'Hexagonal', 'Bahan': 'Kayu', 'Ujung': 'Y-shape', 'Kemasan': 'Kardus segitiga' },
      isNew: false, isFeatured: true, isGrosir: true
    },
    {
      id: 'at06', slug: 'penghapus-dan-correction-pen', name: 'Penghapus dan Correction Pen', brand: 'Keras',
      category: 'alat-tulis', price: 14000, comparePrice: null, stock: 410, unit: 'set', minOrder: 24,
      image: 'assets/img/produk/penghapus-3.jpg', gallery: ['assets/img/produk/penghapus-3.jpg', 'assets/img/produk/penghapus-2.jpg'],
      tags: [], rating: 4.3, reviewCount: 97,
      desc: 'Set penghapus dan correction pen dalam satu kemasan. Penghapusnya tidak meninggalkan serbuk, correction pennya cepat kering.',
      specs: { 'Isi': '2 penghapus dan 1 pen', 'Ukuran penghapus': '60 x 22 mm', 'Volume pen': '6 ml', 'Warna pen': 'Putih', 'Kemasan': 'Blister' },
      isNew: false, isFeatured: false, isGrosir: true
    },
    {
      id: 'at07', slug: 'box-organizer-5-slot-rapi', name: 'Box Organizer 5 Slot', brand: 'Rapi',
      category: 'alat-tulis', price: 65000, comparePrice: 78000, stock: 120, unit: 'pcs', minOrder: 6,
      image: 'assets/img/produk/organizer-0.jpg', gallery: ['assets/img/produk/organizer-0.jpg', 'assets/img/produk/organizer-3.jpg'],
      tags: ['grosir'], rating: 4.6, reviewCount: 68,
      desc: 'Box organizer dengan lima slot yang bisa diatur lebarnya. Cocok untuk merapikan meja kerja, rak buku, atau alat praktikum.',
      specs: { 'Slot': '5 slot', 'Bahan': 'ABS tebal', 'Ukuran': '33 x 24 x 12 cm', 'Warna': 'Putih dan abu', 'Minimum grosir': '6 pcs' },
      isNew: false, isFeatured: false, isGrosir: true
    },
    {
      id: 'at08', slug: 'binder-clip-12-pcs-kuat', name: 'Binder Clip 12 pcs', brand: 'Kuat',
      category: 'alat-tulis', price: 19000, comparePrice: null, stock: 300, unit: 'pak', minOrder: 20,
      image: 'assets/img/produk/binderclip-1.jpg', gallery: ['assets/img/produk/binderclip-1.jpg', 'assets/img/produk/binderclip-2.jpg'],
      tags: [], rating: 4.4, reviewCount: 73,
      desc: 'Binder clip dua belas ukuran dengan lapisan bubuk yang tidak mudah berkarat. Kuat menjepit tumpukan kertas tebal.',
      specs: { 'Isi': '12 pcs', 'Ukuran': '19, 25, 32, 51 mm', 'Bahan': 'Baja dan resin', 'Lapisan': 'Powder coating', 'Kemasan': 'Kardus' },
      isNew: false, isFeatured: false, isGrosir: true
    },
    {
      id: 'at09', slug: 'set-penggaris-dan-jangka', name: 'Set Penggaris dan Jangka', brand: 'Keras',
      category: 'alat-tulis', price: 22000, comparePrice: null, stock: 280, unit: 'set', minOrder: 12,
      image: 'assets/img/produk/penggaris-1.jpg', gallery: ['assets/img/produk/penggaris-1.jpg', 'assets/img/produk/penggaris-3.jpg'],
      tags: [], rating: 4.2, reviewCount: 54,
      desc: 'Set penggaris 30 cm dan jangka gambar untuk kebutuhan sekolah dan gambar teknik. Bahan plastik ABS yang tidak mudah patah.',
      specs: { 'Isi': 'Penggaris 30 cm dan jangka', 'Bahan': 'ABS dan baja', 'Skala': 'Cm', 'Warna': 'Biru dan hijau', 'Kemasan': 'Plastik bening' },
      isNew: false, isFeatured: false, isGrosir: true
    }
  ],

  /* ---------- Produk: PAKET HEMAT ---------- */
  productsBundles: [
    {
      id: 'pk01', slug: 'paket-sarapan-kantor', name: 'Paket Sarapan Kantor', brand: 'Paket Hemat',
      category: 'paket', price: 129000, comparePrice: 158000, stock: 60, unit: 'paket', minOrder: 5,
      image: 'assets/img/produk/hadiah-0.jpg', gallery: ['assets/img/produk/hadiah-0.jpg', 'assets/img/produk/kopisusu-1.jpg'],
      tags: ['unggulan', 'grosir'], rating: 4.7, reviewCount: 87,
      desc: 'Satu paket untuk 10 orang: kopi susu gula aren, teh celup, dan biskuit assortment. Praktis untuk rapat pagi tanpa pesan satu per satu.',
      specs: { 'Isi': '10 kopi susu, 2 dus teh, 2 biskuit', 'Untuk': '10 orang', 'Bonus': 'Kartu ucapan', 'Minimum grosir': '5 paket' },
      isNew: false, isFeatured: true, isGrosir: true
    },
    {
      id: 'pk02', slug: 'paket-alat-tulis-gtk', name: 'Paket Alat Tulis GTK', brand: 'Paket Hemat',
      category: 'paket', price: 149000, comparePrice: 182000, stock: 45, unit: 'paket', minOrder: 4,
      image: 'assets/img/produk/organizer-3.jpg', gallery: ['assets/img/produk/organizer-3.jpg', 'assets/img/produk/buku-1.jpg'],
      tags: ['grosir'], rating: 4.6, reviewCount: 54,
      desc: 'Bundling alat tulis lengkap untuk satu meja kerja: buku tulis, set pulpen, sticky notes, box organizer, dan penghapus.',
      specs: { 'Isi': 'Buku, pulpen, sticky, organizer, penghapus', 'Jumlah': '5 jenis per paket', 'Bonus': 'Kartu ucapan', 'Minimum grosir': '4 paket' },
      isNew: false, isFeatured: false, isGrosir: true
    },
    {
      id: 'pk03', slug: 'paket-merchandise-tim', name: 'Paket Merchandise Tim', brand: 'Paket Hemat',
      category: 'paket', price: 279000, comparePrice: 342000, stock: 32, unit: 'paket', minOrder: 3,
      image: 'assets/img/produk/kaos-2.jpg', gallery: ['assets/img/produk/kaos-2.jpg', 'assets/img/produk/totebag-0.jpg'],
      tags: ['grosir'], rating: 4.8, reviewCount: 46,
      desc: 'Satu paket berisi kaos, tote bag, topi, dan tumbler. Dipakai untuk souvenir acara, merchandise tim, atau hadiah mitra.',
      specs: { 'Isi': 'Kaos, tote bag, topi, tumbler', 'Ukuran': 'S sampai XXL', 'Penghematan': 'Sekitar Rp 63.000', 'Minimum grosir': '3 paket' },
      isNew: false, isFeatured: true, isGrosir: true
    }
  ]
};

/* Gabungkan seluruh produk ke satu daftar */
KWU_DATA.products = KWU_DATA.productsMakanan
  .concat(KWU_DATA.productsMinuman, KWU_DATA.productsMerch, KWU_DATA.productsStationery, KWU_DATA.productsBundles);
delete KWU_DATA.productsMakanan;
delete KWU_DATA.productsMinuman;
delete KWU_DATA.productsMerch;
delete KWU_DATA.productsStationery;
delete KWU_DATA.productsBundles;

/* ---------- Ulasan contoh (untuk tampilan antarmuka) ---------- */
KWU_DATA.reviews = {
  m01: [
    { author: 'Rani P.', rating: 5, date: '2026-10-12', title: 'Renyah beneran', text: 'Keny crunch-nya tebal banget. Kukus dua kali pun keripiknya tetap renyah.' },
    { author: 'Bagus W.', rating: 4, date: '2026-09-28', title: 'Enak, sedikit asin', text: 'Rasa pisangnya terasa. Agak asin di ujung, tapi overall enak buat nonton.' },
    { author: 'Sinta W.', rating: 5, date: '2026-09-09', title: 'Paket biar hemat', text: 'Ambil 6 pcs sekaligus buat angkatan. Packing rapih dan sampai cepat.' }
  ],
  m02: [
    { author: 'Dimas A.', rating: 5, date: '2026-10-15', title: 'Bikin nagih', text: 'Cokelatnya melimpah dan teksturnya lembut di tengah. Satu box habis dalam sehari.' },
    { author: 'Nadia H.', rating: 5, date: '2026-10-02', title: 'Enak banget buat ngopi', text: 'Dipakai buat sarapan bareng kopi susu. Crisp di luar dan tidak keras sama sekali.' },
    { author: 'Taufik R.', rating: 4, date: '2026-09-12', title: 'Lumayan worth it', text: 'Harganya masih masuk akal. Karena dipanggang kecil, jadi selalu segar.' }
  ],
  m03: [
    { author: 'Putri A.', rating: 5, date: '2026-10-08', title: 'Kuenya lembut', text: 'Lapisannya rapih dan tidak mudah lepas. Rasa santannya kuat, enak dimakan sore.' },
    { author: 'Andi M.', rating: 4, date: '2026-09-19', title: 'Perlu disimpan di kulkas', text: 'Enak, tapi cepat keras kalau tidak langsung dimakan. Simpan di kulkas ya.' }
  ],
  m04: [
    { author: 'Fajar S.', rating: 5, date: '2026-10-11', title: 'Pedasnya nagih', text: 'Pedasnya naik perlahan, tidak langsung bikin kering. Botol kacanya rapi dan bahannya berasa homemade.' },
    { author: 'Mega L.', rating: 4, date: '2026-09-22', title: 'Sambal wajib punya', text: 'Agak menggurig di awal, tapi sambalnya masih ada wangi bawang. Wajib stok di dapur.' }
  ],
  m05: [
    { author: 'Rizky N.', rating: 4, date: '2026-09-30', title: 'Kriuk di tempat', text: 'Teksturnya pas, renyah dan tidak keras. Rasa udangnya terasa. Bagus buat cocol sambal.' },
    { author: 'Intan D.', rating: 5, date: '2026-09-05', title: 'Anak-anak suka', text: 'Paling suka yang dicocol. Halaman belajarnya penuh dengan pelangi.' }
  ],
  m06: [
    { author: 'Yoga P.', rating: 5, date: '2026-10-17', title: 'Tengahnya lembut', text: 'Bagian tengahnya lembut banget dan pinggirannya tidak kering. Ukurannya pas, tidak bikin kenyang.' },
    { author: 'Lia K.', rating: 5, date: '2026-10-06', title: 'Paling enak yang pernah coba', text: 'Ini yang bikin aku balik lagi. Suka bagian pinggir yang masih lembut.' },
    { author: 'Doni S.', rating: 4, date: '2026-09-14', title: 'Enak, perlu di kulkas', text: 'Kalau keluar dari kulkas lama, teksturnya jadi agak keras. Segera dimakan saja.' }
  ],
  m07: [
    { author: 'Tika E.', rating: 4, date: '2026-09-26', title: 'Cukup buat rapat', text: 'Variasinya enak buat di meja. Biskuit sandwich yang paling sering diburu.' },
    { author: 'Bayu G.', rating: 4, date: '2026-09-01', title: 'Lumayan', text: 'Harganya ramah untuk ukuran 300 gram. Biskuitnya renyah dan tidak gampang remuk.' }
  ],
  m08: [
    { author: 'Sarah T.', rating: 5, date: '2026-10-10', title: 'Anak-anak suka', text: 'Buahnya nyata, bukan cuma gula. Enam rasa dalam satu dus, semua enak.' },
    { author: 'Gilang R.', rating: 4, date: '2026-09-18', title: 'Kemasannya rapi', text: 'Cupnya rapi, tidak pecah. Jelly-nya agak lembut buat yang suka kenyal.' }
  ],
  m09: [
    { author: 'Nur A.', rating: 5, date: '2026-10-03', title: 'Sampai dalam keadaan beku', text: 'Dry ice-nya masih ada saat tiba. Enak banget, puternya tidak terlalu manis.' },
    { author: 'Reza F.', rating: 4, date: '2026-09-11', title: 'Porsinya kecil', text: 'Rasanya creamy, tapi cup-nya kecil. Kalau buat acara besar, ambil dua box.' }
  ],
  m10: [
    { author: 'Farhan Z.', rating: 5, date: '2026-10-16', title: 'Praktis buat acara', text: 'Satu dus langsung untuk delapan orang. Variasinya lengkap, tidak ada yang dobel.' },
    { author: 'Citra D.', rating: 4, date: '2026-10-04', title: 'Lucu dikasih teman', text: 'Kartu ucapan lucunya bikin betis. Isinya sudah siap untuk diberikan.' }
  ],
  mn01: [
    { author: 'Alif P.', rating: 5, date: '2026-10-18', title: 'Gula arennya kerasa', text: 'Enak, manisnya pas dan tidak ada rasa linger. Botolnya juga dingin masih di kulkas.' },
    { author: 'Sasha N.', rating: 5, date: '2026-10-09', title: 'Poinnya tinggi', text: 'Ini yang sering dibeliin. Rasanya kental dan aroma kopinya nyata.' },
    { author: 'Joko M.', rating: 4, date: '2026-09-23', title: 'Bagus untuk harian', text: 'Kadang suka kurang dingin pas sampai, tapi ujungnya tidak masalah.' }
  ],
  mn02: [
    { author: 'Hana K.', rating: 5, date: '2026-10-07', title: 'Puasain', text: 'Aromanya kuat, rasa medium yang seimbang. Saya pakai untuk V60 dan espresso, sama-sama bisa.' },
    { author: 'Arif B.', rating: 4, date: '2026-09-20', title: 'Kemasannya oke', text: 'Aroma dan rasa enak. Kemasan pouch-nya praktis buat disimpan.' }
  ],
  mn03: [
    { author: 'Maya L.', rating: 5, date: '2026-10-13', title: 'Enak buat rapat', text: 'Aromanya melati banget dan tidak pahit walau diseduh dua kali. Dusnya banyak.' },
    { author: 'Rudi H.', rating: 4, date: '2026-09-16', title: 'Standar teh melati', text: 'Puasain. Yang suka teh melati pasti suka. Envelope di dalam dus gampang diambil.' }
  ],
  mn04: [
    { author: 'Eka S.', rating: 4, date: '2026-10-05', title: 'Markisa-nya berasa', text: 'Sirnya pekat, jelas rasa markisanya. Enak dicampur sama teh dingin.' },
    { author: 'Vino A.', rating: 4, date: '2026-09-09', title: 'Aromanya kuat', text: 'Agak kental, tapi itu wajar untuk sirup pekat. Botol kacanya bagus.' }
  ],
  mn05: [
    { author: 'Wulan S.', rating: 4, date: '2026-10-01', title: 'Manisnya pas', text: 'Pulp mangga-nya kerasa dan tidak terlalu manis. Botolnya ringan, praktis dibawa.' },
    { author: 'Agus P.', rating: 4, date: '2026-09-08', title: 'Bagus buat acara', text: 'Ambil per dus untuk acara. Praktis dan harganya masuk akal.' }
  ],
  mn06: [
    { author: 'Rani N.', rating: 5, date: '2026-10-14', title: 'Susu beneran susu', text: 'Krimnya tebal dan rasa susunya berasa. Minum langsung dari kotak juga enak.' },
    { author: 'Bayu W.', rating: 4, date: '2026-09-25', title: 'Standar susu UHT', text: 'Puasain buat kebutuhan harian. Kadang suka yang lebih kental, tapi harganya masuk akal.' }
  ],
  mn07: [
    { author: 'Dewi A.', rating: 5, date: '2026-10-19', title: 'Matchanya bukan yang manis', text: 'Enak, rasa matchanya terasa dan ada sedikit pahit yang enak. Botolnya praktis dibawa.' },
    { author: 'Rico J.', rating: 4, date: '2026-10-02', title: 'Enak buat pagi', text: 'Alternatif dari kopi biasa. Kadang suka yang lebih dingin dan kental.' }
  ],
  mn08: [
    { author: 'Fitri D.', rating: 5, date: '2026-10-11', title: 'Madu hutan beneran', text: 'Warnanya gelap dan rasaannya lebih kuat. Enak dicampur ke teh dan granola.' },
    { author: 'Galuh P.', rating: 5, date: '2026-09-15', title: 'Worth the price', text: 'Cuma ada di tempat tertentu, tapi rasa dan aromanya beda banget dari madu toko.' }
  ],
  mc01: [
    { author: 'Gilang T.', rating: 5, date: '2026-10-06', title: 'Bahannya adem', text: 'Katunnya adem dipakai seharian, tidak gerah. Jahitan rapi dan labelnya rapi.' },
    { author: 'Ayu P.', rating: 4, date: '2026-09-17', title: 'Ukurannya pas', text: 'Regular fit seperti yang dijanjikan. Dicuci beberapa kali tidak melar.' }
  ],
  mc02: [
    { author: 'Rizky E.', rating: 5, date: '2026-10-12', title: 'Hangat tapi ringan', text: 'Fleece-nya tebal tapi tidak berat. Potongan oversize-nya enak dipakai buat hangout.' },
    { author: 'Maya S.', rating: 5, date: '2026-09-21', title: 'Bagus buat acara', text: 'Beli 12 pcs buat angkatan, semua pada suka. Bordir logonya rapi.' }
  ],
  mc03: [
    { author: 'Bima L.', rating: 5, date: '2026-10-09', title: 'Kuat banget', text: 'Kanvasnya tebal, laptop aman di dalam. Compartiment dalam sangat membantu.' },
    { author: 'Nadia F.', rating: 4, date: '2026-09-19', title: 'Bagus dan rapi', text: 'Warna naturalnya menarik. Tali kadang bisa lebih panjang untuk orang tinggi.' }
  ],
  mc04: [
    { author: 'Yudha G.', rating: 4, date: '2026-10-08', title: 'Nyaman dipakai', text: 'Topinya ringan dan talinya bisa diatur. Bordir logo rapi, tidak ada benang berantakan.' },
    { author: 'Ayu M.', rating: 4, date: '2026-09-24', title: 'Warnanya tahan lama', text: 'Warna putihnya tidak langsung kuningan. Bagus untuk acara kantor.' }
  ],
  mc05: [
    { author: 'Bagus P.', rating: 5, date: '2026-10-15', title: 'Esnya tidak meleleh', text: 'Bisa tahan es seharian penuh. Botolnya tidak bocor di tas.' },
    { author: 'Rani T.', rating: 5, date: '2026-10-03', title: 'Bagus buat kantor', text: 'Dipakai tiap hari buat kopi. Finishing-nya rapi dan tidak licin.' }
  ],
  mc06: [
    { author: 'Intan D.', rating: 5, date: '2026-10-10', title: 'Nyaman digenggam', text: 'Pegangannya pas di tangan dan finishing matte-nya cantik. Minum kopi jadi lebih terasa.' },
    { author: 'Deni S.', rating: 4, date: '2026-09-26', title: 'Bagus dan tebal', text: 'Keramiknya tebal, tidak retak. Warnanya netral, tapi worth it.' }
  ],
  mc07: [
    { author: 'Riko H.', rating: 5, date: '2026-10-13', title: 'Nyaman dipakai lama', text: 'Bantalan punggungalnya empuk, bahunya tidak bikin gerah. Compartmen laptopnya pas.' },
    { author: 'Tia W.', rating: 4, date: '2026-09-28', title: 'Bagus buat acara', text: 'Warna marunnya menarik. Saku depan cukup untuk botol dan charger.' }
  ],
  at01: [
    { author: 'Sari A.', rating: 5, date: '2026-10-06', title: 'Kertasnya bagus', text: 'Tidak menerawang waktu ditulis pensil, dan halamannya banyak. Cover-nya agak licin.' },
    { author: 'Doni P.', rating: 4, date: '2026-09-22', title: 'Buku tulis yang bagus', text: 'Harga tidak mahal, kertasnya enak ditulis. Sampulnya agak licin tapi aman.' }
  ],
  at02: [
    { author: 'Fajar N.', rating: 5, date: '2026-10-12', title: 'Warnanya berani', text: 'Warna-warnanya jelas dan tidak luntur di kertas biasa. Ujungnya enak ditulis.' },
    { author: 'Maya L.', rating: 4, date: '2026-09-29', title: 'Puasain', text: 'Isinya lengkap 12 warna. Pouch zip-nya agak ketat untuk dibuka pertama kali.' }
  ],
  at03: [
    { author: 'Bayu K.', rating: 5, date: '2026-10-16', title: 'Warnanya mencolok', text: 'Spidolnya vibrant, dan bisa dipoles ulang kalau salah. Ujung ganda sangat membantu.' },
    { author: 'Nana R.', rating: 4, date: '2026-10-04', title: 'Bagus buat poster', text: 'Tinta tidak bleed di kertas karton. Tutupnya perlu ditutup rapat setelah pakai.' }
  ],
  at04: [
    { author: 'Fajar A.', rating: 4, date: '2026-09-30', title: 'Nempelnya kuat', text: 'Tidak lepas sendiri dan tidak meninggalkan noda. Empat warnanya lengkap.' },
    { author: 'Citra W.', rating: 4, date: '2026-09-10', title: 'Praktis', text: 'Ukurannya pas untuk ditempel di monitor atau dinding. Harganya murah.' }
  ],
  at05: [
    { author: 'Eka P.', rating: 5, date: '2026-10-14', title: 'Warnanya pekat', text: 'Pensilnya enak digenggam dan warnanya kuat. Bisa dicampur dengan air.' },
    { author: 'Rian S.', rating: 4, date: '2026-09-27', title: 'Lengkap', text: '24 warna sekaligus memenuhi. Ujung runcing membantu untuk detail.' }
  ],
  at07: [
    { author: 'Indah M.', rating: 5, date: '2026-10-05', title: 'Meja jadi rapi', text: 'Lima slot-nya lebar dan bisa diatur. Plastiknya tebal, tidak penyok.' },
    { author: 'Bambang T.', rating: 4, date: '2026-09-19', title: 'Berguna', text: 'Dipakai untuk alat praktikum di kelas. Harganya masuk akal.' }
  ],
  pk01: [
    { author: 'Riani T.', rating: 5, date: '2026-10-11', title: 'Praktis banget', text: 'Sampai sepuluh orang sekali pesan. Kartunya rapi dan kotaknya terasa rapi.' },
    { author: 'Farhan D.', rating: 4, date: '2026-09-23', title: 'Hemat untuk rapat', text: 'Kalau dihitung per orang, jauh lebih murah. Kofeinya dingin masih enak.' }
  ],
  pk02: [
    { author: 'Maya S.', rating: 5, date: '2026-10-07', title: 'Tinggal pakai', text: 'Semua yang dibutuhin buat meja kerja sudah ada. Organizernya jadi sorotan.' },
    { author: 'Gilang A.', rating: 4, date: '2026-09-21', title: 'Bonusnya manis', text: 'Kartu ucapan lucu. Isinya lengkap buat kebutuhan sekolah.' }
  ],
  pk03: [
    { author: 'Rani F.', rating: 5, date: '2026-10-18', title: 'Souvenir yang beres', text: 'Empat item dalam satu paket, semuanya dipakai. Cocok buat souvenir acara.' },
    { author: 'Dono K.', rating: 4, date: '2026-10-01', title: 'Harga bersaing', text: 'Jauh lebih murah daripada beli satuan. Pengemasannya rapi dan aman.' }
  ]
};

/* ---------- Aktivitas dan berita ---------- */
KWU_DATA.activities = [
  {
    id: 'a1', slug: 'bazar-usaha-mahasiswa', title: 'Bazar Usaha Mahasiswa: Puluhan Brand Kampung',
    excerpt: 'Bazar dua hari yang mempertemukan produk mahasiswa dengan pembeli dan calon mitra dagang.',
    date: '2026-09-18', category: 'Kegiatan', readTime: 4, image: 'assets/img/produk/scene-bazaar-0.jpg',
    body: 'Bazar usaha mahasiswa mempertemukan puluhan brand lokal. Seluruh transaksi memakai katalog KWU dan pencatatan pesanan terpusat.'
  },
  {
    id: 'a2', slug: 'lokakarya-membangun-brand', title: 'Lokakarya Membangun Brand dari Nol',
    excerpt: 'Workshop satu hari untuk mahasiswa yang ingin memulai peluncuran produk dengan judul harga dan kemasan yang rapi.',
    date: '2026-08-27', category: 'Workshop', readTime: 6, image: 'assets/img/produk/scene-workshop-0.jpg',
    body: 'Lokakarya membahas riset pasar, penentuan harga, dan desain kemasan. Peserta membuat mockup label sederhana.'
  },
  {
    id: 'a3', slug: 'kopdar-mitra-usaha', title: 'Kopdar Mitra Usaha: Belajar dari Praktis',
    excerpt: 'Diskusi terbuka antara pelaku usaha mahasiswa dan alumni tentang channel penjualan.',
    date: '2026-08-05', category: 'Kolaborasi', readTime: 5, image: 'assets/img/produk/scene-meeting-0.jpg',
    body: 'Sesi berbagi dari alumni usaha dan pembicara dari lingkungan industri. Ringkasan materi tersedia setelah acara.'
  },
  {
    id: 'a4', slug: 'pelatihan-penjualan-online', title: 'Pelatihan Penjualan Online untuk Mitra',
    excerpt: 'Cara menampilkan produk, menjelaskan manfaat, dan menangani pertanyaan pembeli.',
    date: '2026-07-12', category: 'Pelatihan', readTime: 7, image: 'assets/img/produk/scene-usaha-0.jpg',
    body: 'Pelatihan dua sesi dengan latihan langsung pada katalog KWU.'
  },
  {
    id: 'a5', slug: 'program-pendampingan-produk', title: 'Program Pendampingan Produk Unggulan',
    excerpt: 'Pendampingan selama satu semester untuk produk yang siap naik kelas.',
    date: '2026-06-20', category: 'Program', readTime: 8, image: 'assets/img/produk/scene-packing-0.jpg',
    body: 'Pendampingan mencakup penataan produk, pelabelan, dan promosi internal kampus.'
  },
  {
    id: 'a6', slug: 'audit-kemasan-label', title: 'Audit Kemasan dan Label Produk Mitra',
    excerpt: 'Evaluasi keterbacaan informasi kemasan agar pembeli tidak keliru menilai.',
    date: '2026-05-30', category: 'Kolaborasi', readTime: 5, image: 'assets/img/produk/scene-packing-1.jpg',
    body: 'Tim KWU meninjau kelengkapan informasi kemasan: berat, bahan, tanggal, dan kontak.'
  }
];

/* ---------- Agenda kegiatan ---------- */
KWU_DATA.events = [
  { date: '2026-11-12', month: 'Nov', day: '12', title: 'Open House Produk Kriya', location: 'Ruang Pamer', desc: 'Open house produksi aksesoris mahasiswa.' },
  { date: '2026-11-28', month: 'Nov', day: '28', title: 'Bazar Buku dan Alat Tulis', location: 'Halaman Utama', desc: 'Bazar buku bekas dan alat tulis.' },
  { date: '2026-12-09', month: 'Des', day: '09', title: 'Kopdar Mitra Usaha', location: 'Ruang Multimoda', desc: 'Pertemuan rutin pelaku usaha mitra.' },
  { date: '2026-12-20', month: 'Des', day: '20', title: 'Night Market KWU', location: 'Area Parkir', desc: 'Bazar akhir semester.' }
];

/* ---------- Jalur kolaborasi ---------- */
KWU_DATA.paths = [
  {
    id: 'grosir', icon: 'box', title: 'Pembelian Grosir / RFQ',
    desc: 'Untuk organisasi, instansi, atau toko yang membutuhkan jumlah besar dengan harga khusus.',
    points: ['Harga khusus berdasarkan kuantitas', 'Dukungan sampel produk', 'Pengiriman ke alamat tujuan'],
    cta: 'Ajukan RFQ', href: 'kolaborasi-grosir.html'
  },
  {
    id: 'partnership', icon: 'handshake', title: 'Partnership',
    desc: 'Untuk perusahaan, pemasok, UMKM, dan institusi yang ingin bekerja sama.',
    points: ['Kemitraan produk dan distribusi', 'Kolaborasi kegiatan dan event', 'Konsultasi akses pasar kampus'],
    cta: 'Jadi Mitra', href: 'kolaborasi-partnership.html'
  },
  {
    id: 'program', icon: 'spark', title: 'Kolaborasi Program',
    desc: 'Untuk event, proyek kreatif, promosi, dan program kewirausahaan kampus.',
    points: ['Ruang acara dan publikasi', 'Pendampingan program', 'Promosi ke jaringan mahasiswa'],
    cta: 'Usulkan Kolaborasi', href: 'kolaborasi-program.html'
  }
];

/* ---------- FAQ ---------- */
KWU_DATA.faqs = [
  { q: 'Apakah saya harus login untuk melihat katalog?', a: 'Tidak. Katalog, kategori, dan detail produk dapat diakses tanpa login. Login dibutuhkan saat menyimpan wishlist, mengisi formulir kerja sama, dan menyelesaikan transaksi.' },
  { q: 'Berapa lama pesanan diproses?', a: 'Waktu proses dan serah terima mengikuti prosedur resmi KWU Administrasi Niaga. Nomor transaksi dipakai sebagai rujukan saat konfirmasi.' },
  { q: 'Bagaimana produk diambil setelah pesanan diproses?', a: 'Jadwal pengambilan atau pengiriman disepakati bersama admin KWU setelah pesanan berstatus Diproses. Simpan nomor transaksi sebagai bukti pemesanan.' },
  { q: 'Bagaimana cara mengajukan pembelian grosir?', a: 'Gunakan formulir RFQ pada halaman Kolaborasi Grosir. Isi data organisasi, daftar produk, jumlah, dan tanggal kebutuhan. Nomor pengajuan muncul setelah formulir dikirim.' },
  { q: 'Berapa minimum pembelian grosir?', a: 'Setiap produk memiliki minimum pembelian berbeda, umumnya mulai dari 4 sampai 24 pcs. Detail minimum tampil pada setiap halaman produk.' },
  { q: 'Metode pembayaran apa saja yang didukung?', a: 'Pilihan metode ditampilkan sebagai contoh pada tahap ini. Metode pembayaran final mengikuti prosedur resmi KWU Administrasi Niaga.' },
  { q: 'Bisakah melacak status pengajuan kerja sama?', a: 'Ya. Setiap pengajuan yang tersimpan memiliki nomor dan status di halaman Akun, menu Pengajuan.' },
  { q: 'Apakah data transaksi saya aman?', a: 'Frontend ini belum terhubung ke server. Data tersimpan secara lokal di peramban Anda dan akan hilang saat cache browser dibersihkan.' },
  { q: 'Bagaimana cara menulis ulasan produk?', a: 'Buka halaman detail produk, scroll ke bagian Ulasan, lalu isi rating dan komentar. Ulasan yang kamu tulis tersimpan di peramban dan langsung tampil di daftar.' },
  { q: 'Apakah ulasan di halaman produk berasal dari pembeli asli?', a: 'Ulasan yang tampil sebagai contoh dibuat untuk keperluan demonstrasi antarmuka. Ulasan yang kamu tulis sendiri hanya tersimpan di peramban kamu.' }
];

/* ---------- Metode pembayaran ---------- */
KWU_DATA.payments = [
  { id: 'qris', name: 'QRIS', desc: 'Pemindaian QR melalui aplikasi pembayaran digital.', icon: 'qr' },
  { id: 'transfer', name: 'Transfer Bank', desc: 'Virtual account atau transfer manual ke rekening resmi.', icon: 'bank' },
  { id: 'tunai', name: 'Tunai di KWU', desc: 'Pembayaran langsung di loket KWU Administrasi Niaga.', icon: 'cash' }
];

/* ---------- Status transaksi ---------- */
KWU_DATA.orderStatus = [
  { id: 'menunggu_konfirmasi', label: 'Menunggu Konfirmasi', tone: 'warning' },
  { id: 'menunggu_pembayaran', label: 'Menunggu Pembayaran', tone: 'info' },
  { id: 'diproses', label: 'Diproses', tone: 'blue' },
  { id: 'selesai', label: 'Selesai', tone: 'success' },
  { id: 'dibatalkan', label: 'Dibatalkan', tone: 'danger' }
];

/* ---------- Status pengajuan ---------- */
KWU_DATA.requestStatus = [
  { id: 'diterima', label: 'Diterima', tone: 'success' },
  { id: 'ditinjau', label: 'Ditinjau', tone: 'info' },
  { id: 'butuh_informasi', label: 'Butuh Informasi', tone: 'warning' },
  { id: 'ditanggapi', label: 'Ditanggapi', tone: 'blue' }
];

if (typeof window !== 'undefined') window.KWU_DATA = KWU_DATA;
