/* =========================================================
   KWU Campus Business Hub - data.js
   Data katalog untuk prototipe antarmuka.

   CATATAN: nama brand, harga, dan ulasan di berkas ini adalah
   karangan untuk keperluan demo antarmuka. KWU adalah unit
   Processedorman kampus di Gedung S Lantai 1 Politeknik Negeri
   Padang, bukan brand dagang, sehingga tidak ada klaim bahwa
   produk di bawah ini berasal dari pihak mana pun.
   ========================================================= */

const KWU_DATA = {};

/* ---------- Kategori ---------- */
KWU_DATA.categories = [
  { id: 'makanan', name: 'Makanan', icon: 'cookie',
    desc: 'Camilan ringan, roti, gorengan, mi, dan makanan siap makan.',
    image: 'assets/img/produk/keripik-1.jpg' },
  { id: 'minuman', name: 'Minuman', icon: 'coffee',
    desc: 'Minuman kemasan, seduh sachet, kopi, teh, susu, dan jus.',
    image: 'assets/img/produk/kopisusu-1.jpg' },
  { id: 'atribut', name: 'Atribut Kampus', icon: 'shirt',
    desc: 'Jas, PDH, topi, tanda pengenal, dan merchandise kampus.',
    image: 'assets/img/produk/kaos-0.jpg' },
  { id: 'layanan', name: 'Layanan Kampus', icon: 'file',
    desc: 'Fotokopi, print, jilid, laminating, dan cetak pas foto.',
    image: 'assets/img/produk/fotokopi-0.jpg' },
  { id: 'alat-tulis', name: 'Alat Tulis & Perlengkapan Kuliah', icon: 'book',
    desc: 'Pulpen, kertas, tinta, dan perlengkapanossier kelas.',
    image: 'assets/img/produk/buku-2.jpg' },
  { id: 'paket', name: 'Paket Hemat', icon: 'box',
    desc: 'Bundling paling hemat untuk acara, kantor, dan perkuliahan.',
    image: 'assets/img/produk/hadiah-0.jpg' }
];

/* ---------- Pembantu ---------- */
let KWU_SEQ = 0;
function P(name, brand, price, stock, unit, image, desc, specs, extra) {
  const id = 'p' + String(++KWU_SEQ).padStart(3, '0');
  return Object.assign({
    id,
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    name, brand, price,
    comparePrice: null,
    stock, unit, minOrder: 1,
    image, gallery: [image],
    tags: [], rating: 4.5, reviewCount: 0,
    desc, specs,
    isNew: false, isFeatured: false, isGrosir: false
  }, extra || {});
}

