<template>
  <div class="card-bottom">
    <span> {{ valor?.moeda }} {{ valor?.formaPagamento }}</span>
    <div class="d-md-flex">
      <NuxtLink class="anfitriao" :to="`/anfitriao/${anfitriao?.id}`">{{ anfitriao?.legenda }}</NuxtLink>
      <NuxtLink>{{
        anfitriao }}</NuxtLink>
      <NuxtLink>
        {{ anfitriao?.site }}
      </NuxtLink>
      <NuxtLink>
        {{ anfitriao?.instagram }}
      </NuxtLink>
      <NuxtLink v-if="anfitriao?.telefone?.whatsapp">
        {{ anfitriao?.telefone?.numero }}
      </NuxtLink>
      <NuxtLink>
        {{ anfitriao?.email }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps(['valor', 'anfitriao'])
</script>

<style scoped lang="css">
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

.anfitriao {
  text-decoration: underline;
}
</style>