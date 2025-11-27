const supabaseAdmin = window.supabase.createClient("YOUR_SUPABASE_URL", "YOUR_ANON_KEY");


document.getElementById("clear").addEventListener("click", async () => {
const { error } = await supabaseAdmin.from("applications").delete().neq("id", 0);


if (error) {
document.getElementById("status").innerText = "Failed: " + error.message;
} else {
document.getElementById("status").innerText = "All applications cleared.";
}
});