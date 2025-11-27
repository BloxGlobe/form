// Simple client-side router for switching between HTML partials with hash-based routing

const app = document.getElementById("app");

// Map routes to HTML files
const routes = {
  "apply": "apply.html",
  "review": "review.html",
  "manage": "manage.html",
  "success": "success.html",
  "store": "store.html",
};

// Navigation function
window.navigate = function (hash) {
  // Remove the '#' from the hash
  const path = hash.replace("#", "") || "apply";
  const file = routes[path];

  if (!file) {
    app.innerHTML = `<h2>404 - Page Not Found</h2>`;
    return;
  }

  // Load the page
  fetch(file)
    .then((res) => res.text())
    .then((html) => {
      app.innerHTML = html;
    })
    .catch(() => {
      app.innerHTML = `<h2>Error: Could not load ${file}</h2>`;
    });
};

// Handle hash changes
window.addEventListener("hashchange", () => {
  navigate(window.location.hash);
});

// Load correct page on page load
window.addEventListener("DOMContentLoaded", () => {
  navigate(window.location.hash || "#apply");
});