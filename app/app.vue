<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'fr' },                  // Langue du document
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#1e144f' },   // Couleur d’habillage (PWA/android)
    { name: 'format-detection', content: 'telephone=no' }, // Évite l’auto-liage des n° de tel
    { name: 'referrer', content: 'strict-origin-when-cross-origin' } // Référent propre
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'canonical', href: 'https://thomastofil.fr/' }
    // Ajoute ici des preconnect si tu utilises un CDN spécifique
    // { rel: 'preconnect', href: 'https://cdn.example.com', crossorigin: '' }
  ]
})

</script>

<template>
  <NuxtLayout>
    <a href="#content" class="skip-link">Aller au contenu principal</a>

    <NuxtPage />
    <NuxtRouteAnnouncer />
  </NuxtLayout>
</template>

<style>
.skip-link {
  position: absolute;
  left: 0.5rem;
  top: -3rem;
  z-index: 1000;
  padding: 0.5rem 0.75rem;
  background: #ffffff;
  color: #111827;
  border-radius: 0.5rem;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0,0,0,.15);
}
.skip-link:focus { top: 0.5rem; }


</style>
