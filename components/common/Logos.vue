<template>
  <section class="layout-pt-xl layout-pb-xl">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <h2 data-aos="fade-up" data-aos-delay="" class="text-30">
            Confiado por todas as maiores marcas de viagens.
          </h2>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="" class="pt-20 sm:pt-10">
        <Swiper
            :space-between="30"
            class="w-100"
            :modules="[Autoplay]"
            autoplay
            :loop="true"
            :breakpoints="{
            300: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 6,
            },
          }"
        >
          <SwiperSlide v-for="(elm, i) in clients" :key="i">
            <div class="d-flex justify-center items-center">
              <img
                  width="140"
                  height="90"
                  :src="elm"
                  alt="image"
                  style="width: 100px; height: 30px; object-fit: contain"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { clients } from "@/data/clients";
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/vue";
</script>
