/* Map 
let A = [2, 3, 5, 7, 8]

let B = A.map((element, index) => {
  return element * index
})

document.body.innerText = B // console.log */

/* ForEach 

let A = [2, 3, 5, 7, 8]

A.forEach((element) => {
  console.log(element)
})

document.body.innerText = A */


/* Filter 

let A = [2, 3, 5, 7, 8]

let C = ["Ola", "Tudo bem", "Como vai", "Tudo certo", "Beleza"]

let B = C.filter((element) => {
  return element.length < 6
})

document.body.innerText = B */

/* Every = 

let A = [2, 3, 5, 7, 8, 10]

let C = ["Ola", "Tudo bem", "Como vai", "Tudo certo", "Beleza"]

let teste = A.every((element) => {
  return element < 10
})

document.body.innerText = teste */

/* Some  = retorna

let A = [2, 3, 5, 7, 8, 20]

let C = ["Ola", "Tudo bem", "Como vai", "Tudo certo", "Beleza"]

let teste = A.some((element) => {
  return element < 10
})

document.body.innerText = teste */

/* Find = retorna o valor do elemento de acordo com a regra

let A = [2, 3, 5, 7, 8, 10]

let C = ["Ola", "Tudo bem", "Como vai", "Tudo certo", "Beleza"]

let teste = A.find((element) => {
  return element > 5
})

document.body.innerText = teste */

/* FindIndex = retorna a posição do elemento de acordo com a regra

let A = [2, 3, 5, 7, 8, 10]

let C = ["Ola", "Tudo bem", "Como vai", "Tudo certo", "Beleza"]

let teste = A.findIndex((element) => {
  return element > 5
})

document.body.innerText = teste */

/* Reduce = Soma o valor anterior com o atual dos elementos do array 

let A = [2, 3, 5, 7, 8, 20]

let B = A.reduce((anterior, atual) => {
  return anterior * atual
}, 1)

document.body.innerText = B */