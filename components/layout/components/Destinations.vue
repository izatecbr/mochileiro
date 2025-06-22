<template>
  <div ref="dropDownContainer" class="headerDropdown lg:d-none js-form-dd">
    <div
      class="headerDropdown__button"
      @click="
        () => (currentdd = currentdd === 'destination' ? '' : 'destination')
      "
    >
      Destinations
      <i class="icon-chevron-down text-18"></i>
    </div>

    <div
      class="headerDropdown__content"
      :class="{ 'is-active': currentdd === 'destination' }"
    >
      <div class="tabsMenu">
        <div class="tabsMenu__container">
          <div class="tabs js-tabs">
            <div class="tabsMenu__tabs">
              <div class="tabs__controls js-tabs-controls">
                <button
                  v-for="(elm, i) in buttonData"
                  :key="i"
                  @click="setCurrentdestinationTab(elm)"
                  :class="{ 'is-tab-el-active': currentdestinationTab === elm }"
                  data-tab-target=".-tab-item-1"
                  class="tabs__button js-tabs-button"
                >
                  {{ elm }}
                </button>
              </div>
            </div>

            <div class="tabsMenu__content">
              <div class="tabs__content js-tabs-content">
                <div class="tabs__pane -tab-item-1 is-tab-el-active">
                  <div class="tabsMenu__lists">
                    <div
                      v-for="(elm2, i2) in getCurrentTabTours()"
                      :key="i2"
                      class="tabsMenu-list"
                    >
                      <div class="tabsMenu-list__title">
                        {{ currentdestinationTab }} Travel Guide
                      </div>
                      <div class="tabsMenu-list__content">
                        <div
                          v-for="(elm3, i3) in elm2"
                          :key="i3"
                          class="tabsMenu-list__item"
                        >
                          <a :href="elm3.href">{{ elm3.name }}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";

const buttonData = [
  "Europe",
  "Asia",
  "North America",
  "South America",
  "Africa",
  "Oceania",
  "Polar",
  "Regions",
];

