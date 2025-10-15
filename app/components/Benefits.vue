<script setup lang="ts">

</script>

<template>
  <section
    aria-labelledby="benefits-title"
    id="benefits"
    class="section-separator reveal-b"
  >
    <header class="section-header">
      <h2 id="benefits-title">Bénéfices clés pour votre entreprise</h2>
    </header>

    <div class="grid">
      <article>
        <h3>Agences</h3>
        <ul class="list-unstyled">
          <li>Prise en charge rapide des prospects (speed-to-lead) et qualification dès l'entrée.</li>
          <li>Scalabilité accrue des capacités.</li>
          <li>Gains de temps significatifs.</li>
          <li>Moins de tâches manuelles et répétitives pour les équipes.</li>
          <li>Meilleure organisation des agendas et réduction du no-show.</li>
          <li>Relances automatisées et replanification en un clic après absence.</li>
          <li>Meilleure visibilité sur les performances commerciales.</li>
        </ul>
      </article>

      <article>
        <h3>Professionnels</h3>
        <ul class="list-unstyled">
          <li>Moins de charge mentale au travail</li>
          <li>Meilleure gestion du temps et des priorités</li>
          <li>Collaboration améliorée avec les équipes</li>
          <li>Réduction du stress lié aux tâches administratives</li>
          <li>Plus de temps pour se concentrer sur les tâches à forte valeur ajoutée</li>
          <li>Meilleure satisfaction au travail</li>
        </ul>
      </article>
    </div>

    <aside class="how-it-works" aria-labelledby="how-title" >
      <h3 id="how-title" class="sr-only">Comment ça marche</h3>
      <!-- <p> -->
        <strong>Comment ça marche&nbsp;?</strong>
        <br>
        <ol >
          <li ><strong>Analyse des besoins :</strong> identification des tâches à automatiser.</li>
          <li ><strong>Développement de la solution :</strong> configuration adaptée à l'activité et aux clients.</li>
          <li ><strong>Déploiement & suivi :</strong> mise en service, contrôle des performances et améliorations continues.</li>
        </ol>
      <!-- </p> -->
    </aside>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/css/main" as *;
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
