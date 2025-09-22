// plugins/consent-gtag.client.ts
export default defineNuxtPlugin(() => {
  if (import.meta.server) return

  const { gtag, initialize } = useGtag()
  const { cookiesEnabledIds } = useCookieControl()

  function initOnce() {
    // évite toute double injection, même en HMR
    if ((window as any).__GA_INIT__) return
    initialize?.()                   // injecte gtag.js (initMode: 'manual')
    ;(window as any).__GA_INIT__ = true
  }

  function grant() {
    gtag?.('consent', 'update', { analytics_storage: 'granted' })
  }

  function deny() {
    gtag?.('consent', 'update', { analytics_storage: 'denied' })
  }

  function sync(ids?: string[]) {
    const list = Array.isArray(ids) ? ids : []
    if (list.includes('ga')) {
      // 1) charge d'abord le script
      initOnce()
      // 2) puis mets à jour le consent (au tick suivant pour éviter 2 writes rafales)
      queueMicrotask(grant)
    } else {
      deny()
    }
  }

  // état initial
  sync(cookiesEnabledIds?.value)

  // changements de consentement
  watch(() => cookiesEnabledIds?.value, (ids) => sync(ids))
})
