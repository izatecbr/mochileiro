<template>
  <footer class="footer -type-1 footer-clean ">
    <div class="container">
      <div class="footer__bottom">
        <div class="row y-gap-5 justify-between items-center">
          <div class="col-auto">
            <div class="footerSocials">
              <div class="footerSocials__title">Siga mochileiro.tec</div>

              <div class="footerSocials__icons">
                <Socials />
              </div>
            </div>
          </div>
          <div class="col-auto">
            <div>© izatec {{ new Date().getFullYear() }}</div>
          </div>

        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Socials from './components/Socials.vue';



</script>

<style scoped lang="css">
.footer-clean {
  padding: 7rem 6rem 3rem 6rem;
}
</style>
