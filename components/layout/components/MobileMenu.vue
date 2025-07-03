<template>
  <div
    data-aos="fade"
    data-aos-delay=""
    :style="
      props.mobileMenuOpen
        ? { opacity: '1', visibility: 'visible' }
        : { pointerEvents: 'none', visibility: 'hidden' }
    "
    class="menu js-menu -is-active"
  >
    <div @click="closeMobileMenu" class="menu__overlay js-menu-button"></div>

    <div class="menu__container">
      <div class="menu__header">
        <h4>Menu</h4>
        <button @click="closeMobileMenu" class="js-menu-button">
          <i class="icon-cross text-10"></i>
        </button>
      </div>

      <div class="menu__content">
        <ul
          class="menuNav js-navList -is-active"
          :style="{ maxHeight: 'calc(100vh - 262px)', overflowY: 'auto' }"
        >

          <li class="menuNav__item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="menuNav__item">
            <router-link to="/interesses">Interesses</router-link>
          </li>
        </ul>
      </div>

      <div class="menu__footer">
        <i class="icon-headphone text-50"></i>
        <div class="text-20 lh-12 fw-500 mt-20">
          <div>Fale conosco</div>
          <div class="text-accent-1">(86) 9 9942-2032</div>
        </div>

        <div class="d-flex items-center x-gap-10 pt-30">
          <div
            v-for="(socialLink, socialIndex) in socialMediaLinks"
            :key="socialIndex"
          >
            <a :href="socialLink.href" class="d-block">
              <i :class="socialLink.class"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const activeSub = ref("");
const route = useRoute();

import { menuData } from "@/data/mobileMenu";
const socialMediaLinks = [
  { id: 3, class: "icon-instagram", href: "https://www.instagram.com/glysns" },
  { id: 4, class: "icon-linkedin", href: "https://www.linkedin.com/in/glysns/" },
];

const props = defineProps(["mobileMenuOpen"]);
const emits = defineEmits(["setMobileMenuOpen"]);

const toggleSubMenu = (label) => {
  activeSub.value = activeSub.value === label ? "" : label;
};

const closeMobileMenu = () => {
  emits("setMobileMenuOpen", false);
};

const hasActiveSubMenu = (submenu) => {
  return submenu.some(
    (item) => item.href.split("/")[1] === route.path.split("/")[1],
  );
};

const isActiveMenuItem = (href) => {
  return href.split("/")[1] === route.path.split("/")[1];
};

watch(route, () => {
  // Close the mobile menu when the route changes
  closeMobileMenu();
});
</script>
