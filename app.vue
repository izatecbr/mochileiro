<!-- app.vue -->
<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">

import AOS from 'aos';
onMounted(() => {
  AOS.init({
    duration: 1400,
    once: true,
  });
});
</script>