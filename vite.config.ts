import { defineConfig } from "vite";
import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        // Point to all the HTML files you want to bundle into your final build
        main: resolve(__dirname, "index.html"),
        tia: resolve(__dirname, "project-tia.html"),
        nyp: resolve(__dirname, "project-nyp.html"),
        moh: resolve(__dirname, "project-moh.html"),
      },
    },
  },
});
