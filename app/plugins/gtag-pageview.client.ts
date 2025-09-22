// // plugins/gtag-pageview.client.ts
// export default defineNuxtPlugin(() => {
//   if (process.server) return
//   const router = useRouter()
//   const { gtag } = useGtag()
//   const { cookiesEnabledIds } = useCookieControl()

//   const ok = () => cookiesEnabledIds?.value?.includes('ga')

//   const send = (path: string) => {
//     if (!ok()) return
//     gtag('config', 'G-4ZXHSMDKRC', { page_path: path })
//   }

//   // première vue + navigations
//   send(router.currentRoute.value.fullPath)
//   router.afterEach((to) => send(to.fullPath))
// })
