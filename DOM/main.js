//// -------------- HTML --------------------------------
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

//console.log(novoElemento);

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

//console.log(novoSpan);

var spanOculto = document.querySelector("#titulo span");
//console.log(spanOculto)

var elementoPaiSpanOculto = spanOculto.parentNode;

elementoPaiSpanOculto.replaceChild(novoSpan, spanOculto);
//-------------------------------------------------------

// 1.5 REMOVER ELEMENTOS 

var elementoPaiNovoSpan = novoSpan.parentNode;
//elementoPaiNovoSpan.removeChild(novoSpan)

//novoSpan.remove();

//-------------------------------------------------------

// 1.6 ACESSAR E ADICIONAR ATRINUTOS

//console.log(spanOculto.getAttribute("style"));

// var img = document.querySelector("img");
// console.log(img);

// img.setAttribute("alt", "imagem de teste para método setAttribute()")
// console.log(img);

//-------------------------------------------------------

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ------------------------ CSS -------------------------

// 2.1 PROPRIEDADES
//  titulo.style.fontSize = "4em";
//  titulo.style.color = "pink";

 titulo.style.cssText = "font-size: 4em; color: orange";

//  console.log(titulo.getAttribute(style));
//  console.log(window.getComputedStyle(titulo).fontSize);

//-------------------------------------------------------

// 2.2 CLASLIST

// titulo.classList.add("textoDestacado")
// titulo.classList.remove("textoDestacado")

// titulo.classList.toggle("textoDestacado", i < 10);

// console.log(titulo);

//-------------------------------------------------------

//----------------------EVENTO---------------------------

// 3.1 - addEventListener
var contador = 1;
function contadorTitulo(){

    contador++;
    titulo.innerText = `Parágrafo: ${contador}`
}

titulo.addEventListener("click", contadorTitulo);

console.log(body);