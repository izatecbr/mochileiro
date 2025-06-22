<template>
  <header
    :class="{
      header: true,
      '-type-3': true,
      'js-header': true,
      '-is-sticky': addClass,
    }"
  >
    <div class="header__container container">
      <div class="headerMobile__left">
        <button @click="openMobileMenu">
          <i class="icon-main-menu"></i>
        </button>
      </div>

      <div class="header__logo">
        <nuxt-link to="/" class="header__logo">
          <nuxt-img
            width="167"
            height="32"
            src="/img/general/logo-1.svg"
            alt="logo icon"
          />
        </nuxt-link>

        <Menu />
      </div>

      <div class="headerMobile__right">
        <button @click="() => pageNavigate('/tour-list-1')" class="d-flex">
          <i class="icon-search text-18"></i>
        </button>

        <button @click="() => pageNavigate('/login')" class="d-flex ml-20">
          <i class="icon-person text-18"></i>
        </button>
      </div>

      <div class="header__right">
        <div class="ml-30">
          <Currency />
        </div>

        <nuxt-link to="/help-center" class="ml-20"> Help </nuxt-link>

        <nuxt-link to="/register" class="ml-30"> Sign up </nuxt-link>

        <nuxt-link
          to="/login"
          class="button -sm -outline-dark-1 rounded-200 text-dark-1 ml-30"
        >
          Log in
        </nuxt-link>
      </div>
    </div>
  </header>
  <MobileMenu
    :mobileMenuOpen="mobileMenuOpen"
    @setMobileMenuOpen="setMobileMenuOpen"
  />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

import Currency from "../components/Currency.vue";
import MobileMenu from "../components/MobileMenu.vue";
import { useRouter } from "vue-router";
import Menu from "../components/Menu.vue";

const addClass = ref(false);
const mobileMenuOpen = ref(false);
const router = useRouter();
const pageNavigate = (pageName) => {
  router.push(pageName);
};
const handleScroll = () => {
  addClass.value = window.scrollY >= 50;
};

const openMobileMenu = () => {
  mobileMenuOpen.value = true;
};

const setMobileMenuOpen = (value) => {
  mobileMenuOpen.value = value;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

router.afterEach(() => {
  setMobileMenuOpen(false);
});
</script>
