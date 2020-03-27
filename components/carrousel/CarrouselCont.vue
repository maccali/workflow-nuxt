<template>
  <div>
    <carousel
      :margin="10"
      :loop="true"
      :autoWidth="true"
      :items="1"
      :center="true"
      :lazyLoad="true"
      :dots="false"
      :autoplay="true"
      :autoplayTimeout="2000"
      :autoplayHoverPause="true"
      :nav="false"
    >
      <div v-for="imglink in listaImgLinks" :key="imglink.link" class="item">
        <img v-bind:src="imglink.link" alt />
      </div>
    </carousel>
  </div>
</template>


<script>
export default {
  props: {
    listaImgLinks: Array
  }
};
</script>
