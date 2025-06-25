<template>
  <div class="roadmap">
    <div v-for="(elm, i) in roadmapData" :key="i" class="roadmap__item">
      <div v-if="elm.icon" class="roadmap__iconBig">
        <i :class="elm.icon"></i>
      </div>
      <div v-else class="roadmap__icon"></div>
      <div class="roadmap__wrap">
        <div class="roadmap__title">{{ elm.title }}</div>
        <div v-if="elm.content" class="roadmap__content">{{ elm.content }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { roadmapData } from "@/data/tourSingleContent";
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