/* ---------- Produk: ALAT TULIS & PERLENGKAPAN KULIAH ---------- */
KWU_DATA.productsAlatTulis = [
  P('Pulpen Gel 0,5 mm (Pak 12)', 'K-Stationery', 18000, 260, 'pak', 'assets/img/produk/pulpen-0.jpg',
    'Pulpen gel 0,5 mm dengan tinta pekat dan ujung halus. Isi 12 buah per pak.',
    { 'Isi': '12 pcs', 'Ukuran ponta': '0,5 mm', 'Warna tinta': 'Hitam dan biru', 'Kemasan': 'Pak foil' },
    { tags: ['grosir'], isGrosir: true, sub: 'Pulpen' }),
  P('Pensil 2B (Pak 12)', 'K-Stationery', 16000, 240, 'pak', 'assets/img/produk/pensil-3.jpg',
    'Pensil kayu 2B dengan grafit yang mudah digariskan. Isi 12 buah per pak.',
    { 'Isi': '12 pcs', 'Bahan': 'Kayu', 'Grafit': '2B', 'Kemasan': 'Pak transparan' },
    { tags: ['grosir'], isGrosir: true, sub: 'Pensil' }),
  P('Penghapus Kain (2 pcs)', 'K-Stationery', 8000, 320, 'set', 'assets/img/produk/penghapus-3.jpg',
    'Penghapus kain yang tidak meninggalkan serbuk dan tidak merusak cetakan.',
    { 'Isi': '2 pcs', 'Bahan': 'Kain', 'Warna': 'Putih dan hitam', 'Kemasan': 'Blister' },
    { sub: 'Penghapus' }),
  P('Penggaris 30 cm', 'K-Stationery', 7000, 280, 'pcs', 'assets/img/produk/penggaris-1.jpg',
    'Penggaris plastik 30 cm dengan skala yang rapi dan tidak mudah patah.',
    { 'Panjang': '30 cm', 'Bahan': 'Plastik ABS', 'Skala': 'Cm', 'Warna': 'Biru dan hijau' },
    { sub: 'Penggaris' }),
  P('Spidol 12 Warna (Set)', 'Ink Line', 45000, 190, 'set', 'assets/img/produk/marker-3.jpg',
    'Set spidol 12 warna dengan tinta pekat dan ujung yang bisa diganti.',
    { 'Isi': '12 spidol', 'Ujung': 'Ganda tip dan chisel', 'Tinta': 'Basis air', 'Kemasan': 'Kotak plastik' },
    { tags: ['baru'], isNew: true, isFeatured: true, isGrosir: true, sub: 'Spidol' }),
  P('Stabilo 4 Warna (Set)', 'Ink Line', 38000, 150, 'set', 'assets/img/produk/marker-1.jpg',
    'Empat stabilo dengan tinta tebal dan tidak mudah blot saat ditegakkan.',
    { 'Isi': '4 pcs', 'Lebar punta': '4 mm', 'Tinta': 'Albedo', 'Kemasan': 'Kotak transparan' },
    { isGrosir: true, sub: 'Stabilo' }),
  P('Buku Tulis A5 80 Halaman (4 pcs)', 'Kertas Timur', 16000, 380, 'paket', 'assets/img/produk/buku-2.jpg',
    'Buku tulis A5 dengan kertas 80 gsm yang tidak menerawang. Isi 4 buku per paket.',
    { 'Isi': '4 buku', 'Ukuran': 'A5 (14 x 21 cm)', 'Halaman': '80 bergaris', 'Kertas': '80 gsm' },
    { tags: ['grosir'], isGrosir: true, sub: 'Buku Tulis' }),
  P('Binder A4 7 cm', 'K-Stationery', 42000, 120, 'pcs', 'assets/img/produk/organizer-0.jpg',
    'Binder A4 dengan mekanisme tiga cincin dan tulang punggung lebar 7 cm.',
    { 'Ukuran': 'A4', 'Tebal punggung': '7 cm', 'Mekanisme': '3 cincin', 'Warna': 'Navy dan hitam' },
    { isGrosir: true, sub: 'Binder' }),
  P('Map Folder A4 (5 pcs)', 'K-Stationery', 35000, 160, 'pak', 'assets/img/produk/organizer-3.jpg',
    'Map folder transparan dengan kantong dalam untuk menyimpan berkas tugas.',
    { 'Isi': '5 pcs', 'Ukuran': 'A4', 'Bahan': 'Plastik PP', 'Warna': ' assorted' },
    { isGrosir: true, sub: 'Map' }),
  P('Kertas HVS A4 80 gsm (500 lembar)', 'Kertas Timur', 68000, 90, 'rim', 'assets/img/produk/buku-1.jpg',
    'Kertas HVS 80 gsm untuk print, fotokopi, dan tugas laporan. Lima ratus lembar per rim.',
    { 'Ukuran': 'A4', 'Berat': '80 gsm', 'Isi': '500 lembar', 'Warna': 'Putih' },
    { isGrosir: true, sub: 'Kertas' }),
  P('Kertas Folio Bergaris (250 lembar)', 'Kertas Timur', 72000, 75, 'rim', 'assets/img/produk/buku-3.jpg',
    'Kertas folio bergaris 60 gsm untuk gambar teknik dan catatan besar.',
    { 'Ukuran': 'Folio', 'Berat': '60 gsm', 'Isi': '250 lembar', 'Garis': 'Setiap 5 mm' },
    { isGrosir: true, sub: 'Kertas' }),
  P('Tinta Printer Botol 650 ml', 'K-Stationery', 95000, 60, 'botol', 'assets/img/produk/minumbotol-1.jpg',
    'Tinta printer botol untuk printer inkjet, warna tajam, dan tidak mudah kebocor.',
    { 'Volume': '650 ml', 'Jenis printer': 'Inkjet', 'Warna': 'Hitam dan CMYK', 'Kemasan': 'Botol' },
    { isGrosir: true, sub: 'Tinta Printer' }),
  P('Flashdisk 32 GB', 'K-Stationery', 78000, 70, 'pcs', 'assets/img/produk/binderclip-1.jpg',
    'Flashdisk 32 GB untuk menyimpan tugas, materi, dan data presentasi.',
    { 'Kapasitas': '32 GB', 'Antarmuka': 'USB 3.0', 'Kecepatan': 'Sampai 80 MB per detik', 'Warna': 'Hitam' },
    { isGrosir: true, sub: 'Flashdisk' }),
  P('Kabel Data USB-C 1 Meter', 'K-Stationery', 35000, 140, 'pcs', 'assets/img/produk/binderclip-2.jpg',
    'Kabel data USB-C untuk mengisi daya dan transfer file ke laptop atau ponsel.',
    { 'Panjang': '1 meter', 'Konektor': 'USB-C ke USB-A', 'Daya': '60 W', 'Warna': 'Hitam' },
    { isGrosir: true, sub: 'Kabel Data' }),
  P('Materai 10.000 (20 lembar)', 'K-Stationery', 210000, 50, 'paket', 'assets/img/produk/stiker-0.jpg',
    'Materai kertas untuk surat dan pengurusan berkas administrasi.',
    { 'Isi': '20 lembar', 'Nilai': '10.000 rupiah', 'Warna': 'Cokelat muda' },
    { isGrosir: true, sub: 'Materai' }),
  P('Amplop Cokelat (20 lembar)', 'K-Stationery', 14000, 180, 'paket', 'assets/img/produk/stiker-1.jpg',
    'Amplop cokelat ukuran surat untuk kirim berkas dan tugas.',
    { 'Isi': '20 lembar', 'Ukuran': 'Half Kilo', 'Bahan': 'Kraft' },
    { isGrosir: true, sub: 'Amplop' }),
  P('Lakban Isolasi (12 rolls)', 'K-Stationery', 42000, 130, 'pak', 'assets/img/produk/stiker-2.jpg',
    'Lakban isolate bening 18 mm dengan panjang 10 meter, lengket rapi dan mudah disobek.',
    { 'Isi': '12 rolls', 'Ukuran': '18 mm x 10 m', 'Warna': 'Bening' },
    { isGrosir: true, sub: 'Lakban' }),
  P('Double Tape (2 rolls)', 'K-Stationery', 28000, 110, 'pak', 'assets/img/produk/organizer-1.jpg',
    'Double tape dua sisi 12 mm untuk menyegel berkas dan kardus.',
    { 'Isi': '2 rolls', 'Lebar': '12 mm', 'Panjang': '10 m', 'Bahan': 'Busa akrilik' },
    { isGrosir: true, sub: 'Double Tape' }),
  P('Gunting Kantor', 'K-Stationery', 18000, 90, 'pcs', 'assets/img/produk/penghapus-2.jpg',
    'Gunting kantor baja dengan pegangan karet yang nyaman dipakai lama.',
    { 'Panjang': '7 inci', 'Bahan': 'Baja tahan karat', 'Pegangan': 'Karet', 'Warna': 'Hitam' },
    { sub: 'Gunting' }),
  P('Cutter Snap Off', 'K-Stationery', 12000, 200, 'pcs', 'assets/img/produk/penghapus-1.jpg',
    'Cutter dengan delapan mata pisau yang bisa patah saat tumpul.',
    { 'Jumlah mata': '8', 'Panjang': '13 cm', 'Bahan': 'Plastik dan baja', 'Warna': ' assorted' },
    { sub: 'Cutter' })
];

/* ---------- Produk: LAYANAN KAMPUS ---------- */
KWU_DATA.productsLayanan = [
  P('Fotokopi per Lembar', 'Layanan KWU', 500, 9999, 'lembar', 'assets/img/produk/fotokopi-0.jpg',
    'Fotokopi hitam putih untuk berkas administrasi, makalah, dan tugas.',
    { 'Ukuran': 'A4 dan F4', 'Warna': 'Hitam putih', 'Kertas': 'Minimal 70 gsm', 'Estimasi': 'Selesai hari yang sama' },
    { type: 'layanan', sub: 'Fotokopi' }),
  P('Print A4 Hitam Putih per Lembar', 'Layanan KWU', 300, 9999, 'lembar', 'assets/img/produk/fotokopi-1.jpg',
    'Print dokumen A4 hitam putih dengan hasil rapi dan font tetap terbaca.',
    { 'Ukuran': 'A4', 'Warna': 'Hitam putih', 'Resolusi': '600 dpi', 'Estimasi': 'Selesai hari yang sama' },
    { type: 'layanan', sub: 'Print' }),
  P('Print A4 Full Colour per Lembar', 'Layanan KWU', 1500, 9999, 'lembar', 'assets/img/produk/pasfoto-0.jpg',
    'Print dokumen A4 berwarna untuk makalah, poster, dan laporan bertabel.',
    { 'Ukuran': 'A4', 'Warna': 'Full colour', 'Kertas': 'Glossy atau doff', 'Estimasi': 'Selesai hari yang sama' },
    { type: 'layanan', sub: 'Print' }),
  P('Jilid Skripsi Spiral', 'Layanan KWU', 35000, 9999, 'eksemplar', 'assets/img/produk/jilid-0.jpg',
    'Penjilidan skripsi dengan spiral keras dan mika depan_customs.',
    { 'Jumlah halaman': 'Minimal 40 halaman', 'Cover': 'Mika warna', 'Pita': 'Putih atau warna', 'Estimasi': '2 hari kerja' },
    { type: 'layanan', isFeatured: true, sub: 'Jilid' }),
  P('Jilid Skripsi Hard Cover', 'Layanan KWU', 55000, 9999, 'eksemplar', 'assets/img/produk/jilid-1.jpg',
    'Penjilidan skripsi dan laporan dengan cover hard cover dan pita emas.',
    { 'Jumlah halaman': 'Minimal 40 halaman', 'Cover': 'Hard cover', 'Pita': 'Emas', 'Estimasi': '3 hari kerja' },
    { type: 'layanan', isFeatured: true, sub: 'Jilid' }),
  P('Jilid Laporan dan Makalah', 'Layanan KWU', 25000, 9999, 'eksemplar', 'assets/img/produk/buku-2.jpg',
    'Penjilidan laporan, makalah, dan proposal dengan mika depan.',
    { 'Jumlah halaman': 'Minimal 20 halaman', 'Cover': 'Mika', 'Pita': 'Warna', 'Estimasi': '1 hari kerja' },
    { type: 'layanan', sub: 'Jilid' }),
  P('Laminating A4 per Lembar', 'Layanan KWU', 3000, 9999, 'lembar', 'assets/img/produk/laminate-0.jpg',
    'Laminating dokumen A4 dengan film tebal dan bening.',
    { 'Ukuran': 'A4', 'Ketebalan film': '0,3 mm', 'Pilihan': 'Bening atau glossy', 'Estimasi': 'Selesai hari yang sama' },
    { type: 'layanan', sub: 'Laminating' }),
  P('Cetak Pas Foto', 'Layanan KWU', 5000, 9999, 'set', 'assets/img/produk/pasfoto-1.jpg',
    'Cetak pas foto ukuran 3 x 4 untuk kebutuhan administrasi dan berkas.',
    { 'Ukuran': '3 x 4 cm', 'Jumlah': '1 lembar berisi 4 foto', 'Background': 'Putih atau biru', 'Estimasi': 'Selesai hari yang sama' },
    { type: 'layanan', sub: 'Cetak Foto' })
];

