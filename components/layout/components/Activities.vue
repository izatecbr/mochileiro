<template>
  <div ref="dropDownContainer" class="headerDropdown lg:d-none js-form-dd">
    <div class="headerDropdown__button" @click="toggleDropdown">
      Activities
      <i class="icon-chevron-down text-18"></i>
    </div>

    <div
      class="headerDropdown__content"
      :class="{ 'is-active': currentdd === 'activities' }"
    >
      <div class="tabsMenu">
        <div class="tabsMenu__container">
          <div class="tabs js-tabs">
            <div class="tabsMenu__tabs">
              <div class="tabs__controls js-tabs-controls">
                <button
                  @click="setCurrentdestinationTab(tab)"
                  :class="{ 'is-tab-el-active': currentdestinationTab === tab }"
                  v-for="(tab, index) in buttonData"
                  :key="index"
                  class="tabs__button js-tabs-button"
                  data-tab-target=".-tab-item-1"
                >
                  {{ tab }}
                </button>
              </div>
            </div>

            <div class="tabsMenu__content">
              <div class="tabs__content js-tabs-content">
                <div class="tabs__pane -tab-item-1 is-tab-el-active">
                  <div class="tabsMenu__lists">
                    <div
                      :key="index2"
                      class="tabsMenu-list"
                      v-for="(tab, index2) in getTabContent"
                    >
                      <div class="tabsMenu-list__title">
                        {{ tab.heading }}
                      </div>
                      <div class="tabsMenu-list__content">
                        <div
                          :key="index3"
                          class="tabsMenu-list__item"
                          v-for="(activity, index3) in tab.items[0]"
                        >
                          <a :href="activity.href">{{ activity.name }}</a>
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
import { ref, onMounted, onUnmounted } from "vue";

const currentdd = ref("");
const currentdestinationTab = ref("Top world landmarks");
const dropDownContainer = ref(null);

const buttonData = [
  "Top world landmarks",
  "Food and Nightlife",
  "Adventure and Sport",
  "Landscapes and Nature",
  "Boat Tours",
  "Water Sports",
  "Air Tours",
  "Road Trips",
];

