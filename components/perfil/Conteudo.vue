<template>
  <section class="pt-1">
    <div class="container">
      <PerfilTitulo :objeto="objeto" />
      <CommonGaleria :contexto="'usuarios'" />
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

watch(
  () => props?.objeto?.localizacaoObject?.legenda,
  (newLegenda) => {

  },
  { immediate: true }
);
</script>