/* ---------- Produk: ATRIBUT KAMPUS ---------- */
KWU_DATA.productsAtribut = [
  P('Jas Almamater', 'Koleksi KWU', 175000, 45, 'pcs', 'assets/img/produk/kaos-0.jpg',
    'Jas almamater dengan bahan drill, bordir nama, dan ukuran yang mengikuti pesanan.',
    { 'Bahan': 'Drill premium', 'Kustom': 'Nama dan angkatan', 'Ukuran': 'S sampai 3XL', 'Warna': 'Hitam' },
    { isGrosir: true, isFeatured: true, sub: 'Jas' }),
  P('Kaos PDH Kampus', 'Koleksi KWU', 85000, 120, 'pcs', 'assets/img/produk/kaos-1.jpg',
    'Kaos PDH kampus dari katun combed dengan cetak logo departemen.',
    { 'Bahan': 'Cotton combed 24s', 'Ukuran': 'S sampai XXL', 'Cetak': 'DTF', 'Warna': 'Sesuai minat' },
    { isGrosir: true, sub: 'PDH' }),
  P('Topi Kampus', 'Koleksi KWU', 55000, 110, 'pcs', 'assets/img/produk/topi-1.jpg',
    'Topi kampus dengan bordir logo dan tali belakang yang bisa diatur.',
    { 'Bahan': 'Katun twill', 'Lingkar': '54 sampai 60 cm', 'Bordir': 'Logo departemen', 'Warna': 'Hitam dan navy' },
    { isGrosir: true, sub: 'Topi' }),
  P('Pin Penanda Nama (10 pcs)', 'K-Stationery', 25000, 130, 'paket', 'assets/img/produk/pulpen-2.jpg',
    'Pin penanda nama untuk jas dan PDH, isi sepuluh buah per paket.',
    { 'Isi': '10 pcs', 'Ukuran': '2,5 cm', 'Bahan': 'Logam', 'Warna': 'Emas dan perak' },
    { isGrosir: true, sub: 'Pin' }),
  P('Tanda Pengenal ID Card', 'K-Stationery', 20000, 160, 'pcs', 'assets/img/produk/stiker-0.jpg',
    'Lanyard tanda pengenal dengan hook dan cetakan nama atau logo.',
    { 'Lebar': '2 cm', 'Panjang': '90 cm', 'Bahan': 'Polyester', 'Tempat': 'Kartu ID card' },
    { isGrosir: true, sub: 'Tanda Pengenal' }),
  P('Totebag Merchandise Kampus', 'Serat Lokal', 45000, 200, 'pcs', 'assets/img/produk/totebag-0.jpg',
    'Totebag kanvas serat dengan cetak logo departemen dan compartment dalam.',
    { 'Bahan': 'Kanvas serat 12 oz', 'Ukuran': '38 x 42 x 12 cm', 'Cetak': 'Plastisol', 'Warna': 'Natural' },
    { isGrosir: true, isFeatured: true, sub: 'Merchandise' }),
  P('Tumbler Merchandise Kampus', 'Pelan', 79000, 120, 'pcs', 'assets/img/produk/tumbler-2.jpg',
    'Tumbler stainless 500 ml dengan logo departemen terukir laser.',
    { 'Volume': '500 ml', 'Material': 'Stainless 316', 'Lapis': 'Vakum ganda', 'Warna': 'Hitam' },
    { isGrosir: true, isFeatured: true, sub: 'Merchandise' }),
  P('Gantungan Kunci Merchandise', 'Koleksi KWU', 25000, 180, 'pcs', 'assets/img/produk/kaos-2.jpg',
    'Gantungan kunci karet dengan bentuk logo departemen, ringan dan tahan lama.',
    { 'Bahan': 'Karet', 'Bentuk': 'Custom logo', 'Rantai': 'Nilon', 'Warna': ' assorted' },
    { isGrosir: true, sub: 'Merchandise' })
];

