<template>
  <div>
    <div class="card-descritivo shadow-sm">
      <div class="icone shadow-lg">
        <i class="fas fa-calendar-day"></i>
      </div>
      <h2>Data de publicação</h2>
      <div class="texto">
        <p>19 de Março de 2014</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listaVersoes: Array,
  }
};
</script>
