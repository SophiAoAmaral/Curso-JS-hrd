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