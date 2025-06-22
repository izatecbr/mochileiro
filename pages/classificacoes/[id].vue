<template>
  <article class="experiencia">
    <h1>Categoria ID: {{ id }}</h1>
    <pre class="json-view">
      {{ JSON.stringify(objeto, null, 2) }}
    </pre>
  </article>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from '#imports'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const route = useRoute()
const store = useGlobalStore()
const objeto = ref(null)
const id = route.params.id

onMounted(() => {
  objeto.value = store.getClassificacaoById(Number(id))
})


</script>

<style scoped>
.info-mini {
  font-size: 0.9rem;
  color: #666;
  margin-left: 1rem;
  margin-top: 0.3rem;
}
.db-view {
  padding: 1rem;
}
.controls {
  margin-bottom: 1rem;
}
.cols {
  display: flex;
  gap: 2rem;
}
table {
  width: 100%;
  max-width: 600px;
  border-collapse: collapse;
}
td, th {
  border: 1px solid #ddd;
  padding: 0.5rem;
}
.json-view {
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 4px;
  white-space: pre-wrap;
  width: 100%;
}
.sugestoes {
  margin-top: 1rem;
  padding-left: 1rem;
  border-left: 3px solid #ccc;
}
</style>
