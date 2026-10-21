/* =========================================================
   KWU Campus Business Hub — account.js
   Halaman akun (profil, transaksi, pengajuan, wishlist, pengaturan)
   dan halaman riwayat transaksi.
   ========================================================= */

function initAccount() {
  const root = document.getElementById('accountPanel');
  if (!root) return;

  const user = KWU.currentUser();
  if (!user) {
    root.innerHTML = `
      <div class="empty-state">
        <div class="empty-state__icon">${icon('user')}</div>
        <h3>Masuk dulu untuk melihat akunmu</h3>
        <p>Halaman ini menampilkan data transaksi, pengajuan, dan wishlist. Data disimpan di peramban kamu.</p>
        <a class="btn btn--primary" href="login.html?next=akun.html">Masuk ke Akun</a>
      </div>`;
    return;
  }

  const sections = {
    profil: () => profileSection(user),
    transaksi: () => ordersSection(),
    pengajuan: () => requestsSection(),
    wishlist: () => wishlistSection(),
    pengaturan: () => settingsSection(user)
  };

  const titles = {
    profil: 'Profil saya',
    transaksi: 'Riwayat transaksi',
    pengajuan: 'Status pengajuan kerja sama',
    wishlist: 'Wishlist produk',
    pengaturan: 'Pengaturan akun'
  };

  function render(key) {
    const section = sections[key] ? key : 'profil';
    root.innerHTML = `
      <div class="row-between" style="margin-bottom:20px">
        <div>
          <h2 class="h3" style="margin-bottom:2px">${titles[section]}</h2>
          <p class="small muted">Data contoh yang tersimpan di peramban kamu.</p>
        </div>
      </div>
      <div id="accountContent">${sections[section]()}</div>`;
    document.querySelectorAll('[data-account-nav]').forEach(link => {
      link.classList.toggle('is-active', link.dataset.accountNav === section);
    });
    bindSection(section);
    initReveal();
  }

  function bindSection(section) {
    if (section === 'profil') {
      const form = document.getElementById('profileForm');
      form?.addEventListener('submit', (e) => {
        e.preventDefault();
        KWU.updateProfile({
          name: form.name.value.trim(),
          email: form.email.value.trim(),
          phone: form.phone.value.trim(),
          org: form.org.value.trim()
        });
        toast('Perubahan profil disimpan di peramban.', 'success', 'Tersimpan');
        render('profil');
      });
    }
    if (section === 'transaksi') {
      document.querySelectorAll('[data-order-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('[data-order-filter]').forEach(b => b.classList.toggle('is-active', b === btn));
          const value = btn.dataset.orderFilter;
          document.querySelectorAll('[data-order-row]').forEach(row => {
            row.classList.toggle('hide', value !== 'semua' && row.dataset.orderStatus !== value);
          });
        });
      });
    }
    if (section === 'wishlist') {
      bindProductActions(root);
    }
    if (section === 'pengaturan') {
      document.getElementById('logoutBtn')?.addEventListener('click', async () => {
        const ok = await confirmDialog({
          title: 'Keluar dari akun?',
          message: 'Data akun contoh pada peramban ini akan dihapus.',
          confirmText: 'Keluar',
          tone: 'danger'
        });
        if (!ok) return;
        KWU.logout();
        toast('Kamu sudah keluar dari akun contoh.', 'info');
        setTimeout(() => { location.href = 'index.html'; }, 700);
      });
      document.getElementById('clearLocalBtn')?.addEventListener('click', async () => {
        const ok = await confirmDialog({
          title: 'Hapus data lokal?',
          message: 'Keranjang, wishlist, transaksi, dan pengajuan contoh akan dihapus dari peramban.',
          confirmText: 'Hapus semua',
          tone: 'danger'
        });
        if (!ok) return;
        ['kwu_cart_v1', 'kwu_wishlist_v1', 'kwu_orders_v1', 'kwu_requests_v1'].forEach(k => localStorage.removeItem(k));
        toast('Data lokal dihapus.', 'success');
        setTimeout(() => { location.reload(); }, 700);
      });
    }
  }

  /* ---------- Bagian-bagian ---------- */
  function profileSection(u) {
    const initials = (u.name || 'K').split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
    return `
      <div class="card card--pad" style="margin-bottom:22px">
        <div class="row" style="gap:16px">
          <div class="avatar avatar--lg avatar--orange">${initials}</div>
          <div>
            <h3 style="font-size:1.2rem">${u.name}</h3>
            <p class="small muted">${u.email}</p>
            <p class="xs muted">Bergabung sejak ${KWU.formatDate(u.joinedAt)}</p>
          </div>
        </div>
      </div>

      <div class="card card--pad">
        <h3 style="font-size:1.05rem;margin-bottom:6px">Data akun</h3>
        <p class="small muted" style="margin-bottom:20px">Perbarui kontak agar admin KWU mudah menghubungi kamu.</p>
        <form id="profileForm">
          <div class="form-grid">
            <div class="field">
              <label class="field__label" for="pName">Nama lengkap <span class="req">*</span></label>
              <input class="input" id="pName" name="name" value="${u.name}" required>
              <div class="field__error">${icon('alert')}<span></span></div>
            </div>
            <div class="field">
              <label class="field__label" for="pEmail">Email <span class="req">*</span></label>
              <input class="input" id="pEmail" name="email" type="email" value="${u.email}" required>
              <div class="field__error">${icon('alert')}<span></span></div>
            </div>
            <div class="field">
              <label class="field__label" for="pPhone">Nomor telepon</label>
              <input class="input" id="pPhone" name="phone" value="${u.phone || ''}" placeholder="08xx xxxx xxxx">
              <div class="field__hint">Dipakai admin KWU untuk konfirmasi pesanan.</div>
            </div>
            <div class="field">
              <label class="field__label" for="pOrg">Organisasi / UKM</label>
              <input class="input" id="pOrg" name="org" value="${u.org || ''}" placeholder="Contoh: UKM Kewirausahaan">
              <div class="field__error">${icon('alert')}<span></span></div>
            </div>
          </div>
          <button class="btn btn--primary" type="submit">Simpan Perubahan</button>
        </form>
      </div>`;
  }

  function ordersSection() {
    const orders = KWU.getOrders();
    if (!orders.length) return emptyStateHTML('Belum ada transaksi', 'Transaksi contohmu akan tampil di sini setelah checkout.');
    return `
      <div class="row-wrap" style="margin-bottom:18px">
        <button class="chip is-active" data-order-filter="semua">Semua</button>
        ${KWU_DATA.orderStatus.map(s => `<button class="chip" data-order-filter="${s.id}">${s.label}</button>`).join('')}
      </div>
      <div class="table-wrap">
        <table class="table">
          <thead><tr><th>Nomor</th><th>Tanggal</th><th>Item</th><th>Total</th><th>Status</th><th></th></tr></thead>
          <tbody>
            ${orders.map(o => `
              <tr data-order-row data-order-status="${o.status}">
                <td class="strong">${o.id}</td>
                <td>${KWU.formatDate(o.createdAt)}</td>
                <td>${o.items.length} produk</td>
                <td class="strong">${KWU.rupiah(o.total)}</td>
                <td>${orderStatusBadge(o.status)}</td>
                <td><a class="link-underline" href="transaksi.html?id=${o.id}">Detail</a></td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>`;
  }

  function requestsSection() {
    const requests = KWU.getRequests();
    if (!requests.length) {
      return emptyStateHTML('Belum ada pengajuan', 'Belum ada pengajuan kerja sama. Mulai dari halaman Kolaborasi.',
        '<a class="btn btn--primary" href="kolaborasi.html">Buka Halaman Kolaborasi</a>');
    }
    return `
      <div class="stack" style="--stack-gap:14px">
        ${requests.map(r => `
          <div class="card card--pad">
            <div class="row-between" style="margin-bottom:12px">
              <div>
                <span class="code-pill" style="font-size:.82rem;padding:8px 14px">${icon('file')} ${r.id}</span>
                <h3 style="font-size:1.05rem;margin-top:10px">${r.typeLabel}</h3>
              </div>
              ${requestStatusBadge(r.status)}
            </div>
            <div class="pd-spec">
              ${Object.entries(r.data).map(([k, v]) => `<div><span>${k}</span><span>${v || '-'}</span></div>`).join('')}
            </div>
            <div class="small muted" style="margin-top:12px">Diajukan pada ${KWU.formatDate(r.createdAt, true)} · status simulasi</div>
          </div>`).join('')}
      </div>`;
  }

  function wishlistSection() {
    const list = KWU.wishlistDetail();
    if (!list.length) {
      return emptyStateHTML('Wishlist masih kosong', 'Tekan ikon hati pada produk untuk menyimpannya di sini.',
        '<a class="btn btn--primary" href="katalog.html">Jelajahi Katalog</a>');
    }
    return `<div class="grid grid-auto-lg" id="accountWishlist">${list.map((p, i) => productCardHTML(p, i + 1)).join('')}</div>`;
  }

  function settingsSection(u) {
    return `
      <div class="stack" style="--stack-gap:18px">
        <div class="card card--pad">
          <h3 style="font-size:1.05rem;margin-bottom:6px">Preferensi notifikasi</h3>
          <p class="small muted" style="margin-bottom:18px">Pengaturan contoh untuk tampilan antarmuka.</p>
          <label class="checkbox" style="margin-bottom:12px">
            <input type="checkbox" checked> <span>Kirim pembaruan status pesanan ke email</span>
          </label>
          <label class="checkbox" style="margin-bottom:12px">
            <input type="checkbox" checked> <span>Kabari saat ada produk baru dari kategori favorit</span>
          </label>
          <label class="checkbox">
            <input type="checkbox"> <span>Kabari_event dan program kolaborasi KWU</span>
          </label>
        </div>

        <div class="card card--pad">
          <h3 style="font-size:1.05rem;margin-bottom:6px">Data lokal</h3>
          <p class="small muted" style="margin-bottom:18px">Frontend ini belum memakai server. Semua data contoh tersimpan di peramban ini.</p>
          <div class="row-wrap">
            <button class="btn btn--ghost" id="clearLocalBtn">Hapus Data Lokal</button>
            <button class="btn btn--navy" id="logoutBtn">${icon('logout')} Keluar dari Akun</button>
          </div>
        </div>

        <div class="notice">${icon('shield')}<div>Akun ini adalah simulasi frontend. Tidak ada data pribadi yang dikirim ke server mana pun.</div></div>
      </div>`;
  }

  /* Navigasi */
  document.querySelectorAll('[data-account-nav]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const key = link.dataset.accountNav;
      history.replaceState(null, '', key === 'profil' ? 'akun.html' : 'akun.html#' + key);
      render(key);
    });
  });

  /* Header sidebar */
  document.querySelectorAll('[data-account-name]').forEach(el => el.textContent = user.name);
  document.querySelectorAll('[data-account-email]').forEach(el => el.textContent = user.email);
  const avatar = document.getElementById('accountAvatar');
  if (avatar) {
    avatar.textContent = (user.name || 'K').split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  }

  const initialHash = (location.hash || '').replace('#', '');
  render(sections[initialHash] ? initialHash : 'profil');
}

/* ---------------- Riwayat transaksi (halaman terpisah) ---------------- */
function initOrderHistory() {
  const root = document.getElementById('orderHistory');
  if (!root) return;

  function render(filter = 'semua') {
    const orders = KWU.getOrders();
    if (!orders.length) {
      root.innerHTML = emptyStateHTML('Belum ada transaksi', 'Belum ada pesanan contoh pada peramban ini.',
        '<a class="btn btn--primary" href="katalog.html">Mulai Belanja</a>');
      return;
    }
    const list = filter === 'semua' ? orders : orders.filter(o => o.status === filter);
    root.innerHTML = list.length ? list.map(o => `
      <div class="card card--pad reveal">
        <div class="row-between" style="margin-bottom:14px">
          <div class="row" style="gap:12px">
            <div class="avatar avatar--orange" style="width:42px;height:42px">${icon('package')}</div>
            <div>
              <div class="strong">${o.id}</div>
              <div class="xs muted">${KWU.formatDate(o.createdAt, true)}</div>
            </div>
          </div>
          ${orderStatusBadge(o.status)}
        </div>
        <div class="row-wrap" style="gap:10px;margin-bottom:14px">
          ${o.items.map(i => `
            <div class="row" style="gap:8px;background:var(--bg);border-radius:12px;padding:8px 12px">
              <img src="${i.image}" alt="${i.name}" width="36" height="36" style="border-radius:8px;object-fit:cover">
              <div>
                <div class="xs strong">${i.name}</div>
                <div class="xs muted">${i.qty} x ${KWU.rupiah(i.price)}</div>
              </div>
            </div>`).join('')}
        </div>
        <div class="row-between">
          <div>
            <div class="xs muted">Total (${o.paymentLabel})</div>
            <div class="strong">${KWU.rupiah(o.total)}</div>
          </div>
          <a class="btn btn--ghost btn--sm" href="transaksi.html?id=${o.id}">Lihat Detail</a>
        </div>
      </div>`).join('')
      : emptyStateHTML('Tidak ada transaksi pada status ini', 'Coba pilih status lain untuk melihat transaksi contoh.');
    initReveal();
  }

  document.querySelectorAll('[data-history-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-history-filter]').forEach(b => b.classList.toggle('is-active', b === btn));
      render(btn.dataset.historyFilter);
    });
  });

  render();
}

document.addEventListener('DOMContentLoaded', () => {
  initAccount();
  initOrderHistory();
});
