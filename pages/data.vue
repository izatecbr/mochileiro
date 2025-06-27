<!-- src/views/Home.vue -->
<template>
  <section class="hero -type-3">
  <div class="grid-container">
    <DBView v-for="n in 6" :key="n" />
  </div>
    </section>/
</template>

<script setup>
</script>

.<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas */
  gap: 16px; /* Espaçamento entre os componentes */
}

</style>