/* ---------- Produk: MAKANAN ---------- */
KWU_DATA.productsMakanan = [
  P('Keripik Kentang Ori (5 pcs)', 'Sari Banih', 12000, 260, 'pak', 'assets/img/produk/pisanggoreng-0.jpg',
    'Keripik kentang dengan minyak goreng baru dan rasa gurih. Isi lima pouch per pak.',
    { 'Isi': '5 pouch', 'Berat bersih': '60 gram per pouch', 'Rasa': 'Original dan pedas', 'Daya simpan': '4 bulan' },
    { tags: ['grosir'], isGrosir: true, sub: 'Camilan Ringan' }),
  P('Keripik Singkong (5 pcs)', 'Sari Banih', 12000, 240, 'pak', 'assets/img/produk/pisanggoreng-1.jpg',
    'Keripik singkong renyah dengan potongan singkong utuh di dalam.',
    { 'Isi': '5 pouch', 'Berat bersih': '60 gram per pouch', 'Rasa': 'Original', 'Daya simpan': '4 bulan' },
    { isGrosir: true, sub: 'Camilan Ringan' }),
  P('Keripik Pisang (5 pcs)', 'Sari Banih', 10000, 250, 'pak', 'assets/img/produk/keripik-1.jpg',
    'Keripik pisang manis dengan tekstur renyah yang tahan lama.',
    { 'Isi': '5 pouch', 'Berat bersih': '50 gram per pouch', 'Rasa': 'Original dan pisang', 'Daya simpan': '4 bulan' },
    { isGrosir: true, sub: 'Camilan Ringan' }),
  P('Kerupuk Udang (2 packs)', 'Samudra Kencana', 12000, 230, 'pak', 'assets/img/produk/kerupuk-0.jpg',
    'Kerupuk udang renyah dengan rasa udang yang terasa.',
    { 'Isi': '2 packs', 'Berat bersih': '250 gram', 'Rasa': 'Original dan pedas', 'Daya simpan': '5 bulan' },
    { isGrosir: true, sub: 'Camilan Ringan' }),
  P('Makaroni Goreng (1 pack)', 'Sari Banih', 14000, 200, 'pak', 'assets/img/produk/kerupuk-1.jpg',
    'Makaroni goreng bungkus dengan bumbu kuning yang gurih dan cepat matang.',
    { 'Isi': '1 pack', 'Berat bersih': '150 gram', 'Bahan': 'Tepung gandum', 'Daya simpan': '6 bulan' },
    { isGrosir: true, sub: 'Camilan Ringan' }),
  P('Biskuit Kaleng (1 tin)', 'Gandum Jaya', 22000, 190, 'kaleng', 'assets/img/produk/biskuit-1.jpg',
    'Biskuit pilihan dalam kaleng yang mudah diportion dan dibawa ke kelas.',
    { 'Isi': '1 kaleng', 'Berat bersih': '300 gram', 'Rasa': ' assorted', 'Daya simpan': '9 bulan' },
    { isGrosir: true, sub: 'Camilan Ringan' }),
  P('Wafer Rol (1 pack)', 'Gandum Jaya', 11000, 220, 'pak', 'assets/img/produk/biskuit-3.jpg',
    'Wafer rol renyah dengan lapisan cokelat yang manis.',
    { 'Isi': '1 pak', 'Berat bersih': '115 gram', 'Rasa': ' assorted', 'Daya simpan': '6 bulan' },
    { isGrosir: true, sub: 'Camilan Ringan' }),
  P('Cokelat Batang (10 pcs)', 'Buah Naga', 18000, 200, 'pak', 'assets/img/produk/snackbox-2.jpg',
    'Cokelat batang dengan taburan dan isi creamy, praktis jadi camilan.',
    { 'Isi': '10 pcs', 'Berat bersih': '240 gram', 'Rasa': ' assorted', 'Daya simpan': '9 bulan' },
    { isGrosir: true, sub: 'Camilan Ringan' }),
  P('Permen Jelly (1 pack)', 'Fruit Kitchen', 12000, 240, 'pak', 'assets/img/produk/jelly-0.jpg',
    'Permen jelly lembut dengan berbagai rasa buah.',
    { 'Isi': '1 pack', 'Berat bersih': '300 gram', 'Rasa': ' assorted', 'Daya simpan': '12 bulan' },
    { isGrosir: true, sub: 'Camilan Ringan' }),
  P('Permen Karet (1 pack)', 'Fruit Kitchen', 8000, 260, 'pak', 'assets/img/produk/jelly-2.jpg',
    'Permen karet dengan rasa buah yang menyegarkan.',
    { 'Isi': '1 pack', 'Berat bersih': '250 gram', 'Rasa': ' assorted', 'Daya simpan': '12 bulan' },
    { isGrosir: true, sub: 'Camilan Ringan' }),
  P('Kacang Goreng (2 packs)', 'Sari Banih', 16000, 230, 'pak', 'assets/img/produk/kerupuk-1.jpg',
    'Kacang goreng renyah dengan minyak wangi dan amis yang gurih.',
    { 'Isi': '2 packs', 'Berat bersih': '200 gram', 'Rasa': 'Original dan Original', 'Daya simpan': '4 bulan' },
    { isGrosir: true, sub: 'Camilan Ringan' }),
  P('Kuaci Kacang (1 pack)', 'Sari Banih', 15000, 210, 'pak', 'assets/img/produk/biskuit-2.jpg',
    'Kuaci kacang sizeof yang renyah dan manis legit.',
    { 'Isi': '1 pack', 'Berat bersih': '200 gram', 'Rasa': 'Original', 'Daya simpan': '4 bulan' },
    { isGrosir: true, sub: 'Camilan Ringan' }),
  P('Popcorn Jagung (1 pack)', 'Sari Banih', 12000, 180, 'pak', 'assets/img/produk/snackbox-1.jpg',
    'Popcorn jagung binggung tanpa minyak yang ringan dan gurih.',
    { 'Isi': '1 pack', 'Berat bersih': '180 gram', 'Rasa': 'Original dan mentega', 'Daya simpan': '5 bulan' },
    { isGrosir: true, sub: 'Camilan Ringan' }),
  P('Pilus Kentang (1 pack)', 'Sari Banih', 9000, 190, 'pak', 'assets/img/produk/snackbox-3.jpg',
    'Pilus kentang dengan Tekstur kenyal dan rasa ringan.',
    { 'Isi': '1 pack', 'Berat bersih': '70 gram', 'Rasa': ' assorted', 'Daya simpan': '5 bulan' },
    { isGrosir: true, sub: 'Camilan Ringan' }),
  P('Stick Snack (1 pack)', 'Sari Banih', 13000, 170, 'pak', 'assets/img/produk/snackbox-0.jpg',
    'Stick snack gandum dengan dua pilihan rasa dan tekstur renyah.',
    { 'Isi': '1 pack', 'Berat bersih': '160 gram', 'Rasa': ' assorted', 'Daya simpan': '6 bulan' },
    { isGrosir: true, sub: 'Camilan Ringan' }),
  P('Roti Tawar (2 loaf)', 'Sarana Bakery', 32000, 80, 'paket', 'assets/img/produk/roti-0.jpg',
    'Roti tawar fermentasi alami dengan tekstur lembut dan bagian luar yang garing.',
    { 'Isi': '2 loaf', 'Berat bersih': '800 gram', 'Bahan': 'Tepung, ragi, susu', 'Daya simpan': '2 hari' },
    { isFeatured: true, sub: 'Roti' }),
  P('Roti Isi Cokelat', 'Sarana Bakery', 9000, 120, 'pcs', 'assets/img/produk/roti-1.jpg',
    'Roti isi cokelat dengan lapisan cokelat pekat yang meleleh.',
    { 'Berat bersih': '80 gram', 'Isi': 'Cokelat', 'Kemasan': 'Kraft paper' },
    { isGrosir: true, sub: 'Roti Isi' }),
  P('Roti Isi Keju', 'Sarana Bakery', 9000, 110, 'pcs', 'assets/img/produk/kuebasah-0.jpg',
    'Roti isi keju dengan lapisan keju yang lumer saat dipanaskan.',
    { 'Berat bersih': '80 gram', 'Isi': 'Keju cheddar', 'Kemasan': 'Kraft paper' },
    { isGrosir: true, sub: 'Roti Isi' }),
  P('Roti Isi Srikaya', 'Sarana Bakery', 10000, 100, 'pcs', 'assets/img/produk/kuebasah-1.jpg',
    'Roti isi srikaya dengan rasa manis dan aroma kelapa yang khas.',
    { 'Berat bersih': '85 gram', 'Isi': 'Srikaya', 'Kemasan': 'Kraft paper' },
    { isGrosir: true, sub: 'Roti Isi' }),
  P('Roti Sobek (4 pcs)', 'Sarana Bakery', 18000, 95, 'pak', 'assets/img/produk/kuilapis-1.jpg',
    'Roti sobek lembut dengan bagian dalam yang bertekstur rapi.',
    { 'Isi': '4 pcs', 'Berat bersih': '400 gram', 'Bahan': 'Tepung, mentega, susu', 'Daya simpan': '2 hari' },
    { isGrosir: true, sub: 'Roti' }),
  P('Bolu Kukus (4 pcs)', 'Dapoer Manis', 20000, 90, 'pak', 'assets/img/produk/kuebasah-1.jpg',
    'Bolu kukus lembut dengan pemanis gula aren dan aroma hangat.',
    { 'Isi': '4 pcs', 'Berat bersih': '400 gram', 'Daya simpan': '2 hari', 'Kondisi': 'Simpan di lemari es' },
    { isGrosir: true, sub: 'Kue Basah' }),
  P('Donat Gula (4 pcs)', 'Dapoer Manis', 22000, 85, 'pak', 'assets/img/produk/donat-0.jpg',
    'Donat gula lembut dengan lapisan gula aren di bagian atas.',
    { 'Isi': '4 pcs', 'Berat bersih': '400 gram', 'Daya simpan': '2 hari', 'Kondisi': 'Simpan di lemari es' },
    { isGrosir: true, isFeatured: true, sub: 'Kue Basah' }),
  P('Kue Basah assorted (6 pcs)', 'Dapoer Manis', 24000, 80, 'pak', 'assets/img/produk/kuebasah-0.jpg',
    'Aneka kue basah untuk sarapan, lembut dan manis legit.',
    { 'Isi': '6 pcs', 'Varian': ' assorted', 'Daya simpan': '2 hari', 'Kondisi': 'Simpan di lemari es' },
    { isGrosir: true, sub: 'Kue Basah' }),
  P('Gorengan Tahu Isi (5 pcs)', 'Dapur Rindu', 10000, 140, 'bungkus', 'assets/img/produk/satay-1.jpg',
    'Tahu goreng isi sayur dan bumbu, paling enak dimakan selagi hangat.',
    { 'Isi': '5 pcs', 'Kemasan': 'Kraft paper', 'Daya simpan': '6 jam', 'Kondisi': 'Untuk hari yang sama' },
    { isGrosir: true, sub: 'Gorengan' }),
  P('Gorengan Pisang (5 pcs)', 'Dapur Rindu', 12000, 130, 'bungkus', 'assets/img/produk/pisanggoreng-0.jpg',
    'Pisang goreng dengan lapisan renyah dan gula yang melimpah.',
    { 'Isi': '5 pcs', 'Kemasan': 'Kraft paper', 'Daya simpan': '6 jam', 'Kondisi': 'Untuk hari yang sama' },
    { isGrosir: true, sub: 'Gorengan' }),
  P('Lemper Ayam (4 pcs)', 'Dapur Rindu', 14000, 120, 'bungkus', 'assets/img/produk/satay-0.jpg',
    'Lemper ayam goreng dengan lapisan luar yang renyah dan empuk di dalam.',
    { 'Isi': '4 pcs', 'Kemasan': 'Kraft paper', 'Daya simpan': '6 jam', 'Kondisi': 'Untuk hari yang sama' },
    { isGrosir: true, sub: 'Gorengan' }),
  P('Nasi Bungkus', 'Kantin Terpadu', 18000, 60, 'bungkus', 'assets/img/produk/nasi-1.jpg',
    'Nasi bungkus dengan lauk pilihan dan sambal. Dipesan untuk hari yang sama.',
    { 'Isi': '1 bungkus', 'Lauk': 'Pilihan saat pesan', 'Berat': '400 gram', 'Pesan': 'Dipesan hari yang sama' },
    { type: 'makanan-sehari', isGrosir: true, sub: 'Nasi' }),
  P('Nasi Kuning', 'Kantin Terpadu', 20000, 50, 'bungkus', 'assets/img/produk/beras-0.jpg',
    'Nasi kuning santan dengan suwiran, ayam, dan tempe goreng.',
    { 'Isi': '1 bungkus', 'Lauk': 'Ayam, suwiran, tempe', 'Berat': '400 gram', 'Pesan': 'Dipesan hari yang sama' },
    { type: 'makanan-sehari', isGrosir: true, sub: 'Nasi' }),
  P('Lontong Sayur', 'Kantin Terpadu', 16000, 55, 'bungkus', 'assets/img/produk/beras-1.jpg',
    'Lontong sayur bening dengan sawi, wortel, dan sambal segar.',
    { 'Isi': '1 bungkus', 'Lauk': 'Sayur bening dan sambal', 'Berat': '350 gram', 'Pesan': 'Dipesan hari yang sama' },
    { type: 'makanan-sehari', isGrosir: true, sub: 'Nasi' }),
  P('Mi Instan Goreng (5 pcs)', 'Mi Saku', 15000, 260, 'pak', 'assets/img/produk/mie-0.jpg',
    'Mi instan goreng bungkus dengan bumbu khas dan mie yang tidak mudah hancur.',
    { 'Isi': '5 pcs', 'Berat bersih': '85 gram per bungkus', 'Rasa': 'Goreng original', 'Daya simpan': '9 bulan' },
    { tags: ['grosir'], isGrosir: true, sub: 'Mi Instan' }),
  P('Mi Instan Kuah (5 pcs)', 'Mi Saku', 15000, 250, 'pak', 'assets/img/produk/mie-1.jpg',
    'Mi instan kuah dengan kaldu bening dan bumbu rempah yang harum.',
    { 'Isi': '5 pcs', 'Berat bersih': '80 gram per bungkus', 'Rasa': 'Kuah original', 'Daya simpan': '9 bulan' },
    { isGrosir: true, sub: 'Mi Instan' }),
  P('Mi Instan Soto (5 pcs)', 'Mi Saku', 17000, 210, 'pak', 'assets/img/produk/mie-0.jpg',
    'Mi instan soto dengan kuah bening berbumbu rempah.',
    { 'Isi': '5 pcs', 'Berat bersih': '80 gram per bungkus', 'Rasa': 'Soto original', 'Daya simpan': '9 bulan' },
    { isGrosir: true, sub: 'Mi Instan' }),
  P('Cup Noodle (3 pcs)', 'Cup Nasi', 19000, 200, 'pak', 'assets/img/produk/mie-1.jpg',
    'Cup noodle praktis, tinggal seduh air panas dan diamkan tiga menit.',
    { 'Isi': '3 cups', 'Berat bersih': '60 gram per cup', 'Rasa': ' assorted', 'Daya simpan': '9 bulan' },
    { isGrosir: true, sub: 'Mi Instan' }),
  P('Mi Gelas (2 pcs)', 'Cup Nasi', 16000, 150, 'pak', 'assets/img/produk/mie-0.jpg',
    'Mi dalam kemasan gelas dengan porsi pas untuk=AJAX jam kerja.',
    { 'Isi': '2 cups', 'Berat bersih': '75 gram per cup', 'Rasa': ' assorted', 'Daya simpan': '9 bulan' },
    { isGrosir: true, sub: 'Mi Instan' }),
  P('Bubur Instan (4 cups)', 'Semalam Kitchen', 24000, 130, 'pak', 'assets/img/produk/beras-0.jpg',
    'Bubur instan dengan nasi dan sup hangat, praktis untuk sarapan cepat.',
    { 'Isi': '4 cups', 'Berat bersih': '55 gram per cup', 'Rasa': ' assorted', 'Daya simpan': '9 bulan' },
    { isGrosir: true, sub: 'Makanan Instan' }),
  P('Oatmeal Instan (6 cups)', 'Semalam Kitchen', 26000, 120, 'pak', 'assets/img/produk/kuebasah-0.jpg',
    'Oatmeal instan dengan gandum utuh, tinggi protein, dan cepat disiapkan.',
    { 'Isi': '6 cups', 'Berat bersih': '40 gram per cup', 'Rasa': ' assorted', 'Daya simpan': '12 bulan' },
    { isGrosir: true, sub: 'Makanan Instan' }),
  P('Sereal Box (1 box)', 'Semalam Kitchen', 32000, 110, 'box', 'assets/img/produk/cucur-0.jpg',
    'Sereal gandum dengan bentuk dan rasa yang bervariasi.',
    { 'Isi': '1 box', 'Berat bersih': '330 gram', 'Rasa': ' assorted', 'Daya simpan': '9 bulan' },
    { isGrosir: true, sub: 'Makanan Instan' }),
  P('Sosis Nugget (10 pcs)', 'Dapur Rindu', 28000, 90, 'pak', 'assets/img/produk/nugget-0.jpg',
    'Sosis dan nugget beku siap goreng, disimpan di freezer Benefit.',
    { 'Isi': '10 pcs', 'Berat bersih': '500 gram', 'Penyimpanan': 'Freezer', 'Daya simpan': '3 bulan' },
    { isGrosir: true, sub: 'Makanan Instan' })
];

