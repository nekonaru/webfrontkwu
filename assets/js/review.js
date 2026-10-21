/* =========================================================
   KWU Campus Business Hub - review.js
   Ulasan produk: ringkasan rating, daftar ulasan, dan form
   untuk menulis ulasan baru (tersimpan di localStorage).
   ========================================================= */

function starRow(rating, size = 16) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    const filled = i <= Math.round(rating);
    html += `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="${filled ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L3.5 9.7l5.9-.8z"/></svg>`;
  }
  return html;
}

function initReviews(productId) {
  const root = document.getElementById('reviewsSection');
  if (!root || !productId) return;

  const product = KWU.productById(productId);
  const state = { showAll: false, rating: 5 };

  function render() {
    const summary = KWU.reviewSummary(productId);
    const all = KWU.getReviews(productId);
    const shown = state.showAll ? all : all.slice(0, 4);
    const user = KWU.currentUser();

    root.innerHTML = `
      <div class="review-layout">
        <aside class="review-summary">
          <div class="review-summary__score">
            <b>${summary.count ? summary.average.toFixed(1) : '-'}</b>
            <span class="rating" aria-label="Rating rata-rata">${starRow(summary.average, 18)}</span>
            <span class="small muted">${summary.count} ulasan</span>
          </div>
          <div class="review-bars">
            ${[5, 4, 3, 2, 1].map(n => {
              const c = summary.breakdown[n - 1] || 0;
              const pct = summary.count ? Math.round((c / summary.count) * 100) : 0;
              return `
                <div class="review-bar">
                  <span class="review-bar__label">${n} ${icon('star')}</span>
                  <span class="review-bar__track"><span class="review-bar__fill" style="width:${pct}%"></span></span>
                  <span class="review-bar__count">${c}</span>
                </div>`;
            }).join('')}
          </div>
          <button class="btn btn--primary btn--sm btn--block" type="button" data-review-scroll>
            ${icon('pen', '')} Tulis Ulasan
          </button>
        </aside>

        <div class="review-main">
          ${all.length ? shown.map(r => `
            <article class="review-item">
              <div class="review-item__head">
                <div class="avatar avatar--orange" style="width:38px;height:38px;font-size:.85rem">${(r.author || 'T').charAt(0).toUpperCase()}</div>
                <div>
                  <div class="strong small">${r.author || 'Tamu'}${r.mine ? ' <span class="badge badge--orange badge--plain">Ulasan kamu</span>' : ''}</div>
                  <div class="xs muted">${KWU.formatDate(r.date)}</div>
                </div>
                <span class="rating review-item__stars">${starRow(r.rating, 15)}</span>
              </div>
              <h4 class="review-item__title">${r.title || 'Ulasan'}</h4>
              <p class="review-item__text">${r.text || ''}</p>
            </article>`).join('')
            : `<p class="muted small">Belum ada ulasan untuk produk ini. Jadilah yang pertama.</p>`}

          ${all.length > 4 ? `
            <button class="btn btn--ghost btn--sm" data-review-toggle>
              ${state.showAll ? 'Tampilkan lebih sedikit' : 'Tampilkan semua ulasan (' + all.length + ')'}
            </button>` : ''}
        </div>
      </div>

      <form class="review-form" id="reviewForm" novalidate>
        <h3>Tulis ulasanmu</h3>
        <p class="small muted" style="margin-bottom:16px">Ulasan yang kamu tulis hanya tersimpan di peramban ini.</p>

        <div class="field">
          <label class="field__label">Rating <span class="req">*</span></label>
          <div class="star-input" role="radiogroup" aria-label="Pilih rating">
            ${[1, 2, 3, 4, 5].map(n => `
              <button type="button" data-star="${n}" class="star-input__btn ${n <= state.rating ? 'is-on' : ''}" aria-label="${n} bintang" aria-pressed="${n === state.rating}">
                ${icon('star')}
              </button>`).join('')}
            <span class="small muted" id="ratingLabel">${state.rating} dari 5</span>
          </div>
        </div>

        <div class="field">
          <label class="field__label" for="reviewName">Nama kamu</label>
          <input class="input" id="reviewName" placeholder="Nama tampilan" value="${user ? user.name : ''}">
        </div>

        <div class="field">
          <label class="field__label" for="reviewTitle">Judul ulasan</label>
          <input class="input" id="reviewTitle" placeholder="Ringkas kesanmu, misalnya: Rasanya konsisten" maxlength="60">
        </div>

        <div class="field">
          <label class="field__label" for="reviewText">Ulasan <span class="req">*</span></label>
          <textarea class="textarea" id="reviewText" placeholder="Ceritakan pengalamanmu dengan produk ini..."></textarea>
          <div class="field__error">
            ${icon('alert')}<span></span>
          </div>
          <div class="field__hint">Minimal 10 karakter.</div>
        </div>

        <button class="btn btn--primary" type="submit">Kirim Ulasan</button>
      </form>`;

    bind();
  }

  function bind() {
    root.querySelectorAll('[data-star]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.rating = Number(btn.dataset.star);
        root.querySelectorAll('[data-star]').forEach(b => {
          b.classList.toggle('is-on', Number(b.dataset.star) <= state.rating);
          b.setAttribute('aria-pressed', String(Number(b.dataset.star) === state.rating));
        });
        const label = root.querySelector('#ratingLabel');
        if (label) label.textContent = state.rating + ' dari 5';
      });
    });

    root.querySelector('[data-review-toggle]')?.addEventListener('click', () => {
      state.showAll = !state.showAll;
      render();
    });

    root.querySelector('[data-review-scroll]')?.addEventListener('click', () => {
      const form = root.querySelector('#reviewForm');
      form?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => root.querySelector('#reviewText')?.focus(), 400);
    });

    const form = root.querySelector('#reviewForm');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const textEl = form.querySelector('#reviewText');
      const field = textEl.closest('.field');
      const errorEl = field?.querySelector('.field__error span');
      const text = textEl.value.trim();

      if (text.length < 10) {
        field?.classList.add('has-error');
        if (errorEl) errorEl.textContent = 'Ulasan minimal 10 karakter.';
        textEl.focus();
        return;
      }
      field?.classList.remove('has-error');

      const author = (form.querySelector('#reviewName').value || '').trim() || 'Tamu';
      KWU.addReview(productId, {
        author,
        rating: state.rating,
        title: form.querySelector('#reviewTitle').value,
        text
      });

      state.showAll = true;
      render();
      toast('Ulasanmu tersimpan di peramban ini.', 'success', 'Terima kasih');
      root.querySelector('.review-main')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  render();
}
