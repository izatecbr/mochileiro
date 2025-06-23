// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/image'],
  image: {
    quality: 80,
  },
  css: [
    '~/public/css/style.css',
  ],
  server: {
    port: 3000, // muda a porta padrão de 3000 para 3001
    host: '0.0.0.0' // opcional: permite acesso externo
  }
})