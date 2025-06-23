<template>
  <article v-if="objeto">
    <h1>{{ objeto.legenda }}</h1>
    <pre class="json-view">
      {{ JSON.stringify(objeto.classificacoesList, null, 2) }}
    </pre>
  </article>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const store = useGlobalStore()
const objeto = ref(null)

onMounted(() => {
  objeto.value = objeto.value = store.getLocalizacaoById(2)
})
</script>
