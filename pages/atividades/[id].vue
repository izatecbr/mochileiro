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
    <AtividadeConteudo :objeto="objeto" />
  </main>
</template>

<script setup>
const route = useRoute()
const store = useGlobalStore()
const objeto = ref(null)
const id = route.params.id;
onMounted(() => {
  objeto.value = store.getAtividadeById(Number(id))
})

</script>
