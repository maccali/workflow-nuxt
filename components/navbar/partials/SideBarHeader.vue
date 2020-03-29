<template>
  <div>
    <div>
      <div class="menu-header">
        <span class="aba-titulo">{{titulo}}</span>
        <button class="btn btn-icon-menu" type="button" v-on:click="$store.commit('manipulaMenu')">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      required: true
    }
  },
};
</script>
