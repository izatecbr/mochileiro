<template>
  <div ref="dropDownContainer" class="header__search js-liverSearch js-form-dd">
    <i class="icon-search text-18"></i>
    <input
      v-model="selected"
      @click="toggleDropdown"
      type="text"
      placeholder="Search destinations or activities"
      :class="`js-search ${white ? 'text-white' : ''}`"
    />

    <div
      :class="{
        'headerSearchRecent is-active': ddActive,
        headerSearchRecent: !ddActive,
      }"
      data-x="headerSearch"
    >
      <div class="headerSearchRecent__container">
        <div class="headerSearchRecent__title">
          <h4 class="text-18 fw-500">Recent Searches</h4>
        </div>

        <div class="headerSearchRecent__list js-results">
          <button
            v-for="(elm, i) in filteredSearchData"
            :key="i"
            @click="selectItem(elm.title)"
            class="headerSearchRecent__item js-search-option"
            data-x-click="headerSearch"
          >
            <div class="size-50 bg-white rounded-12 border-1 flex-center">
              <i v-if="elm.iconClass" :class="elm.iconClass"></i>
              <nuxt-img
                width="50"
                height="50"
                v-if="elm.img"
                :src="elm.img"
                alt="image"
                class="rounded-12"
              />
            </div>
            <div class="ml-10">
              <div class="fw-500 js-search-option-target">{{ elm.title }}</div>
              <div class="lh-14 text-14 text-light-2">{{ elm.location }}</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";

const selected = ref("");
const ddActive = ref(false);

const searchData = [
  {
    id: 1, // Unique ID
    iconClass: "icon-pin text-20",
    title: "Phuket",
    location: "Thailand, Asia",
  },
  {
    id: 2, // Unique ID
    iconClass: "icon-price-tag text-20",
    title: "London Day Trips",
    location: "England",
  },
  {
    id: 3, // Unique ID
    iconClass: "icon-flag text-20",
    title: "Europe",
    location: "Country",
  },
  {
    id: 7, // Unique ID
    img: `/img/misc/icon.png`,
    title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
    location: "Country",
  },
  {
    id: 4, // Unique ID
    iconClass: "icon-pin text-20",
    title: "Istanbul",
    location: "Turkey",
  },
  {
    id: 5, // Unique ID
    iconClass: "icon-pin text-20",
    title: "Berlin",
    location: "Germany, Europe",
  },
  {
    id: 6, // Unique ID
    iconClass: "icon-pin text-20",
    title: "London",
    location: "England, Europe",
  },
];

const filteredSearchData = computed(() => {
  return searchData.filter((elm) => elm.title.includes(selected.value));
});

const toggleDropdown = () => {
  ddActive.value = !ddActive.value;
};

const selectItem = (title) => {
  selected.value = title;
  ddActive.value = false;
};

const dropDownContainer = ref(null);

const handleClickOutside = (event) => {
  if (
    dropDownContainer.value &&
    !dropDownContainer.value.contains(event.target)
  ) {
    ddActive.value = false;
  }
};
defineProps(["white"]);
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
