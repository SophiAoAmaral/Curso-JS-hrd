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