const tabContent = [
  {
    heading: "Top world landmarks",
    items: [
      [
        { id: 1, name: "Holi Tours", href: "#" },
        { id: 2, name: "Christmas markets Tours", href: "#" },
        { id: 3, name: "Day of the Dead Festival Tours", href: "#" },
        { id: 4, name: "Food tours Tours", href: "#" },
        { id: 5, name: "Party and nightlife Tours", href: "#" },
        { id: 6, name: "Rio Carnival Tours", href: "#" },
        { id: 7, name: "Pub and bar crawl Tours", href: "#" },
        { id: 8, name: "St Patricks Day Tours", href: "#" },
        { id: 9, name: "Cooking classes Tours", href: "#" },
        { id: 10, name: "Wine tasting tours Tours", href: "#" },
      ],
      [
        { id: 11, name: "Concerts and shows Tours", href: "#" },
        { id: 12, name: "Coffee and tea tours Tours", href: "#" },
        { id: 13, name: "Beer and drinks tasting Tours", href: "#" },
        { id: 14, name: "Cherry Blossom Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "Food and Nightlife",
    items: [
      [
        { id: 1, name: "Holi Tours", href: "#" },
        { id: 2, name: "Christmas markets Tours", href: "#" },
        { id: 3, name: "Day of the Dead Festival Tours", href: "#" },
        { id: 4, name: "Food tours Tours", href: "#" },
        { id: 5, name: "Party and nightlife Tours", href: "#" },
        { id: 6, name: "Rio Carnival Tours", href: "#" },
        { id: 7, name: "Pub and bar crawl Tours", href: "#" },
        { id: 8, name: "St Patricks Day Tours", href: "#" },
        { id: 9, name: "Cooking classes Tours", href: "#" },
        { id: 10, name: "Wine tasting tours Tours", href: "#" },
      ],
      [
        { id: 11, name: "Concerts and shows Tours", href: "#" },
        { id: 12, name: "Coffee and tea tours Tours", href: "#" },
        { id: 13, name: "Beer and drinks tasting Tours", href: "#" },
        { id: 14, name: "Cherry Blossom Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "Adventure and Sport",
    items: [
      [
        { id: 1, name: "Holi Tours", href: "#" },
        { id: 2, name: "Christmas markets Tours", href: "#" },
        { id: 3, name: "Day of the Dead Festival Tours", href: "#" },
        { id: 4, name: "Food tours Tours", href: "#" },
        { id: 5, name: "Party and nightlife Tours", href: "#" },
        { id: 6, name: "Rio Carnival Tours", href: "#" },
        { id: 7, name: "Pub and bar crawl Tours", href: "#" },
        { id: 8, name: "St Patricks Day Tours", href: "#" },
        { id: 9, name: "Cooking classes Tours", href: "#" },
        { id: 10, name: "Wine tasting tours Tours", href: "#" },
      ],
      [
        { id: 11, name: "Concerts and shows Tours", href: "#" },
        { id: 12, name: "Coffee and tea tours Tours", href: "#" },
        { id: 13, name: "Beer and drinks tasting Tours", href: "#" },
        { id: 14, name: "Cherry Blossom Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "Landscapes and Nature",
    items: [
      [
        { id: 1, name: "Holi Tours", href: "#" },
        { id: 2, name: "Christmas markets Tours", href: "#" },
        { id: 3, name: "Day of the Dead Festival Tours", href: "#" },
        { id: 4, name: "Food tours Tours", href: "#" },
        { id: 5, name: "Party and nightlife Tours", href: "#" },
        { id: 6, name: "Rio Carnival Tours", href: "#" },
        { id: 7, name: "Pub and bar crawl Tours", href: "#" },
        { id: 8, name: "St Patricks Day Tours", href: "#" },
        { id: 9, name: "Cooking classes Tours", href: "#" },
        { id: 10, name: "Wine tasting tours Tours", href: "#" },
      ],
      [
        { id: 11, name: "Concerts and shows Tours", href: "#" },
        { id: 12, name: "Coffee and tea tours Tours", href: "#" },
        { id: 13, name: "Beer and drinks tasting Tours", href: "#" },
        { id: 14, name: "Cherry Blossom Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "Boat Tours",
    items: [
      [
        { id: 1, name: "Holi Tours", href: "#" },
        { id: 2, name: "Christmas markets Tours", href: "#" },
        { id: 3, name: "Day of the Dead Festival Tours", href: "#" },
        { id: 4, name: "Food tours Tours", href: "#" },
        { id: 5, name: "Party and nightlife Tours", href: "#" },
        { id: 6, name: "Rio Carnival Tours", href: "#" },
        { id: 7, name: "Pub and bar crawl Tours", href: "#" },
        { id: 8, name: "St Patricks Day Tours", href: "#" },
        { id: 9, name: "Cooking classes Tours", href: "#" },
        { id: 10, name: "Wine tasting tours Tours", href: "#" },
      ],
      [
        { id: 11, name: "Concerts and shows Tours", href: "#" },
        { id: 12, name: "Coffee and tea tours Tours", href: "#" },
        { id: 13, name: "Beer and drinks tasting Tours", href: "#" },
        { id: 14, name: "Cherry Blossom Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "Water Sports",
    items: [
      [
        { id: 1, name: "Holi Tours", href: "#" },
        { id: 2, name: "Christmas markets Tours", href: "#" },
        { id: 3, name: "Day of the Dead Festival Tours", href: "#" },
        { id: 4, name: "Food tours Tours", href: "#" },
        { id: 5, name: "Party and nightlife Tours", href: "#" },
        { id: 6, name: "Rio Carnival Tours", href: "#" },
        { id: 7, name: "Pub and bar crawl Tours", href: "#" },
        { id: 8, name: "St Patricks Day Tours", href: "#" },
        { id: 9, name: "Cooking classes Tours", href: "#" },
        { id: 10, name: "Wine tasting tours Tours", href: "#" },
      ],
      [
        { id: 11, name: "Concerts and shows Tours", href: "#" },
        { id: 12, name: "Coffee and tea tours Tours", href: "#" },
        { id: 13, name: "Beer and drinks tasting Tours", href: "#" },
        { id: 14, name: "Cherry Blossom Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "Air Tours",
    items: [
      [
        { id: 1, name: "Holi Tours", href: "#" },
        { id: 2, name: "Christmas markets Tours", href: "#" },
        { id: 3, name: "Day of the Dead Festival Tours", href: "#" },
        { id: 4, name: "Food tours Tours", href: "#" },
        { id: 5, name: "Party and nightlife Tours", href: "#" },
        { id: 6, name: "Rio Carnival Tours", href: "#" },
        { id: 7, name: "Pub and bar crawl Tours", href: "#" },
        { id: 8, name: "St Patricks Day Tours", href: "#" },
        { id: 9, name: "Cooking classes Tours", href: "#" },
        { id: 10, name: "Wine tasting tours Tours", href: "#" },
      ],
      [
        { id: 11, name: "Concerts and shows Tours", href: "#" },
        { id: 12, name: "Coffee and tea tours Tours", href: "#" },
        { id: 13, name: "Beer and drinks tasting Tours", href: "#" },
        { id: 14, name: "Cherry Blossom Tours", href: "#" },
      ],
    ],
  },
  {
    heading: "Road Trips",
    items: [
      [
        { id: 1, name: "Holi Tours", href: "#" },
        { id: 2, name: "Christmas markets Tours", href: "#" },
        { id: 3, name: "Day of the Dead Festival Tours", href: "#" },
        { id: 4, name: "Food tours Tours", href: "#" },
        { id: 5, name: "Party and nightlife Tours", href: "#" },
        { id: 6, name: "Rio Carnival Tours", href: "#" },
        { id: 7, name: "Pub and bar crawl Tours", href: "#" },
        { id: 8, name: "St Patricks Day Tours", href: "#" },
        { id: 9, name: "Cooking classes Tours", href: "#" },
        { id: 10, name: "Wine tasting tours Tours", href: "#" },
      ],
      [
        { id: 11, name: "Concerts and shows Tours", href: "#" },
        { id: 12, name: "Coffee and tea tours Tours", href: "#" },
        { id: 13, name: "Beer and drinks tasting Tours", href: "#" },
        { id: 14, name: "Cherry Blossom Tours", href: "#" },
      ],
    ],
  },
];

const toggleDropdown = () => {
  currentdd.value = currentdd.value === "activities" ? "" : "activities";
};

const setCurrentdestinationTab = (tab) => {
  currentdestinationTab.value = tab;
};

const handleClick = (event) => {
  if (
    dropDownContainer.value &&
    !dropDownContainer.value.contains(event.target)
  ) {
    currentdd.value = "";
  }
};

onMounted(() => {
  document.addEventListener("click", handleClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClick);
});

const getTabContent = computed(() =>
  tabContent.filter((elm) => elm.heading === currentdestinationTab.value),
);
</script>
