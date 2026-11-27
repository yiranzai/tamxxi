import { defineConfig } from "astro/config";
import react from "@astrojs/react";

const rawBase = process.env.BASE_PATH ?? "/";
const base = rawBase === "/" ? "/" : rawBase.replace(/\/$/, "");

export default defineConfig({
  site: process.env.SITE_URL ?? "https://yiranzai.github.io",
  base,
  integrations: [react()],
  output: "static",
  build: { format: "directory" },
});
