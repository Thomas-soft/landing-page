<script setup lang="ts">
// si tu as déjà créé la directive dans le Hero, réutilise-la :
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
// import vIntersect from '@/directives/v-intersect' // adapte le chemin si besoin
</script>

<template>
  <section
    aria-labelledby="benefits-title"
    id="benefits"
    class="section-separator reveal-b"
    v-intersect="{ threshold: 0.15, once: true }"
  >
    <header class="section-header" data-reveal-b>
      <h2 id="benefits-title">Les bénéfices d’un agent IA</h2>
    </header>

    <div class="grid">
      <article data-reveal-b>
        <h3>E-commerce</h3>
        <ul class="list-unstyled">
          <li data-reveal-b>SAV 24/7 &lt;1s, -90% d'e-mails récurrents</li>
          <li data-reveal-b>Pré-vente assistée, +8-15% ajout panier</li>
          <li data-reveal-b>Relances panier, +10-25% récupérations</li>
          <li data-reveal-b>Suivi de commande</li>
          <li data-reveal-b>Intégration CRM & scoring</li>
        </ul>
      </article>

      <article data-reveal-b>
        <h3>Salons & Artisans</h3>
        <ul class="list-unstyled">
          <li data-reveal-b>Prise de RDV, confirmations & rappels</li>
          <li data-reveal-b>Réponds aux questions clients (prix, horaires, délais, etc.)</li>
        </ul>
      </article>
    </div>

    <aside class="how-it-works" aria-labelledby="how-title" data-reveal-b>
      <h3 id="how-title" class="sr-only">Comment ça marche</h3>
      <!-- <p> -->
        <strong>Comment ça marche&nbsp;?</strong>
        <br>
        <ol data-reveal-b>
          <li data-reveal-b><strong>Analyse des besoins :</strong> identification des tâches à automatiser.</li>
          <li data-reveal-b><strong>Développement de la solution :</strong> configuration adaptée à l'activité et aux clients.</li>
          <li data-reveal-b><strong>Déploiement & suivi :</strong> mise en service, contrôle des performances et améliorations continues.</li>
        </ol>
      <!-- </p> -->
    </aside>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/css/main" as *;

/* --------- Effets reveal (section Benefits) --------- */
/* état initial des éléments marqués */
.reveal-b [data-reveal-b] {
  opacity: 0;
  transform: translateY(16px) scale(.98);
  transition: opacity .55s ease, transform .55s ease;
  // will-change: opacity, transform;
}

/* quand la section entre dans le viewport via .is-visible */
.reveal-b.is-visible [data-reveal-b] {
  opacity: 1;
  transform: none;
}

/* Stagger simple (délais différents pour un effet en cascade) */
.reveal-b.is-visible .section-header[data-reveal-b] { transition-delay: .00s; }
.reveal-b.is-visible .grid article[data-reveal-b]:nth-child(1) { transition-delay: .08s; }
.reveal-b.is-visible .grid article[data-reveal-b]:nth-child(2) { transition-delay: .16s; }

/* Les items de liste entrent après leur article */
.reveal-b.is-visible .grid article:nth-child(1) li[data-reveal-b]:nth-child(1) { transition-delay: .18s; }
.reveal-b.is-visible .grid article:nth-child(1) li[data-reveal-b]:nth-child(2) { transition-delay: .22s; }
.reveal-b.is-visible .grid article:nth-child(1) li[data-reveal-b]:nth-child(3) { transition-delay: .26s; }
.reveal-b.is-visible .grid article:nth-child(1) li[data-reveal-b]:nth-child(4) { transition-delay: .30s; }
.reveal-b.is-visible .grid article:nth-child(1) li[data-reveal-b]:nth-child(5) { transition-delay: .34s; }

.reveal-b.is-visible .grid article:nth-child(2) li[data-reveal-b]:nth-child(1) { transition-delay: .18s; }
.reveal-b.is-visible .grid article:nth-child(2) li[data-reveal-b]:nth-child(2) { transition-delay: .22s; }

.reveal-b.is-visible aside.how-it-works[data-reveal-b] { transition-delay: .20s; }

/* Accessibilité : respecte la préférence utilisateur */
@media (prefers-reduced-motion: reduce) {
  .reveal-b [data-reveal-b] {
    transition: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
}

/* --------- Tes styles existants --------- */
.section-header { margin-block-end: 1.25rem; }

@media screen and (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr !important;
    gap: 2.5rem !important;
  }
  .how-it-works {
    max-width: 400px;
    p {
      max-width: 450px;
    }
  }
}

#benefits {
  @include flex-center;
  flex-direction: column;
  min-height: 50vh;
}

.grid {
  display: grid; gap: 1.5rem;
  grid-template-columns: 1fr 1fr;

  article {
    max-width: 600px;

    h3 {
      margin-block-end: 0.75rem;
      text-align: center;
    }
    ul {
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
}

aside.how-it-works {
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  max-width: 900px;
  text-align: center;

  ol
  {
    text-align: left;
    max-width: 1200px;
    margin-top: 1.5rem;

    li {
      margin-bottom: 0.5rem;
    }
  }
}

aside, .grid article {
  box-shadow: 0 0px 2px rgba(9, 239, 255, 0.6);
  border-radius: 1.5rem;
  padding: 30px;
}

.sr-only {
  position: absolute !important;
  width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
}
</style>
