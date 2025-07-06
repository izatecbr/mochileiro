<template>
  <div class="card-bottom">
    <div class="anfitriao-container">
    <span class="legenda">
       <NuxtLink  class="d-flex  justify-start items-center" :to="`/atividades/${atividade.id}`">
        <span class="emoji">✔️</span>
         {{ atividade?.legenda }} - {{ atividade?.valor?.preco }}
       </NuxtLink>
    </span>
      <div class="container-socials">
        <NuxtLink class="anfitriao" :to="`/perfil/${atividade?.anfitriao?.id}`">{{ atividade?.anfitriao?.legenda }}</NuxtLink>
        <NuxtLink v-if="atividade?.anfitriao?.instagram" target="_blank" :to="atividade?.anfitriao?.instagram">
          <Icon class="social-icon" name="mdi:instagram" />
        </NuxtLink>
        <NuxtLink v-if="atividade?.anfitriao?.telefone?.whatsapp" target="_blank"
          :to="`https://wa.me/${atividade?.anfitriao?.telefone?.numero}`">
          <Icon class="social-icon" name="mdi:whatsapp" />
        </NuxtLink>

      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['atividade'])
</script>

<style scoped lang="css">
.legenda {
  font-size: 0.9rem;
  text-align: start;
}

.legenda .emoji {
  font-size: 0.6rem;
  margin-right: 0.3rem;
}

.card-bottom {
  position: relative;
  display: flex;
  flex-direction: column;
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
