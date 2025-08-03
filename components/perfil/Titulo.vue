<template>
  <div class="row y-gap-20 justify-between items-end">
    <div class="col-auto">
      <div class="row x-gap-10 y-gap-10 items-center">
        <div class="col-auto" v-for="(c, index) in objeto?.localizacaoObject?.classificacoesList" :key="index">
          <button class="button -accent-1 text-14 py-5 px-15 bg-light-1 rounded-200">
            {{ c.legenda }}
          </button>
        </div>
      </div>

      <h2 class="text-40 sm:text-30 lh-14 mt-20">
        {{ objeto?.legenda?.split(" ")?.slice(0, 7)?.join(" ") }}
        <br />
        {{ objeto?.legenda?.split(" ")?.slice(7)?.join(" ") }}
      </h2>

      <div class="row x-gap-20 y-gap-20 items-center pt-20">
        <div class="col-auto">
          <div class="d-flex items-center">
            <div class="d-flex x-gap-5 pr-10">
              <!--<Stars :star="tour?.rating" :font="12" /> -->
            </div>
            <!-- {{ tour?.rating }} ({{ tour?.ratingCount }}) -->
          </div>
        </div>

        <div class="col-auto">
          <div class="d-flex items-center">
            <i class="icon-pin text-16 mr-5"></i>
            {{ objeto?.localizacaoObject?.cidadeObject?.legenda }}
          </div>
        </div>

        <div class="col-auto">
          <div class="d-flex items-center">
            <i class="icon-reservation text-16 mr-5"></i>
            {{ objeto?.localizacaoObject?.endereco }}
          </div>
        </div>
      </div>
    </div>
    <div class="col-auto">
      <div class="d-flex x-gap-30 y-gap-10">
        <NuxtLink v-if="objeto?.contato?.instagram" target="_blank" :to="`https://www.instagram.com/${objeto?.contato?.instagram}`">
          <Icon class="social-icon" name="mdi:instagram" />
          @{{ objeto?.contato?.instagram}}
        </NuxtLink>
        <NuxtLink v-if="objeto?.contato?.telefone?.whatsapp" target="_blank"
                  :to="`https://wa.me/${objeto?.contato?.telefone?.ddi}${objeto?.contato?.telefone?.ddd}${objeto?.contato?.telefone?.numero}?text=Oi%21%20Vi%20seu%20an%C3%BAncio%20no%20Mochileiro.tec%20e%20fiquei%20super%20interessado%28a%29%20na%20viagem.%20Pode%20me%20passar%20mais%20detalhes%3F`">
        <Icon class="social-icon" name="mdi:whatsapp" />
          ({{ objeto?.contato?.telefone?.ddd}}) {{ objeto?.contato?.telefone?.numero}}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps(["objeto"]);
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
