//metodos

const animal = {
nome: "Bob",
latir: function(){
    console.log("Au au")
}

}
console.log(animal.nome);

animal.latir();


//aprofudando em metodos
const pessoa = {

    nome: "Sophia",

    getNome: function(){
        return this.nome
    },
     
    setNome: function(novoNome){
        this.nome = novoNome
    }


}

console.log(pessoa.nome)
console.log(pessoa.getNome())

pessoa.setNome("Kayky")

console.log(pessoa.getNome())


//Prototype
//fallback quando uma propriedade nao existe em um dado/objeto, ela é procurada no seu ancestral

const text = "asd"

console.log(Object.getPrototypeOf(text))// mostra inumeras origens

const bool = true;

console.log(Object.getPrototypeOf(bool))

const arr = [];
console.log(arr.length)
console.log(Object.getPrototypeOf(arr))

//mais sobre prototypes
const myObject = {
    a:"b"
}
console.log(Object.getPrototypeOf(myObject))

const mySecondObject = Object.create(myObject)
console.log(mySecondObject)

console.log(mySecondObject.a)
console.log(Object.getPrototypeOf(mySecondObject) == myObject)

//Classes basicas
const cachorro ={
    raca: null,
    patas:4
}
const pastorAlemao = Object.create(cachorro)
pastorAlemao.raca = "Pastor Alemao"

console.log(pastorAlemao)

console.log(pastorAlemao.patas)

const bulldog = Object.create(cachorro)
bulldog.raca = "Bulldog"

//funcao como classe

function criarCachorro(nome, raca){
    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca
    return cachorro
}
const lunna = criarCachorro("Lunna", "YorkShire")
console.log(lunna)

//funçoes como classe
function Cachorro(nome, raca){
    this.nome = nome
    this.raca = raca

}

const husky = new Cachorro("Ozzy", "Husky")

console.log(husky)

//metodos na funçaõ construtora
Cachorro.prototype.uivar = function(){
    console.log("AUUUUU!") // isso adiciona um metodo a funçao criada antigamete
}

husky.uivar()

//Classes ES6  NOVA FORMA DE CONSTRUIR 
class CachorroClasse{
    constructor(nome, raca){
        this.nome = nome
        this.raca= raca
    }
}
const blissa = new CachorroClasse("Blissa", "Podle")
console.log(blissa)

//nao podemos add propriedades diretamente as classes, isso precisa ser feito ao inicia-la ou via prototype;
//esses metodos podem utilizar o this

class Caminhao{
    constructor(eixos, cor){
        this.eixos = eixos
        this.cor = cor
    }
    descreverCaminhao(){
        console.log(`Este caminhao tem ${this.eixos} eixos e é da cor ${this.cor}`)
    }
}

const scania =new Caminhao(6, "Vermelho")
console.log(scania)
scania.descreverCaminhao()

const volvo = new Caminhao(7, "Preto")
console.log(volvo)
volvo.descreverCaminhao()// coloca a frase mesmo apos o constructor


class Blush{
    constructor(tom, numero){
        this.tom= tom
        this.numero = numero
    }
    descreverBlush(){
        console.log(`O tom do blush é ${this.tom} e sua numeração é ${this.numero}`)
    }
}

const marsala = new Blush("Marsala", 5)
console.log(marsala)
marsala.descreverBlush()


//override
class Humano{
    constructor(nome, idade){
        this.nome= nome
        this.idade = idade
    }
}
const matheus = new Humano("Maheus", 31)
console.log(matheus)

Humano.prototype.idade = "Nao definida"

console.log(matheus.idade)

console.log(Humano.prototype.idade)

//symbol é utilizado com classes assim é ossivel criar ua propriedade unica e imutavel que nao muda o valor

class Aviao {
    constructor(marca, turbinas){
        this.marca =marca
        this.turbinas = turbinas
    }
}
const asas = Symbol()
const pilotos = Symbol()// nao deixa o valor da info mudar ela fica imultavel
Aviao.prototype[asas] = 2;

Aviao.prototype[pilotos] = 3;

const boieng = new Aviao("Boieng" , 10)

console.log(boieng)

console.log(boieng[asas])

console.log(boieng[pilotos])

//getters e setters get é um metodo utilizado para exibir o valor de alguma propriedade
//set é utilizado para alternar o valor
class Post{
        constructor(titulo, descricao, tags){
        this.titulo =titulo
        this.descricao = descricao
        this.tags =tags
        }
        get exibirTitulo(){
            return `Voce esta lendo ${this.titulo}`
        }
}
