<template>
  <main>
  <div class="container">
    <div class="row justify-between py-30 mt-80">
      <div class="col-auto">
        <div class="text-14">Home {{ ">" }} Tours {{ ">" }} Phuket</div>
      </div>

      <div class="col-auto">
        <div class="text-14">Uma experiência inesquecível</div>
      </div>
    </div>
  </div>
    <article class="experiencia">
      <h1>Experiência ID: {{ idExperiencia }}</h1>

      <header class="experiencia__cabecalho">
        <h1>{{ objeto?.legenda }}</h1>
        <p class="experiencia__meta">
          <strong>Data:</strong> {{ formatarData(objeto?.data?.dia) }} às {{ objeto?.data?.hora }}<br />
          <strong>Duração:</strong> {{ objeto?.duracao }}<br />
          <strong>Local:</strong> {{ objeto?.localizacaoObject?.legenda }}
        </p>
        <p class="experiencia__descricao">{{ objeto?.descricao }}</p>

        <p>
          <strong>Autor:</strong>
          <NuxtLink :to="`/usuarios/${objeto?.autorObject?.id}`">
            {{ objeto?.autorObject?.legenda }}
          </NuxtLink>
        </p>

        <p class="experiencia__categorias">
          <strong>Classificações:</strong>
          <span v-for="(cat, i) in objeto?.classificacoesList" :key="i">
          {{ cat.legenda }}<span v-if="i < objeto?.classificacoesList.length - 1">, </span>
        </span>
        </p>
      </header>

      <section v-if="objeto?.aventurasList?.length" class="experiencia__aventuras">
        <h2>Aventuras vividas</h2>
        <div v-for="aventura in objeto.aventurasList" :key="aventura.id" class="aventura">
          <h3>{{ aventura.legenda }}</h3>
          <p>
            <strong>Data:</strong> {{ formatarData(aventura.data?.dia) }} às {{ aventura.data?.hora }}<br />
            <strong>Duração:</strong> {{ aventura.duracao }}<br />

            <strong>Autor:</strong>
            <NuxtLink :to="`/usuarios/${aventura?.autorObject?.id}`">
              {{ aventura?.autorObject?.legenda }}
            </NuxtLink><br />

            <strong>Anfitrião:</strong>
            <NuxtLink :to="`/usuarios/${aventura?.anfitriaoObject?.id}`">
              {{ aventura?.anfitriaoObject?.legenda }}
            </NuxtLink>
          </p>

          <p>{{ aventura.descricao }}</p>

          <div v-if="aventura.atividadesList?.length" class="aventura__atividades">
            <h4>Atividades / Serviços usados</h4>
            <ul>
              <li v-for="atividade in atividadeEscolhida(aventura.atividadesList)" :key="atividade.id" class="atividade">
                <NuxtLink :to="`/atividades/${atividade.id}`">
                  <strong>{{ atividade.legenda }}</strong>
                </NuxtLink><br />
                {{ atividade.descricao }}<br />
                <strong>Preço:</strong> {{ atividade.valor?.preco }}<br />
                <strong>Forma de pagamento:</strong> {{ atividade.valor?.formaPagamento }}

                <div v-if="atividade.anfitriaoObject">
                  <strong>Anfitrião:</strong>
                  <NuxtLink :to="`/usuarios/${atividade.anfitriaoObject.id}`">
                    {{ atividade.anfitriaoObject.legenda }}
                  </NuxtLink>
                </div>

                <div v-if="atividade.sugestoes?.length" class="sugestoes">
                  <h5>Outras opções</h5>
                  <ul>
                    <li v-for="idSugestao in atividade.sugestoes" :key="idSugestao">
                      <div v-if="sugestoesMap[idSugestao]">
                        <NuxtLink :to="`/atividades/${idSugestao}`">
                          <strong>{{ sugestoesMap[idSugestao].legenda }}</strong>
                        </NuxtLink>
                        <div>{{ sugestoesMap[idSugestao].descricao }}</div>
                        <p v-if="sugestoesMap[idSugestao].valor">
                          <strong>Preço:</strong> {{ sugestoesMap[idSugestao].valor.preco }} →
                          <strong>Forma de Pagamento:</strong> {{ sugestoesMap[idSugestao].valor.formaPagamento }}
                        </p>
                        <div v-if="sugestoesMap[idSugestao].produtoObject?.parceiroObject">
                          <small>
                            Parceiro:
                            <NuxtLink :to="`/usuarios/${sugestoesMap[idSugestao].produtoObject.parceiroObject.id}`">
                              {{ sugestoesMap[idSugestao].produtoObject.parceiroObject.legenda }}
                            </NuxtLink>
                          </small>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

              </li>
            </ul>
          </div>
        </div>
      </section>

      <pre class="json-view">
      {{ JSON.stringify(objeto, null, 2) }}
    </pre>
    </article>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from '#imports'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const route = useRoute()
const store = useGlobalStore()
const objeto = ref(null)
const idExperiencia = route.params.id

onMounted(() => {
  objeto.value = store.getExperienciaById(Number(idExperiencia))
})

function formatarData(dataString) {
  if (!dataString) return ''
  const data = new Date(dataString)
  return format(data, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
}

function atividadeEscolhida(atividades) {
  return atividades.filter(a => a.escolhida)
}

const sugestoesMap = computed(() => {
  if (!objeto.value) return {}
  const map = {}
  objeto.value.aventurasList?.forEach(aventura => {
    aventura.atividadesList?.forEach(atividade => {
      map[atividade.id] = atividade
    })
  })
  return map
})
</script>

