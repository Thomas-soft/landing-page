<script setup lang="ts">
import { ref } from 'vue'

/* ------------------------------
   Directive Intersection Observer
--------------------------------*/
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

    // @ts-ignore
    el.__io = io
    io.observe(el)
  },
  unmounted(el: any) { el.__io?.disconnect?.() }
}

/* ------------------------------
   State du formulaire
--------------------------------*/
const form = ref({
  lastName: '',
  firstName: '',
  email: '',
  phone: '',
  message: ''
})

const loading = ref(false)
const success = ref(false)
const error = ref<string | null>(null)

/* ------------------------------
   Fonction submit -> webhook n8n
--------------------------------*/
async function handleSubmit() {
  // ✅ Vérification des champs obligatoires
  if (!form.value.lastName.trim() ||
      !form.value.firstName.trim() ||
      !form.value.email.trim() ||
      !form.value.message.trim()) {
    error.value = "Merci de remplir tous les champs obligatoires (*)"
    return
  }

  loading.value = true
  success.value = false
  error.value = null

  try {
    const res = await fetch('https://terribly-tops-mullet.ngrok-free.app/webhook/contact-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })

    if (!res.ok) throw new Error('Erreur côté webhook')

    // Succès
    success.value = true
    form.value = { lastName: '', firstName: '', email: '', phone: '', message: '' }
  } catch (err: any) {
    error.value = err.message || 'Une erreur est survenue'
  } finally {
    loading.value = false
  }
}
</script>


<template>
  <section
    aria-labelledby="contact-title"
    id="contact"
    class="section-separator reveal-contact"
    v-intersect="{ threshold: 0.15, once: true }"
  >
    <h2 id="contact-title" data-reveal-contact>Envoyez moi un message</h2>
    <p data-reveal-contact>
      Parlez-moi de votre projet - Réponse en moins de 48h et je vous offre un audit gratuit.
    </p>

    <form @submit.prevent="handleSubmit" novalidate aria-describedby="privacy-note" data-reveal-contact>
      <div class="grid">
        <label data-reveal-contact>
          Nom* 
          <input v-model="form.lastName" name="lastName" required autocomplete="family-name" />
        </label>

        <label data-reveal-contact>
          Prénom* 
          <input v-model="form.firstName" name="firstName" required autocomplete="given-name" />
        </label>

        <label data-reveal-contact>
          Email* 
          <input v-model="form.email" type="email" name="email" required autocomplete="email" />
        </label>

        <label data-reveal-contact>
          Téléphone 
          <input v-model="form.phone" type="tel" name="phone" autocomplete="tel" />
        </label>

        <label class="col-span-2" data-reveal-contact>
          Message* 
          <textarea v-model="form.message" name="message" required rows="5"></textarea>
        </label>
      </div>

      <div class="actions" data-reveal-contact>
        <button type="submit" class="btn btn-primary" :disabled="loading">
          {{ loading ? "Envoi en cours..." : "Envoyer ma demande" }}
        </button>
      </div>

      <!-- Messages d'état (avec reveal) -->
      <transition name="fade">
        <p v-if="success" style="color: green; margin-top: 1rem;" data-reveal-contact>
          ✅ Message envoyé avec succès !
        </p>
      </transition>
      <transition name="fade">
        <p v-if="error" style="color: red; margin-top: 1rem;" data-reveal-contact>
          ❌ {{ error }}
        </p>
      </transition>
    </form>
  </section>
</template>

<style scoped lang="scss">
@use "sass:color";
@use "@/assets/css/main.scss" as *;

/* ===== Transition fade pour messages ===== */
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* ===== Reveal au scroll (Contact) ===== */
.reveal-contact [data-reveal-contact] {
  opacity: 0;
  transform: translateY(14px);
  transition: opacity .5s ease, transform .5s ease;
}
.reveal-contact.is-visible [data-reveal-contact] {
  opacity: 1;
  transform: none;
}

/* Stagger: titre -> sous-titre -> formulaire -> champs -> actions */
.reveal-contact.is-visible #contact-title[data-reveal-contact] { transition-delay: .00s; }
.reveal-contact.is-visible p[data-reveal-contact]              { transition-delay: .06s; }
.reveal-contact.is-visible form[data-reveal-contact]           { transition-delay: .12s; }

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
    }

    .actions {
      margin-top: 2rem;
      display: flex;
      gap: 1rem;
      justify-content: center;

      .btn { text-decoration: none; text-align: center; border: none; }
    }
  }
}

/* Mobile responsive */
@media screen and (max-width: 768px) {
  #contact {
    form {
      max-width: 100%;

      .grid {
        grid-template-columns: 1fr;
        gap: 0.75rem;

        label {
          font-size: 0.95rem;

          input,
          textarea {
            font-size: 1rem;
            padding: 0.75rem;
          }
        }

        .col-span-2 { grid-column: auto; }
      }

      .actions {
        flex-direction: column;
        align-items: stretch;
        margin-top: 1.5rem;

        .btn {
          width: 100%;
          padding: 0.9rem 1rem;
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
