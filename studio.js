/* Shared by every page: theme switcher, greeting, footer, card renderers.
   Needs data.js loaded first. Each page sets <body data-root=""> (or "../" in a subfolder). */
const ROOT = document.body.dataset.root || "";
const $ = s => document.querySelector(s);
const safe = fn => { try { return fn(); } catch (e) {} };
const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const inl = t => esc(t).replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*/g, "<em>$1</em>");
const md = b => b.split(/\n\n+/).map(p =>
  p.startsWith("# ") ? "<h3>" + inl(p.slice(2)) + "</h3>" :
  p.startsWith("> ") ? "<blockquote>" + inl(p.slice(2)) + "</blockquote>" :
  p.startsWith("- ") ? "<ul>" + p.split("\n").map(l => "<li>" + inl(l.replace(/^- /, "")) + "</li>").join("") + "</ul>" :
  "<p>" + inl(p) + "</p>").join("");
const mins = b => Math.max(1, Math.ceil(b.split(/\s+/).length / 200));
const fmt = d => new Date(d + "T12:00:00").toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
const isFree = p => /^free/i.test(p);
const isPwyw = p => /pay what/i.test(p);

/* ---- themes ---- */
function setTheme(name) {
  document.documentElement.setAttribute("data-theme", name);
  document.querySelectorAll("[data-set-theme]").forEach(b => b.setAttribute("aria-pressed", b.dataset.setTheme === name));
  safe(() => localStorage.setItem("studio-theme", name));
}
document.querySelectorAll("[data-set-theme]").forEach(b => b.onclick = () => setTheme(b.dataset.setTheme));
setTheme(safe(() => localStorage.getItem("studio-theme")) || "paper");

/* ---- greeting (visitor's local time) ---- */
const _h = new Date().getHours();
const [hello, when] = _h < 12 ? ["Good morning", "today"] : _h < 17 ? ["Good afternoon", "today"] : ["Good evening", "tonight"];
const _g = $("#greet");
if (_g) _g.innerHTML = `<b>${hello}</b>Hope you have a wonderful time ${when}.`;
document.querySelectorAll("[data-hello]").forEach(e => e.textContent = hello);

/* ---- footer ---- */
document.querySelectorAll("[data-footer]").forEach(e => e.innerHTML = `© ${new Date().getFullYear()} ${esc(SITE.name)} · ${esc(SITE.footer)}`);

/* ---- product / world card ---- */
function itemCard(p) {
  const shots = (p.shots || (p.thumb ? [p.thumb] : [])).map(s => `<img src="${esc(ROOT + s)}" alt="${esc(p.title)} preview" loading="lazy">`).join("");
  const price = `<span class="price${isFree(p.price) ? " free" : ""}">${esc(p.price)}</span>`;
  const acts = [];
  if (p.play) acts.push(`<a class="btn" href="${esc(ROOT + p.play)}">Play free</a>`);
  if (p.buy) acts.push(`<a class="btn${p.play ? " alt" : ""}" href="${esc(p.buy)}" target="_blank" rel="noopener">${esc(p.buyLabel || (isFree(p.price) ? "Get it free" : "Get it"))}</a>`);
  if (p.pin) acts.push(`<a class="btn alt" href="${esc(p.pin)}" target="_blank" rel="noopener">Preview on Pinterest</a>`);
  if (!p.buy && !p.play) acts.push(`<span class="pill">on Gumroad soon</span>`);
  if (p.extra) acts.push(p.extra);
  return `<article class="item prod">
    ${shots ? `<div class="shots${(p.shots || [1]).length > 1 ? " multi" : ""}">${shots}</div>` : ""}
    <div class="txt">
      <div class="tags">${(p.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      <h3>${esc(p.title)} ${price}</h3>
      <p>${esc(p.desc)}</p>
      <div class="row">${acts.join("")}</div>
    </div></article>`;
}
const worldCard = w => {
  if (w.play) return itemCard(w);
  const single = w.id === "forest" ? "" : `<a class="btn alt" href="${esc(SITE.gumroad)}" target="_blank" rel="noopener">Single on Gumroad</a>`;
  return itemCard({ ...w, buy: BUNDLE.buy, buyLabel: "Get all six " + BUNDLE.price, extra: single });
};
const soonCard = s => `<article class="item soon"><div class="thumb">${s.icon}</div><div class="txt"><span class="tag">coming soon</span><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p></div></article>`;

/* ---- contact: links list + safe form ---- */
const mail = () => SITE.emailParts.join("@");
function contactLinks() {
  const rows = [];
  if (SITE.showEmail || !SITE.formKey) rows.push(["✉️", "Email", mail(), "mailto:" + mail()]);
  rows.push(["🛒", "Gumroad", "simiyuwafula", SITE.gumroad], ["🎮", "itch.io", "larrysmyl", SITE.itch], ["📌", "Pinterest", "Larrysmyl", SITE.pinterest]);
  return rows.map(([i, n, h, u]) => `<a href="${esc(u)}"${u.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : ""}>${i} ${n} <em>${esc(h)}</em></a>`).join("");
}
function wireForm(form) {
  const t0 = Date.now(), msg = form.querySelector(".fmsg"), btn = form.querySelector("button[type=submit]");
  const say = (t, ok) => { msg.textContent = t; msg.style.color = ok ? "var(--accent2)" : "#c2452d"; };
  form.onsubmit = async e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    if (d.botcheck) return;                                              // honeypot: real people never see this field
    if (Date.now() - t0 < 3000) return say("One moment, then try again.");   // bots submit instantly
    const last = +safe(() => localStorage.getItem("studio-last-send")) || 0;
    if (Date.now() - last < 60000) return say("You just sent one. Please wait a minute.");
    if (d.message.trim().length < 5 || d.message.length > 2000) return say("Please write a message (5 to 2000 characters).");
    const subj = `${d.topic}: message from ${d.name}`;
    if (!SITE.formKey) { location.href = `mailto:${mail()}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(d.message)}`; return; }
    btn.disabled = true; say("Sending…", true);
    try {
      const r = await fetch(SITE.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: SITE.formKey, subject: subj, name: d.name, email: d.email || "no-reply@invalid.example", message: d.message }) });
      const j = await r.json();
      if (j.success) { say("Sent. Thank you, I will reply soon.", true); form.reset(); safe(() => localStorage.setItem("studio-last-send", Date.now())); }
      else say("Could not send. Please try again later.");
    } catch (_) { say("Could not send. Please check your connection."); }
    btn.disabled = false;
  };
}
