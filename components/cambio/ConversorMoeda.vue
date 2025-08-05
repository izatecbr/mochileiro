<template>
  <div>
    <p v-if="erro">Erro ao converter.</p>
    <p v-else>
      {{ moedaDestino }} {{ valorConvertido }}
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { converterMoeda } from '@/api/CurrencyApi.js'

const props = defineProps({
  valor: { type: Number, required: true },
  moedaOrigem: { type: String, required: true },
  moedaDestino: { type: String, required: true }
})

const valorConvertido = ref(null)
const erro = ref(false)

async function carregarConversao() {
  erro.value = false
  try {
    valorConvertido.value = await converterMoeda(
        props.valor,
        props.moedaOrigem,
        props.moedaDestino
    )
  } catch (e) {
    erro.value = true
  }
}

onMounted(carregarConversao)

watch(() => [props.valor, props.moedaOrigem, props.moedaDestino], carregarConversao)
</script>
