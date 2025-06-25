<template>
  <div class="tourSingleGrid -type-1 mt-30">
    <div class="tourSingleGrid__grid mobile-css-slider-2">
      <nuxt-img
        width="1155"
        height="765"
        src="/img/tourSingle/1/1.png"
        alt="image"
      />
      <nuxt-img
        width="765"
        height="375"
        src="/img/tourSingle/1/2.png"
        alt="image"
      />
      <nuxt-img
        width="375"
        height="375"
        src="/img/tourSingle/1/3.png"
        alt="image"
      />
      <nuxt-img
        width="375"
        height="375"
        src="/img/tourSingle/1/4.png"
        alt="image"
      />
    </div>

    <div class="tourSingleGrid__button">
      <div style="cursor: pointer" class="js-gallery" data-gallery="gallery1">
        <span
          @click="setActiveLightBox(true)"
          class="button -accent-1 py-10 px-20 rounded-200 bg-dark-1 lh-16 text-white"
        >
          See all photos
        </span>
      </div>
      <a
        href="/img/tourSingle/1/2.png"
        class="js-gallery"
        data-gallery="gallery1"
      ></a>
      <a
        href="/img/tourSingle/1/3.png"
        class="js-gallery"
        data-gallery="gallery1"
      ></a>
      <a
        href="/img/tourSingle/1/4.png"
        class="js-gallery"
        data-gallery="gallery1"
      ></a>
    </div>

    <ImageLightBox
      :images="images"
      :activeLightBox="activeLightBox"
      @setActiveLightBox="setActiveLightBox"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ImageLightBox from "./ImageLightBox";

const activeLightBox = ref(false);
const currentSlideIndex = ref(1);

const setActiveLightBox = (value) => {
  activeLightBox.value = value;
};
const setCurrentSlideIndex = (value) => {
  currentSlideIndex.value = value;
};

const images = [
  { id: 1, image: `/img/tourSingle/1/1.png` },
  { id: 1, image: `/img/tourSingle/1/2.png` },
  { id: 1, image: `/img/tourSingle/1/3.png` },
  { id: 1, image: `/img/tourSingle/1/4.png` },
];
</script>
