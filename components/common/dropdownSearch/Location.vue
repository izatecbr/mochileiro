<template>
  <div :class="['searchFormItemDropdown -location', { 'is-active': active }]">
    <div class="searchFormItemDropdown__container">
      <div class="searchFormItemDropdown__list sroll-bar-1">
        <div
          v-for="(elm, i) in locations"
          :key="i"
          @click="handleLocationClick(elm)"
          class="searchFormItemDropdown__item"
        >
          <button class="js-select-control-button">
            <span class="js-select-control-choice">{{ elm.choice }}</span>
            <span>{{ elm.type }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps(["active"]);

const emits = defineEmits(["setLocation"]);
import { locations } from "@/data/searchDDLocations";

const handleLocationClick = (elm) => {
  emits("setLocation", elm.choice);
};
</script>
