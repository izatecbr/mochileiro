<template>
  <div class="row x-gap-130 y-gap-20 pt-20">
    <div class="col-lg-6">
      <div class="y-gap-15">
        <div v-for="(elm, i) in classificacoes" :key="i" class="d-flex">
          <i
            class="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"
          ></i>
          {{ elm.legenda }}
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>

const props = defineProps(['classificacoes'])

</script>
