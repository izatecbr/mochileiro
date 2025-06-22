<template>
  <section class="layout-pt-xl layout-pb-xl">
    <div class="container">
      <div class="row y-gap-30">
        <div class="col-md-6">
          <div class="featureCard -type-3">
            <div class="featureCard__image">
              <nuxt-img
                src="/img/cta/5/1.jpg"
                width="630"
                height="401"
                alt="image"
              />
            </div>

            <div class="featureCard__content">
              <div data-aos="fade-up" data-aos-delay="" class="text-white">
                Enjoy these cool staycation promotions in Singapore
              </div>
              <h4
                data-aos="fade-up"
                data-aos-delay=""
                class="text-30 text-white fw-700 lg:mt-10"
              >
                Best staycation
                <br />
                deals
              </h4>

              <button
                data-aos="fade-right"
                data-aos-delay=""
                class="button -md -accent-1 bg-white"
              >
                <nuxt-link to="/tour-list-1">
                  See activities
                  <i class="icon-arrow-top-right ml-10"></i>
                </nuxt-link>
              </button>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="featureCard -type-3">
            <div class="featureCard__image">
              <nuxt-img
                src="/img/cta/5/2.jpg"
                width="630"
                height="401"
                alt="image"
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay=""
              class="featureCard__content"
            >
              <div class="text-white">
                Don't forget to check out these activities while you're here
              </div>
              <h4
                data-aos="fade-up"
                data-aos-delay=""
                class="text-30 text-white fw-700 lg:mt-10"
              >
                All Time Favourite
                <br />
                Activities in Dubai
              </h4>

              <button
                data-aos="fade-left"
                data-aos-delay=""
                class="button -md -accent-1 bg-white"
              >
                <nuxt-link to="/tour-list-1">
                  See activities
                  <i class="icon-arrow-top-right ml-10"></i>
                </nuxt-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
