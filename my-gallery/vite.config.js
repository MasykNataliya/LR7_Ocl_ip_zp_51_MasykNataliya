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
  base: "/LR7_Ocl_ip_zp_51_MasykNataliya/",
});
import { defineConfig } from "vite";
