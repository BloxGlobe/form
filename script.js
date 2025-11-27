const app = document.getElementById("app");

const routes = {
  "apply": "apply.html",
  "review": "review.html",
  "manage": "manage.html",
  "store": "store.html",
};

window.navigate = function (hash) {
  const path = hash.replace("#", "") || "apply"; // Remove the hash, default to apply
  const file = routes[path];

  if (!file) {
    app.innerHTML = `<h2>404 - Page Not Found</h2>`;
    return;
  }

  fetch(file)
    .then((res) => res.text())
    .then((html) => {
      app.innerHTML = html;
      window.history.pushState({}, "", hash); // Update history with the hash
    })
    .catch(() => {
      app.innerHTML = `<h2>Error: Could not load ${file}</h2>`;
    });
};

window.addEventListener("hashchange", () => {
  navigate(window.location.hash);
});

window.addEventListener("DOMContentLoaded", () => {
  navigate(window.location.hash || "#apply");
});