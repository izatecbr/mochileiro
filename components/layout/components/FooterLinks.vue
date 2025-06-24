<template>
  <div
    v-for="(section, index) in sections"
    :key="index"
    class="col-lg-auto col-6"
  >
    <h4 class="text-20 fw-500">{{ section.title }}</h4>

    <div class="y-gap-10 mt-20">
      <a
        v-for="(link, linkIndex) in section.links"
        :key="linkIndex"
        class="d-block fw-500"
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
    title: "Parceiros",
    links: [
      { id: 1, text: "FlyMates Travel", href: "https://flymates.com.br/" },
    ],
  },
  {
    title: "Time",
    links: [
      { id: 9, text: "Gleyson Sampaio", href: "https://www.linkedin.com/in/glysns/" },
      { id: 10, text: "João Pedro", href: "https://www.linkedin.com/in/joao-psv/" }
    ],
  },
];
</script>
