export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/content",
    "motion-v/nuxt"
  ],
  css: ["~/assets/css/main.css"]
})