/* ===== EDIT YOUR TEXT HERE ===== */
const CONFIG = {
  hero: "Happy birthday, Nyeleti! 🥳 I could’ve sent a normal message, but where’s the fun in that? So I made you this little corner of the internet. Consider it proof that I occasionally use my skills for something other than suffering through code.",
  memories: [
    { src: "assets/images/wine-games.jpg", w: 1200, h: 1600, title: "that one time frr with the wine",
      caption: "Proof that we can be trusted to behave ourselves around wine and below semi-competitive games. Probably.",
      note: "exhibit B: the rematch is inevitable ✎", alt: "Us with friends, drinking wine and playing games" },
    { src: "assets/images/ice-skating-arcade.jpg", w: 5712, h: 4284, title: "Ice skating date thate you loved ",
      caption: "Started with ice skating. Gravity won. We recovered with food, arcade games and a photo booth.",
      note: "gravity: 1, us: 0 ✎",
      story: "The skating did not go according to plan. Gravity was winning every round, so we switched to food, then Fun Company for arcade games and photo booth pictures. Not the date I planned, but a better story than the one I planned.",
      alt: "Us on our ice skating and arcade date" }
  ],
  meme: { hand: "public service announcement", title: "Something they warn you about", cap: "They do this when you turn 20 no joke imma miss you.", alt: "A meme about turning 20" },
  gift: { title: "A small confession",
    text: ["I wanted to have a proper gift ready for you today. Timing had other plans and messed me up.", "The gift is still happening, just fashionably late. Think of this website as the card that arrived before the present."] },
  ask: { q: "So… is fentse and nyeleti goated together?", yes: "Yes 👀", no: "No",
    yesMsg: "Yes?! Okay. Noted. Screenshot this and send it to me so it’s official. 📸",
    giveUp: "Take your time ♡", giveUpMsg: "No pressure at all. The button was just being dramatic. ♡" },
  exhibit: { title: "Exhibit A: A Totally Innocent Individual",
    caption: "Your honour, I would like to formally state that the allegations are being taken out of context.",
    note: "Evidence reviewed: 8 seconds. Regrets expressed: pending." },
  quiz: [
    { q: "Which sweet treat has a suspicious amount of power over you?", a: ["Chocolate", "Biscoff", "Both, obviously", "None of the above"] },
    { q: "What was the verdict on ice skating?", a: ["Olympic potential", "A graceful experience", "Gravity was doing too much", "Let’s never discuss this again"] },
    { q: "What is the best kind of date?", a: ["A cute café", "Trying somewhere new for food", "An arcade rematch", "All of the above"] },
    { q: "What’s suspicious about someone who says they’re “just there for the music”?", a: ["Absolutely nothing", "Their explanation deserves investigation", "The music is probably good", "They are clearly innocent"] },
    { q: "What should happen when someone loses at bowling?", a: ["They buy dessert", "They plan the next date", "They accept public humiliation", "The winner decides"] }
  ],
  quizResult: "Result: 100% Nyeleti. Scientifically unverified, emotionally accurate, and the judges accept all answers. (Nothing was recorded, by the way.)",
  dates: [
    "ICE skating, followed by a food adventure",
    "An arcade rematch at Fun Company ",
    "Trying a food spot neither of us has been to before ",
    "A bakery date with a Biscoff investigation ",
    "Bowling, with the loser facing a mystery punishment ",
    "Skydiving??????????",
    "A relaxed food date followed by a spontaneous adventure "
  ],
  secret: "Secret unlocked: one free dessert of your choice, redeemable whenever we next find a bakery 🍪",
  letter: [
    "Jokes aside, I’m genuinely glad we met that night at Uncle Faouzi’s 😭. It’s funny how we only really got to talk because the club was packed and someone spilled a drink on you, but I’m glad things happened the way they did because that’s when I really got to know you and realised how much I liked being around you. Since then, I’ve really enjoyed all the dates, our conversations, the banter, and getting to know you more (even if you do keep threatening to stab me 😭).",
    "I hope this next year brings you so much happiness, new experiences, good food, and plenty of reasons to laugh. You deserve a really good birthday and an even better year ahead. I’m glad I got to meet you, Nyeleti, and I hope you have the best day",
  ]
};
/* ===== END EDIT SECTION ===== */

