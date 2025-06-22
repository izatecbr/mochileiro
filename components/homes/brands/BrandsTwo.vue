<template>
  <section class="layout-pt-xl">
    <div class="container">
      <div data-aos="fade-up" data-aos-delay="" class="">
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
              <nuxt-img
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
