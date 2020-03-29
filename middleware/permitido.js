export default function ({ store, redirect }) {
  // If the user is not authenticated
  store.state.authenticated =true;
  if (!store.state.authenticated) {
    return redirect('/login')
  }
}
