/* =========================================================
   KWU Campus Business Hub - store.js
   Penyimpanan lokal (localStorage) untuk simulasi keranjang,
   wishlist, akun, transaksi, dan pengajuan.
   CATATAN: belum ada backend. Semua data hanya di peramban ini.
   ========================================================= */

const KWU_STORE_KEYS = {
  cart: 'kwu_cart_v1',
  wishlist: 'kwu_wishlist_v1',
  user: 'kwu_user_v1',
  orders: 'kwu_orders_v1',
  requests: 'kwu_requests_v1',
  reviews: 'kwu_reviews_v1',
  seed: 'kwu_seed_v1'
};

const KWU = (() => {
  /* ---------- Util dasar ---------- */
  const read = (key, fallback) => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  };
  const write = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  };

  const rupiah = (num) => {
    const n = Number(num) || 0;
    return 'Rp ' + n.toLocaleString('id-ID');
  };

  const formatDate = (iso, withTime = false) => {
    if (!iso) return '-';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return '-';
    const opts = { day: '2-digit', month: 'long', year: 'numeric' };
    if (withTime) { opts.hour = '2-digit'; opts.minute = '2-digit'; }
    return d.toLocaleDateString('id-ID', opts);
  };

  const makeCode = (prefix) => {
    const stamp = Date.now().toString(36).toUpperCase().slice(-6);
    const rand = Math.random().toString(36).toUpperCase().slice(2, 4);
    return `${prefix}-${stamp}${rand}`;
  };

  const productById = (id) => KWU_DATA.products.find(p => p.id === id);
  const productBySlug = (slug) => KWU_DATA.products.find(p => p.slug === slug);

  /* ---------- Keranjang ---------- */
  const getCart = () => read(KWU_STORE_KEYS.cart, []);

  const saveCart = (cart) => {
    write(KWU_STORE_KEYS.cart, cart);
    document.dispatchEvent(new CustomEvent('kwu:cart-change', { detail: { cart } }));
    updateCartBadge();
    return cart;
  };

  const addToCart = (productId, qty = 1) => {
    const product = productById(productId);
    if (!product) return { ok: false, message: 'Produk tidak ditemukan.' };
    if (product.stock === 0) return { ok: false, message: 'Stok produk ini sedang habis.' };

    const cart = getCart();
    const existing = cart.find(i => i.id === productId);
    const wanted = (existing ? existing.qty : 0) + qty;

    if (wanted > product.stock) {
      return { ok: false, message: `Stok tersisa ${product.stock} ${product.unit}.` };
    }
    if (existing) {
      existing.qty = wanted;
    } else {
      cart.push({ id: productId, qty: Math.max(1, qty) });
    }
    saveCart(cart);
    return { ok: true, message: `${product.name} masuk keranjang.` };
  };

  const updateQty = (productId, qty) => {
    const product = productById(productId);
    const cart = getCart();
    const item = cart.find(i => i.id === productId);
    if (!item) return { ok: false };
    const next = Math.max(1, Math.min(Number(qty) || 1, product ? product.stock : 999));
    item.qty = next;
    saveCart(cart);
    return { ok: true, qty: next, capped: product && next === product.stock && Number(qty) > product.stock };
  };

  const removeFromCart = (productId) => {
    const cart = getCart().filter(i => i.id !== productId);
    saveCart(cart);
    return { ok: true };
  };

  const clearCart = () => saveCart([]);

  const cartCount = () => getCart().reduce((sum, i) => sum + i.qty, 0);

  const cartDetail = () => getCart().map(item => {
    const product = productById(item.id);
    if (!product) return null;
    return { ...product, qty: item.qty, subtotal: product.price * item.qty };
  }).filter(Boolean);

  const cartTotal = () => cartDetail().reduce((sum, i) => sum + i.subtotal, 0);

  /* ---------- Wishlist ---------- */
  const getWishlist = () => read(KWU_STORE_KEYS.wishlist, []);
  const isWishlisted = (id) => getWishlist().includes(id);

  const toggleWishlist = (id) => {
    const list = getWishlist();
    const idx = list.indexOf(id);
    let added = false;
    if (idx >= 0) {
      list.splice(idx, 1);
    } else {
      list.push(id);
      added = true;
    }
    write(KWU_STORE_KEYS.wishlist, list);
    document.dispatchEvent(new CustomEvent('kwu:wishlist-change', { detail: { id, added } }));
    return added;
  };

  const wishlistDetail = () => getWishlist().map(productById).filter(Boolean);

  /* ---------- Akun ---------- */
  const currentUser = () => read(KWU_STORE_KEYS.user, null);

  const register = (payload) => {
    const user = {
      name: payload.name,
      email: payload.email,
      phone: payload.phone || '',
      org: payload.org || '',
      role: payload.role || 'pembeli',
      joinedAt: new Date().toISOString()
    };
    write(KWU_STORE_KEYS.user, user);
    document.dispatchEvent(new CustomEvent('kwu:user-change', { detail: { user } }));
    return user;
  };

  const login = (email) => {
    const name = email.split('@')[0].replace(/[._-]+/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    const user = { name: name || 'Pengguna KWU', email, phone: '', org: '', role: 'pembeli', joinedAt: new Date().toISOString() };
    write(KWU_STORE_KEYS.user, user);
    document.dispatchEvent(new CustomEvent('kwu:user-change', { detail: { user } }));
    return user;
  };

  const logout = () => {
    localStorage.removeItem(KWU_STORE_KEYS.user);
    document.dispatchEvent(new CustomEvent('kwu:user-change', { detail: { user: null } }));
  };

  const updateProfile = (payload) => {
    const user = Object.assign({}, currentUser() || {}, payload);
    write(KWU_STORE_KEYS.user, user);
    document.dispatchEvent(new CustomEvent('kwu:user-change', { detail: { user } }));
    return user;
  };

  /* ---------- Transaksi (simulasi) ---------- */
  const getOrders = () => read(KWU_STORE_KEYS.orders, []);

  const createOrder = (payload) => {
    const orders = getOrders();
    const order = {
      id: makeCode('KWU'),
      createdAt: new Date().toISOString(),
      status: 'menunggu_konfirmasi',
      items: payload.items,
      subtotal: payload.subtotal,
      shipping: payload.shipping || 0,
      total: payload.total,
      payment: payload.payment,
      paymentLabel: payload.paymentLabel,
      buyer: payload.buyer,
      note: payload.note || '',
      simulation: true
    };
    orders.unshift(order);
    write(KWU_STORE_KEYS.orders, orders);
    return order;
  };

  const getOrder = (id) => getOrders().find(o => o.id === id);

  const updateOrderStatus = (id, status) => {
    const orders = getOrders();
    const order = orders.find(o => o.id === id);
    if (!order) return null;
    order.status = status;
    write(KWU_STORE_KEYS.orders, orders);
    return order;
  };

  /* ---------- Pengajuan kerja sama (simulasi) ---------- */
  const getRequests = () => read(KWU_STORE_KEYS.requests, []);

  const createRequest = (payload) => {
    const requests = getRequests();
    const request = {
      id: makeCode(payload.type === 'grosir' ? 'RFQ' : payload.type === 'partnership' ? 'PTN' : 'KLB'),
      type: payload.type,
      typeLabel: payload.typeLabel,
      createdAt: new Date().toISOString(),
      status: 'diterima',
      data: payload.data,
      simulation: true
    };
    requests.unshift(request);
    write(KWU_STORE_KEYS.requests, requests);
    document.dispatchEvent(new CustomEvent('kwu:request-change', { detail: { request } }));
    return request;
  };

  /* ---------- Ulasan ---------- */
  const getUserReviews = () => read(KWU_STORE_KEYS.reviews, {});

  const getReviews = (productId) => {
    const seeds = (KWU_DATA.reviews && KWU_DATA.reviews[productId]) || [];
    const mine = getUserReviews()[productId] || [];
    return [...mine, ...seeds];
  };

  const addReview = (productId, payload) => {
    const store = getUserReviews();
    const list = store[productId] || [];
    const review = {
      id: makeCode('REV'),
      author: payload.author || 'Tamu',
      rating: Math.min(5, Math.max(1, Number(payload.rating) || 5)),
      title: (payload.title || 'Ulasan saya').trim(),
      text: (payload.text || '').trim(),
      date: new Date().toISOString(),
      mine: true
    };
    list.unshift(review);
    store[productId] = list;
    write(KWU_STORE_KEYS.reviews, store);
    document.dispatchEvent(new CustomEvent('kwu:review-change', { detail: { productId } }));
    return review;
  };

  const reviewSummary = (productId) => {
    const list = getReviews(productId);
    if (!list.length) return { count: 0, average: 0, mine: 0, breakdown: [0, 0, 0, 0, 0] };
    const breakdown = [0, 0, 0, 0, 0];
    let total = 0;
    list.forEach(r => {
      const idx = Math.min(5, Math.max(1, Number(r.rating) || 5)) - 1;
      breakdown[idx]++;
      total += r.rating;
    });
    return {
      count: list.length,
      average: total / list.length,
      mine: list.filter(r => r.mine).length,
      breakdown
    };
  };

  /* ---------- Badge keranjang ---------- */
  function updateCartBadge() {
    const count = cartCount();
    document.querySelectorAll('[data-cart-count]').forEach(el => {
      el.textContent = count;
      el.classList.toggle('is-visible', count > 0);
    });
  }

  /* ---------- Data awal ---------- */
  function seed() {
    if (read(KWU_STORE_KEYS.seed, false)) return;
    const orders = [
      {
        id: 'KWU-7H2A01', createdAt: '2026-10-02T09:12:00.000Z', status: 'selesai',
        items: [
          { id: 'm02', name: 'Cookies Cokelat Chip', price: 32000, qty: 2, unit: 'box', image: 'assets/img/produk/biskuit-0.jpg' },
          { id: 'mn01', name: 'Kopi Susu Gula Aren 250 ml', price: 28000, qty: 3, unit: 'botol', image: 'assets/img/produk/kopisusu-1.jpg' }
        ],
        subtotal: 148000, shipping: 0, total: 148000,
        payment: 'qris', paymentLabel: 'QRIS',
        buyer: { name: 'Pengguna Contoh', email: 'contoh@email.test', phone: '0800 0000 000', address: 'Kampus KWU' },
        note: 'Pengiriman dicek bersama admin KWU.', simulation: true
      },
      {
        id: 'KWU-5B9C22', createdAt: '2026-09-21T14:40:00.000Z', status: 'diproses',
        items: [
          { id: 'mc01', name: 'Kaos Katun Heavy 30s', price: 89000, qty: 4, unit: 'pcs', image: 'assets/img/produk/kaos-0.jpg' }
        ],
        subtotal: 356000, shipping: 0, total: 356000,
        payment: 'transfer', paymentLabel: 'Transfer Bank',
        buyer: { name: 'Pengguna Contoh', email: 'contoh@email.test', phone: '0800 0000 000', address: 'Kampus KWU' },
        note: '', simulation: true
      },
      {
        id: 'KWU-3K7D33', createdAt: '2026-09-04T08:05:00.000Z', status: 'menunggu_pembayaran',
        items: [
          { id: 'pk01', name: 'Paket Sarapan Kantor', price: 129000, qty: 1, unit: 'paket', image: 'assets/img/produk/hadiah-0.jpg' }
        ],
        subtotal: 129000, shipping: 0, total: 129000,
        payment: 'transfer', paymentLabel: 'Transfer Bank',
        buyer: { name: 'Pengguna Contoh', email: 'contoh@email.test', phone: '0800 0000 000', address: 'Kampus KWU' },
        note: '', simulation: true
      }
    ];
    write(KWU_STORE_KEYS.orders, orders);

    const requests = [
      {
        id: 'RFQ-2K8M11', type: 'grosir', typeLabel: 'Pembelian Grosir / RFQ',
        createdAt: '2026-09-11T10:00:00.000Z', status: 'ditinjau',
        data: { 'Nama organisasi': 'Toko Serbaguna Contoh', 'Nama kontak': 'Rani', 'Email bisnis': 'rani@contoh.test', 'Daftar produk': 'Kopi Susu Gula Aren 250 ml (60)', 'Tanggal kebutuhan': '2026-10-20', 'Lokasi tujuan': 'Kampus KWU' },
        simulation: true
      },
      {
        id: 'PTN-9Q1R22', type: 'partnership', typeLabel: 'Partnership',
        createdAt: '2026-08-19T13:20:00.000Z', status: 'diterima',
        data: { 'Nama organisasi': 'UMKM Contoh', 'Bidang usaha': 'F&B', 'Bentuk kemitraan': 'Distribusi dan reseller', 'Tujuan kemitraan': 'Distribusi produk KWU di jaringan toko', 'Nama kontak': 'Dimas', 'Email bisnis': 'dimas@contoh.test' },
        simulation: true
      }
    ];
    write(KWU_STORE_KEYS.requests, requests);
    write(KWU_STORE_KEYS.seed, true);
  }

  return {
    read, write, rupiah, formatDate, makeCode,
    productById, productBySlug,
    getCart, saveCart, addToCart, updateQty, removeFromCart, clearCart, cartCount, cartDetail, cartTotal,
    getWishlist, isWishlisted, toggleWishlist, wishlistDetail,
    currentUser, register, login, logout, updateProfile,
    getOrders, createOrder, getOrder, updateOrderStatus,
    getRequests, createRequest,
    getReviews, addReview, reviewSummary,
    updateCartBadge, seed
  };
})();

if (typeof window !== 'undefined') window.KWU = KWU;
