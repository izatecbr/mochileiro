<template>
  <div class="row x-gap-130 y-gap-20 pt-20">
    <div class="col-lg-6">
      <div class="y-gap-15">
        <div v-for="(elm, i) in included" :key="i" class="d-flex">
          <i
            class="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"
          ></i>
          {{ elm.text }}
        </div>
      </div>
    </div>

    <div class="col-lg-6">
      <div class="y-gap-15">
        <div v-for="(elm, i) in excluded" :key="i" class="d-flex">
          <i
            class="icon-cross flex-center text-10 size-24 rounded-full text-red-3 bg-red-4 mr-15"
          ></i>
          {{ elm.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { excluded, included } from "@/data/tourSingleContent";

// No need for the setup function, just import the data directly
</script>
