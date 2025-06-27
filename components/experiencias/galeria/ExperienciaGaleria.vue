<script setup>
import { computed, ref } from "vue";
import ImageLightBox from "./ImageLightBox";

const props = defineProps(["images"]);

const activeLightBox = ref(false);

const _images = computed(() =>
  Object.keys(props.images).map((key) => ({
    id: Number(key),
    image: props.images[key],
  }))
);

const setActiveLightBox = (value) => {
  activeLightBox.value = value;
};

const dummyImages = [
  { id: 1, image: `/img/tourSingle/1/1.png` },
  { id: 1, image: `/img/tourSingle/1/2.png` },
  { id: 1, image: `/img/tourSingle/1/3.png` },
  { id: 1, image: `/img/tourSingle/1/4.png` },
];
</script>

<template>
  <div class="tourSingleGrid -type-1 mt-30">
    <div class="tourSingleGrid__grid mobile-css-slider-2">
      <img
        v-for="(img, index) in _images ?? dummyImages"
        :key="index"
        width="375"
        height="375"
        :src="img.image"
        alt="Image"
      />
    </div>

    <div class="tourSingleGrid__button">
      <div
        style="cursor: pointer"
        class="js-gallery"
        data-gallery="gallery1"
        @click="setActiveLightBox(true)"
      >
        <span class="button -accent-1 py-10 px-20 rounded-200 bg-dark-1 lh-16 text-white">
          See all photos
        </span>
      </div>
    </div>

    <ImageLightBox
      :images="_images ?? dummyImages"
      :activeLightBox="activeLightBox"
      @setActiveLightBox="setActiveLightBox"
    />
  </div>
</template>


