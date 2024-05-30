document.addEventListener("DOMContentLoaded", function () {
  const baseImagens = {
    todas: [
      "cidade.jpg",
      "animal.webp",
      "natureza.jpg",
      "animal2.jpg",
      "cidade2.jpeg",
      "natureza2.jpeg",
      "animal3.webp",
      "animal4.jpg",
      "natureza3.jpeg",
      "cidade3.jpg",
    ],
    natureza: ["natureza.jpg", "natureza2.jpeg", "natureza3.jpeg"],
    cidade: ["cidade.jpg", "cidade2.jpeg", "cidade3.jpg"],
    animais: ["animal.webp", "animal2.jpg", "animal3.webp", "animal4.jpg"],
  };

  function carregaImagens(categoria) {
    //Selecionar elementos HTML com base em um seletor
    const galeria = document.querySelector("#galeria-imagens");
    galeria.innerHTML = ""; //limpar bloco, apaga tudo dentro
    const imagens = baseImagens[categoria];

    imagens.forEach((img) => {
      galeria.innerHTML += '<div class="imagem-item" > <img src="imagens/' + img + '" /> </div>';
    });
  }

  carregaImagens("todas");
function ordenaImagens(ordem){
const imagens= Array.from (document.querySelectorAll("#galeria-imagens .imagem-item"));

imagens.sort((a, b)=> {
console.log(a);
})

}
  //envento de clique
  document.body.addEventListener("click", function (event) {
    //acessa a lista de classes de onde clicou e procura pela classe botao-categoria
    if (event.target.classList.contains("botao-categoria")) {
      const categoria = event.target.dataset.categoria;

      //   alert(categoria);

      carregaImagens(categoria);
    }
    if (event.target.classList.contains("botao-ordenar")) {
      const ordem = event.target.dataset.ordem;
      ordenaImagens(ordem);
    }
  });
  
  
});
