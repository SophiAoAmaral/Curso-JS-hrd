// // 1 -var let e const

// var x =10;
// var y = 2;

// if(y>10){
//     var x = 12
// }// com var eel apaga o valor anterior


// let a = 10;
// let b = 12;
// if(b>21){
//     let a = 21
// }
// //nao sobresai o outro valor se der console.log aparecera o valor de dentro do if e o de fora



// //arrow functions
// const sum = function(a,b){
//     return a + b 
// }


// //com arrow

// const Arrowsum = (a, b) => a+b

// console.log(sum(5,5))
// console.log(Arrowsum(5,5));

// const greeting = (name) =>{


//     if(name) {
//         return `Hello ${name}`
//     }else{
//         return `Hello`
//     }
// }
// console.log(greeting("Sophia"));

// console.log(greeting());

// const user = {
//     name :"Theo", 
//     sayUserName(){
//         setTimeout(function(){
//             console.log(this);
//             console.log(`Username:${this.name}`)
//         },1000)
//     },
//     sayUserNameArrow(){
//         setTimeout(()=>{
//             console.log(this);
//             console.log(`Username:${this.name}`)

//         }, 2000)
//     }
// }

// //filter

// const arr = [1, 2, 3, 4, 5, 6]


// const highNumber = arr.filter((n) =>{

//     if(n>3){{
//         return n 
//     }}
// })

// console.log(highNumber)



// const users = [
//     {name:"Sophia", available:true},
//     {name:"Maria", available:false},
//     {name:"Joao", available:true},
//     {name:"Camila", available:false},
//     {name:"Jessica", available:true}
// ]

// const avalibleUsers = users.filter((user)=> user.available)

// console.log(avalibleUsers)


//map

const products =[
    {name:"Camisa", price:10.99, category:"Roupas"},
    {name:"Fogao", price:499, category:"Eletro"},
    {name:"Chaleira Eleitrica", price:109 ,category:"Eletro"},
    {name:"Calça Jeans", price:32.99, category:"Roupas"},
 
]

products.map((product)=>{
    if(product.category === "Roupas"){
       product.onSale = true 
    }
})

console.log(products)


//template literals


const userName = 'Sophia'
const idade = 19;

console.log(`O nome do usuario e´${userName} e sua idade é ${idade}`)


//destruction 

const fruits = ["Maça", "Mamao", "laranja"]

const [f1, f2, f3] = fruits
console.log(f1)

const prooductDetails={
    name:"Mouse",
    price:39.99,
    category:"Periferico",
    color:"Cinza"
}

const {name:productName, price, category, color}=prooductDetails;


console.log(`O nome do produto é ${productName}, ele custa ${price} e é da cor ${color}`)


//spread operator

const a1=[1, 2, 3]
const a2 = [4, 5, 6]

const a3 =[...a1, ...a2];
console.log(a3);

const a4 =[0, ...a3, 7]

console.log(a4)


const carName = {name:"Gol"};
const carBrand = {brand:"VW"};
const otherInfos = {km:122222, price:49000};

const car = {...carName, ...carBrand, ...otherInfos};
console.log(car)


//classes

class Product{
    constructor(name, price){
        this.name= name
        this.price = price
    }
    productWitdhDisconyt(discount){
        return this.price *((100-discount)/100);
    }
}

const  shirt = new Product("Camisa gola V", 20);
console.log(shirt)
console.log(shirt.productWitdhDisconyt(10))


//herança