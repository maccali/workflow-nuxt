<template>
  <div>
    <Header />
    <NavBar />
    <Spacer :height="76" :bgVar="`bg-color-dois`" />
    <div class="container-fluid bg-dois">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <CarrouselCont :listaImgLinks="listaImgLinks" />
          </div>
        </div>
      </div>
    </div>
    <ImgTexto :titulo="quemSomos.titulo" :texto="quemSomos.texto" :img="quemSomos.img" />
    <TextoImg :titulo="queFazemos.titulo" :texto="queFazemos.texto" :img="queFazemos.img" />
    <ImgTexto :titulo="pqFazemos.titulo" :texto="pqFazemos.texto" :img="pqFazemos.img" />
    <Spacer :height="76" :bgVar="`bg-color-tres`" />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/header/Header.vue";
import NavBar from "~/components/navbar/NavBar.vue";
import CarrouselCont from "~/components/carrousel/CarrouselCont.vue";
import Footer from "~/components/footer/Footer.vue";

import ImgTexto from "~/components/presentations/ImgTexto";
import TextoImg from "~/components/presentations/TextoImg";

import Spacer from "~/components/utils/Spacer";

export default {
  components: {
    Header,
    NavBar,
    CarrouselCont,
    ImgTexto,
    TextoImg,
    Footer,
    Spacer
  },
  data() {
    return {
      quemSomos: {
        titulo: "Quem Somos?",
        texto:
          "textIn dui magna, posuere eget, vestibulum et, tempor auctor, justo. Phasellus consectetuer vestibulum elit. Fusce neque. Praesent egestas tristique nibh. Donec vitae orci sed dolor rutrum auctor. Fusce convallis metus id felis luctus adipiscing. Nullam tincidunt adipiscing enim. Fusce fermentum odio nec arcu. Praesent egestas neque eu enim. Etiam ut purus mattis mauris sodales aliquam.",
        img: "https://picsum.photos/400/400"
      },
      queFazemos: {
        titulo: "O que fazemos?",
        texto:
          "Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Sed hendrerit. Aenean vulputate eleifend tellus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Curabitur at lacus ac velit ornare lobortis. Phasellus accumsan cursus velit. Vivamus aliquet elit ac nisl. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam..",
        img: "https://picsum.photos/350/350"
      },
      pqFazemos: {
        titulo: "Por Que Fazemos?",
        texto:
          "Proin magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Curabitur nisi. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Proin faucibus arcu quis ante. Nullam quis ante. Morbi ac felis. Fusce commodo aliquam arcu.",
        img: "https://picsum.photos/375/375"
      },
      listaImgLinks: [
        { link: "https://picsum.photos/250/450" },
        { link: "https://picsum.photos/200/700" },
        { link: "https://picsum.photos/900/300" },
        { link: "https://picsum.photos/400/375" },
        { link: "https://picsum.photos/300/900" },
        { link: "https://picsum.photos/200/355" }
      ]
    };
  }
};
</script>


<style>
</style>
