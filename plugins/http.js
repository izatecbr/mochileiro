import PexelsAPI from '~/api/PexelsAPI'

export default defineNuxtPlugin((nuxtApp) => {

  const config = useRuntimeConfig()

  const PEXELS_URL = 'https://api.pexels.com/v1'

  const http = $fetch.create({
    baseURL: PEXELS_URL,
    ignoreResponseError: true,
    onRequest({ options }) {
      options.headers = {
        ...options.headers,
        Authorization: config.public.pexelsKey
      }
    },
    onResponse({ response }) {

    },
    onResponseError({ response }) {

    }
  })

  const apis = {
    pexels: new PexelsAPI(http)
  }


  return {
    provide: {
      http: apis
    }
  }
})
