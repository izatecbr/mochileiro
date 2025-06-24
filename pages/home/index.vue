<template>
  <main>
    <Header3 />
    <Hero3 />
    <Experiencias />
    <Aventuras />
    <Atividades />
    <TrendingDestinations />
    <TestimonialsTwo />
    <BannerFive />
    <ArticlesTwo />
    <BannerSix />
    <FooterThree />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Mochileiro.tec",
  description: "Viva em todos os lugares",
});
import ArticlesTwo from "@/components/homes/articles/ArticlesTwo";
import BannerFive from "@/components/homes/banners/BannerFive";
import BannerSix from "@/components/homes/banners/BannerSix";
import TrendingDestinations from "@/components/homes/destinations/TrendingDestinations";
import TestimonialsTwo from "@/components/homes/testimonials/TestimonialsTwo";
import Experiencias from "@/components/homes/anuncios/Experiencias.vue";
import Aventuras from "@/components/homes/anuncios/Aventuras.vue";
import Atividades from "@/components/homes/anuncios/Atividades.vue";
import Hero3 from "@/components/homes/heros/Hero3";
import FooterThree from "@/components/layout/footers/FooterThree";
import Header3 from "@/components/layout/header/Header3";
</script>
