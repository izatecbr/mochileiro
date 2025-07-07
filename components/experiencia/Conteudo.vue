<template>
  <section class="pt-1">
    <div class="container">
      <ExperienciaTitulo :objeto="objeto" />
      <CommonGaleria :contexto="'experiencias'" />
    </div>
  </section>

  <section class="layout-pt-md js-pin-container">
    <div class="container">
      <div class="row y-gap-30 justify-between">
        <div class="col-lg-8">
          <div class="row y-gap-20 justify-between items-center layout-pb-md">
            <ExperienciaInformacao :duracao="objeto?.duracao" :data="objeto?.data" />
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
            <CommonContatoInteresse :interesse="interesse" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { watch } from "vue";
const store = useGlobalStore();

const props = defineProps(['objeto','interesse']);

watch(
  () => props?.objeto?.localizacaoObject?.legenda,
  (newLegenda) => {

  },
  { immediate: true }
);
</script>

