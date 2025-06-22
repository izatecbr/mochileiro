<template>
  <section class="layout-pt-xl">
    <div class="container">
      <div class="row justify-between items-end y-gap-10">
        <div class="col-auto">
          <h2 data-aos="fade-up" data-aos-delay="" class="text-30">
            Popular things to do
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

      <div class="row y-gap-30 pt-40 sm:pt-20">
        <div
          v-for="(elm, i) in destinationsFour"
          :key="i"
          class="col-lg-2 col-md-3 col-6"
        >
          <nuxt-link
            to="/tour-list-1"
            class="featureCard -type-2 -hover-image-scale"
          >
            <div
              class="featureCard__image ratio ratio-19:22 -hover-image-scale__image rounded-12"
            >
              <nuxt-img
                width="284"
                height="327"
                :src="elm.image"
                alt="image"
                class="img-ratio rounded-12"
              />
            </div>

            <div class="featureCard__content text-center">
              <h4 class="text-white text-18">{{ elm.title }}</h4>
              <div class="text-14 text-white">{{ elm.count }}+ Tours</div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { destinationsFour } from "@/data/destinations";
</script>
