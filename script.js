/* ============================================================
   GM CONBLOCK - Main JavaScript
   Premium Company Profile | All Interactions & Data
   ============================================================ */

'use strict';

/* ===== PRODUCT DATA ===== */
const PRODUCTS = [

{
  id: 1,
  name: 'Paving Natural',
  category: 'paving',
  catLabel: 'PAVING BLOCK',
  desc: 'Paving natural ukuran 20x20.',
  img: 'paving n.png',
  unit:'m2',

  prices: [
    {
      ukuran: 'Tebal 6 cm (20x20)',
      kirim: 90000,
      ambil: 85000
    },
    {
      ukuran: 'Tebal 8 cm (20x20)',
      kirim: 95000,
      ambil: 100000
    }
  ]
},
{
    id:2,
    name:'Paving Merah',
    category:'paving',
    catLabel:'Paving Block',
    desc:'Paving merah kualitas premium.',
    img:'paving m.png',
    unit:'m2',

    prices:[
        {
            ukuran:'Tebal 6 cm (20x20)',
            ambil:120000,
            kirim:125000
        },
        {
            ukuran:'Tebal 8 cm (20x20)',
            ambil:135000,
            kirim:140000
        }
    ]
},
{
    id:3,
    name:'Paving Natural 20x10',
    category:'paving',
    catLabel:'Paving Block',
    desc:'Paving natural kualitas premium.',
    img:'paving n k.png',
    unit:'m2',

    prices:[
        {
            ukuran:'Tebal 6 cm (20x10)',
            ambil:95000,
            kirim:90000
        },
        {
            ukuran:'Tebal 8 cm (20x10)',
            ambil:105000,
            kirim:110000
        }
    ]
},
{
    id:4,
    name:'Paving Merah 20x10',
    category:'paving',
    catLabel:'Paving Block',
    desc:'Paving natural kualitas premium.',
    img:'paving m k.png',
    unit:'m2',

    prices:[
        {
            ukuran:'Tebal 6 cm (20x10)',
            ambil:125000,
            kirim:130000
        },
        {
            ukuran:'Tebal 8 cm (20x10)',
            ambil:130000,
            kirim:145000
        }
    ]
},
{
    id:5,
    name:'Grassblock',
    category:'paving',
    catLabel:'paving',
    desc:'Grassblock kualitas premium.',
    img:'grassblock.png',
    unit:'m2',

    prices:[
        {
            ukuran:'Ukuran Standar',
            ambil:105000,
            kirim:110000
        }
    ]
},
{
    id:6,
    name:'Kanstin',
    category:'kanstin',
    catLabel:'kanstin',
    desc:'Kanstin premium tersedia ukuran besar dan kecil dengan kualitas premium.',
    img:'kanstin biasa.png',
    className:'kanstin-img',
    unit:'pcs',

    prices:[
        {
            ukuran:'Besar (50x30x15)',
            ambil:60000,
            kirim:65000
        },
        {
            ukuran:'Kecil (50x15x20)',
            ambil:55000,
            kirim:60000
        }
    ]
},
{
    id:7,
    name:'Kanstin Kursi',
    category:'kanstin',
    catLabel:'KANSTIN',
    desc:'Kanstin kursi premium.',
    img:'kansten kursi.png',
    unit:'pcs',

    prices:[
        {
            ukuran:'Standar',
            ambil:70000,
            kirim:75000
        },
    ]
},
{
    id:7,
    name:'Kanstin Lubang',
    category:'kanstin',
    catLabel:'KANSTIN',
    desc:'Kanstin kursi premium.',
    img:'kansten lubang.png',
    unit:'pcs',

    prices:[
        {
            ukuran:'Standar',
            ambil:60000,
            kirim:65000
        },
    ]
},
{
    id:9,
    name:'Box Culvert',
    category:'precast',
    catLabel:'precast',
    desc:'Box Culvert berbagai ukuran.',
    img:'box.png',
    unit:'pcs',

    prices:[
        {
            ukuran:'60x60x120',
            kirim:2100000
        },
        {
            ukuran:'80x80x120',
            kirim:2600000
        },
        {
            ukuran:'100x100x120',
            kirim:3300000
        },
        {
            ukuran:'120x120x120',
            kirim:5100000
        }
    ]
},
{
    id:10,
    name:'U-Ditch',
    category:'precast',
    catLabel:'precast',
    desc:'U-Ditch berbagai ukuran.',
    img:'uditch.png',
    unit:'pcs',

    prices:[
        {
            ukuran:'30x30x120cm| TS 6,5|TB 8 cm',
            kirim:375000
        },
        {
            ukuran:'30x40x120cm| TS 6,5|TB 8 cm',
            kirim:400000
        },
        {
            ukuran:'40x40x120cm| TS 6,5|TB 10 cm',
            kirim:485000
        },
        {
            ukuran:'40x50x120cm| TS 6,5|TB 10 cm',
            kirim:550000
        },
        {
            ukuran:'50x50x120cm| TS 6,5|TB 10 cm',
            kirim:595000
        },
        {
            ukuran:'50x60x120cm| TS 8 |TB 10 cm',
            kirim:650000
        },
        {
            ukuran:'60x60x120cm| TS 8 |TB 10 cm',
            kirim:715000
        },
        {
            ukuran:'60x70x120cm| TS 8 |TB 10 cm',
            kirim:805000
        },
        {
            ukuran:'70x70x120cm| TS 9 |TB 10 cm',
            kirim:1100000
        },
        {
            ukuran:'80x80x120cm| TS 10 |TB 10 cm',
            kirim:1550000
        },
        {
            ukuran:'80x100x120cm| TS 10 |TB 10 cm',
            kirim:1750000
        },
        {
            ukuran:'100x100x120cm| TS 12,5 |TB 12,5 cm',
            kirim:1900000
        },
        {
            ukuran:'120x120x120cm| TS 15 |TB 15 cm',
            kirim:3100000
        },
    ]
},

{
    id:11,
    name:'Tutup U-Ditch',
    category:'precast',
    catLabel:'precast',
    desc:'Tutup U-Ditch berbagai ukuran.',
    img:'t uditch.png',
    unit:'pcs',

    prices:[
        {
            ukuran:'70x120| TB 15',
            kirim:805000
        },
        {
            ukuran:'80x120| TB 15',
            kirim:905000
        },
        {
            ukuran:'100x120| TB 15',
            kirim:1100000
        },
        {
            ukuran:'120x120| TB 20',
            kirim:1350000
        }
    ]
}

];

