<template>
  <div>
    {{oi}}
    <button v-on:click="change()">kkk</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      oi: "??"
    };
  },
  asyncData(context) {
    return {
      oi: "Olá"
    };
  },

  methods: {
    change: function() {
      this.oi = "dsfdfa"
    }
  }
};
</script>


<style>
</style>
