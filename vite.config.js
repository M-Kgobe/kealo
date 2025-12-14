// filepath: /c:/Mali/WEB_ANALYTICS/WEBDEV/Kealo/kealo-hr-website/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/kealo-hr-website/", // Set the base path to match your repository name
  plugins: [react()],
});