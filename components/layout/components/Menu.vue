<template>
  <div>
    <div class="xl:d-none ml-30">
      <div class="desktopNav">
        <div class="desktopNav__item">
          <a
            :class="{
              activeMenu: getPath().split('/')[1].split('-')[0] == 'home',
            }"
            href="#"
          >
            Home <i class="icon-chevron-down"></i>
          </a>

          <div class="desktopNavSubnav">
            <div class="desktopNavSubnav__content">
              <div
                v-for="(elm, i) in homes"
                :key="i"
                class="desktopNavSubnav__item text-dark-1"
              >
                <router-link
                  :class="{ activeMenu: getPath() == elm.href }"
                  :to="elm.href"
                  >{{ elm.title }}</router-link
                >
              </div>
            </div>
          </div>
        </div>

        <div class="desktopNav__item">
          <a href="#"> Tour <i class="icon-chevron-down"></i> </a>

          <div class="desktopNavMega">
            <div class="desktopNavMega__container">
              <div class="desktopNavMega__lists">
                <div
                  v-for="(elm, i) in tours"
                  :key="i"
                  class="desktopNavMega-list"
                >
                  <div class="desktopNavMega-list__item">
                    <div class="desktopNavMega-list__title">
                      {{ elm.title }}
                    </div>

                    <div class="desktopNavMega-list__list">
                      <div
                        v-for="(elm2, i2) in elm.links"
                        :key="i2"
                        class="desktopNavMega-list__link"
                      >
                        <router-link :to="elm2.href">{{
                          elm2.title
                        }}</router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="desktopNavMega__info">
                <div class="specialCardGrid row y-gap-30">
                  <div class="col-12">
                    <div class="specialCard">
                      <div class="specialCard__image">
                        <nuxt-img
                          width="{615}"
                          height="{300}"
                          src="/img/cta/10/1.jpg"
                          alt="image"
                        />
                      </div>

                      <div class="specialCard__content">
                        <div class="specialCard__subtitle">Enjoy Upto</div>
                        <h3 class="specialCard__title">60 % OFF</h3>
                        <div class="specialCard__text">on Your Booking</div>
                      </div>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="specialCard">
                      <div class="specialCard__image">
                        <nuxt-img
                          width="{615}"
                          height="{300}"
                          src="/img/cta/10/2.jpg"
                          alt="image"
                        />
                      </div>

                      <div class="specialCard__content">
                        <div class="specialCard__subtitle">80% Discount</div>
                        <h3 class="specialCard__title">
                          Are You Ready
                          <br />
                          To Turkey Tour
                        </h3>
                        <div class="specialCard__text"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="desktopNav__item">
          <router-link to="/destinations">Destination</router-link>
        </div>

        <div class="desktopNav__item">
          <a href="#">Activities</a>
        </div>

        <div class="desktopNav__item">
          <a href="#"> Pages <i class="icon-chevron-down"></i> </a>

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
          <router-link to="/contact">Contact</router-link>
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
