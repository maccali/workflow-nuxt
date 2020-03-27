<template>
  <div>
    <!-- <client-only> -->
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
        <div class="item">
          <img
            src="https://picsum.photos/250/450"
            alt
          />
        </div>
        <div class="item">
          <img
            src="https://picsum.photos/200/700"
            alt
          />
        </div>
        <div class="item">
          <img
            src="https://picsum.photos/900/300"
            alt
          />
        </div>
        <div class="item">
          <img
            src="https://picsum.photos/400/375"
            alt
          />
        </div>
        <div class="item">
          <img
            src="https://picsum.photos/300/900"
            alt
          />
        </div>
        <div class="item">
          <img src="https://picsum.photos/200/355" alt />
        </div>
      </carousel>
    <!-- </client-only> -->
  </div>
</template>


<script>

</script>
