<script setup>
import { ref } from "vue";

const props = defineProps(["images", "activeLightBox"]);
const emits = defineEmits(["setActiveLightBox"]);

const currentSlideIndex = ref(0);

const prevSlide = () => {
  currentSlideIndex.value =
    currentSlideIndex.value === 0
      ? props.images.length - 1
      : currentSlideIndex.value - 1;
};

const nextSlide = () => {
  currentSlideIndex.value =
    currentSlideIndex.value === props.images.length - 1
      ? 0
      : currentSlideIndex.value + 1;
};

const setActiveLightBoxFunc = (value) => {
  emits("setActiveLightBox", value);
};
</script>

<template>
  <div
    id="myModal"
    class="modal"
    :class="{ activeImageLightBox: activeLightBox }"
  >
    <div
      class="close cursor"
      style="z-index: 1000"
      @click="setActiveLightBoxFunc(false)"
    >
      <span>&times;</span>
    </div>
    <div class="modal-content">
      <div
        v-for="(elm, i) in images"
        :key="i"
        class="mySlides"
        :class="{ fadein: currentSlideIndex === i }"
        :style="{
          display: currentSlideIndex === i ? 'block' : 'none',
          height: '100%',
        }"
      >
        <div class="numbertext">{{ i + 1 }} / {{ images.length }}</div>
        <img
          :width="850"
          :height="510"
          :src="elm.image"
          style="height: 100%; width: 100%; object-fit: contain; margin: auto;"
          alt="Image"
        />
      </div>

      <a class="prev" @click="prevSlide">&#10094;</a>
      <a class="next" @click="nextSlide">&#10095;</a>
    </div>
  </div>
</template>
