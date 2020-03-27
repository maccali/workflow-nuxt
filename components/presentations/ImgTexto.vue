<template>
  <div>
    <div class="container-fluid bg-tres">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="sub-titulo">
              <h3>{{titulo}}</h3>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="img-box-pre">
              <img v-bind:src="img" alt />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="text-box-pre">
              <p>{{texto}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titulo: String,
    texto: String,
    img: String
  }
};
</script>
