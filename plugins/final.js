
if (process.browser) {
  window.onNuxtReady((app) => {

    // var macy = require('./macy');
    console.log('Nuxt ready!')

    // // var simple = document.getElementsByClassName('owl-carousel');


    // // console.log('fdsfs')
    // // console.log(simple);
    // // simple.owlCarousel('destroy'); // destroyed
    // // simple.owlCarousel(); // created

    // // OwlCarousel.owlCarousel('destroy')
    // // OwlCarousel.owlCarousel()


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

    // if (macyContainer) {
    //   macy.reInit();
    // }

    // if (macyContainerProjetos) {
    //   macyProjetos.reInit();
    // }
  })
}
