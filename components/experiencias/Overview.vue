<template>
  <h2 class="text-30">Overview</h2>
  <p class="mt-20">
    {{overview||'-'}}
  </p>

  <h3 class="text-20 fw-500 mt-20">Atividades</h3>
  <ul v-if="atividades" class="ulList mt-20">
    <li v-for="atividade in atividades" :key="atividade.id">
      <NuxtLink :to="`/atividades/${atividade.id}`">
      {{ atividade?.legenda }} - {{ atividade?.duracao }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(['overview', 'atividades'])

onBeforeMount(()=>{
  console.log(props.atividades)
  console.log(props.overview)
})
</script>
