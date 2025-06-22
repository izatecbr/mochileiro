<template>
  <a
    v-for="(link, index) in socialMediaLinks"
    :key="index"
    :href="link.href"
    :class="link.class"
  ></a>
</template>

<script setup>
const socialMediaLinks = [
  { id: 1, class: "icon-facebook", href: "#" },
  { id: 2, class: "icon-twitter", href: "#" },
  { id: 3, class: "icon-instagram", href: "#" },
  { id: 4, class: "icon-linkedin", href: "#" },
];
</script>
