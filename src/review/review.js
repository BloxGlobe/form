const SUPABASE_URL = "https://your-project-ref.supabase.co";
const SUPABASE_ANON_KEY = "your-anon-key";
const supabaseReview = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function loadReviews() {
  const { data, error } = await supabaseReview
    .from("applications")
    .select()
    .order("id", { ascending: false });

  if (error) {
    document.getElementById("review").innerHTML = "<p>Error loading applications.</p>";
    console.error(error);
    return;
  }

  if (!data || !data.length) {
    document.getElementById("review").innerHTML = "<p>No applications yet.</p>";
    return;
  }

  document.getElementById("review").innerHTML = data.map(item => `
    <div class="app-card">
      <p><strong>Name:</strong> ${escapeHtml(item.name)}</p>
      <p><strong>Age:</strong> ${escapeHtml(item.age)}</p>
      <p><strong>Reason:</strong> ${escapeHtml(item.reason)}</p>
    </div>
  `).join("");
}

function escapeHtml(str){ return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#39;'}[s])); }

loadReviews();
