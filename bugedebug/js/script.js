//scrict é um modo de desenvolvimento que deixa o JS mais rigoroso na hora de programar deve ser decaradono topo do arquivo ou de funçoes 
//bibliotecas famosas sao todas feitas em strit

"use strict" //vai mostrar o erro


//opa="texto";
const opa ="texto"
const undefided = 10 //mostra o erro pq é do javascrit


//O METODO LOG DOS CONSOLES É MUITO UTIL
let a = 1
let b=2
if(a==1){
    a=b+2
}

console.log(a)

for(let i=0; i<b;i++){
    a = a+2
    console.log(a)
}
if(a>5){
    a=25
}

//podemos verificar pelo console.log

//debugger é uma instrução que nos permite o debug no console do navegador 

let c =1
let d= 2
if(c==1){
    c =d+1
}

//debugger;// se passa o mouse no console ele mostra o valor da var 
for (let i=0; i<d;i++){
    c= c+2
}

//tratamento de dado por funçao sempre que recebe um dado de input deve verificar e o tratamento dos dados inseridos no unput

function checkNumber(n){

    const result = Number(n) //converte todos os dados para number

    if(Number.isNaN(result)){
        console.log("Valor incorreto")
        return
    }else{
    console.log("valor correto!")
    return result
    }
}
checkNumber(3)
checkNumber("")
checkNumber({})
checkNumber(a)

//exceptions sao erros que nos geramos no programa

let x= 10

if(x!= 11){
   // throw new Error("o valor de x nao pode ser diferente de 11!")
}//cria um erro no console o erro


//try catch tentamos executar algo em try e se um erro ocorrer ele cai no bloco do catch

try{
    const soma = x+ y
} catch(error){
    console.log(`Erro no programa: ${error}`)
}

//o finally é uma instrução que vai depois do blco try catch ela e´executada independendte de haver erro ou nao em try