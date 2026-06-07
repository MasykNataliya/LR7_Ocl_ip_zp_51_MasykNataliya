// Ключ для локального сховища
const STORAGE_KEY = "feedback-form-state";

// Оголошення глобального об'єкта стану форми
const formData = {
  email: "",
  message: "",
};

const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;

// 1. ПЕРЕВІРКА СХОВИЩА ПРИ ЗАВАНТАЖЕННІ СТОРІНКИ
populateForm();

function populateForm() {
  const savedState = localStorage.getItem(STORAGE_KEY);

  if (savedState) {
    try {
      const parsedData = JSON.parse(savedState);

      // Заповнюємо об'єкт formData і поля форми, уникаючи undefined
      formData.email = parsedData.email?.trim() || "";
      formData.message = parsedData.message?.trim() || "";

      emailInput.value = formData.email;
      messageInput.value = formData.message;
    } catch (error) {
      console.error("Помилка парсингу даних з localStorage:", error);
    }
  }
}

// 2. ДЕЛЕГУВАННЯ ПОДІЇ INPUT (Відстеження змін)
form.addEventListener("input", onFormInput);

function onFormInput(event) {
  // Записуємо значення, очищаючи від пробілів по краях за допомогою trim()
  formData[event.target.name] = event.target.value.trim();

  // Зберігаємо актуальний об'єкт у локальне сховище
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// 3. ОБРОБКА САБМІТУ ФОРМИ
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  // Перевірка актуальних значень в об'єкті (чи заповнені обидва поля)
  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  // Якщо все заповнено — виводимо об'єкт у консоль
  console.log("Submitted Form Data:", formData);

  // Очищаємо локальне сховище
  localStorage.removeItem(STORAGE_KEY);

  // Очищаємо об'єкт formData
  formData.email = "";
  formData.message = "";

  // Очищаємо поля форми
  form.reset();
}
