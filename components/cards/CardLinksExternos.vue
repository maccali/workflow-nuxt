<template>
  <div>
    <div class="card-descritivo shadow-sm">
      <div class="icone shadow-lg">
        <i class="fas fa-external-link-square-alt"></i>
      </div>
      <h2>Links externos</h2>
      <div class="texto">
        <div class="text-space">
          <div>
            <a class="card-archive" target="_blank" href="https://github.com/maccali">
              <div class="icone-archive">
                <i class="fab fa-github"></i>
              </div>
              <p>GitHub</p>
            </a>
          </div>
          <div>
            <a
              class="card-archive"
              target="_blank"
              href="https://www.univates.br/bdu/bitstream/10737/365/1/Marcos%20Schorr.pdf"
            >
              <div class="icone-archive">
                <i class="fab fa-linkedin"></i>
              </div>
              <p>LinkedIn</p>
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
    listaLinks: Array
  }
};
</script>
