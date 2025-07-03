<template>
  <div class="tourSingleSidebar">
    <div class="d-flex items-center">
      <div>Valor</div>
      <div class="text-20 fw-500 ml-10">{{ moeda ?? '$' }} {{ valor ?? '' }} </div>
    </div>

    <div class="searchForm -type-1 -sidebar mt-20">
      <div class="searchForm__form">
        <div class="searchFormItem js-select-control js-form-dd js-calendar">
          <div class="searchFormItem__button">
            <div class="searchFormItem__icon size-50 rounded-12 bg-light-1 flex-center">
              <i class="text-20 icon-calendar"></i>
            </div>
            <div class="searchFormItem__content">
              <h5>From</h5>
              <div>
                <span class="js-first-date">
                  <Calender />
                </span>
                <span class="js-last-date"></span>
              </div>
            </div>
            <div class="searchFormItem__icon_chevron">
              <i class="icon-chevron-down d-flex text-18"></i>
            </div>
          </div>
        </div>

        <div class="searchFormItem js-select-control js-form-dd">
          <div class="searchFormItem__button" @click="
            () => {
              activeTimeDD = !activeTimeDD;
            }
          ">
            <div class="searchFormItem__icon size-50 rounded-12 bg-light-1 flex-center">
              <i class="text-20 icon-clock"></i>
            </div>
            <div class="searchFormItem__content">
              <h5>Time</h5>
              <div class="js-select-control-chosen">
                {{ selectedTime ? selectedTime : "Choose time" }}
              </div>
            </div>
            <div class="searchFormItem__icon_chevron">
              <i class="icon-chevron-down d-flex text-18"></i>
            </div>
          </div>

          <div :class="`searchFormItemDropdown -tour-type ${activeTimeDD ? 'is-active' : ''
            }`">
            <div class="searchFormItemDropdown__container">
              <div class="searchFormItemDropdown__list sroll-bar-1">
                <div v-for="(elm, i) in times" :key="i" @click="
                  () => {
                    selectedTime = selectedTime == elm ? '' : elm;
                    activeTimeDD = false;
                  }
                " class="searchFormItemDropdown__item">
                  <button class="js-select-control-button">
                    <span class="js-select-control-choice">{{ elm }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button class="button -md -dark-1 col-12 bg-accent-1 text-white mt-20">
      Falar com o Anfitrião
      <i class="icon-arrow-top-right ml-10"></i>
    </button>
    <div class="d-flex items-center">
      <div style="font-size: 13px; margin: 6px">Anfitrião:</div>
      <NuxtLink class="text-11 fw-500" :to="`/perfil/${anfitriao?.id}`">{{ anfitriao?.legenda }}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";

import Calender from "../common/dropdownSearch/Calender";

import { times } from "@/data/tourSingleContent";

const props = defineProps(['valor', 'moeda','anfitriao'])

const prices = {
  adultPrice: 94,
  youthPrice: 84,
  childrenPrice: 20,
  extraService: 40,
  servicePerPerson: 40,
};

const adultNumber = ref(3);
const youthNumber = ref(2);
const childrenNumber = ref(4);
const isExtraService = ref(false);
const isServicePerPerson = ref(false);
const extraCharge = ref(0);
const selectedTime = ref("");
const activeTimeDD = ref(false);
watchEffect(() => {
  extraCharge.value = 0;

  if (isExtraService.value) {
    extraCharge.value += prices.extraService;
  }

  if (isServicePerPerson.value) {
    extraCharge.value += prices.servicePerPerson;
  }
});
</script>
