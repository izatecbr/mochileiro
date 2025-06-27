<template>
  <section class="pt-1">
    <div class="container">
      <ExperienciaTitulo :objeto="objeto" />
      <ExperienciaGaleria :images="images" />
    </div>
  </section>

  <section class="layout-pt-md js-pin-container">
    <div class="container">
      <div class="row y-gap-30 justify-between">
        <div class="col-lg-8">
          <div class="row y-gap-20 justify-between items-center layout-pb-md">
            <ExperienciaInformacao :duracao="objeto?.duracao" />
          </div>
          <div class="line mt-1 mb-1"></div>
          <h2 class="text-20">Detalhes</h2>

          <p class="mt-10">
            {{ objeto?.descricao || '-' }}
          </p>

          <div class="mt-10 mb-10">
            <ExperienciaDetalhe :aventuras="objeto?.aventurasList" />
          </div>
          <div class="line mt-25 mb-25"></div>
          <ExperienciaCotacao :overview="objeto?.descricao" :aventuras="objeto?.aventurasList" />

        </div>

        <div class="col-lg-4">
          <div class="d-flex justify-end js-pin-content">
            <ExperienciaProposta :valor="objeto?.valor?.preco" :moeda="objeto?.valor?.moeda" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
const store = useGlobalStore();
const { $http } = useNuxtApp();
const { pexels } = $http;

const props = defineProps(["objeto"]);
const images = ref([]);
const isLoading = ref(false);

onMounted(()=>{
  console.log("Props objeto:", props.objeto);
})

const loadImages = async () => {
  if (!props?.objeto?.localizacaoObject?.legenda) return;
  
  isLoading.value = true;
  try {
    const response = await pexels.fetchImages(props.objeto.localizacaoObject.legenda);
    images.value = response.photos.map((photo) => photo.src.landscape);
  } catch (error) {
    console.error("Erro ao carregar imagens:", error);
  } finally {
    isLoading.value = false;
  }
};

watch(
  () => props?.objeto?.localizacaoObject?.legenda,
  (newLegenda) => {
    if (newLegenda) loadImages();
  },
  { immediate: true }
);
</script>

