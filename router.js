const routes = {
"/": "pages/apply.html",
"/review": "review/review.html",
"/manage": "management/admin.html"
};


async function navigate(path) {
const page = routes[path];
if (!page) return alert("Page not found");


const html = await fetch(page).then(res => res.text());
document.getElementById("app").innerHTML = html;


if (path === "/") loadFormLogic();
if (path === "/review") loadReviewLogic();
if (path === "/manage") loadAdminLogic();
}


window.onload = () => navigate("/");
window.navigate = navigate;


function loadFormLogic() {
const script = document.createElement("script");
script.src = "src/components/form.js";
document.body.appendChild(script);
}


function loadReviewLogic() {
const script = document.createElement("script");
script.src = "review/review.js";
document.body.appendChild(script);
}


function loadAdminLogic() {
const script = document.createElement("script");
script.src = "management/admin.js";
document.body.appendChild(script);
}

