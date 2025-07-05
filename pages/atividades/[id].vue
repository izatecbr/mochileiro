<template>
  <main>
    <div class="container">
      <div class="row justify-between py-30 mt-80">
        <div class="col-auto">
          <div class="text-14">Mochileiro {{ ">" }} Atividades</div>
        </div>

        <div class="col-auto">
          <div class="text-14">Um momento único</div>
        </div>
      </div>
    </div>
    <AtividadeConteudo :objeto="objeto" :interesse="interesse" />
  </main>
</template>

<script setup>
import {useRoute} from "#imports";

const route = useRoute()
const store = useGlobalStore()
const objeto = ref(null)
const interesse = ref(null)
const objectId = route.params.id;
onMounted(() => {
  objeto.value = store.getAtividadeById(Number(objectId))
  const id = `T${objeto.value.id}`
  interesse.value = store.getIntereseById(id)
})

</script>
