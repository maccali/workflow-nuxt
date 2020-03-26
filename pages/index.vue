<template>
  <div>
    <Header />
    <NavBar />
    <div class="container-fluid bg-dois">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <Carrousel />
          </div>
        </div>
      </div>
    </div>Institucional
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/header/Header.vue";
import NavBar from "~/components/navbar/NavBar.vue";
import Carrousel from "~/components/carrousel/Carrousel.vue";
import Footer from "~/components/footer/Footer.vue";

export default {
  components: {
    Header,
    NavBar,
    Carrousel,
    Footer
  }
};
</script>
<style>
</style>
