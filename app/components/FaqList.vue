<script setup lang="ts">
// Réutilise la directive commune
const vIntersect = {
  mounted(el: HTMLElement, binding: any) {
    const className = binding?.value?.class ?? 'is-visible'
    const once = binding?.value?.once ?? true
    const threshold = binding?.value?.threshold ?? 0.2

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add(className)
          if (once) io.unobserve(el)
        } else if (!once) {
          el.classList.remove(className)
        }
      })
    }, { threshold })

    // @ts-ignore - attache pour cleanup
    el.__io = io
    io.observe(el)
  },
  unmounted(el: any) { el.__io?.disconnect?.() }
}
</script>

<template>
  <section
    aria-labelledby="faq-title"
    id="faq"
    class="section-separator reveal-faq"
    v-intersect="{ threshold: 0.12, once: true }"
  >
    <h2 id="faq-title" data-reveal-faq>FAQ</h2>

    <div class="container" data-reveal-faq>
      <details data-reveal-faq><summary>Puis-je commencer petit ?</summary><p>Oui ! Mon agent IA est évolutif et peut s'adapter à vos besoins. Vous pouvez commencez petit et étendre les fonctionnalités au fur et à mesure.</p></details>
      <details data-reveal-faq><summary>Quels sont les délais de réalisation ?</summary><p>4 à 16 jours selon le pack choisi.</p></details>
      <details data-reveal-faq><summary>Quelles intégrations sont possibles ?</summary><p>Shopify, WooCommerce, WhatsApp, Instagram, Messenger, Telegram, Calendly, Cal, Google Calendar, Notion, Google Sheets, HubSpot, APIs.</p></details>
      <details data-reveal-faq><summary>Quelles langues ?</summary><p>Mon agent IA est disponible en plusieurs langues (FR/EN sur demande).</p></details>
      <details data-reveal-faq><summary>Proposez-vous une maintenance & amélioration continue ?</summary><p>Oui, c'est l'objet d'un accompagnement personnalisé dont le tarif dépend de la portée du projet.</p></details>
      <details data-reveal-faq><summary>Quelles sont les limites de l'IA ?</summary><p>Cas complexes et très rares redirigés vers un humain - décisions sensibles non automatisées.</p></details>
      <details data-reveal-faq><summary>Aurais-je accès à mon système automatisé ?</summary><p>Oui, vous avez l'accès et le contrôle total. Vous êtes propriétaire du code n8n, prompts et connecteurs.</p></details>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "sass:color";
@use "@/assets/css/main" as *;

/* ===== Reveal au scroll (FAQ) ===== */
.reveal-faq [data-reveal-faq] {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity .45s ease, transform .45s ease;
  // will-change: opacity, transform;
}
.reveal-faq.is-visible [data-reveal-faq] {
  opacity: 1;
  transform: none;
}

/* Stagger: titre -> container -> chaque <details> en cascade */
.reveal-faq.is-visible #faq-title[data-reveal-faq] { transition-delay: .00s; }
.reveal-faq.is-visible .container[data-reveal-faq] { transition-delay: .06s; }
.reveal-faq .container details[data-reveal-faq] { opacity: 0; transform: translateY(8px); }
.reveal-faq.is-visible .container details[data-reveal-faq] { opacity: 1; transform: none; }
.reveal-faq.is-visible .container details:nth-child(1) { transition-delay: .10s; }
.reveal-faq.is-visible .container details:nth-child(2) { transition-delay: .14s; }
.reveal-faq.is-visible .container details:nth-child(3) { transition-delay: .18s; }
.reveal-faq.is-visible .container details:nth-child(4) { transition-delay: .22s; }
.reveal-faq.is-visible .container details:nth-child(5) { transition-delay: .26s; }
.reveal-faq.is-visible .container details:nth-child(6) { transition-delay: .30s; }
.reveal-faq.is-visible .container details:nth-child(7) { transition-delay: .34s; }
.reveal-faq.is-visible .container details:nth-child(8) { transition-delay: .38s; }
.reveal-faq.is-visible .container details:nth-child(9) { transition-delay: .42s; }
.reveal-faq.is-visible .container details:nth-child(10){ transition-delay: .46s; }

/* Accessibilité */
@media (prefers-reduced-motion: reduce) {
  .reveal-faq [data-reveal-faq] {
    transition: none !important; opacity: 1 !important; transform: none !important;
  }
}

/* ===== Ton style existant ===== */
#faq {
  width: 100%;
  @include flex-center;
  flex-direction: column;
  gap: 2rem;
  min-height: 50%;

  .container {
    width: 100%;
    max-width: 800px;

    details {
      padding: 10px 20px;
      margin: 10px 0;
      border-radius: 1.5rem;
      background-color: $color-dark;
      cursor: pointer;

      &:hover {
        box-shadow: 0 4px 20px rgba(0,0,0,.3);
        color: $color-muted;
      }
    }
  }
}

/* Smooth pour <details>/<summary> sans JS (conservé) */
#faq .container details {
  display: grid;
  grid-template-rows: auto 0fr;
  transition: grid-template-rows 250ms ease, color .2s ease, box-shadow .2s ease;
}
#faq .container details[open] { grid-template-rows: auto 1fr; }

#faq .container details::details-content {
  grid-row: 2;
  overflow: hidden;
}

/* Fade/slide du contenu lors de l’ouverture */
@media (prefers-reduced-motion: no-preference) {
  #faq .container details[open]::details-content > * {
    animation: faq-reveal 250ms ease both;
  }
  @keyframes faq-reveal {
    from { opacity: 0; transform: translateY(-4px); }
    to   { opacity: 1; transform: translateY(0); }
  }
}

/* Respect des préférences */
@media (prefers-reduced-motion: reduce) {
  #faq .container details { transition: none; }
}
</style>
