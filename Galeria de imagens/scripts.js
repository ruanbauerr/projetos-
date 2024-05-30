document.addEventListener("DOMContentLoaded", function () {
  const baseImagens = {
    todas: [
      "cidade.jpg",
      "animal.jpg",
      "natureza.jpg",
      "animal2.jpeg",
      "cidade2.webp",
      "natureza2.jpg",
      "animal3.webp",
      "animal4.webp",
      "natureza3.jpg",
      "cidade3.webp",
     
    ],
    natureza: ["natureza.jpg", "natureza2.jpg", "natureza3.jpg"],
    cidade: ["cidade.jpg", "cidade2.webp", "cidade3.webp"],
    animais: ["animal.jpg", "animal2.jpeg", "animal3.webp", "animal4.webp"],
    
  };

  function carregaImagens(categoria) {
    //Selecionar elementos HTML com base em um seletor
    const galeria = document.querySelector("#galeria-imagens");
    galeria.innerHTML = ""; //limpar bloco, apaga tudo dentro
    const imagens = baseImagens[categoria];

    imagens.forEach((img) => {
      console.log(img);
      galeria.innerHTML += '<div> <img src="imagens/' + img + '" /> </div>';
    });
  }

  carregaImagens("todas");

  //envento de clique
  document.body.addEventListener("click", function (event) {
    //acessa a lista de classes de onde clicou e procura pela classe botao-categoria
    if (event.target.classList.contains("botao-categoria")) {
      const categoria = event.target.dataset.categoria;

      //   alert(categoria);

      carregaImagens(categoria);
    }
  });
});
