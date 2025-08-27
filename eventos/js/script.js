// adicionando eventos

const btn = document.querySelector("#my-button")

btn.addEventListener("click", function(){
    alert("clicou em mim")
})

//removendo evento

const secondbtn = document.querySelector("#btn")

function imprimirMensagem(){
    console.log("teste")
}

secondbtn.addEventListener("click", imprimirMensagem);


const thrdBttn = document.querySelector("#other-btn");
thrdBttn.addEventListener("click", ()=>{
    
    console.log("Evento removido")
    secondbtn.removeEventListener("click", imprimirMensagem)
})
//argumento do evento

const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click", (event)=>{
    console.log|(event)
})

//propagacao

const containerBtn = document.querySelector("#btn-container")
const btnInsaideContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () =>{
    console.log("Evento1")
})
btnInsaideContainer.addEventListener("click", (e) =>{
    e.stopPropagation()
    console.log("Evento2")
})

//removendo evento ´padrao

const a = document.querySelector("a")
a.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log("Nao alterou")
})

//eventos de tecla


document.addEventListener("keyup",(e)=>{
    console.log(`Soltou a tecla ${e.key} `)
})

document.addEventListener("keydown", (e)=>{
    console.log(`Apertou a tecla ${e.key}`)
})

//eventos de mouse

const mouse = document.querySelector("#mouse")

mouse.addEventListener("mousedown", ()=>{
    console.log("pressionou botao")
})
mouse.addEventListener("mouseup", ()=>{
    console.log("solto botao")
})
mouse.addEventListener("dblclick", ()=>{
    console.log("pressionou duas vezes botao")
    mouse.style.backgroundColor = "pink"
})

//movimento do mouse


document.addEventListener("mousemove", (e) =>{
    //console.log(`Posição do eixo x ${e.x} `)
})
document.addEventListener("mousemove", (e) =>{
    //console.log(`Posição do eixo y ${e.y} `)
})


//scroll

window.addEventListener("scroll", (e) =>{
     if(window.scrollY >200){
        console.log("Passamos de 200px")
     }
})

//evento de foco

const input = document.querySelector("#my-input")

input.addEventListener("focus", (e) =>{

    console.log("entrou no input")

    
})

input.addEventListener("blur", (e) =>{

    console.log("saiu no input")

    
})

//evento de carregamento da pagina

window.addEventListener("load", ()=>{
    console.log("a pagina carregou!")
})

window.addEventListener("beforeuload", (e)=>{

    e.preventDefault()
    e.returnValue = "teste";})

//debouce

const debounse = (f, delay)=>{


    let timeout

    return(...arguments) =>{
        if(timeout){
            clearTimeout(timeout)
        }
        timeout = setTimeout(()=>{
            f.apply(arguments)
        },delay)
    }
}
window.addEventListener("mousemove", debounse(() =>{
    console.log("Executando a cada 400ms")
}, 400))