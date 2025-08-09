//Arrys
const lista = [1, 2, 3, 4, 5]

console.log(lista)

const itensc= ["Sophia", true, 2, 3, 12, []]

console.log(itensc)

//mais sobre arrays
const arr= ["a", "b", "c"]

console.log(arr[2])

//propriedades
const numbers = [5, 3, 4]

console.log(numbers.length)

const myName = "Sophia"
console.log(myName.length);

//metodos sao como funcoes acessamos com notacao de ponto e utilizamos () para invocar
const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers)

const text = "Algum texto"

console.log(text.toLocaleUpperCase())
console.log(text.indexOf("l"))

//objetos

const person= {
    name: "Sophia",
    age:19,
    job : "Programador"

}
console.log(person.name)
console.log(person.age)
console.log(person.name.length)
console.log(typeof person)

//para adicionar uma nova propriedade
const car ={
    engine:2.0,
    marca:'VW',
    model :"Tiguan",
    km:20000,
}

console.log(car)
car.doors = 4; // cria uma nova


delete car.km; //exclui o km

//Os arrays são utilizados como listas de itens,
//Já os objetos são utilizados para descrever um item



//-7 mais sobre objetos
const obj ={
    a:"teste",
    b:true,
}
console.log(obj instanceof Object)

const obj2 ={
    c:[]
}

Object.assign(obj2, obj)//pega os valores da outra propriedade
console.log(obj)

//podemos verfificar as propriedades de um objeto pelo metodo keys
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))