import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import inn from "@innatical/inn.ts";
import mdx from "vite-plugin-mdx";
import remarkPrism from "remark-prism";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx({
      remarkPlugins: [remarkPrism],
    }),
    inn(),
  ],
});
