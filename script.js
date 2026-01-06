const defaultConfig = {
  background_color: "#f0fdf4",
  surface_color: "#ffffff",
  text_color: "#064e3b",
  primary_action_color: "#10b981",
  secondary_action_color: "#059669",
  font_family: "system-ui, -apple-system, sans-serif",
  font_size: 16,
  site_title: "TechCycle",
  hero_heading: "Dispose Smart, Recycle Better",
  hero_subheading: "Join the movement to responsibly recycle electronics and protect our planet",
  about_heading: "About TechCycle",
  guide_heading: "How to Recycle E-Waste",
  contact_heading: "Get In Touch"
};

async function onConfigChange(config) {
  const baseFontStack = 'system-ui, -apple-system, sans-serif';
  const customFont = config.font_family || defaultConfig.font_family;
  const baseSize = config.font_size || defaultConfig.font_size;

  const backgroundColor = config.background_color || defaultConfig.background_color;
  const surfaceColor = config.surface_color || defaultConfig.surface_color;
  const textColor = config.text_color || defaultConfig.text_color;
  const primaryColor = config.primary_action_color || defaultConfig.primary_action_color;
  const secondaryColor = config.secondary_action_color || defaultConfig.secondary_action_color;

  document.body.style.background = backgroundColor;
  document.body.style.color = textColor;

  const navbar = document.getElementById('navbar');
  navbar.style.background = surfaceColor;
  navbar.style.color = textColor;

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.style.color = textColor;
    link.addEventListener('mouseenter', () => link.style.color = primaryColor);
    link.addEventListener('mouseleave', () => link.style.color = textColor);
  });

  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  mobileMenuBtn.style.color = textColor;

  const heroHeading = document.getElementById('hero-heading');
  heroHeading.style.fontFamily = `${customFont}, ${baseFontStack}`;
  heroHeading.style.fontSize = `${baseSize * 3.5}px`;
  heroHeading.style.color = '#ffffff';

  const heroSubheading = document.getElementById('hero-subheading');
  heroSubheading.style.fontFamily = `${customFont}, ${baseFontStack}`;
  heroSubheading.style.fontSize = `${baseSize * 1.25}px`;
  heroSubheading.style.color = '#ffffff';

  const heroCTAs = document.querySelectorAll('#home a');
  heroCTAs.forEach((btn, index) => {
    btn.style.fontFamily = `${customFont}, ${baseFontStack}`;
    btn.style.fontSize = `${baseSize * 1.125}px`;
    if (index === 0) {
      btn.style.background = primaryColor;
      btn.style.color = '#ffffff';
    } else {
      btn.style.background = surfaceColor;
      btn.style.color = textColor;
    }
  });

  ['about-heading', 'guide-heading', 'contact-heading'].forEach(id => {
    const h = document.getElementById(id);
    if (h) {
      h.style.fontFamily = `${customFont}, ${baseFontStack}`;
      h.style.fontSize = `${baseSize * 2.25}px`;
      h.style.color = textColor;
    }
  });

  document.querySelectorAll('h2').forEach(h2 => {
    h2.style.fontFamily = `${customFont}, ${baseFontStack}`;
    h2.style.fontSize = `${baseSize * 2.25}px`;
    h2.style.color = textColor;
  });

  document.querySelectorAll('h3').forEach(h3 => {
    h3.style.fontFamily = `${customFont}, ${baseFontStack}`;
    h3.style.fontSize = `${baseSize * 1.25}px`;
    h3.style.color = textColor;
  });

  document.querySelectorAll('p, li').forEach(el => {
    el.style.fontFamily = `${customFont}, ${baseFontStack}`;
    el.style.fontSize = `${baseSize}px`;
    el.style.color = textColor;
  });

  document.querySelectorAll('.impact-card, .rounded-lg').forEach(card => {
    card.style.background = surfaceColor;
    card.style.color = textColor;
  });

  document.querySelectorAll('#guide .w-20').forEach(c => {
    c.style.background = primaryColor;
    c.style.color = '#ffffff';
  });

  document.querySelectorAll('input, textarea, select').forEach(i => {
    i.style.fontFamily = `${customFont}, ${baseFontStack}`;
    i.style.fontSize = `${baseSize}px`;
    i.style.background = surfaceColor;
    i.style.color = textColor;
    i.style.borderColor = primaryColor;
  });

  document.querySelectorAll('button[type="submit"], #search-btn').forEach(btn => {
    btn.style.fontFamily = `${customFont}, ${baseFontStack}`;
    btn.style.fontSize = `${baseSize * 1.125}px`;
    btn.style.background = primaryColor;
    btn.style.color = '#ffffff';
  });

  document.querySelectorAll('[id$="-success"]').forEach(m => {
    m.style.background = secondaryColor;
    m.style.color = '#ffffff';
  });

  const footer = document.querySelector('footer');
  footer.style.background = surfaceColor;
  footer.style.color = textColor;

  document.querySelectorAll('#contact a').forEach(l => l.style.color = textColor);

  document.getElementById('site-title').textContent = config.site_title || defaultConfig.site_title;
  document.getElementById('hero-heading').textContent = config.hero_heading || defaultConfig.hero_heading;
  document.getElementById('hero-subheading').textContent = config.hero_subheading || defaultConfig.hero_subheading;
  document.getElementById('about-heading').textContent = config.about_heading || defaultConfig.about_heading;
  document.getElementById('guide-heading').textContent = config.guide_heading || defaultConfig.guide_heading;
  document.getElementById('contact-heading').textContent = config.contact_heading || defaultConfig.contact_heading;
}

