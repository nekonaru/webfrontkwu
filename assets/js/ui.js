/* =========================================================
   KWU Campus Business Hub - ui.js
   Komponen antarmuka bersama: ikon, toast, dialog, header,
   drawer, pencarian, chatbot, animasi scroll, tab, akordeon.
   ========================================================= */

/* ---------------- Ikon (SVG inline) ---------------- */
const ICONS = {
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
  cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h2.5l2.4 12.2a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L21 7H5.5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowLeft: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
  arrowUp: '<path d="M12 19V5M5 12l7-7 7 7"/>',
  chevronDown: '<path d="M6 9l6 6 6-6"/>',
  chevronRight: '<path d="M9 6l6 6-6 6"/>',
  check: '<path d="M4 12.5l5 5L20 6.5"/>',
  checkCircle: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.6 2.6L16 9.5"/>',
  alert: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5v5M12 16h.01"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  star: '<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L3.5 9.7l5.9-.8z"/>',
  heart: '<path d="M12 20s-7.5-4.6-7.5-9.6A4.4 4.4 0 0 1 12 7.6a4.4 4.4 0 0 1 7.5 2.8C19.5 15.4 12 20 12 20z"/>',
  trash: '<path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  eye: '<path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="2.8"/>',
  eyeOff: '<path d="M3 3l18 18M10.6 6.1A9.9 9.9 0 0 1 12 6c6.4 0 10 6 10 6a17 17 0 0 1-3.4 4M6.3 8.3A17 17 0 0 0 2 12s3.6 6.5 10 6.5c1.6 0 3-.4 4.2-1"/>',
  qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14h1M14 20h3M20 17v4"/>',
  bank: '<path d="M3 10l9-6 9 6M5 10v9M9.5 10v9M14.5 10v9M19 10v9M3 21h18"/>',
  cash: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/>',
  box: '<path d="M21 8.5l-9-5-9 5v7l9 5 9-5z"/><path d="M3 8.5l9 5 9-5M12 21v-7.5"/>',
  handshake: '<path d="M11 17l2 2 3-3 3 2 3-3-5-5-3 3-4-4-5 5 6 6z"/><path d="M2 13l4-4 4 2"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18"/>',
  coffee: '<path d="M4 9h12v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M16 10h2.5a2.5 2.5 0 0 1 0 5H16"/><path d="M7 2v3M11 2v3"/>',
  cookie: '<circle cx="12" cy="12" r="9"/><circle cx="9" cy="9" r="1.2"/><circle cx="15" cy="13" r="1.2"/><circle cx="10" cy="15" r="1.2"/>',
  shirt: '<path d="M8 3l4 2 4-2 4 3-2.5 3L16 8v13H8V8l-1.5 1L4 6z"/>',
  book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5A2.5 2.5 0 0 1 4 20.5z"/>',
  leaf: '<path d="M4 20c0-8 6-14 16-14 0 10-6 15-13 15H4z"/><path d="M4 20c4-4 7-6 11-8"/>',
  chat: '<path d="M21 12a8 8 0 0 1-8 8H7l-4 3 1-5.2A8 8 0 0 1 13 4a8 8 0 0 1 8 8z"/>',
  send: '<path d="M21 3L10 14M21 3l-7 18-4-7-7-4z"/>',
  phone: '<path d="M5 3h4l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  pin: '<path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  filter: '<path d="M3 5h18M6 12h12M10 19h4"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>',
  tag: '<path d="M20 12l-8 8-9-9V3h8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
  truck: '<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="17.5" cy="18" r="2"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.4 8.3-8 9-4.6-.7-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  zap: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-5.5 6.5-5.5s6.5 1.9 6.5 5.5"/><path d="M16 5.5a3.5 3.5 0 0 1 0 7M18 20c0-2.4-.8-4-2.2-4.9"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 7 19.4a1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 3 15a1.7 1.7 0 0 0-1.6-1H1a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 3 9a1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 9 3a1.7 1.7 0 0 0 1-1.6V1a2 2 0 1 1 4 0v.1A1.7 1.7 0 0 0 15 3a1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.7 1.7 0 0 0 21 9a1.7 1.7 0 0 0 1.6 1H23a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  heartFill: '<path d="M12 20s-7.5-4.6-7.5-9.6A4.4 4.4 0 0 1 12 7.6a4.4 4.4 0 0 1 7.5 2.8C19.5 15.4 12 20 12 20z" fill="currentColor"/>',
  package: '<path d="M16.5 9.4L7.5 4.2M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.3 7L12 12l8.7-5M12 22V12"/>',
  print: '<path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="7" rx="1"/>',
  download: '<path d="M12 3v12M7 11l5 5 5-5M4 21h16"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.6 2.6 0 0 1 5 .8c0 1.7-2.5 2.2-2.5 3.7M12 17.5h.01"/>',
  building: '<path d="M4 21V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17M15 9h4a1 1 0 0 1 1 1v11M3 21h18M8 7h3M8 11h3M8 15h3"/>',
  megaphone: '<path d="M3 11v2a2 2 0 0 0 2 2h2l9 5V4L7 9H5a2 2 0 0 0-2 2z"/><path d="M19 9a3 3 0 0 1 0 6"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18"/>',
  bell: '<path d="M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
  gift: '<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18"/><path d="M12 8S9.5 3 7.5 4.5 9 8 12 8zM12 8s2.5-5 4.5-3.5S15 8 12 8z"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>'
};

