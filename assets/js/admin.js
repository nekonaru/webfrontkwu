/* =========================================================
   KWU Campus Business Hub — admin.js
   Tampilan '/admin' dengan sistem desain yang sama, bekerja
   pada data contoh yang tersimpan di peramban.
   ========================================================= */

function initAdmin() {
  const root = document.getElementById('adminPanel');
  if (!root) return;

  const orders = KWU.getOrders();
  const requests = KWU.getRequests();
  const revenue = orders.filter(o => o.status !== 'dibatalkan').reduce((s, o) => s + o.total, 0);
  const pending = orders.filter(o => o.status === 'menunggu_konfirmasi' || o.status === 'menunggu_pembayaran').length;

  const kpis = [
    { label: 'Total pesanan (contoh)', value: orders.length, color: 'var(--blue)' },
    { label: 'Menunggu proses', value: pending, color: 'var(--orange)' },
    { label: 'Nilai transaksi (contoh)', value: KWU.rupiah(revenue), color: 'var(--success)' },
    { label: 'Pengajuan masuk', value: requests.length, color: 'var(--navy-700)' }
  ];

  root.innerHTML = `
    <div class="notice notice--orange" style="margin-bottom:22px">
      ${icon('info')}
      <div>Halaman <b>/admin</b> memakai sistem desain yang sama dengan situs publik, namun datanya masih <b>data contoh</b> dari peramban. Akses admin resmi belum tersedia di tahap frontend.</div>
    </div>

    <div class="grid grid-4" style="margin-bottom:26px">
      ${kpis.map(k => `
        <div class="admin-kpi">
          <span><i style="background:${k.color}"></i>${k.label}</span>
          <b style="margin-top:8px">${k.value}</b>
        </div>`).join('')}
    </div>

    <div class="grid grid-2" style="align-items:start">
      <div class="panel">
        <h3 style="font-size:1.05rem;margin-bottom:14px">Pesanan terbaru</h3>
        ${orders.length ? `
          <div class="table-wrap" style="border:none">
            <table class="table" style="min-width:420px">
              <thead><tr><th>Nomor</th><th>Tanggal</th><th>Total</th><th>Status</th></tr></thead>
              <tbody>
                ${orders.map(o => `
                  <tr>
                    <td class="strong">${o.id}</td>
                    <td>${KWU.formatDate(o.createdAt)}</td>
                    <td class="strong">${KWU.rupiah(o.total)}</td>
                    <td>${orderStatusBadge(o.status)}</td>
                  </tr>`).join('')}
              </tbody>
            </table>
          </div>` : '<p class="muted small">Belum ada pesanan contoh.</p>'}
      </div>

      <div class="panel">
        <h3 style="font-size:1.05rem;margin-bottom:14px">Pengajuan kerja sama</h3>
        ${requests.length ? requests.map(r => `
          <div class="row-between" style="padding:12px 0;border-bottom:1px dashed var(--line)">
            <div>
              <div class="strong small">${r.id} · ${r.typeLabel}</div>
              <div class="xs muted">${r.data.organisasi || r.data.kegiatan || '-'} · ${KWU.formatDate(r.createdAt)}</div>
            </div>
            ${requestStatusBadge(r.status)}
          </div>`).join('')
        : '<p class="muted small">Belum ada pengajuan contoh.</p>'}
      </div>
    </div>

    <div class="panel" style="margin-top:22px">
      <h3 style="font-size:1.05rem;margin-bottom:14px">Aksi cepat</h3>
      <div class="row-wrap">
        <button class="btn btn--ghost btn--sm" id="adminSeed">Muat ulang data contoh</button>
        <a class="btn btn--ghost btn--sm" href="katalog.html">Lihat katalog</a>
        <a class="btn btn--ghost btn--sm" href="akun-transaksi.html">Riwayat transaksi</a>
      </div>
    </div>`;

  document.getElementById('adminSeed')?.addEventListener('click', () => {
    ['kwu_cart_v1', 'kwu_wishlist_v1', 'kwu_orders_v1', 'kwu_requests_v1', 'kwu_seed_v1'].forEach(k => localStorage.removeItem(k));
    KWU.seed();
    toast('Data contoh dimuat ulang.', 'success');
    setTimeout(() => location.reload(), 700);
  });
}

document.addEventListener('DOMContentLoaded', initAdmin);
