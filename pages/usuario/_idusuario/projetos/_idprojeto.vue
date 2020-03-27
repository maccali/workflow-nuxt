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
  },
  data() {
    return {
      titulo: "Como não saber como, sem ter comose souber como?",
      resumo:
        "Como não saber como, sem ter comose souber como? Como não saber como, sem ter comose souber como? Como não saber como, sem ter comose souber como Como não saber como, sem ter comose souber como?",
      nota: 0,
      listaArquivos: [
        { id: 1, rede: "icone", nome: "Nome do Arquivo 1", link: "https://www.univates.br/bdu/bitstream/10737/365/1/Marcos%20Schorr.pdf" },
        { id: 2, rede: "icone", nome: "Nome do Arquivo 1", link: "https://www.univates.br/bdu/bitstream/10737/365/1/Marcos%20Schorr.pdf" },
        { id: 3, rede: "icone", nome: "Nome do Arquivo 1", link: "https://www.univates.br/bdu/bitstream/10737/365/1/Marcos%20Schorr.pdf" }
      ],
      listaChaves: ["Org", "Ajac", "Spe"],
      listaAutores: ["Paulo Gosado", "Paulo Gosado", "Paulo Gosado"],
      listaVersoes: [
        { id: 1, versao: "1", data: "DATA d" },
        { id: 2, versao: "2", data: "DATA d" },
        { id: 3, versao: "3", data: "DATA d" }
      ],
      listaLinks: [
        { id: 1, rede: "icone", link: "linke" },
        { id: 2, rede: "icone", link: "linke" },
        { id: 3, rede: "icone", link: "linke" }
      ],
      listaLinksCompartilhados: [
        { id: 1, rede: "icone", link: "linke" },
        { id: 2, rede: "icone", link: "linke" },
        { id: 3, rede: "icone", link: "linke" }
      ]
    };
  }
};
</script>
