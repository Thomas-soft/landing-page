<script setup lang="ts">
// réutilise la directive si tu l'as placée dans /directives
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
    class="pricing section-separator reveal-pricing"
    aria-labelledby="offers-title"
    id="offres"
    v-intersect="{ threshold: 0.15, once: true }"
  >
    <header class="pricing__header" data-reveal-pricing>
      <h2 id="offers-title" class="pricing__title" data-reveal-pricing>Mes offres</h2>
      <p class="pricing__subtitle" data-reveal-pricing>Choisissez le pack qui correspond le mieux à vos besoins.</p>
    </header>

    <div class="pricing__grid" data-reveal-pricing>
      <article class="card" data-reveal-pricing="card-left">
        <header class="card__head">
          <h3 class="card__title">Essentiel</h3>
          <p class="card__tag">Idéal salons & petites boutiques.</p>
        </header>
        <ul class="card__list list-unstyled">
          <li class="card__item--ok">Réponses automatiques (FAQ, horaires, prix, suivi simple)</li>
          <li class="card__item--ok">Compréhension du contexte dans la conversation</li>
          <li class="card__item--ok">Intégration site web (WordPress, WooCommerce, etc.)</li>
          <li class="card__item--ok">Personnalisation basique (logo, nom, couleurs)</li>
          <li class="card__item--ok">Un canal (Email, Site web, WhatsApp, Messenger, Telegram)</li>
          <li class="card__item--no">Multi-canaux</li>
          <li class="card__item--no">Actions simples (RDV, formulaires, transfert humain)</li>
          <li class="card__item--no">Personnalisation avancée (FAQ, documentation, contenu, etc.)</li>
          <li class="card__item--no">Personnalisation e-commerce (suivi de commandes Shopify/WooCommerce, relance panier abandonné, etc.)</li>
          <li class="card__item--no">Automatisations CRM (Création/MAJ de fiches clients)</li>
          <li class="card__item--no">Automatisations support SAV avancées (Création de ticket, notifications)</li>
          <li class="card__item--no">Personnalisation sur-mesure (connexion API, webhook, base clients, données internes)</li>
        </ul>
        <a href="#contact" class="btn btn--primary">Démarrer pour 250&#x20AC;</a>
      </article>

      <article class="card" data-reveal-pricing="card-up">
        <header class="card__head">
          <h3 class="card__title">Pro</h3>
          <p class="card__tag">E-commerce &amp; multi-sites.</p>
        </header>
        <ul class="card__list list-unstyled">
          <li class="card__item--ok">Réponses automatiques (FAQ, horaires, prix, suivi simple)</li>
          <li class="card__item--ok">Compréhension du contexte dans la conversation</li>
          <li class="card__item--ok">Intégration site web (WordPress, WooCommerce, etc.)</li>
          <li class="card__item--ok">Personnalisation basique (logo, nom, couleurs)</li>
          <li class="card__item--ok">Un canal (Email, Site web, WhatsApp, Messenger, Telegram)</li>
          <li class="card__item--ok">Multi-canaux</li>
          <li class="card__item--ok">Actions simples (RDV, formulaires, transfert humain)</li>
          <li class="card__item--no">Personnalisation avancée (FAQ, documentation, contenu, etc.)</li>
          <li class="card__item--no">Personnalisation e-commerce (suivi de commandes Shopify/WooCommerce, relance panier abandonné, etc.)</li>
          <li class="card__item--no">Automatisations CRM (Création/MAJ de fiches clients)</li>
          <li class="card__item--no">Automatisations support SAV avancées (Création de ticket, notifications)</li>
          <li class="card__item--no">Personnalisation sur-mesure (connexion API, webhook, base clients, données internes)</li>
        </ul>
        <a href="#contact" class="btn btn--primary">Démarrer pour 350&#x20AC;</a>
      </article>

      <article class="card card--featured" data-reveal-pricing="card-right-zoom">
        <header class="card__head">
          <h3 class="card__title">Premium</h3>
          <p class="card__tag">Sur-mesure &amp; SLA.</p>
        </header>
        <ul class="card__list list-unstyled">
          <li class="card__item--ok">Réponses automatiques (FAQ, horaires, prix, suivi simple)</li>
          <li class="card__item--ok">Compréhension du contexte dans la conversation</li>
          <li class="card__item--ok">Intégration site web (WordPress, WooCommerce, etc.)</li>
          <li class="card__item--ok">Personnalisation basique (logo, nom, couleurs)</li>
          <li class="card__item--ok">Un canal (Email, Site web, WhatsApp, Messenger, Telegram)</li>
          <li class="card__item--ok">Multi-canaux</li>
          <li class="card__item--ok">Actions simples (RDV, formulaires, transfert humain)</li>
          <li class="card__item--ok">Personnalisation avancée (FAQ, documentation, contenu, etc.)</li>
          <li class="card__item--ok">Personnalisation e-commerce (suivi de commandes Shopify/WooCommerce, relance panier abandonné, etc.)</li>
          <li class="card__item--ok">Automatisations CRM (Création/MAJ de fiches clients)</li>
          <li class="card__item--ok">Automatisations support SAV avancées (Création de ticket, notifications)</li>
          <li class="card__item--ok">Personnalisation sur-mesure (connexion API, webhook, base clients, données internes)</li>
        </ul>
        <a href="#contact" class="btn btn--primary btn--glow">Démarrer à partir de 969&#x20AC;</a>
      </article>
    </div>

    <p class="pricing__badges" data-reveal-pricing>Résultat garanti • Satisfait ou remboursé</p>
  </section>
