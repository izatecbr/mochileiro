<template>
  <h2 class="text-30">Introdução</h2>
  <p class="mt-20">
    {{overview||'-'}}
  </p>

  <h3 class="text-20 fw-500 mt-20">Planejamento</h3>
  <ul v-for="aventura in aventuras" :key="aventura.id" class="ulList mt-20">
    <h4 class="text-18 fw-500">{{aventura.legenda}}</h4>
    <li v-for="atividade in aventura.atividadesList"  >
      <i
          class="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"
      ></i>
      <i
          class="icon-cross flex-center text-10 size-24 rounded-full text-red-3 bg-red-4 mr-15"
      ></i>
      <NuxtLink style=" text-decoration: underline;" class=""  :to="`/atividades/${atividade.id}`">
       {{ atividade.legenda }}  {{ atividade?.duracao ? `- (${atividade.duracao})` : '' }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(['overview', 'aventuras'])

</script>
