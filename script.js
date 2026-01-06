// Centers Data
const allCenters = [
  { name: "Pusat Kitar Semula KLCC", location: "Jalan Ampang, Kuala Lumpur", phone: "03-2161 2345", hours:"Mon-Fri: 9AM-6PM", keywords:"klcc kuala lumpur ampang" },
  { name: "E-Waste Petaling Jaya", location:"Jalan PJ, Selangor", phone:"03-7956 6789", hours:"Mon-Sat: 8AM-7PM", keywords:"petaling jaya pj selangor" },
  { name: "Pusat Kutipan Shah Alam", location:"Seksyen 7, Shah Alam", phone:"03-5519 8765", hours:"Wed-Sun: 10AM-5PM", keywords:"shah alam selangor seksyen" },
  { name: "Recycle Hub Penang", location:"Georgetown, Pulau Pinang", phone:"04-2628 5432", hours:"Mon-Fri: 7AM-5PM", keywords:"penang georgetown pulau pinang" },
  { name: "Kitar Semula Johor Bahru", location:"Jalan Skudai, Johor", phone:"07-5591 2345", hours:"Tue-Sat: 9AM-6PM", keywords:"johor bahru jb skudai" },
  { name: "Pusat E-Waste UKM", location:"Universiti Kebangsaan Malaysia", phone:"03-8921 6789", hours:"Mon-Fri: 11AM-4PM", keywords:"ukm universiti kebangsaan malaysia bangi" }
];

// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', ()=> {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});
document.querySelectorAll('#mobile-menu a').forEach(a => a.addEventListener('click', ()=>document.getElementById('mobile-menu').classList.add('hidden')));

// Display Centers
function displayCenters(centers){
  const list = document.getElementById('centers-list');
  list.innerHTML = '';
  if(centers.length===0){ list.innerHTML = '<p class="col-span-2 text-center py-12 text-gray-600 text-xl">No recycling centers found.</p>'; return; }
  centers.forEach(c=>{
    const card = document.createElement('div'); card.className='center-card';
    card.innerHTML=`<h3 class="text-xl font-semibold mb-2 text-green-800">${c.name}</h3>
                    <p class="mb-2 text-gray-700">📍 ${c.location}</p>
                    <p class="mb-2 text-gray-700">📞 ${c.phone}</p>
                    <p class="mb-2 text-gray-700">🕐 ${c.hours}</p>`;
    list.appendChild(card);
  });
}

// Search Centers
document.getElementById('search-btn').addEventListener('click', searchCenters);
document.getElementById('location-input').addEventListener('keypress',(e)=>{ if(e.key==='Enter') searchCenters(); });
function searchCenters(){
  const term = document.getElementById('location-input').value.toLowerCase().trim();
  displayCenters(!term ? allCenters : allCenters.filter(c=>c.keywords.includes(term)||c.name.toLowerCase().includes(term)||c.location.toLowerCase().includes(term)));
}
displayCenters(allCenters);

// Feedback Rating
let selectedRating=0;
const stars = document.querySelectorAll('.rating-star');
stars.forEach((star,index)=>{
  star.addEventListener('click',()=>{ selectedRating=index+1; document.getElementById('feedback-rating').value=selectedRating; updateStars(); });
  star.addEventListener('mouseenter',()=>{ stars.forEach((s,i)=>s.textContent=(i<=index?'★':'☆')); });
});
document.getElementById('rating-container').addEventListener('mouseleave', updateStars);
function updateStars(){ stars.forEach((s,i)=>{ s.textContent=(i<selectedRating?'★':'☆'); s.classList.toggle('active',i<selectedRating); }); }

// Feedback Submission
document.getElementById('feedback-form').addEventListener('submit',async e=>{
  e.preventDefault();
  if(!selectedRating){ alert('Please select a rating.'); return; }
  const form = e.target, btn=form.querySelector('button[type="submit"]'), msg=document.getElementById('feedback-success');
  btn.disabled=true; btn.textContent='Submitting...';
  await new Promise(r=>setTimeout(r,1000));
  form.style.display='none'; msg.classList.remove('hidden');
  setTimeout(()=>{
    form.reset(); selectedRating=0; updateStars(); form.style.display='block'; msg.classList.add('hidden'); btn.disabled=false; btn.textContent='Submit Feedback';
  },3000);
});
