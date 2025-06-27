<template>
    <main class="profile-container">
        <!-- Título e Breadcrumb -->
        <div class="breadcrumb ">
            <div class="breadcrumb-text">Mochileiro > Perfil</div>
            <h1 class="profile-title">{{ usuario?.legenda }}</h1>
        </div>

        <!-- Links Sociais -->
        <div class="social-links">
            <div class="social-item">
                <Icon name="mdi:phone" class="social-icon" /> {{ usuario?.telefone?.numero }}
            </div>
            <span class="divider">|</span>
            <NuxtLink v-if="usuario?.email" :to="`mailto:${usuario?.email}`" class="social-item link">
                <Icon name="mdi:email" class="social-icon" /> {{ usuario?.email }}
            </NuxtLink>
            <span class="divider">|</span>
            <NuxtLink v-if="usuario?.instagram" :to="usuario?.instagram" target="_blank" class="social-item link">
                <Icon name="mdi:instagram" class="social-icon" /> Instagram
            </NuxtLink>
            <span class="divider">|</span>
            <div class="social-item">
                <Icon name="mdi:map-marker" class="social-icon" />
                {{ usuario?.localizacaoObject?.endereco }} - {{ usuario?.localizacaoObject?.cidadeObject?.legenda }}
            </div>
        </div>

        <!-- Cards de Classificações -->
        <h5 class="py-20" >
            <Icon name="mdi:star" class="social-icon" />
            Classificações
        </h5>
        <div class="classifications">

            <div v-for="classificacao in usuario?.localizacaoObject?.classificacoesList" :key="classificacao.id"
                class="classification-card">
                <h3 class="classification-title">{{ classificacao.legenda }}</h3>
                <p class="classification-category">Categoria: {{ classificacao.categoria.legenda }}</p>
            </div>
        </div>
    </main>
</template>


<script setup>
const route = useRoute()
const idUsuario = 2

const store = useGlobalStore()
const usuario = store.getUsuarioById(idUsuario)

onMounted(() => {
    console.log('Usuario:', route.params.id)
    console.log('Usuario:', store.getUsuarioById(idUsuario))
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
    gap: 15px;
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
