<template>
  <div>
    <div class="xl:d-none ml-30">
      <div class="desktopNav">

        <div class="desktopNav__item">
          <a href="/interesses?tipo=Experiência">Experiências</a>
        </div>

        <div class="desktopNav__item">
          <a href="/interesses?tipo=Aventura">Aventuras</a>
        </div>

        <div class="desktopNav__item">
          <a href="#"> Interesses <i class="icon-chevron-down"></i> </a>

          <div class="desktopNavSubnav">
            <div class="desktopNavSubnav__content">
              <div v-for="(elm, i) in categorias" :key="i" class="desktopNavSubnav__item text-dark-1">
                <div class="desktopNavSubnav__item">
                  <template v-if="elm?.legenda">
                    <a href="#">
                      {{ elm.legenda }} <i class="icon-chevron-right"></i>
                    </a>
                  </template>
                  <template v-if="elm?.categorias">
                    <div class="desktopNavSubnav">
                      <div class="desktopNavSubnav__content">
                        <div v-for="(elm2, i2) in elm.categorias" :key="i2" class="desktopNavSubnav__item">
                          <nuxt-link>{{
                            elm2.legenda
                          }}</nuxt-link>
                        </div>
                      </div>
                    </div>
                  </template>

                </div>

              </div>
            </div>
          </div>
        </div>

        <div class="desktopNav__item">
          <nuxt-link to="/contact">Câmbio</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const store = useGlobalStore()
const categorias = store.categorias
</script>
