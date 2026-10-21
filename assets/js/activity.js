/* =========================================================
   KWU Campus Business Hub - activity.js
   Halaman Aktivitas & Berita: daftar kegiatan dan agenda.
   ========================================================= */

function initActivity() {
  const list = document.getElementById('activityList');
  if (list) {
    const items = KWU_DATA.activities.map((a, i) => `
      <article class="article-card reveal" data-delay="${(i % 3) + 1}" id="${a.slug}">
        <div class="article-card__media">
          <img src="${a.image}" alt="${a.title}" loading="lazy" width="400" height="225">
        </div>
        <div class="article-card__body">
          <div class="article-card__meta">
            <span class="badge badge--orange badge--plain">${a.category}</span>
            <span>${new Date(a.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span>· ${a.readTime} menit</span>
          </div>
          <h3>${a.title}</h3>
          <p>${a.excerpt}</p>
          <p class="small muted" style="margin-top:auto">${a.body}</p>
        </div>
      </article>`).join('');
    list.innerHTML = items;
  }

  const events = document.getElementById('activityEvents');
  if (events) {
    events.innerHTML = KWU_DATA.events.map((e, i) => `
      <div class="event-item reveal" data-delay="${i + 1}">
        <div class="event-date"><b>${e.day}</b><span>${e.month}</span></div>
        <div>
          <div class="strong">${e.title}</div>
          <div class="small muted">${e.desc} · ${e.location}</div>
        </div>
      </div>`).join('');
  }

  /* Filter kategori sederhana */
  const chips = [...document.querySelectorAll('.chip')].filter(c => c.textContent.trim() !== 'Semua' || c.dataset.cat);
  const cards = [...document.querySelectorAll('#activityList .article-card')];
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach(c => c.classList.toggle('is-active', c === chip));
      const label = chip.textContent.trim();
      cards.forEach(card => {
        const cat = card.querySelector('.badge')?.textContent.trim();
        const show = label === 'Semua' || cat === label;
        card.classList.toggle('hide', !show);
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', initActivity);
