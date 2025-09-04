import { resolve } from "path"
import type { UserConfig } from "vite"

import staticMd from "vite-plugin-static-md"
import renderFn from "./src/lib/renderFn"

const OUT_DIR = resolve(__dirname, "dist")
const HTML_ROOT = resolve(__dirname, "src/pages")
const SRC_ROOT = resolve(__dirname, "src")

const ssg = staticMd({
  cssFile: resolve(SRC_ROOT, "styles/global.css"),
  renderFn,
})

export default {
  appType: "mpa",
  build: {
    outDir: OUT_DIR,
    rollupOptions: {
      input: {
        404: resolve(HTML_ROOT, "404.html"),
      },
    },
  },
  plugins: [ssg],
  resolve: { alias: { $: SRC_ROOT } },
  root: HTML_ROOT,
} satisfies UserConfig
