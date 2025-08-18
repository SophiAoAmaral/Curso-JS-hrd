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

