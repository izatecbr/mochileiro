<template>
  <div
    v-for="(section, index) in sections"
    :key="index"
    class="col-lg-auto col-6"
  >
    <h4 class="text-20 fw-500 text-white">{{ section.title }}</h4>

    <div class="y-gap-10 mt-20">
      <a
        v-for="(link, linkIndex) in section.links"
        :key="linkIndex"
        class="d-block fw-500 text-white"
        :href="link.href"
      >
        {{ link.text }}
      </a>
    </div>
  </div>
</template>

<script setup>
const sections = [
  {
    title: "Company",
    links: [
      { id: 1, text: "About Us", href: "#" },
      { id: 2, text: "Tourz Reviews", href: "#" },
      { id: 3, text: "Contact Us", href: "#" },
      { id: 4, text: "Travel Guides", href: "#" },
      { id: 5, text: "Data Policy", href: "#" },
      { id: 6, text: "Cookie Policy", href: "#" },
      { id: 7, text: "Legal", href: "#" },
      { id: 8, text: "Sitemap", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { id: 9, text: "Get in Touch", href: "#" },
      { id: 10, text: "Help center", href: "#" },
      { id: 11, text: "Live chat", href: "#" },
      { id: 12, text: "How it works", href: "#" },
    ],
  },
];
</script>