/* ---------- Produk: MINUMAN ---------- */
KWU_DATA.productsMinuman = [
  P('Air Mineral Botol 600 ml (2 pcs)', 'Air Murni', 8000, 320, 'pak', 'assets/img/produk/minumbotol-0.jpg',
    'Air mineral dalam kemasan botol, dingin dan siap diminum.',
    { 'Volume': '600 ml per botol', 'Isi': '2 botol', 'Kemasan': 'Botol PET', 'Kondisi': 'Dingin atau suhu ruang' },
    { tags: ['grosir'], isGrosir: true, sub: 'Air Mineral' }),
  P('Air Mineral Galon 19 L', 'Air Murni', 28000, 40, 'galon', 'assets/img/produk/minumbotol-1.jpg',
    'Air mineral isi ulang dalam galon 19 liter, praktis untuk kebutuhan rumah atau kos.',
    { 'Volume': '19 liter', 'Isi': '1 galon', 'Layanan': 'Pengisian ulang', 'Tersedia': 'Setiap hari kerja' },
    { isGrosir: true, sub: 'Air Mineral' }),
  P('Teh Botol 350 ml (4 pcs)', 'Teh Sari Padang', 20000, 240, 'pak', 'assets/img/produk/tehdingin-1.jpg',
    'Teh botol pahit yang menyegarkan, kemasan plastik ringan.',
    { 'Volume': '350 ml per botol', 'Isi': '4 botol', 'Rasa': 'Pahit dan gurih', 'Daya simpan': '9 bulan' },
    { isGrosir: true, sub: 'Teh Kemasan' }),
  P('Teh Kotak 250 ml (6 pcs)', 'Teh Sari Padang', 24000, 210, 'pak', 'assets/img/produk/tehdingin-0.jpg',
    'Teh kotak siap minum dengan gula aren, praktis dibawa ke kelas.',
    { 'Volume': '250 ml per kotak', 'Isi': '6 kotak', 'Pemanis': 'Gula aren', 'Daya simpan': '9 bulan' },
    { isGrosir: true, sub: 'Teh Kemasan' }),
  P('Minuman Soda (2 bottles)', 'Fizz Lokal', 16000, 230, 'pak', 'assets/img/produk/minumbotol-1.jpg',
    'Minuman soda berkarbonasi dalam kemasan botol, dingin lebih enak.',
    { 'Volume': '390 ml per botol', 'Isi': '2 botol', 'Rasa': ' assorted', 'Daya simpan': '12 bulan' },
    { isGrosir: true, sub: 'Soda' }),
  P('Minuman Isotonik (2 bottles)', 'Isotonik', 20000, 220, 'pak', 'assets/img/produk/minumbotol-0.jpg',
    'Minuman isotonik untuk’électrolit setelah aktivitas berat.',
    { 'Volume': '500 ml per botol', 'Isi': '2 botol', 'Rasa': ' assorted', 'Daya simpan': '12 bulan' },
    { isGrosir: true, sub: 'Isotonik' }),
  P('Jus Kemasan (3 bottles)', 'Sari Buah', 24000, 200, 'pak', 'assets/img/produk/jusmangga-0.jpg',
    'Jus buah kemasan dengan rasa manis dan kadar pulp yang terasa.',
    { 'Volume': '250 ml per botol', 'Isi': '3 botol', 'Rasa': ' assorted', 'Daya simpan': '9 bulan' },
    { isGrosir: true, sub: 'Jus Kemasan' }),
  P('Susu UHT Full Cream 1 L', 'Sapi Perah', 28000, 200, 'kotak', 'assets/img/produk/susu-0.jpg',
    'Susu UHT full cream dengan kadar lemak 3,5 persen dan rasa susu yang pekat.',
    { 'Volume': '1 liter', 'Kadar lemak': '3,5 persen', 'Susu': '100 persen susu sapi', 'Daya simpan': '9 bulan' },
    { isGrosir: true, sub: 'Susu Kemasan' }),
  P('Susu Kotak (6 boxes)', 'Sapi Perah', 27000, 190, 'pak', 'assets/img/produk/susu-2.jpg',
    'Susu kotak siap minum untuk_stock di kelas atau rapat.',
    { 'Volume': '250 ml per kotak', 'Isi': '6 kotak', 'Rasa': 'Full cream', 'Daya simpan': '9 bulan' },
    { isGrosir: true, sub: 'Susu Kemasan' }),
  P('Susu Cokelat Botol (2 bottles)', 'Cokelat Ruma', 14000, 230, 'pak', 'assets/img/produk/susu-1.jpg',
    'Susu cokelat minum packaged dengan rasa cokelat pekat.',
    { 'Volume': '200 ml per botol', 'Isi': '2 botol', 'Rasa': 'Cokelat', 'Daya simpan': '9 bulan' },
    { isGrosir: true, sub: 'Susu Kemasan' }),
  P('Kopi Siap Minum Botol (2 bottles)', 'Kopi Kanduri', 18000, 210, 'pak', 'assets/img/produk/kopisusu-0.jpg',
    'Kopi susu siap minum dalam botol, dingin langsung diminum.',
    { 'Volume': '250 ml per botol', 'Isi': '2 botol', 'Kadar kopi': '1,5 gram', 'Daya simpan': '6 bulan' },
    { isGrosir: true, sub: 'Kopi Kemasan' }),
  P('Kopi Kaleng (2 cans)', 'Kopi Kanduri', 22000, 190, 'pak', 'assets/img/produk/kopibiji-0.jpg',
    'Kopi susu dalam kaleng, praktis untuk dibawa atau disimpan di tas.',
    { 'Volume': '250 ml per kaleng', 'Isi': '2 kaleng', 'Rasa': 'Full cream', 'Daya simpan': '12 bulan' },
    { isGrosir: true, sub: 'Kopi Kemasan' }),
  P('Minuman Energi Kaleng (4 cans)', 'Krating Joss', 20000, 170, 'pak', 'assets/img/produk/minumbotol-1.jpg',
    'Minuman energi dalam kaleng untuk menjaga stamina saat mengejar deadline.',
    { 'Volume': '250 ml per kaleng', 'Isi': '4 kaleng', 'Rasa': ' assorted', 'Daya simpan': '12 bulan' },
    { isGrosir: true, sub: 'Minuman Energi' }),
  P('Kopi Sachet 20 g (10 pcs)', 'Kapal Api', 22000, 250, 'pak', 'assets/img/produk/gulaaren-0.jpg',
    'Kopi sachet untuk diseduh cepat di kos atau kantor, satu sachet satu gelas.',
    { 'Isi': '10 sachet', 'Berat bersih': '20 gram per sachet', 'Rasa': ' assorted', 'Daya simpan': '12 bulan' },
    { tags: ['grosir'], isGrosir: true, sub: 'Kopi Sachet' }),
  P('Kopi Special Sachet (10 pcs)', 'Torabika', 18000, 240, 'pak', 'assets/img/produk/gulaaren-1.jpg',
    'Kopi sachet dengan aroma kuat dan sedikit manis khas.',
    { 'Isi': '10 sachet', 'Berat bersih': '20 gram per sachet', 'Rasa': ' assorted', 'Daya simpan': '12 bulan' },
    { isGrosir: true, sub: 'Kopi Sachet' }),
  P('Teh Celup Melati (25 bags)', 'Teh Alam', 22000, 230, 'box', 'assets/img/produk/teh-1.jpg',
    'Teh celup melati dengan aroma bunga yang jelas dan tidak pahit.',
    { 'Isi': '25 bags', 'Bahan': 'Daun teh melati', 'Kemasan': 'Dus dengan 5 envelope', 'Daya simpan': '12 bulan' },
    { isGrosir: true, sub: 'Teh Seduh' }),
  P('Teh Sari Sachet (10 pcs)', 'Teh Sari Padang', 15000, 260, 'pak', 'assets/img/produk/tehdingin-0.jpg',
    'Teh sari pahit khas Minang dalam sachet, diseduh dengan air panas.',
    { 'Isi': '10 sachet', 'Berat bersih': '2 gram per sachet', 'Rasa': 'Pahit gurih', 'Daya simpan': '12 bulan' },
    { isGrosir: true, sub: 'Teh Seduh' }),
  P('Cokelat Bubuk (6 sachets)', 'Milo', 28000, 220, 'pak', 'assets/img/produk/cucur-1.jpg',
    'Cokelat bubuk untuk diseduh hangat, rasa cokelatnya pekat.',
    { 'Isi': '6 sachet', 'Berat bersih': '25 gram per sachet', 'Rasa': 'Cokelat', 'Daya simpan': '12 bulan' },
    { isGrosir: true, sub: 'Cokelat Bubuk' }),
  P('Susu Bubuk Sachet (6 pcs)', 'Sapi Perah', 24000, 210, 'pak', 'assets/img/produk/santan-0.jpg',
    'Susu bubuk sachet untuk ditambahkan ke kopi atauarosidfide.',
    { 'Isi': '6 sachet', 'Berat bersih': '30 gram per sachet', 'Rasa': 'Full cream', 'Daya simpan': '12 bulan' },
    { isGrosir: true, sub: 'Susu Bubuk' }),
  P('Jahe Merah Instan (5 pcs)', 'Wedang Cap', 15000, 200, 'pak', 'assets/img/produk/cabe-0.jpg',
    'Jahe merah instan untuk diminum hangat, berasa hangat dan menghangatkan.',
    { 'Isi': '5 sachet', 'Berat bersih': '25 gram per sachet', 'Rasa': 'Jahe merah', 'Daya simpan': '12 bulan' },
    { isGrosir: true, sub: 'Jahe' }),
  P('Wedang Jahe (6 pcs)', 'Wedang Cap', 16000, 190, 'pak', 'assets/img/produk/tehdingin-1.jpg',
    'Wedang jahe siap minum, hangat dan mudah dibawa ke kelas.',
    { 'Isi': '6 pcs', 'Volume': '250 ml per botol', 'Rasa': 'Jahe', 'Daya simpan': '9 bulan' },
    { isGrosir: true, sub: 'Jahe' })
];

