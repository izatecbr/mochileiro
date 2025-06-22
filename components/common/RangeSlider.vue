<template>
  <div style="margin: 30px 14px">
    <Slider v-model="value" />
  </div>
</template>

<script>
import Slider from "@vueform/slider";

export default {
  components: {
    Slider,
  },
  data() {
    return {
      value: [20, 40],
    };
  },
};
</script>
<style scoped>
div {
  --slider-bg: #d1d5db;

  --slider-connect-bg: var(--color-accent-1);
  --slider-tooltip-bg: var(--color-accent-1);

  --slider-handle-ring-color: var(--color-accent-1);
}
</style>
<style src="@vueform/slider/themes/default.css"></style>
