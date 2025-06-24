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
            src="/img/logo/logo-3.png"
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


        <nuxt-link to="/help-center" class="ml-20"> Contato </nuxt-link>

        <nuxt-link to="/register" class="ml-30"> Ajuda </nuxt-link>

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
import { onBeforeUnmount, onMounted, ref } from "vue";

import { useRouter } from "vue-router";
import Menu from "./components/Menu.vue";
import MobileMenu from "./components/MobileMenu.vue";

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