const tabContent = [
  {
    heading: "Europe",
    tours: [
      [
        { id: 1, name: "Italy Tours", href: "#" },
        { id: 2, name: "Spain Tours", href: "#" },
        { id: 3, name: "France Tours", href: "#" },
        { id: 4, name: "Portugal Tours", href: "#" },
        { id: 5, name: "Turkey Tours", href: "#" },
        { id: 6, name: "Albania Tours", href: "#" },
        { id: 7, name: "Andorra Tours", href: "#" },
        { id: 8, name: "Armenia Tours", href: "#" },
        { id: 9, name: "Austria Tours", href: "#" },
        { id: 10, name: "Lithuania Tours", href: "#" },
      ],
      [
        { id: 11, name: "Azerbaijan Tours", href: "#" },
        { id: 12, name: "Belgium Tours", href: "#" },
        { id: 13, name: "Bosnia Herzegovina Tours", href: "#" },
        { id: 14, name: "Bulgaria Tours", href: "#" },
        { id: 15, name: "Croatia Tours", href: "#" },
        { id: 16, name: "Cyprus Tours", href: "#" },
        { id: 17, name: "Iceland Tours", href: "#" },
        { id: 18, name: "Ireland Tours", href: "#" },
        { id: 19, name: "Kosovo Tours", href: "#" },
        { id: 20, name: "Latvia Tours", href: "#" },
      ],
      [
        { id: 21, name: "Czech Republic Tours", href: "#" },
        { id: 22, name: "Denmark Tours", href: "#" },
        { id: 23, name: "England Tours", href: "#" },
        { id: 24, name: "Estonia Tours", href: "#" },
        { id: 25, name: "Finland Tours", href: "#" },
        { id: 26, name: "Georgia Tours", href: "#" },
        { id: 27, name: "Germany Tours", href: "#" },
        { id: 28, name: "Greece Tours", href: "#" },
        { id: 29, name: "Holland Tours", href: "#" },
        { id: 30, name: "Hungary Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "Asia",
    tours: [
      [
        { id: 1, name: "Italy Tours", href: "#" },
        { id: 2, name: "Spain Tours", href: "#" },
        { id: 3, name: "France Tours", href: "#" },
        { id: 4, name: "Portugal Tours", href: "#" },
        { id: 5, name: "Turkey Tours", href: "#" },
        { id: 6, name: "Albania Tours", href: "#" },
        { id: 7, name: "Andorra Tours", href: "#" },
        { id: 8, name: "Armenia Tours", href: "#" },
        { id: 9, name: "Austria Tours", href: "#" },
        { id: 10, name: "Lithuania Tours", href: "#" },
      ],
      [
        { id: 11, name: "Azerbaijan Tours", href: "#" },
        { id: 12, name: "Belgium Tours", href: "#" },
        { id: 13, name: "Bosnia Herzegovina Tours", href: "#" },
        { id: 14, name: "Bulgaria Tours", href: "#" },
        { id: 15, name: "Croatia Tours", href: "#" },
        { id: 16, name: "Cyprus Tours", href: "#" },
        { id: 17, name: "Iceland Tours", href: "#" },
        { id: 18, name: "Ireland Tours", href: "#" },
        { id: 19, name: "Kosovo Tours", href: "#" },
        { id: 20, name: "Latvia Tours", href: "#" },
      ],
      [
        { id: 21, name: "Czech Republic Tours", href: "#" },
        { id: 22, name: "Denmark Tours", href: "#" },
        { id: 23, name: "England Tours", href: "#" },
        { id: 24, name: "Estonia Tours", href: "#" },
        { id: 25, name: "Finland Tours", href: "#" },
        { id: 26, name: "Georgia Tours", href: "#" },
        { id: 27, name: "Germany Tours", href: "#" },
        { id: 28, name: "Greece Tours", href: "#" },
        { id: 29, name: "Holland Tours", href: "#" },
        { id: 30, name: "Hungary Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "North America",
    tours: [
      [
        { id: 1, name: "Italy Tours", href: "#" },
        { id: 2, name: "Spain Tours", href: "#" },
        { id: 3, name: "France Tours", href: "#" },
        { id: 4, name: "Portugal Tours", href: "#" },
        { id: 5, name: "Turkey Tours", href: "#" },
        { id: 6, name: "Albania Tours", href: "#" },
        { id: 7, name: "Andorra Tours", href: "#" },
        { id: 8, name: "Armenia Tours", href: "#" },
        { id: 9, name: "Austria Tours", href: "#" },
        { id: 10, name: "Lithuania Tours", href: "#" },
      ],
      [
        { id: 11, name: "Azerbaijan Tours", href: "#" },
        { id: 12, name: "Belgium Tours", href: "#" },
        { id: 13, name: "Bosnia Herzegovina Tours", href: "#" },
        { id: 14, name: "Bulgaria Tours", href: "#" },
        { id: 15, name: "Croatia Tours", href: "#" },
        { id: 16, name: "Cyprus Tours", href: "#" },
        { id: 17, name: "Iceland Tours", href: "#" },
        { id: 18, name: "Ireland Tours", href: "#" },
        { id: 19, name: "Kosovo Tours", href: "#" },
        { id: 20, name: "Latvia Tours", href: "#" },
      ],
      [
        { id: 21, name: "Czech Republic Tours", href: "#" },
        { id: 22, name: "Denmark Tours", href: "#" },
        { id: 23, name: "England Tours", href: "#" },
        { id: 24, name: "Estonia Tours", href: "#" },
        { id: 25, name: "Finland Tours", href: "#" },
        { id: 26, name: "Georgia Tours", href: "#" },
        { id: 27, name: "Germany Tours", href: "#" },
        { id: 28, name: "Greece Tours", href: "#" },
        { id: 29, name: "Holland Tours", href: "#" },
        { id: 30, name: "Hungary Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "South America",
    tours: [
      [
        { id: 1, name: "Italy Tours", href: "#" },
        { id: 2, name: "Spain Tours", href: "#" },
        { id: 3, name: "France Tours", href: "#" },
        { id: 4, name: "Portugal Tours", href: "#" },
        { id: 5, name: "Turkey Tours", href: "#" },
        { id: 6, name: "Albania Tours", href: "#" },
        { id: 7, name: "Andorra Tours", href: "#" },
        { id: 8, name: "Armenia Tours", href: "#" },
        { id: 9, name: "Austria Tours", href: "#" },
        { id: 10, name: "Lithuania Tours", href: "#" },
      ],
      [
        { id: 11, name: "Azerbaijan Tours", href: "#" },
        { id: 12, name: "Belgium Tours", href: "#" },
        { id: 13, name: "Bosnia Herzegovina Tours", href: "#" },
        { id: 14, name: "Bulgaria Tours", href: "#" },
        { id: 15, name: "Croatia Tours", href: "#" },
        { id: 16, name: "Cyprus Tours", href: "#" },
        { id: 17, name: "Iceland Tours", href: "#" },
        { id: 18, name: "Ireland Tours", href: "#" },
        { id: 19, name: "Kosovo Tours", href: "#" },
        { id: 20, name: "Latvia Tours", href: "#" },
      ],
      [
        { id: 21, name: "Czech Republic Tours", href: "#" },
        { id: 22, name: "Denmark Tours", href: "#" },
        { id: 23, name: "England Tours", href: "#" },
        { id: 24, name: "Estonia Tours", href: "#" },
        { id: 25, name: "Finland Tours", href: "#" },
        { id: 26, name: "Georgia Tours", href: "#" },
        { id: 27, name: "Germany Tours", href: "#" },
        { id: 28, name: "Greece Tours", href: "#" },
        { id: 29, name: "Holland Tours", href: "#" },
        { id: 30, name: "Hungary Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "Africa",
    tours: [
      [
        { id: 1, name: "Italy Tours", href: "#" },
        { id: 2, name: "Spain Tours", href: "#" },
        { id: 3, name: "France Tours", href: "#" },
        { id: 4, name: "Portugal Tours", href: "#" },
        { id: 5, name: "Turkey Tours", href: "#" },
        { id: 6, name: "Albania Tours", href: "#" },
        { id: 7, name: "Andorra Tours", href: "#" },
        { id: 8, name: "Armenia Tours", href: "#" },
        { id: 9, name: "Austria Tours", href: "#" },
        { id: 10, name: "Lithuania Tours", href: "#" },
      ],
      [
        { id: 11, name: "Azerbaijan Tours", href: "#" },
        { id: 12, name: "Belgium Tours", href: "#" },
        { id: 13, name: "Bosnia Herzegovina Tours", href: "#" },
        { id: 14, name: "Bulgaria Tours", href: "#" },
        { id: 15, name: "Croatia Tours", href: "#" },
        { id: 16, name: "Cyprus Tours", href: "#" },
        { id: 17, name: "Iceland Tours", href: "#" },
        { id: 18, name: "Ireland Tours", href: "#" },
        { id: 19, name: "Kosovo Tours", href: "#" },
        { id: 20, name: "Latvia Tours", href: "#" },
      ],
      [
        { id: 21, name: "Czech Republic Tours", href: "#" },
        { id: 22, name: "Denmark Tours", href: "#" },
        { id: 23, name: "England Tours", href: "#" },
        { id: 24, name: "Estonia Tours", href: "#" },
        { id: 25, name: "Finland Tours", href: "#" },
        { id: 26, name: "Georgia Tours", href: "#" },
        { id: 27, name: "Germany Tours", href: "#" },
        { id: 28, name: "Greece Tours", href: "#" },
        { id: 29, name: "Holland Tours", href: "#" },
        { id: 30, name: "Hungary Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "Oceania",
    tours: [
      [
        { id: 1, name: "Italy Tours", href: "#" },
        { id: 2, name: "Spain Tours", href: "#" },
        { id: 3, name: "France Tours", href: "#" },
        { id: 4, name: "Portugal Tours", href: "#" },
        { id: 5, name: "Turkey Tours", href: "#" },
        { id: 6, name: "Albania Tours", href: "#" },
        { id: 7, name: "Andorra Tours", href: "#" },
        { id: 8, name: "Armenia Tours", href: "#" },
        { id: 9, name: "Austria Tours", href: "#" },
        { id: 10, name: "Lithuania Tours", href: "#" },
      ],
      [
        { id: 11, name: "Azerbaijan Tours", href: "#" },
        { id: 12, name: "Belgium Tours", href: "#" },
        { id: 13, name: "Bosnia Herzegovina Tours", href: "#" },
        { id: 14, name: "Bulgaria Tours", href: "#" },
        { id: 15, name: "Croatia Tours", href: "#" },
        { id: 16, name: "Cyprus Tours", href: "#" },
        { id: 17, name: "Iceland Tours", href: "#" },
        { id: 18, name: "Ireland Tours", href: "#" },
        { id: 19, name: "Kosovo Tours", href: "#" },
        { id: 20, name: "Latvia Tours", href: "#" },
      ],
      [
        { id: 21, name: "Czech Republic Tours", href: "#" },
        { id: 22, name: "Denmark Tours", href: "#" },
        { id: 23, name: "England Tours", href: "#" },
        { id: 24, name: "Estonia Tours", href: "#" },
        { id: 25, name: "Finland Tours", href: "#" },
        { id: 26, name: "Georgia Tours", href: "#" },
        { id: 27, name: "Germany Tours", href: "#" },
        { id: 28, name: "Greece Tours", href: "#" },
        { id: 29, name: "Holland Tours", href: "#" },
        { id: 30, name: "Hungary Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "Polar",
    tours: [
      [
        { id: 1, name: "Italy Tours", href: "#" },
        { id: 2, name: "Spain Tours", href: "#" },
        { id: 3, name: "France Tours", href: "#" },
        { id: 4, name: "Portugal Tours", href: "#" },
        { id: 5, name: "Turkey Tours", href: "#" },
        { id: 6, name: "Albania Tours", href: "#" },
        { id: 7, name: "Andorra Tours", href: "#" },
        { id: 8, name: "Armenia Tours", href: "#" },
        { id: 9, name: "Austria Tours", href: "#" },
        { id: 10, name: "Lithuania Tours", href: "#" },
      ],
      [
        { id: 11, name: "Azerbaijan Tours", href: "#" },
        { id: 12, name: "Belgium Tours", href: "#" },
        { id: 13, name: "Bosnia Herzegovina Tours", href: "#" },
        { id: 14, name: "Bulgaria Tours", href: "#" },
        { id: 15, name: "Croatia Tours", href: "#" },
        { id: 16, name: "Cyprus Tours", href: "#" },
        { id: 17, name: "Iceland Tours", href: "#" },
        { id: 18, name: "Ireland Tours", href: "#" },
        { id: 19, name: "Kosovo Tours", href: "#" },
        { id: 20, name: "Latvia Tours", href: "#" },
      ],
      [
        { id: 21, name: "Czech Republic Tours", href: "#" },
        { id: 22, name: "Denmark Tours", href: "#" },
        { id: 23, name: "England Tours", href: "#" },
        { id: 24, name: "Estonia Tours", href: "#" },
        { id: 25, name: "Finland Tours", href: "#" },
        { id: 26, name: "Georgia Tours", href: "#" },
        { id: 27, name: "Germany Tours", href: "#" },
        { id: 28, name: "Greece Tours", href: "#" },
        { id: 29, name: "Holland Tours", href: "#" },
        { id: 30, name: "Hungary Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "Regions",
    tours: [
      [
        { id: 1, name: "Italy Tours", href: "#" },
        { id: 2, name: "Spain Tours", href: "#" },
        { id: 3, name: "France Tours", href: "#" },
        { id: 4, name: "Portugal Tours", href: "#" },
        { id: 5, name: "Turkey Tours", href: "#" },
        { id: 6, name: "Albania Tours", href: "#" },
        { id: 7, name: "Andorra Tours", href: "#" },
        { id: 8, name: "Armenia Tours", href: "#" },
        { id: 9, name: "Austria Tours", href: "#" },
        { id: 10, name: "Lithuania Tours", href: "#" },
      ],
      [
        { id: 11, name: "Azerbaijan Tours", href: "#" },
        { id: 12, name: "Belgium Tours", href: "#" },
        { id: 13, name: "Bosnia Herzegovina Tours", href: "#" },
        { id: 14, name: "Bulgaria Tours", href: "#" },
        { id: 15, name: "Croatia Tours", href: "#" },
        { id: 16, name: "Cyprus Tours", href: "#" },
        { id: 17, name: "Iceland Tours", href: "#" },
        { id: 18, name: "Ireland Tours", href: "#" },
        { id: 19, name: "Kosovo Tours", href: "#" },
        { id: 20, name: "Latvia Tours", href: "#" },
      ],
      [
        { id: 21, name: "Czech Republic Tours", href: "#" },
        { id: 22, name: "Denmark Tours", href: "#" },
        { id: 23, name: "England Tours", href: "#" },
        { id: 24, name: "Estonia Tours", href: "#" },
        { id: 25, name: "Finland Tours", href: "#" },
        { id: 26, name: "Georgia Tours", href: "#" },
        { id: 27, name: "Germany Tours", href: "#" },
        { id: 28, name: "Greece Tours", href: "#" },
        { id: 29, name: "Holland Tours", href: "#" },
        { id: 30, name: "Hungary Tours", href: "#" },
      ],
    ],
  },
];

const currentdestinationTab = ref("Europe");
const currentdd = ref("");
const dropDownContainer = ref(null);

const getCurrentTabTours = () => {
  return (
    tabContent.find((elm) => elm.heading === currentdestinationTab.value)
      ?.tours || []
  );
};

const setCurrentdestinationTab = (tab) => {
  currentdestinationTab.value = tab;
};

const handleClickOutside = (event) => {
  if (
    dropDownContainer.value &&
    !dropDownContainer.value.contains(event.target)
  ) {
    currentdd.value = "";
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
