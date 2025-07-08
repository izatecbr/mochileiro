<template>
  <div class="newsletter-card">
    <h2>Assine nossa Newsletter</h2>
    <form @submit.prevent="handleSubscribe">
      <input type="email" v-model="email" placeholder="Seu email" required />
      <button type="submit" :disabled="loading">
        {{ loading ? 'Enviando...' : 'Assinar' }}
      </button>
    </form>
    <p v-if="message" :class="{ success: success, error: !success }">{{ message }}</p>
  </div>
</template>

<script setup>
const email = ref('')
const message = ref('')
const success = ref(false)
const loading = ref(false)

const handleSubscribe = async () => {
  loading.value = true
  message.value = ''
  success.value = false

  try {
    const res = await $fetch('/api/newsletter', {
      method: 'POST',
      body: { email: email.value }
    })
    message.value = res.message
    success.value = true
    email.value = ''
  } catch (err) {
    message.value = err?.data?.message || 'Erro ao cadastrar. Tente novamente.'
    success.value = false
  } finally {
    loading.value = false
  }
}
</script>


<style scoped>
.newsletter-card {
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 400px;
}
input {
  padding: 0.5rem;
  width: 100%;
  margin-bottom: 0.5rem;
}
button {
  padding: 0.5rem 1rem;
}
.success {
  color: green;
}
.error {
  color: red;
}
</style>