/* ---------- Produk: PAKET HEMAT ---------- */
KWU_DATA.productsPaket = [
  P('Paket Sarapan Kantor', 'Paket Hemat', 129000, 60, 'paket', 'assets/img/produk/hadiah-0.jpg',
    'Satu paket untuk sepuluh orang: kopi susu, teh celup, dan biskuit. Praktis untuk rapat pagi.',
    { 'Isi': '10 kopi susu, 2 dus teh, 2 biskuit', 'Untuk': '10 orang', 'Bonus': 'Kartu ucapan', 'Minimum grosir': '5 paket' },
    { tags: ['unggulan', 'grosir'], isGrosir: true, isFeatured: true, sub: 'Paket' }),
  P('Paket Alat Tulis Perkuliahan', 'Paket Hemat', 149000, 45, 'paket', 'assets/img/produk/organizer-3.jpg',
    'Bundling alat tulis untuk satu meja kuliah: buku tulis, pulpen, sticky notes, organizer, dan penghapus.',
    { 'Isi': 'Buku, pulpen, sticky, organizer, penghapus', 'Jumlah': '5 jenis per paket', 'Bonus': 'Kartu ucapan', 'Minimum grosir': '4 paket' },
    { tags: ['grosir'], isGrosir: true, sub: 'Paket' }),
  P('Paket Atribut Tim', 'Paket Hemat', 279000, 32, 'paket', 'assets/img/produk/kaos-2.jpg',
    'Satu paket berisi kaos PDH, tote bag, topi, dan tumbler. Cocok untuk merchandise tim atau acara.',
    { 'Isi': 'Kaos, tote bag, topi, tumbler', 'Ukuran': 'S sampai XXL', 'Penghematan': 'Sekitar Rp 63.000', 'Minimum grosir': '3 paket' },
    { tags: ['grosir'], isGrosir: true, isFeatured: true, sub: 'Paket' })
];

