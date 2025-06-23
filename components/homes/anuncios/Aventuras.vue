<template>
  <section class="layout-pt-xl ">
    <div class="container">
      <div class="row y-gap-10 justify-between items-end y-gap-10">
        <div class="col-auto">
          <h2 data-aos="fade-up" data-aos-delay="" class="text-30">
            Aventuras
          </h2>
        </div>

        <div ref="dropDownContainer" class="col-auto">
          <div
            :class="{ 'is-active': ddActive }"
            class="dropdown -type-1 js-dropdown js-form-dd"
          >
            <div @click="toggleDropDown" class="dropdown__button js-button">
              <span class="js-title">{{
                travelStyle ? travelStyle : "By Travel Style"
              }}</span>
              <i class="icon-chevron-down ml-10"></i>
            </div>

            <div class="dropdown__menu js-menu-items">
              <div
                v-for="(style, index) in travelStyles"
                :key="index"
                @click="setTravelStyle(style)"
                class="dropdown__item"
              >
                {{ style }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative pt-40 sm:pt-20">
        <div class="overflow-hidden js-section-slider">
          <Swiper
            :space-between="30"
            class="w-100"
            :navigation="{ prevEl: '.pbp2', nextEl: '.pbn2' }"
            :breakpoints="{
              500: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }"
            ref="swiper"
          >
            <SwiperSlide v-for="(elm, index) in filteredTours" :key="index">
              <nuxt-link
                :to="'/tour-single-1/' + elm.id"
                class="tourCard -type-1 d-block border-1 bg-white hover-shadow-1 overflow-hidden rounded-12 bg-white -hover-shadow"
              >
                <div class="tourCard__header">
                  <div class="tourCard__image ratio ratio-28:20">
                    <nuxt-img
                      width="421"
                      height="301"
                      :src="elm.imageSrc"
                      alt="image"
                      class="img-ratio"
                    />
                  </div>

                  <button class="tourCard__favorite">
                    <i class="icon-heart"></i>
                  </button>
                </div>

                <div class="tourCard__content px-20 py-10">
                  <div
                    class="tourCard__location d-flex items-center text-13 text-light-2"
                  >
                    <i class="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                    {{ elm.location }}
                  </div>

                  <h3 class="tourCard__title text-16 fw-500 mt-5">
                    <span>{{ elm.title }}</span>
                  </h3>

                  <div
                    class="tourCard__rating d-flex items-center text-13 mt-5"
                  >
                    <div class="d-flex x-gap-5">
                      <Stars :star="elm.rating" />
                    </div>

                    <span class="text-dark-1 ml-10">
                      {{ elm.rating }} ({{ elm.ratingCount }})
                    </span>
                  </div>

                  <div
                    class="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10"
                  >
                    <div class="d-flex items-center">
                      <i class="icon-clock text-16 mr-5"></i>
                      {{ elm.duration }}
                    </div>

                    <div>
                      From {{ " " }}
                      <span class="text-16 fw-500"> ${{ elm.price }} </span>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { filterTour } from "~/data/tours";
import Stars from "~/components/common/Stars.vue";

const ddActive = ref(false);
const travelStyle = ref("");
const filteredTours = ref(filterTour);

const travelStyles = ["Fast", "Steady", "Furious", "Grind"];

const dropDownContainer = ref(null);

const handleDropDownClick = (event) => {
  if (
    dropDownContainer.value &&
    !dropDownContainer.value.contains(event.target)
  ) {
    ddActive.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleDropDownClick);

  return () => {
    document.removeEventListener("click", handleDropDownClick);
  };
});

watch(travelStyle, (newVal) => {
  filteredTours.value = newVal
    ? filterTour.filter((elm) => elm.spead === newVal)
    : filterTour;
});

const toggleDropDown = () => {
  ddActive.value = !ddActive.value;
};

const setTravelStyle = (style) => {
  travelStyle.value = style === travelStyle.value ? "" : style;
  ddActive.value = false;
};
</script>
