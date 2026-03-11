import { defineConfig } from "vite"
import kiru from "vite-plugin-kiru"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [tailwindcss(), kiru({ ssg: true })],
})
