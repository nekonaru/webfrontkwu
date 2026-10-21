/* =========================================================
   KWU Campus Business Hub - checkout.js
   Halaman checkout (form + ringkasan) dan konfirmasi transaksi.
   ========================================================= */

function initCheckout() {
  const form = document.getElementById('checkoutForm');
  if (!form) return;

  const itemsWrap = document.getElementById('checkoutItems');
  const subtotalEl = document.getElementById('coSubtotal');
  const totalEl = document.getElementById('coTotal');
  const itemCountEl = document.getElementById('coCount');
  const paymentBox = document.getElementById('paymentOptions');
  const submitBtn = document.getElementById('placeOrder');

  /* Ringkasan */
  function renderSummary() {
    const items = KWU.cartDetail();
    const total = KWU.cartTotal();
    if (itemCountEl) itemCountEl.textContent = `${KWU.cartCount()} item`;
    if (subtotalEl) subtotalEl.textContent = KWU.rupiah(total);
    if (totalEl) totalEl.textContent = KWU.rupiah(total);
    if (itemsWrap) {
      itemsWrap.innerHTML = items.length ? items.map(i => `
        <div class="row-between" style="padding:8px 0;border-bottom:1px dashed var(--line)">
          <div class="row" style="gap:10px">
            <img src="${i.image}" alt="${i.name}" width="44" height="44" style="border-radius:8px;object-fit:cover">
            <div>
              <div class="small strong">${i.name}</div>
              <div class="xs muted">${i.qty} x ${KWU.rupiah(i.price)}</div>
            </div>
          </div>
          <div class="small strong nowrap">${KWU.rupiah(i.subtotal)}</div>
        </div>`).join('')
        : '<p class="muted small">Keranjang kosong. <a href="katalog.html" class="link-underline">Tambah produk dulu</a>.</p>';
    }
    return { items, total };
  }

  /* Metode pembayaran */
  if (paymentBox) {
    paymentBox.innerHTML = KWU_DATA.payments.map((p, i) => `
      <label class="pay-option">
        <input type="radio" name="payment" value="${p.id}" ${i === 0 ? 'checked' : ''}>
        <span class="pay-option__icon">${icon(p.icon)}</span>
        <span>
          <span class="choice-card__title">${p.name}</span>
          <span class="choice-card__desc">${p.desc}</span>
        </span>
      </label>`).join('');
  }

  /* Prefill dari akun */
  const user = KWU.currentUser();
  if (user) {
    const set = (id, val) => { const el = document.getElementById(id); if (el && !el.value) el.value = val; };
    set('buyerName', user.name);
    set('buyerEmail', user.email);
    set('buyerPhone', user.phone);
  }

  /* Validasi inline */
  const rules = {
    buyerName: (v) => v.trim().length >= 3 || 'Nama minimal 3 huruf.',
    buyerEmail: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Format email belum benar.',
    buyerPhone: (v) => /^[\d\s+()-]{9,}$/.test(v.trim()) || 'Nomor telepon belum valid.',
    buyerAddress: (v) => v.trim().length >= 10 || 'Alamat minimal 10 karakter.'
  };

  function validateField(el) {
    const rule = rules[el.id];
    if (!rule) return true;
    const result = rule(el.value);
    const field = el.closest('.field');
    const errorEl = field?.querySelector('.field__error span');
    if (result === true) {
      field?.classList.remove('has-error');
      return true;
    }
    if (errorEl) errorEl.textContent = result;
    field?.classList.add('has-error');
    return false;
  }

  Object.keys(rules).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('blur', () => validateField(el));
    el.addEventListener('input', () => {
      const field = el.closest('.field');
      if (field?.classList.contains('has-error')) validateField(el);
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { items, total } = renderSummary();

    if (!items.length) {
      toast('Keranjang masih kosong.', 'warning');
      return;
    }
    if (!KWU.currentUser()) {
      toast('Masuk dulu untuk menyelesaikan transaksi.', 'info', 'Login diperlukan');
      setTimeout(() => { location.href = 'login.html?next=checkout.html'; }, 900);
      return;
    }

    let valid = true;
    Object.keys(rules).forEach(id => {
      const el = document.getElementById(id);
      if (el && !validateField(el)) valid = false;
    });
    if (!valid) {
      toast('Periksa kembali data yang ditandai.', 'error', 'Formulir belum lengkap');
      form.querySelector('.has-error')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const payment = form.querySelector('input[name="payment"]:checked');
    const paymentMeta = KWU_DATA.payments.find(p => p.id === payment?.value);

    submitBtn.classList.add('is-loading');
    await new Promise(r => setTimeout(r, 900));

    const order = KWU.createOrder({
      items: items.map(i => ({ id: i.id, name: i.name, price: i.price, qty: i.qty, unit: i.unit, image: i.image })),
      subtotal: total,
      shipping: 0,
      total,
      payment: payment?.value || 'qris',
      paymentLabel: paymentMeta?.name || 'QRIS',
      buyer: {
        name: document.getElementById('buyerName').value.trim(),
        email: document.getElementById('buyerEmail').value.trim(),
        phone: document.getElementById('buyerPhone').value.trim(),
        address: document.getElementById('buyerAddress').value.trim(),
        note: document.getElementById('buyerNote')?.value.trim() || ''
      }
    });

    KWU.clearCart();
    toast('Pesanan contoh berhasil dibuat.', 'success', 'Simulasi selesai');
    setTimeout(() => { location.href = 'transaksi.html?id=' + order.id; }, 700);
  });

  renderSummary();
}

/* ---------------- Konfirmasi transaksi ---------------- */
function initTransaction() {
  const root = document.getElementById('transactionDetail');
  if (!root) return;

  const id = qs('id');
  const order = id ? KWU.getOrder(id) : null;

  if (!order) {
    root.innerHTML = `
      <div class="empty-state">
        <div class="empty-state__icon">${icon('file')}</div>
        <h1 class="h2" style="margin-bottom:10px">Transaksi tidak ditemukan</h1>
        <p>Nomor transaksi tidak ditemukan pada perangkat ini. Data transaksi pada versi ini hanya tersimpan di peramban Anda.</p>
        <a class="btn btn--primary" href="akun-transaksi.html">Lihat Riwayat Transaksi</a>
      </div>`;
    return;
  }

  const steps = [
    { id: 'menunggu_konfirmasi', title: 'Pesanan dibuat', desc: 'Pesanan contoh diterima sistem simulasi.' },
    { id: 'menunggu_pembayaran', title: 'Menunggu pembayaran', desc: 'Silakan selesaikan pembayaran sesuai metode yang dipilih.' },
    { id: 'diproses', title: 'Diproses admin', desc: 'Admin KWU menyiapkan produk dan mengatur jadwal pengambilan.' },
    { id: 'selesai', title: 'Selesai', desc: 'Produk telah diterima. Terima kasih sudah mendukung usaha kampus.' }
  ];
  const currentIndex = steps.findIndex(s => s.id === order.status);
  const cancelled = order.status === 'dibatalkan';

  root.innerHTML = `
    <div class="success-hero">
      <div class="success-mark">${icon('checkCircle')}</div>
      <h1 class="h2" style="margin-bottom:10px">Pesanan dicatat (simulasi)</h1>
      <p class="muted" style="max-width:560px;margin:0 auto 20px">
        Nomor transaksi <b>${order.id}</b> dibuat pada ${KWU.formatDate(order.createdAt, true)}.
        Frontend ini belum terhubung ke sistem pembayaran resmi KWU.
      </p>
      <div class="row" style="justify-content:center;gap:12px;flex-wrap:wrap">
        <span class="code-pill">${icon('tag')} ${order.id}</span>
        ${orderStatusBadge(order.status)}
      </div>
    </div>

    <div class="grid grid-2" style="margin-top:40px;align-items:start">
      <div class="panel">
        <h3 style="margin-bottom:18px">Status pesanan</h3>
        ${cancelled ? `
          <div class="notice notice--warning">${icon('alert')}<div>Pesanan ini dibatalkan. Hubungi admin KWU bila perlu bantuan.</div></div>
        ` : `
          <div class="timeline">
            ${steps.map((s, i) => `
              <div class="timeline__item ${i < currentIndex ? 'is-done' : i === currentIndex ? 'is-current' : ''}">
                <span class="timeline__dot">${i < currentIndex ? icon('check') : ''}</span>
                <div class="timeline__title">${s.title}</div>
                <div class="timeline__meta">${s.desc}</div>
              </div>`).join('')}
          </div>
        `}
      </div>

      <div class="panel">
        <h3 style="margin-bottom:16px">Ringkasan pesanan</h3>
        ${order.items.map(i => `
          <div class="row-between" style="padding:10px 0;border-bottom:1px dashed var(--line)">
            <div class="row" style="gap:12px">
              <img src="${i.image}" alt="${i.name}" width="46" height="46" style="border-radius:10px;object-fit:cover">
              <div>
                <div class="strong small">${i.name}</div>
                <div class="xs muted">${i.qty} x ${KWU.rupiah(i.price)}</div>
              </div>
            </div>
            <div class="small strong nowrap">${KWU.rupiah(i.price * i.qty)}</div>
          </div>`).join('')}
        <div class="summary-row" style="margin-top:14px"><span>Subtotal</span><strong>${KWU.rupiah(order.subtotal)}</strong></div>
        <div class="summary-row"><span>Biaya tambahan</span><strong>Rp 0</strong></div>
        <div class="summary-row is-total"><span>Total</span><strong>${KWU.rupiah(order.total)}</strong></div>
        <div class="notice notice--orange" style="margin-top:16px">
          ${icon('info')}
          <div>Metode pembayaran <strong>${order.paymentLabel}</strong>. Tanpa biaya tersembunyi; total di atas adalah jumlah akhir.</div>
        </div>
      </div>

      <div class="panel">
        <h3 style="margin-bottom:14px">Data pembeli</h3>
        <div class="pd-spec">
          <div><span>Nama</span><span>${order.buyer.name}</span></div>
          <div><span>Email</span><span>${order.buyer.email}</span></div>
          <div><span>Telepon</span><span>${order.buyer.phone || '-'}</span></div>
          <div><span>Alamat</span><span>${order.buyer.address}</span></div>
          ${order.buyer.note ? `<div><span>Catatan</span><span>${order.buyer.note}</span></div>` : ''}
        </div>
      </div>

      <div class="panel">
        <h3 style="margin-bottom:14px">Langkah berikutnya</h3>
        <ul class="stack" style="--stack-gap:10px">
          <li class="row" style="gap:10px;align-items:flex-start">${icon('checkCircle')}<span class="small">Simpan nomor transaksi <b>${order.id}</b> untuk pelacakan.</span></li>
          <li class="row" style="gap:10px;align-items:flex-start">${icon('bell')}<span class="small">Pantau status pesanan di <a class="link-underline" href="akun-transaksi.html">Riwayat Transaksi</a>.</span></li>
          <li class="row" style="gap:10px;align-items:flex-start">${icon('help')}<span class="small">Butuh bantuan? Buka <a class="link-underline" href="bantuan.html">Pusat Bantuan</a>.</span></li>
        </ul>
        <div class="row-wrap" style="margin-top:20px">
          <button class="btn btn--ghost btn--sm" id="printOrder">${icon('print')} Cetak</button>
          <a class="btn btn--primary btn--sm" href="katalog.html">Lanjut Belanja</a>
        </div>
      </div>
    </div>`;

  document.getElementById('printOrder')?.addEventListener('click', () => window.print());
}

document.addEventListener('DOMContentLoaded', () => {
  initCheckout();
  initTransaction();
});
