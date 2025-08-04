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

 const loggedIn = false

 if(loggedIn){
    console.log('esta autenticado')
 }else{
    console.log('Nao esta autenticado')
 }

 const q = 10
 const w = 15

 if(q> 5 && w >20){
    console.log('Numeros mais autos')
 }else{
    console.log('Os numeros nao sao maiores')
 }

 //else if adiciona mais validacoes e cria varias validacoes

 if(1>2){
    console.log('teste')
 } else if (2>3){
    console.log('Teste 2')
 }else if(3>4){
    console.log('teste 3')
 }

 const Username = 'Sophia'
 const userAge = 19
 if(Username === 'Jose'){
    console.log('Bem vendo Jose')
 }else if (Username==='Sophia' && userAge === 31){
    console.log('Ola Sophia voce tem 19 Anos')
 }else{
    console.log('Nenhuma condicao aceita')
 }

 //estruturas de repeticao: for e while
 //while faz uma acao ate que uma condicao seja atingida ate que nao seja mais verdadeira
  
 let p = 0

 while(p <= 5){
    console.log(`Repetindo ${p}`)
    p++
 }
//loop infinito

let x = 10

//while(x>5){//
    //console.log('')




//do while
//primeiro ele executa dps ele ve a condicao

let o = 10
do {
    console.log(`Valor de o: ${o}`)
        o--;
} while(o>1);

//for e a estrutura mais utilzada condensa toda logica em uma linha 
//na declaracao coloca a incrementacao, condicao final e progressao nessa ordem
for (let t = 0; t<10; t++){
    console.log('Repetindo algo...')
}

let r = 10

for(r; r>0; r=r-1 ){
    console.log(`O r esta diminuindo: ${r}`)
}

//identecao menor visualizacao de conteudo

for (let i = 0; i < 10; i++) {
    if (i * 2 > 10) {
        console.log(`Maior que 10! ${i}`)
    } else {
        if (i / 2 === 0) {
            console.log('deu 0')
        }
    }
}

//Forcando a saida de um lopping BREAK
for(let g = 20; g>10; g--){
    console.log(`O valor de g:${g}`);
    if(g===15){
        console.log(`o g e 15!`)
        break
    }
}
//pulando uma execucao de loop
//continue pode pular uma ou mais execucoes de loop

for(let s= 0; s<10; s++){
    //operador de resto = %
    if(s % 2 === 0){
      console.log("Numero par!")
      continue;
    }
    console.log(s)
}

//ESTRUTURA SWITH pode ser utilizado para a orgaizacao de if/else
//cada if seria um case e cada um deve ter break
//e o default e como se fosse o else que caso nenhum case fosse executado ele sera
const job = 'Advogado'

switch(job){
    case 'Programador':
        console.log('Voce e programador')
        break
    case 'Advogado':
        console.log('Voce e um Advogado')
        break
    case 'Engenheiro':
        console.log('Voce e um engenheiro')
        break
    default:
        console.log('Profissao nao encontrada')
}//switch errados nao possuem os BREAKS




