<template>
  <section class="pt-30">
    <div class="container">
      <Main :tour="tour" />
      <Galeria />
    </div>
  </section>

  <section class="layout-pt-md js-pin-container">
    <div class="container">
      <div class="row y-gap-30 justify-between">
        <div class="col-lg-8">
          <div class="row y-gap-20 justify-between items-center layout-pb-md">
            <OthersInformation />
          </div>

          <Overview />

          <div class="line mt-60 mb-60"></div>

          <h2 class="text-30">What's included</h2>

          <Included />

          <div class="line mt-60 mb-60"></div>

          <h2 class="text-30">Itinerary</h2>

          <div class="mt-30">
            <RoadMap />
          </div>

          <!--<h2 class="text-30 mt-60 mb-30">Tour Map</h2>
          <div class="mapTourSingle">
            <Map />
          </div> -->

          <div class="line mt-60 mb-60"></div>

          <h2 class="text-30">Availability Calendar</h2>

          <DateCalender />

          <div class="line mt-60 mb-60"></div>

          <h2 class="text-30">FAQ</h2>

          <div class="accordion -simple row y-gap-20 mt-30 js-accordion">
            <Faq />
          </div>

          <div class="line mt-60 mb-60"></div>

          <h2 class="text-30">Customer Reviews</h2>

          <div class="mt-30">
            <Rating />
          </div>

          <!--<Reviews /> -->

          <!--<button class="button -md -outline-accent-1 text-accent-1 mt-30">
            See more reviews
            <i class="icon-arrow-top-right text-16 ml-10"></i>
          </button>

          <CommentBox /> -->
        </div>

        <div class="col-lg-4">
          <div class="d-flex justify-end js-pin-content">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import DateCalender from "./DateCalender";
import Faq from "./Faq";
import Galeria from "./galeria/Galeria.vue";
import Included from "./Included";
import Main from "./Main.vue";
import OthersInformation from "./OthersInformation";
import Overview from "./Overview";
import Rating from "./Rating";
import RoadMap from "./RoadMap";
import Sidebar from "./Sidebar.vue";

const props = defineProps(["tour"]);
</script>
