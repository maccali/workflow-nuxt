<template>
  <div>
    <div class="card-descritivo shadow-sm">
      <div class="icone shadow-lg">
        <i class="fas fa-user"></i>
      </div>
      <h2>Autores</h2>
      <div class="texto">
        <div class="text-space">
          <ul>
            <li>Schorr, Marcos</li>
            <li>Loco, Luca</li>
            <li>Love, Chonas</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listaAutores: Array,
  }
};
</script>
