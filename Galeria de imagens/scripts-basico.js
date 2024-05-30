//o vento DOM é acionado quando o HTML foi completamente carregado

document.addEventListener("DOMContentLoaded", function () {
  //alert("1234567890");

  //tipos de dados
  //string: sequencia de caracter
  //Number: numeros inteiros ou pontos flutuantes (10.4)
  //boolean: retorna dois valores, true ou false
  //object: estrutura de dados que pode armazenar multiplos valores
  //NULL: quando esta vazio
  //array: objeto especial ordenado
  //function: bloco de codigo reutilizavel

  //CONST: é usado para declarar uma variavel cujo valor é permanente
  const test = 50;

  //LET: é usado para declarar variaveis que os valores podem ser retribuidos

  let C = 0;
  C = 10;
  console.log(C);

  const notaMedia = 6;
  if (notaMedia >= 6) {
    //aqui vai o código
    // alert("aluno aprovado");
  } else if (notaMedia >= 4 && notaMedia < 6) {
    // alert("aluno quase pasou")
  } else {
    //aqui vai o codigo
    // alert("aluno reprovado");
  }

  //----------operadores-----------

  // = sinal de atribuição
  // == sinal de comparação
  // === verifica se os dois são iguais e tem o mesmo tipo de dados
  // != compara se é diferente
  // !== compara se é estritamente diferente
  // >maior
  // < menor

  const numero = "6";
  if (numero == 6) {
    // alert("é igual");
  } else {
    // alert("o tipo de dado é diferente ");
  }

  const professor = "João";
  if (professor == "Lucas") {
    console.log("sim é o Lucas");
  } else {
    console.log("não é o Lucas");
  }

  //-------------------------/----------------------

  //Funções são blocos de codigo que podem ser chamados e reutilizados
  //Dentro do parentes da função vai os parâmetros

  function primeiraFuncao(parametro, segundoParametro) {
    return parametro + ", " + segundoParametro; //variaveis concatecadas (+)
  }
  const parametro = "Essa é uma função com parâmetro";
  const segundoParametro = "agora com dois parametros ";

  console.log(primeiraFuncao(parametro, segundoParametro));

  //-----------------------//---------------

  //arrays em javascript são estruturas de dados que permitem armazenar uma coleção ordenada de elementos.

  let primeiroArray = ["pombo", "ruan", "lucas"];
  console.log(primeiroArray[2]); //número 2 para percorrer o array
  //-----------------/-----------------

  //Os objetos são coleções NÃo ORDENADAS de pares de chave-valor, onde cada valor é associado a uma chave única

  let pessoa = {
    nome: "maria",
    idade: "22",
    profissao: "dona da boca",
  };
  console.log(pessoa["profissao"]);
  //--------------/------------

  const numeros = ["A", "B", "C", "D"];

  numeros.forEach((num) => {
    console.log(num);
  });
});
