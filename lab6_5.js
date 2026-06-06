const placeDiv = document.getElementById("place");

window.addEventListener("click", (event) => {
  if (event.target === placeDiv) {
    console.log(true); // Клік у div
  } else {
    console.log(false); // Клік поза div
  }
});
