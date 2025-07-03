div<template>
  <section class="layout-pt-xl layout-pb-xl">
    <h1 class="text-center mb-15">Interesses em destaque</h1>
    <div class="container">
      <div class="filters-container">
        <div style="display: flex; flex-direction: column;">
          <AppInput v-model="inputBuscaInteresses" style="width: 80dvw;" placeholder="Pesquisar interesses"
            icon="mdi:search" />
          <div style="display: flex; gap: 10px;">
            <AppDrowdown style="flex: 1;" v-model="categoriaSelecionada" :items="travelStyles"
              placeholder="Escolha uma categoria" @onSelect="item => setTravelStyle(item)" />

            <AppDrowdown style="flex: 1;" v-model="destinoSelecionado" :items="destinos" placeholder="Escolher Destino"
              @onSelect="item => setDestino(item)" />

            <AppDrowdown style="flex: 1;" v-model="periodoSelecionado" :items="periodos" placeholder="Escolher Perído"
              @onSelect="item => setPeriodo(item)" />
          </div>
        </div>
      </div>

      <!-- Grid Responsivo -->
      <div class="grid-container">
        <div v-for="(elm, index) in paginatedInteresses" :key="index" class="grid-item">
          <nuxt-link :to="'/' + elm.tipo.rota + '/' + elm.lid"
            class="tourCard -type-1 d-block border-1 bg-white hover-shadow-1 overflow-hidden rounded-12 bg-white -hover-shadow">
            <InteressesCard :elm="elm" />
          </nuxt-link>
        </div>
      </div>

      <AppPagination v-if="filteredInteresses.length > itemsPerPage" v-model="currentPage" :totalPages="totalPages" />
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

const store = useGlobalStore();
const interesses = ref([]);
const ddActive = ref(false);
const travelStyle = ref("");

const inputBuscaInteresses = ref("");
const categoriaSelecionada = ref(null);
const destinoSelecionado = ref(null);
const periodoSelecionado = ref(null);

const periodos = ["Escolher Perído", ...store.meses.map((periodo) => periodo.legenda)];
const destinos = ["Escolher Destino", ...store.destinos.map((destino) => destino.legenda)]
const travelStyles = ["Escolha uma categoria", "Experiência", "Aventura", "Atividade"];

const filteredInteresses = computed(() => {
  const searchTerm = inputBuscaInteresses.value.toLowerCase();

  return interesses.value.filter((item) => {
    const matchCategoria =
      !travelStyle.value || item.tipo.legenda === travelStyle.value;

    const matchDestino =
      !destinoSelecionado.value ||
      item.destinoObject?.legenda === destinoSelecionado.value;

    const matchPeriodo =
      !periodoSelecionado.value ||
      item.data?.mes?.legenda === periodoSelecionado.value;

    const matchSearch =
      !searchTerm ||
      item.legenda?.toLowerCase().includes(searchTerm) ||
      item.descricao?.toLowerCase().includes(searchTerm) ||
      item.tipo?.legenda?.toLowerCase().includes(searchTerm) ||
      item.destinoObject?.legenda?.toLowerCase().includes(searchTerm);

    return matchCategoria && matchDestino && matchPeriodo && matchSearch;
  });
});


watch(
  [travelStyle, destinoSelecionado, periodoSelecionado, inputBuscaInteresses],
  () => {
    currentPage.value = 1;
  }
);


const currentPage = ref(1)
const itemsPerPage = 8

const paginatedInteresses = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredInteresses.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(filteredInteresses.value.length / itemsPerPage)
})


const toggleDropDown = () => {
  ddActive.value = !ddActive.value;
};

const setTravelStyle = (style) => {
  travelStyle.value = style === "Escolha uma categoria" ? "" : style;

};

const setDestino = (destino) => {
  destinoSelecionado.value = destino === "Escolher Destino" ? "" : destino;
};

const setPeriodo = (periodo) => {
  periodoSelecionado.value = periodo === "Escolher Perído" ? "" : periodo;
};


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
  grid-template-columns: repeat(4, 1fr);
  /* 5 colunas fixas */
  gap: 1.2rem;
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
