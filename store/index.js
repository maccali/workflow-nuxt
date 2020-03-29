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
}
