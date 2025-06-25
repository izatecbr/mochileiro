<template>
  <div class="tourSingleSidebar">
    <div class="d-flex items-center">
      <div>From</div>
      <div class="text-20 fw-500 ml-10">$1,200</div>
    </div>

    <div class="searchForm -type-1 -sidebar mt-20">
      <div class="searchForm__form">
        <div class="searchFormItem js-select-control js-form-dd js-calendar">
          <div class="searchFormItem__button">
            <div
              class="searchFormItem__icon size-50 rounded-12 bg-light-1 flex-center"
            >
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
          <div
            class="searchFormItem__button"
            @click="
              () => {
                activeTimeDD = !activeTimeDD;
              }
            "
          >
            <div
              class="searchFormItem__icon size-50 rounded-12 bg-light-1 flex-center"
            >
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

          <div
            :class="`searchFormItemDropdown -tour-type ${
              activeTimeDD ? 'is-active' : ''
            }`"
          >
            <div class="searchFormItemDropdown__container">
              <div class="searchFormItemDropdown__list sroll-bar-1">
                <div
                  v-for="(elm, i) in times"
                  :key="i"
                  @click="
                    () => {
                      selectedTime = selectedTime == elm ? '' : elm;
                      activeTimeDD = false;
                    }
                  "
                  class="searchFormItemDropdown__item"
                >
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

    <h5 class="text-18 fw-500 mb-20 mt-20">Tickets</h5>

    <div>
      <div class="d-flex items-center justify-between">
        <div class="text-14">
          Adult (18+ years){{ " " }}
          <span class="fw-500">
            ${{ (prices.adultPrice * adultNumber).toFixed(2) }}
          </span>
        </div>

        <div class="d-flex items-center js-counter">
          <button
            @click="
              () =>
                (adultNumber = adultNumber > 1 ? adultNumber - 1 : adultNumber)
            "
            class="button size-30 border-1 rounded-full js-down"
          >
            <i class="icon-minus text-10"></i>
          </button>

          <div class="flex-center ml-10 mr-10">
            <div class="text-14 size-20 js-count">{{ adultNumber }}</div>
          </div>

          <button
            @click="() => (adultNumber = adultNumber + 1)"
            class="button size-30 border-1 rounded-full js-up"
          >
            <i class="icon-plus text-10"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="mt-15">
      <div class="d-flex items-center justify-between">
        <div class="text-14">
          Youth (13-17 years){{ " " }}
          <span class="fw-500">
            ${{ (prices.youthPrice * youthNumber).toFixed(2) }}
          </span>
        </div>

        <div class="d-flex items-center js-counter">
          <button
            @click="
              () =>
                (youthNumber = youthNumber > 1 ? youthNumber - 1 : youthNumber)
            "
            class="button size-30 border-1 rounded-full js-down"
          >
            <i class="icon-minus text-10"></i>
          </button>

          <div class="flex-center ml-10 mr-10">
            <div class="text-14 size-20 js-count">{{ youthNumber }}</div>
          </div>

          <button
            @click="() => (youthNumber = youthNumber + 1)"
            class="button size-30 border-1 rounded-full js-up"
          >
            <i class="icon-plus text-10"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="mt-15">
      <div class="d-flex items-center justify-between">
        <div class="text-14">
          Children (0-12 years){{ " " }}
          <span class="fw-500">
            ${{ (prices.childrenPrice * childrenNumber).toFixed(2) }}
          </span>
        </div>

        <div class="d-flex items-center js-counter">
          <button
            @click="
              () =>
                (childrenNumber =
                  childrenNumber > 1 ? childrenNumber - 1 : childrenNumber)
            "
            class="button size-30 border-1 rounded-full js-down"
          >
            <i class="icon-minus text-10"></i>
          </button>

          <div class="flex-center ml-10 mr-10">
            <div class="text-14 size-20 js-count">{{ childrenNumber }}</div>
          </div>

          <button
            @click="() => (childrenNumber = childrenNumber + 1)"
            class="button size-30 border-1 rounded-full js-up"
          >
            <i class="icon-plus text-10"></i>
          </button>
        </div>
      </div>
    </div>

    <h5 class="text-18 fw-500 mb-20 mt-20">Add Extra</h5>

    <div class="d-flex items-center justify-between">
      <div class="d-flex items-center">
        <div class="form-checkbox">
          <input
            :checked="isExtraService ? true : false"
            @change="
              () => {
                isExtraService = !isExtraService;
              }
            "
            type="checkbox"
          />
          <div class="form-checkbox__mark">
            <div class="form-checkbox__icon">
              <nuxt-img
                width="10"
                height="8"
                src="/img/icons/check.svg"
                alt="icon"
              />
            </div>
          </div>
        </div>
        <div class="ml-10">Add Service per booking</div>
      </div>

      <div class="text-14">$40</div>
    </div>

    <div class="d-flex justify-between mt-20">
      <div class="d-flex">
        <div class="form-checkbox mt-5">
          <input
            :checked="isServicePerPerson ? true : false"
            @change="
              () => {
                isServicePerPerson = !isServicePerPerson;
              }
            "
            type="checkbox"
          />
          <div class="form-checkbox__mark">
            <div class="form-checkbox__icon">
              <nuxt-img
                width="10"
                height="8"
                src="/img/icons/check.svg"
                alt="icon"
              />
            </div>
          </div>
        </div>

        <div class="ml-10">
          Add Service per person
          <div class="lh-16">
            Adult: <span class="fw-500">$17.00</span> - Youth:{{ " " }}
            <span class="fw-500">$14.00</span>
          </div>
        </div>
      </div>

      <div class="text-14">$40</div>
    </div>

    <div class="line mt-20 mb-20"></div>

    <div class="d-flex items-center justify-between">
      <div class="text-18 fw-500">Total:</div>
      <div class="text-18 fw-500">
        $
        {{
          (
            prices.adultPrice * adultNumber +
            prices.youthPrice * youthNumber +
            prices.childrenPrice * childrenNumber +
            extraCharge * 1
          ).toFixed(2)
        }}
      </div>
    </div>

    <button class="button -md -dark-1 col-12 bg-accent-1 text-white mt-20">
      Book Now
      <i class="icon-arrow-top-right ml-10"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";

import Calender from "../common/dropdownSearch/Calender";

import { times } from "@/data/tourSingleContent";

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
