<template>
  <CabecalhoClean />
  <slot />
  <ScrollToTop />
  <RodapeClean />
</template>
<script setup>
import ScrollToTop from '~/components/common/ScrollToTop.vue';
import CabecalhoClean from '~/components/layout/CabecalhoClean.vue';
import RodapeClean from '~/components/layout/RodapeClean.vue';
</script>
<style lang="css"></style>