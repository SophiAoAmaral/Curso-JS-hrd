//setTimeout
//essa requisiçaõ demora os segunso que eu por
console.log("Ainda nao executou")

setTimeout(function(){
    console.log("Requisição assincrona")

},2000)//em milesegundos 2000=2seg


console.log("Ainda nao executou")


//setInterval
//ele nao para a execução apos ser executado pela primeira vez podendo travar o computador do usuario
console.log("Ainda nao começou")

setInterval(function(){
    console.log("Intervalo assincrona")
},3000)


console.log("Ainda nao começou 2")


//Promise

const promessa = Promise.resolve(5+5)//ele vai tentar executar o codico que esta dentro das ()

console.log("Algum codigo")

promessa.then((value =>{
    console.log(`A soma é ${value}`)
    return value;
}))


//falha na promisse

Promise.resolve(4 *"asd")
.then((n) =>{
    if(Number.isNaN(n)){
        throw new Error("valores invalidos")
    }
})
.catch((err) = > console.log(`Um erro ocorreu:${err}`))


//rejeiçaõ

function checkNumber(n){
    return new Promise.((resolve, reject ) =>{

        if(n>10){
            resolve(`O numero é maior que 10`)
        }else{
            reject(new Error("Numero muito baixo"))
        }


    })
}

const a = checkNumber(20)

const b = checkNumber(10)


a.then((v) => console.log(`O resultado é ${v}
`)).catch((err) => console.log(`Um erro ocorreu: ${err}`))
b.then((v) => console.log(`O resultado é ${v}
`)).catch((err) => console.log(`Um erro ocorreu: ${err}`))

//resolvendo varias Promises

const p1 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve(10)
    }, 1000)
})
const p2 =  new Promise.resolve(10+10)
const p3 =  new Promise(resolve, (reject)=>{
    if(30>10){
        resolve(30)
    }else{
        reject("erro")
    }
});
Promise.all([p1, p2,p3]).then((values)=>console.log(values))


//async functions sao fuçoes que retornam Promises

async function  somarComDelay(a, b){
    return a + b;
}
somarComDelay(2,4).then((value) =>{
    console.log(`O valor da soma é ${value}`)
})


//await
//serve para aguardar o resltado de uma async functioon

function resolveComDelay(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("Resolveu a Promise")
        },2000)
    })
}
async function chamadaAsync() {
    console.log("Chamando a Promise, e esperando o resultado")
    const result = await resolveComDelay()
    console.log(`o resultado chegou: ${result}`)
}//o await so é valido em funçoes assincrinas