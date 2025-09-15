<script setup lang="ts">
useSeoMeta({
  title: 'Mentions légales — Thomas Tofil',
  description: 'Mentions légales du site de Thomas Tofil, freelance en automatisation et agent IA basé au Havre, France.',
  robots: 'noindex,follow'
})
</script>

<template>
  <main id="mentions-legales" class="container prose section-separator">
    <BackButton />

    <h1>Mentions légales</h1>

    <section>
      <h2>Éditeur du site</h2>
      <p>
        Nom : Thomas Tofil<br>
        Statut : Entrepreneur individuel<br>
        Adresse : 76600 Le Havre, France<br>
        Email : <a href="mailto:contact@thomastofil.fr">contact@thomastofil.fr</a><br>
        Téléphone : <a href="tel:0623034405">0623034405</a><br>
        SIRET : 944 472 778 00025<br>
        <!-- TVA intracommunautaire : <br> -->
      </p>
    </section>

    <section>
      <h2>Responsable de la publication</h2>
      <p>Thomas Tofil</p>
    </section>

    <!-- <section>
      <h2>Hébergement</h2>
      <p>
        Hébergeur : {hebergeur_nom}<br>
        Adresse : {hebergeur_adresse}<br>
        Site : <a href="{hebergeur_site}" rel="noopener noreferrer" target="_blank">{hebergeur_site}</a>
      </p>
    </section> -->

    <section>
      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus (textes, images, code, graphismes) présents sur ce site
        sont la propriété exclusive de Thomas Tofil, sauf mention contraire. 
        Toute reproduction non autorisée est interdite.
      </p>
    </section>

    <section>
      <h2>Limitations de responsabilité</h2>
      <p>
        Thomas Tofil ne saurait être tenu responsable de dommages directs ou indirects
        liés à l'utilisation du site ou aux informations fournies.
      </p>
    </section>
  </main>
</template>
