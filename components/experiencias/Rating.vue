<template>
  <div class="overallRating">
    <div class="overallRating__list">
      <div
        v-for="(elm, i) in overallRatingData"
        :key="i"
        class="overallRating__item"
      >
        <div class="overallRating__content">
          <div class="overallRating__icon">
            <i :class="`${elm.icon} text-30 text-accent-1`"></i>
          </div>

          <div class="overallRating__info">
            <h5 class="text-16 fw-500">{{ elm.category }}</h5>
            <div class="lh-15">{{ elm.comment }}</div>
          </div>
        </div>

        <div class="overallRating__rating d-flex items-center">
          <i class="icon-star text-yellow-2 text-16"></i>
          <div class="text-16 fw-500 ml-10">{{ elm.rating }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { overallRatingData } from "@/data/tourSingleContent";
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
