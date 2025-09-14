<script setup lang="ts">
defineProps<{ 
  name: string; 
  caseMetrics: { conv: string; time: string }; 
  tools: string[] 
}>()

// réutilise ta directive si tu l'as déjà exportée ailleurs
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
    aria-labelledby="about-title"
    id="about"
    class="about section-separator reveal-about"
    v-intersect="{ threshold: 0.15, once: true }"
  >
    <h2 id="about-title" class="about__title" data-reveal-about>À propos</h2>

    <div class="about-content" data-reveal-about>
      <!-- 📸 Photo -->
      <div class="img-contain" data-reveal-about="img">
        <img 
          src="/mee.webp" 
          alt="Photo de Thomas Tofil, freelance en automatisation n8n et agents IA/chatbots" 
          class="about-photo" 
          width="auto" height="600"
          loading="lazy" 
        />
      </div>

      <div class="about-text" data-reveal-about="text">
        <h4 class="about__headline">🚀 J'aide les PME et entrepreneurs à gagner du temps et augmenter leur efficacité grâce à l'automatisation et l'intelligence artificielle.</h4>

        <p class="about__intro">
          <strong>Thomas Tofil</strong>, freelance en automatisation n8n & agents IA/chatbots. 
          Formé à l'École 42. Approche pragmatique, pédagogique et orientée ROI.
        </p>

        <h5 class="about__sub">💡 Mes expertises :</h5>
        <ul class="bullets list-unstyled">
          <li>Conception de workflows automatisés sur mesure (Zapier, Make, N8n, Python & API).</li>
          <li>Développement d'agents IA intelligents pour le service client.</li>
          <li>Optimisation des process internes pour réduire les coûts et limiter les erreurs.</li>
        </ul>

        <h5 class="about__sub">🎯 Pourquoi me choisir :</h5>
        <ul class="bullets list-unstyled">
          <li>3 ans d'expérience dans le domaine du numérique et de la tech, avec une vision orientée résultats et efficacité.</li>
          <li>Formé à l'École 42 (fondée par Xavier Niel - Fondateur de Free) : une école d'excellence qui développe rigueur, créativité et esprit de résolution de problèmes.</li>
          <li>Communication claire & pédagogique : vous comprenez chaque étape, sans jargon technique.</li>
          <li>Résultats mesurables : des solutions simples, efficaces et pensées pour le ROI.</li>
          <li>Suivi régulier et ajustements : votre projet évolue, moi aussi.</li>
        </ul>

        <p class="about__note">✨ Mon ADN issu de l'École 42 et mes années d'expérience : penser différemment, transformer la complexité en solutions concrètes et générer de la valeur durable pour chaque projet.</p>
      </div>
    </div>

    <p class="about-tools" data-reveal-about><em>Outils :</em> {{ tools.join(' • ') }}</p>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/css/main.scss" as *;

/* ===================== Reveal au scroll (100% SCSS) ===================== */
.reveal-about [data-reveal-about] {
  opacity: 0;
  transform: translateY(14px);
  transition: opacity .55s ease, transform .55s ease;
  // will-change: opacity, transform;
}

/* Effets différenciés image/texte */
.reveal-about [data-reveal-about="img"]   { transform: translateX(-18px) scale(.98); }
.reveal-about [data-reveal-about="text"]  { transform: translateY(16px); }

.reveal-about.is-visible [data-reveal-about],
.reveal-about.is-visible [data-reveal-about="img"],
.reveal-about.is-visible [data-reveal-about="text"] {
  opacity: 1;
  transform: none;
}

/* Stagger doux */
.reveal-about.is-visible .about__title[data-reveal-about] { transition-delay: .00s; }
.reveal-about.is-visible .about-content[data-reveal-about] { transition-delay: .08s; }
.reveal-about.is-visible [data-reveal-about="img"] { transition-delay: .12s; }
.reveal-about.is-visible [data-reveal-about="text"] { transition-delay: .18s; }
.reveal-about.is-visible .about-tools[data-reveal-about] { transition-delay: .26s; }

/* Accessibilité */
@media (prefers-reduced-motion: reduce) {
  .reveal-about [data-reveal-about] {
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}

/* ===================== Ton style existant + corrections ===================== */

#about {
  min-height: 50vh;
  @include flex-center;
  flex-direction: column;

  .about-content {
    max-width: 1400px;
    width: 90%;
    margin-top: 20px;
    @include flex-center;
    flex-direction: row;
    align-items: flex-start;

    .img-contain {
      width: 100%;
      max-width: 600px;
      max-height: 700px;

      /* ✅ Opacité qui diminue de gauche ➜ droite
         - besoin du prefix pour Safari */
      // overflow: hidden;
      -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 70%);
              mask-image: linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 70%);

      img {
        border-radius: 4rem;
        width: 100%;
        height: 100%;
      }
    }

    .about-text {
      width: 100%;
      max-width: 600px;
      text-align: justify;

      h4 { margin-bottom: 1rem; }
      h5 { margin-top: 1.5rem; margin-bottom: 1rem; }
      li { margin-bottom: 0.3rem; }
    }
  }
}

@media screen and (max-width: 1200px) {
  #about {
    .about-content {
      width: 100%;
      display: flex;
      flex-direction: column;   /* ✅ Colonne */
      align-items: center;      /* Centre horizontalement */
      justify-content: flex-start;
      gap: 1.5rem;
      position: static;         /* Supprime absolute de desktop */

      .img-contain {
        position: relative;
        width: 100%;
        max-width: 280px;       /* Image pas trop large */
        height: auto;
        margin: 0 auto;         /* Centre l’image */
        -webkit-mask-image: none;
                mask-image: none;

        img {
          width: 100%;
          height: auto;
          border-radius: 1.5rem;
          object-fit: cover;
        }
      }

      .about-text {
        max-width: none;
        margin: 0;
        width: 100%;
        text-align: left;       /* Texte lisible */
        font-size: 0.95rem;
        line-height: 1.5;
      }
    }

    .about__title {
      text-align: center;
      font-size: 1.6rem;
    }

    .about-tools {
      text-align: center;
      margin-top: 1.5rem;
      font-size: 0.9rem;
    }
  }
}

/* Si tu veux un fallback sans masque (ex: vieux Firefox), montre tout */
@supports not ((-webkit-mask-image: linear-gradient(black, white)) or (mask-image: linear-gradient(black, white))) {
  #about .img-contain { -webkit-mask-image: none; mask-image: none; }
}
</style>
