import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      simplelightbox: "simplelightbox/dist/simple-lightbox.esm.js",
    },
  },
});
import { defineConfig } from "vite";

export default defineConfig({
  define: {
    global: "window",
  },
});
