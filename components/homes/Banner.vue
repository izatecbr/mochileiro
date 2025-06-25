<template>
  <section class="cta -type-2">
    <div class="cta__bg">
      <nuxt-img src="/img/cta/7/bg.png" width="1093" height="600" alt="image" />

      <div class="cta__image">
        <nuxt-img src="/img/cta/7/1.png" width="750" height="600" alt="image" />
        <nuxt-img
            src="/img/cta/7/shape.svg"
            width="40"
            height="600"
            alt="image"
        />
        <nuxt-img
            src="/img/cta/7/shape2.svg"
            width="600"
            height="40"
            alt="image"
        />
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-7">
          <div class="cta__content">
            <h2
                data-aos="fade-up"
                data-aos-delay=""
                class="text-40 md:text-30 lh-13"
            >
              Nossa primeira <span class="text-accent-2">experiência</span>
              <br class="lg:d-none" />
              no Chile
            </h2>
            <p data-aos="fade-up" data-aos-delay="" class="mt-10">
              <nuxt-link to="/experiencias/1">
                Quero ver de perto
                <i class="icon-arrow-top-right ml-10 text-16"></i>
              </nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
