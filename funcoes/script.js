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
funcaoComParametro('Imprimindo algo')