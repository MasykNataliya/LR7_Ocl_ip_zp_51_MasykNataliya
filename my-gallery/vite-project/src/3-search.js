window.global = window;

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const gallery = document.getElementById("gallery");
const loader = document.getElementById("loader");

const LightboxConstructor = SimpleLightbox.default || SimpleLightbox;

const lightbox = new LightboxConstructor("#gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.warning({
      title: "Warning",
      position: "topRight",
      message: "Введіть ключове слово для пошуку!",
    });
    return;
  }

  gallery.innerHTML = "";
  loader.classList.remove("hidden");

  try {
    const response = await fetch(
      "https://pixabay.com/api/?key=56210473-e210368ea5e764e12547e4976&q=" +
        encodeURIComponent(query) +
        "&image_type=photo&orientation=horizontal&safesearch=true",
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    loader.classList.add("hidden");

    if (data.hits.length === 0) {
      iziToast.error({
        title: "Error",
        position: "topRight",
        message:
          "Sorry, there are no images matching your search query. Please try again!",
      });
      return;
    }

    const markup = data.hits
      .map(
        (img) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${img.largeImageURL}">
            <img src="${img.webformatURL}" alt="${img.tags}" class="gallery-image" />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b> <span class="info-value">${img.likes}</span></p>
            <p class="info-item"><b>Views</b> <span class="info-value">${img.views}</span></p>
            <p class="info-item"><b>Comments</b> <span class="info-value">${img.comments}</span></p>
            <p class="info-item"><b>Downloads</b> <span class="info-value">${img.downloads}</span></p>
          </div>
        </li>
      `,
      )
      .join("");

    gallery.innerHTML = markup;

    lightbox.refresh();
    form.reset();
  } catch (error) {
    loader.classList.add("hidden");
    iziToast.error({
      title: "Error",
      position: "topRight",
      message: "Сталася помилка при завантаженні зображень!",
    });
    console.error("Помилка під час виконання запиту:", error);
  }
});
