<template>
  <div class="col-lg-3 col-6">
    <div class="d-flex items-center">
      <div class="flex-center size-50 rounded-12 border-1">
        <i class="text-20 icon-clock"></i>
      </div>

      <div class="ml-10">
        <div class="lh-16">Duração</div>
        <div class="text-14 text-light-2 lh-16">{{ duracao }}</div>
      </div>
    </div>
  </div>

  <div class="col-lg-3 col-6">
    <div class="d-flex items-center">
      <div class="flex-center size-50 rounded-12 border-1">
        <i class="text-20 icon-calendar"></i>
      </div>

      <div class="ml-10">
        <div class="lh-16">Período</div>
        <div class="text-14 text-light-2 lh-16">{{ data?.mes?.sigla }}/{{ data?.mes?.ano }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['duracao','data'])

</script>
