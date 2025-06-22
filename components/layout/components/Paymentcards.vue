<template>
  <div v-for="(imageSrc, index) in imageSources" :key="index">
    <nuxt-img width="38" height="24" :src="imageSrc" alt="image" />
  </div>
</template>

<script setup>
const imageSources = [
  "/img/footer/cards/1.png",
  "/img/footer/cards/2.png",
  "/img/footer/cards/3.png",
  "/img/footer/cards/4.png",
  "/img/footer/cards/5.png",
  "/img/footer/cards/6.png",
];
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
