import { images } from "./images.js";
// Замість import SimpleLightbox from "simplelightbox"; використовуйте:
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm.js";
import "simplelightbox/dist/simple-lightbox.min.css";

// Далі ваш поточний код без змін...

const gallery = document.getElementById("gallery");

// Генерация разметки: ссылка `<a>` должна содержать класс gallery-link
// и атрибут href с оригинальным изображением
gallery.innerHTML = images
  .map(
    (img) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${img.original}">
        <img class="gallery-image" src="${img.preview}" alt="${img.description}" />
      </a>
    </li>
  `,
  )
  .join("");

// Инициализация SimpleLightbox
// Ищем все ссылки внутри галереи, подписи берем из атрибута alt картинки
const lightbox = new SimpleLightbox("#gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