/* ===== FORMAT CURRENCY ===== */
function formatRupiah(amount) {
  return 'Rp ' + amount.toLocaleString('id-ID');
}

/* ===== RENDER PRICE ===== */
function renderPrice(ambil, kirim, unit) {
  const hasAmbil = ambil !== null && ambil !== undefined && ambil !== '';
  const hasKirim = kirim !== null && kirim !== undefined && kirim !== '';

  if (!hasAmbil && !hasKirim) {
    return `<div class="price-contact">Hubungi Admin</div>`;
  }

  let html = '<div class="price-row">';
  if (hasAmbil) {
    html += `<div class="price-item">
      <span class="price-label">Harga Ambil</span>
      <span class="price-value">${formatRupiah(ambil)}</span>
    </div>`;
  }
  if (hasKirim) {
    html += `<div class="price-item">
      <span class="price-label">Harga Kirim</span>
      <span class="price-value">${formatRupiah(kirim)}</span>
    </div>`;
  }
  html += '</div>';
  html += `<div class="price-unit">per ${unit}</div>`;
  return html;
}

/* ===== BUILD PRODUCT CARD ===== */
function buildCard(prod) {
  const waMsg = encodeURIComponent(
    `Halo GM CONBLOCK, saya tertarik dengan produk *${prod.name}*. Boleh minta info lebih lanjut?`
  );
  const waLink =
    `https://wa.me/6281238978954?text=${waMsg}`;
  return `
    <div class="product-card"
    data-cat="${prod.category}"
    data-name="${prod.name.toLowerCase()}">
      <div class="product-img-wrap">
        <img
        src="${prod.img}"
        alt="${prod.name}"
        class="${prod.className || ''}"
        loading="lazy" />
        <span class="product-badge">
        ${prod.catLabel}
        </span>
      </div>
      <div class="product-body">
        <h3 class="product-name">
        ${prod.name}
        </h3>
        <p class="product-desc">
        ${prod.desc}
        </p>
        ${
          prod.prices && prod.prices.length > 0
          ? `
          <button
          class="btn-harga"
          onclick='openPricePopup(${JSON.stringify(prod.prices)})'>
          Lihat Harga
          </button>
          `
          : `
          <div class="price-contact">
          Hubungi Admin
          </div>
          `
        }
        <a href="${waLink}"
        target="_blank"
        class="btn-wa-card"
        rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
          </svg>
          Tanya WhatsApp
        </a>
      </div>
    </div>
  `;
}

