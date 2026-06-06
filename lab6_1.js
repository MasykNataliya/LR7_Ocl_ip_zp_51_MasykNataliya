const btn = document.getElementById("submitBtn");
const input = document.getElementById("nameField");

btn.addEventListener("click", () => {
  alert(`Ви ввели: ${input.value}`);
});
