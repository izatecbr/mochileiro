<template>
  <ClientOnly>
    <div>
      <DatePicker
        v-model.range="range"
        color="orange"
        :columns="windowWidth > 500 ? 2 : 1"
        :rows="windowWidth > 500 ? 1 : 2"
      >
        <template #default="{ togglePopover }">
          <button class="oh" @click="togglePopover">
            {{
              new Date(range.start)
                .toDateString()
                .split(" ")
                .slice(1, 3)
                .join(" ")
            }}
            -
            {{
              new Date(range.end)
                .toDateString()
                .split(" ")
                .slice(1, 3)
                .join(" ")
            }}
          </button>
        </template>
      </DatePicker>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref, reactive } from "vue";
import { Calendar, DatePicker } from "v-calendar";

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
const date = ref(new Date());
date.value.setDate(Number(date.value.getDate()) + 15);
let range = reactive({
  start: new Date(),
  end: date.value,
});
watch(range, () => {
  console.log(range.value);
});
</script>

<style scoped>
.oh {
  overflow: hidden !important;
}
</style>
<style src="v-calendar/style.css"></style>
