<template>
  <div>
    <div>
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
</template>

<script>
export default {
  props: {
    inputEmail: String,
    inputSenha: String,
    pwHidde: Boolean,
    pwChange: Function,
    
  }
};
</script>
