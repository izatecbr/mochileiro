import { defineStore } from "pinia";
const STORE_VERSION = import.meta.env.PUBLIC_STORE_VERSION || "v1";
export const useGlobalStore = defineStore("database", {
  persist: true,
  state: () => ({
    _storeVersion: STORE_VERSION,
    novaVersao: false,
    paises: [],
    estados: [],
    cidades: [],
    usuarios: [],
    produtos: [],
    localizacoes: [],
    atividades: [],
    aventuras: [],
    experiencias: [],
  }),
  actions: {
    async carregarStore() {
      console.log('import.meta.env.NUXT_PUBLIC_STORE_VERSION',import.meta.env.NUXT_PUBLIC_STORE_VERSION)
      const savedVersion = localStorage.getItem('global_store_version')
      alert(savedVersion)
  if (savedVersion !== STORE_VERSION) {
    this.$reset()
    localStorage.setItem('global_store_version', STORE_VERSION)
    this.novaVersao = true  // <-- sinaliza que tem nova versão
  } else {
    this.novaVersao = false
  }

      // Já tem dados? Evita o fetch
      if (
        this.paises.length &&
        this.estados.length &&
        this.cidades.length &&
        this.usuarios.length &&
        this.produtos.length &&
        this.localizacoes.length &&
        this.atividades.length &&
        this.aventuras.length &&
        this.experiencias.length
      ) {
        return;
      }

      const res = await fetch("/db.json");
      const data = await res.json();

      this.paises = data.paises;
      this.estados = data.estados;
      this.cidades = data.cidades;
      this.produtos = data.produtos;
      this.localizacoes = data.localizacoes;
      this.usuarios = data.usuarios;
      this.atividades = data.atividades;
      this.aventuras = data.aventuras;
      this.experiencias = data.experiencias;
    },
    // Função privada dentro do contexto da store
    normalizeId(id, isString) {
      return isString ? String(id) : Number(id);
    },

    getPaisById(id) {
      return this.paises.find((p) => p.id === id);
    },

    getEstadoById(id) {
      const estado = this.estados.find((e) => e.id === id);
      if (!estado) return null;

      if (estado.enriquecido) return estado;

      const paisObject = this.getPaisById(estado.pais);

      const enriched = {
        ...estado,
        paisObject,
        enriquecido: true,
      };

      const index = this.estados.findIndex((e) => e.id === id);
      if (index !== -1) this.estados[index] = enriched;

      return enriched;
    },

    getCidadeById(id) {
      const cidade = this.cidades.find((c) => c.id === id);
      if (!cidade) return null;

      if (cidade.enriquecido) return cidade;

      const estadoObject = this.getEstadoById(cidade.estado);
      const paisObject = this.getPaisById(cidade.pais);

      const enriched = {
        ...cidade,
        estadoObject,
        paisObject,
        enriquecido: true,
      };

      const index = this.cidades.findIndex((c) => c.id === id);
      if (index !== -1) this.cidades[index] = enriched;

      return enriched;
    },
    getLocalizacaoById(id) {
      const localizacao = this.localizacoes.find((l) => l.id === Number(id));
      if (!localizacao) return null;

      if (localizacao.enriquecido) return localizacao;

      const cidadeObject = this.getCidadeById(localizacao.cidade);

      const enriched = { ...localizacao, cidadeObject, enriquecido: true };
      const index = this.localizacoes.findIndex((l) => l.id === id);
      if (index !== -1) this.localizacoes[index] = enriched;
      return enriched;
    },
    getUsuarioById(id) {
      const usuario = this.usuarios.find((u) => u.id === id);
      if (!usuario) return null;
      if (usuario.enriquecido) return usuario;

      const localizacaoObject = this.getLocalizacaoById(usuario.localizacao);

      const enriched = { ...usuario, localizacaoObject, enriquecido: true };
      const index = this.usuarios.findIndex((u) => u.id === id);
      if (index !== -1) this.usuarios[index] = enriched;
      return enriched;
    },

    getProdutoById(id) {
      const produto = this.produtos.find((p) => p.id === id);
      if (!produto) return null;
      if (produto.enriquecido) return produto;

      const parceiroObject = this.getUsuarioById(produto.parceiro);

      const enriched = { ...produto, parceiroObject, enriquecido: true };
      const index = this.produtos.findIndex((p) => p.id === id);
      if (index !== -1) this.produtos[index] = enriched;
      return enriched;
    },

    getAtividadeById(id) {
      const atividade = this.atividades.find((a) => a.id === id);
      if (!atividade) return null;
      if (atividade.enriquecido) return atividade;

      const produtoObject = this.getProdutoById(atividade.produto);
      const anfitriaoObject = this.getUsuarioById(atividade.anfitriao);

      const enriched = {
        ...atividade,
        anfitriaoObject,
        produtoObject,
        enriquecido: true,
      };
      const index = this.atividades.findIndex((a) => a.id === id);
      if (index !== -1) this.atividades[index] = enriched;
      return enriched;
    },

    getAventuraById(id) {
      const aventura = this.aventuras.find((a) => a.id === id);
      if (!aventura) return null;
      if (aventura.enriquecido) return aventura;

      const autorObject = this.getUsuarioById(aventura.autor);
      const anfitriaoObject = this.getUsuarioById(aventura.anfitriao);
      const atividadesList =
        aventura.atividades?.map(this.getAtividadeById) || [];

      const enriched = {
        ...aventura,
        autorObject,
        anfitriaoObject,
        atividadesList,
        enriquecido: true,
      };
      const index = this.aventuras.findIndex((a) => a.id === id);
      if (index !== -1) this.aventuras[index] = enriched;
      return enriched;
    },

    getExperienciaById(id) {
      const experiencia = this.experiencias.find((e) => e.id === id);
      if (!experiencia) return null;
      if (experiencia.enriquecido) return experiencia;

      const autorObject = this.getUsuarioById(experiencia.autor);
      const localizacaoObject = this.getLocalizacaoById(
        experiencia.localizacao
      );
      const aventurasList =
        experiencia.aventuras?.map(this.getAventuraById) || [];

      const enriched = {
        ...experiencia,
        autorObject,
        localizacaoObject,
        aventurasList,
        enriquecido: true,
      };
      const index = this.experiencias.findIndex((e) => e.id === id);
      if (index !== -1) this.experiencias[index] = enriched;
      return enriched;
    },
  },
});
