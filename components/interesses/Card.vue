<template>
  <div class="tourCard__header">
    <div class="tourCard__image ratio ratio-28:20">
      <img width="421" height="301" :src="elm.imagem" alt="image" class="img-ratio" />
    </div>
    <button class="tourCard__favorite">
      <i class="icon-heart"></i>
    </button>
  </div>
  <div class="tourCard__content px-20 py-10">
    <div class="tourCard__location d-flex items-center text-13 text-light-2">
      <i class="icon-pin d-flex text-16 text-light-2 mr-5"></i>
      {{ elm.destinoObject.legenda }}
    </div>
    <h3 class="tourCard__title text-14 fw-500 mt-5">
      <span>{{ elm.legenda }}</span>
    </h3>
    <div class="tourCard__rating d-flex items-center justify-between text-13 mt-5">
      <span class="text-dark-1 ml-10">
        {{ elm.anfitriaoObject.legenda }}
      </span>
      <AppBadge class="mr-10" :label="elm.tipo.legenda" variant="ghost" padding="4px" :color="cores[elm.tipo.legenda]"
        radius="7px" />
    </div>
    <div class="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
      <div class="d-flex items-center">
        <i class="icon-clock text-16 mr-5"></i>
        {{ elm.duracao }}
      </div>
      <div>
        <span class="text-16 fw-500">{{ elm.valor.preco }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  elm: {
    type: Object,
    required: true,
  },
});
const cores = {
  Experiência: "var(--color-blue-1)",
  Aventura: "var(--color-green-3)",
  Atividade: "var(--color-red-1)",
};

</script>

<style></style>