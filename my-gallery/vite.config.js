import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      simplelightbox: "simplelightbox/dist/simple-lightbox.esm.js",
    },
  },
  define: {
    global: "window",
  },
});
import { defineConfig } from "vite";
