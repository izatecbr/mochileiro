<template>
  <main>
    <div class="container">
      <div class="row justify-between py-30 mt-80">
        <div class="col-auto">
          <div class="text-14">Mochileiro {{ ">" }} Experiências</div>
        </div>

        <div class="col-auto">
          <div class="text-14">Uma experiência inesquecível</div>
        </div>
      </div>
    </div>
    <ExperienciaConteudo :objeto="objeto" :interesse="interesse" />
  </main>
</template>

<script setup>
import { useRoute } from '#imports'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { allTour } from '~/data/tours'

const route = useRoute()
const store = useGlobalStore()
const objeto = ref(null)
const interesse = ref(null)
const objectId = route.params.id;
onMounted(() => {
  objeto.value = store.getExperienciaById(Number(objectId))
  const id = `X${objeto.value.id}`
  interesse.value = store.getIntereseById(id)
})


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
