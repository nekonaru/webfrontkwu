/* =========================================================
   KWU Campus Business Hub - forms.js
   Formulir pengajuan kerja sama (RFQ, partnership, program)
   dengan langkah, validasi inline, tinjauan, dan nomor pengajuan.
   ========================================================= */

function initRequestForms() {
  const forms = document.querySelectorAll('[data-request-form]');
  forms.forEach(form => initRequestForm(form));
}

function initRequestForm(form) {
  const steps = [...form.querySelectorAll('[data-step]')];
  const stepDots = [...form.querySelectorAll('.step')];
  const prevBtn = form.querySelector('[data-prev]');
  const nextBtn = form.querySelector('[data-next]');
  const progress = form.querySelector('[data-progress]');
  const successBox = form.parentElement.querySelector('[data-success]') || document.querySelector('[data-success]');
  let current = 0;

  /* ---------- Validasi ---------- */
  function validateStep(stepEl) {
    let ok = true;
    stepEl.querySelectorAll('[data-validate]').forEach(el => {
      const value = el.type === 'checkbox' ? (el.checked ? 'on' : '') : (el.value || '').trim();
      const rules = el.dataset.validate.split(/\s+/).filter(Boolean);
      const field = el.closest('.field');
      const errorEl = field?.querySelector('.field__error span');
      let message = '';

      for (const rule of rules) {
        if (rule === 'required' && !value) { message = 'Kolom ini wajib diisi.'; break; }
        if (rule === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) { message = 'Format email belum benar.'; break; }
        if (rule === 'tel' && value && !/^[\d\s+()-]{9,}$/.test(value)) { message = 'Nomor kontak belum valid.'; break; }
        if (rule === 'number' && value && isNaN(Number(value))) { message = 'Isi dengan angka.'; break; }
        if (rule === 'minlength' && value && value.length < Number(el.dataset.minlength || 10)) { message = `Minimal ${el.dataset.minlength || 10} karakter.`; break; }
        if (rule === 'min' && value && Number(value) < Number(el.dataset.min || 1)) { message = `Minimal ${el.dataset.min || 1}.`; break; }
      }

      if (message) {
        if (errorEl) errorEl.textContent = message;
        field?.classList.add('has-error');
        ok = false;
      } else {
        field?.classList.remove('has-error');
      }
    });
    return ok;
  }

  form.querySelectorAll('[data-validate]').forEach(el => {
    el.addEventListener('blur', () => {
      const field = el.closest('.field');
      if (field?.classList.contains('has-error')) validateStep(el.closest('[data-step]'));
    });
    el.addEventListener('input', () => {
      const field = el.closest('.field');
      if (field?.classList.contains('has-error')) validateStep(el.closest('[data-step]'));
    });
  });

  /* ---------- Dinamis baris produk RFQ ---------- */
  const productRows = form.querySelector('[data-product-rows]');
  if (productRows) {
    const select = form.querySelector('[data-product-select]');
    if (select) {
      select.innerHTML = '<option value="">Pilih produk</option>' +
        KWU_DATA.products.map(p => `<option value="${p.name}">${p.name} (${KWU.rupiah(p.price)})</option>`).join('');
    }
    const addBtn = form.querySelector('[data-add-row]');
    const renderRows = () => {
      const rows = [...productRows.querySelectorAll('[data-product-row]')];
      if (!rows.length) {
        productRows.innerHTML = '<p class="small muted" data-empty-row>Tambah minimal satu produk yang dibutuhkan.</p>';
        return;
      }
      rows.forEach((row, i) => {
        const label = row.querySelector('[data-row-index]');
        if (label) label.textContent = 'Produk ' + (i + 1);
      });
    };
    const addRow = (productName, qty) => {
      const empty = productRows.querySelector('[data-empty-row]');
      if (empty) empty.remove();
      const row = document.createElement('div');
      row.className = 'row-wrap';
      row.setAttribute('data-product-row', '');
      row.style.cssText = 'gap:10px;margin-bottom:10px;align-items:center';
      row.innerHTML = `
        <span class="xs muted strong" data-row-index style="flex:0 0 64px">Produk</span>
        <select class="select" data-validate="required" style="flex:2;min-width:180px">
          <option value="">Pilih produk</option>
          ${KWU_DATA.products.map(p => `<option value="${p.name}">${p.name}</option>`).join('')}
        </select>
        <input class="input" type="number" min="1" value="${qty || 1}" placeholder="Jumlah" data-validate="required" style="flex:0 0 110px">
        <button type="button" class="icon-btn" data-remove-row aria-label="Hapus baris">${icon('trash')}</button>`;
      if (productName) {
        const sel = row.querySelector('select');
        if ([...sel.options].some(o => o.value === productName)) sel.value = productName;
      }
      row.querySelector('[data-remove-row]').addEventListener('click', () => {
        row.remove();
        renderRows();
      });
      productRows.appendChild(row);
      renderRows();
    };
    addBtn?.addEventListener('click', () => addRow());

    // Prefill dari halaman detail produk (?produk=...)
    const prefill = qs('produk');
    if (prefill) {
      addRow(prefill, 1);
      const note = form.querySelector('[data-prefill-note]');
      if (note) note.classList.remove('hide');
    }
    renderRows();
  }

  /* ---------- Navigasi langkah ---------- */
  function showStep(index, scroll = true) {
    current = index;
    steps.forEach((s, i) => s.classList.toggle('hide', i !== index));
    stepDots.forEach((d, i) => {
      d.classList.toggle('is-active', i === index);
      d.classList.toggle('is-done', i < index);
    });
    if (progress) progress.style.width = ((index) / (steps.length - 1)) * 100 + '%';
    prevBtn?.classList.toggle('is-disabled', index === 0);
    if (nextBtn) nextBtn.textContent = index === steps.length - 1 ? 'Kirim Pengajuan' : 'Berikutnya';
    if (index === steps.length - 1) renderReview();
    if (scroll) form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function collect(stepEl) {
    const data = {};
    stepEl.querySelectorAll('[name]').forEach(el => {
      if (el.type === 'radio') {
        if (el.checked) data[el.name] = el.value;
      } else if (el.type === 'checkbox') {
        data[el.name] = el.checked;
      } else {
        data[el.name] = el.value.trim();
      }
    });
    return data;
  }

  function renderReview() {
    const box = form.querySelector('[data-review]');
    if (!box) return;
    const all = {};
    steps.forEach(s => Object.assign(all, collect(s)));

    const rows = form.querySelector('[data-product-rows]');
    if (rows) {
      const items = [...rows.querySelectorAll('[data-product-row]')].map(r => {
        const name = r.querySelector('select')?.value || '-';
        const qty = r.querySelector('input')?.value || '1';
        return { name, qty };
      }).filter(i => i.name && i.name !== '-');
      all['Daftar produk'] = items.length
        ? items.map(i => `${i.name} (${i.qty})`).join(', ')
        : '-';
    }

    const labels = {};
    form.querySelectorAll('[name]').forEach(el => {
      const field = el.closest('.field');
      const label = field?.querySelector('.field__label');
      if (label) labels[el.name] = label.textContent.replace('*', '').trim();
    });

    box.innerHTML = Object.entries(all)
      .filter(([, v]) => v !== '' && v !== undefined && v !== false)
      .map(([k, v]) => `
        <div style="display:flex;justify-content:space-between;gap:16px;padding:9px 0;border-bottom:1px dashed var(--line)">
          <span class="small muted">${labels[k] || k}</span>
          <span class="small strong" style="text-align:right">${v === true ? 'Ya' : v}</span>
        </div>`).join('');
  }

  nextBtn?.addEventListener('click', () => {
    if (current === steps.length - 1) {
      form.requestSubmit();
      return;
    }
    const stepEl = steps[current];
    if (!validateStep(stepEl)) {
      toast('Periksa lagi kolom yang ditandai.', 'error', 'Ada data yang belum tepat');
      stepEl.querySelector('.has-error')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    showStep(current + 1);
  });

  prevBtn?.addEventListener('click', () => {
    if (current > 0) showStep(current - 1);
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const stepEl = steps[current];
    if (!validateStep(stepEl)) {
      toast('Periksa lagi kolom yang ditandai.', 'error', 'Ada data yang belum tepat');
      return;
    }

    const data = {};
    steps.forEach(s => Object.assign(data, collect(s)));
    const rows = form.querySelector('[data-product-rows]');
    if (rows) {
      data['Daftar produk'] = [...rows.querySelectorAll('[data-product-row]')]
        .map(r => `${r.querySelector('select')?.value || '-'} (${r.querySelector('input')?.value || 1})`)
        .join(', ') || '-';
    }

    nextBtn.classList.add('is-loading');
    await new Promise(r => setTimeout(r, 900));

    const request = KWU.createRequest({
      type: form.dataset.type,
      typeLabel: form.dataset.typeLabel,
      data
    });

    form.classList.add('hide');
    if (successBox) {
      successBox.classList.remove('hide');
      successBox.innerHTML = `
        <div class="success-hero">
          <div class="success-mark">${icon('checkCircle')}</div>
          <h2 class="h2" style="margin-bottom:10px">Pengajuan berhasil dicatat</h2>
          <p class="muted" style="max-width:540px;margin:0 auto 18px">
            Nomor pengajuan <b>${request.id}</b> sudah dibuat. Simpan nomor ini untuk memantau status pengajuanmu.
          </p>
          <div class="row" style="justify-content:center;gap:12px;flex-wrap:wrap">
            <span class="code-pill">${icon('file')} ${request.id}</span>
            ${requestStatusBadge(request.status)}
          </div>
          <div class="row-wrap" style="justify-content:center;margin-top:26px">
            <a class="btn btn--primary" href="akun.html#pengajuan">Lihat Status Pengajuan</a>
            <a class="btn btn--ghost" href="kolaborasi.html">Kembali ke Halaman Kolaborasi</a>
          </div>
        </div>
        <div class="notice notice--orange" style="margin-top:26px;justify-content:center">
          ${icon('info')}
          <div>Status <b>simulasi</b>. Pengajuan ini belum terkirim ke server KWU dan tidak mengikat kerja sama apa pun.</div>
        </div>`;
      successBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    toast('Pengajuan contoh berhasil dibuat.', 'success', 'Nomor pengajuan terbit');
  });

  showStep(0, false);
}

/* ---------- Formulir kontak di Pusat Bantuan ---------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = form.querySelector('#contactName');
    const email = form.querySelector('#contactEmail');
    const message = form.querySelector('#contactMessage');
    let valid = true;
    [name, email, message].forEach(el => {
      const field = el.closest('.field');
      field.classList.remove('has-error');
      const value = el.value.trim();
      const errorEl = field.querySelector('.field__error span');
      if (!value) { field.classList.add('has-error'); errorEl.textContent = 'Kolom ini wajib diisi.'; valid = false; }
      else if (el === email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) { field.classList.add('has-error'); errorEl.textContent = 'Format email belum benar.'; valid = false; }
    });
    if (!valid) { toast('Periksa lagi data kontakmu.', 'error'); return; }

    const btn = form.querySelector('button[type="submit"]');
    btn.classList.add('is-loading');
    await new Promise(r => setTimeout(r, 900));
    btn.classList.remove('is-loading');
    form.reset();
    toast('Pesan contoh tersimpan di peramban. Admin KWU belum menerima pesan ini.', 'success', 'Simulasi terkirim');
  });
}

/* ---------- FAQ di Pusat Bantuan ---------- */
function initFaq() {
  const wrap = document.getElementById('faqAccordion');
  if (!wrap) return;

  const render = (items) => {
    if (!items.length) {
      wrap.innerHTML = `
        <div class="empty-state">
          <div class="empty-state__icon">${icon('help')}</div>
          <h3>Pertanyaan tidak ditemukan</h3>
          <p>Coba kata kunci lain, atau hubungi admin lewat formulir di bawah.</p>
        </div>`;
      return;
    }
    wrap.innerHTML = items.map((f, i) => `
      <div class="accordion__item ${i === 0 ? 'is-open' : ''}">
        <button class="accordion__trigger" aria-expanded="${i === 0}">
          ${f.q}
          <span class="accordion__icon">${icon('chevronDown')}</span>
        </button>
        <div class="accordion__panel" ${i === 0 ? 'style="max-height:220px"' : ''}>
          <div class="accordion__content">${f.a}</div>
        </div>
      </div>`).join('');
    initAccordion();
  };

  const all = KWU_DATA.faqs;
  const categoryOf = (f) => {
    const text = (f.q + ' ' + f.a).toLowerCase();
    if (text.includes('grosir') || text.includes('rfq') || text.includes('pembelian')) return 'grosir';
    if (text.includes('login') || text.includes('akun') || text.includes('data transaksi')) return 'akun';
    return 'transaksi';
  };

  let filter = 'semua';
  let query = '';

  const apply = () => {
    const items = all.filter(f => {
      const matchFilter = filter === 'semua' || categoryOf(f) === filter;
      const matchQuery = !query || (f.q + ' ' + f.a).toLowerCase().includes(query);
      return matchFilter && matchQuery;
    });
    render(items);
  };

  document.querySelectorAll('[data-faq-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-faq-filter]').forEach(b => b.classList.toggle('is-active', b === btn));
      filter = btn.dataset.faqFilter;
      apply();
    });
  });

  const search = document.getElementById('faqSearch');
  let timer;
  search?.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      query = search.value.trim().toLowerCase();
      apply();
    }, 200);
  });

  apply();
}

document.addEventListener('DOMContentLoaded', () => {
  initRequestForms();
  initContactForm();
  initFaq();
});
