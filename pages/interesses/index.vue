<template>
  <section class="layout-pt-xl layout-pb-xl">
    <h1 class="text-center mb-15">Interesses em destaque</h1>
    <div class="container">
      <div class="filters-container">
        <div style="display: flex; flex-direction: column; width: 84dvw;">

          <div class="search-filtro-row">
            <AppInput v-model="inputBuscaInteresses" class="search-input" placeholder="Pesquisar interesses"
              icon="mdi:search" />

            <button class="button-filtro" @click="toggleFiltros">
              <Icon name="lucide:sliders-horizontal" />
            </button>
          </div>

          <transition name="fade-height">
            <div v-show="filtrosVisiveis" class="dropdowns-container">
              <AppDrowdown style="flex: 1;" v-model="tipoInteresseSelecionado" :items="tiposInteresse"
                placeholder="Escolha um tipo" @onSelect="item => setTipoInteresse(item)" />

              <AppDrowdown style="flex: 1;" v-model="destinoSelecionado" :items="destinos"
                placeholder="Escolher Destino" @onSelect="item => setDestino(item)" />

              <AppDrowdown style="flex: 1;" v-model="periodoSelecionado" :items="periodos" placeholder="Escolher Perído"
                @onSelect="item => setPeriodo(item)" />

              <AppDrowdown style="flex: 1;" v-model="categoriaSelecionada" :items="categorias"
                placeholder="Escolher Categoria" @update:modelValue="setCategoria" />
            </div>
          </transition>
        </div>
      </div>

      <!-- Grid Responsivo -->
      <div v-if="filteredInteresses && filteredInteresses?.length > 0" class="grid-container">
        <div v-for="(elm, index) in paginatedInteresses" class="grid-item">
          <nuxt-link :key="index" :to="'/' + elm.tipo.rota + '/' + elm.lid"
            class="tourCard -type-1 d-block border-1 bg-white hover-shadow-1 overflow-hidden rounded-12 bg-white -hover-shadow">
            <InteressesCard :elm="elm" />
          </nuxt-link>
        </div>
      </div>

      <div v-else class="text-center">
        <Icon style="font-size: x-large; margin-top: 1.8rem;" name="lucide:inbox" />
        <p>Nenhum interesse encontrado.</p>
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
const filtrosVisiveis = ref(true);

const categorias = computed(() => {
  const base = [{
    label: "Escolha uma categoria",
    value: null,
    disabled: false
  }];

  if (store.categorias) {
    return base.concat(store.categorias.map(categoria => ({
      label: categoria.legenda,
      value: categoria.legenda,
         disabled: false,
      children: categoria.categorias?.map(subCategoria => ({
        label: subCategoria.legenda,
        value: subCategoria.legenda,
           disabled: false
      })) || []
    })));
  }

  return base;
});
const periodos = ["Escolher Perído", ...store.meses.map((periodo) => periodo.legenda)];
const destinos = ["Escolher Destino", ...store.destinos.map((destino) => destino.legenda)]

const tiposInteresse = ["Escolha um tipo", "Experiência", "Aventura", "Atividade"];

const filteredInteresses = computed(() => {
  const searchTerm = inputBuscaInteresses.value.toLowerCase();

  return interesses.value.filter((item) => {
    const matchCategoria = !categoriaSelecionada.value ||
      (item.destinoObject?.classificacoesList?.some(c => 
        c.legenda === categoriaSelecionada.value ||
        c.categoria?.legenda === categoriaSelecionada.value
      ));

    const matchTipo =
      !tipoInteresseSelecionado.value ||
      item.tipo?.legenda === tipoInteresseSelecionado.value;

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

    return matchCategoria && matchTipo && matchDestino && matchPeriodo && matchSearch;
  });
});

const toggleFiltros = () => {
  filtrosVisiveis.value = !filtrosVisiveis.value;
};

definePageMeta({
  layout: 'interesses'
})

watch(
  [tipoInteresseSelecionado, destinoSelecionado, periodoSelecionado, categoriaSelecionada],
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

const setCategoria = (item) => {
  if (item?.value === null || item?.disabled) {
    categoriaSelecionada.value = "";
  } else {
    categoriaSelecionada.value = item?.value ? item?.value : item;
  }
};

const setDestino = (destino) => {
  destinoSelecionado.value = destino === "Escolher Destino" ? "" : destino;
};

const setPeriodo = (periodo) => {
  periodoSelecionado.value = periodo === "Escolher Perído" ? "" : periodo;
};

onMounted(() => {
  interesses.value = store.interesses;

  const { categoria, destino, periodo, tipo } = route.query

  if (tipo && tipo !== 'Escolha um tipo') {
    tipoInteresseSelecionado.value = decodeURIComponent(tipo)
  }

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

.search-filtro-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* centraliza verticalmente */
  gap: 5px;
  width: 100%;
}

.search-input {
  flex: 1;
  height: 40px;
  /* ou a mesma altura do botão */
}

.button-filtro {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  margin-top: 10px;
  height: 40px;
  background-color: white;
  border: 1px solid #E7E6E6;
  border-radius: 10px;
  padding: 0;
  cursor: pointer;
}

.button-filtro:focus {
  outline: 1.5px solid #E7E6E6;
}

/* Botão toggle só aparece no mobile */
.toggle-filtros-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 28px;
  border-radius: 12px;
  border: 1px solid transparent;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

}

.toggle-filtros-btn .rotated {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}

.toggle-filtros-btn .icon {
  transition: transform 0.3s ease;
}

/* animação suave para abrir/fechar */
.fade-height-enter-active,
.fade-height-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.fade-height-enter-from,
.fade-height-leave-to {
  max-height: 0;
  opacity: 0;
}

.fade-height-enter-to,
.fade-height-leave-from {
  max-height: 500px;
  opacity: 1;
}

/* Container dos dropdowns no mobile em colunas */
.dropdowns-container {
  display: flex;
  gap: 10px;
  margin-top: 12px;
  flex-wrap: wrap;
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

@media (min-width: 767px) {
  .toggle-filtros-btn {
    display: none;
  }
}


@media (max-width: 768px) {
  .dropdowns-container {
    flex-direction: column;
  }

  .dropdowns-container>* {
    flex: unset;
    width: 100%;
  }

  .toggle-filtros-btn {
    display: flex;
  }

  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .search-input {
    width: 84dvw
  }
}

@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>
