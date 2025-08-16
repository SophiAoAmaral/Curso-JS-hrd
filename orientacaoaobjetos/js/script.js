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