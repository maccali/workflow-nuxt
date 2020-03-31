// import api from '~/plugins/functions/api';

export default async function ({ app, route, store, redirect }) {

  // VERICAR TOKEN
  // FAZER Requisiçao
  // console.log("f-----")
  // let r = await store.dispatch(
  //   "http",
  //   {
  //     rotaApi: "/planetary/apod?api_key=DEMO_KEY",
  //     metodo: 'get',
  //     objeto: {},
  //     variavelSaida: "login"
  //   });
  // console.log(r);
  // let r = await store.commit('http', { rotaApi: "/planetary/apod?api_key=DEMO_KEY", metodo: 'get', objeto: {}, })
  // let r = await store.commit('http', { rotaApi: "/planetary/apod?api_key=DEMO_KEY", metodo: 'get', objeto: {}, })
  // console.log(r);
  // console.log("f-----")
  // let resp = await api.http('/planetary/apod?api_key=DEMO_KE', 'get', {});
  // console.log(resp)
  // console.log("f-----")
  // http("/login", "POST", { login: this.inputEmail, senha: this.inputSenha }, this.sucessoLogin, this.errorLogin);
  // let reki = await app.$axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')

  // console.log(reki.data);
  // console.log(reki);
  // console.log('fd')
  // let data = (await app.$axios.get('...')).data
  // console.log(data);

  // export default function (context) {
  // export default function (oi) {
  // If the user is not authenticated
  store.state.authenticated = true;
  // console.log('---d')
  // console.log(context.route.params);
  // app.$cookies.set('token', 'cookie-value', {
  //   path: '/',
  //   maxAge: 60 * 60 * 24 * 7
  // });
  // console.log(app.$cookies.get('token'));
  // console.log(route);
  // console.log('---c')
  if (!store.state.authenticated) {
    store.state.navbar.aberto = true;
    store.state.navbar.pageId = "login"
    return redirect('/')
  }
}
// criar por rota