/* ===== RENDER PRODUCTS ===== */
let allProducts = [...PRODUCTS];
let activeFilter = 'all';
let searchQuery = '';

function renderProducts() {
  const grid = document.getElementById('product-grid');
  const emptyState = document.getElementById('empty-state');
  if (!grid) return;

  let filtered = allProducts.filter(p => {
    const matchCat = activeFilter === 'all' || p.category === activeFilter;
    const matchSearch = p.name.toLowerCase().includes(searchQuery) ||
                        p.desc.toLowerCase().includes(searchQuery) ||
                        p.catLabel.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.style.display = 'block';
  } else {
    emptyState.style.display = 'none';
    grid.innerHTML = filtered.map(buildCard).join('');
  }

  // Re-trigger scroll reveal for new cards
  observeReveal();

  // Re-render price table
  renderPriceTable();
}

/* ===== RENDER PRICE TABLE ===== */
function renderPriceTable() {
  const tbody = document.getElementById('price-tbody');
  if (!tbody) return;

  tbody.innerHTML = allProducts.map((p, i) => {

    const firstPrice =
      p.prices && p.prices.length > 0
      ? p.prices[0]
      : null;

    return `
      <tr>
        <td>${i + 1}</td>

        <td>${p.name}</td>

        <td>
          <span class="cat-badge">
            ${p.catLabel}
          </span>
        </td>

        <td class="price-cell">
          ${
            firstPrice?.ambil
            ? formatRupiah(firstPrice.ambil)
            : 'Hubungi Admin'
          }
        </td>

        <td class="price-cell">
          ${
            firstPrice?.kirim
            ? formatRupiah(firstPrice.kirim)
            : 'Hubungi Admin'
          }
        </td>
        <td>
         ${p.unit || '-'}
        </td>
      </tr>
    `;
  }).join('');
}

/* ===== FILTER BUTTONS ===== */
function initFilters() {
  const tabs = document.getElementById('filter-tabs');
  if (!tabs) return;
  tabs.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderProducts();
  });
}

/* ===== SEARCH ===== */
function initSearch() {
  const inp = document.getElementById('search-input');
  if (!inp) return;
  inp.addEventListener('input', () => {
    searchQuery = inp.value.trim().toLowerCase();
    renderProducts();
  });
}

/* ===== ADMIN FORM ===== */
function initAdminForm() {
  const form = document.getElementById('admin-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('prod-name').value.trim();
    const cat = document.getElementById('prod-cat').value;
    const img = document.getElementById('prod-img').value.trim();
    const unit = document.getElementById('prod-unit').value.trim();
    const desc = document.getElementById('prod-desc').value.trim();
    const ambilRaw = document.getElementById('prod-price-ambil').value.trim();
    const kirimRaw = document.getElementById('prod-price-kirim').value.trim();

    // Validation
    if (!name || !cat || !unit || !desc) {
      showToast('Lengkapi semua field wajib!', 'error');
      return;
    }

    const catLabels = {
      paving: 'Paving Block', conblock: 'Conblock', batako: 'Batako',
      kanstin: 'Kanstin', material: 'Material', alat: 'Sewa Alat', jasa: 'Jasa'
    };

    const defaultImgs = {
      paving: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',
      conblock: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=80',
      batako: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&q=80',
      kanstin: 'https://images.unsplash.com/photo-1445991842772-097fea258e7b?w=500&q=80',
      material: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=500&q=80',
      alat: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80',
      jasa: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=500&q=80'
    };

    const newProd = {
      id: Date.now(),
      name,
      category: cat,
      catLabel: catLabels[cat] || cat,
      desc,
      priceAmbil: ambilRaw !== '' ? parseInt(ambilRaw) : null,
      priceKirim: kirimRaw !== '' ? parseInt(kirimRaw) : null,
      unit,
      img: img !== '' ? img : defaultImgs[cat]
    };

    allProducts.unshift(newProd);
    renderProducts();
    form.reset();
    showToast('✓ Produk berhasil ditambahkan!', 'success');

    // Scroll to katalog
    document.getElementById('katalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

/* ===== TOAST NOTIFICATION ===== */
function showToast(msg, type = '') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.className = `toast show ${type}`;
  setTimeout(() => { toast.className = 'toast'; }, 3500);
}

/* ===== LOADING SCREEN ===== */
function initLoader() {
  const loader = document.getElementById('loading-screen');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('loaded');
    }, 2200);
  });
}

