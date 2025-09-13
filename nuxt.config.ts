export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/image', '@nuxt/icon', '@nuxt/fonts', '@nuxt/content', '@nuxthub/core'],

  ssr: true,
  target: 'static',
  app: { head: { htmlAttrs: { lang: 'fr' } } },

  nitro: { preset: 'cloudflare_pages' }, // <-- changer ici

  css: ['@/assets/css/main.scss'],
  routeRules: {
    '/**': { prerender: true },
    '/_nuxt/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
    '/images/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } }
  },

  experimental: { viewTransition: false }
})
