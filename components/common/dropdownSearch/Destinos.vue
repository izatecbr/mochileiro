<template>
  <div :class="['searchFormItemDropdown -location', { 'is-active': active }]">
    <div class="searchFormItemDropdown__container">
      <div class="searchFormItemDropdown__list sroll-bar-1">
        <div
          v-for="(elm, i) in destinos"
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

const router = useRouter();
const store = useGlobalStore();
const destinos = [...store.destinos.map((destino) => destino.legenda)]

const emits = defineEmits(["setDestino"]);

const handleLocationClick = (elm) => {
  emits("setDestino", elm);
};
</script>
