/* =========================================================
   KWU Campus Business Hub — catalog.js
   Halaman katalog: pencarian, filter, harga, stok, urutan, tampilan.
   ========================================================= */

function initCatalog() {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;

  const state = {
    q: qs('q') || '',
    category: qs('kategori') || 'semua',
    maxPrice: Number(qs('max')) || 300000,
    inStock: false,
    sort: qs('sort') || 'terbaru',
    view: 'grid'
  };

  const els = {
    search: document.getElementById('catalogSearch'),
    sort: document.getElementById('catalogSort'),
    count: document.getElementById('catalogCount'),
    price: document.getElementById('priceRange'),
    priceOut: document.getElementById('priceValue'),
    priceMin: document.getElementById('priceMin'),
    stock: document.getElementById('stockOnly'),
    panel: document.getElementById('filterPanel'),
    overlay: document.getElementById('filterOverlay'),
    reset: document.getElementById('filterReset')
  };

  const maxCatalogPrice = Math.ceil(Math.max(...KWU_DATA.products.map(p => p.price)) / 5000) * 5000;

  /* ---------- Filter kategori (dinamis) ---------- */
  const catList = document.getElementById('categoryFilter');
  if (catList) {
    catList.innerHTML = `
      <button class="${state.category === 'semua' ? 'is-active' : ''}" data-cat="semua">Semua produk <span>${KWU_DATA.products.length}</span></button>
      ${KWU_DATA.categories.map(c => {
        const count = KWU_DATA.products.filter(p => p.category === c.id).length;
        return `<button class="${state.category === c.id ? 'is-active' : ''}" data-cat="${c.id}">${c.name} <span>${count}</span></button>`;
      }).join('')}`;
    catList.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-cat]');
      if (!btn) return;
      state.category = btn.dataset.cat;
      catList.querySelectorAll('button').forEach(b => b.classList.toggle('is-active', b === btn));
      render();
      closeFilterPanel();
    });
  }

  /* ---------- Price range ---------- */
  if (els.price) {
    els.price.max = maxCatalogPrice;
    els.price.value = Math.min(state.maxPrice, maxCatalogPrice);
    state.maxPrice = Number(els.price.value);
    updateRangeFill();
    els.price.addEventListener('input', () => {
      state.maxPrice = Number(els.price.value);
      updateRangeFill();
      render();
    });
  }
  function updateRangeFill() {
    if (!els.price) return;
    const pct = (els.price.value / els.price.max) * 100;
    els.price.style.setProperty('--fill', pct + '%');
    if (els.priceOut) els.priceOut.textContent = KWU.rupiah(state.maxPrice);
  }

  /* ---------- Pencarian ---------- */
  if (els.search) {
    els.search.value = state.q;
    let timer;
    els.search.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        state.q = els.search.value.trim();
        render();
      }, 220);
    });
  }

  /* ---------- Stok ---------- */
  if (els.stock) {
    els.stock.addEventListener('change', () => {
      state.inStock = els.stock.checked;
      render();
    });
  }

  /* ---------- Urutan ---------- */
  if (els.sort) {
    els.sort.value = state.sort;
    els.sort.addEventListener('change', () => {
      state.sort = els.sort.value;
      render();
    });
  }

  /* ---------- Tampilan ---------- */
  document.querySelectorAll('[data-view]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.view = btn.dataset.view;
      document.querySelectorAll('[data-view]').forEach(b => b.classList.toggle('is-active', b === btn));
      grid.classList.toggle('is-list', state.view === 'list');
      render();
    });
  });
  if (state.view === 'list') grid.classList.add('is-list');

  /* ---------- Reset ---------- */
  if (els.reset) {
    els.reset.addEventListener('click', () => {
      state.q = ''; state.category = 'semua'; state.inStock = false;
      state.maxPrice = maxCatalogPrice; state.sort = 'terbaru';
      if (els.search) els.search.value = '';
      if (els.stock) els.stock.checked = false;
      if (els.price) els.price.value = maxCatalogPrice;
      if (els.sort) els.sort.value = 'terbaru';
      catList?.querySelectorAll('button').forEach(b => b.classList.toggle('is-active', b.dataset.cat === 'semua'));
      updateRangeFill();
      render();
      toast('Filter sudah direset.', 'info');
    });
  }

  /* ---------- Panel filter mobile ---------- */
  const openFilterPanel = () => {
    els.panel?.classList.add('is-open');
    els.overlay?.classList.add('is-open');
    document.body.classList.add('is-locked');
  };
  const closeFilterPanel = () => {
    els.panel?.classList.remove('is-open');
    els.overlay?.classList.remove('is-open');
    document.body.classList.remove('is-locked');
  };
  document.querySelectorAll('[data-filter-open]').forEach(b => b.addEventListener('click', openFilterPanel));
  els.overlay?.addEventListener('click', closeFilterPanel);
  document.getElementById('filterClose')?.addEventListener('click', closeFilterPanel);
  document.getElementById('filterApply')?.addEventListener('click', closeFilterPanel);

  /* ---------- Render ---------- */
  function showSkeleton() {
    grid.innerHTML = Array.from({ length: 6 }).map(() => `
      <div class="sk-card">
        <div class="skeleton sk-card__media"></div>
        <div class="sk-card__body">
          <div class="skeleton sk-line" style="width:40%"></div>
          <div class="skeleton sk-line" style="width:80%;height:16px"></div>
          <div class="skeleton sk-line" style="width:55%"></div>
          <div class="skeleton sk-line" style="width:100%;height:34px;margin-top:14px;border-radius:999px"></div>
        </div>
      </div>`).join('');
  }

  function filtered() {
    let list = KWU_DATA.products.filter(p => {
      const q = state.q.toLowerCase();
      const matchQ = !q || p.name.toLowerCase().includes(q) || categoryName(p.category).toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
      const matchCat = state.category === 'semua' || p.category === state.category;
      const matchPrice = p.price <= state.maxPrice;
      const matchStock = !state.inStock || p.stock > 0;
      return matchQ && matchCat && matchPrice && matchStock;
    });

    switch (state.sort) {
      case 'termurah': list.sort((a, b) => a.price - b.price); break;
      case 'termahal': list.sort((a, b) => b.price - a.price); break;
      case 'populer': list.sort((a, b) => b.reviews - a.reviews); break;
      case 'rating': list.sort((a, b) => b.rating - a.rating); break;
      default: list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }
    return list;
  }

  function render() {
    const list = filtered();
    if (els.count) {
      els.count.textContent = `${list.length} produk ditemukan`;
    }
    grid.style.opacity = '0';
    grid.style.transform = 'translateY(10px)';
    setTimeout(() => {
      renderProductGrid(grid, list, {
        emptyTitle: 'Produk tidak ditemukan',
        emptyText: 'Coba kata kunci lain, longgarkan rentang harga, atau pilih kategori berbeda.',
        emptyAction: '<button class="btn btn--ghost" data-empty-reset>Reset filter</button>'
      });
      grid.style.transition = 'opacity .35s ease, transform .35s ease';
      grid.style.opacity = '1';
      grid.style.transform = 'none';
      grid.querySelector('[data-empty-reset]')?.addEventListener('click', () => els.reset?.click());
    }, 180);

    // Sinkronkan URL
    const params = new URLSearchParams();
    if (state.q) params.set('q', state.q);
    if (state.category !== 'semua') params.set('kategori', state.category);
    if (state.maxPrice < maxCatalogPrice) params.set('max', state.maxPrice);
    if (state.sort !== 'terbaru') params.set('sort', state.sort);
    const query = params.toString();
    history.replaceState(null, '', query ? '?' + query : location.pathname);
  }

  showSkeleton();
  render();
}

document.addEventListener('DOMContentLoaded', initCatalog);
