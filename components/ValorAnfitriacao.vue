<template>
  <div class="card-bottom">
    <div class="anfitriao-container">
      <NuxtLink class="anfitriao" :to="`/perfil/${anfitriao?.id}`">{{ anfitriao?.legenda }}</NuxtLink>
      <div class="container-socials">
        <NuxtLink class="anfitriao" :to="`/anfitriao/${anfitriao?.id}`">{{ anfitriao?.legenda }}</NuxtLink>
        <NuxtLink v-if="anfitriao?.instagram" target="_blank" :to="anfitriao?.instagram">
          <Icon class="social-icon" name="mdi:instagram" />
        </NuxtLink>
        <NuxtLink v-if="anfitriao?.telefone?.whatsapp" target="_blank"
        :to="`https://wa.me/${anfitriao?.telefone?.ddi}${anfitriao?.telefone?.ddd}${anfitriao?.telefone?.numero}?text=Oi%21%20Vi%20seu%20an%C3%BAncio%20no%20Mochileiro.tec%20e%20fiquei%20super%20interessado%28a%29%20na%20viagem.%20Pode%20me%20passar%20mais%20detalhes%3F`">
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
