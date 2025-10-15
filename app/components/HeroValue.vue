<script setup lang="ts">
defineProps<{
  city: string; country: string; platforms: string;
  primaryCtaText: string;
}>()

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
    class="hero section-separator reveal"
    aria-labelledby="hero-title"
  >
    <div class="container hero__grid">

      <div class="hero__content">
        <h1 id="hero-title">
          <!-- Automatisation d'agences avec une équipe d'agents IA -->
           Automatisation de tâches avancées, avec et sans IA.
        </h1>
        <p class="subtitle">
          Réduisez les absences aux rendez-vous et structurez vos relances. Automatisation du suivi prospects, prise en charge rapide, replanification et gestion des documents, directement dans votre CRM.
        </p>
        <ul class="bullets list-unstyled" role="list">
          <li>Réduction du no-show : confirmations, rappels et replanification automatique des rendez-vous.</li>
          <li>Speed-to-lead maîtrisé : prise en charge des prospects en quelques minutes, vers le bon agenda.</li>
          <li>Notation des prospects et priorisation des appels utiles.</li>
          <li>Orchestration multicanale depuis votre CRM (email, SMS, WhatsApp).</li>
          <li>Tableaux de bord clairs : taux de présence, replanification, délais.</li>
          <li>Confirmations, rappels et replanification automatisés des rendez-vous.</li>
        </ul>
        <div class="ctas">
          <a class="btn btn-secondary" href="#contact" :aria-label="primaryCtaText">
            {{ primaryCtaText }}
          </a>
        </div>
      </div>

      <div class="hero__media">
        <figure>
          <img 
            src="/placeholder-hero.webp"
            alt="Agent IA intelligent connectant des applications"
            width="600" height="600"
            loading="lazy"
          >
          <!-- <figcaption>
            Email • SMS • WhatsApp • Appels • Calendly/Cal.com • CRM
          </figcaption> -->
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/css/main" as *;

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
