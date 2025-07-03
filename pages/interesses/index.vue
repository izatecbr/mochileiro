div<template>
  <section class="layout-pt-xl layout-pb-xl">
    <h1 class="text-center mb-15">Interesses em destaque</h1>
    <div class="container">
      <div class="filters-container">
        <div style="display: flex; flex-direction: column;">
          <AppInput v-model="inputBuscaInteresses" style="width: 80dvw;" placeholder="Pesquisar interesses"
            icon="mdi:search" />
          <div style="display: flex; gap: 10px;">
            <AppDrowdown style="flex: 1;" v-model="tipoInteresseSelecionado" :items="tiposInteresse"
              placeholder="Escolha um tipo" @onSelect="item => setTipoInteresse(item)" />

            <AppDrowdown style="flex: 1;" v-model="destinoSelecionado" :items="destinos" placeholder="Escolher Destino"
              @onSelect="item => setDestino(item)" />

            <AppDrowdown style="flex: 1;" v-model="periodoSelecionado" :items="periodos" placeholder="Escolher Perído"
              @onSelect="item => setPeriodo(item)" />

            <AppDrowdown style="flex: 1;" v-model="categoriaSelecionada" :items="categorias" placeholder="Escolher Categoria"
              @onSelect="item => setCategoria(item)" />
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

const route = useRoute()
const router = useRouter()
const store = useGlobalStore();
const interesses = ref([]);
const ddActive = ref(false);

const inputBuscaInteresses = ref("");
const tipoInteresseSelecionado = ref(null);
const destinoSelecionado = ref(null);
const periodoSelecionado = ref(null);
const categoriaSelecionada = ref(null);

const categorias = ["Escolha uma categoria", ...store.categorias.map((categoria) => categoria.legenda)];
const periodos = ["Escolher Perído", ...store.meses.map((periodo) => periodo.legenda)];
const destinos = ["Escolher Destino", ...store.destinos.map((destino) => destino.legenda)]

//nomeclatura categrias ou tipo ?
const tiposInteresse = ["Escolha um tipo", "Experiência", "Aventura", "Atividade"];

const filteredInteresses = computed(() => {
  const searchTerm = inputBuscaInteresses.value.toLowerCase();

  return interesses.value.filter((item) => {

    const matchCategoria =
      !categoriaSelecionada.value || item.categoria?.legenda === categoriaSelecionada.value;
    const matchTipo =
      !tipoInteresseSelecionado.value || item.tipo.legenda === tipoInteresseSelecionado.value;

    const matchDestino =
      !destinoSelecionado.value ||
      item.destinoObject?.cidadeObject?.legenda?.toLowerCase() === destinoSelecionado.value.toLowerCase();

    const matchPeriodo =
      !periodoSelecionado.value ||
      item.data?.mes?.legenda === periodoSelecionado.value;

    const matchSearch =
      !searchTerm ||
      item.legenda?.toLowerCase().includes(searchTerm) ||
      item.descricao?.toLowerCase().includes(searchTerm) ||
      item.tipo?.legenda?.toLowerCase().includes(searchTerm) ||
      item.destinoObject?.cidadeObject?.legenda?.toLowerCase().includes(searchTerm);

    return matchTipo && matchDestino && matchPeriodo && matchSearch && matchCategoria;
  });
});

definePageMeta({
  layout: 'interesses'
})


watch(
  [tipoInteresseSelecionado, destinoSelecionado, periodoSelecionado, inputBuscaInteresses],
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

const setTipoInteresse = (value) => {
  tipoInteresseSelecionado.value = value === "Escolha um tipo" ? "" : value;
};

const setCategoria = (categoria) => {
  categoriaSelecionada.value = categoria === "Escolha uma categoria" ? "" : categoria;
};

const setDestino = (destino) => {
  destinoSelecionado.value = destino === "Escolher Destino" ? "" : destino;
};

const setPeriodo = (periodo) => {
  periodoSelecionado.value = periodo === "Escolher Perído" ? "" : periodo;
};


onMounted(() => {
  interesses.value = store.interesses;

  console.log("Interesses:", interesses.value[0]?.destinoObject?.cidadeObject?.legenda);
  console.log(destinoSelecionado.value)

  const { categoria, destino, periodo } = route.query

  if (categoria && categoria !== 'Escolha uma categoria') {
    categoriaSelecionada.value = decodeURIComponent(categoria)
  }

  if (destino && destino !== 'Escolher Destino') {
    destinoSelecionado.value = decodeURIComponent(destino)
  }

  if (periodo && periodo !== 'Escolher Perído') {
    periodoSelecionado.value = decodeURIComponent(periodo)
  }


})

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