const $ = (s, r = document) => r.querySelector(s);
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

function sparkles(n = 24) {
  if (reduce) return;
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span");
    s.className = "spark";
    s.textContent = ["✨", "♡", "★", "🎉"][i % 4];
    s.style.left = Math.random() * 100 + "vw";
    s.style.animationDuration = 2 + Math.random() * 2.5 + "s";
    s.style.fontSize = 14 + Math.random() * 14 + "px";
    document.body.append(s);
    setTimeout(() => s.remove(), 5000);
  }
}

/* Intro */
$("#openBtn").onclick = () => {
  $("#env").classList.add("open");
  setTimeout(() => {
    $("#intro").hidden = true;
    $("#main").hidden = false;
    window.scrollTo(0, 0);
    sparkles();
  }, reduce ? 100 : 900);
};

/* Hero, exhibit, letter text */
$("#heroMsg").textContent = CONFIG.hero;
$("#exTitle").textContent = CONFIG.exhibit.title;
$("#exCap").textContent = CONFIG.exhibit.caption;
$("#exNote").textContent = CONFIG.exhibit.note;
$("#letter").innerHTML = CONFIG.letter.map(p => `<p>${p}</p>`).join("");
const vid = $("#exhibit video");
vid.addEventListener("error", () => {}, true);
$("#exhibit video source").addEventListener("error", () => {
  const d = document.createElement("div");
  d.className = "ph";
  d.innerHTML = "🎬 Add <b>assets/videos/skating-incident.mp4</b> here";
  vid.replaceWith(d);
});

/* Lightbox */
const lb = $("#lb");
function openLB(src, alt) { $("#lbImg").src = src; $("#lbImg").alt = alt; lb.showModal(); }
$("#lbClose").onclick = () => lb.close();
lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });

/* Scrapbook */
CONFIG.memories.forEach((m, i) => {
  const f = document.createElement("figure");
  f.className = "card mem mem" + (i + 1);
  f.innerHTML = `<button class="ph-btn" aria-label="Open photo: ${m.title}"><img src="${m.src}" width="${m.w}" height="${m.h}" loading="lazy" decoding="async" alt="${m.alt}"></button>
  <figcaption><span class="tag">${m.title}</span><p>${m.caption}</p><span class="hand">${m.note}</span>
  ${m.story ? `<details><summary>Read the story</summary><p>${m.story}</p></details>` : ""}</figcaption>`;
  $("#memGrid").append(f);
  const btn = $("button", f);
  $("img", f).onerror = () => { btn.outerHTML = `<div class="ph">📷 Add <b>${m.src}</b> here</div>`; };
  btn.onclick = () => openLB(m.src, m.alt);
});

/* Quiz */
let qi = 0;
function renderQuiz() {
  const box = $("#quiz"), n = CONFIG.quiz.length;
  if (qi >= n) {
    box.innerHTML = `<div class="q"><h3>All done!</h3><p>${CONFIG.quizResult}</p><button class="btn" id="qAgain">Play again</button></div>`;
    $("#qAgain").onclick = () => { qi = 0; renderQuiz(); };
    return;
  }
  const q = CONFIG.quiz[qi];
  box.innerHTML = `<p class="sub">Question ${qi + 1} of ${n}</p><div class="bar"><i style="width:${(qi / n) * 100}%"></i></div>
  <div class="q"><h3>${q.q}</h3>${q.a.map(a => `<button class="opt">${a}</button>`).join("")}</div>`;
  box.querySelectorAll(".opt").forEach(b => b.onclick = () => { qi++; renderQuiz(); });
}
renderQuiz();

