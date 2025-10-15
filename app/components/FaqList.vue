<script setup lang="ts">

</script>

<template>
  <section
    aria-labelledby="faq-title"
    id="faq"
    class="section-separator reveal-faq"
  >
    <h2 id="faq-title">FAQ</h2>

    <div class="container">
      <details>
        <summary>Maintenance ?</summary>
        <!-- <p>Au choix : transfert à vos équipes ou suivi mensuel simple (1 mois offert). SLA possible.</p> -->
         <p>Je reste disponible pour toute question ou besoin d'assistance pendant 1 mois. Ce délai est suffisant pour vous familiariser avec le système et poser toutes vos questions. Si vous voulez aller plus loin, nous pourrons discuter des options de support à long terme.</p>
      </details>

      <details>
        <summary>Puis-je commencer petit à petit ?</summary>
        <p>Oui. Nous pouvons lancer un petit MVP. Nous ajoutons le reste ensuite.</p>
      </details>

      <details>
        <summary>Délais de mise en production ?</summary>
        <p>En général, 7 à 20 jours ouvrés. Ça peut varier selon votre stack.</p>
      </details>

      <details>
        <summary>Quelles intégrations ?</summary>
        <p>Calendly/Cal.com, HubSpot, Pipedrive, Make/Zapier, WhatsApp/SMS, Google Docs/Drive/Sheets/Slides/Forms, PDF.co, Airtable. Autres sur demande.</p>
      </details>

      <details>
        <summary>Vous garantissez des résultats ?</summary>
        <p>Je m'engage sur la mise en production et la mesure claire. Les résultats dépendent aussi de vos leads et de vos process.</p>
      </details>

      <details>
        <summary>Qui possède les comptes ?</summary>
        <p>Vous. Accès complet à vos outils. Pas de verrouillage.</p>
      </details>

      <details>
        <summary>Langues et horaires ?</summary>
        <p>FR/EN. Messages et créneaux adaptés à votre marché.</p>
      </details>
    </div>
  </section>
</template>


<style scoped lang="scss">
@use "sass:color";
@use "@/assets/css/main" as *;

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
