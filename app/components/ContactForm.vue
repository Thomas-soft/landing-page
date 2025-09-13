<script setup lang="ts">
// Réutilise la directive si tu l'as déjà (même que pour Hero/Benefits/Pricing)
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
    aria-labelledby="contact-title"
    id="contact"
    class="section-separator reveal-contact"
    v-intersect="{ threshold: 0.15, once: true }"
  >
    <h2 id="contact-title" data-reveal-contact>Discutez avec moi</h2>
    <p data-reveal-contact>Parlez-moi de votre projet - Réponse en &lt;48h. Audit gratuit.</p>

    <form method="post" action="{form_endpoint_placeholder}" novalidate aria-describedby="privacy-note" data-reveal-contact>
      <div class="grid">
        <label data-reveal-contact>Nom* <input name="lastName" required autocomplete="family-name"></label>
        <label data-reveal-contact>Prénom* <input name="firstName" required autocomplete="given-name"></label>
        <label data-reveal-contact>Email* <input type="email" name="email" required autocomplete="email"></label>
        <label data-reveal-contact>Téléphone <input type="tel" name="phone" autocomplete="tel"></label>
        <label class="col-span-2" data-reveal-contact>Message* <textarea name="message" required rows="5"></textarea></label>
      </div>

      <div class="actions" data-reveal-contact>
        <button type="submit" class="btn btn-primary">Envoyer ma demande</button>
      </div>
    </form>
  </section>
</template>

<style scoped lang="scss">
@use "sass:color";
@use "@/assets/css/main.scss" as *;

/* ===== Reveal au scroll (Contact) ===== */
.reveal-contact [data-reveal-contact] {
  opacity: 0;
  transform: translateY(14px);
  transition: opacity .5s ease, transform .5s ease;
  // will-change: opacity, transform;
}
.reveal-contact.is-visible [data-reveal-contact] {
  opacity: 1;
  transform: none;
}

/* Stagger: titre -> sous-titre -> formulaire -> champs (ligne par ligne) -> actions */
.reveal-contact.is-visible #contact-title[data-reveal-contact] { transition-delay: .00s; }
.reveal-contact.is-visible p[data-reveal-contact]              { transition-delay: .06s; }
.reveal-contact.is-visible form[data-reveal-contact]           { transition-delay: .12s; }

/* Champs: léger décalage en cascade sur les labels */
.reveal-contact .grid label[data-reveal-contact] { opacity: 0; transform: translateY(10px); }
.reveal-contact.is-visible .grid label[data-reveal-contact] { opacity: 1; transform: none; }
.reveal-contact.is-visible .grid label:nth-child(1)  { transition-delay: .16s; }
.reveal-contact.is-visible .grid label:nth-child(2)  { transition-delay: .20s; }
.reveal-contact.is-visible .grid label:nth-child(3)  { transition-delay: .24s; }
.reveal-contact.is-visible .grid label:nth-child(4)  { transition-delay: .28s; }
.reveal-contact.is-visible .grid label:nth-child(5)  { transition-delay: .32s; }

.reveal-contact.is-visible .actions[data-reveal-contact] { transition-delay: .38s; }

/* Accessibilité : réduire les mouvements si demandé */
@media (prefers-reduced-motion: reduce) {
  .reveal-contact [data-reveal-contact] {
    transition: none !important; opacity: 1 !important; transform: none !important;
  }
}

#contact {
  @include flex-center;
  flex-direction: column;
  gap: 1rem;

  form {
    width: 100%;
    max-width: 600px;

    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;

      label {
        display: flex;
        flex-direction: column;
        font-weight: bold;
        width: 100%;

        input, textarea {
          margin-top: 0.5rem;
          padding: 0.5rem;
          border: 1px solid $color-dark;
          border-radius: 4px;
          font-size: 1rem;
          font-family: inherit;
          transition: all 0.2s ease-in-out;
          box-shadow: inset 0 0 0 rgba($color-dark, 0.5);

          &:focus {
            outline: none;
            border-color: $color-dark;
            background-color: color.adjust($color-white, $lightness: -10%);
            box-shadow: inset 0 0 10px rgba($color-dark, 0.5);
            border-radius: 6px;
          }
        }
      }

      .col-span-2 { grid-column: span 2; }
      .consent { flex-direction: row; align-items: end; }
    }

    #privacy-note { font-size: 0.875rem; margin-top: 0.5rem; }

    .actions {
      margin-top: 2rem;
      display: flex;
      gap: 1rem;
      justify-content: center;

      .btn { text-decoration: none; text-align: center; border: none; }
    }
  }
}

@media screen and (max-width: 768px) {
  #contact {

    form {
      max-width: 100%;

      .grid {
        grid-template-columns: 1fr;   /* ✅ Passe en 1 seule colonne */
        gap: 0.75rem;

        label {
          font-size: 0.95rem;

          input,
          textarea {
            font-size: 1rem;
            padding: 0.75rem;        /* ✅ Touch-friendly */
          }
        }

        .col-span-2 {
          grid-column: auto;        /* ✅ Reprend la largeur normale */
        }
      }

      .actions {
        flex-direction: column;     /* ✅ Boutons empilés */
        align-items: stretch;
        margin-top: 1.5rem;

        .btn {
          width: 100%;              /* ✅ Prend toute la largeur */
          padding: 0.9rem 1rem;
          font-size: 1rem;
        }
      }
    }
  }
}


</style>
