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
  { id: 1, class: "icon-instagram", href: "https://www.instagram.com/glysns/profilecard/?igsh=NDJ5bjNwM2c5MjJ3" },
  { id: 2, class: "icon-linkedin", href: "https://www.linkedin.com/in/glysns/" },
];
</script>
