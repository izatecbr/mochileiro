<template>
  <section class="layout-pt-xl layout-pb-xl bg-accent-1-05">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <h2 data-aos="fade-up" data-aos-delay="" class="text-30">
            Depoimentos
          </h2>
        </div>
      </div>
      <div class="row justify-center pt-60 md:pt-30">
        <div class="col-xl-7 col-md-8 col-sm-10">
          <div class="overflow-hidden js-testimonialsSlider_1">
            <div data-aos="fade-right" data-aos-delay="" class="swiper-wrapper">
              <Swiper
                :spacebetween="30"
                class="w-100"
                @swiper="onSwiper"
                @slideChange="handleSlideChange"
                :modules="[Pagination]"
                :breakpoints="{
                  500: { slidesPerView: 1 },
                  768: { slidesPerView: 1 },
                  1024: { slidesPerView: 1 },
                  1200: { slidesPerView: 1 },
                }"
              >
                <SwiperSlide v-for="(elm, i) in testimonialsTwo" :key="i">
                  <div class="testimonials -type-2 text-center">
                    <div class="testimonials__icon">
                      <svg
                        width="60"
                        height="43"
                        viewBox="0 0 60 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.837 42.0652C11.0326 42.0652 7.6087 40.5435 4.56522 37.5C1.52174 34.3478 0 29.7283 0 23.6413C0 16.6848 1.84783 11.0326 5.54348 6.68478C9.34783 2.22825 14.7283 0 21.6848 0C24.1848 0 26.1413 0.163038 27.5543 0.489121V7.98912C26.0326 7.77173 24.0761 7.66304 21.6848 7.66304C17.9891 7.66304 15 8.91304 12.7174 11.413C10.5435 13.5869 9.29348 16.4674 8.96739 20.0543C10.3804 18.3152 12.663 17.4456 15.8152 17.4456C19.0761 17.4456 21.8478 18.587 24.1304 20.8696C26.413 23.0435 27.5543 25.9239 27.5543 29.5109C27.5543 33.2065 26.3587 36.25 23.9674 38.6413C21.5761 40.9239 18.5326 42.0652 14.837 42.0652ZM47.2826 42.0652C43.4783 42.0652 40.0543 40.5435 37.0109 37.5C33.9674 34.3478 32.4456 29.7283 32.4456 23.6413C32.4456 16.6848 34.2935 11.0326 37.9891 6.68478C41.7935 2.22825 47.1739 0 54.1304 0C56.6304 0 58.587 0.163038 60 0.489121V7.98912C58.4783 7.77173 56.5217 7.66304 54.1304 7.66304C50.4348 7.66304 47.4456 8.91304 45.163 11.413C42.9891 13.5869 41.7391 16.4674 41.413 20.0543C42.8261 18.3152 45.1087 17.4456 48.2609 17.4456C51.5217 17.4456 54.2935 18.587 56.5761 20.8696C58.8587 23.0435 60 25.9239 60 29.5109C60 33.2065 58.8043 36.25 56.413 38.6413C54.0217 40.9239 50.9783 42.0652 47.2826 42.0652Z"
                          fill="#EB662B"
                        />
                      </svg>
                    </div>

                    <div class="text-20 md:text-18 fw-500 mt-60 md:mt-30">
                      {{ elm.comment }}
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <div class="col-12">
          <div
            data-aos="fade-up"
            data-aos-delay=""
            class="testimonialsPagination -type-1 pt-60 md:pt-40 testimonialsSlider_1-pagination js-testimonialsSlider_1-pagination"
          >
            <div
              v-for="(elm, i) in imagens"
              :key="i"
              @click="handlePaginationClick(i)"
              :class="{ 'is-active': currentSlideIndex === i }"
              class="testimonialsPagination__item"
            >
              <img
                :width="105"
                :height="106"
                :src="elm.image"
                alt="person"
              />

              <div class="ml-20">
                <div class="text-16 lh-14 fw-500">{{ elm.name }}</div>
                <div class="text-14 lh-14">{{ elm.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { onMounted, ref } from "vue";


const imagens = [{
  id:6,
  name: "Kayla Deodato",
  role: "Analista LowCode",
  comment: `O blog traz informações importantes sobre o pré-planejamento da viagem, detalhando preços e indicando os estabelecimentos que oferecem os serviços e suporte necessários. Isso ajuda muito a organizar tudo com mais segurança e clareza.`,
},
  {
    id:7,
    name: "Eberte Sampaio",
    role: "Programador Java Júnior",
    comment: `O site explica bem cada etapa das aventuras, facilitando o planejamento e evitando surpresas. Os detalhes sobre preparo e desafios tornam o conteúdo confiável e útil para quem quer viver experiências parecidas.`,
  },
  {
    id:8,
    name: "Evandro Lima",
    role: "Programador Java Pleno",
    comment: `Adoro acompanhar esse blog! As histórias são super inspiradoras e me ajudam muito a planejar minhas viagens. Sempre encontro dicas valiosas e relatos reais que parecem um convite para a aventura. A comunidade também é muito ativa, adoro ler os comentários e trocar experiências. Recomendo para todo mundo que ama viajar!`,
  },].map((user) => ({
  image: `/api/image/usuarios/${user.id}/6.jpg`,
  name:user.name,
  role: user.role,
  comment: user.comment,
}))

const swiperRef = ref(null);
const currentSlideIndex = ref(0);

const handlePaginationClick = (index) => {
  currentSlideIndex.value = index;
  if (swiperRef.value) {
    swiperRef.value.slideTo(index);
  }
};

const handleSlideChange = (swiper) => {
  currentSlideIndex.value = swiper.activeIndex;

  if (swiper.activeIndex >= 5) {
    currentSlideIndex.value = swiper.activeIndex - 5;
  }
};
const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};
onMounted(() => {
  if (swiperRef.value) {
    swiperRef.value.slideTo(0); // Set the initial slide to index 0
  }
});
</script>
