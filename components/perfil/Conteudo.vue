<template>
  <section class="pt-1">
    <div class="container">
      <PerfilTitulo :objeto="objeto" />
      <PerfilGaleria :images="images" />
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