function icon(name, cls = '') {
  const path = ICONS[name] || ICONS.info;
  return `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
}

/* ---------------- Toast ---------------- */
function toast(message, type = 'info', title = '') {
  let stack = document.querySelector('.toast-stack');
  if (!stack) {
    stack = document.createElement('div');
    stack.className = 'toast-stack';
    stack.setAttribute('role', 'status');
    stack.setAttribute('aria-live', 'polite');
    document.body.appendChild(stack);
  }
  const iconName = type === 'success' ? 'checkCircle' : type === 'error' ? 'alert' : type === 'warning' ? 'alert' : 'info';
  const el = document.createElement('div');
  el.className = `toast toast--${type}`;
  el.innerHTML = `
    <span class="toast__icon">${icon(iconName)}</span>
    <div>
      ${title ? `<div class="toast__title">${title}</div>` : ''}
      <div class="toast__msg">${message}</div>
    </div>`;
  stack.appendChild(el);
  setTimeout(() => {
    el.classList.add('is-leaving');
    setTimeout(() => el.remove(), 320);
  }, 3800);
}

/* ---------------- Dialog konfirmasi ---------------- */
function confirmDialog(options = {}) {
  const { title = 'Konfirmasi tindakan', message = '', confirmText = 'Ya, lanjutkan', cancelText = 'Batal', tone = 'orange' } = options;
  return new Promise(resolve => {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal__overlay" data-close></div>
      <div class="modal__panel" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div style="display:flex;gap:14px;align-items:flex-start">
          <div class="empty-state__icon" style="width:56px;height:56px;margin:0;background:${tone === 'danger' ? 'var(--danger-bg)' : 'var(--orange-50)'};color:${tone === 'danger' ? 'var(--danger)' : 'var(--orange)'}">${icon(tone === 'danger' ? 'trash' : 'help', '')}</div>
          <div>
            <h3 id="modalTitle">${title}</h3>
            <p class="muted small">${message}</p>
          </div>
        </div>
        <div class="modal__actions">
          <button class="btn btn--ghost" data-close>${cancelText}</button>
          <button class="btn ${tone === 'danger' ? 'btn--navy' : 'btn--primary'}" data-confirm>${confirmText}</button>
        </div>
      </div>`;
    document.body.appendChild(modal);
    document.body.classList.add('is-locked');
    requestAnimationFrame(() => modal.classList.add('is-open'));

    const onKey = (e) => {
      if (e.key === 'Escape') { close(false); }
    };
    const close = (result) => {
      document.removeEventListener('keydown', onKey);
      modal.classList.remove('is-open');
      document.body.classList.remove('is-locked');
      setTimeout(() => modal.remove(), 320);
      resolve(result);
    };
    modal.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => close(false)));
    modal.querySelector('[data-confirm]').addEventListener('click', () => close(true));
    document.addEventListener('keydown', onKey);
  });
}

/* ---------------- Scroll reveal ---------------- */
let revealObserver = null;

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  if (!('IntersectionObserver' in window)) {
    items.forEach(i => i.classList.add('is-visible'));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  }
  // Amati ulang hanya elemen yang masih ada di dokumen (mencegah penumpukan observer)
  revealObserver.disconnect();
  items.forEach(i => {
    if (!i.classList.contains('is-visible')) revealObserver.observe(i);
  });
}

