<template>

  <h2 class="text-20">Roteiro e Valores</h2>
  <ul v-for="atividade in atividades" :key="atividade.id" class="mt-20">
    <li class="d-flex flex-column mt-1" >
      <NuxtLink  class="d-flex  justify-start items-center" :to="`/atividades/${atividade.id}`">
        <i v-if="atividade.proposta"
          class="icon-cross flex-center text-8 size-16 rounded-full text-red-3 bg-red-4 mr-5"></i>
        <i v-else class="icon-check flex-center text-8 size-16 rounded-full text-green-2 bg-green-1 mr-5"></i>
        <p class="label-overview" >{{ atividade.legenda }} {{ atividade?.duracao ? `- (${atividade.duracao})` : '' }}</p>
      </NuxtLink>
      <AventuraValorAnfitriacao :valor="atividade?.valor" :anfitriao="atividade?.anfitriaoObject"/>
    </li>
    <div class="line mt-1 mb-1"></div>
  </ul>
</template>

<script setup>


const props = defineProps(['atividades'])

</script>

<style scoped lang="css">
.label-overview{
  font-size: 0.8rem;
  text-decoration: underline;
}
</style>
