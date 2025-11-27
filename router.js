// Simple client-side router for switching between HTML partials

const app = document.getElementById("app");

// Map routes to HTML files
const routes = {
  "/": "apply.html",
  "/review": "review.html",
  "/manage": "manage.html",
  "/success": "success.html",
  "/store": "store.html",
};

// Navigation function
window.navigate = function (path) {
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
      window.history.pushState({}, "", path);
    })
    .catch(() => {
      app.innerHTML = `<h2>Error: Could not load ${file}</h2>`;
    });
};

// Handle browser navigation arrows
window.addEventListener("popstate", () => {
  navigate(window.location.pathname);
});

// Load correct page on refresh
window.addEventListener("DOMContentLoaded", () => {
  navigate(window.location.pathname || "/");
});