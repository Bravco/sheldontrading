export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/content",
    "motion-v/nuxt"
  ],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en"
      },
      title: "@sheldontrading",
      meta: [
        { name: "title", content: "@sheldontrading" },
        { name: "description", content: "I am a funded $NQ scalper focused on catching small, consistent moves rather than chasing large trends." },
        { name: "keywords", content: "trading, trader, funded trader, portfolio" }
      ]
    }
  },
  image: {
    provider: "netlify",
    domains: ["sheldon.trading"]
  }
})