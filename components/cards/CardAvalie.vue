<template>
  <div>
    <div class="card-descritivo shadow-sm">
      <div class="icone shadow-lg">
        <i class="fas fa-star"></i>
      </div>
      <h2>Avalie</h2>
      <div class="texto">
        <p>Avaliação atual:</p>
        <div class="text-space">
          <h3>4,7</h3>
        </div>
        <p>Avalie você também:</p>

        <div class="text-space">
          <div id="rating">
            <div class="rate-scroll" v-for="n in 5">
              <span class="pre-stars" v-if="n > nota">
                <div class="stars disable">
                  <a v-on:click="manipulaNota(n)">
                    <i class="fas fa-star"></i>
                  </a>
                </div>
              </span>

              <span class="pre-stars" v-else>
                <div class="stars marks">
                  <a v-on:click="manipulaNota(n)">
                    <i class="fas fa-star"></i>
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nota: Number,
  }
};
</script>
