<template>
  <main>
    <Topo />
    <Banner />
    <Depoimentos />
    <Rodape />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Mochileiro.tec",
  description: "Viva em todos os lugares",
});
import Banner from "@/components/homes/Banner";
import Depoimentos from "@/components/homes/Depoimentos";
import Topo from "@/components/homes/Topo";
import Rodape from "@/components/layout/Rodape";
</script>
