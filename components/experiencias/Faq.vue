<template>
  <div v-for="(elm, i) in faqData" :key="i" class="col-12">
    <div
      :class="`accordion__item px-20 py-15 border-1 rounded-12 ${
        currentActiveFaq === i ? 'is-active' : ''
      }`"
    >
      <div
        class="accordion__button d-flex items-center justify-between"
        @click="toggleFaq(i)"
      >
        <div class="button text-16 text-dark-1">{{ elm.question }}</div>
        <div
          class="accordion__icon size-30 flex-center bg-light-2 rounded-full"
        >
          <i class="icon-plus"></i>
          <i class="icon-minus"></i>
        </div>
      </div>
      <div
        class="accordion__content"
        :style="{ maxHeight: currentActiveFaq === i ? '150px' : '0' }"
      >
        <div class="pt-20">
          <p>{{ elm.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { faqData } from "@/data/tourSingleContent";

const currentActiveFaq = ref(0);

const toggleFaq = (index) => {
  currentActiveFaq.value = currentActiveFaq.value === index ? -1 : index;
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
