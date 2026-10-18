# Nyeleti's Birthday Website

Plain HTML, CSS and JavaScript. No build step, no backend, nothing collected.

## 1. Open it locally
Double-click `index.html`. (Photos and video work this way too.)

## 2. Add the two photos
Put your files in `assets/images/` with these exact names:
- `wine-games.jpg` (1200 × 1600, portrait)
- `ice-skating-arcade.jpg` (5712 × 4284, landscape)

Tip: resize the skating photo to about 2400 px wide (JPEG quality ~80) before uploading so it loads fast on her phone. Until the files exist, a labelled placeholder shows.

## 3. Add the video
- `assets/videos/skating-incident.mp4` (H.264 video + AAC audio, ideally under 15 MB)
- `assets/images/video-poster.jpg` (a still frame from the video)

If the footage looks painful rather than funny, delete the whole `<section id="exhibit">…</section>` block in `index.html`.

### Meme picture
Add `assets/images/meme.jpg`. Change its title and caption in `script.js` (`meme`).

## 4. Preview
Open `index.html` in your browser. Check it on your phone by sending yourself the live link after step 7.

## 5. Create a GitHub repository
On github.com click New repository, name it `nyeleti-birthday`, set it to Public, and create it.

## 6. Upload the project
Easiest: on the repo page choose Add file → Upload files, drag in everything inside the `nyeleti-birthday` folder (keep the `assets` folder structure), then Commit.
(Files over 25 MB cannot be uploaded through the browser, so compress the video first.)

## 7. Turn on GitHub Pages
Repo → Settings → Pages → Source: Deploy from a branch → Branch: `main`, folder `/ (root)` → Save.

## 8. Get the link
After 1–2 minutes it appears at the top of that page: `https://YOUR-USERNAME.github.io/nyeleti-birthday/`

## 9. Test on a phone
Open the link on iPhone and Android if you can. Check: envelope opens, both photos open and close, video plays, quiz, game and date button work. Everything uses relative paths, so the `/nyeleti-birthday/` sub-folder is fine.

## 10. Change text later
Open `script.js`. Everything between `EDIT YOUR TEXT HERE` and `END EDIT SECTION` is captions, quiz, date ideas, the letter and the hero message. Edit it on GitHub (pencil icon) and commit; the site updates in a minute.

## Extras
- Score 15+ in the catch game to unlock a hidden dessert coupon.
- The quiz keeps no answers; nothing leaves the browser.
