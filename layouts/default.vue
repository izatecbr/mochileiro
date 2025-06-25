<template>
  <Cabecalho />
  <slot />
  <ScrollToTop />
</template>
<script setup>
import Cabecalho from "@/components/layout/Cabecalho";
import ScrollToTop from '~/components/common/ScrollToTop.vue';
// import 'aos/dist/aos.css'; // Import the AOS CSS
</script>
<style lang="css"></style>