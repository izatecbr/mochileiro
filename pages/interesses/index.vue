<template>
  <section class="layout-pt-xl layout-pb-xl">
    <h1 class="text-center mb-15">Interesses em destaque</h1>
    <div class="container">
      <div class="filters-container">
        <AppInput placeholder="Pesquisar interesses" icon="mdi:search" />
              <AppDrowdown v-model="categoriaSelecionada" :items="travelStyles"  placeholder="Escolha uma categoria"
        @onSelect="item => setTravelStyle(item)" />

       <!-- <div ref="dropDownContainer" class="dropdown-container">
          <div :class="{ 'is-active': ddActive }" class="dropdown">
            <div @click="toggleDropDown" class="dropdown__button">
              <span class="dropdown__text">{{ travelStyle || "Escolha uma categoria" }}</span>
              <i class="icon-chevron-down ml-10"></i>
            </div>
            <div v-if="ddActive" class="dropdown__menu">
              <div v-for="(style, index) in travelStyles" :key="index" @click="setTravelStyle(style)"
                class="dropdown__item">
                {{ style }}
              </div>
            </div>
          </div>
        </div>-->
      </div>



      <!-- Grid Responsivo -->
      <div class="grid-container">
        <div v-for="(elm, index) in filteredInteresses" :key="index" class="grid-item">
          <nuxt-link :to="'/' + elm.tipo.rota + '/' + elm.lid"
            class="tourCard -type-1 d-block border-1 bg-white hover-shadow-1 overflow-hidden rounded-12 bg-white -hover-shadow">
            <InteressesCard :elm="elm" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

const store = useGlobalStore();
const interesses = ref([]);
const ddActive = ref(false);
const travelStyle = ref("");

const categoriaSelecionada = ref(null);
const travelStyles = ["Escolha uma categoria", "Experiência", "Aventura", "Atividade"];

const toggleDropDown = () => {
  ddActive.value = !ddActive.value;
};

const setTravelStyle = (style) => {
  travelStyle.value = style === "Escolha uma categoria" ? "" : style;
  ddActive.value = false;
};

const filteredInteresses = computed(() => {
  if (!travelStyle.value) return interesses.value;
  return interesses.value.filter(
    (item) => item.tipo.legenda === travelStyle.value
  );
});

onMounted(() => {
  interesses.value = store.interesses;
});
</script>

<style scoped>
.filters-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.search-icon {
  font-size: 1.5rem;
  color: #555;
}

.search-input {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.dropdown-container {
  position: relative;
}

.dropdown {
  position: relative;
}

.dropdown__button {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  background-color: white;
  cursor: pointer;
}

.dropdown__menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.5rem;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  overflow: hidden;
  z-index: 1000;
}

.dropdown__item {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.dropdown__item:hover {
  background-color: #f0f0f0;
}

/* Grid container */
.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* 5 colunas fixas */
  gap: 1.5rem;
}

/* Responsividade */
@media (max-width: 1200px) {
  .grid-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 992px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>
