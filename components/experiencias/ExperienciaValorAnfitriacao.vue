<template>
  <div class="card-bottom">
    <div class="anfitriao-container">

    <span class="valores">
      <span class="emoji">{{ valor?.moeda }}</span>
      {{ valor?.formaPagamento }}
    </span>
      <div class="container-socials">
        <NuxtLink class="anfitriao" :to="`/anfitriao/${anfitriao?.id}`">{{ anfitriao?.legenda }}</NuxtLink>
        <NuxtLink v-if="anfitriao?.instagram" target="_blank" :to="anfitriao?.instagram">
          <Icon class="social-icon" name="mdi:instagram" />
        </NuxtLink>
        <NuxtLink v-if="anfitriao?.telefone?.whatsapp" target="_blank"
          :to="`https://wa.me/${anfitriao?.telefone?.numero}`">
          <Icon class="social-icon" name="mdi:whatsapp" />
        </NuxtLink>

      </div>
    </div>



  </div>
</template>

<script setup>
defineProps(['valor', 'anfitriao'])
</script>

<style scoped lang="css">
.valores {
  font-size: 0.7rem;
  text-align: start;
}

.valores .emoji {
  font-size: 0.8rem;
  margin-right: 0.3rem;
}

.card-bottom {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0.3rem;
  border-radius: 10px;

}

.anfitriao-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.1rem;
}

.anfitriao {
  text-decoration: underline;
  font-size: 0.8rem;
  color: var(--text-color, #333);
}

.container-socials {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
}

.social-icon {
  font-size: 0.9rem;
}
</style>
