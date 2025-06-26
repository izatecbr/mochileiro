<template>
  <h2 class="text-30">Introdução</h2>
  <p class="mt-20">
    {{ overview || '-' }}
  </p>

  <h3 class="text-20 fw-500 mt-20">Planejamento</h3>
  <ul v-for="aventura in aventuras" :key="aventura.id" class="mt-20">
    <h4 class="text-16 fw-500 mt-5">{{ aventura.legenda }}</h4>
    <div class="line mt-1 mb-1"></div>
    <li class="d-flex flex-column mt-20" v-for="atividade in aventura.atividadesList">
      <NuxtLink  class="d-flex  justify-start items-center" :to="`/atividades/${atividade.id}`">
        <i v-if="atividade.escolhida"
          class="icon-check flex-center text-8 size-16 rounded-full text-green-2 bg-green-1 mr-5"></i>
        <i v-else class="icon-cross flex-center text-8 size-16 rounded-full text-red-3 bg-red-4 mr-5"></i>
        <p class="label-overview" >{{ atividade.legenda }} {{ atividade?.duracao ? `- (${atividade.duracao})` : '' }}</p>
      </NuxtLink>
 
      <ExperienciasBottomOverview :valor="atividade?.valor" :anfitriao="atividade?.anfitriaoObject"/>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(['overview', 'aventuras'])

console.log('Overview prop:', props.aventuras)

</script>

<style scoped lang="css">
.label-overview{
  font-size: 0.8rem;
  text-decoration: underline;
}
</style>
