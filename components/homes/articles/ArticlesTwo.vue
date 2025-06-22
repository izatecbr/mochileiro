<template>
  <section class="layout-pt-xl layout-pb-xl bg-dark-1">
    <div class="container">
      <div class="row justify-between items-end y-gap-10">
        <div class="col-auto">
          <h2
            data-aos="fade-up"
            data-aos-delay=""
            class="text-30 md:text-24 text-white"
          >
            Travel Articles
          </h2>
        </div>

        <div class="col-auto">
          <nuxt-link
            to="/blog-list-1"
            data-aos="fade-right"
            data-aos-delay=""
            class="buttonArrow d-flex items-center text-white"
          >
            <span>See all</span>
            <i class="icon-arrow-top-right text-16 ml-10"></i>
          </nuxt-link>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay=""
        class="row y-gap-30 pt-40 sm:pt-20"
      >
        <div
          v-for="(elm, i) in blogs.slice(0, 3)"
          :key="i"
          class="col-lg-4 col-md-6"
        >
          <nuxt-link :to="`/blog-single/${elm.id}`" class="blogCard -type-1">
            <div class="blogCard__image ratio ratio-41:30">
              <nuxt-img
                width="616"
                height="451"
                :src="elm.image"
                alt="image"
                class="img-ratio rounded-12"
              />

              <div class="blogCard__badge">{{ elm.badge }}</div>
            </div>

            <div class="blogCard__content mt-30">
              <div class="blogCard__info text-14">
                <div class="lh-13 text-white">{{ elm.date }}</div>
                <div class="blogCard__line"></div>
                <div class="lh-13 text-white">By {{ elm.author }}</div>
              </div>

              <h3 class="blogCard__title text-white text-18 fw-500 mt-10">
                {{ elm.title }}
              </h3>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { blogs } from "@/data/blogs";
</script>
