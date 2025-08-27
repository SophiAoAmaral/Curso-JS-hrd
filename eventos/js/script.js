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
