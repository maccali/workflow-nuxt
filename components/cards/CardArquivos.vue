<template>
  <div>
    <div class="card-descritivo shadow-sm">
      <div class="icone shadow-lg">
        <i class="fas fa-book-open"></i>
      </div>
      <h2>Arquivos</h2>
      <div class="texto">
        <div class="text-space">
          <div v-for="arquivo in listaArquivos" :key="arquivo.id">
            <a
              class="card-archive"
              target="_blank"
               v-bind:href="arquivo.link"
            >
              <div class="icone-archive">
                <i class="fas fa-file-pdf"></i>
              </div>
              <p>{{arquivo.nome}}</p>
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listaArquivos: Array
  }
};
</script>
