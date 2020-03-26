<template>
  <div>
    <div class="card-descritivo shadow-sm">
      <div class="icone shadow-lg">
        <i class="fas fa-key"></i>
      </div>
      <h2>Palavras-chave</h2>
      <div class="texto">
        <span class="badge">Planejamento da produção</span>
        <span class="badge">Sequenciamento da produção</span>
        <span class="badge">Otimização da produção</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listaChaves: Array,
  }
};
</script>
