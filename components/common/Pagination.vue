<template>
  <div class="pagination justify-center">
    <button
      @click="decrementIndex"
      class="pagination__button customStylePaginationPre button -accent-1 mr-15 -prev"
    >
      <i class="icon-arrow-left text-15"></i>
    </button>

    <div class="pagination__count">
      <div
        v-for="pageNumber in visiblePages"
        :key="pageNumber"
        @click="setActiveIndex(pageNumber)"
        :class="{ 'is-active': activeIndex === pageNumber }"
        style="cursor: pointer"
      >
        {{ pageNumber }}
      </div>

      <div v-if="range > 5">...</div>

      <div
        v-if="activeIndex > 5 && activeIndex < range"
        style="cursor: pointer"
        @click="setActiveIndex(activeIndex)"
        class="is-active"
      >
        {{ activeIndex }}
      </div>

      <div
        v-if="range > 4"
        style="cursor: pointer"
        @click="setActiveIndex(range)"
        :class="{ 'is-active': activeIndex === range }"
      >
        {{ range }}
      </div>
    </div>

    <button
      @click="incrementIndex"
      class="pagination__button customStylePaginationNext button -accent-1 ml-15 -next"
    >
      <i class="icon-arrow-right text-15"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const activeIndex = ref(1);
const range = ref(20);

const decrementIndex = () => {
  activeIndex.value = activeIndex.value > 1 ? activeIndex.value - 1 : 1;
};

const incrementIndex = () => {
  activeIndex.value =
    activeIndex.value < range.value ? activeIndex.value + 1 : activeIndex.value;
};

const setActiveIndex = (index) => {
  activeIndex.value = index;
};

const visiblePages = computed(() => {
  const pages = [];
  for (let i = 1; i <= Math.min(range.value, 5); i++) {
    pages.push(i);
  }
  return pages;
});
</script>
