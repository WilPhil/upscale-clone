import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/upscale-clone",
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        business: path.resolve(__dirname, "business.html"),
        talent: path.resolve(__dirname, "talent.html"),
        jobs: path.resolve(__dirname, "jobs.html"),
        faq: path.resolve(__dirname, "faq.html"),
      },
    },
  },
});
