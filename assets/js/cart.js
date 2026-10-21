/* =========================================================
   KWU Campus Business Hub - cart.js
   Halaman keranjang: ubah jumlah, hapus, simpan, ringkasan.
   ========================================================= */

function initCart() {
  const listEl = document.getElementById('cartList');
  if (!listEl) return;

  const countEl = document.getElementById('cartCountBadge');
  const subtotalEl = document.getElementById('cartSubtotal');
  const totalEl = document.getElementById('cartTotal');
  const checkoutBtn = document.getElementById('toCheckout');

  function render() {
    const items = KWU.cartDetail();
    const total = KWU.cartTotal();

    if (countEl) countEl.textContent = `${KWU.cartCount()} item`;
    if (subtotalEl) subtotalEl.textContent = KWU.rupiah(total);
    if (totalEl) totalEl.textContent = KWU.rupiah(total);
    if (checkoutBtn) checkoutBtn.classList.toggle('is-disabled', items.length === 0);

    if (!items.length) {
      listEl.innerHTML = `
        <div class="empty-state">
          <div class="empty-state__icon">${icon('cart')}</div>
          <h3>Keranjangmu masih kosong</h3>
          <p>Belum ada produk yang dipilih. Jelajahi katalog KWU dan temukan produk yang cocok untukmu.</p>
          <a class="btn btn--primary" href="katalog.html">Jelajahi Katalog</a>
        </div>`;
      return;
    }

    listEl.innerHTML = items.map(item => `
      <div class="cart-item" data-item="${item.id}">
        <a class="cart-item__media" href="produk.html?slug=${item.slug}">
          <img src="${item.image}" alt="${item.name}" loading="lazy" width="120" height="120">
        </a>
        <div>
          <a class="cart-item__name" href="produk.html?slug=${item.slug}">${item.name}</a>
          <div class="small muted" style="margin-top:4px">
            ${categoryName(item.category)} · ${KWU.rupiah(item.price)} / ${item.unit}
          </div>
          <div class="cart-item__controls">
            <div class="qty">
              <button type="button" data-minus aria-label="Kurangi jumlah">${icon('minus')}</button>
              <input type="number" value="${item.qty}" min="1" max="${item.stock}" data-qty aria-label="Jumlah ${item.name}">
              <button type="button" data-plus aria-label="Tambah jumlah">${icon('plus')}</button>
            </div>
            <button class="cart-item__remove" data-remove>${icon('trash')} Hapus</button>
            <button class="cart-item__remove" data-save>${icon('heart')} Simpan</button>
          </div>
        </div>
        <div class="cart-item__side">
          <div class="cart-item__price">${KWU.rupiah(item.subtotal)}</div>
          <div class="small muted">Stok ${item.stock}</div>
        </div>
      </div>`).join('');

    bindRows();
  }

  function bindRows() {
    listEl.querySelectorAll('[data-item]').forEach(row => {
      const id = row.dataset.item;
      const input = row.querySelector('[data-qty]');

      const setQty = (value) => {
        const result = KWU.updateQty(id, value);
        if (result.capped) toast('Jumlah disesuaikan dengan stok tersedia.', 'warning');
        render();
      };

      row.querySelector('[data-minus]').addEventListener('click', () => setQty((Number(input.value) || 1) - 1));
      row.querySelector('[data-plus]').addEventListener('click', () => setQty((Number(input.value) || 1) + 1));
      input.addEventListener('change', () => setQty(Number(input.value) || 1));

      row.querySelector('[data-remove]').addEventListener('click', async () => {
        const ok = await confirmDialog({
          title: 'Hapus dari keranjang?',
          message: 'Produk ini akan dikeluarkan dari keranjang.',
          confirmText: 'Hapus',
          tone: 'danger'
        });
        if (!ok) return;
        KWU.removeFromCart(id);
        render();
        toast('Produk dihapus dari keranjang.', 'info');
      });

      row.querySelector('[data-save]').addEventListener('click', () => {
        if (!KWU.isWishlisted(id)) KWU.toggleWishlist(id);
        KWU.removeFromCart(id);
        render();
        toast('Produk disimpan ke wishlist.', 'success');
      });
    });
  }

  checkoutBtn?.addEventListener('click', (e) => {
    if (!KWU.cartCount()) {
      e.preventDefault();
      toast('Keranjang masih kosong.', 'warning');
      return;
    }
    const user = KWU.currentUser();
    if (!user) {
      toast('Masuk dulu untuk melanjutkan transaksi.', 'info', 'Login diperlukan');
      setTimeout(() => { location.href = 'login.html?next=checkout.html'; }, 900);
    }
  });

  document.getElementById('clearCart')?.addEventListener('click', async () => {
    if (!KWU.cartCount()) return;
    const ok = await confirmDialog({
      title: 'Kosongkan keranjang?',
      message: 'Semua item akan dihapus dari keranjang.',
      confirmText: 'Kosongkan',
      tone: 'danger'
    });
    if (!ok) return;
    KWU.clearCart();
    render();
    toast('Keranjang dikosongkan.', 'info');
  });

  /* Produk tambahan */
  const addon = document.getElementById('cartAddons');
  if (addon) {
    const inCart = KWU.getCart().map(i => i.id);
    const list = KWU_DATA.products.filter(p => !inCart.includes(p.id) && p.stock > 0).slice(0, 4);
    renderProductGrid(addon, list, { emptyTitle: 'Semua produk sudah ada di keranjang' });
  }

  render();
}

document.addEventListener('DOMContentLoaded', initCart);
