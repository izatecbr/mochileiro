<template>
  <div class="roadmap">
    <div v-for="(elm, i) in aventuras" :key="i" class="roadmap__item">
      <div class="roadmap__icon"></div>
      <div class="roadmap__wrap">
        <nuxt-link
            :to="'/aventuras/'+elm.id">
        <div class="roadmap__title">{{ elm?.legenda }} - {{ Utils.formatDateToBR(elm.data.dia) }}</div>
        </nuxt-link>
        <span class="text-13" >{{ elm?.descricao }}</span>

        <br>
        <div v-for="atividade in elm.atividadesList" >
          <ExperienciaAtividadeAnfitriacao v-if="atividade.escolhida" style="margin-top: 4px;" :atividade="atividade"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Utils from '~/utils/Index';
const props = defineProps(['aventuras'])
</script>

<style scoped>

</style>