</template>

<style scoped lang="scss">
@use "sass:color";
@use "@/assets/css/main" as *;

/* ================= Reveal au scroll (Pricing) ================= */
.reveal-pricing [data-reveal-pricing] {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity .55s ease, transform .55s ease;
  // will-change: opacity, transform;
}

/* variantes d’entrée pour les cartes */
.reveal-pricing [data-reveal-pricing="card-left"]      { transform: translateX(-18px); }
.reveal-pricing [data-reveal-pricing="card-up"]        { transform: translateY(22px); }
.reveal-pricing [data-reveal-pricing="card-right-zoom"]{ transform: translateX(18px) scale(.98); }

.reveal-pricing.is-visible [data-reveal-pricing],
.reveal-pricing.is-visible [data-reveal-pricing="card-left"],
.reveal-pricing.is-visible [data-reveal-pricing="card-up"],
.reveal-pricing.is-visible [data-reveal-pricing="card-right-zoom"] {
  opacity: 1;
  transform: none;
}

/* Stagger : header -> grid -> cartes 1/2/3 -> badges */
.reveal-pricing.is-visible .pricing__header[data-reveal-pricing] { transition-delay: .00s; }
.reveal-pricing.is-visible .pricing__grid[data-reveal-pricing]   { transition-delay: .06s; }
.reveal-pricing.is-visible .pricing__grid .card[data-reveal-pricing]:nth-child(1) { transition-delay: .12s; }
.reveal-pricing.is-visible .pricing__grid .card[data-reveal-pricing]:nth-child(2) { transition-delay: .18s; }
.reveal-pricing.is-visible .pricing__grid .card[data-reveal-pricing]:nth-child(3) { transition-delay: .24s; }
.reveal-pricing.is-visible .pricing__badges[data-reveal-pricing] { transition-delay: .30s; }

/* Optionnel : les items de liste se révèlent vite après la carte */
.reveal-pricing.is-visible .card .card__list li { 
  transition: opacity .35s ease .18s, transform .35s ease .18s;
  opacity: 1; transform: none;
}
.reveal-pricing .card .card__list li { opacity: 0; transform: translateY(6px); }

