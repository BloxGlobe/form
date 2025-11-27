// Global helper functions

function showError(message) {
  alert(message);
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function validateRequired(id, label) {
  const el = document.getElementById(id);
  if (!el.value.trim()) {
    showError(label + " is required.");
    return false;
  }
  return true;
}
