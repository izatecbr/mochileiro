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
    <ExperienciasConteudo :objeto="objeto" />
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
const idExperiencia = route.params.id
const id = route.params.id;
const tour = allTour.find((item) => item.id == id) || allTour[0];
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
