// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'netlify'
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/image', '@nuxt/icon'],
  runtimeConfig: {
    public: {
      pexelsKey: ''
    },
  },
  image: {
    quality: 80,
    domains: ['images.pexels.com'], 
    provider: 'ipx',
  },
  css: [
    '~/public/css/style.css',
  ]
})