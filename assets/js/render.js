/* =========================================================
   KWU Campus Business Hub - render.js
   Pembantu render komponen yang dipakai di beberapa halaman.
   ========================================================= */

function categoryName(id) {
  const cat = KWU_DATA.categories.find(c => c.id === id);
  return cat ? cat.name : 'Produk';
}

function stockInfo(stock) {
  if (stock === 0) return { cls: 'stock--out', label: 'Stok habis' };
  if (stock <= 40) return { cls: 'stock--low', label: `Sisa ${stock}` };
  return { cls: 'stock--in', label: `Stok ${stock}` };
}

function tagLabel(tag) {
  const map = {
    'unggulan': { text: 'Unggulan', cls: 'tag--orange' },
    'baru': { text: 'Terbaru', cls: 'tag--blue' },
    'grosir': { text: 'Grosir', cls: 'tag--green' },
    'habis': { text: 'Habis', cls: '' }
  };
  return map[tag] || { text: tag, cls: '' };
}

function productCardHTML(product, delay = 1) {
  const stock = stockInfo(product.stock);
  const tags = (product.tags || []).map(t => {
    const meta = tagLabel(t);
    return `<span class="tag ${meta.cls}">${meta.text}</span>`;
  }).join('');
  const wished = KWU.isWishlisted(product.id);
  const discount = product.comparePrice
    ? Math.round((1 - product.price / product.comparePrice) * 100)
    : 0;

  return `
  <article class="product-card reveal" data-delay="${delay}">
    <div class="product-card__media">
      <a href="produk.html?slug=${product.slug}" aria-label="Lihat detail ${product.name}">
        <img src="${product.image}" alt="${product.name}" loading="lazy" width="400" height="300">
      </a>
      <div class="product-card__tags">
        ${tags}
        ${discount ? `<span class="tag" style="background:var(--success)">-${discount}%</span>` : ''}
      </div>
      <button class="product-card__wish ${wished ? 'is-active' : ''}" data-wish="${product.id}"
        aria-label="Simpan ${product.name} ke wishlist" title="Simpan ke wishlist">
        ${icon(wished ? 'heartFill' : 'heart')}
      </button>
    </div>
    <div class="product-card__body">
      <span class="product-card__cat">${product.brand || categoryName(product.category)}</span>
      <h3 class="product-card__name"><a href="produk.html?slug=${product.slug}">${product.name}</a></h3>
      <div class="row product-card__rating" style="gap:8px;font-size:.8rem;color:var(--muted)">
        <span class="rating">${icon('star')}</span>
        <span>${product.rating.toFixed(1)}</span>
        <span>(${product.reviews} ulasan)</span>
      </div>
      <div class="product-card__meta">
        <span class="product-card__price">
          ${product.comparePrice ? `<s>${KWU.rupiah(product.comparePrice)}</s>` : ''}
          ${KWU.rupiah(product.price)}
        </span>
        <span class="stock-line ${stock.cls}">${stock.label}</span>
      </div>
    </div>
    <div class="product-card__actions">
      ${product.stock > 0
        ? `<button class="btn btn--primary btn--sm" data-add="${product.id}">${icon('cart')}<span class="only-wide">Tambah ke Keranjang</span><span class="only-mobile">Tambah</span></button>`
        : `<button class="btn btn--ghost btn--sm" disabled>Stok Habis</button>`}
    </div>
  </article>`;
}

function renderProductGrid(container, list, opts = {}) {
  if (!container) return;
  if (!list.length) {
    container.innerHTML = emptyStateHTML(opts.emptyTitle, opts.emptyText, opts.emptyAction);
    return;
  }
  container.innerHTML = list.map((p, i) => productCardHTML(p, (i % 4) + 1)).join('');
  initReveal();
  bindProductActions(container);
}

function emptyStateHTML(title = 'Belum ada data', text = 'Coba ubah filter atau kata kunci pencarianmu.', action = '') {
  return `
    <div class="empty-state" style="grid-column:1/-1">
      <div class="empty-state__icon">${icon('package')}</div>
      <h3>${title}</h3>
      <p>${text}</p>
      ${action}
    </div>`;
}

function bindProductActions(scope = document) {
  scope.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', () => {
      const result = KWU.addToCart(btn.dataset.add, 1);
      if (result.ok) {
        toast(result.message, 'success', 'Masuk keranjang');
        btn.classList.add('is-loading');
        setTimeout(() => btn.classList.remove('is-loading'), 700);
      } else {
        toast(result.message, 'error', 'Tidak bisa ditambahkan');
      }
    });
  });

  scope.querySelectorAll('[data-wish]').forEach(btn => {
    btn.addEventListener('click', () => {
      const added = KWU.toggleWishlist(btn.dataset.wish);
      btn.classList.toggle('is-active', added);
      btn.innerHTML = icon(added ? 'heartFill' : 'heart');
      toast(added ? 'Produk disimpan ke wishlist.' : 'Produk dihapus dari wishlist.', 'info');
    });
  });
}

function statusBadge(statusId, list) {
  const found = list.find(s => s.id === statusId);
  if (!found) return `<span class="badge badge--neutral">${statusId}</span>`;
  const toneMap = { success: 'badge--success', warning: 'badge--warning', danger: 'badge--danger', info: 'badge--info', blue: 'badge--blue', neutral: 'badge--neutral' };
  const cls = toneMap[found.tone] || 'badge--neutral';
  return `<span class="badge ${cls}">${found.label}</span>`;
}

function orderStatusBadge(id) {
  return statusBadge(id, KWU_DATA.orderStatus);
}

function requestStatusBadge(id) {
  return statusBadge(id, KWU_DATA.requestStatus);
}
