<template>
  <div class="tourSingleSidebar">
    <div class="d-flex items-center">
      <div>Valor</div>
      <div class="text-20 fw-500 ml-10">{{ interesse?.valor?.moeda ?? '$' }} {{ interesse?.valor?.preco ?? '' }} </div>
    </div>
    <button class="button -md -dark-1 col-12 bg-accent-1 text-white mt-20" @click="handleWhatsClick">
        Falar com o Anfitrião
      <Icon name="mdi:whatsapp" class="ml-10" style="font-size: 20px;"></Icon>
    </button>
    <div class="d-flex items-center">
      <div style="font-size: 13px; margin: 6px">Anfitrião:</div>
      <NuxtLink class="text-11 fw-500" :to="`/perfil/${interesse?.anfitriaoObject?.id}`">{{ interesse?.anfitriaoObject?.legenda }}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['interesse'])

const handleWhatsClick = async () => {
const res = await $fetch('/api/whatsapp', {
  method: 'POST',
  body: { interesse: props.interesse }
})


if (res?.whatsappUrl) {
  window.open(res.whatsappUrl, '_blank')
} else {
  alert(res?.message || 'Erro ao registrar interesse')
}

}
</script>
