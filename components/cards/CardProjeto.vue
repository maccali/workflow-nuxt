<template>
  <div>
    <a href="./detalhesProjeto.html" class="card-pesquisa shadow-sm">
      <div class="img">
        <img v-bind:src="img" alt />
      </div>
      <div class="text-cont">
        <div class="nome">
          <p>
            {{nome}}
          </p>
        </div>
        <div class="descricao">
          <p>
            {{descricao}}
          </p>
        </div>
        <div class="data">
          <p>
            {{data}}
          </p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    nome: String,
    descricao: String,
    data: String
  }
};
</script>


<style>
</style>