/* ---------------- Counter angka ---------------- */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const run = (el) => {
    const target = parseFloat(el.dataset.count) || 0;
    const suffix = el.dataset.suffix || '';
    const dur = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString('id-ID') + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (!('IntersectionObserver' in window)) { counters.forEach(run); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { run(entry.target); io.unobserve(entry.target); }
    });
  }, { threshold: 0.4 });
  counters.forEach(c => io.observe(c));
}

/* ---------------- Header, drawer, pencarian ---------------- */
function initHeader() {
  const header = document.querySelector('.site-header');
  const drawer = document.getElementById('mobileDrawer');
  const searchOverlay = document.getElementById('searchOverlay');

  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const openDrawer = () => {
    if (!drawer) return;
    drawer.classList.add('is-open');
    document.body.classList.add('is-locked');
    drawer.querySelector('.drawer__panel').setAttribute('aria-hidden', 'false');
    drawer.querySelector('.drawer__panel').focus?.();
  };
  const closeDrawer = () => {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    document.body.classList.remove('is-locked');
    drawer.querySelector('.drawer__panel').setAttribute('aria-hidden', 'true');
  };

  document.querySelectorAll('[data-drawer-open]').forEach(btn => btn.addEventListener('click', openDrawer));
  document.querySelectorAll('[data-drawer-close]').forEach(btn => btn.addEventListener('click', closeDrawer));
  if (drawer) {
    drawer.querySelectorAll('.drawer__overlay').forEach(el => el.addEventListener('click', closeDrawer));
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
  }

  const openSearch = () => {
    if (!searchOverlay) return;
    searchOverlay.classList.add('is-open');
    document.body.classList.add('is-locked');
    setTimeout(() => searchOverlay.querySelector('input')?.focus(), 120);
  };
  const closeSearch = () => {
    if (!searchOverlay) return;
    searchOverlay.classList.remove('is-open');
    document.body.classList.remove('is-locked');
  };
  document.querySelectorAll('[data-search-open]').forEach(btn => btn.addEventListener('click', openSearch));
  if (searchOverlay) {
    searchOverlay.querySelectorAll('[data-search-close]').forEach(el => el.addEventListener('click', closeSearch));
    searchOverlay.querySelector('.modal__overlay')?.addEventListener('click', closeSearch);
    const form = searchOverlay.querySelector('form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const q = form.querySelector('input').value.trim();
        window.location.href = 'katalog.html' + (q ? '?q=' + encodeURIComponent(q) : '');
      });
    }
    searchOverlay.querySelectorAll('[data-suggest]').forEach(btn => btn.addEventListener('click', () => {
      window.location.href = 'katalog.html?q=' + encodeURIComponent(btn.dataset.suggest);
    }));
  }

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape') { closeDrawer(); closeSearch(); }
  });

  // Status login di header
  const user = KWU.currentUser();
  document.querySelectorAll('[data-user-name]').forEach(el => {
    el.textContent = user ? user.name : 'Masuk';
  });
  document.querySelectorAll('[data-user-action]').forEach(el => {
    el.setAttribute('href', user ? 'akun.html' : 'login.html');
  });

  KWU.updateCartBadge();

  /* Navigasi bawah khusus layar kecil */
  document.body.classList.add('has-mobile-nav');
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.mobile-nav__item').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) link.classList.add('is-active');
  });
}

/* ---------------- Tombol kembali ke atas ---------------- */
function initBackToTop() {
  const btn = document.getElementById('toTop');
  if (!btn) return;
  const onScroll = () => btn.classList.toggle('is-visible', window.scrollY > 500);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ---------------- Tab ---------------- */
function initTabs() {
  document.querySelectorAll('[data-tabs]').forEach(group => {
    const name = group.dataset.tabs;
    const tabs = group.querySelectorAll('.tab');
    // Panel anak berada di dalam wadah [data-tab-panel="<nama>"]
    const panels = document.querySelectorAll(`[data-tab-panel="${name}"] [data-tab-panel-id]`);
    if (!tabs.length || !panels.length) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('is-active'));
        tab.classList.add('is-active');
        panels.forEach(p => {
          const match = p.dataset.tabPanelId === tab.dataset.tab;
          p.classList.toggle('hide', !match);
          if (match) {
            p.classList.remove('tab-panel');
            void p.offsetWidth;
            p.classList.add('tab-panel');
          }
        });
      });
    });
  });
}

