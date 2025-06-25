<!-- app.vue -->
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
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