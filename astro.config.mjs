// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  srcDir: "./client",
  devToolbar: {
    enabled: false,
  },

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
