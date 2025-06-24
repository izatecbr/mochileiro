<template>
  <main>
    <Cabecalho />
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
import Cabecalho from "@/components/layout/Cabecalho";
import Topo from "@/components/homes/Topo";
import Depoimentos from "@/components/homes/Depoimentos";
import Rodape from "@/components/layout/Rodape";
</script>