/* ---------- Gabungkan produk ke satu daftar ---------- */
const CATEGORY_OF = {
  productsMakanan: 'makanan',
  productsMinuman: 'minuman',
  productsAtribut: 'atribut',
  productsLayanan: 'layanan',
  productsAlatTulis: 'alat-tulis',
  productsPaket: 'paket'
};

KWU_DATA.products = [];
Object.keys(CATEGORY_OF).forEach(key => {
  (KWU_DATA[key] || []).forEach(product => {
    product.category = CATEGORY_OF[key];
    if (product.isGrosir && product.minOrder === 1) product.minOrder = 6;
    KWU_DATA.products.push(product);
  });
  delete KWU_DATA[key];
});

/* ---------- Ulasan contoh (dibuat dari templat, tetap konsisten) ---------- */
const REVIEW_TEMPLATES = [
  { r: 5, t: 'Sesuai harapan', x: '{name} datang cepat dan pengemasannya rapi. Isinya persis seperti yang tertulis di katalog.' },
  { r: 5, t: 'Puasain', x: 'Sudah beberapa kali ambil {name} dari {brand}. Kualitasnya konsisten dan harganya masuk akal.' },
  { r: 4, t: 'Bagus, sedikit catatan', x: 'Barang {name} oke, cuma pengemasannya bisa lebih rapat lagi biar aman di tas.' },
  { r: 5, t: 'Recommended', x: 'Recommended untuk {sub} di kampus. Pemakaiannya praktis dan tidak ribet.' },
  { r: 4, t: 'Nilai,oke', x: 'Harga {name}phenolsinin alright untuk kebutuhan {sub}. Pengirimannya juga tepat waktu.' },
  { r: 5, t: 'Puasain buat kelas', x: 'Dibeli buat kebutuhan {sub} angkatan, semuanya sampai dan dalam kondisi baik.' },
  { r: 3, t: 'Lumayan', x: '{name} berfungsi normal, tapi ada bagian yang bisa lebih rapi dari ConquerExpired.' },
  { r: 5, t: 'Tepat untuk kebutuhan', x: 'Harganya masuk akal, isi {name} juga lebih dari cukup buat dipakai {sub}.' },
  { r: 4, t: 'Enak dan praktis', x: 'Pakai {name} tiap hari, praktis dan tidak bikin ribet. Recommended.' },
  { r: 5, t: 'Worth it', x: 'Dengan harga segini, {name} jelas worth it. Sudah re-order dua kali.' },
  { r: 4, t: 'Bagus untuk hadiah', x: 'Cocok dipakai sebagai hadiah buat teman, {_name} yang kami belirono di fronteras lain.' },
  { r: 5, t: 'Kualitas oke', x: 'Kualitas {name} di atas ekspektasi untuk harga {sub} yang ditawarkan.' }
];

