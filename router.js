// router.js (hash-routing safe for GH Pages)
const routes = {
  "": "pages/apply.html",
  "#/": "pages/apply.html",
  "#/review": "review/review.html",
  "#/manage": "management/admin.html"
};

async function navigateHash() {
  const hash = location.hash || "#/";
  const page = routes[hash] || routes["#/"];
  try {
    const html = await fetch(page).then(res => {
      if (!res.ok) throw new Error("Failed to load page");
      return res.text();
    });
    document.getElementById("app").innerHTML = html;
    // load page-specific scripts
    if (hash === "#/" || hash === "" ) loadFormLogic();
    if (hash === "#/review") loadReviewLogic();
    if (hash === "#/manage") loadAdminLogic();
  } catch (err) {
    document.getElementById("app").innerHTML = "<p>Page load error.</p>";
    console.error(err);
  }
}

window.addEventListener("hashchange", navigateHash);
window.addEventListener("load", navigateHash);
window.navigate = (path) => { location.hash = path.startsWith("#") ? path : `#${path}`; };

function loadScriptOnce(src) {
  if ([...document.scripts].some(s => s.src && s.src.includes(src))) return;
  const script = document.createElement("script");
  script.src = src;
  document.body.appendChild(script);
}

function loadFormLogic() { loadScriptOnce("src/components/form.js"); }
function loadReviewLogic() { loadScriptOnce("review/review.js"); }
function loadAdminLogic() { loadScriptOnce("management/admin.js"); }
