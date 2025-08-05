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