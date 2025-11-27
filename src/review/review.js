const supabaseReview = window.supabase.createClient("YOUR_SUPABASE_URL", "YOUR_ANON_KEY");


async function loadReviews() {
const { data, error } = await supabaseReview.from("applications").select();


if (error) return (document.getElementById("review").innerHTML = "Error loading applications.");


document.getElementById("review").innerHTML = data
.map(
(item) => `
<div style="padding:15px; background:#1a1a1a; margin:10px 0; border-radius:8px;">
<p><strong>Name:</strong> ${item.name}</p>
<p><strong>Age:</strong> ${item.age}</p>
<p><strong>Reason:</strong> ${item.reason}</p>
</div>`
)
.join("");
}


loadReviews();