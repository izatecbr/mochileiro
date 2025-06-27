<template>
  <main>
    <HomeTopo />
    <HomeBanner />
    <HomeDepoimentos />
    <HomeInteresses/>

    <Rodape />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Mochileiro.tec",
  description: "Viva em todos os lugares",
});
import Rodape from "@/components/layout/Rodape";
</script>
