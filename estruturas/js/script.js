// VARIAVEIS
let nome = 'Sophia';
console.log(nome)

console.log(`Ola ${nome}`)

nome = "Sophia Oliveira"
console.log(`Ola ${nome}`)

const idade = 19// const nao mudam


let a= 10, 
    b=21, 
    c=30;

console.log(a, b, c)

const nomeCompleto= 'Sophia Oliveira'
const nomecompleto = 'Kayky Vinicius'
console.log(nomeCompleto, nomecompleto)// nao da erro qpq as variaveis tem nomes diferentes pois o js identific a



// prompt recebe o dado de uma var const x = prompt()
//const age = prompt('digite sua idade')// quadro na tela
//console.log(`Sua idade e ${age}`);

//o alert mostra um alert na tela
//const z = 10
//alert(`${z}`)

//MATH--
//math e um objeto que possui funcoes para fins matematicos
//max= encontra o maior valor
// floor = arredinda para baixo o numero
console.log(Math.max(1, 3, 10));
console.log(Math.floor(4.14));
console.log(Math.ceil(2.12));

//CONSOLE
//CONSOLE TAMBEM E UM OBEJTO ELE MOSTRA UMA MENSAGEM NO CONSOLE
console.log("teste")

console.error("404")//APARECE UM ERRO NO CONSOLE
console.warn ('AVISO')

//ESTRUTURAS DE CONTROLE
// e se a condicao for verdadeira 

//if
let m = 2;

if( m > 10){
    console.log('E MAIOR')
}else{
    console.log('E menor')
}
 
let user = "k"

if(user === "SOPHIA"){
    console.log('SEU NOME E SOPHIA')
}else{
    console.log('SEU NOME E DIFERENTE')
}