/* Catch the treats */
const cv = $("#cv"), cx = cv.getContext("2d"), W = cv.width, H = cv.height;
const G = { run: false, t: 0, score: 0, px: W / 2, items: [], dir: 0, spawn: 0, last: 0 };
const TREATS = ["❤️", "⭐", "🍫", "🍪"];
function draw() {
  cx.clearRect(0, 0, W, H);
  cx.textAlign = "center"; cx.textBaseline = "middle";
  cx.font = "30px sans-serif";
  G.items.forEach(i => cx.fillText(i.e, i.x, i.y));
  cx.font = "44px sans-serif";
  cx.fillText("🧺", G.px, H - 34);
}
function frame(ts) {
  if (!G.run) return;
  const dt = Math.min((ts - G.last) / 1000, 0.05); G.last = ts;
  G.t += dt;
  G.px = Math.max(28, Math.min(W - 28, G.px + G.dir * 320 * dt));
  G.spawn -= dt;
  if (G.spawn <= 0) {
    G.items.push({ e: TREATS[Math.floor(Math.random() * 4)], x: 20 + Math.random() * (W - 40), y: -20, v: 110 + G.score * 6 + Math.random() * 50 });
    G.spawn = Math.max(0.25, 0.8 - G.score * 0.02);
  }
  G.items.forEach(i => i.y += i.v * dt);
  G.items = G.items.filter(i => {
    if (i.y > H - 56 && i.y < H - 10 && Math.abs(i.x - G.px) < 40) { G.score += i.e === "🍪" ? 2 : 1; return false; }
    return i.y < H + 20;
  });
  $("#score").textContent = G.score;
  $("#time").textContent = Math.max(0, Math.ceil(20 - G.t));
  draw();
  if (G.t >= 20) return endGame();
  requestAnimationFrame(frame);
}
function startGame() {
  Object.assign(G, { run: true, t: 0, score: 0, items: [], spawn: 0, px: W / 2, last: performance.now() });
  $("#startBtn").textContent = "Restart";
  $("#gameMsg").textContent = "Go go go!";
  $("#secret").hidden = true;
  cv.focus({ preventScroll: true });
  requestAnimationFrame(frame);
}
function endGame() {
  G.run = false; draw();
  $("#gameMsg").textContent = `Time! You caught ${G.score} points. Birthday privileges unlocked. Your prize: unlimited bragging rights. 🏆`;
  $("#startBtn").textContent = "Play again";
  if (G.score >= 15) { $("#secret").textContent = CONFIG.secret; $("#secret").hidden = false; sparkles(); }
}
$("#startBtn").onclick = startGame;
addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") { G.dir = -1; if (G.run) e.preventDefault(); }
  if (e.key === "ArrowRight") { G.dir = 1; if (G.run) e.preventDefault(); }
});
addEventListener("keyup", e => { if (e.key === "ArrowLeft" || e.key === "ArrowRight") G.dir = 0; });
const move = e => { const r = cv.getBoundingClientRect(); G.px = ((e.clientX - r.left) / r.width) * W; if (!G.run) draw(); };
cv.addEventListener("pointermove", move);
cv.addEventListener("pointerdown", move);
[["#bl", -1], ["#br", 1]].forEach(([s, d]) => {
  const b = $(s);
  b.addEventListener("pointerdown", e => { e.preventDefault(); G.dir = d; });
  ["pointerup", "pointerleave", "pointercancel"].forEach(ev => b.addEventListener(ev, () => G.dir = 0));
});
draw();

/* Date generator */
let lastDate = -1;
$("#dateBtn").onclick = () => {
  let i; do { i = Math.floor(Math.random() * CONFIG.dates.length); } while (i === lastDate);
  lastDate = i;
  const c = $("#dateCard");
  c.textContent = CONFIG.dates[i];
  c.classList.remove("pop"); void c.offsetWidth; c.classList.add("pop");
  $("#dateBtn").textContent = "Another one 👀";
};

