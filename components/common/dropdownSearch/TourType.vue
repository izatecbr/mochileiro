<template>
  <div
    :class="['searchFormItemDropdown -tour-type', { 'is-active': active }]"
    data-x="tour-type"
    data-x-toggle="is-active"
  >
    <div class="searchFormItemDropdown__container">
      <div class="searchFormItemDropdown__list sroll-bar-1">
        <div
          v-for="(option, i) in options"
          :key="i"
          @click="handleTourTypeClick(option)"
          class="searchFormItemDropdown__item"
        >
          <button class="js-select-control-button">
            <span class="js-select-control-choice">{{ option }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const options = ref([
  "City Tour",
  "Hiking",
  "Food Tour",
  "Cultural Tours",
  "Museums Tours",
  "Beach Tours",
]);
defineProps(["active"]);
const emits = defineEmits(["setTourType"]);

const handleTourTypeClick = (option) => {
  emits("setTourType", option);
};
</script>
