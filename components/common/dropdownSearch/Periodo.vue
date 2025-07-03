<template>
  <div :class="['searchFormItemDropdown -location', { 'is-active': active }]">
    <div class="searchFormItemDropdown__container">
      <div class="searchFormItemDropdown__list sroll-bar-1">
        <div
          v-for="(elm, i) in periodos"
          :key="i"
          @click="handleLocationClick(elm)"
          class="searchFormItemDropdown__item"
        >
          <button class="js-select-control-button">
            <span class="js-select-control-choice">{{ elm }}</span>
         <!--   <span>{{ elm.type }}</span>-->
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps(["active"]);

const store = useGlobalStore();
const periodos = [...store.meses.map((periodo) => periodo.legenda)];

const emits = defineEmits(["setLocation"]);

const handleLocationClick = (elm) => {
  emits("setLocation", elm.choice);
};
</script>
