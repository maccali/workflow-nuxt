export default async function({ app, route, store, redirect }) {

  // Requisição para API
  let reki = await app.$axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
  // Status Code da request ex(200, 404, 500)
  console.log(reki.status);
  // Status massage da request ex('OK')
  console.log(reki.statusText);
  // Dados da Requisição
  console.log(reki.data);

  // Acesso as variáveis de estado Globais
  // criadas em /store/index.js
  // onde será Gerenciado o menu por exemplo, como já esta no arquivo
  // apesar do middleware estar no server side
  // são variáveis onde podem ser mudadas tanto no serverside quanto no client
  // estes abaixo mudam as variaveis do menu (Valor que é carregado por padrão)
  store.state.navbar.aberto = true;
  store.state.navbar.pageId = "login";

  // Aqui é um exemplo de setagem do cookie no middleware
  app.$cookies.set('token', 'cookie-value', {
    path: '/',
    maxAge: 60 * 60 * 24 * 7
  });
  // Assim vc pega o valor no middleware
  app.$cookies.get('token');
  // Já dentro de um componente vc acessa desta forma
  this.$cookies.get('token');
  this.$cookies.set("token", "cookie-value-client", {
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });

  // Se for nescesário redirecionar para alguma rota,
  // se usa o redirect assim
  return redirect('/');
}
