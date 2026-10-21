/* =========================================================
   KWU Campus Business Hub - auth.js
   Halaman login dan pendaftaran (tampilan + simulasi lokal).
   ========================================================= */

function initLogin() {
  const form = document.getElementById('loginForm');
  if (!form) return;

  const emailEl = document.getElementById('loginEmail');
  const passEl = document.getElementById('loginPassword');
  const next = qs('next') || 'akun.html';

  const setError = (el, message) => {
    const field = el.closest('.field');
    const errorEl = field?.querySelector('.field__error span');
    if (errorEl) errorEl.textContent = message;
    field?.classList.add('has-error');
  };
  const clearError = (el) => el.closest('.field')?.classList.remove('has-error');

  [emailEl, passEl].forEach(el => {
    if (!el) return;
    el.addEventListener('input', () => clearError(el));
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let valid = true;
    if (!emailEl?.value.trim()) { setError(emailEl, 'Email wajib diisi.'); valid = false; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailEl.value.trim())) { setError(emailEl, 'Format email belum benar.'); valid = false; }
    if (!passEl?.value) { setError(passEl, 'Kata sandi wajib diisi.'); valid = false; }
    else if (passEl.value.length < 6) { setError(passEl, 'Kata sandi minimal 6 karakter.'); valid = false; }
    if (!valid) return;

    const btn = form.querySelector('button[type="submit"]');
    btn.classList.add('is-loading');
    await new Promise(r => setTimeout(r, 900));

    const user = KWU.login(emailEl.value.trim());
    toast(`Selamat datang, ${user.name}.`, 'success', 'Login simulasi berhasil');
    setTimeout(() => { location.href = next; }, 800);
  });

  /* Login demo cepat */
  document.querySelectorAll('[data-demo-login]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (emailEl) emailEl.value = 'mahasiswa@kampus.test';
      if (passEl) passEl.value = 'kwudemo123';
      toast('Data demo terisi. Tekan "Masuk" untuk melanjutkan.', 'info');
    });
  });
}

function initRegister() {
  const form = document.getElementById('registerForm');
  if (!form) return;

  const fields = {
    name: document.getElementById('regName'),
    email: document.getElementById('regEmail'),
    phone: document.getElementById('regPhone'),
    org: document.getElementById('regOrg'),
    password: document.getElementById('regPassword'),
    confirm: document.getElementById('regConfirm'),
    terms: document.getElementById('regTerms')
  };

  const setError = (el, message) => {
    const field = el.closest('.field') || el.closest('.checkbox');
    const errorEl = field?.querySelector('.field__error span');
    if (errorEl) errorEl.textContent = message;
    field?.classList.add('has-error');
  };
  const clearError = (el) => (el.closest('.field') || el.closest('.checkbox'))?.classList.remove('has-error');

  Object.values(fields).forEach(el => el?.addEventListener('input', () => clearError(el)));

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let valid = true;
    const v = fields;

    if (!v.name?.value.trim() || v.name.value.trim().length < 3) { setError(v.name, 'Nama minimal 3 huruf.'); valid = false; }
    if (!v.email?.value.trim()) { setError(v.email, 'Email wajib diisi.'); valid = false; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.value.trim())) { setError(v.email, 'Format email belum benar.'); valid = false; }
    if (v.phone?.value.trim() && !/^[\d\s+()-]{9,}$/.test(v.phone.value.trim())) { setError(v.phone, 'Nomor telepon belum valid.'); valid = false; }
    if (!v.password?.value) { setError(v.password, 'Kata sandi wajib diisi.'); valid = false; }
    else if (v.password.value.length < 6) { setError(v.password, 'Kata sandi minimal 6 karakter.'); valid = false; }
    if (v.password?.value !== v.confirm?.value) { setError(v.confirm, 'Konfirmasi kata sandi tidak sama.'); valid = false; }
    if (!v.terms?.checked) { setError(v.terms, 'Kamu perlu menyetujui syarat dan ketentuan.'); valid = false; }

    if (!valid) {
      toast('Periksa lagi data pendaftaranmu.', 'error');
      form.querySelector('.has-error')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    btn.classList.add('is-loading');
    await new Promise(r => setTimeout(r, 900));

    KWU.register({
      name: v.name.value.trim(),
      email: v.email.value.trim(),
      phone: v.phone?.value.trim() || '',
      org: v.org?.value.trim() || ''
    });
    toast('Akun contoh berhasil dibuat.', 'success', 'Selamat bergabung');
    setTimeout(() => { location.href = 'akun.html'; }, 800);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initLogin();
  initRegister();
});
