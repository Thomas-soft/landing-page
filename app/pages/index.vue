<script setup lang="ts">
const siteUrl = 'https://thomas-tofil.fr/'

useSeoMeta({
  title: 'Agent IA & automatisation n8n pour e-commerce & salons — Le Havre',
  description: 'Chatbots IA multicanaux et automatisations n8n à Le Havre : support client, commandes, suivi colis, relances panier, RDV. Audit gratuit.',
  robots: 'index,follow',
  ogTitle: 'Agent IA & automatisation n8n — Le Havre',
  ogDescription: 'Support, ventes et suivi automatisés sur WhatsApp, Telegram, Instagram, Messenger, Web et Email.',
  ogType: 'website',
  ogUrl: siteUrl,
  ogImage: siteUrl + 'mee.webp',
  // twitterCard: 'summary_large_image',
  twitterImage: siteUrl + 'mee.webp'
})

useHead({
  link: [{ rel: 'canonical', href: siteUrl }],
  htmlAttrs: { lang: 'fr' },
  script: [
    {
      key: 'ld-json-home',
      type: 'application/ld+json',
      innerHTML: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": siteUrl + "#serviceprovider",
          "name": "Thomas Tofil — Agent IA & automatisation n8n",
          "url": siteUrl,
          "image": siteUrl + 'mee.webp',
          "telephone": "+33623034405",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Le Havre",
            "addressCountry": "FR"
          },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Le Havre, France"
          },
          "sameAs": [
            "https://linkedin.com/in/thomas-tofil-619653296",
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Thomas Tofil",
          "jobTitle": "Agent IA & Automatisation n8n",
          "url": "https://thomas-tofil.fr/",
          "sameAs": [
            "https://linkedin.com/in/thomas-tofil-619653296",
            "https://comeup.com/fr/@thomas-automation",
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": siteUrl + "#services",
          "serviceType": "Automatisation n8n & Agent IA/Chatbot",
          "provider": { "@id": siteUrl + "#serviceprovider" },
          "areaServed": "Le Havre, France",
          "offers": [
            {
              "@type": "Offer",
              "name": "Pack Essentiel",
              "priceCurrency": "EUR",
              "price": "250",
              "url": siteUrl + "#offres",
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "name": "Pack Pro",
              "priceCurrency": "EUR",
              "price": "350",
              "url": siteUrl + "#offres",
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "name": "Pack Elite",
              "priceCurrency": "EUR",
              "price": "969",
              "url": siteUrl + "#offres",
              "availability": "https://schema.org/InStock"
            }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Puis-je commencer petit ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui ! Mon agent IA est évolutif et peut s'adapter à vos besoins. Vous pouvez commencez petit et étendre les fonctionnalités au fur et à mesure."
              }
            },
            {
              "@type": "Question",
              "name": "Quels sont les délais de réalisation ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "4 à 16 jours selon le pack choisi."
              }
            },
            {
              "@type": "Question",
              "name": "Quelles intégrations sont possibles ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Email, Shopify, WooCommerce, WhatsApp, Instagram, Messenger, Telegram, Calendly, Google Calendar, CRM, APIs sur-mesure."
              }
            },
            {
              "@type": "Question",
              "name": "Quelles langues ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mon agent IA est disponible en plusieurs langues (FR/EN sur demande)."
              }
            },
            {
              "@type": "Question",
              "name": "Proposez-vous une maintenance & amélioration continue ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, c'est l'objet d'un accompagnement personnalisé dont le tarif dépend de la portée du projet."
              }
            },
            {
              "@type": "Question",
              "name": "Quelles sont les limites de l'IA ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Cas complexes et très rares redirigés vers un humain - décisions sensibles non automatisées."
              }
            },
            {
              "@type": "Question",
              "name": "Aurais-je accès à mon système automatisé ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oui, vous avez l'accès et le contrôle total. Vous êtes propriétaire du code n8n, prompts et connecteurs."
              }
            }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": siteUrl }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": siteUrl + "#website",
          "url": siteUrl,
          "name": "Agent IA & automatisation n8n — Thomas Tofil"
        }
      ])
    }
  ]
})
</script>

<template>
  <main id="content">
    <HeroValue
      :city="'Le Havre'"
      :country="'France'"
      :platforms="'Email, WhatsApp, Instagram, Messenger, Telegram, Web'"
      :primary-cta-text="'Réservez un appel avec Thomas Tofil'"
    />

    <Benefits />

    <About
      :name="'Thomas Tofil'"
      :caseMetrics="{ conv:'+40%', time:'-5h/sem' }"
      :tools="['n8n','Python','APIs','Zapier','Make','Shopify','WordPress','WooCommerce','Calendly','Google Calendar']"
    />

    <OffersGrid />
    <ContactForm />
    <FaqList />
  </main>
</template>

<style scoped>
/* Minimal critical styles; prefer system fonts for CWV */
</style>
