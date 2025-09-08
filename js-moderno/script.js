// 1 -var let e const

var x =10;
var y = 2;

if(y>10){
    var x = 12
}// com var eel apaga o valor anterior


let a = 10;
let b = 12;
if(b>21){
    let a = 21
}
//nao sobresai o outro valor se der console.log aparecera o valor de dentro do if e o de fora



//arrow functions
const sum = function(a,b){
    return a + b 
}


//com arrow

const Arrowsum = (a, b) => a+b

console.log(sum(5,5))
console.log(Arrowsum(5,5));

const greeting = (name) =>{


    if(name) {
        return `Hello ${name}`
    }else{
        return `Hello`
    }
}
console.log(greeting("Sophia"));

console.log(greeting());

const user = {
    name :"Theo", 
    sayUserName(){
        setTimeout(function(){
            console.log(this);
            console.log(`Username:${this.name}`)
        },1000)
    },
    sayUserNameArrow(){
        setTimeout(()=>{
            console.log(this);
            console.log(`Username:${this.name}`)

        }, 2000)
    }
}