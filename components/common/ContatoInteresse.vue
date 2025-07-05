<template>
  <div class="tourSingleSidebar">
    <div class="d-flex items-center">
      <div>Valor</div>
      <div class="text-20 fw-500 ml-10">{{ moeda ?? '$' }} {{ valor ?? '' }} </div>
    </div>
    <button class="button -md -dark-1 col-12 bg-accent-1 text-white mt-20">
      <button class="text-11 fw-500" @click="handleWhatsClick">
        Falar com o Anfitrião
      </button>
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

const { $supabase } = useNuxtApp()

const handleWhatsClick = async () => {
  // Registrar o interesse
  await $supabase
      .from('tab_email')
      .insert([{ email: 'interesse@whats.com', cancelado: false }]) // ou outra tabela

  // Redirecionar pro WhatsApp (sem recarregar a página)
  window.open('https://wa.me/5586999422032?text=Olá%20tenho%20interesse', '_blank')
}
</script>
