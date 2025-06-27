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
import Topo from "@/components/home/Topo";
import Banner from "@/components/home/Banner";
import Depoimentos from "@/components/home/Depoimentos";
import Rodape from "@/components/layout/Rodape";
</script>
