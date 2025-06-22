<!-- src/components/JsonViewer.vue -->
<template>
  <div class="json-viewer">
    <vue-json-pretty :data="data" :deep="3" :showLine="true" />
  </div>
</template>

<script setup>
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.json-viewer {
  border: 1px solid #ddd;
  padding: 1rem;
  background: #f8f8f8;
  border-radius: 6px;
  max-height: 500px;
  overflow-y: auto;
}
</style>
