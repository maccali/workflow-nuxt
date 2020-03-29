export default function ({ route, store, redirect }) {
  // export default function (context) {
  // export default function (oi) {
  // If the user is not authenticated
  store.state.authenticated = true;
  console.log('---d')
  // console.log(context.route.params);
  console.log(route);
  console.log('---c')
  if (!store.state.authenticated) {
    store.state.navbar.aberto = true;
    store.state.navbar.pageId = "login"
    return redirect('/')
  }
}
// criar por rota
