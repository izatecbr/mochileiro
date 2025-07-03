<template>
  <section class="hero -type-3">
    <div class="hero__bg">
      <img width="1920" height="760" src="/img/hero/3/bg.jpg" alt="background" />
    </div>

    <div class="container">
      <div class="row justify-between">
        <div class="col-xl-5 col-lg-5">
          <div data-aos="fade-up" data-aos-delay="200" class="hero__subtitle mb-20 md:mb-10">
            Um site, milhares experiências que você nunca vai esquecer
          </div>

          <h1 class="hero__title" data-aos="fade-up" data-aos-delay="300">
            Viva em todos
            <br class="md:d-none" />
            os Lugares
            <br class="md:d-none" />
            mochileiro.tec
            <img width="214" height="23" src="/img/hero/3/brush.svg" alt="brush stroke" />
          </h1>

          <div data-aos="fade-up" data-aos-delay="300" class="hero__filter mt-60 lg:mt-30">
            <div ref="dropDownContainer" class="searchForm -type-1 shadow-1">
              <div class="searchForm__form">
                <div class="searchFormItem js-select-control js-form-dd">
                  <div class="searchFormItem__button" @click="toggleDropdown('destinos')">
                    <div class="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
                      <i class="text-20 icon-pin"></i>
                    </div>
                    <div class="searchFormItem__content">
                      <h5>Destino</h5>
                      <div class="js-select-control-chosen">
                        {{ destino ? destino : "Destinos mais populares" }}
                      </div>
                    </div>
                  </div>

                  <Destinos @setDestino="setDestino" :active="currentActiveDD === 'destinos'" />
                </div>

                <div class="searchFormItem js-select-control js-form-dd js-calendar">
                  <div class="searchFormItem__button" @click="toggleDropdown('periodo')">
                    <div class="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
                      <i class="text-20 icon-calendar"></i>
                    </div>
                    <div class="searchFormItem__content">
                      <h5>Quando</h5>
                      <div class="js-select-control-chosen">
                        {{ "Melhores temporadas" }}
                      </div>
                      <div>
                        <span class="js-first-date">
                          <Periodo :active="currentActiveDD === 'periodo'" />
                        </span>
                        <span class="js-last-date"></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="searchFormItem js-select-control js-form-dd">
                  <div class="searchFormItem__button" @click="toggleDropdown('categoria')">
                    <div class="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
                      <i class="text-20 icon-flag"></i>
                    </div>
                    <div class="searchFormItem__content">
                      <h5>Categorias</h5>
                      <div class="js-select-control-chosen">
                        {{  "Para cada estilo" }}
                      </div>
                    </div>
                  </div>

                  <Categorias @setCategorias="setCategorias" :active="currentActiveDD === 'categoria'" />
                </div>
              </div>

              <div class="searchForm__button">
                <button @click="searchTour" class="button -dark-1 bg-accent-1 rounded-200 text-white">
                  <i class="icon-search text-16 mr-10"></i>
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-7 col-lg-7">
          <div class="hero__image">
            <div>
              <img width="340" height="420" src="/img/hero/3/1.png" alt="image" />
              <img width="340" height="250" src="/img/hero/3/2.png" alt="image" />
            </div>
            <img width="340" height="620" src="/img/hero/3/3.png" alt="image" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";


import { useRouter } from "vue-router";
import Categorias from "~/components/common/dropdownSearch/Categorias.vue";
import Periodo from "~/components/common/dropdownSearch/Periodo.vue";
import Destinos from "../common/dropdownSearch/Destinos.vue";
const router = useRouter();

const currentActiveDD = ref("");
const destino = ref("");
const categoria = ref("");
const dropDownContainer = ref(null);

watch([destino, categoria], () => {
  currentActiveDD.value = "";
});

const toggleDropdown = (dropdown) => {
  currentActiveDD.value = currentActiveDD.value === dropdown ? "" : dropdown;
};

const handleClick = (event) => {
  if (
    dropDownContainer.value &&
    !dropDownContainer.value.contains(event.target)
  ) {
    currentActiveDD.value = "";
  }
};

const setDestino = (locat) => {
  destino.value = destino.value == locat ? "" : locat;
};
const setCategorias = (value) => {
  categoria.value = categoria.value == value ? "" : value;
};

onMounted(() => {
  document.addEventListener("click", handleClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClick);
});

const searchTour = () => {
  // Your logic for searching tour here
  router.push("/tour-list-1");
};
</script>
