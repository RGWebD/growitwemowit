# Grow It We Mow It — static site (index.html + merch.html)
Open index.html via any web host. The hero background is a local muted video (assets/hero.mp4); background music is assets/hero-audio.mp3 with a play/pause button (sound.js). Browsers may block autoplay with sound, so music starts on the visitor's first click/tap/keypress if blocked.

## Live Google reviews (reviews.js)
- Business: Grow It We Mow It LLC — Google Place ID: `ChIJq-2UBp-l-4gRPLJjHt2ujaE`
- Profile: https://maps.google.com/?cid=11641152876543455804 (5.0★, 5 reviews per UENI's Google sync)
1. Google Cloud Console → enable **Places API (New)** → create an API key.
2. Restrict the key: Application restriction = HTTP referrers (your domain), API restriction = Places API (New).
3. Paste it into `GOOGLE_API_KEY` in reviews.js. Place ID is already set.
Until a key is set (or if the call fails) the page shows the rating badge + "Read our reviews on Google" link and the real customer testimonials from the UENI site. Google returns at most 5 reviews.
Alternative: paste a free Elfsight or Trustindex Google Reviews widget into the marked comment in the #reviews section and remove reviews.js.

## Gallery
Drop real photos into assets/gallery/ and add filenames to the GALLERY array in gallery.js.

## Quote form
Not wired up. Set the form's `action` to a Formspree/Netlify Forms/Basin endpoint and remove the onsubmit alert.

## Still needed from client
- Public email address (UENI hides it)
- Facebook photos (Facebook blocked automated download)
