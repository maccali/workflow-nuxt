<template>
  <div>
    <Header />
    <NavBar />
    <div class="container-fluid bg-dois">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <CarrouselCont />
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid bg-tres">
      <div class="container">
        <div class="row">
          <div class="col-12">
          PÁGINA INSTITUCIONAL
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "~/components/header/Header.vue";
import NavBar from "~/components/navbar/NavBar.vue";
import CarrouselCont from "~/components/carrousel/CarrouselCont.vue";
import Footer from "~/components/footer/Footer.vue";

export default {
  components: {
    Header,
    NavBar,
    CarrouselCont,
    Footer
  }
};
</script>


<style>
</style>
