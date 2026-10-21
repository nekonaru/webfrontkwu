/* =========================================================
   KWU Campus Business Hub - home.js
   Render bagian dinamis pada beranda.
   ========================================================= */

function initHome() {
  /* Kategori */
  const catWrap = document.getElementById('homeCategories');
  if (catWrap) {
    catWrap.innerHTML = KWU_DATA.categories.map((c, i) => `
      <a class="cat-tile reveal" data-delay="${(i % 3) + 1}" href="katalog.html?kategori=${c.id}">
        <div class="cat-tile__media">
          <img src="${c.image}" alt="${c.name}" loading="lazy" width="400" height="250">
        </div>
        <h3>${c.name}</h3>
        <p>${c.desc}</p>
        <span class="cat-tile__count">Lihat produk
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:15px;height:15px"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </span>
      </a>`).join('');
  }

  /* Produk unggulan */
  const featured = document.getElementById('homeFeatured');
  if (featured) {
    const list = KWU_DATA.products.filter(p => p.isFeatured).slice(0, 6);
    renderProductGrid(featured, list, { emptyTitle: 'Belum ada produk unggulan' });
  }

  /* Produk terbaru */
  const latest = document.getElementById('homeLatest');
  if (latest) {
    const list = [...KWU_DATA.products].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)).slice(0, 4);
    renderProductGrid(latest, list, { emptyTitle: 'Belum ada produk terbaru' });
  }

  /* Aktivitas terbaru */
  const acts = document.getElementById('homeActivities');
  if (acts) {
    acts.innerHTML = KWU_DATA.activities.slice(0, 3).map((a, i) => `
      <a class="article-card reveal" data-delay="${i + 1}" href="aktivitas.html#${a.slug}">
        <div class="article-card__media">
          <img src="${a.image}" alt="${a.title}" loading="lazy" width="400" height="225">
        </div>
        <div class="article-card__body">
          <div class="article-card__meta">
            <span class="badge badge--orange badge--plain">${a.category}</span>
            <span>${new Date(a.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>
          <h3>${a.title}</h3>
          <p>${a.excerpt}</p>
          <span class="link-arrow" style="margin-top:auto">Baca selengkapnya
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </span>
        </div>
      </a>`).join('');
  }

  /* Agenda kegiatan */
  const events = document.getElementById('homeEvents');
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

  /* Jalur kolaborasi */
  const paths = document.getElementById('homePaths');
  if (paths) {
    const iconMap = { box: 'M21 8.5l-9-5-9 5v7l9 5 9-5zM3 8.5l9 5 9-5M12 21v-7.5', handshake: 'M11 17l2 2 3-3 3 2 3-3-5-5-3 3-4-4-5 5 6 6zM2 13l4-4 4 2', spark: 'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18' };
    paths.innerHTML = KWU_DATA.paths.map((p, i) => `
      <a class="path-card reveal" data-delay="${i + 1}" href="${p.href}">
        <span class="path-card__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="${iconMap[p.icon]}"/></svg>
        </span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <ul>${p.points.map(pt => `<li>${pt}</li>`).join('')}</ul>
        <span class="btn btn--ghost btn--sm" style="align-self:flex-start">${p.cta}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:15px;height:15px"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </span>
      </a>`).join('');
  }
}

document.addEventListener('DOMContentLoaded', initHome);
