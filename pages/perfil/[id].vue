<template>
  <main>
  <div class="container">
    <div class="row justify-between py-30 mt-80">
      <div class="col-auto">
        <div class="text-14">Mochileiro {{ ">" }} Perfil</div>
      </div>

      <div class="col-auto">
        <div class="text-14">Amplie suas conexões</div>
      </div>
    </div>
  </div>
    <PerfilConteudo :objeto="objeto" />
  </main>
</template>


<script setup>
const route = useRoute()
const store = useGlobalStore()
const objeto = ref(null)
const id = route.params.id;
onMounted(() => {
  objeto.value = store.getUsuarioById(Number(id))
})



</script>

<style scoped>
/* Container Principal */
.profile-container {
    font-family: Arial, sans-serif;
    line-height: 1.5;

    padding-top: 7rem;
    max-width: 800px;
    margin: auto;
}

/* Breadcrumb e Título */
.breadcrumb {
    margin-bottom: 20px;
}

.breadcrumb-text {
    padding: 10px 0;
    font-size: 14px;
    color: #555;
}

.profile-title {
    font-size: 24px;
    color: #333;
    margin: 10px 0;
}

/* Links Sociais */
.social-links {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    padding: 10px;
    font-size: 16px;
    color: #555;
    margin-bottom: 20px;
}

.social-item {
    display: flex;
    align-items: center;
    gap: 5px;
}

.social-icon {
    color: #555;
}

.link {
    text-decoration: none;
    color: #555;
}

.link:hover {
    color: #007bff;
}

.divider {
    color: #ccc;
}

/* Classificações */
.classifications {
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 7px;
}

.classification-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 8px;
    text-align: center;
    background: #f9f9f9;
}

.classification-title {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
}

.classification-category {
    font-size: 14px;
    color: #777;
}
</style>
