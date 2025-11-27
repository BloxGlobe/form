const SUPABASE_URL = "https://your-project-ref.supabase.co";
const SUPABASE_ANON_KEY = "your-anon-key";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById("applicationForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = Number(document.getElementById("age").value);
  const reason = document.getElementById("reason").value.trim();

  const { data, error } = await supabase
    .from("applications")
    .insert([{ name, age, reason }]);

  if (error) {
    console.error(error);
    alert("Failed to submit: " + error.message);
  } else {
    location.hash = "#/review";
  }
});
