<script setup lang="ts">
import { ref } from 'vue'
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
  >
    <h2 id="contact-title">Envoyez moi un message</h2>
    <p>
      Parlez-moi de votre projet - Réponse en moins de 48h et je vous offre un audit gratuit.
    </p>

    <form @submit.prevent="handleSubmit" novalidate aria-describedby="privacy-note">
      <div class="grid">
        <label>
          Nom* 
          <input v-model="form.lastName" name="lastName" required autocomplete="family-name" />
        </label>

        <label>
          Prénom* 
          <input v-model="form.firstName" name="firstName" required autocomplete="given-name" />
        </label>

        <label>
          Email* 
          <input v-model="form.email" type="email" name="email" required autocomplete="email" />
        </label>

        <label>
          Téléphone 
          <input v-model="form.phone" type="tel" name="phone" autocomplete="tel" />
        </label>

        <label class="col-span-2">
          Message* 
          <textarea v-model="form.message" name="message" required rows="5"></textarea>
        </label>
      </div>

      <div class="actions">
        <button type="submit" class="btn btn-primary" :disabled="loading">
          {{ loading ? "Envoi en cours..." : "Envoyer ma demande" }}
        </button>
      </div>

      <!-- Messages d'état (avec reveal) -->
      <transition name="fade">
        <p v-if="success" style="color: green; margin-top: 1rem;">
          ✅ Message envoyé avec succès !
        </p>
      </transition>
      <transition name="fade">
        <p v-if="error" style="color: red; margin-top: 1rem;">
          ❌ {{ error }}
        </p>
      </transition>
    </form>
  </section>
</template>

<style scoped lang="scss">
@use "sass:color";
@use "@/assets/css/main.scss" as *;

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
