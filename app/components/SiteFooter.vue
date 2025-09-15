<script setup lang="ts">
const route = useRoute()
const isActive = (path: string) => route.path === path ? 'page' : undefined
</script>

<template>
  <footer class="footer" aria-labelledby="site-footer">
    <h2 id="site-footer" class="sr-only">Pied de page</h2>

    <nav class="footer__nav" aria-label="Liens utiles">
      <ul class="footer__list list-unstyled">
        <!-- Liens internes en NuxtLink (pas de reload) -->
        <li>
          <NuxtLink to="/mentions-legales" class="btn" :aria-current="isActive('/mentions-legales')">
            Mentions légales
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/confidentialite" class="btn" :aria-current="isActive('/confidentialite')">
            Politique de confidentialité
          </NuxtLink>
        </li>

        <!-- sitemap.xml = fichier statique : <a> normal -->
        <li>
          <a href="/sitemap.xml" class="btn">Sitemap</a>
        </li>

        <!-- Liens externes : nouvelle fenêtre + sécurité -->
        <!-- <li><a href="{google_url_placeholder}"   target="_blank" rel="me noopener noreferrer" class="btn">Fiche Google</a></li> -->
        <li><a href="tel:+33623034405" class="btn">Tel: 06 23 03 44 05</a></li>
        <li><a href="mailto:contact@thomastofil.fr" class="btn">Email: contact@thomastofil.fr</a></li>
      </ul>
    </nav>

    <small class="footer__copy">© {{ new Date().getFullYear() }} Thomas Tofil. Tous droits réservés.</small>
  </footer>
</template>

<style scoped lang="scss">
/* ⚠️ Ne pas @use un CSS global dans un composant. Déclare ton global dans nuxt.config.ts (css: ['@/assets/css/main.scss']) */

$fg: #e8eef7;
$muted: #a6b3c2;

.footer {
  background: linear-gradient(180deg, var(--c-bg, #1e144f), #0b0f14);
  padding: 2rem 1.5rem;
  text-align: center;
  color: $fg;
  font-size: .9375rem;
}

.sr-only {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
}

.footer__nav { margin-bottom: 1rem; }

.footer__list {
  padding: 0; margin: 0;
  display: flex; flex-wrap: wrap; justify-content: center; gap: 1.25rem;

  .btn {
    margin: 0;
    color: $muted;
    text-decoration: none;
    font-weight: 500;
    transition: color .2s ease;

    &:hover,
    &:focus-visible { color: var(--c-link-hover, #cbb9ff); }

    /* Indique la page active aux lecteurs d'écran et visuellement */
    &[aria-current="page"] { color: #fff; text-decoration: underline; text-underline-offset: .15em; }
  }
}

.footer__copy {
  display: block; color: $muted; font-size: .875rem; margin-top: 1rem;
}
</style>
