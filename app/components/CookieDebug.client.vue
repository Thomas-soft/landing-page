<script setup lang="ts">
const cc = useCookieControl?.()
</script>

<template>
  <pre style="position:fixed;bottom:4rem;right:1rem;z-index:100000;background:#111;color:#0f0;padding:.5rem">
    {{ { hasComposable: !!cc, keys: cc ? Object.keys(cc) : [] } }}
  </pre>
</template>
