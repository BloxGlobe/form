const SUPABASE_URL = "https://your-project-ref.supabase.co";
const SUPABASE_ANON_KEY = "your-anon-key";
const supabaseAdmin = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Example: mark an application approved (update row) — safe with RLS + role-based checks later
async function markApproved(id) {
  const { error } = await supabaseAdmin
    .from("applications")
    .update({ status: 'approved' })
    .eq('id', id);

  if (error) console.error(error);
  else alert("Marked approved");
}

// If you need a development-only "clear all" option: run it in Supabase Studio, not client.
document.getElementById("clear")?.addEventListener("click", () => {
  alert("Please delete test records from Supabase Studio (safer) — don't run admin deletes from the frontend.");
});
