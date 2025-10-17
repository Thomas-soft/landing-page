<script setup lang="ts">

</script>

<template>
  <section
    class="pricing section-separator reveal-pricing"
    aria-labelledby="offers-title"
    id="offres"
  >
    <header class="pricing__header">
      <h2 id="offers-title" class="pricing__title">Les offres</h2>
      <p class="pricing__subtitle">Choisissez le pack adapté à votre volume d'appels et à votre stack.</p>
    </header>

    <div class="pricing__grid">
      <!-- Pack 1 : Show-Up Starter -->
      <article class="card">
        <header class="card__head">
          <h3 class="card__title">Show-Up Starter</h3>
          <p class="card__tag">Rapide & efficace pour petites équipes.</p>
        </header>
        <ul class="card__list list-unstyled">
          <li class="card__item--ok">Confirmations, rappels et replanification automatique</li>
          <li class="card__item--ok">Intégration calendrier</li>
          <li class="card__item--ok">Automatisations CRM (création/MAJ contacts & activités)</li>
          <li class="card__item--ok">Tableau de bord de base (présence, rebook, sources)</li>
          <li class="card__item--ok">Un canal actif (Email, SMS ou WhatsApp)</li>
          <li class="card__item--no">Suivi multicanal</li>
          <li class="card__item--no">Routage speed-to-lead (priorités, round-robin)</li>
          <li class="card__item--no">Séquences de relance multicanales (Email, SMS, WhatsApp)</li>
          <li class="card__item--no">Scoring simple & priorisation des appels utiles</li>
          <li class="card__item--no">Implémentation IA dans les visioconférences</li>
          <li class="card__item--no">Chat bot intelligent pour le service client</li>
          <li class="card__item--no">Dashboards avancés (délais RDV→doc, signature)</li>
          <li class="card__item--no">DocOps : génération, envoi, signature & archivage</li>
          <li class="card__item--no">Intégrations API & webhooks sur-mesure</li>
        </ul>
        <!-- <a href="#contact" class="btn btn--primary">Demander un devis</a> -->
         <a href="#contact" class="btn btn--primary">À partir de 1 600 €</a>
      </article>

      <!-- Pack 2 : Follow-Up Pro -->
      <article class="card">
        <header class="card__head">
          <h3 class="card__title">Follow-Up Pro</h3>
          <p class="card__tag">Agences marketing, closing & autres.</p>
        </header>
        <ul class="card__list list-unstyled">
          <li class="card__item--ok">Confirmations, rappels et replanification automatique</li>
          <li class="card__item--ok">Intégration calendrier</li>
          <li class="card__item--ok">Automatisations CRM (création/MAJ contacts & activités)</li>
          <li class="card__item--ok">Tableau de bord de base (présence, rebook, sources)</li>
          <li class="card__item--ok">Un canal actif (Email, SMS ou WhatsApp)</li>
          <li class="card__item--ok">Suivi multicanal</li>
          <li class="card__item--ok">Routage speed-to-lead (priorités, round-robin)</li>
          <li class="card__item--ok">Séquences de relance multicanales (Email, SMS, WhatsApp)</li>
          <li class="card__item--ok">Scoring simple & priorisation des appels utiles</li>
          <li class="card__item--ok">Chat bot intelligent pour le service client</li>
          <li class="card__item--no">Implémentation IA dans les visioconférences</li>
          <li class="card__item--no">Dashboards avancés (délais RDV→doc, signature)</li>
          <li class="card__item--no">DocOps : génération, envoi, signature & archivage</li>
          <li class="card__item--no">Intégrations API & webhooks sur-mesure</li>
        </ul>
        <!-- <a href="#contact" class="btn btn--primary">Parler à un expert</a> -->
        <a href="#contact" class="btn btn--primary">À partir de 2 900 €</a>
      </article>

      <!-- Pack 3 : RevOps Automation Suite -->
      <article class="card card--featured">
        <header class="card__head">
          <h3 class="card__title">RevOps Automation Suite</h3>
          <p class="card__tag">Sur-mesure, DocOps & SLA.</p>
        </header>
        <ul class="card__list list-unstyled">
          <li class="card__item--ok">Confirmations, rappels et replanification automatique</li>
          <li class="card__item--ok">Intégration calendrier</li>
          <li class="card__item--ok">Automatisations CRM (création/MAJ contacts & activités)</li>
          <li class="card__item--ok">Tableau de bord de base (présence, rebook, sources)</li>
          <li class="card__item--ok">Un canal actif (Email, SMS ou WhatsApp)</li>
          <li class="card__item--ok">Suivi multicanal</li>
          <li class="card__item--ok">Routage speed-to-lead (priorités, round-robin)</li>
          <li class="card__item--ok">Séquences de relance multicanales (Email, SMS, WhatsApp)</li>
          <li class="card__item--ok">Scoring simple & priorisation des appels utiles</li>
          <li class="card__item--ok">Chat bot intelligent pour le service client</li>
          <li class="card__item--ok">Implémentation IA dans les visioconférences</li>
          <li class="card__item--ok">Dashboards avancés (délais RDV→doc, signature)</li>
          <li class="card__item--ok">DocOps : génération, envoi, signature & archivage</li>
          <li class="card__item--ok">Intégrations API & webhooks sur-mesure</li>
        </ul>
        <a href="#contact" class="btn btn--primary btn--glow">Planifier un diagnostic</a>
        <!-- <a href="#contact" class="btn btn--primary btn--glow">À partir de 7 900 €</a> -->
      </article>
    </div>

    <p class="pricing__badges">Satisfait ou remboursé</p>
  </section>
</template>

<style scoped lang="scss">
@use "sass:color";
@use "@/assets/css/main" as *;

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
