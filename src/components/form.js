document.getElementById("applicationForm").addEventListener("submit", e => {
e.preventDefault();


const name = document.getElementById("name").value;
const age = document.getElementById("age").value;
const reason = document.getElementById("reason").value;


localStorage.setItem("appData", JSON.stringify({ name, age, reason }));


navigate("/review");
});

