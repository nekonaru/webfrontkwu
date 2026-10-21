/* =========================================================
   KWU Campus Business Hub - product.js
   Halaman detail produk: galeri, jumlah, keranjang, RFQ, terkait.
   ========================================================= */

function initProduct() {
  const root = document.getElementById('productDetail');
  if (!root) return;

  const slug = qs('slug');
  const product = KWU_DATA.products.find(p => p.slug === slug);

  if (!product) {
    root.innerHTML = `
      <div class="empty-state">
        <div class="empty-state__icon">${icon('package')}</div>
        <h3>Produk tidak ditemukan</h3>
        <p>Produk yang kamu cari tidak ada atau tautannya sudah berubah. Kembali ke katalog untuk melihat produk lain.</p>
        <a class="btn btn--primary" href="katalog.html">Kembali ke Katalog</a>
      </div>`;
    return;
  }

  document.title = `${product.name} | KWU Campus Business Hub`;
  const stock = stockInfo(product.stock);
  const discount = product.comparePrice ? Math.round((1 - product.price / product.comparePrice) * 100) : 0;
  const gallery = (product.gallery && product.gallery.length) ? product.gallery : [product.image];

  root.innerHTML = `
    <div class="product-detail">
      <div class="gallery">
        <div class="gallery__main"><img id="galleryMain" src="${gallery[0]}" alt="${product.name}" width="600" height="600"></div>
        <div class="gallery__thumbs">
          ${gallery.map((g, i) => `
            <button class="gallery__thumb ${i === 0 ? 'is-active' : ''}" data-img="${g}" aria-label="Lihat gambar ${i + 1}">
              <img src="${g}" alt="${product.name} gambar ${i + 1}" loading="lazy" width="160" height="160">
            </button>`).join('')}
        </div>
        <div class="notice notice--orange" style="margin-top:18px">
          ${icon('info')}
          <div>Foto dan spesifikasi produk pada halaman ini disusun sebagai contoh tampilan.</div>
        </div>
      </div>

      <div class="pd-info">
        <div class="row" style="gap:8px;flex-wrap:wrap">
          <span class="product-card__cat">${product.brand || categoryName(product.category)}</span>
          <span class="badge badge--neutral badge--plain">${categoryName(product.category)}</span>
        </div>
        <h1 class="pd-title">${product.name}</h1>

        <div class="row" style="gap:10px;flex-wrap:wrap">
          <span class="rating">${icon('star')}${icon('star')}${icon('star')}${icon('star')}${icon('star')}</span>
          <span class="small muted">${product.rating.toFixed(1)} dari ${product.reviews} ulasan contoh</span>
          ${product.isGrosir ? '<span class="badge badge--green">Bisa grosir</span>' : ''}
          ${product.isNew ? '<span class="badge badge--orange">Produk baru</span>' : ''}
        </div>

        <div class="pd-price">
          <b>${KWU.rupiah(product.price)}</b>
          ${product.comparePrice ? `<s>${KWU.rupiah(product.comparePrice)}</s><span class="badge badge--success">Hemat ${discount}%</span>` : ''}
        </div>
        <p class="pd-note">Harga per ${product.unit}. ${product.minOrder > 1 ? `Minimum pembelian grosir ${product.minOrder} ${product.unit}.` : 'Minimum pembelian 1 ' + product.unit + '.'}</p>

        <div class="pd-block">
          <h4>Jumlah</h4>
          <div class="row" style="gap:18px;flex-wrap:wrap">
            <div class="qty">
              <button type="button" data-qty-minus aria-label="Kurangi jumlah">${icon('minus')}</button>
              <input id="qtyInput" type="number" value="1" min="1" max="${Math.max(product.stock, 1)}" aria-label="Jumlah produk">
              <button type="button" data-qty-plus aria-label="Tambah jumlah">${icon('plus')}</button>
            </div>
            <span class="stock-line ${stock.cls}">${stock.label}</span>
          </div>
        </div>

        <div class="pd-actions">
          <button class="btn btn--primary" data-add-detail="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>
            ${icon('cart')} Tambah ke Keranjang
          </button>
          <a class="btn btn--blue" href="kolaborasi-grosir.html?produk=${encodeURIComponent(product.name)}">
            ${icon('file')} Ajukan Grosir
          </a>
        </div>
        <div class="row" style="gap:10px;flex-wrap:wrap">
          <button class="btn btn--ghost btn--sm" data-wish-detail="${product.id}">${icon('heart')} Simpan ke Wishlist</button>
          <button class="btn btn--ghost btn--sm" data-share>${icon('send')} Bagikan</button>
        </div>

        <div class="pd-mini" style="margin-top:18px">
          <span>${icon('shield')} Transaksi aman (simulasi)</span>
          <span>${icon('tag')} Harga grosir tersedia</span>
          <span>${icon('file')} Nomor pesanan tercatat</span>
        </div>

        <div class="pd-block" style="margin-top:8px">
          <div class="tabs" data-tabs="pd">
            <button class="tab is-active" data-tab="desc">Deskripsi</button>
            <button class="tab" data-tab="spec">Spesifikasi</button>
            <button class="tab" data-tab="ship">Pengambilan</button>
          </div>
          <div data-tab-panel="pd">
            <div class="tab-panel" data-tab-panel-id="desc" style="padding-top:18px">
              <p class="muted" style="line-height:1.8">${product.desc}</p>
            </div>
            <div class="tab-panel hide" data-tab-panel-id="spec" style="padding-top:18px">
              <div class="pd-spec">
                ${Object.entries(product.specs).map(([k, v]) => `<div><span>${k}</span><span>${v}</span></div>`).join('')}
              </div>
            </div>
            <div class="tab-panel hide" data-tab-panel-id="ship" style="padding-top:18px">
              <p class="muted" style="line-height:1.8">Produk diambil atau dikirim sesuai jadwal yang disepakati dengan admin KWU. Ketentuan resmi berlaku setelah dikonfirmasi KWU Administrasi Niaga.</p>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  /* Galeri */
  const mainImg = document.getElementById('galleryMain');
  root.querySelectorAll('.gallery__thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      root.querySelectorAll('.gallery__thumb').forEach(t => t.classList.remove('is-active'));
      thumb.classList.add('is-active');
      mainImg.style.opacity = '0';
      setTimeout(() => {
        mainImg.src = thumb.dataset.img;
        mainImg.style.opacity = '1';
      }, 180);
    });
  });

  /* Jumlah */
  const qtyInput = document.getElementById('qtyInput');
  const maxQty = Math.max(product.stock, 1);
  root.querySelector('[data-qty-minus]').addEventListener('click', () => {
    qtyInput.value = Math.max(1, (Number(qtyInput.value) || 1) - 1);
  });
  root.querySelector('[data-qty-plus]').addEventListener('click', () => {
    const next = (Number(qtyInput.value) || 1) + 1;
    if (next > maxQty) {
      toast(`Stok tersisa ${product.stock} ${product.unit}.`, 'warning');
      return;
    }
    qtyInput.value = next;
  });

  /* Tambah ke keranjang */
  root.querySelector('[data-add-detail]')?.addEventListener('click', (e) => {
    const btn = e.currentTarget;
    const qty = Math.max(1, Number(qtyInput.value) || 1);
    const result = KWU.addToCart(product.id, qty);
    if (result.ok) {
      toast(result.message, 'success', 'Masuk keranjang');
      btn.classList.add('is-loading');
      setTimeout(() => btn.classList.remove('is-loading'), 700);
    } else {
      toast(result.message, 'error', 'Tidak bisa ditambahkan');
    }
  });

  /* Wishlist */
  const wishBtn = root.querySelector('[data-wish-detail]');
  const syncWish = () => {
    const active = KWU.isWishlisted(product.id);
    wishBtn.innerHTML = `${icon(active ? 'heartFill' : 'heart')} ${active ? 'Tersimpan' : 'Simpan ke Wishlist'}`;
    wishBtn.classList.toggle('is-active', active);
  };
  syncWish();
  wishBtn.addEventListener('click', () => {
    KWU.toggleWishlist(product.id);
    syncWish();
    toast(KWU.isWishlisted(product.id) ? 'Produk disimpan ke wishlist.' : 'Produk dihapus dari wishlist.', 'info');
  });

  /* Bagikan */
  root.querySelector('[data-share]')?.addEventListener('click', async () => {
    const url = location.href;
    if (navigator.share) {
      try { await navigator.share({ title: product.name, url }); } catch (e) { /* dibatalkan */ }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        toast('Tautan produk disalin ke papan klip.', 'success');
      } catch (e) {
        toast('Salin tautan secara manual dari bilah alamat.', 'info');
      }
    }
  });

  initTabs();
  initReviews(product.id);

  /* Panel aksi khusus layar kecil */
  const bar = document.createElement('div');
  bar.className = 'product-bar';
  bar.innerHTML = `
    <div class="product-bar__info">
      <span>Total</span>
      <b>${KWU.rupiah(product.price)}</b>
    </div>
    <button class="btn btn--primary" data-bar-add ${product.stock === 0 ? 'disabled' : ''}>
      ${icon('cart')} Tambah
    </button>`;
  document.body.appendChild(bar);
  document.body.classList.add('has-product-bar');

  bar.querySelector('[data-bar-add]')?.addEventListener('click', () => {
    const qty = Math.max(1, Number(document.getElementById('qtyInput')?.value) || 1);
    const result = KWU.addToCart(product.id, qty);
    if (result.ok) {
      toast(result.message, 'success', 'Masuk keranjang');
      bar.querySelector('[data-bar-add]').classList.add('is-loading');
      setTimeout(() => bar.querySelector('[data-bar-add]').classList.remove('is-loading'), 700);
    } else {
      toast(result.message, 'error', 'Tidak bisa ditambahkan');
    }
  });

  /* Produk terkait */
  const related = document.getElementById('relatedProducts');
  if (related) {
    const list = KWU_DATA.products
      .filter(p => p.id !== product.id && (p.category === product.category || p.isGrosir))
      .slice(0, 4);
    renderProductGrid(related, list, { emptyTitle: 'Belum ada produk terkait' });
  }

  /* Produk terbaru */
  const latest = document.getElementById('latestProducts');
  if (latest) {
    const list = [...KWU_DATA.products].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)).slice(0, 4);
    renderProductGrid(latest, list, { emptyTitle: 'Belum ada produk terbaru' });
  }
}

document.addEventListener('DOMContentLoaded', initProduct);
