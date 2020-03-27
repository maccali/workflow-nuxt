var macyContainer = document.getElementById("macy-container");
var macyContainerProjetos = document.getElementById("macy-container-projetos");

if (macyContainer) {
  var macy = Macy({
    container: '#macy-container',
    trueOrder: false,
    waitForImages: false,
    margin: 24,
    columns: 2,
    breakAt: {
      940: 1,
    }
  });
}

if (macyContainerProjetos) {
  var macyProjetos = Macy({
    container: '#macy-container-projetos',
    trueOrder: false,
    waitForImages: false,
    margin: 24,
    columns: 3,
    breakAt: {
      940: 1,
    }
  });
}
