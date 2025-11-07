
let a = 6
let nome = "José"

let user = {
  nome: "José",
  idade: 20,
  telefone: "9999-9999",
  irmaos: [
    {
      nome: "João",
      idade: 16
    },
    {
      nome: "Lara",
      idade: 24
    }
  ]
}

document.body.innerText = user.irmaos[0].nome // console.log