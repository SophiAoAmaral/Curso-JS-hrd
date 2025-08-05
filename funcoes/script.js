//Criando uma funçao

function minhaFuncao(){
    console.log('Testando');
};

minhaFuncao()

const minhaFuncaoEmVariavel = function(){
    console.log('Funçao em variavel');
};

minhaFuncaoEmVariavel();

function funcaoComParametro(txt){
 console.log(`Impriminto: ${txt}`) 
}

funcaoComParametro('imprimindo alguma coisa');
funcaoComParametro('Imprimindo algo');


//retornando valores nas funçoes return
const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1, n2){
    return n1+ n2
}
const resultado = soma(a, b)

console.log(resultado)
console.log(soma(c,a))

// escopo da function

let y = 10

function testandoEscopo(){
    let y = 20
    console.log(`Y dentro da função é ${y}`)
}
testandoEscopo()

console.log(`Y fora da função é ${y}`)
//se eu tiver duas var com o nome igual e uma estiver sendo criada dentro da function a de fora nao interfere e assim por diante



//escopo alinhado
let m = 10
function escopoAninhado(){
    let m = 20
    if(true){

        let m = 30

    if (true){
        let m  = 40
        
        console.log(m)
    }
    console.log(m)
}
console.log(m)
}
escopoAninhado()

console.log(m)

//arrow function e uma funcao anonima entao precisa estar dentro de uma variavel

const testArrow = () => {
    console.log("Esta é uma Arrow Function")
}
testArrow();

const parOuImpar = (n) =>{
    if(n%2 === 0){
        console.log('Par');
        return
    }
    console.log('Impar')
}
parOuImpar(10)
parOuImpar(5)

//sintaxe mais simples da arrow function

const raizQuadrada = (x) =>{
    return x*x;
}
console.log(raizQuadrada(4))

const raizQuadrada2 = (x) => x*x

console.log(raizQuadrada2(5))
console.log(raizQuadrada2(3))

const helloWord = () => console.log('Hello Word')

console.log(helloWord());
helloWord()

//parametro opcional

const multiplication = function(m,n){
    if(n === undefined){
        return m * 2
    } else{
        m * n
    }
}
console.log(multiplication(5))
console.log(multiplication(4,4))

  //const greeting = (name) =>{
   // if(!name){
       // console.log("Ola")
       // return
   // }
    //console.log(`Ola ${name}`)
//}
//greeting()
//greeting("Sophia")

const passandoUmNome = (nome) =>{
    console.log(`Ola ${nome}`)
}

passandoUmNome("SASA")

//Argumentos com valor default
const customGreeting = (name, greet = "ola") =>{
    return `${greet}, ${name}`
};
console.log(customGreeting("Sophia"));
console.log(customGreeting("Joao", "Bom dia"))

const repeatText =(text, repeat = 2) =>{
    for(let i = 0; i<repeat;i++)
        console.log(text)
}
repeatText("Agora reprete 5 vezes", 5)

//TESTE
 const testAula = (pessoa, idade= 10) =>{
    return `${idade} ${pessoa}`
 }

 console.log(testAula(" anos essa e sua idade"))
 console.log(testAula("25", "Sophia"))