<template>
  <footer class="footer -type-1" id="footer-home">
    <div class="footer__main">
      <div class="container">
        <div class="footer__info">
          <div class="row y-gap-20 justify-between">
            <div class="col-auto">
              <div class="row y-gap-20 items-center">
                <div class="col-auto">
                  <i class="icon-headphone text-50"></i>
                </div>

                <div class="col-auto">
                  <div class="text-20 fw-500">
                    Compartilhe conosco suas aventuras
                    <span class="text-accent-2">(86) 9 9942-2032</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-auto">
              <div class="footerSocials">
                <div class="footerSocials__title">Siga mochileiro.tec</div>

                <div class="footerSocials__icons">
                  <Socials />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer__content">
          <div class="row y-gap-40 justify-between">
            <div class="col-lg-4 col-md-6">
              <h4 class="text-20 fw-500">Contato</h4>

              <div class="y-gap-10 mt-20">
                <a class="d-block" href="#">
                  Teresina, Piauí - Brasil
                </a>
                <a class="d-block" href="#"> gleyson@iza.tec.br </a>
              </div>
            </div>

            <FooterLinks />
            <div class="col-lg-3 col-md-6">
              <h4 class="text-20 fw-500">Newsletter</h4>
              <p class="mt-20">
                Inscreva-se em nossa página e fique por dentro das novidades.
              </p>

              <div class="footer__newsletter">
                <form @submit.prevent="handleSubscribe">
                  <input v-model="email" type="Email" placeholder="Seu endereço de e-mail" />
                  <button type="submit">Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="footer__bottom">
        <div class="row y-gap-5 justify-between items-center">
          <div class="col-auto">
            <div>© izatec {{ new Date().getFullYear() }}</div>
          </div>


        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import FooterLinks from "./components/FooterLinks";
import Socials from "./components/Socials";
const { $supabase } = useNuxtApp()
const email = ref('')
const handleSubscribe = async () => {
  const { error } = await $supabase
      .from('tab_email') // nome da sua tabela
      .insert([{ email: email.value,cancelado:false }])

}
</script>
