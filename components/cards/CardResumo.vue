<template>
  <div>
    <div class="card-descritivo shadow-sm">
      <div class="icone shadow-lg">
        <i class="fas fa-book-open"></i>
      </div>
      <h2>Resumo</h2>
      <div class="texto">
        <p>{{resumo}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resumo: String
  }
};
</script>
