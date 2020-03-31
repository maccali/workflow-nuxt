import axios from 'axios'

const baseUrl = "https://api.nasa.gov";

export const state = () => ({
  usuario: {
    token: (process.browser) ? localStorage.getItem('uToken') : '6',
    // id: localStorage.getItem('uId'),
    // imgUrl: localStorage.getItem('uImgUrl'),
    // nome: localStorage.getItem('uNome'),
  },
  navbar: {
    aberto: false,
    pageId: "pesquisa",
  },
  dados: {},
})

export const mutations = {
  manipulaMenu(state) {
    state.navbar.aberto = !state.navbar.aberto;
  },
  abreAbaMenu: (state, idAba) => {
    if (!state.navbar.aberto) {
      mutations.manipulaMenu(state);
    }
    state.navbar.pageId = idAba;
  },

  dadosReq: (state, { variavelSaida, dados }) => {
    eval(`state.dados.${variavelSaida} = ${dados}`);
    console.log(state.dados)
  }
}

export const actions = {
  async http(context, { rotaApi, metodo, objeto, variavelSaida }) {

    console.log(`Url: ${baseUrl}${rotaApi}`);
    console.log(`Rota: ${rotaApi}`)
    console.log(`Metodo: ${metodo}`)
    console.log(`Objeto: ${objeto}`)

    await axios({
      method: metodo,
      url: `${baseUrl}${rotaApi}`,
      data: objeto,
    })
      .then(function (response) {
        context.commit('dadosReq', { variavelSaida, response })
        // return response;
      }).catch(error => {
        context.commit('dadosReq', { variavelSaida, error })
        // return error;
      }).then(response => {
        context.commit('dadosReq', { variavelSaida, response })
        // return response;
      });
  }
}
