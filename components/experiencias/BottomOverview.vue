<template>
  <div class="card-bottom">
    <div class="anfitriao-container">
      <NuxtLink class="anfitriao" :to="`/anfitriao/${anfitriao?.id}`">{{ anfitriao?.legenda }}</NuxtLink>
      <div class="container-socials">
        <NuxtLink v-if="anfitriao?.site" :to="anfitriao?.site" target="_blank">
          <Icon class="social-icon" name="mdi:web" />
        </NuxtLink>
        <NuxtLink v-if="anfitriao?.instagram" target="_blank" :to="anfitriao?.instagram">
          <Icon class="social-icon" name="mdi:instagram" />
        </NuxtLink>
        <NuxtLink v-if="anfitriao?.telefone?.whatsapp" target="_blank"
          :to="`https://wa.me/${anfitriao?.telefone?.numero}`">
          <Icon class="social-icon" name="mdi:whatsapp" />
        </NuxtLink>
        <NuxtLink v-if="anfitriao?.email" :to="`mailto:${anfitriao?.email}`">
          <Icon class="social-icon" name="mdi:email" />
        </NuxtLink>
      </div>
    </div>

    <span class="valores">
      <span class="emoji">{{ valor?.moeda }}</span>
      {{ valor?.formaPagamento }}
    </span>


  </div>
</template>

<script setup>
defineProps(['valor', 'anfitriao'])
</script>

<style scoped lang="css">
.valores {
  font-weight: bold;
  font-size: 0.7rem;
  text-align: start;
}

.valores .emoji {
  font-size: 0.6rem;
  margin-right: 0.3rem;
}

.card-bottom {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  border-radius: 12px;
  border: 1px solid var(--border, #E7E6E6);
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.05);
  background-color: white;
}

.anfitriao-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3rem;
}

.anfitriao {
  text-decoration: underline;
  font-size: 0.9rem;
  color: var(--text-color, #333);
}

.container-socials {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
}

.social-icon {
  font-size: 1.2rem;
}
</style>
