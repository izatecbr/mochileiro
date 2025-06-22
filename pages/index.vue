<template>
  <div>
    <p>Versão da Store: {{ storeVersion }}</p>

    <div v-if="store.novaVersao" class="alert-deploy">
      🚀 Nova versão dos dados disponível! A página será atualizada.
      <button @click="reloadPage">Atualizar Agora</button>
    </div>

    <h2>Produtos:</h2>
    <ul>
      <li v-for="produto in store.usuarios" :key="produto.id">
        {{ produto.legenda }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
const store = useGlobalStore()
const storeVersion = import.meta.env.NUXT_PUBLIC_STORE_VERSION

onMounted(() => {
  store.carregarStore().then(() => {
    if (store.novaVersao) {
      location.reload()
    }
  })
})

</script>

<style scoped>
.alert-deploy {
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background: #f5a623;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 9999;
}
</style>
