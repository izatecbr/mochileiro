<template>
  <section class="layout-pt-xl layout-pb-xl">
    <div class="container">
      <div class="tabs -underline-2 js-tabs">
        <div class="row">
          <div class="col-auto">
            <div
              class="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls"
            >
              <div
                v-for="(elm, i) in cities"
                :key="i"
                class="col-auto"
                @click="currentTab = elm.type"
              >
                <button
                  class="tabs__button text-30 md:text-20 lh-12 fw-700 pb-15 lg:pb-0 js-tabs-button"
                  :class="{ 'is-tab-el-active': currentTab === elm.type }"
                >
                  {{ elm.type }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="tabs__content pt-40 sm:pt-20 js-tabs-content">
          <div class="tabs__pane -tab-item-1 is-tab-el-active">
            <div class="row y-gap-30">
              <div
                v-for="(elm, i) in cities.filter(
                  (elm) => elm.type === currentTab,
                )[0].list"
                :key="i"
                class="col-lg-3 col-md-6"
              >
                <div class="y-gap-5">
                  <a
                    v-for="(elm2, i2) in elm"
                    :key="i2"
                    href="#"
                    class="d-block"
                  >
                    Things to do in {{ elm2 }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const currentTab = ref("Popular Cities");

const cities = [
  {
    type: "Popular Cities",
    list: [
      ["Nashville", "Chicago", "Houston", "San Diego", "Atlanta", "Denver"],
      ["Las Vegas", "Miami", "Orlando", "Dallas", "New Orleans", "San Antonio"],
      [
        "San Francisco",
        "Seattle",
        "Austin",
        "Boston",
        "Colorado Springs",
        "Los Angeles",
      ],
      [
        "Myrtle Beach",
        "Philadelphia",
        "Charleston",
        "Colorado",
        "Phoenix",
        "Pigeon Forge",
      ],
    ],
  },
  {
    type: "Popular Attractions",
    list: [
      ["Nashville", "Chicago", "Houston", "San Diego", "Atlanta", "Denver"],
      ["Las Vegas", "Miami", "Orlando", "Dallas", "New Orleans", "San Antonio"],
      [
        "San Francisco",
        "Seattle",
        "Austin",
        "Boston",
        "Colorado Springs",
        "Los Angeles",
      ],
      [
        "Myrtle Beach",
        "Philadelphia",
        "Charleston",
        "Colorado",
        "Phoenix",
        "Pigeon Forge",
      ],
    ].reverse(),
  },
];
</script>
