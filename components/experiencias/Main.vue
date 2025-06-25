<template>
  <div class="row y-gap-20 justify-between items-end">
    <div class="col-auto">
      <div class="row x-gap-10 y-gap-10 items-center">
        <div class="col-auto">
          <button class="button -accent-1 text-14 py-5 px-15 bg-accent-1-05 text-accent-1 rounded-200">
            Bestseller
          </button>
        </div>
        <div class="col-auto">
          <button class="button -accent-1 text-14 py-5 px-15 bg-light-1 rounded-200">
            Free cancellation
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
            {{ objeto?.localizacaoObject?.legenda }}
          </div>
        </div>

        <div class="col-auto">
          <div class="d-flex items-center">
            <i class="icon-reservation text-16 mr-5"></i>
            30K+ booked
          </div>
        </div>
      </div>
    </div>

    <div class="col-auto">
      <div class="d-flex x-gap-30 y-gap-10">
        <a href="#" class="d-flex items-center">
          <i class="icon-share flex-center text-16 mr-10"></i>
          Share
        </a>

        <a href="#" class="d-flex items-center">
          <i class="icon-heart flex-center text-16 mr-10"></i>
          Wishlist
        </a>
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
