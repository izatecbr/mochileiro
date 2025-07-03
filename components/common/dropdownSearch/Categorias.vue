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
          @click="handleSetCategorias(option)"
          class="searchFormItemDropdown__item"
        >
          <button class="js-select-control-button">
            <span class="js-select-control-choice option-interesse">{{ option }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const store = useGlobalStore();
const options = store.categorias.map((categoria) => categoria.legenda);
defineProps(["active"]);
const emits = defineEmits(["setCategorias", ]);

const handleSetCategorias = (option) => {
  emits("setCategorias", option);
};
</script>

<style scoped>
.option-interesse{
  text-align: start;
}
</style>