/* Accessibilité */
@media (prefers-reduced-motion: reduce) {
  .reveal-pricing [data-reveal-pricing],
  .reveal-pricing .card .card__list li {
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}

/* ================ Ton CSS existant (inchangé) ================ */
$bg: #0b0f14; $bg-accent: #14162a; $fg: #e8eef7; $muted: #b5c0cf;
$primary: #6ae3ff; $primary-ink: #041318; $accent: #b178ff; $ok: #3fe18d;
$border: rgba(255,255,255,.14); $border-soft: rgba(255,255,255,.08);
$shadow: 0 12px 40px rgba(0,0,0,.45);

.pricing { position: relative; isolation: isolate; min-height: 50vh;
  @include flex-center; flex-direction: column; color: $fg;

  &__header { text-align: center; margin: 0 auto 2.25rem; max-width: 70ch; }
  &__title  { margin: 0 0 .5rem; font-weight: 900; letter-spacing: -0.02em;
              font-size: clamp(2rem, 1.2rem + 2vw, 3rem); }
  &__subtitle { margin: 0; color: $muted; font-size: clamp(.95rem, .85rem + .2vw, 1.0625rem); }

  &__grid {
    max-width: 1100px; margin: 0 auto; display: grid; gap: 1.5rem; grid-template-columns: 1fr;
    @media (min-width: 960px) { grid-template-columns: repeat(3, 1fr); }
  }

  &__badges { margin: 2rem auto 0; text-align: center; color: $muted; font-size: .95rem; }
}

.card {
  background: rgba(255,255,255,.03); border: 1px solid $border-soft; border-radius: 1rem;
  padding: 1.5rem; box-shadow: $shadow; display: flex; flex-direction: column; gap: 1rem;
  transition: transform .15s ease, box-shadow .2s ease, border-color .2s ease;

  &__head { padding-bottom: .75rem; border-bottom: 1px solid $border-soft; }
  &__title { margin: 0; font-size: 1.5rem; font-weight: 800; }
  &__tag { margin: .25rem 0 0; color: $muted; font-weight: 600; }
  &__list { margin: .25rem 0 0; padding: 0; display: grid; gap: .6rem; }

  &__item { position: relative; padding-left: 1.6rem; line-height: 1.45;
    &::before {
      content: "✓"; position: absolute; left: 0; top: 0; width: 1.1rem; height: 1.1rem;
      display: inline-grid; place-items: center; font-weight: 800; color: $ok;
      filter: drop-shadow(0 2px 8px rgba($ok,.3));
    }
  }

  .card__item--ok::before { content: "✓"; color: #3fe18d; }
  .card__item--no::before { content: "✕"; color: #ff4d4f; }

  &__guarantee { margin-top: .25rem; color: $muted; font-size: .95rem; }

  &--featured {
    border-color: rgba($primary,.45);
    background: linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02)), rgba(255,255,255,.03);
    box-shadow: 0 0 0 1px rgba($primary,.25) inset, 0 18px 60px rgba(106,227,255,.12), $shadow;

    .card__title { color: $primary; }
  }
}

.btn { --pad-y: .9rem; --pad-x: 1.1rem; display: inline-flex; align-items: center; justify-content: center;
  gap: .5rem; padding: var(--pad-y) var(--pad-x); border-radius: .9rem; font-weight: 800; text-decoration: none;
  border: 1px solid transparent; margin-top: auto;

  &--primary {
    background: linear-gradient(180deg, color.adjust($primary, $lightness: 8%), $primary);
    color: $primary-ink; border-color: rgba($primary,.6); box-shadow: 0 8px 28px rgba($primary,.22);

    &:hover { transform: translateY(-1px); box-shadow: 0 10px 34px rgba($primary,.28); }
  }
  &--glow { box-shadow: 0 0 0 2px rgba($primary,.35) inset, 0 12px 40px rgba($primary,.28); }
}
</style>
