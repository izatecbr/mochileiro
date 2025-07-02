<script setup>
import { ref, watch } from 'vue'
const store = useGlobalStore()

const colecaoSelecionada = ref('')
const legendaBusca = ref('')
const dadosFiltrados = ref([])
const detalheSelecionado = ref(null)

// Mapeamento de funções getById por coleção
const getByIdMap = {
  paises: (id) => store.getPaisById(id),
  estados: (id) => store.getEstadoById(id),
  cidades: (id) => store.getCidadeById(id),
  usuarios: (id) => store.getUsuarioById(id),
  categorias: (id) => store.getCategoriaById(id),
  classificacoes: (id) => store.getClassificacaoById(id),
  localizacoes: (id) => store.getLocalizacaoById(id),
  produtos: (id) => store.getProdutoById(id),
  atividades: (id) => store.getAtividadeById(id),
  aventuras: (id) => store.getAventuraById(id),
  experiencias: (id) => store.getExperienciaById(id),
  interesses: (id) => store.getIntereseById(id),
  destinos: (id) => store.getDestinoById(id),
  moedas: (id) => store.getMoedaById(id),
  meses: (id) => store.getMesById(id),
}


watch(colecaoSelecionada, async () => {
  detalheSelecionado.value = null

  await store.carregarStore()
  dadosFiltrados.value = store[colecaoSelecionada.value] || []
})

function filtrarDados() {
  const texto = legendaBusca.value.toLowerCase()
  const todos = store[colecaoSelecionada.value] || []
  dadosFiltrados.value = todos.filter(e =>
    e.legenda?.toLowerCase().includes(texto)
  )
}

async function verDetalhes(obj) {
  const getter = getByIdMap[colecaoSelecionada.value]
  if (!getter) return
  const result = await getter(obj.id)
  detalheSelecionado.value = result
}


</script>

<template>
  <div class="db-view">
    <div class="controls">
      <select v-model="colecaoSelecionada">
        <option value="">Selecione uma coleção</option>
        <option value="meses">Meses</option>
        <option value="paises">Países</option>
        <option value="moedas">Moedas</option>
        <option value="estados">Estados</option>
        <option value="cidades">Cidades</option>
        <option value="destinos">Destinos</option>
        <option value="localizacoes">Localizações</option>
        <option value="usuarios">Usuários</option>
        <option value="categorias">Categorias</option>
        <option value="classificacoes">Classificações</option>
        <option value="produtos">Produtos</option>
        <option value="atividades">Atividades</option>
        <option value="aventuras">Aventuras</option>
        <option value="experiencias">Experiências</option>
        <option value="interesses">Interesses</option>
      </select>
      <input v-model="legendaBusca" @input="filtrarDados" placeholder="Buscar por legenda..." />
    </div>

    <div class="cols">
      <table v-if="dadosFiltrados.length">
        <thead>
          <tr>
            <th>ID</th>
            <th>Legenda</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in dadosFiltrados" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.legenda }}</td>
            <td>
              <button @click="verDetalhes(item)">Json</button>
              <router-link :to="`/${colecaoSelecionada}/${item.id}`">Ver página</router-link>
            </td>
          </tr>
        </tbody>
      </table>

      <pre v-if="detalheSelecionado" class="json-view">
        {{ JSON.stringify(detalheSelecionado, null, 2) }}
      </pre>
    </div>
  </div>
</template>

<style scoped>
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
</style>
