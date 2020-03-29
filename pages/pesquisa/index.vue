<template>
  <div>
    <Header />
    <NavBar />
    <div class="container-fluid all-height bg-tres">
      <!-- BREAD CRAMBS -->
      <div class="container-fluid bg-um bg-dois">
        <div class="container">
          <div class="row">
            <div class="col-12 section-title">
              <h1>Resultado da Pesquisa</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid bg-tres">
        <div class="container">
          <div id="macy-container-projetos">
            <div v-for="dado in dados" :key="dado.id">
              <CardProjeto
                :img="dado.img"
                :nome="dado.nome"
                :descricao="dado.descricao"
                :data="dado.data"
              ></CardProjeto>
            </div>
          </div>
        </div>
        <button v-on:click="atualizarMacy"></button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/header/Header";
import NavBar from "~/components/navbar/NavBar";
import Footer from "~/components/footer/Footer";
import CardProjeto from "~/components/cards/CardProjeto";

export default {
  components: {
    Header,
    NavBar,
    Footer,
    CardProjeto
  },
  middleware: "authenticated",
  data() {
    return {
      dados: [
        {
          id: 1,
          img:
            "https://abrilsuperinteressante.files.wordpress.com/2016/11/gatinhos-filhotes-reconhecem-a-voz-da-prc3b3pria-mc3a3e.jpg?quality=70&strip=info&w=1024",
          nome:
            " Estatísticas sobre grupos de Whatsapp Estatísticas sobre grupos de Whatsapp Estatísticas sobre grupos de Whatsapp",
          descricao:
            "re obscure Latin words, consectetur, from a Lorem Ipsum passage",
          data: "13/03/2020"
        },
        {
          id: 2,
          img:
            "https://t2.ea.ltmcdn.com/pt/images/3/9/6/img_meu_gatinho_chora_muito_e_normal_21693_600.jpg",
          nome:
            " Estatísticas sobre grupos de Whatsapp Estatísticas sobre grupos de Whatsapp Estatísticas sobre grupos de Whatsapp",
          descricao:
            "re obscure Latin words, consectetur, from a Lorem Ipsum passage",
          data: "13/03/2020"
        },
        {
          id: 3,
          img:
            "https://i.pinimg.com/originals/8b/4e/88/8b4e8857a4f862cf1865a0f9de40de53.jpg",
          nome:
            " Estatísticas sobre grupos de Whatsapp Estatísticas sobre grupos de Whatsapp Estatísticas sobre grupos de Whatsapp",
          descricao:
            "re obscure Latin words, consectetur, from a Lorem Ipsum passage",
          data: "13/03/2020"
        },
        {
          id: 4,
          img:
            "https://image.cachorrogato.com.br/textimages/jogos-com-gatinhos.jpg",
          nome:
            " Estatísticas sobre grupos de Whatsapp Estatísticas sobre grupos de Whatsapp Estatísticas sobre grupos de Whatsapp",
          descricao:
            "re obscure Latin words, consectetur, from a Lorem Ipsum passage",
          data: "13/03/2020"
        },
        {
          id: 5,
          img:
            "https://1.bp.blogspot.com/-Wq2lcq9_a4I/Tc2lLWOkNVI/AAAAAAAABVM/Wao0rm-vWe4/s1600/gatinho-5755.jpg",
          nome:
            " Estatísticas sobre grupos de Whatsapp Estatísticas sobre grupos de Whatsapp Estatísticas sobre grupos de Whatsapp",
          descricao:
            "re obscure Latin words, consectetur, from a Lorem Ipsum passage",
          data: "13/03/2020"
        }
      ]
    };
  },
  mounted() {
    var macyProjetos = Macy({
      container: "#macy-container-projetos",
      trueOrder: false,
      waitForImages: false,
      margin: 24,
      columns: 4,
      breakAt: {
        940: 1
      }
    });
    //
    console.log("parametros");
    console.log(this.$route.query);
  },
  methods: {
    atualizarMacy: () => {
      // var macyProjetos = Macy({
      //   container: '#macy-container-projetos',
      //   trueOrder: false,
      //   waitForImages: false,
      //   margin: 24,
      //   columns: 4,
      //   breakAt: {
      //     940: 1,
      //   }
      // });
    }
  }
};
</script>


<style>
</style>
