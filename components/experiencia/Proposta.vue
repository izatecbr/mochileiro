<template>
  <div class="tourSingleSidebar">
    <div class="d-flex items-center">
      <div>Valor</div>
      <div class="text-20 fw-500 ml-10">{{ moeda ?? '$' }} {{ valor ?? '' }} </div>
    </div>
    <button class="button -md -dark-1 col-12 bg-accent-1 text-white mt-20">
      <NuxtLink class="text-11 fw-500" target="_blank"
                :to="`https://wa.me/${anfitriao?.telefone?.ddi}${anfitriao?.telefone?.ddd}${anfitriao?.telefone?.numero}?text=Oi, vi o seu anúncio sobre ${legenda} no site Mochileiro.tec e gostaria de ter mais detalhes.`">
        Falar com o Anfitrião
      </NuxtLink>
      <i class="icon-arrow-top-right ml-10"></i>
    </button>
    <div class="d-flex items-center">
      <div style="font-size: 13px; margin: 6px">Anfitrião:</div>
      <NuxtLink class="text-11 fw-500" :to="`/perfil/${anfitriao?.id}`">{{ anfitriao?.legenda }}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['legenda','valor', 'moeda','anfitriao'])
</script>
