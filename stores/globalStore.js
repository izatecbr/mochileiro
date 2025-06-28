import { defineStore } from "pinia";

const STORE_VERSION = import.meta.env.PUBLIC_STORE_VERSION || "v3";

export const useGlobalStore = defineStore("database", {
  persist: true,
  state: () => ({
    _storeVersion: STORE_VERSION,
    novaVersao: false,
    paises: [],
    estados: [],
    cidades: [],
    usuarios: [],
    categorias: [],
    classificacoes: [],
    produtos: [],
    localizacoes: [],
    atividades: [],
    aventuras: [],
    experiencias: [],
    interesses: [], // <-- Aqui!
  }),
  actions: {
    async carregarStore() {
      const savedVersion = localStorage.getItem("global_store_version");
      if (savedVersion !== STORE_VERSION) {
        this.$reset();
        localStorage.setItem("global_store_version", STORE_VERSION);
        this.novaVersao = true;
      } else {
        this.novaVersao = false;
      }

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
      this.categorias = data.categorias;
      this.produtos = data.produtos;
      this.localizacoes = data.localizacoes;
      this.usuarios = data.usuarios;
      this.atividades = data.atividades;
      this.aventuras = data.aventuras;
      this.experiencias = data.experiencias;

      this.classificacoes = data.categorias.flatMap((pai) =>
          pai.categorias.map((filha) => ({
            id: filha.id,
            legenda: filha.legenda,
            categoria: {
              id: pai.id,
              legenda: pai.legenda,
            },
          }))
      );

      await this.gerarInteresses();
    },

    enriquecerClassificacoes(arrIds) {
      if (!Array.isArray(arrIds)) return [];
      return arrIds
          .map((id) => this.classificacoes.find((c) => c.id === id))
          .filter(Boolean);
    },

    getById(collection, id) {
      return this[collection].find((item) => item.id === id) || null;
    },

    getEnriched(collection, id, enrichFn) {
      const item = this.getById(collection, id);
      if (!item) return null;
      if (item.enriquecido) return item;

      const enriched = enrichFn(item);
      const index = this[collection].findIndex((i) => i.id === id);
      if (index !== -1) this[collection][index] = enriched;

      return enriched;
    },

    getIntereseById(id) {
      return this.getById("interesses", id);
    },
    getPaisById(id) {
      return this.getById("paises", id);
    },

    getEstadoById(id) {
      return this.getEnriched("estados", id, (estado) => ({
        ...estado,
        paisObject: this.getPaisById(estado.pais),
        enriquecido: true,
      }));
    },

    getCidadeById(id) {
      return this.getEnriched("cidades", id, (cidade) => ({
        ...cidade,
        estadoObject: this.getEstadoById(cidade.estado),
        paisObject: this.getPaisById(cidade.pais),
        enriquecido: true,
      }));
    },

    getLocalizacaoById(id) {
      return this.getEnriched("localizacoes", id, (l) => ({
        ...l,
        cidadeObject: this.getCidadeById(l.cidade),
        classificacoesList: this.enriquecerClassificacoes(l.classificacoes),
        enriquecido: true,
      }));
    },

    getUsuarioById(id) {
      return this.getEnriched("usuarios", id, (u) => ({
        ...u,
        localizacaoObject: this.getLocalizacaoById(u.localizacao),
        enriquecido: true,
      }));
    },

    getProdutoById(id) {
      return this.getEnriched("produtos", id, (p) => ({
        ...p,
        parceiroObject: this.getUsuarioById(p.parceiro),
        classificacoesList: this.enriquecerClassificacoes(p.classificacoes),
        enriquecido: true,
      }));
    },

    getAtividadeById(id) {
      return this.getEnriched("atividades", id, (a) => ({
        ...a,
        anfitriaoObject: this.getUsuarioById(a.anfitriao),
        produtoObject: this.getProdutoById(a.produto),
        classificacoesList: this.enriquecerClassificacoes(a.classificacoes),
        enriquecido: true,
      }));
    },

    getAventuraById(id) {
      return this.getEnriched("aventuras", id, (a) => ({
        ...a,
        autorObject: this.getUsuarioById(a.autor),
        anfitriaoObject: this.getUsuarioById(a.anfitriao),
        atividadesList: (a.atividades || []).map(this.getAtividadeById),
        classificacoesList: this.enriquecerClassificacoes(a.classificacoes),
        enriquecido: true,
      }));
    },

    gerarInteresses() {
      const mapItem = (item, tipo, prefixo) => ({
        id: `${prefixo}${item.id}`,
        data:item.data,
        duracao:item.duracao,
        imagens: item.imagens,
        legenda: item.legenda,
        descricao: item.descricao,
        destino: item.destino,
        anfitriao: item.anfitriao,
        valor: item.valor,
        tipo,
        destinoObject: this.getLocalizacaoById(item.destino),
        anfitriaoObject: this.getUsuarioById(item.anfitriao),
      });

      const atividades = this.atividades.map((a) => mapItem(a, "Atividade", "T"));
      const aventuras = this.aventuras.map((a) => mapItem(a, "Aventura", "A"));
      const experiencias = this.experiencias.map((e) => mapItem(e, "Experiência", "E"));

      this.interesses = [...experiencias, ...aventuras, ...atividades];
    },

    getExperienciaById(id) {
      return this.getEnriched("experiencias", id, (e) => ({
        ...e,
        autorObject: this.getUsuarioById(e.autor),
        experienciaAnfitriao: this.getUsuarioById(e.anfitriao),
        localizacaoObject: this.getLocalizacaoById(e.localizacao),
        aventurasList: (e.aventuras || []).map(this.getAventuraById),
        classificacoesList: this.enriquecerClassificacoes(e.classificacoes),
        enriquecido: true,
      }));
    },
  },
});
