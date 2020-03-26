<template>
  <div>
    <Header />
    <NavBar />
    <div class="container-fluid bg-um">
      <div class="container">
        <div class="row">
          <div class="col-6 section-title left">
            <h1>Detalhes do projeto</h1>
          </div>
          <div class="col-6 section-title right">
            <div id="botoes-editar-projeto" class="botoes">
              <a v-if="estaLogado" class="btn-top shadow-sm" href="./editarProjeto.html">
                <i class="fas fa-edit"></i>
              </a>
              <a class="btn-top shadow-sm" href>
                <i class="fas fa-star"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid bg-dois">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <Carousel />
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid bg-tres">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div id="macy-container">
              <CardTitulo :titulo="titulo" />
              <CardAutores :listaAutores="listaAutores" />
              <CardPalavrasChave :listaChaves="listaChaves" />
              <CardDataPublicacao :listaVersoes="listaVersoes" />
              <CardResumo :resumo="resumo" />
              <CardArquivos :listaArquivos="listaArquivos" />
              <CardLinksExternos :listaLinks="listaLinks" />
              <CardAvalie :nota="nota" />
              <CardCompartilhe :listaLinksCompartilhados="listaLinksCompartilhados" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/header/Header.vue";
import NavBar from "~/components/navbar/NavBar";
import Footer from "~/components/footer/Footer";
import Carousel from "~/components/carrousel/CarrouselCont";

import CardTitulo from "~/components/cards/CardTitulo";
import CardAutores from "~/components/cards/CardAutores";
import CardPalavrasChave from "~/components/cards/CardPalavrasChave";
import CardDataPublicacao from "~/components/cards/CardDataPublicacao";
import CardResumo from "~/components/cards/CardResumo";
import CardArquivos from "~/components/cards/CardArquivos";
import CardLinksExternos from "~/components/cards/CardLinksExternos";
import CardAvalie from "~/components/cards/CardAvalie";
import CardCompartilhe from "~/components/cards/CardCompartilhe";

export default {
  components: {
    // Componentes Base
    Header,
    NavBar,
    Footer,
    Carousel,

    // Cards da página
    CardTitulo,
    CardAutores,
    CardPalavrasChave,
    CardDataPublicacao,
    CardResumo,
    CardArquivos,
    CardLinksExternos,
    CardAvalie,
    CardCompartilhe
  }
};
</script>
