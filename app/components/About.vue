<script setup lang="ts">
defineProps<{ 
  name: string; 
  caseMetrics: { conv: string; time: string }; 
  tools: string[] 
}>()
</script>

<template>
  <section
    aria-labelledby="about-title"
    id="about"
    class="about section-separator reveal-about"
  >
    <h2 id="about-title" class="about__title">À propos de Thomas Tofil</h2>

    <div class="about-content">
      <div class="img-contain">
        <img 
          src="/mee.webp" 
          alt="Photo de Thomas Tofil, freelance en automatisation CRM et agents IA" 
          class="about-photo" 
          width="auto" height="600"
          loading="lazy" 
        />
      </div>

      <div class="about-text">
        <h4 class="about__headline">J'aide principalement les agences à réduire le no-show et à structurer le suivi prospects grâce à l'automatisation avec et sans IA.</h4>

        <p class="about__intro">
          <strong>Thomas Tofil</strong>, freelance en automatisation (CRM, calendriers, messageries) et agents IA. 
          3 ans d'expérience. Formé à l'École 42. Approche simple, opérationnelle et orientée résultats.
        </p>

        <h5 class="about__sub">Mes expertises</h5>
        <ul class="bullets list-unstyled">
          <!-- <li>Parcours anti no-show&nbsp;: confirmations, rappels, replanification.</li>
          <li>Follow-up multicanal&nbsp;: speed-to-lead, scoring léger, priorisation.</li>
          <li>DocOps&nbsp;: génération, envoi et signature de documents depuis le CRM.</li> -->
          <li>Conception de workflows automatisés sur mesure (Zapier, Make, N8n, Python & API).</li>
          <li>Développement d'agents IA intelligents pour le service client.</li>
          <li>Intégration de solutions tierces (API, webhooks) pour une automatisation fluide.</li>
          <li>Suivi multicanal : confirmations, rappels, replanification, priorisation.</li>
          <li>Implémentation IA dans les visioconférences.</li>
          <li>Analyse de documents pour en extraire des informations clés.</li>
          <li>Utilisation de documents templates.</li>
          <li>Optimisation des process internes pour réduire les coûts et limiter les erreurs.</li>
          <li>Mise en place d'une sécurité renforcée des actions automatisées.</li>
        </ul>

        <h5 class="about__sub">Pourquoi travailler ensemble</h5>
        <ul class="bullets list-unstyled">
          <li>3 ans d'expérience dans le domaine du numérique et de la tech, avec une vision orientée résultats et efficacité.</li>
          <li>Formé à l'École 42 (fondée par Xavier Niel - Fondateur de Free) : une école d'excellence qui développe rigueur, créativité et esprit de résolution de problèmes.</li>
          <li>Communication claire & pédagogique : vous comprenez chaque étape, sans jargon technique.</li>
          <li>Résultats mesurables : des solutions simples, efficaces et pensées pour le ROI.</li>
          <li>Suivi régulier et ajustements : votre projet évolue, moi aussi.</li>
          <li>Mon ADN issu de l'École 42 et mes années d'expérience : penser différemment, transformer la complexité en solutions concrètes et générer de la valeur durable pour chaque projet.</li>
          <li>Déploiement local possible : exécution sur votre serveur/VPS, données et secrets chez vous, sans verrouillage fournisseur.</li>
        </ul>

        <p class="about__note">Objectif&nbsp;: transformer des process éparpillés en parcours simples, fiables et faciles à maintenir.</p>
      </div>
    </div>

    <!-- <p class="about-tools"><em>Outils :</em> {{ tools.join(' • ') }}</p> -->
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/css/main.scss" as *;

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
