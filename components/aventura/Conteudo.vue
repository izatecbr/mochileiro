<template>
  <section class="pt-1">
    <div class="container">
      <AventuraTitulo :objeto="objeto" />
      <CommonGaleria :contexto="'aventuras'" />
    </div>
  </section>

  <section class="layout-pt-md js-pin-container">
    <div class="container">
      <div class="row y-gap-30 justify-between">
        <div class="col-lg-8">
          <div class="row y-gap-20 justify-between items-center layout-pb-md">
            <AventuraInformacao :duracao="objeto?.duracao" :data="objeto?.data" />
          </div>
          <div class="line mt-1 mb-1"></div>
          <h2 class="text-20">Detalhes</h2>

          <p class="mt-10">
            {{ objeto?.descricao || '-' }}
          </p>

          <AventuraValorAnfitriacao style="margin-top: 4px;" :valor="objeto?.valor"
            :anfitriao="objeto?.anfitriaoObject" />
          <div class="line mt-25 mb-25"></div>
          <AventuraCotacao :atividades="objeto?.atividadesList" />

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
const props = defineProps(['objeto','interesse']);
</script>
