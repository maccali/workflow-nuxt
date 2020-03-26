<template>
  <div>
    <div class="card-descritivo shadow-sm">
      <div class="icone shadow-lg">
        <i class="fas fa-heading"></i>
      </div>
      <h2>Título</h2>
      <div class="texto">
        <p>Redução de setup através do sequenciamento de impressão de uma empresa de latas</p>
        <!-- <p>{{titulo}}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titulo: String
  }
};
</script>