/* ---------------- Akordeon (FAQ) ---------------- */
function initAccordion() {
  document.querySelectorAll('.accordion__trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion__item');
      const panel = item.querySelector('.accordion__panel');
      const isOpen = item.classList.contains('is-open');
      const group = item.closest('.accordion');
      if (!isOpen && group && group.dataset.single === 'true') {
        group.querySelectorAll('.accordion__item.is-open').forEach(other => {
          other.classList.remove('is-open');
          other.querySelector('.accordion__panel').style.maxHeight = null;
        });
      }
      item.classList.toggle('is-open', !isOpen);
      panel.style.maxHeight = isOpen ? null : panel.scrollHeight + 'px';
      trigger.setAttribute('aria-expanded', String(!isOpen));
    });
  });
}

/* ---------------- Chatbot asisten KWU ---------------- */
const CHAT_RULES = [
  {
    keys: ['produk', 'beli', 'belanja', 'katalog', 'cari', 'harga', 'daftar produk'],
    reply: 'Bisa. Buka <a href="katalog.html">Katalog KWU</a> untuk mencari produk. Kamu bisa menyaring lewat kategori, rentang harga, dan status stok. Kalau butuh jumlah besar, ajukan <a href="kolaborasi-grosir.html">RFQ grosir</a>.'
  },
  {
    keys: ['kategori', 'jenis produk', 'jenis barang', 'apa aja produknya', 'katalognya berisi'],
    reply: 'Katalog dibagi lima kategori: <b>Makanan</b>, <b>Minuman</b>, <b>Merchandise &amp; Aksesoris</b>, <b>Alat Tulis &amp; Kreativitas</b>, dan <b>Paket Hemat</b>. Semuanya bisa dibuka dari <a href="katalog.html">Katalog</a>.'
  },
  {
    keys: ['makanan', 'camilan', 'snack', 'kue', 'keripik', 'jajanan', 'bakery'],
    reply: 'Kategori <b>Makanan</b> berisi keripik pisang, cookies cokelat, kue lapis, sambal bawang, kerupuk udang, brownies, biskuit, jelly buah, es krim, dan snack box 8 varian. Buka <a href="katalog.html?kategori=makanan">katalog makanan</a>.'
  },
  {
    keys: ['minuman', 'kopi', 'teh', 'susu', 'jus', 'matcha', 'madu', 'sirup', 'minuman apa'],
    reply: 'Kategori <b>Minuman</b> berisi kopi susu gula aren, kopi bubuk, teh celup melati, sirup markisa, jus mangga, susu UHT, matcha latte, dan madu hutan. Buka <a href="katalog.html?kategori=minuman">katalog minuman</a>.'
  },
  {
    keys: ['merchandise', 'baju', 'kaos', 'hoodie', 'tas', 'totebag', 'topi', 'tumbler', 'mug', 'ransel', 'aksesoris', 'fashion', 'merch'],
    reply: 'Ada kategori <b>Merchandise &amp; Aksesoris</b> berisi kaos, hoodie, tote bag kanvas, topi baseball, tumbler stainless, mug keramik, dan ransel. Buka <a href="katalog.html?kategori=merchandise">katalog merchandise</a>.'
  },
  {
    keys: ['alat tulis', 'buku', 'pulpen', 'spidol', 'sticky', 'pensil', 'penghapus', 'organizer', 'binder', 'penggaris', 'kertas', 'stationery'],
    reply: 'Kategori <b>Alat Tulis &amp; Kreativitas</b> berisi buku tulis A5, set pulpen 12 warna, set spidol, sticky notes, pensil warna 24, penghapus dan correction pen, box organizer, binder clip, serta set penggaris dan jangka. Buka <a href="katalog.html?kategori=alat-tulis">katalog alat tulis</a>.'
  },
  {
    keys: ['paket', 'bundling', 'paket hemat', 'souvenir paket', 'paket sarapan', 'paket alat tulis'],
    reply: 'Ada <b>Paket Hemat</b> berisi Paket Sarapan Kantor, Paket Alat Tulis, dan Paket Merchandise Tim. Harganya sudah per paket, lebih hemat daripada beli satuan. Buka <a href="katalog.html?kategori=paket">katalog paket</a>.'
  },
  {
    keys: ['grosir', 'rfq', 'organisasi', 'pembelian besar', 'kuantitas', 'partai', 'beli banyak', 'qty'],
    reply: 'Untuk pembelian besar, isi formulir <a href="kolaborasi-grosir.html">Pengajuan Grosir</a>. Isi organisasi, kontak, daftar produk, jumlah, dan tanggal kebutuhan. Nomor pengajuan langsung terbit setelah kirim.'
  },
  {
    keys: ['mitra', 'partnership', 'kemitraan', 'perusahaan', 'umkm', 'pemasok', 'supplier', 'institusi', 'kerjasama'],
    reply: 'Kemitraan untuk perusahaan, pemasok, UMKM, dan institusi dibuka lewat formulir <a href="kolaborasi-partnership.html">Partnership</a>. Isi profil organisasi, bidang usaha, bentuk kemitraan, dan tujuan kerja sama.'
  },
  {
    keys: ['event', 'kolaborasi', 'program', 'workshop', 'bazar', 'promosi', 'seminar', 'kegiatan', 'usulan'],
    reply: 'Untuk event, proyek kreatif, dan program kewirausahaan, isi <a href="kolaborasi-program.html">Usulan Kolaborasi Program</a>. Sertakan nama kegiatan, jenis kolaborasi, target, dan perkiraan jadwal.'
  },
  {
    keys: ['bayar', 'pembayaran', 'qris', 'transfer', 'bank', 'tunai', 'cicilan', 'kartu kredit', 'cara bayar'],
    reply: 'Metode pembayaran yang ditampilkan: <b>QRIS</b>, <b>Transfer Bank</b>, dan <b>Tunai di KWU</b>. Pembayaran sungguhan mengikuti prosedur resmi KWU. Buka <a href="checkout.html">Checkout</a> untuk melihat detail biayanya.'
  },
  {
    keys: ['biaya', 'ongkos', 'gratis', 'total', 'bayar berapa', 'harga total', 'diskon', 'promo', 'voucher', 'potongan'],
    reply: 'Tidak ada biaya tersembunyi. Ringkasan di <a href="keranjang.html">Keranjang</a> dan <a href="checkout.html">Checkout</a> menampilkan subtotal, biaya tambahan, dan total akhir apa adanya.'
  },
  {
    keys: ['transaksi', 'keranjang', 'checkout', 'pesan', 'order', 'memesan', 'membeli produk'],
    reply: 'Alurnya: pilih produk di <a href="katalog.html">Katalog</a>, masukkan ke <a href="keranjang.html">Keranjang</a>, isi data pembeli di <a href="checkout.html">Checkout</a>, lalu konfirmasi. Nomor transaksi otomatis terbit.'
  },
  {
    keys: ['status', 'lacak', 'tracking', 'nomor', 'pesanan saya', 'sudah diproses', 'sudah dikirim', 'status pesanan'],
    reply: 'Nomor transaksi dan pengajuan bisa dilihat di <a href="akun-transaksi.html">Riwayat Transaksi</a> dan <a href="akun.html">Halaman Akun</a>. Statusnya: diterima, ditinjau, butuh informasi, atau ditanggapi.'
  },
  {
    keys: ['ulasan', 'review', 'rating', 'bintang', 'komentar', 'tidak puas', 'balasan'],
    reply: 'Setiap produk punya bagian <b>Ulasan</b> dengan ringkasan rating dan komentar pembeli. Buka halaman detail produk lalu scroll ke bagian Ulasan untuk menulis ulasanmu sendiri.'
  },
  {
    keys: ['login', 'masuk', 'akun', 'daftar', 'registrasi', 'password', 'sandi', 'lupa sandi'],
    reply: 'Katalog bisa dibuka tanpa login. Masuk lewat <a href="login.html">Masuk</a> atau buat akun baru di <a href="daftar.html">Daftar</a>. Akun dipakai untuk menyimpan wishlist, mengisi formulir, dan memantau transaksi.'
  },
  {
    keys: ['wishlist', 'favorit', 'simpan', 'disukai', 'sukai', 'terfavorit', 'simpanan'],
    reply: 'Tekan ikon hati pada kartu produk untuk menyimpannya. Daftarmu ada di <a href="akun.html#wishlist">Akun, bagian Wishlist</a>.'
  },
  {
    keys: ['pengambilan', 'diambil', 'pengiriman', 'kirim', 'kurir', 'antar', 'jemput', 'jadwal kirim', 'ongkir'],
    reply: 'Jadwal pengambilan atau pengiriman disepakati bersama admin KWU setelah pesanan berstatus Diproses. Simpan nomor transaksi sebagai rujukan saat konfirmasi.'
  },
  {
    keys: ['bantuan', 'faq', 'panduan', 'cara', 'tutorial', 'tips', 'panduan lengkap'],
    reply: 'Pusat bantuan ada di <a href="bantuan.html">Pusat Bantuan</a>. Isinya panduan transaksi, FAQ, dan formulir kontak untuk menghubungi admin KWU.'
  },
  {
    keys: ['admin', 'kontak', 'hubungi', 'telp', 'telepon', 'email', 'alamat', 'lokasi', 'jam buka'],
    reply: 'Untuk menghubungi admin KWU, isi formulir kontak di <a href="bantuan.html#kontak">Pusat Bantuan</a>. Alamat dan nomor resmi belum dipublikasikan, jadi pesanmu tersimpan di peramban.'
  },
  {
    keys: ['tentang', 'profil', 'kwu', 'sejarah', 'visi', 'misi', 'unit', 'administrasi niaga'],
    reply: 'Profil KWU Administrasi Niaga ada di <a href="tentang.html">Tentang KWU</a>. Isinya identitas, tujuan, layanan, dan kontribusi KWU bagi kewirausahaan kampus.'
  },
  {
    keys: ['aktivitas', 'berita', 'cerita', 'kegiatan', 'agenda', 'kalender', 'jadwal', 'event terdekat'],
    reply: 'Berita dan agenda kegiatan ada di <a href="aktivitas.html">Aktivitas</a>. Isinya cerita kegiatan, workshop, program, dan jadwal acara berikutnya.'
  },
  {
    keys: ['minimum', 'min beli', 'minimum pembelian', 'minimal order', 'minimum order'],
    reply: 'Setiap produk punya minimum pembelian sendiri, umumnya mulai dari 4 sampai 24 pcs. Detailnya tampil di bagian Jumlah pada halaman produk.'
  },
  {
    keys: ['stok', 'tersedia', 'habis', 'kosong', 'ready', 'stock', 'sisa'],
    reply: 'Status stok tampil di setiap kartu produk: hijau berarti tersedia, kuning berarti menipis, merah berarti habis. Kamu juga bisa menyaring lewat filter "Stok tersedia saja" di katalog.'
  },
  {
    keys: ['produk baru', 'terbaru', 'baru saja', 'rekomendasi', 'might like', 'pilihan editor'],
    reply: 'Produk terbaru ada di <a href="katalog.html?sort=terbaru">Katalog urut terbaru</a>. Katalog juga bisa disortir berdasarkan popularitas, rating, dan harga.'
  },
  {
    keys: ['komplain', 'keluhan', 'retur', 'tukar', 'kembalikan', 'rusak', 'tidak sesuai', 'refund', 'barang cacat'],
    reply: 'Bawa nomor transaksi saat menghubungi admin KWU lewat <a href="bantuan.html#kontak">Pusat Bantuan</a>. Ketentuan penukaran mengikuti prosedur resmi KWU dan belum dipublikasikan di versi ini.'
  },
  {
    keys: ['resep', 'cara buat', 'cara minum', 'cara pakai', 'saran saji', 'saran penyajian'],
    reply: 'Lihat di deskripsi tiap produk. Kalau masih bingung, tanya saja di sini dan nanti kami arahkan ke halaman produk yang tepat.'
  },
  {
    keys: ['admin panel', 'panel admin', 'kelola', 'dashboard', 'data pemesanan'],
    reply: 'Panel interno ada di <a href="admin.html">/admin</a> dengan tampilan pengelolaan data. Halaman ini tidak ditampilkan di navigasi publik.'
  }
];

