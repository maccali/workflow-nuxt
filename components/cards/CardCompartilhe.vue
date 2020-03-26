<template>
  <div>
    <div class="card-descritivo shadow-sm">
      <div class="icone shadow-lg">
        <i class="fas fa-share"></i>
      </div>
      <h2>Compartilhe</h2>
      <div class="texto">
        <div class="text-space">
          <div class="medias-sociais">
            <a class="card-archive" target="_blank" href="https://github.com/maccali">
              <div class="icone-archive">
                <i class="fas fa-share-alt"></i>
              </div>
            </a>
            <a class="card-archive" target="_blank" href="https://github.com/maccali">
              <div class="icone-archive">
                <i class="fab fa-linkedin"></i>
              </div>
            </a>
            <a class="card-archive" target="_blank" href="https://github.com/maccali">
              <div class="icone-archive">
                <i class="fab fa-facebook"></i>
              </div>
            </a>
            <a class="card-archive" target="_blank" href="https://github.com/maccali">
              <div class="icone-archive">
                <i class="fab fa-twitter"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listaLinksCompartilhados: Array,
  }
};
</script>
