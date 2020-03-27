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
              v-on:click="abreAbaMenu('pesquisa')"
            >
              <i class="fas fa-search"></i>
            </button>
            <button
              class="btn btn-icon-menu principal"
              type="button"
              v-on:click="abreAbaMenu('usuario')"
            >
              <i class="fas fa-user"></i>
            </button>

            <button
              class="btn btn-texto-menu"
              type="button"
              v-on:click="abreAbaMenu('login')"
            >Entrar</button>
          </div>
        </nav>
      </div>
      <div class="cesar-menut" :class="aberto ? 'ativado' : ''">
        <div class="fabinho">
          <div>
            <div v-if="pageId === 'pesquisa'">
              <div class="menu-header">
                <span class="aba-titulo">Pesquisa</span>
                <button class="btn btn-icon-menu" type="button" v-on:click="manipulaMenu('login')">
                  <i class="fas fa-times"></i>
                </button>
              </div>

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
            <div v-if="pageId === 'login'">
              <div class="menu-header">
                <span class="aba-titulo">Entre</span>
                <button class="btn btn-icon-menu" type="button" v-on:click="manipulaMenu('login')">
                  <i class="fas fa-times"></i>
                </button>
              </div>
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
            <div v-if="pageId === 'cadastro'">
              <div class="menu-header">
                <span class="aba-titulo">Cadastre-se</span>
                <button class="btn btn-icon-menu" type="button" v-on:click="manipulaMenu('login')">
                  <i class="fas fa-times"></i>
                </button>
              </div>
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
            <div v-if="pageId === 'recuperar'">
              <div class="menu-header">
                <span class="aba-titulo">Recupere</span>
                <button class="btn btn-icon-menu" type="button" v-on:click="manipulaMenu('login')">
                  <i class="fas fa-times"></i>
                </button>
              </div>
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
            <div v-if="pageId === 'usuario'">
              <div class="menu-header">
                <span class="aba-titulo">Sua Conta</span>
                <button class="btn btn-icon-menu" type="button" v-on:click="manipulaMenu('login')">
                  <i class="fas fa-times"></i>
                </button>
              </div>

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
export default {
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
    manipulaMenu() {
      this.aberto = !this.aberto;
    },
    abreAbaMenu(idAba) {
      if (!this.aberto) {
        this.manipulaMenu();
      }
      this.pageId = idAba;
    },
    pwChange() {
      this.pwHidde = !this.pwHidde;
      console.log(this.pwHidde);
    }
  },
  updated: function() {}
};
</script>

