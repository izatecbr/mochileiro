import { defineStore } from "pinia";

const STORE_VERSION = import.meta.env.PUBLIC_STORE_VERSION || "v3";

export const useGlobalStore = defineStore("database", {
  persist: true,
  state: () => ({
    _storeVersion: STORE_VERSION,
    novaVersao: false,
    moedas:[],
    meses:[],
    paises: [],
    estados: [],
    cidades: [],
    destinos:[],
    usuarios: [],
    categorias: [],
    classificacoes: [],
    produtos: [],
    localizacoes: [],
    atividades: [],
    aventuras: [],
    experiencias: [],
    interesses: [],
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
      this.moedas = data.moedas;
      this.meses = data.meses;
      this.paises = data.paises;
      this.estados = data.estados;
      this.cidades = data.cidades;
      this.destinos = data.cidades.filter(cidade => cidade.destino);
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
    getMesById(id) {
      return this.getById("meses", id);
    },
    getPaisById(id) {
      return this.getById("paises", id);
    },
    getMoedaById(id) {
      return this.getById("moedas", id);
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

    getDestinoById(id) {
      return this.getById("destinos", id);
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
      return this.getEnriched("atividades", id, (a) => {
        a.data= this.enriquecerData(a.data)
        return {
          ...a,
          anfitriaoObject: this.getUsuarioById(a.anfitriao),
          produtoObject: this.getProdutoById(a.produto),
          localizacaoObject: this.getLocalizacaoById(a.localizacao),
          classificacoesList: this.enriquecerClassificacoes(a.classificacoes),
          enriquecido: true
        };
      });
    },


    getAventuraById(id) {
      return this.getEnriched("aventuras", id, (a) => {
        const atividadesList = (a.atividades || []).map(this.getAtividadeById);
        const atividadesEscolhidas = atividadesList.filter((act) => act?.escolhida && act.valor?.quantia);

        let valor = a.valor;
        if (atividadesEscolhidas.length) {
          const moedaId = atividadesEscolhidas[0].valor.moeda;
          const total = atividadesEscolhidas.reduce((sum, act) => sum + act.valor.quantia, 0);
          valor = this.calcularValorComTotal(total, moedaId);
        }
        a.data= this.enriquecerData(a.data)
        return {
          ...a,
          autorObject: this.getUsuarioById(a.autor),
          localizacaoObject: this.getLocalizacaoById(a.localizacao),
          anfitriaoObject: this.getUsuarioById(a.anfitriao),
          atividadesList,
          classificacoesList: this.enriquecerClassificacoes(a.classificacoes),
          valor,
          enriquecido: true,
        };
      });
    },

    getExperienciaById(id) {
      return this.getEnriched("experiencias", id, (e) => {
        const aventurasList = (e.aventuras || []).map(this.getAventuraById);
        const aventurasValidas = aventurasList.filter((av) => av?.valor?.quantia);

        let valor = e.valor;
        if (aventurasValidas.length) {
          const moedaId = aventurasValidas[0].valor.moeda;
          const total = aventurasValidas.reduce((sum, av) => sum + av.valor.quantia, 0);
          valor = this.calcularValorComTotal(total, moedaId);
        }
        e.data= this.enriquecerData(e.data)
        return {
          ...e,
          autorObject: this.getUsuarioById(e.autor),
          anfitriaoObject: this.getUsuarioById(e.anfitriao),
          localizacaoObject: this.getLocalizacaoById(e.localizacao),
          aventurasList,
          classificacoesList: this.enriquecerClassificacoes(e.classificacoes),
          valor,
          enriquecido: true,
        };
      });
    },

    gerarInteresses() {
      const mapItem = (item, tipo, prefixo) => {
        let valor = item.valor;

        // Se for Aventura, calcular valor com base nas atividades escolhidas
        if (tipo === "Aventura") {
          const atividadesEscolhidas = (item.atividades || [])
              .map(this.getAtividadeById)
              .filter((a) => a?.escolhida);

          if (atividadesEscolhidas.length) {
            const moedaId = atividadesEscolhidas[0].valor.moeda;
            const total = atividadesEscolhidas.reduce((sum, a) => sum + a.valor.quantia, 0);

            const moeda = this.getMoedaById(moedaId);
            const { simbolo, locale } = moeda;
            const { id: localeId, digitosMinimos, digitosMaximos } = locale;

            valor = {
              quantia: total,
              preco: `${simbolo} ${total.toLocaleString(localeId, {
                minimumFractionDigits: digitosMinimos,
                maximumFractionDigits: digitosMaximos,
              })}`,
              moeda: moedaId
            };
          }
        }

        // Se for Experiência, calcular valor com base nas aventuras válidas
        if (tipo === "Experiência") {
          const aventuras = (item.aventuras || [])
              .map(this.getAventuraById)
              .filter((a) => a?.valor?.quantia);

          if (aventuras.length) {
            const moedaId = aventuras[0].valor.moeda;
            const total = aventuras.reduce((sum, a) => sum + a.valor.quantia, 0);

            const moeda = this.getMoedaById(moedaId);
            const { simbolo, locale } = moeda;
            const { id: localeId, digitosMinimos, digitosMaximos } = locale;

            valor = {
              quantia: total,
              preco: `${simbolo} ${total.toLocaleString(localeId, {
                minimumFractionDigits: digitosMinimos,
                maximumFractionDigits: digitosMaximos,
              })}`,
              moeda: moedaId
            };
          }
        }
        const contexto = tipo
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") + "s";
        return {
          id: `${prefixo}${item.id}`,
          lid: item.id,
          data: this.enriquecerData(item.data),
          duracao: item.duracao,
          imagens: item.imagens,
          legenda: item.legenda,
          descricao: item.descricao,
          destino: item.destino,
          anfitriao: item.anfitriao,
          valor,
          tipo: {
            sigla:prefixo,
            legenda: tipo,
            rota: contexto,
          },
          destinoObject: this.getLocalizacaoById(item.localizacao),
          anfitriaoObject: this.getUsuarioById(item.anfitriao),
          imagem:`/api/image/${contexto}/${item.id}/5.jpg`
        };
      };

      const atividades = this.atividades.map((a) => mapItem(a, "Atividade", "T"));
      const aventuras = this.aventuras.map((a) => mapItem(a, "Aventura", "V"));
      const experiencias = this.experiencias.map((e) => mapItem(e, "Experiência", "X"));

      this.interesses = [...experiencias, ...aventuras, ...atividades];

    },
    calcularValorComTotal(total, moedaId) {
      const moeda = this.getMoedaById(moedaId);

      if (!moeda || !moeda.locale) {
        return {
          quantia: total,
          preco: total,
          moeda: moedaId,
          condicaoPagamento: `Preço ${total} com base na data atual, sujeito a alterações econômicas ou negociais.`
        };
      }

      const { simbolo, locale } = moeda;
      const { id: localeId, digitosMinimos, digitosMaximos } = locale;

      const precoFormatado = `${simbolo} ${total.toLocaleString(localeId, {
        minimumFractionDigits: digitosMinimos,
        maximumFractionDigits: digitosMaximos,
      })}`;

      return {
        quantia: total,
        preco: precoFormatado,
        moeda: moedaId,
        condicaoPagamento: `Preço ${precoFormatado} com base na data atual, sujeito a alterações econômicas ou negociais.`
      };
    },
    enriquecerData(data) {
      const dataObj = new Date(data.dia)

      if (isNaN(dataObj.getTime())) {
        console.warn('Data inválida:', data.dia)
        return {
          ...data,
          mes: {
            id: 'UNK',
            legenda: 'Desconhecido'
          },
        }
      }

      const mesIndex = dataObj.getMonth() // 0-11
      const mes = this.meses[mesIndex] || { id: 'UNK', legenda: 'Desconhecido' }
      mes.ano = dataObj.getFullYear() % 100
      return {
        ...data,
        mes,
      }
    },
  },
});
