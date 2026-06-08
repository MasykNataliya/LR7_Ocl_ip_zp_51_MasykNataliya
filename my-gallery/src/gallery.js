import { images } from "./images.js";

// Імпортуємо бібліотеку та її стилі для Vite
import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";

const gallery = document.getElementById("gallery");

// 1. Генерація розмітки галереї.
// Додаємо оригінальне посилання в data-source до елемента li для зручного зчитування.
gallery.innerHTML = images
  .map(
    (img) => `
    <li class="gallery-item" data-source="${img.original}">
      <img class="gallery-image" src="${img.preview}" alt="${img.description}" />
    </li>
  `,
  )
  .join("");

// 2. Делегування подій на батьківський елемент 'ul#gallery'
gallery.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  // Забороняємо стандартну поведінку (якщо всередині будуть посилання)
  event.preventDefault();

  // Перевіряємо, що клікнули саме по картинці
  const isImageTarget = event.target.classList.contains("gallery-image");
  if (!isImageTarget) return;

  // Знаходимо батьківський елемент 'li', щоб отримати посилання на велике фото
  const parentListItem = event.target.closest(".gallery-item");
  const largeImageUrl = parentListItem.dataset.source;
  const imageAlt = event.target.alt;

  // 3. Ініціалізація та відкриття модального вікна за документацією basicLightbox
  const instance = basicLightbox.create(`
    <div class="modal">
      <img src="${largeImageUrl}" alt="${imageAlt}" width="800" height="600" />
    </div>
  `);

  instance.show();

  // Додатково: закриття модального вікна після натискання клавіші Escape
  const handleEscape = (e) => {
    if (e.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", handleEscape);
    }
  };
  document.addEventListener("keydown", handleEscape);
}