const REVIEW_NAMES = ['Rani P.', 'Bagus W.', 'Sinta W.', 'Dimas A.', 'Nadia H.', 'Taufik R.', 'Putri A.', 'Andi M.', 'Fajar S.', 'Mega L.', 'Rizky N.', 'Intan D.', 'Yoga P.', 'Lia K.', 'Doni S.', 'Fajar N.', 'Nana R.', 'Indah M.', 'Riko H.', 'Tia W.'];

const REVIEW_DATES = ['2026-10-18', '2026-10-11', '2026-10-04', '2026-09-27', '2026-09-19', '2026-09-08', '2026-08-29', '2026-08-14', '2026-07-30', '2026-07-12', '2026-06-24', '2026-06-05'];

KWU_DATA.reviews = {};
KWU_DATA.products.forEach((product, index) => {
  const count = 3 + (index % 5);
  const list = [];
  for (let i = 0; i < count; i++) {
    const tpl = REVIEW_TEMPLATES[(index * 3 + i * 5) % REVIEW_TEMPLATES.length];
    list.push({
      author: REVIEW_NAMES[(index * 5 + i * 3) % REVIEW_NAMES.length],
      rating: tpl.r,
      date: REVIEW_DATES[(index + i * 5) % REVIEW_DATES.length],
      title: tpl.t,
      text: tpl.x
        .replace(/\{name\}/g, product.name)
        .replace(/\{brand\}/g, product.brand)
        .replace(/\{unit\}/g, product.unit)
        .replace(/\{sub\}/g, product.sub || categoryNameFallback(product.category))
        .replace(/\{_name\}/g, product.name)
    });
  }
  KWU_DATA.reviews[product.id] = list;
  const total = list.reduce((sum, r) => sum + r.rating, 0);
  product.rating = Math.round((total / list.length) * 10) / 10;
  product.reviewCount = list.length + 40 + (index % 7) * 23;
});

function categoryNameFallback(id) {
  const cat = KWU_DATA.categories.find(c => c.id === id);
  return cat ? cat.name.toLowerCase() : 'kebutuhan kampus';
}

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
    id: 'a4', slug: 'pelayanan-jilid-skripsi', title: 'Pelayanan Jilid Skripsi Dibuka Serentak',
    excerpt: 'Layanan jilid spiral dan hard cover untuk skripsi, laporan, dan makalah mahasiswa.',
    date: '2026-07-12', category: 'Layanan', readTime: 7, image: 'assets/img/produk/jilid-0.jpg',
    body: 'Layanan jilid dibuka dengan antrean di loket KWU. Pengambilan maksimal tiga hari kerja setelah berkas lengkap.'
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
  { q: 'Di mana lokasi KWU?', a: 'Layanan KWU berada di Gedung S Lantai 1 Politeknik Negeri Padang. Buka halaman Bantuan untuk memuat peta dan lokasi lengkap.' },
  { q: 'Berapa lama pesanan diproses?', a: 'Waktu proses dan serah terima mengikuti prosedur resmi KWU Administrasi Niaga. Nomor transaksi dipakai sebagai rujukan saat konfirmasi.' },
  { q: 'Bagaimana produk diambil setelah pesanan diproses?', a: 'Jadwal pengambilan atau pengiriman disepakati bersama admin KWU setelah pesanan berstatus Diproses. Simpan nomor transaksi sebagai bukti pemesanan.' },
  { q: 'Apakah KWU menyediakan layanan fotokopi dan jilid?', a: 'Ya. Fotokopi, print, jilid spiral dan hard cover, laminating, serta cetak pas foto tersedia sebagai layanan di kategori Layanan Kampus.' },
  { q: 'Bagaimana cara mengajukan pembelian grosir?', a: 'Gunakan formulir RFQ pada halaman Kolaborasi Grosir. Isi data organisasi, daftar produk, jumlah, dan tanggal kebutuhan. Nomor pengajuan muncul setelah formulir dikirim.' },
  { q: 'Berapa minimum pembelian grosir?', a: 'Setiap produk punya minimum pembelian sendiri, umumnya mulai dari 6 pcs. Detailnya tampil di bagian Jumlah pada halaman produk.' },
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

