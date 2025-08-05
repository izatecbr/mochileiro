export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-05-15',
  modules: ['@pinia/nuxt', '@nuxt/image', '@nuxt/icon'],
  runtimeConfig: {
    supabaseStorageUrl: '',
    supabaseUrl: '',
    supabaseKey: '',
    pexelsKey: '',
    public: {
      currencyApiKey: process.env.NUXT_PUBLIC_CURRENCY_API_KEY
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