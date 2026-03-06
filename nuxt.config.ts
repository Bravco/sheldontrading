export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxt/content", "motion-v/nuxt"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      htmlAttrs: { lang: "en" },
      title: "Andrew Trades",
      meta: [
        { name: "title", content: "Andrew Trades" },
        { name: "description", content: "I am Andrew, a funded $NQ scalper focused on catching small, consistent moves rather than chasing large trends." },
        { name: "keywords", content: "trading, trader, funded trader, portfolio" }
      ]
    }
  },
  nitro: {
    prerender: {
      routes: [ "/" ],
      crawlLinks: true
    }
  },
  image: {
    provider: process.env.NETLIFY ? "netlify" : "ipx",
    domains: ["sheldon.trading", "andrewtrades.com"]
  }
})