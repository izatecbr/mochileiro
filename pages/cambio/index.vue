<template>
  <section class="layout-pt-xl layout-pb-xl">
    <div class="mt-10 min-h-[calc(100vh-100px)] flex items-center justify-center bg-gray-100 px-4">
      <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">

        <h2 class="text-2xl font-bold text-center text-gray-800">Cálculo de Câmbio</h2>

        <form @submit.prevent="buscarCambio" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Valor</label>
            <AppInput v-model.number="valor" class="search-input" placeholder="Ex.: 1000"/>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Moeda de Origem</label>
            <AppInput v-model="moedaOrigem" class="search-input" placeholder="BRL"/>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Moeda de Destino</label>
            <AppInput v-model="moedaDestino" class="search-input" placeholder="USD"/>
          </div>

          <button class="button bg-blue-1 p-1 text-white mt-10 " type="submit">
            Converter
          </button>
        </form>

        <div v-if="resultado !== null" class="mt-4 p-4 bg-blue-50 text-blue-900 border border-blue-200 rounded-md text-center">
         <CambioConversorMoeda :valor="valor"  :moedaOrigem="moedaOrigem" :moedaDestino="moedaDestino"/>
        </div>

        <div v-if="erro" class="mt-4 p-4 bg-red-100 text-red-800 border border-red-300 rounded-md text-center">
          {{ erro }}
        </div>

      </div>
    </div>
  </section>
</template>



<script setup>
import { ref, computed } from 'vue'
import { converterMoeda } from '~/api/CurrencyApi.js' // ajuste o caminho conforme seu projeto

const valor = ref(1000)
const moedaOrigem = ref('BRL')
const moedaDestino = ref('USD')
const resultado = ref(null)
const loading = ref(false)
const erro = ref(null)

const formattedValor = computed(() =>
    Number.isFinite(valor.value) ? Number(valor.value).toLocaleString() : valor.value
)

async function buscarCambio() {
  erro.value = null
  resultado.value = null
  loading.value = true
  try {
    resultado.value = await converterMoeda(valor.value, moedaOrigem.value, moedaDestino.value)
  } catch (e) {
    console.error(e)
    erro.value = 'Não foi possível converter.'
  } finally {
    loading.value = false
  }
}
</script>
