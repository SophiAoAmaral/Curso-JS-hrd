//movendo-se pelo DOM

console.log(document.body)

console.log(document.body.childNodes[1])

console.log(document.body.childNodes[1].textContent)

//selecionando por tag

let listItems = document.getElementsByTagName("li")


console.log(listItems);


//selecionando por id


let title = document.getElementById("title")

console.log(title)


//selecionando por classes

let products = document.getElementsByClassName("product")

console.log(products)


//selecionano por querySelectorAll CSS

let productsQuery = document.querySelectorAll(".product")
console.log(productsQuery)


const mainContainer = document.querySelector("#main-container")

console.log(mainContainer)


//insertBefore


const p = document.createElement("p")

const header = title.parentElement// o title ja foi selecionado antes

header.insertBefore(p, title)

const p2= document.createElement("div")
const footer = document.querySelector(".footer")
footer.insertBefore(p2, footer.firstChild)


//appendChild

const navLinks = document.querySelector("nav ul")
const li = document.createElement("li")

navLinks.appendChild(li)

const produtos=document.querySelector("main div")
const p3 = document.createElement("p")
p3.textContent = "mais um paragrafo"

produtos.appendChild(p3)


//replaceChild

const h2 = document.createElement("h2")
h2.textContent = "Meu novo titulo!"

header.replaceChild(h2,title)


//creattEXTnODE
const myText = document.createTextNode("Agora vamos colocar mais um titulo")
const h3 = document.createElement("h3")
h3.appendChild(myText)
mainContainer.appendChild(h3)


//trabalhando com atributos

const firstLink = navLinks.querySelector("a")// vai pegar o primeiro elemento

firstLink.setAttribute("href", "https://www.google.com")
firstLink.setAttribute("class", "google")
firstLink.setAttribute("target", "_blanck")


//altura e largura

console.log(footer.offsetWidth)
console.log(footer.offsetHeight)
console.log(footer.clientHeight)
console.log(footer.clientWidth)


