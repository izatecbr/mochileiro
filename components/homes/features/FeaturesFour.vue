<template>
  <section class="layout-pt-xl">
    <div class="container">
      <div data-aos="fade-up" data-aos-delay="" class="row y-gap-30">
        <div v-for="(elm, i) in featuresThree" :key="i" class="col-lg-3 col-6">
          <div class="text-center">
            <nuxt-img width="60" height="61" :src="elm.icon" alt="icon" />

            <h3 class="text-40 md:text-30 lh-14 fw-700 mt-30 md:mt-15">
              {{ elm.value }}
            </h3>
            <p class="lh-15">{{ elm.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { featuresThree } from "@/data/features";
</script>
