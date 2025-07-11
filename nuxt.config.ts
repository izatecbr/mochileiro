export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-05-15',
  modules: ['@pinia/nuxt', '@nuxt/image', '@nuxt/icon'],
  runtimeConfig: {
    supabaseStorageUrl: '',
    supabaseUrl: '',
    supabaseKey: '',
    pexelsKey: '',
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