document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

document.querySelectorAll('#mobile-menu a').forEach(a => a.addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.add('hidden');
}));

const centers = [
  { name: "Pusat Kitar Semula KLCC", location: "Jalan Ampang, Kuala Lumpur", phone: "03-2161 2345", hours: "Mon-Fri: 9AM-6PM", keywords: "klcc kuala lumpur ampang" },
  { name: "E-Waste Petaling Jaya", location: "Jalan PJ, Selangor", phone: "03-7956 6789", hours: "Mon-Sat: 8AM-7PM", keywords: "petaling jaya pj selangor" },
  { name: "Pusat Kutipan Shah Alam", location: "Seksyen 7, Shah Alam", phone: "03-5519 8765", hours: "Wed-Sun: 10AM-5PM", keywords: "shah alam seksyen" },
  { name: "Recycle Hub Penang", location: "Georgetown, Pulau Pinang", phone: "04-2628 5432", hours: "Mon-Fri: 7AM-5PM", keywords: "penang georgetown pulau pinang" },
  { name: "Kitar Semula Johor Bahru", location: "Jalan Skudai, Johor", phone: "07-5591 2345", hours: "Tue-Sat: 9AM-6PM", keywords: "johor bahru jb skudai" },
  { name: "Pusat E-Waste UKM", location: "Universiti Kebangsaan Malaysia", phone: "03-8921 6789", hours: "Mon-Fri: 11AM-4PM", keywords: "ukm universiti kebangsaan" }
];

function render(list) {
  const c = document.getElementById('centers-list');
  c.innerHTML = list.length ? '' : '<div class="col-span-2 text-center py-12"><p class="text-xl">No centers found</p></div>';
  list.forEach(x => {
    const d = document.createElement('div');
    d.className = 'rounded-lg p-6 shadow-lg';
    d.innerHTML = `<h3 class="text-xl font-semibold mb-2">${x.name}</h3><p class="mb-2">📍 ${x.location}</p><p class="mb-2">📞 ${x.phone}</p><p class="mb-4">🕐 ${x.hours}</p>`;
    c.appendChild(d);
  });
}

function find() {
  const t = document.getElementById('location-input').value.toLowerCase().trim();
  render(!t ? centers : centers.filter(x => x.keywords.includes(t) || x.name.toLowerCase().includes(t) || x.location.toLowerCase().includes(t)));
}

document.getElementById('search-btn').addEventListener('click', find);
document.getElementById('location-input').addEventListener('keypress', e => e.key === 'Enter' && find());

let rating = 0;
document.querySelectorAll('.rating-star').forEach(s => s.addEventListener('click', e => {
  e.preventDefault();
  rating = parseInt(s.dataset.rating);
  document.getElementById('feedback-rating').value = rating;
  document.querySelectorAll('.rating-star').forEach((z,i) => z.textContent = i < rating ? '★' : '☆');
}));

document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  const m = document.getElementById('contact-success');
  f.style.display='none';
  m.classList.remove('hidden');
  setTimeout(()=>{f.reset();f.style.display='block';m.classList.add('hidden');},3000);
});

document.getElementById('feedback-form').addEventListener('submit', async e => {
  e.preventDefault();
  if(!rating) return;
  const f=e.target;
  const b=f.querySelector('button[type="submit"]');
  const m=document.getElementById('feedback-success');
  b.disabled=true; b.textContent='Submitting...';
  try{
    const r=await fetch('mindspun_endpoint',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:feedback-name.value,center,rating,comments:feedback-comments.value,timestamp:new Date().toISOString()})});
    if(r.ok){f.style.display='none';m.classList.remove('hidden');setTimeout(()=>{f.reset();rating=0;document.querySelectorAll('.rating-star').forEach(z=>z.textContent='☆');f.style.display='block';m.classList.add('hidden');b.disabled=false;b.textContent='Submit Feedback';},3000);}
    else throw 0;
  }catch{b.disabled=false;b.textContent='Submit Feedback';m.textContent='Submit failed';setTimeout(()=>{m.classList.add('hidden');m.textContent='Thank you for your feedback! Your input helps us improve.';},3000);}
});

function count(el,to,t=2000){let c=0,i=to/(t/16),tm=setInterval(()=>{c+=i;c>=to?(el.textContent=to.toLocaleString(),clearInterval(tm)):el.textContent=Math.floor(c).toLocaleString();},16);}
new IntersectionObserver(e=>{if(e[0].isIntersecting){count(devices-count,2500000);count(co2-count,1200);count(centers-count,500);count(waste-count,15000);}} ,{threshold:0.3}).observe(impact);

if(window.elementSdk){window.elementSdk.init({defaultConfig,onConfigChange});}
