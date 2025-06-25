<template>
  <main>
    <Topo />
    <Depoimentos />
    <Rodape />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Mochileiro.tec",
  description: "Viva em todos os lugares",
});
import Depoimentos from "@/components/homes/Depoimentos";
import Topo from "@/components/homes/Topo";
import Rodape from "@/components/layout/Rodape";
</script>
