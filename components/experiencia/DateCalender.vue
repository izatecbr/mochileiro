<template>
  <ClientOnly>
    <div class="mt-30">
      <DatePicker
        color="orange"
        :columns="windowWidth > 500 ? 2 : 1"
        :rows="windowWidth > 500 ? 1 : 2"
        v-model.range="range"
      />
    </div>
  </ClientOnly>
</template>

<script setup>
import { DatePicker } from "v-calendar";
import "v-calendar/style.css";
import { reactive, ref } from "vue";

// useNuxtApp().vueApp.use(setupCalendar,{})
const windowWidth = ref(0);

// Function to update window width
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

// On mounted, get initial window width
onMounted(() => {
  updateWindowWidth();
  // Add event listener for window resize
  window.addEventListener("resize", updateWindowWidth);
});

// On component destruction, remove event listener
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWindowWidth);
});
// useNuxtApp().vueApp.use(setupCalendar,{})
const date = ref(new Date());
date.value.setDate(Number(date.value.getDate()) + 15);
let range = reactive({
  start: new Date(),
  end: date.value,
});
</script>

<!-- <style scoped>
@use form {
  field: label, group, input, button;
}
</style> -->