/* ===== NAVBAR ===== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNav();
  }, { passive: true });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = navbar.offsetHeight + 10;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        // Close mobile menu if open
        closeMobileMenu();
      }
    });
  });
}

/* ===== ACTIVE NAV UPDATE ===== */
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  let current = '';

  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
}

/* ===== MOBILE MENU ===== */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-overlay');
  const close = document.getElementById('mobile-close');

  if (!hamburger) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    overlay.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  [overlay, close].forEach(el => {
    if (el) el.addEventListener('click', closeMobileMenu);
  });
}

function closeMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-overlay');
  if (hamburger) hamburger.classList.remove('open');
  if (mobileMenu) mobileMenu.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* ===== SCROLL REVEAL ===== */
function observeReveal() {
  const items = document.querySelectorAll('.reveal-up:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible)');
  if (!items.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  items.forEach(item => observer.observe(item));
}

/* ===== COUNTER ANIMATION ===== */
function animateCounters() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const duration = 1800;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
          } else {
            el.textContent = Math.floor(current);
          }
        }, 16);

        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

/* ===== BACK TO TOP ===== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ===== LIGHTBOX ===== */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const items = document.querySelectorAll('.masonry-item');

  if (!lightbox || !items.length) return;

  let currentIdx = 0;
  const srcs = Array.from(items).map(item => item.dataset.src);

  function openLightbox(idx) {
    currentIdx = idx;
    lbImg.src = srcs[currentIdx];
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  items.forEach((item, i) => {
    item.addEventListener('click', () => openLightbox(i));
  });

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  prevBtn.addEventListener('click', e => {
    e.stopPropagation();
    currentIdx = (currentIdx - 1 + srcs.length) % srcs.length;
    lbImg.src = srcs[currentIdx];
  });

  nextBtn.addEventListener('click', e => {
    e.stopPropagation();
    currentIdx = (currentIdx + 1) % srcs.length;
    lbImg.src = srcs[currentIdx];
  });

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
  });
}

/* ===== TESTIMONIAL SLIDER ===== */
function initTestiSlider() {
  const slider = document.getElementById('testi-slider');
  const dotsWrap = document.getElementById('testi-dots');
  const prevBtn = document.getElementById('testi-prev');
  const nextBtn = document.getElementById('testi-next');

  if (!slider) return;

  const cards = slider.querySelectorAll('.testi-card');
  let total = cards.length;
  let current = 0;

  // Determine cards per view
  function cardsPerView() {
    return window.innerWidth <= 768 ? 1 : 2;
  }

  let perView = cardsPerView();
  let maxIndex = Math.ceil(total / perView) - 1;

  // Create dots
  function buildDots() {
    perView = cardsPerView();
    maxIndex = Math.max(0, Math.ceil(total / perView) - 1);
    dotsWrap.innerHTML = '';
    for (let i = 0; i <= maxIndex; i++) {
      const dot = document.createElement('button');
      dot.className = `testi-dot ${i === current ? 'active' : ''}`;
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    }
  }

  function goTo(idx) {
    current = Math.max(0, Math.min(idx, maxIndex));
    const cardWidth = cards[0].offsetWidth;
    const gap = 24;
    const offset = current * (cardWidth + gap) * perView;
    slider.style.transform = `translateX(-${offset}px)`;
    dotsWrap.querySelectorAll('.testi-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  // Auto-play
  let autoPlay = setInterval(() => goTo(current < maxIndex ? current + 1 : 0), 5000);
  slider.addEventListener('mouseenter', () => clearInterval(autoPlay));
  slider.addEventListener('mouseleave', () => {
    autoPlay = setInterval(() => goTo(current < maxIndex ? current + 1 : 0), 5000);
  });

  // Touch swipe
  let touchStartX = 0;
  slider.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  slider.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
  });

  buildDots();
  goTo(0);

  // Rebuild on resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      current = 0;
      buildDots();
      goTo(0);
    }, 200);
  });
}

