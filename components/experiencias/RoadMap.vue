<template>
  <div class="roadmap">
    <div v-for="(elm, i) in aventuras" :key="i" class="roadmap__item">
      <!-- <div v-if="elm.icon" class="roadmap__iconBig">
        <i :class="elm.icon"></i>
      </div> -->
      <div class="roadmap__icon"></div>
      <div class="roadmap__wrap">
        <div class="roadmap__title">{{ elm.legenda }}</div>
        <span class="text-13" >{{ elm.descricao }}</span>
        <div v-if="elm.data" class="roadmap__content">{{ Utils.formatDateToBR(elm.data.dia) }}</div>
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
