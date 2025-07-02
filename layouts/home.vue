<template>
  <Cabecalho />
  <slot />
  <ScrollToTop />
  <LayoutRodape />
</template>
<script setup>
import Cabecalho from "@/components/layout/Cabecalho";
import ScrollToTop from '~/components/common/ScrollToTop.vue';
</script>
<style lang="css"></style>