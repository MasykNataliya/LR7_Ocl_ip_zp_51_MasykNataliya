import { defineConfig } from "vite";

export default defineConfig({
  base: "/LR7_Ocl_ip_zp_51_MasykNataliya/",
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
