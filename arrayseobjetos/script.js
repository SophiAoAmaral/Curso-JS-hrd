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

//Mutability isso acontece qnd criamos um obj apartir de outro
//const b = a
//console.log(a)
//console.log(b)
//console.log(a===b)

//a.age = 31;

//onsole.log(a)
//console.log(b)

//loops em arrays percorrer arrays atraves de estruturas de repeticao
const users = ["Sophia", "Kayky", "Matheus", "Miguel"]

for(let i = 0;i <users.length;i++){
    console.log(`Listando os usuarios: ${users[i]}`);// esse i faz percorrer o index do elemento
}

//metodo array:push e pop
//com o push add um item ao fim do array
//com o pop temos a remocao de um elemento no fim do array
const array = ["A", "B", "C"];
array.push("D");//adicionou
console.log(array);
console.log(array.length);
array.pop();
console.log(array);

const itemRemovido = array.pop();//vai guardar o item removido
console.log(itemRemovido);
console.log(array);
//shit e unshift
//shit remove o primeiro elementodo array
//unshift adiciona itens ao inicio do array

const letters = ["Daniel", "Joao", "Eduardo", "Camila"]

const letter = letters.shift();

console.log(letter)

console.log(letters)

//indexOf e lastIndexOf
//indexOf nos permite encontrar o indice de um elemento, que passamos como argumento para o metodo
//lastIndexOf e utilizado quandoo ha repeticoes de elementos e precisamos do indice da outra ocorrencia