/* ===== KONTAK FORM ===== */
function initKontakForm() {
  const form = document.getElementById('kontak-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('k-name').value.trim();
    const message = document.getElementById('k-message').value.trim();

    if (!name || !message) {
      showToast('Lengkapi nama dan pesan!', 'error');
      return;
    }

    // Simulate send (redirect to WhatsApp)
    const phone = document.getElementById('k-phone').value.trim();
    const subject = document.getElementById('k-subject').value;
    const waMsg = encodeURIComponent(
      `Halo GM CONBLOCK!\n\n*Nama:* ${name}\n*Keperluan:* ${subject || 'Pertanyaan Umum'}\n*Pesan:* ${message}${phone ? '\n*Telepon:* ' + phone : ''}`
    );
    window.open(`https://wa.me/6281234567890?text=${waMsg}`, '_blank');
    showToast('Pesan dikirim via WhatsApp!', 'success');
    form.reset();
  });
}

/* ===== BUTTON RIPPLE EFFECT ===== */
function initRipple() {
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        position:absolute;
        width:${size}px;height:${size}px;
        left:${e.clientX - rect.left - size/2}px;
        top:${e.clientY - rect.top - size/2}px;
        background:rgba(255,255,255,0.25);
        border-radius:50%;
        pointer-events:none;
        transform:scale(0);
        animation:ripple-anim 0.5s ease-out forwards;
      `;
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 500);
    });
  });

  // Add ripple animation
  if (!document.getElementById('ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = '@keyframes ripple-anim{to{transform:scale(2);opacity:0;}}';
    document.head.appendChild(style);
  }
}

/* ===== FOOTER YEAR ===== */
function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ===== INIT ALL ===== */
document.addEventListener('DOMContentLoaded', () => {
  // Core
  initLoader();
  initNavbar();
  initMobileMenu();
  initBackToTop();
  setYear();

  // Products
  renderProducts();
  renderPriceTable();
  initFilters();
  initSearch();
  initAdminForm();

  // Gallery & Media
  initLightbox();
  initTestiSlider();

  // Forms
  initKontakForm();

  // Animations
  observeReveal();
  animateCounters();
  initRipple();

  // Observe new elements after any DOM update
  const mutationObs = new MutationObserver(() => {
    observeReveal();
    initRipple();
  });
  mutationObs.observe(document.getElementById('product-grid') || document.body, {
    childList: true, subtree: false
  });
});

/* ===== HANDLE ESCAPE KEY ===== */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeMobileMenu();
  }
});
function openPricePopup(prices){

const popup = document.getElementById('popupHarga');
const content = document.getElementById('popupContent');

content.innerHTML = prices.map(item => `

<div class="popup-item">

    <h4>${item.ukuran}</h4>

    <div class="popup-price">

        <span>
        Harga Ambil :
        ${
            item.ambil
            ? formatRupiah(item.ambil)
            : '-'
        }
        </span>

        <span>
        Harga Kirim :
        ${
            item.kirim
            ? formatRupiah(item.kirim)
            : '-'
        }
        </span>

    </div>

</div>

`).join('');

popup.classList.add('show');
}

function closePopup(){
document.getElementById('popupHarga')
.classList.remove('show');
}
  // KIRIM PESAN HUBUNGI KAMI
const form = document.getElementById("kontak-form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const nama = document.getElementById("k-name").value;
    const phone = document.getElementById("k-phone").value;
    const email = document.getElementById("k-email").value;
    const subject = document.getElementById("k-subject").value;
    const pesan = document.getElementById("k-message").value;

    const text = 
`Halo GM CONBLOCK

Nama : ${nama}
Telepon : ${phone}
Email : ${email}
Keperluan : ${subject}

Pesan :
${pesan}`;

    const nomorWA = "6285858967150";

    window.open(
        `https://wa.me/${nomorWA}?text=${encodeURIComponent(text)}`,
        "_blank"
    );
});
