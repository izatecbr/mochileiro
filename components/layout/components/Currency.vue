<template>
  <div
    ref="dropDownContainer"
    :class="`${
      props.parentClass ? props.parentClass : 'headerDropdown js-form-dd'
    }`"
  >
    <div class="headerDropdown__button" @click="toggleDropdown">
      {{ selectedCurrency }}
      <i class="icon-chevron-down text-18"></i>
    </div>

    <div
      class="headerDropdown__content"
      :class="{ 'is-active': currentdd === 'currency' }"
    >
      <div class="headerDropdown">
        <div class="headerDropdown__container">
          <div
            v-for="(currency, index) in currencies"
            :key="index"
            class="headerDropdown__item"
          >
            <button @click="selectCurrency(currency)">{{ currency }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const props = defineProps(["parentClass"]);
const currentdd = ref("");
const selectedCurrency = ref("USD");
const dropDownContainer = ref(null);

const currencies = [
  "USD",
  "Euro",
  "British Pound",
  "Turkish Lira",
  "Canadian Dollar",
  "Australian Dollar",
  "Swiss Franc",
  "Singapore Dollar",
];

const toggleDropdown = () => {
  currentdd.value = currentdd.value === "currency" ? "" : "currency";
};

const selectCurrency = (currency) => {
  selectedCurrency.value = currency;
  currentdd.value = "";
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
</script>
