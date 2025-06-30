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
        <h4>Main Menu</h4>
        <button @click="closeMobileMenu" class="js-menu-button">
          <i class="icon-cross text-10"></i>
        </button>
      </div>

      <div class="menu__content">
        <ul
          class="menuNav js-navList -is-active"
          :style="{ maxHeight: 'calc(100vh - 262px)', overflowY: 'auto' }"
        >
          <li
            v-for="(item, index) in menuData"
            :key="index"
            class="menuNav__item -has-submenu js-has-submenu"
          >
            <a @click="toggleSubMenu(item.label)">
              <span :class="{ activeMenu: hasActiveSubMenu(item.submenu) }">{{
                item.label
              }}</span>
              <i
                :style="{
                  transform:
                    activeSub === item.label ? 'rotate(90deg)' : 'rotate(0deg)',
                  transition: '0.3s',
                }"
                class="icon-chevron-right"
              ></i>
            </a>

            <ul
              :style="{
                maxHeight: activeSub === item.label ? '1200px' : '0px',
                transition: '0.6s',
              }"
            >
              <li
                v-for="(submenuItem, submenuIndex) in item.submenu"
                :key="submenuIndex"
              >
                <router-link
                  :class="{ activeMenu: isActiveMenuItem(submenuItem.href) }"
                  style="padding-left: 15px; font-size: 17px"
                  :to="submenuItem.href"
                >
                  {{ submenuItem.label }}
                </router-link>
              </li>
            </ul>
          </li>

          <li class="menuNav__item">
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>

      <div class="menu__footer">
        <i class="icon-headphone text-50"></i>
        <div class="text-20 lh-12 fw-500 mt-20">
          <div>Speak to our expert at</div>
          <div class="text-accent-1">1-800-453-6744</div>
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
  { id: 1, class: "icon-facebook", href: "#" },
  { id: 2, class: "icon-twitter", href: "#" },
  { id: 3, class: "icon-instagram", href: "#" },
  { id: 4, class: "icon-linkedin", href: "#" },
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
