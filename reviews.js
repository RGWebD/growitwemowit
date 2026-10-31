// LIVE Google reviews via Google Places API (New). See README.md.
const GOOGLE_API_KEY = "YOUR_GOOGLE_PLACES_API_KEY"; // <-- paste key (restrict to your domain!)
const PLACE_ID = "ChIJq-2UBp-l-4gRPLJjHt2ujaE";       // Grow It We Mow It LLC
const PROFILE_URL = "https://maps.google.com/?cid=11641152876543455804";
(async function(){
  const box=document.getElementById('gReviews'),badge=document.getElementById('gBadge');
  if(!box||GOOGLE_API_KEY.startsWith('YOUR_'))return; // fallback stays visible
  try{
    const r=await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}`,{headers:{'X-Goog-Api-Key':GOOGLE_API_KEY,'X-Goog-FieldMask':'rating,userRatingCount,reviews,googleMapsUri'}});
    if(!r.ok)throw r.status;const d=await r.json();
    if(d.rating)badge.innerHTML=`<span class="n">${d.rating.toFixed(1)}</span><span><span class="stars">★★★★★</span><br>${d.userRatingCount} Google reviews</span>`;
    if(d.reviews&&d.reviews.length){box.innerHTML='';d.reviews.forEach(v=>{const el=document.createElement('div');el.className='rv';
      el.innerHTML=`<div class="stars">${'★'.repeat(v.rating||5)}</div><p></p><b></b><small>${v.relativePublishTimeDescription||''} · Google</small>`;
      el.querySelector('p').textContent=(v.text&&v.text.text)||'';el.querySelector('b').textContent=v.authorAttribution?.displayName||'';box.appendChild(el)})}
  }catch(e){console.warn('Google reviews unavailable, showing fallback',e)}
})();
