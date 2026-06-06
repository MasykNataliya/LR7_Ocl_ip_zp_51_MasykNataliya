function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const boxesInput = document.getElementById("boxesInput");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

function createBoxes(amount) {
  destroyBoxes(); // очищаємо попередню колекцію перед новою
  const boxes = [];

  let size = 30; // початковий розмір

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    boxes.push(box);
    size += 10; // кожен наступний більший на 10px
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = Number(boxesInput.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    boxesInput.value = ""; // очищаємо поле після створення
  } else {
    alert("Введіть число від 1 до 100");
  }
});

destroyBtn.addEventListener("click", destroyBoxes);
