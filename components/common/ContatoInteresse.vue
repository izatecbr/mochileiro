<template>
  <div class="tourSingleSidebar">
    <div class="d-flex items-center">
      <div>Valor</div>
      <div class="text-20 fw-500 ml-10">{{ interesse?.valor?.moeda ?? '$' }} {{ interesse?.valor?.preco ?? '' }} </div>
    </div>
    <button class="button -md -dark-1 col-12 bg-accent-1 text-white mt-20" @click="handleWhatsClick">
        Falar com o Anfitrião
      <i class="icon-arrow-top-right ml-10"></i>
    </button>
    <div class="d-flex items-center">
      <div style="font-size: 13px; margin: 6px">Anfitrião:</div>
      <NuxtLink class="text-11 fw-500" :to="`/perfil/${interesse?.anfitriaoObject?.id}`">{{ interesse?.anfitriaoObject?.legenda }}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['interesse'])

const { $supabase } = useNuxtApp()

const handleWhatsClick = async () => {
  const { $supabase } = useNuxtApp()
  const interesse = props.interesse;
  await $supabase
      .from('tab_interesse')
      .insert([
        {
          anfitriao_id: interesse.anfitriaoObject.id,
          interesse_tipo: interesse.tipo.sigla,
          interesse_id: interesse.lid,
          legenda: interesse.legenda,
          valor: interesse.valor.quantia
        }
      ])

  const anfitriao = interesse.anfitriaoObject;
  const whats =''+anfitriao.telefone.ddi+anfitriao.telefone.ddd+anfitriao.telefone.numero;
  // Redirecionar pro WhatsApp (sem recarregar a página)
  window.open(`https://wa.me/${whats}?text=Olá, descobri você pelo site Mochileiro.tec e gostaria de saber um pouco mais sobre esta ${interesse.tipo.legenda} - ${interesse.legenda}`, '_blank')
}
</script>
