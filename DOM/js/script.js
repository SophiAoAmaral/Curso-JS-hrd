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
