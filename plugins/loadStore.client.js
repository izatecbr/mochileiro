export default defineNuxtPlugin(async () => {
  const store = useGlobalStore()
  await store.carregarStore()
})
