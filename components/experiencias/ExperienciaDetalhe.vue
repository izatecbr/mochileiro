<template>
  <div class="roadmap">
    <div v-for="(elm, i) in aventuras" :key="i" class="roadmap__item">
      <div class="roadmap__icon"></div>
      <div class="roadmap__wrap">
        <div class="roadmap__title">{{ elm?.legenda }} - {{ Utils.formatDateToBR(elm.data.dia) }}</div>
        <span class="text-13" >{{ elm?.descricao }}</span>
        <br>
        <div v-for="atividade in elm.atividadesList" >
          <ExperienciaValorAnfitriacao v-if="atividade.escolhida" style="margin-top: 4px;" :valor="atividade?.valor" :anfitriao="atividade?.anfitriaoObject"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Utils from '~/utils/Index';
import ExperienciaValorAnfitriacao from "~/components/experiencias/ExperienciaValorAnfitriacao.vue";
const props = defineProps(['aventuras'])
</script>

<style scoped>

</style>
