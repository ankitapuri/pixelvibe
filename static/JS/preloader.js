    //preloader
    let foldingCube = document.querySelector('.folding-cube');
    window.addEventListener('load', function () {
      setTimeout(function(){ foldingCube.parentElement.removeChild(foldingCube);}, 3000);  
    });
    