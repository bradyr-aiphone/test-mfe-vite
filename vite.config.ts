// vite.config.ts for a Vite + React project

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vitePluginSingleSpa from "vite-plugin-single-spa";

// https://vitejs.dev/config/
export default ({ command }: { command: string }) =>
  defineConfig({
    base: command === "build" ? "http://localhost:5173/dist/" : "./", // Ensure correct asset import locations,
    plugins: [
      react(),
      vitePluginSingleSpa({
        serverPort: 5173,
        spaEntryPoints: "src/spa.tsx",
      }),
    ],
  });
