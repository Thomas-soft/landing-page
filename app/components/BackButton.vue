<script setup lang="ts">
const router = useRouter()

// Retour possible dans l'historique Vue Router ? (in-app)
const canGoBack = computed(() => {
  if (!process.client) return false
  // Vue Router stocke l'état dans history.state ; si "back" est nul → pas d'entrée interne
  return !!(window.history.state && (window.history.state as any).back)
})

function goBack(e: MouseEvent) {
  e.preventDefault()
  e.stopPropagation()
  if (canGoBack.value) router.back()
  else router.push('/') // fallback SPA vers l’accueil (pas de reload)
}
</script>

<template>
  <div class="back-wrap" aria-label="Navigation secondaire">
    <button
      type="button"
      class="btn btn-secondary"
      @click="goBack"
      aria-label="Revenir à la page précédente"
    >
      ← Retour
    </button>
    <noscript>
      <a href="/" class="btn btn-secondary">← Accueil</a>
    </noscript>
  </div>
</template>

<style scoped>
.back-wrap { margin: 0 0 1rem; }
/* rien d'autre, on réutilise tes classes .btn/.btn-secondary */
</style>
