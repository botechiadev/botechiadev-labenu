// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  console.log('soma')
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  console.log('ask2Prompt')
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  console.log('retangulo')
  // implemente sua lógica aqui
  /*Escreva uma função que pede ao usuário a altura e a largura (nessa ordem) de um retângulo e imprime no console a área do retângulo.*/
  let altura = Number(prompt("Indique a Altura?"))
  let largura = Number(prompt("Indique a Largura?"))
  const area = (altura * largura)
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  /*Escreva uma função que pede ao usuário o ano atual e seu ano de nascimento e imprima no console sua idade.*/
  let anoAtual = Number(prompt('Ano Atual?'))
  let anoNascimento = Number(prompt('Ano de nacimento'))
  const idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  /*Escreva uma função que recebe o peso em kg e a altura em metros de uma pessoa e retorna o seu IMC (Índice de Massa Corpórea).*/
    // Calcular o IMC
    const imc = peso / (altura * altura);
    
    // Arredondar o resultado para uma casa decimal
    return imc.toFixed(1);
  }


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
    const NOME = prompt('Qual seu nome')
    const IDADE = prompt('Qual e sua idade')
    const EMAIL = prompt('Qual seu E-MAIL') 
    const msg =`Meu nome é ${NOME}, tenho ${Number(IDADE)} anos, e o meu email é ${EMAIL}.`
    console.log(msg)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  /*Escreva uma função que pergunta ao usuário suas três cores favoritas e imprime no console um array que contenha essas três cores.*/
  const cores = []
  for(let i=0 ; i<3 ; i++){
    let pg = prompt(`favorita cor ${i}`)

    cores.push(pg)
  };
  console.log(cores)
}



// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
    return Math.ceil(custo / valorIngresso);
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  if (array.length < 2) {
    return array;
  }
  
  let primeiro = array[0];
  let ultimo = array[array.length - 1];
  
  array[0] = ultimo;
  array[array.length - 1] = primeiro;
  
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual=Number(prompt("Ano Atual"))
  const anoNascimento=Number(prompt("Ano Atual"))
  const anoEmissaoRG=Number(prompt("Ano Atual"))

  const idade = anoAtual - anoNascimento;
  const tempoDesdeEmissao = anoAtual - anoEmissaoRG;

  if ((idade <= 20 && tempoDesdeEmissao >= 5) ||
      (idade > 20 && idade <= 50 && tempoDesdeEmissao >= 10) ||
      (idade > 50 && tempoDesdeEmissao >= 15)) {
    console.log(true)
  } else {
    console.log(false)
  }
}
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  if ((ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
}
// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const resposta1 = prompt("Você tem mais de 18 anos? (sim/não)");
  const resposta2 = prompt("Você possui ensino médio completo? (sim/não)");
  const resposta3 = prompt("Você possui disponibilidade exclusiva durante os horários do curso? (sim/não)");

  if (resposta1.toLowerCase() === "sim" &&
      resposta2.toLowerCase() === "sim" &&
      resposta3.toLowerCase() === "sim") {
    console.log(true);
  } else {
    console.log(false);
  }
}