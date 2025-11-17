//// -------------- HTML --------------------------------

const { createElement } = require("react");

// 1.1 ALTERAR CONTEUDO DO ELEMENTO

var titulo = document.querySelector("#titulo");
// console.log(titulo.innerText);
// console.log(titulo.textContent);
// console.log(titulo.innerHTML);

//titulo.innerText = "Titulo";
//titulo.textContent = "Titulo";
//titulo.innerHTML = "Titulo";

//titulo.innerText += " Super Legal";

//-------------------------------------------------------


// 1.2 CRIAR ELEMENTO
var novoElemento = document.createElement("p");

novoElemento.innerText = "bora byron";

console.log(novoElemento);

//-------------------------------------------------------

// 1.3 INSERIR ELEMENTOS
var body = document.querySelector("body");
// body.appendChild(novoElemento);

var secao = document.querySelector("#secaoPrincipal")

var paragrafo1 = document.querySelector("#secaoPrincipal p")

secao.insertBefore(novoElemento, paragrafo1);

//-------------------------------------------------------

// 1.4 TROCAR ELEMENTOS
var novoSpan = document.createElement("span");
novoSpan.innerText = " informação aparente";

console.log(novoSpan);


//-------------------------------------------------------

// 1.5 REMOVER ELEMENTOS 

//-------------------------------------------------------

// 1.6 ACESSAR E ADICIONAR ATRINUTOS

//-------------------------------------------------------

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ------------------------ CSS ---------------------

// 2.1