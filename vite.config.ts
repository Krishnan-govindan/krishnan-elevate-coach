import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// IMPORTANT: set base to your REPO name for GitHub Pages project sites
// Your site will be served at: https://<user>.github.io/<repo>/…
const base = "/krishnan-elevate-coach/";

export default defineConfig(({ mode }) => ({
  base, // critical for GitHub Pages
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // If you add a backend later, you can proxy API calls during local dev:
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://your-render-service.onrender.com",
  //       changeOrigin: true,
  //       secure: true,
  //     },
  //   },
  // },
}));
