<template>
  <div>
    <div class="xl:d-none ml-30">
      <div class="desktopNav">

        <div class="desktopNav__item">
          <router-link to="/destinations">Experiências</router-link>
        </div>

        <div class="desktopNav__item">
          <a href="#">Aventuras</a>
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
                          <router-link>{{
                            elm2.legenda
                          }}</router-link>
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
          <router-link to="/contact">Câmbio</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const store = useGlobalStore()
const getPath = () => route.path;
const categorias = store.categorias
</script>
