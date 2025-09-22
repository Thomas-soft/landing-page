export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    'nuxt-gtag',
    '@dargmuesli/nuxt-cookie-control',
    '@nuxt/image', '@nuxt/icon', '@nuxt/fonts', '@nuxt/content', '@nuxthub/core'
  ],

  // nuxt-gtag (doc v4): init manuel + Consent Mode par défaut (denied)
  gtag: {
    id: 'G-4ZXHSMDKRC',
    initMode: 'manual', // n’injecte PAS gtag.js tant qu’on n’appelle pas initialize()
    initCommands: [
      ['consent', 'default', {
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        ad_storage: 'denied',
        analytics_storage: 'denied',
        wait_for_update: 500
      }]
    ],
    config: { anonymize_ip: true } // optionnel
  },

  // Cookie banner
  cookieControl: {
    barPosition: 'bottom-full',
    // Pour tester, tu peux forcer l’ouverture :
    locales: ['fr', 'en'],
    cookies: {
      necessary: [
        {
          id: 'essential',
          name: { fr: 'Cookies essentiels', en: 'Essential Cookies' },
          description: {
            fr: 'Nécessaires au fonctionnement du site.',
            en: 'Required for site functionality.'
          },
          targetCookieIds: []
        }
      ],
      optional: [
        {
          id: 'ga',
          name: { fr: 'Google Analytics', en: 'Google Analytics' },
          description: {
            fr: 'Mesure d\'audience (GA4).',
            en: 'Analytics (GA4).'
          },
          targetCookieIds: ['_ga', '_gid'] // pas de wildcard ici
        }
      ]
    }
  },

  ssr: true,
  target: 'static',
  app: { head: { htmlAttrs: { lang: 'fr' } } },
  nitro: {
    preset: 'cloudflare_module',
    routeRules: {
      '/mentions-legales': {
        headers: { 'x-robots-tag': 'noindex, follow' }
      },
      '/confidentialite': {
        headers: { 'x-robots-tag': 'noindex, follow' }
      }
    }
  },
  css: ['@/assets/css/main.scss'],
  routeRules: {
    '/**': { prerender: true },
    '/_nuxt/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
    '/images/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } }
  },
  experimental: { viewTransition: false }
})
