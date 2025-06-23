<template>
  <div>
    <div class="xl:d-none ml-30">
      <div class="desktopNav">
        <div class="desktopNav__item">
          <a href="#">Home</a>
        </div>
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
              <div
                v-for="(elm, i) in pages"
                :key="i"
                class="desktopNavSubnav__item text-dark-1"
              >
                <template v-if="elm.href">
                  <router-link :to="elm.href">{{ elm.title }}</router-link>
                </template>
                <template v-else>
                  <a href="#">
                    {{ elm.title }} <i class="icon-chevron-right"></i>
                  </a>
                </template>

                <template v-if="elm.subnav">
                  <div class="desktopNavSubnav">
                    <div class="desktopNavSubnav__content">
                      <div
                        v-for="(elm2, i2) in elm.subnav"
                        :key="i2"
                        class="desktopNavSubnav__item"
                      >
                        <router-link :to="elm2.href">{{
                          elm2.title
                        }}</router-link>
                      </div>
                    </div>
                  </div>
                </template>
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
import { homes, pages, tours } from "@/data/menu";
const route = useRoute();

const getPath = () => route.path;
</script>
