<script setup lang="ts">
defineProps<{
  city: string; country: string; platforms: string;
  primaryCtaText: string;
}>()

/** Directive v-intersect : ajoute une classe quand l'élément devient visible */
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
  <!-- Ajout des classes reveal + directive  -->
  <section
    class="hero section-separator reveal"
    aria-labelledby="hero-title"
    v-intersect="{ threshold: 0.1, once: true }"
  >
    <div class="container hero__grid">

      <div class="hero__content">
        <h1 id="hero-title" data-reveal>
          Votre Agent IA, 24/7 — Service client &amp; réservations automatisés
        </h1>
        <p class="subtitle" data-reveal>
          Automatisez le service client grâce à l'orchestration des chatbots via Email (Gmail, Outlook etc.), WhatsApp, Instagram, Messenger, Telegram ou encore sur votre site internet.
        </p>
        <ul class="bullets list-unstyled" role="list">
          <li data-reveal>Réponses instantanées (FAQ, retours, statuts colis)</li>
          <li data-reveal>Assistance d'achat&nbsp;: recommandations, panier abandonné, upsell</li>
          <li data-reveal>Suivi de commandes &amp; numéros de suivi en self-service</li>
          <li data-reveal>Intégration au CRM, création de ticket &amp; reporting</li>
          <li data-reveal>Prise de rendez-vous, confirmations &amp; rappels</li>
        </ul>
        <div class="ctas" data-reveal>
          <a class="btn btn-secondary" href="#contact" :aria-label="primaryCtaText">
            {{ primaryCtaText }}
          </a>
        </div>
      </div>

      <div class="hero__media" data-reveal>
        <figure>
          <img 
            src="/placeholder-hero.webp"
            alt="Agent IA intelligent connectant des applications"
            width="600" height="600"
            loading="lazy"
          >
          <figcaption>
            Email • WhatsApp • Instagram • Messenger • Telegram • Site Web
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/css/main" as *;

/* ----- Effets reveal (100% SCSS) ----- */
.reveal [data-reveal] {
  opacity: 0;
  transform: translateY(14px);
  transition: opacity .6s ease, transform .6s ease;
}

/* Quand la section devient visible, on enlève le décalage et on fade-in */
.reveal.is-visible [data-reveal] {
  opacity: 1;
  transform: none;
}

/* Stagger simple (décalage d'animation) */
.reveal.is-visible h1[data-reveal]           { transition-delay: .0s; }
.reveal.is-visible .subtitle[data-reveal]    { transition-delay: .08s; }
.reveal.is-visible .bullets li[data-reveal]  { transition-delay: .14s; }
.reveal.is-visible .bullets li[data-reveal]:nth-child(2) { transition-delay: .20s; }
.reveal.is-visible .bullets li[data-reveal]:nth-child(3) { transition-delay: .26s; }
.reveal.is-visible .bullets li[data-reveal]:nth-child(4) { transition-delay: .32s; }
.reveal.is-visible .bullets li[data-reveal]:nth-child(5) { transition-delay: .38s; }
.reveal.is-visible .ctas[data-reveal]        { transition-delay: .46s; }
.reveal.is-visible .hero__media[data-reveal] { transition-delay: .18s; }

/* Respecte la préférence d’accessibilité */
@media (prefers-reduced-motion: reduce) {
  .reveal [data-reveal] {
    transition: none;
    transform: none;
    opacity: 1;
  }
}

/* ----- Ton style existant ----- */
.hero {
  min-height: 100vh;
  @include flex-center;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    padding: 4rem 1rem;
    .hero__grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .hero__media { order: -1; display: none; }
  }

  &__grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  &__content {
    max-width: 560px;
    .bullets {
      padding: 0;
      margin: 1.5rem 0;

      li {
        position: relative;
        padding-left: 1.75rem;
        margin-bottom: .75rem;
        &::before {
          content: "✓";
          position: absolute;
          left: 0;
          top: 0;
          color: #8b5cf6;
          font-weight: bold;
          font-size: 1.1rem;
          filter: drop-shadow(0 0 6px rgba(139, 92, 246, 0.5));
        }
      }
    }
  }

  &__media {
    figure { text-align: center; }
    img {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 1.5rem;
    }
  }
}

/* Ta bordure séparatrice existante si besoin de rappel
.section-separator {
  padding-bottom: 5rem;
  border-bottom: 1px dashed rgba(#3c426450, 0.7);
}
*/
</style>
