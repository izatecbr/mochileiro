<template>
  <section class="layout-pt-xl layout-pb-xl">
    <div class="container">
      <div class="row justify-between items-end y-gap-10">
        <div class="col-auto">
          <h2 data-aos="fade-up" data-aos-delay="" class="text-30">
            Trending Destinations
          </h2>
        </div>

        <div class="col-auto">
          <nuxt-link
            to="/tour-list-1"
            data-aos="fade-right"
            data-aos-delay=""
            class="buttonArrow d-flex items-center"
          >
            <span>See all</span>
            <i class="icon-arrow-top-right text-16 ml-10"></i>
          </nuxt-link>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay=""
        class="grid -type-2 pt-40 sm:pt-20"
      >
        <nuxt-link
          v-for="(elm, i) in destinationsSeven"
          :key="i"
          to="/tour-list-1"
          class="featureCard -type-1 overflow-hidden rounded-12 px-30 py-30 -hover-image-scale"
        >
          <div class="featureCard__image -hover-image-scale__image">
            <nuxt-img
              width="780"
              height="780"
              style="object-fit: cover"
              :src="elm.imgSrc"
              alt="image"
            />
          </div>

          <div class="featureCard__content">
            <h4 class="text-white">{{ elm.title }}</h4>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { destinationsSeven } from "@/data/destinations";
</script>
