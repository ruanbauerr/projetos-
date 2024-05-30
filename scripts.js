document.addEventListener("DOMContentLoaded", function () {
const baseImagens = {
    todas: ['cidade.jpg', 'animal.jpg', 'natureza.jpg'],
    natureza: ['natureza.jpg'],
    cidade: ['cidade.jpg'],
    animais: ['animal.jpg'],


}

function carregaImagens(){
    //Selecionar elementos HTML com base em um seletor 
    const galeria = document.querySelector("#galeria-imagens");

    const imagens = baseImagens['todas']

    imagens.forEach(img => { 
        console.log(img);
        galeria.innerHTML += '<div> <img src="imagens/' + img + '" /> </div>';
    })

}

    carregaImagens();

    //envento de clique 
document.body.addEventListener('click', function(event){
   //acessa a lista de classes de onde clicou e procura pela classe botao-categoria
    if(event.target.classList.contains('botao-categoria')){
        alert(123);
        console.log (event)
    }

 })


});
