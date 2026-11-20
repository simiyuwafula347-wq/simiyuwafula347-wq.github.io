/* shared by project pages (index.html keeps its own inline script for now) */
const safe = fn => { try { return fn(); } catch(e){} };
function setTheme(name){
  document.documentElement.setAttribute("data-theme", name);
  document.querySelectorAll("[data-set-theme]").forEach(b => b.setAttribute("aria-pressed", b.dataset.setTheme === name));
  safe(() => localStorage.setItem("studio-theme", name));
}
document.querySelectorAll("[data-set-theme]").forEach(b => b.onclick = () => setTheme(b.dataset.setTheme));
setTheme(safe(() => localStorage.getItem("studio-theme")) || "paper");

/* time-of-day greeting (visitor's local time) */
const h = new Date().getHours();
const [hello, when] = h < 12 ? ["Good morning","today"] : h < 17 ? ["Good afternoon","today"] : ["Good evening","tonight"];
const g = document.getElementById("greet");
if (g) g.innerHTML = `<b>${hello}</b>Hope you have a wonderful time ${when}.`;

document.querySelectorAll("[data-hello]").forEach(e => e.textContent = hello);
