export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      SUPABASE_STORAGE_URL: process.env.NUXT_PUBLIC_SUPABASE_STORAGE_URL
    }
  },
  compatibilityDate: '2025-05-15',
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