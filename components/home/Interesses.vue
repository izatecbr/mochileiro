<template>
  <section class="layout-pt-xl layout-pb-xl">
    <div class="container">
      <div class="row y-gap-10 justify-between items-end y-gap-10">
        <div class="col-auto">
          <h2 data-aos="fade-up" class="text-30">Interesses</h2>
        </div>

        <div ref="dropDownContainer" class="col-auto">
          <div :class="{ 'is-active': ddActive }" class="dropdown -type-1 js-dropdown js-form-dd">
            <div @click="toggleDropDown" class="dropdown__button js-button">
              <span class="js-title">{{ travelStyle || "Todos" }}</span>
              <i class="icon-chevron-down ml-10"></i>
            </div>

            <div v-if="ddActive" class="dropdown__menu js-menu-items">
              <div v-for="(style, index) in travelStyles" :key="index" @click="setTravelStyle(style)"
                class="dropdown__item">
                {{ style }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative pt-40 sm:pt-20">
        <div class="overflow-hidden js-section-slider">
          <Swiper :space-between="25" class="w-100" :navigation="{
            prevEl: '.js-slider1-prev',
            nextEl: '.js-slider1-next',
          }" :modules="[Navigation]" :breakpoints="{
              300: { slidesPerView: 1.5 },
              500: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3.5 },
              1200: { slidesPerView: 4.5 },
            }" ref="swiper">
            <SwiperSlide v-for="(elm, index) in filteredInteresses.slice(0, 7)" :key="index">
              <nuxt-link :to="'/' + elm.tipo.rota + '/' + elm.lid" class="tourCard -type-1 d-block border-1 bg-white hover-shadow-1 overflow-hidden rounded-12 bg-white -hover-shadow">
                <InteressesCard :elm="elm" />
              </nuxt-link>
            </SwiperSlide>

            <SwiperSlide style="height: 45dvh;" class="d-flex justify-center items-center ">
              <div class="d-flex flex-column " >
               <p class="mb-5" >Novas aventuras?</p>
              <div class="d-flex justify-center items-center " style="height: 100%;">
                <button @click="verMais()" class="button -accent-1 text-14 py-5 px-15 bg-light-1 rounded-200">
                  Ver mais
                </button>
              </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div class="navAbsolute">
          <button class="navAbsolute__button bg-white js-slider1-prev">
            <i class="icon-arrow-left text-14"></i>
          </button>
          <button class="navAbsolute__button bg-white js-slider1-next">
            <i class="icon-arrow-right text-14"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { computed, onMounted, ref } from "vue";

const store = useGlobalStore();
const router = useRouter();
const interesses = ref([]);
const ddActive = ref(false);
const travelStyle = ref("");

const travelStyles = ["Todos", "Experiência", "Aventura", "Atividade"];
const cores = {
  Experiência: "var(--color-blue-1)",
  Aventura: "var(--color-green-3)",
  Atividade: "var(--color-red-1)",
};

const dropDownContainer = ref(null);

const toggleDropDown = () => {
  ddActive.value = !ddActive.value;
};

const setTravelStyle = (style) => {
  travelStyle.value = style === "Todos" ? "" : style;
  ddActive.value = false;
};

const filteredInteresses = computed(() => {
  if (!travelStyle.value) return interesses.value;
  return interesses.value.filter(
    (item) => item.tipo.legenda === travelStyle.value
  );
});

const verMais = () => {
  router.push("/interesses");
};

onMounted(() => {
  interesses.value = store.interesses;
});
</script>



<style scoped>
.db-view {
  padding: 1rem;
}

.controls {
  margin-bottom: 1rem;
}

.cols {
  display: flex;
  gap: 2rem;
}

table {
  width: 100%;
  max-width: 600px;
  border-collapse: collapse;
}

td,
th {
  border: 1px solid #ddd;
  padding: 0.5rem;
}

.json-view {
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 4px;
  white-space: pre-wrap;
  width: 100%;
}

.ver-mais-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; /* Garante que ocupa toda a altura do slide */
}

</style>
