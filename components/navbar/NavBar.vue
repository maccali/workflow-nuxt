<template>
  <div>
    <div id="menu-dinamico" class="container-fluid bg-nav fixed-top">
      <div class="container">
        <nav class="navbar navbar-expand-lg">
          <nuxt-link class="navbar-brand" to="/">
            <img src="~/assets/img/logo.png" alt />
          </nuxt-link>
          <div>
            <button
              class="btn btn-icon-menu principal"
              type="button"
              v-on:click="$store.commit('abreAbaMenu','pesquisa')"
            >
              <i class="fas fa-search"></i>
            </button>
            <button
              class="btn btn-icon-menu principal"
              type="button"
              v-on:click="$store.commit('abreAbaMenu','usuario')"
            >
              <i class="fas fa-user"></i>
            </button>

            <button
              class="btn btn-texto-menu"
              type="button"
              v-on:click="$store.commit('abreAbaMenu','login')"
            >Entrar</button>
          </div>
        </nav>
      </div>
      <div class="cesar-menut" :class="$store.state.navbar.aberto ? 'ativado' : ''">
        <div class="fabinho">
          <div>
            <div v-if="$store.state.navbar.pageId === 'pesquisa'">
              <SideBarHeader :titulo="`Pesquisa`"></SideBarHeader>

              <!-- MANDAR PARA RODA DE PESQUISA -->
              <!-- METHOD GET -->
              <form method="GET">
                <label for="input-pesquisa">Digite sua pesquisa</label>
                <input
                  v-model="inputPesquisa"
                  id="input-pesquisa"
                  class="form-control nav-bar-search"
                  type="search"
                  placeholder
                  aria-label="Pesquisar"
                />

                <div class="btn-cont">
                  <nuxt-link to="/pesquisa">
                    <button
                      type="submit"
                      href="./resultadoPesquisa.html"
                      class="btn btn-texto-menu"
                    >Buscar</button>
                  </nuxt-link>
                </div>
              </form>
            </div>
          </div>
          <div>
            <div v-if="$store.state.navbar.pageId === 'login'">
              <SideBarHeader :titulo="`Entre`"></SideBarHeader>

              <!-- MANDAR PARA RODA DE LOGADO -->
              <!-- METHOD POST -->
              <form method="POST">
                <label for="input-email">Email</label>
                <input
                  v-model="inputEmail"
                  id="input-email"
                  class="form-control nav-bar-search"
                  aria-label="Digite seu email"
                />
                <label for="input-senha">Senha</label>
                <div class="input-group">
                  <input
                    v-model="inputSenha"
                    id="input-senha"
                    class="form-control nav-bar-search"
                    :type="pwHidde ? 'password' : 'text'"
                    aria-label="Digite sua senha"
                  />
                  <span v-on:click="pwChange()" class="input-group-text pos-fix">
                    <div v-if="pwHidde">
                      <div>
                        <i class="fas fa-eye pos-fix-icon"></i>
                      </div>
                    </div>
                    <div v-else>
                      <div>
                        <i class="fas fa-eye-slash pos-fix-icon"></i>
                      </div>
                    </div>
                  </span>
                </div>
                <div class="btn-cont">
                  <button type="button" class="btn btn-texto-menu">Acessar</button>
                </div>
                <div class="content-menu-aside">
                  <p>Você não tem conta?</p>
                </div>
                <div class="btn-cont">
                  <button
                    v-on:click="abreAbaMenu('cadastro')"
                    type="button"
                    class="btn btn-texto-menu"
                  >Cadastre-se</button>
                </div>
                <div class="content-menu-aside">
                  <p>Você não lembra sua senha?</p>
                </div>
                <div class="btn-cont">
                  <button
                    v-on:click="abreAbaMenu('recuperar')"
                    type="button"
                    class="btn btn-texto-menu"
                  >Redefinir</button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <div v-if="$store.state.navbar.pageId === 'cadastro'">
              <SideBarHeader :titulo="`Cadastre-se`"></SideBarHeader>

              <form method="POST">
                <label for="input-cadastro-nome">Nome Completo</label>
                <input
                  v-model="inputCadastroNome"
                  id="input-cadastro-nomel"
                  class="form-control nav-bar-search"
                  aria-label="Digite seu Nome Completo"
                />

                <label for="input-email">Email</label>
                <input
                  v-model="inputEmail"
                  id="input-email"
                  class="form-control nav-bar-search"
                  aria-label="Digite seu email"
                />

                <label for="input-cadastro-senha">Senha</label>
                <div class="input-group">
                  <input
                    v-model="inputCadastroSenha"
                    id="input-cadastro-senha"
                    class="form-control nav-bar-search"
                    :type="pwHidde ? 'password' : 'text'"
                    aria-label="Digite sua senha"
                  />
                  <span v-on:click="pwChange()" class="input-group-text pos-fix">
                    <div v-if="pwHidde">
                      <div>
                        <i class="fas fa-eye pos-fix-icon"></i>
                      </div>
                    </div>
                    <div v-else>
                      <div>
                        <i class="fas fa-eye-slash pos-fix-icon"></i>
                      </div>
                    </div>
                  </span>
                </div>

                <label for="input-cadastro-senha-repetir">Repita a senha</label>
                <div class="input-group">
                  <input
                    v-model="inputCadastroSenhaRepetir"
                    id="input-cadastro-senha-repetira"
                    class="form-control nav-bar-search"
                    :type="pwHidde ? 'password' : 'text'"
                    aria-label="Repita sua senha"
                  />
                  <span v-on:click="pwChange()" class="input-group-text pos-fix">
                    <div v-if="pwHidde">
                      <div>
                        <i class="fas fa-eye pos-fix-icon"></i>
                      </div>
                    </div>
                    <div v-else>
                      <div>
                        <i class="fas fa-eye-slash pos-fix-icon"></i>
                      </div>
                    </div>
                  </span>
                </div>

                <div class="btn-cont">
                  <button type="button" class="btn btn-texto-menu">Criar Conta</button>
                </div>
                <div class="content-menu-aside">
                  <p>Você já tem conta?</p>
                </div>
                <div class="btn-cont">
                  <button
                    v-on:click="abreAbaMenu('login')"
                    type="button"
                    class="btn btn-texto-menu"
                  >
                    Vá
                    para o
                    login
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <div v-if="$store.state.navbar.pageId === 'recuperar'">
              <SideBarHeader :titulo="`Recupere`"></SideBarHeader>

              <div class="content-menu-aside">
                <p>Digite o seu e-mail no campo abaixo para podermos lhe enviar as próximas instruções</p>
              </div>
              <label for="input-email">Email</label>
              <input
                v-model="inputEmail"
                id="input-email"
                class="form-control nav-bar-search"
                aria-label="Digite seu email"
              />
              <div class="btn-cont">
                <button type="submit" class="btn btn-texto-menu">Enviar email</button>
              </div>
            </div>
          </div>
          <div>
            <div v-if="$store.state.navbar.pageId === 'usuario'">
              <SideBarHeader :titulo="`Sua Conta`"></SideBarHeader>

              <div class="card-person">
                <img src="~/assets/img/bot.png" alt />
                <h6>Nome da pessoa</h6>
              </div>
              <ul class="menu-lista-usuario">
                <li>
                  <nuxt-link to="/usuario/50/perfil">
                    <span>
                      <i class="fas fa-id-card"></i>
                    </span>Perfil
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/usuario/50/dashboard">
                    <span>
                      <i class="fas fa-tachometer-alt"></i>
                    </span>Dashboard
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/usuario/50/projetos">
                    <span>
                      <i class="fas fa-project-diagram"></i>
                    </span>Projetos
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/usuario/50/favoritos">
                    <span>
                      <i class="fas fa-heart"></i>
                    </span>Favoritos*
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/usuario/50/historico">
                    <span>
                      <i class="fas fa-history"></i>
                    </span>Histórico*
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideBarHeader from "~/components/navbar/partials/SideBarHeader";
import Cadastro from "~/components/navbar/partials/Cadastro";
import Login from "~/components/navbar/partials/Login";
import Pesquisa from "~/components/navbar/partials/Pesquisa";
import Redefinir from "~/components/navbar/partials/Redefinir";
import Usuario from "~/components/navbar/partials/Usuario";

export default {
  components: {
    SideBarHeader,
    Cadastro,
    Login,
    Pesquisa,
    Redefinir,
    Usuario
  },
  data() {
    return {
      // Variáveis do menu
      aberto: false,
      pageId: "pesquisa",

      // Variáveis da Pesquisa
      inputPesquisa: "",
      inputDataAnterior: "",
      inputDataPosterior: "",
      inputCategorias: "",

      // Variáveis do Login
      inputEmail: "",
      inputSenha: "",
      pwHidde: true,

      // Variáveis do Cadastro
      inputCadastroNome: "",
      inputCadastroEmail: "",
      inputCadastroSenha: "",
      inputCadastroSenhaRepetir: ""
    };
  },

  methods: {
    pwChange() {
      this.pwHidde = !this.pwHidde;
      console.log(this.pwHidde);
    }
  },
  updated: function() {
    console.log('---')
    console.log(this.$store.state.usuario.token)
  },
  mounted: function(){
    console.log(this.$store.state.navbar.aberto )
  }
};
</script>

