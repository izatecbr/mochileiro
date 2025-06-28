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
                  <router-link :to="elm.legenda">{{
                    elm.legenda
                  }}</router-link>
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
