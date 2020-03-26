<template>
  <div>
    <div class="card-descritivo shadow-sm">
      <div class="icone shadow-lg">
        <i class="fas fa-book-open"></i>
      </div>
      <h2>Arquivos</h2>
      <div class="texto">
        <div class="text-space">
          <div>
            <a
              class="card-archive"
              target="_blank"
              href="https://www.univates.br/bdu/bitstream/10737/365/1/Marcos%20Schorr.pdf"
            >
              <div class="icone-archive">
                <i class="fas fa-file-pdf"></i>
              </div>
              <p>Marcos Schorr.pdf</p>
            </a>
          </div>
          <div>
            <a
              class="card-archive"
              target="_blank"
              href="https://www.univates.br/bdu/bitstream/10737/365/1/Marcos%20Schorr.pdf"
            >
              <div class="icone-archive">
                <i class="fas fa-file-pdf"></i>
              </div>
              <p>Marcos Schorr.pdf</p>
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
    listaArquivos: Array
  }
};
</script>