/* Letter reveal + finale */
$("#lastBtn").onclick = () => {
  $("#lastBtn").hidden = true;
  $("#finale").hidden = false;
  $("#finale").scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  sparkles(30);
};
$("#replayBtn").onclick = () => {
  $("#finale").hidden = true; $("#lastBtn").hidden = false;
  $("#env").classList.remove("open"); qi = 0; renderQuiz();
  $("#main").hidden = true; $("#intro").hidden = false;
  window.scrollTo(0, 0);
};

/* Fade-in on scroll */
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .1 });
  document.querySelectorAll(".sec h2, .card").forEach(el => { el.classList.add("reveal"); io.observe(el); });
} else document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));

/* Meme, gift */
$("#memeHand").textContent = CONFIG.meme.hand;
$("#memeTitle").textContent = CONFIG.meme.title;
$("#memeCap").textContent = CONFIG.meme.cap;
$("#memeImg").alt = CONFIG.meme.alt;
$("#memeImg").onerror = () => { $("#memeImg").outerHTML = '<div class="ph">📷 Add <b>assets/images/meme.jpg</b> here</div>'; };
$("#giftTitle").textContent = CONFIG.gift.title;
$("#giftText").innerHTML = CONFIG.gift.text.map(p => `<p>${p}</p>`).join("");

/* Lively background */
(function () {
  if (reduce) return;
  const bg = $("#bg"), E = ["✨", "♡", "★", "🍪", "🎈"];
  for (let i = 0; i < 14; i++) {
    const s = document.createElement("span");
    s.className = "float";
    s.textContent = E[i % E.length];
    s.style.left = Math.random() * 100 + "%";
    s.style.fontSize = 14 + Math.random() * 18 + "px";
    s.style.animationDuration = 16 + Math.random() * 20 + "s";
    s.style.animationDelay = -Math.random() * 30 + "s";
    bg.append(s);
  }
})();

/* The question: "No" dodges */
const yes = $("#yesBtn"), no = $("#noBtn"), box = $("#askBox");
let dodges = 0;
$("#askQ").textContent = CONFIG.ask.q;
yes.textContent = CONFIG.ask.yes;
no.textContent = CONFIG.ask.no;
function dodge(e) {
  if (dodges >= 8) return;
  if (e && e.cancelable) e.preventDefault();
  dodges++;
  if (dodges >= 8) { no.textContent = CONFIG.ask.giveUp; no.style.left = "62%"; no.style.top = "50px"; return; }
  const bw = box.clientWidth - no.offsetWidth, bh = box.clientHeight - no.offsetHeight;
  const yr = yes.getBoundingClientRect(), br = box.getBoundingClientRect();
  let x, y, tries = 0;
  do {
    x = Math.random() * bw; y = Math.random() * bh; tries++;
  } while (tries < 20 && x + br.left < yr.right + 10 && x + br.left + no.offsetWidth > yr.left - 10 && y + br.top < yr.bottom + 10 && y + br.top + no.offsetHeight > yr.top - 10);
  no.style.left = x + "px"; no.style.top = y + "px";
}
["pointerenter", "pointerdown", "touchstart"].forEach(ev => no.addEventListener(ev, dodge, { passive: false }));
no.addEventListener("focus", dodge);
no.addEventListener("click", e => { if (dodges < 8) { e.preventDefault(); dodge(e); } else $("#askMsg").textContent = CONFIG.ask.giveUpMsg; });
yes.addEventListener("click", () => { $("#askMsg").textContent = CONFIG.ask.yesMsg; sparkles(36); });
function resetAsk() { dodges = 0; no.textContent = CONFIG.ask.no; no.style.left = "62%"; no.style.top = "50px"; $("#askMsg").textContent = ""; }
$("#replayBtn").addEventListener("click", resetAsk);
