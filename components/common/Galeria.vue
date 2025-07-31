<script setup>
import { ref } from 'vue'
import ImageLightBox from '~/components/common/ImageLightBox.vue'
import dummyImg1 from '~/public/img/dummy1.png'
import dummyImg2 from '~/public/img/dummy2.png'

const props = defineProps(['contexto'])
const activeLightBox = ref(false)
const route = useRoute()


const path = `${props.contexto}/${route.params.id}`

const imagens = [1, 2, 3, 4].map(num => ({
  id: num,
  image: `/api/image/${path}/${num}.jpg`,
}))

const setActiveLightBox = (value) => {
  activeLightBox.value = value
}

const getImage = (index) =>{
  return index == 0 ? dummyImg1 : dummyImg2
}
</script>

<template>
  <div class="tourSingleGrid -type-1 mt-30">
    <div class="tourSingleGrid__grid mobile-css-slider-2">
      <img
          v-for="(img, index) in imagens"
          :key="index"
          width="375"
          height="375"
          :src="img?.image"
          :alt="`Imagem ${img?.id ?? index}`"
          @error="event => event.target.src = getImage(index)"
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
          Visualizar
        </span>
      </div>
    </div>

    <ImageLightBox
        :images="imagens"
        :activeLightBox="activeLightBox"
        @setActiveLightBox="setActiveLightBox"
    />
  </div>
</template>