function initChatbot() {
  const fab = document.getElementById('chatFab');
  const panel = document.getElementById('chatPanel');
  if (!fab || !panel) return;
  const body = panel.querySelector('.chat-body');
  const quick = panel.querySelector('.chat-quick');
  const input = panel.querySelector('.chat-input input');

  const addMessage = (text, who = 'bot') => {
    const el = document.createElement('div');
    el.className = `chat-msg chat-msg--${who}`;
    el.innerHTML = text;
    body.appendChild(el);
    body.scrollTop = body.scrollHeight;
    return el;
  };

  const typing = () => new Promise(resolve => {
    const el = document.createElement('div');
    el.className = 'chat-msg chat-msg--bot';
    el.innerHTML = '<span class="chat-typing"><span></span><span></span><span></span></span>';
    body.appendChild(el);
    body.scrollTop = body.scrollHeight;
    setTimeout(() => { el.remove(); resolve(); }, 700);
  });

  const answer = (text) => {
    const q = text.toLowerCase().trim();

    // Skor: keyword lebih panjang lebih spesifik, posisi lebih awal lebih sesuai maksud
    let best = null;
    let bestScore = 0;
    CHAT_RULES.forEach(rule => {
      let score = 0;
      rule.keys.forEach(key => {
        const pos = q.indexOf(key);
        if (pos < 0) return;
        const value = key.length * 10 - pos * 0.5;
        if (value > score) score = value;
      });
      if (score > bestScore) { bestScore = score; best = rule; }
    });
    if (best) return best.reply;

    // Coba tebak maksud dari kata umum
    const guesses = [
      { keys: ['terima kasih', 'makasih', 'thanks', 'oke', 'ok'], reply: 'Sama-sama. Kalau ada pertanyaan lain, tulis saja di sini ya.' },
      { keys: ['halo', 'hai', 'hello', 'hi'], reply: 'Halo! Saya <b>Asisten KWU</b>. Tanya saja soal katalog, harga, transaksi, atau kerja sama.' },
      { keys: ['nama kamu', 'siapa kamu', 'kamu siapa'], reply: 'Saya <b>Asisten KWU</b>, asisten percakapan di situs ini. Saya bisa mengarahkan ke katalog, keranjang, checkout, formulir kerja sama, dan pusat bantuan.' }
    ];
    const guess = guesses.find(g => g.keys.some(k => q.includes(k)));
    if (guess) return guess.reply;

    return 'Saya belum menemukan jawaban yang pas untuk itu. Coba pilih salah satu topik di bawah, atau tulis pertanyaan seperti <b>cari produk</b>, <b>kelompok makanan</b>, <b>keranjang</b>, <b>grosir</b>, <b>ulasan</b>, atau <b>bantuan</b>. Untuk pertanyaan spesifik, hubungi admin lewat <a href="bantuan.html#kontak">Pusat Bantuan</a>.';
  };

  const send = async (text) => {
    if (!text.trim()) return;
    addMessage(text, 'user');
    await typing();
    addMessage(answer(text));
  };

  const open = () => {
    panel.classList.add('is-open');
    fab.setAttribute('aria-expanded', 'true');
    if (!body.dataset.started) {
      body.dataset.started = 'true';
      addMessage('Halo! Saya <b>Asisten KWU</b>. Saya bisa bantu arahkan ke katalog, kerja sama, transaksi, atau bantuan.');
    }
    setTimeout(() => input?.focus(), 250);
  };
  const close = () => {
    panel.classList.remove('is-open');
    fab.setAttribute('aria-expanded', 'false');
  };

  fab.addEventListener('click', () => panel.classList.contains('is-open') ? close() : open());
  panel.querySelector('[data-chat-close]')?.addEventListener('click', close);
  quick?.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => send(btn.textContent.trim())));
  panel.querySelector('[data-chat-send]')?.addEventListener('click', () => {
    if (!input.value.trim()) return;
    send(input.value);
    input.value = '';
  });
  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!input.value.trim()) return;
      send(input.value);
      input.value = '';
    }
  });
}

/* ---------------- Utility kecil ---------------- */
function qs(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function setYear() {
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
}

function initPasswordToggles() {
  document.querySelectorAll('[data-toggle-password]').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.parentElement.querySelector('input');
      if (!input) return;
      const show = input.type === 'password';
      input.type = show ? 'text' : 'password';
      btn.innerHTML = icon(show ? 'eyeOff' : 'eye');
      btn.setAttribute('aria-label', show ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi');
    });
  });
}

/* ---------------- Tautan placeholder (mis. media sosial) ---------------- */
function initPlaceholders() {
  document.querySelectorAll('[data-social-placeholder]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      toast('Akun media sosial resmi KWU belum dipublikasikan.', 'info', 'Belum tersedia');
    });
  });
}

/* ---------------- Inisialisasi global ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  KWU.seed();
  initHeader();
  initReveal();
  initCounters();
  initBackToTop();
  initTabs();
  initAccordion();
  initChatbot();
  initPasswordToggles();
  initPlaceholders();
  setYear();
});
