<template>
  <div v-for="(elm, i) in rating" :key="i">
    <i :class="`icon-star text-${font || '10'} text-yellow-2`"></i>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const props = defineProps(["star", "font"]);
const rating = ref([]);

onMounted(() => {
  for (let i = Math.round(props.star); i >= 1; i--) {
    rating.value.push("star");
  }
});
</script>
