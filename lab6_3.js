const passwordField = document.getElementById("password");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleBtn.textContent = "Приховати";
  } else {
    passwordField.type = "password";
    toggleBtn.textContent = "Розкрити";
  }
});
