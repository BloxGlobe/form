const supabase = window.supabase.createClient("YOUR_SUPABASE_URL", "YOUR_ANON_KEY");


document.getElementById("applicationForm").addEventListener("submit", async (e) => {
e.preventDefault();


const name = document.getElementById("name").value;
const age = document.getElementById("age").value;
const reason = document.getElementById("reason").value;


const { data, error } = await supabase.from("applications").insert({
name,
age,
reason,
});


if (error) {
alert("Failed to submit: " + error.message);
} else {
navigate("/review");
}
});